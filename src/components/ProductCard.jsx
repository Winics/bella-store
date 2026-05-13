import { useNavigate } from "react-router-dom"
import styles from "./ProductCard.module.css"
import { useCart } from "../context/CartContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/produto/${product.id}`)}
    >
      <img
        src={product.imagens?.[0]}
        alt={product.nome}
        className={styles.image}
        onError={(e) => {
          e.target.src = "/fallback.png"
        }}
      />

      <div className={styles.content}>
        <h3 className={styles.nome}>
          {product.nome}
        </h3>

        <p className={styles.preco}>
          {product.preco === 0
            ? "Gratuito"
            : `R$ ${product.preco}`}
        </p>

        {product.preco > 0 && (
          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation()
              addToCart(product)
            }}
          >
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCard