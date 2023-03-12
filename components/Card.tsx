const Card = ({ province }) => {
  const {
    nombre,
    centroide: { lat, lon },
  } = province;
  return (
    <div className='bg-white shadow-md rounded-lg p-4 w-80'>
      <h3 className='text-xl font-bold'>{nombre}</h3>
      <p className='text-gray-500'>Latitude {lat}</p>
      <p className='text-gray-500'>Longitude {lon}</p>
    </div>
  );
};

export default Card;
