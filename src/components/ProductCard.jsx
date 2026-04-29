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
                src={product.imagens[0]}
                alt={product.nome}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3 className={styles.nome}>{product.nome}</h3>

                <p className={styles.preco}>
                    R$ {product.preco}
                </p>

                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product)
                    }}
                >
                </button>
            </div>
        </div>
    )
}

export default ProductCard