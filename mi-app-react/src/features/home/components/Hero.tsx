import { Link } from "react-router-dom"
import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <p className="hero__eyebrow">Vale Motors · Costa Rica</p>

        <h1 className="hero__title">El auto que mueve sus planes</h1>

        <p className="hero__text">
          Una colección de vehículos para explorar a su ritmo, comparar
          características y elegir su favorito.
        </p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to="/cars">Explorar autos</Link>
          <Link className="btn btn--ghost" to="/contact">Hablar con un asesor</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
