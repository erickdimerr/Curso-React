import "./CarDetails.css"

const CarDetails = ({brand, age}) => {
  return (
    <div className="cars_details">
        <h3>
          <p>Marca: {brand}</p>
          <p>Ano: {age}</p>
        </h3>
    </div>
  );
}

export default CarDetails