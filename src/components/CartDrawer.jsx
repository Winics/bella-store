import styles from "./CartDrawer.module.css"
import { useCart } from "../context/CartContext"

function CartDrawer({ onClose }) {
  const { cart, total, increase, decrease, removeItem } = useCart()

  function finalizarPedido() {
    if (cart.length === 0) return

    let mensagem = "Olá, quero fazer um pedido:\n\n"

    cart.forEach((item) => {
      mensagem += `Produto: ${item.nome}\n`
      mensagem += `Quantidade: ${item.quantidade}\n`
      mensagem += `Valor unitário: R$ ${item.preco}\n`
      mensagem += `Subtotal: R$ ${item.preco * item.quantidade}\n\n`
    })

    mensagem += `Total do pedido: R$ ${total}`

    const numero = "5541991902924" // 🔥 COLOCA SEU NÚMERO AQUI

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    window.open(url, "_blank")
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>

      <div className={`${styles.drawer} ${styles.open}`}>
        <div className={styles.header}>
          <h2>Carrinho</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className={styles.content}>
          {cart.length === 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <p>{item.nome}</p>

                <div className={styles.controls}>
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>

                <p>R$ {item.preco * item.quantidade}</p>

                <button onClick={() => removeItem(item.id)}>
                  Remover
                </button>
              </div>
            ))
          )}
        </div>

        <div className={styles.footer}>
          <p className={styles.total}>
            Total: R$ {total}
          </p>

          <button
            className={styles.button}
            onClick={finalizarPedido}
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </>
  )
}

export default CartDrawer