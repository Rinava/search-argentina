const Card = ({ province }) => {
  const {
    nombre,
    centroide: { lat, lon },
  } = province;
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Latitude {lat}</p>
      <p>Longitude {lon}</p>
    </div>
  );
};

export default Card;
