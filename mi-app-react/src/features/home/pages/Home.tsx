import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import CardCarList from "../../cars/components/CardCarList"
import Experience from "../components/Experience"
import cars from "../../../../public/data/cars.json"


const Home = () => {
  const featuredCars = cars.filter((car) => car.featured).slice(0, 3);
  return (
     <main className="home">
      <Hero />

      <section className="home__featured">
        <div className="container">
          <div className="home__header">
            <div>
              <p className="eyebrow">Selección destacada</p>

              <h2 className="home__title">Conozca la colección</h2>
            </div>

            <Link className="text-link" to="/cars">Ver todos los autos →</Link>
          </div>

          <CardCarList cars={featuredCars} />
        </div>

        <Experience />
      </section>
    </main>
  )
}

export default Home
