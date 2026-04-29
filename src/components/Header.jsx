import styles from "./Header.module.css"
import { useCart } from "../context/CartContext"

function Header({ onOpenCart }) {
  const { cart } = useCart()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <button className={styles.icon}>☰</button>

        <h1 className={styles.logo}>BellaGi</h1>

        <button
          className={styles.icon}
          onClick={onOpenCart}
        >
          🛒

          {/* 🔥 CONTADOR */}
          {cart.length > 0 && (
            <span className={styles.badge}>
              {cart.length}
            </span>
          )}
        </button>

      </div>
    </header>
  )
}

export default Header