
import CardCar from "./CardCar"
import "../styles/CardCarList.css"
import type { Car } from "../types/Cars";

interface CardListProps {
  cars: Car[];
}

const CardCarList = ({cars}: CardListProps) => {
  return (
    <div className="card-list">
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>

  )
}

export default CardCarList
