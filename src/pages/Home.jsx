import { Link } from "react-router-dom"
import products from "../data/products"
import styles from "./Home.module.css"
import Hero from "../components/Hero/Hero"

function Home() {
  // 🔥 produtos destaque
  const destaques = products.slice(0, 4)

  return (
    <>
      {/* HERO (fora do container) */}
      <Hero />

      <div className="container">

        {/* CATEGORIAS */}
        <section className={styles.categorias}>
          <Link to="/catalogo/sutia">Sutiãs</Link>
          <Link to="/catalogo/moldes">Moldes</Link>
        </section>

        {/* PRODUTOS */}
        <section className={styles.produtos}>
          <h2>Destaques</h2>

          <div className={styles.grid}>
            {destaques.map((item) => (
              <Link to={`/produto/${item.id}`} key={item.id}>
                <div className={styles.card}>
                  <img
                    src={item.imagens?.[0]}
                    alt={item.nome}
                  />

                  <p>{item.nome}</p>

                  <span>
                    {item.preco === 0
                      ? "Gratuito"
                      : `R$ ${item.preco}`}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* REDES */}
        <section className={styles.redes}>
          <h2>Acompanhe nas redes</h2>

          <div className={styles.links}>
            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>

            <a href="https://youtube.com" target="_blank">
              YouTube
            </a>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home