import "./hero.css";
import heroImg from "./imagem/model2.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="hero-content container">
        <span className="tag">/ Coleção Noite</span>

        <h1>
          Elegância que <br />
          <span>abraça</span> <br />
          sua essência
        </h1>

        <p>
          Peças criadas com renda francesa e cetim premium para celebrar cada curva com sofisticação.
        </p>

        <div className="buttons">
          <Link to="/catalogo">
            <button className="primary">Explorar Coleção</button>
          </Link>

          <Link to="/catalogo/sutia">
            <button className="outline">Ver Novidades</button>
          </Link>
        </div>
      </div>

      <div className="hero-overlay-bar">
        <div className="container overlay-content">

          <div className="item">
            <strong>+500</strong>
            <span>Clientes Felizes</span>
          </div>

          <div className="item">
            <strong>100%</strong>
            <span>Qualidade Premium</span>
          </div>

          <div className="item">
            <strong>Feito à mão</strong>
            <span>Produção própria</span>
          </div>

        </div>
      </div>

    </section>
  );
}