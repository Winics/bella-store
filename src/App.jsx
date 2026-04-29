import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Produto from "./pages/Produto"
import Carrinho from "./pages/Carrinho"
import Contato from "./pages/Contato"
import Admin from "./pages/Admin"

import CartDrawer from "./components/CartDrawer"
import Header from "./components/Header"

function App() {
  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <Header onOpenCart={() => setOpenCart(true)} />

      {openCart && (
        <CartDrawer onClose={() => setOpenCart(false)} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App