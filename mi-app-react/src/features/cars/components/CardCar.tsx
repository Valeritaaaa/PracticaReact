import { Link } from "react-router-dom"
import "../styles/CardCar.css"
import type { Car } from "../types/Cars";

interface CardCarProps {
  car: Car;
}

const CardCar = ({car}: CardCarProps) => {
  return (
    <article className="card-car">
      <div className="card-car__media">
        <img className="card-car__image" src={car.image} alt={`Ilustración de ${car.name}`} />

        <span className="card-car__badge">{car.type}</span>
        <span className="card-car__fav" aria-hidden="true">♡</span>
      </div>

      <div className="card-car__body">
        <p className="card-car__location">{car.location}</p>
        <h3 className="card-car__name">{car.name}</h3>

        <div className="card-car__specs">
          <span className="card-car__spec">{car.year}</span>

          <span className="card-car__spec">{car.mileage.toLocaleString("es-CR")} km</span>

          <span className="card-car__spec">{car.seats} pasajeros</span>
        </div>

        <div className="card-car__footer">
          <strong className="card-car__price">USD {car.price.toLocaleString("es-CR")}</strong>

          <Link className="card-car__link" to={`/cars/${car.id}`}>Ver detalle →</Link>
        </div>
      </div>
    </article>
  )
}

export default CardCar
