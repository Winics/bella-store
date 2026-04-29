import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart((prev) => {
      const existe = prev.find((item) => item.id === product.id)

      if (existe) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantidade: 1 }]
    })
  }

  function increase(itemId) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    )
  }

  function decrease(itemId) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    )
  }

  function removeItem(itemId) {
    setCart((prev) => prev.filter((item) => item.id !== itemId))
  }

  const total = cart.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        total,
        increase,
        decrease,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}