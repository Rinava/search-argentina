import { useRef, useState } from 'react';

import Head from 'next/head';

import { IProvince } from '@/../interfaces';

import { Heading } from '../../components/Heading';
import { ProvincesList } from '../../components/ProvincesList';

export default function Home({ provinces }: { provinces: IProvince[] }) {
  const [provincesFound, setProvincesFound] = useState<IProvince[] | null>(
    null
  );
  const listRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (query: string) => {
    const res = await fetch(`/api/provinces?nombre=${query}`);
    const data = await res.json();

    if (res.status === 404) {
      setProvincesFound([]);
    } else {
      const provincesFound = data.provincias;
      setProvincesFound(provincesFound);
    }

    if (listRef.current) {
      setTimeout(() => {
        listRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <Head>
        <title>Search Latitude and Longitude in Argentina</title>
        <meta
          name='description'
          content='App to search latitudes and longitudes in argentinian provinces'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.jpg' />
      </Head>

      <main className='flex flex-1 flex-col items-center'>
        <Heading onSubmit={onSubmit} provinces={provinces} />
        <ProvincesList provinces={provincesFound} ref={listRef} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();
  const provinces = data.provincias;

  return {
    props: {
      provinces,
    },
  };
}
