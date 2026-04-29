import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import products from "../data/products"
import styles from "./Produto.module.css"
import { useCart } from "../context/CartContext"

function Produto() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === id)

  if (!product) return <p>Produto não encontrado</p>

  // 🔥 SIMILARES
  const similares = products.filter(
    (p) => p.classe === product.classe && p.id !== product.id
  )

  const [tamanho, setTamanho] = useState(null)
  const [cor, setCor] = useState(null)
  const [imagemSelecionada, setImagemSelecionada] = useState(
    product.imagens?.[0]
  )

  function comprarAgora() {
    if (product.preco === 0) return

    if (!tamanho || !cor) {
      alert("Selecione tamanho e cor")
      return
    }

    let mensagem = `Olá, quero comprar:\n\n`
    mensagem += `Produto: ${product.nome}\n`
    mensagem += `Tamanho: ${tamanho}\n`
    mensagem += `Cor: ${cor.nome}\n`
    mensagem += `Preço: R$ ${product.preco}`

    const numero = "5599999999999"

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
  }

  function adicionarCarrinho() {
    if (product.preco === 0) return

    if (!tamanho || !cor) {
      alert("Selecione tamanho e cor")
      return
    }

    addToCart({
      ...product,
      tamanho,
      cor: cor.nome
    })
  }

  return (
    <div className="container">
      <div className={styles.container}>

        {/* GALERIA */}
        <div className={styles.gallery}>
          <img
            src={imagemSelecionada}
            alt={product.nome}
            className={styles.mainImage}
          />

          <div className={styles.thumbs}>
            {product.imagens?.map((img) => (
              <img
                key={img}
                src={img}
                alt="thumb"
                className={`${styles.thumb} ${
                  imagemSelecionada === img ? styles.thumbActive : ""
                }`}
                onClick={() => setImagemSelecionada(img)}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className={styles.info}>
          <h1 className={styles.nome}>{product.nome}</h1>

          <p className={styles.preco}>
            {product.preco === 0 ? "Gratuito" : `R$ ${product.preco}`}
          </p>

          {/* TAMANHOS */}
          {product.tamanhos?.length > 0 && (
            <div className={styles.section}>
              <p className={styles.label}>Tamanho:</p>

              <div className={styles.options}>
                {product.tamanhos.map((t) => (
                  <div
                    key={t}
                    className={`${styles.size} ${
                      tamanho === t ? styles.sizeActive : ""
                    }`}
                    onClick={() => setTamanho(t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CORES */}
          {product.cores?.length > 0 && (
            <div className={styles.section}>
              <p className={styles.label}>Cor:</p>

              <div className={styles.options}>
                {product.cores.map((c) => (
                  <div
                    key={c.nome}
                    className={`${styles.color} ${
                      cor?.nome === c.nome ? styles.colorActive : ""
                    }`}
                    style={{ background: c.codigo }}
                    title={c.nome}
                    onClick={() => setCor(c)}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* BOTÕES */}
          <div className={styles.buttons}>
            {product.preco > 0 && (
              <>
                <button
                  className={styles.buttonPrimary}
                  onClick={comprarAgora}
                >
                  Comprar agora
                </button>

                <button
                  className={styles.buttonSecondary}
                  onClick={adicionarCarrinho}
                >
                  Adicionar ao carrinho
                </button>
              </>
            )}

            {product.preco === 0 && product.download && (
              <a href={product.download} download>
                <button className={styles.buttonPrimary}>
                  Baixar molde grátis
                </button>
              </a>
            )}
          </div>

          {/* DESCRIÇÃO */}
          <p className={styles.descricao}>{product.descricao}</p>

          {/* 🎥 VÍDEO */}
          {product.video && (
            <div className={styles.video}>
              <iframe
                src={product.video}
                title="Vídeo do produto"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* 🔥 PRODUTOS SIMILARES */}
      {similares.length > 0 && (
        <div className={styles.similares}>
          <h2>Produtos semelhantes</h2>

          <div className={styles.grid}>
            {similares.map((item) => (
              <Link to={`/produto/${item.id}`} key={item.id}>
                <div className={styles.card}>
                  <img
                    src={item.imagens?.[0]}
                    alt={item.nome}
                  />
                  <p>{item.nome}</p>
                  <span>
                    {item.preco === 0 ? "Gratuito" : `R$ ${item.preco}`}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Produto