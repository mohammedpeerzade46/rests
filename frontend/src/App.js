import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import MenuPage from "@/pages/MenuPage";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import FloatingCart from "@/components/empire/FloatingCart";
import CartDrawer from "@/components/empire/CartDrawer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
          <FloatingCart />
          <CartDrawer />
        </BrowserRouter>
        <Toaster richColors position="top-right" />
      </CartProvider>
    </div>
  );
}

export default App;
