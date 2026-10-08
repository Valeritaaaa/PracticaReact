import "../styles/CarHero.css"
import type { Car } from "../types/Cars";
//para dar la impresion cuando se entra a la pantalla
interface CarHeroProps {
  car: Car;
}
const CarHero = ({car}: CarHeroProps) => {
  return (
   <div className="car-hero">
      <img src={car.image} alt={`Ilustración de ${car.name}`} />
    </div>
 
  )
}

export default CarHero
