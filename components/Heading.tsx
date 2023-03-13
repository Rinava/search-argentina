import Image from 'next/image';
import Link from 'next/link';

import { IProvince } from '../interfaces';

import { SearchBar } from './SearchBar';

interface HeadingProps {
  onSubmit: (query: string) => void;
  provinces: IProvince[];
}

const Province = ({ province }: { province: IProvince }) => (
  <Link
    className={
      'relative overflow-hidden text-12 bg-light p-1 md:p-2 border-secondary border md:border-2 uppercase group text-center'
    }
    href={`/provinces/${province.nombre}`}>
    {province.nombre}
    <div className='absolute font-bold flex justify-center items-center -bottom-full left-0 w-full h-full bg-secondary group-hover:-bottom-0 transition-all duration-300 pointer-events-none text-center'>
      {province.nombre}
    </div>
  </Link>
);

export const Heading = ({ onSubmit, provinces }: HeadingProps) => {
  return (
    <div className='relative overflow-hidden bg-primary min-h-screen w-full pt-32 flex flex-col justify-center border-b-secondary border-b-4'>
      <Image
        src='/sol.svg'
        width={1920}
        height={1080}
        alt=''
        className='w-[150vw] max-w-[1920px] absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 opacity-10'
      />
      <div className='z-10 max-w-7xl mx-auto px-4 h-full w-full flex flex-col justify-center items-center'>
        <h1 className='text-24 md:text-32 lg:text-42 text-center text-light mb-6 md:mb-8 font-heading'>
          Search Latitude and Longitude
          <br />
          in <span className='text-secondary font-heading'>
            {' '}
            Argentinian{' '}
          </span>{' '}
          Provinces
        </h1>

        <SearchBar
          onSubmit={onSubmit}
          className='mb-8 md:mb-12 w-full max-w-3xl'
        />

        <hr className='w-full max-w-3xl border-light border-dashed border-1 mb-6 md:mb-8' />
        <p className='text-16 md:text-24 text-light mb-6 md:mb-8 text-center'>
          Not sure which to search? Check out the list below:
        </p>
        <div className='max-w-3xl flex flex-wrap justify-center gap-1 md:gap-2 mb-12'>
          {provinces.map((province) => (
            <Province province={province} key={province.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
