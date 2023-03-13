import { IProvince } from '../interfaces';

import clsx from 'clsx';

interface CardProps {
  province: IProvince;
  className?: string;
}

export const Card = ({ province, className }: CardProps) => {
  const {
    nombre,
    centroide: { lat, lon },
  } = province;

  return (
    <div className={clsx('relative', className)}>
      <div className='relative z-10 border-4 border-dark rounded-lg bg-light h-full p-4 flex flex-col justify-between'>
        <h3 className='text-24 md:text-32 font-heading mb-16'>{nombre}</h3>
        <div>
          <p className='text-16 md:text-24'>Latitude: {lat}</p>
          <p className='text-16 md:text-24'>Longitude: {lon}</p>
        </div>
      </div>
      <div className='absolute w-full h-full -bottom-2 -right-2 rounded-lg bg-dark'></div>
    </div>
  );
};
