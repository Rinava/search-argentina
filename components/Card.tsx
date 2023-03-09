const Card = ({ province }) => {
  return (
    <div>
      <h3>{province.nombre}</h3>
      <p>{province.id}</p>
    </div>
  );
};

export default Card;
