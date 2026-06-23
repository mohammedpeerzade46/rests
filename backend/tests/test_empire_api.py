"""Backend API tests for EMPIRE Restaurant landing page"""
import os
import pytest
import requests
from datetime import datetime, timedelta

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8000').rstrip('/')


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "EMPIRE Restaurant API"
        assert data.get("status") == "ok"


# --- Reservations ---
class TestReservations:
    def _future_date(self):
        return (datetime.utcnow() + timedelta(days=3)).strftime("%Y-%m-%d")

    def test_create_reservation_success_and_persist(self, client):
        payload = {
            "name": "TEST_Aarav",
            "phone": "9876543210",
            "email": "test_aarav@example.com",
            "date": self._future_date(),
            "time": "19:30",
            "guests": 4,
            "occasion": "Birthday",
            "notes": "Window seat please"
        }
        r = client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["guests"] == 4
        assert data["date"] == payload["date"]
        assert data["time"] == "19:30"
        assert "id" in data and isinstance(data["id"], str)
        assert data.get("status") == "pending"
        rid = data["id"]

        # GET list and verify persistence
        gr = client.get(f"{BASE_URL}/api/reservations")
        assert gr.status_code == 200
        items = gr.json()
        assert isinstance(items, list)
        assert any(it.get("id") == rid for it in items), "Created reservation not found in list"

    def test_create_reservation_without_optional_fields(self, client):
        payload = {
            "name": "TEST_NoEmail",
            "phone": "9876500000",
            "date": self._future_date(),
            "time": "12:30",
            "guests": 2,
        }
        r = client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] is None
        assert data["guests"] == 2

    def test_invalid_guests_zero(self, client):
        payload = {
            "name": "TEST_Bad",
            "phone": "9876500000",
            "date": self._future_date(),
            "time": "12:30",
            "guests": 0,
        }
        r = client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 422

    def test_invalid_guests_too_many(self, client):
        payload = {
            "name": "TEST_Bad",
            "phone": "9876500000",
            "date": self._future_date(),
            "time": "12:30",
            "guests": 100,
        }
        r = client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 422

    def test_missing_required_fields(self, client):
        # missing date/time/guests
        r = client.post(f"{BASE_URL}/api/reservations", json={"name": "TEST_Only", "phone": "1234567"})
        assert r.status_code == 422

    def test_short_name_validation(self, client):
        payload = {
            "name": "A",
            "phone": "9876500000",
            "date": self._future_date(),
            "time": "12:30",
            "guests": 2,
        }
        r = client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 422

    def test_list_reservations_no_mongo_id_leak(self, client):
        r = client.get(f"{BASE_URL}/api/reservations")
        assert r.status_code == 200
        items = r.json()
        for it in items[:5]:
            assert "_id" not in it


# --- Contact ---
class TestContact:
    def test_create_contact_success(self, client):
        payload = {
            "name": "TEST_Contact",
            "email": "test_contact@example.com",
            "message": "Hello, I'd like to know about group bookings."
        }
        r = client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert "id" in data

    def test_contact_invalid_email(self, client):
        payload = {"name": "TEST_C", "email": "notanemail", "message": "Hi there"}
        r = client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_fields(self, client):
        r = client.post(f"{BASE_URL}/api/contact", json={"name": "TEST_C"})
        assert r.status_code == 422
