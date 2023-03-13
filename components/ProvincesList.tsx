import { forwardRef } from 'react';

import { IProvince } from '../interfaces';

import { Card } from './Card';

interface ProvincesListProps {
  provinces?: IProvince[] | null;
}

export const ProvincesList = forwardRef<HTMLDivElement, ProvincesListProps>(
  ({ provinces }: ProvincesListProps, ref) => {
    return (
      <div className='w-full bg-tertiary' ref={ref}>  
        {provinces ? (
          provinces.length > 0 ? (
            <div className='relative max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 py-6 w-full mb-48'>
              {provinces.map((province: IProvince) => (
                <Card province={province} key={province.id} className='' />
              ))}
            </div>
          ) : (
            <p className='text-24 md:text-32 py-24 font-heading mx-auto text-center'>
              No results found
            </p>
          )
        ) : null}
      </div>
    );
  }
);

ProvincesList.displayName = 'ProvincesList';

