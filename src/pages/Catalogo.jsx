import { useState } from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import styles from "./Catalogo.module.css"

function Catalogo() {
  const [filtro, setFiltro] = useState("todos")

  const filtrados =
    filtro === "todos"
      ? products
      : products.filter((p) => p.classe === filtro)

  return (
    <div className="container">
      <h1>Catálogo</h1>

      {/* 🔥 FILTROS */}
      <div className={styles.filtros}>
        <button
          className={filtro === "todos" ? styles.active : ""}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>

        <button
          className={filtro === "sutia" ? styles.active : ""}
          onClick={() => setFiltro("sutia")}
        >
          Sutiãs
        </button>

        <button
          className={filtro === "moldes" ? styles.active : ""}
          onClick={() => setFiltro("moldes")}
        >
          Moldes
        </button>
      </div>

      {/* PRODUTOS */}
      <div className="grid-produtos">
        {filtrados.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalogo