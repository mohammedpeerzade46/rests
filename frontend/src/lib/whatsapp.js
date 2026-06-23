const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || "917676556639";

export function getWhatsAppNumber() {
  return WHATSAPP_NUMBER;
}

export function buildOrderMessage({ items, total, name, phone }) {
  const lines = ["Hello,", "", "I'd like to place an order.", ""];
  items.forEach((it) => {
    lines.push(`${it.name} \u00d7${it.qty}  \u2014  \u20b9${it.price * it.qty}`);
  });
  lines.push("");
  lines.push(`Total: \u20b9${total}`);
  lines.push("");
  lines.push(`Name: ${name || ""}`);
  lines.push(`Phone Number: ${phone || ""}`);
  lines.push("");
  lines.push("Please confirm my order.");
  return lines.join("\n");
}

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
