import Head from 'next/head';
import SearchBar from '@/../components/SearchBar';
import SideBar from '@/../components/SideBar';
import Card from '@/../components/Card';
import { useState } from 'react';
import { IProvince } from '@/../interfaces';

export default function Home({ provinces }: { provinces: IProvince[] }) {
  const [provincesFound, setProvincesFound] = useState<IProvince[] | null>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const nombre = e.target[0].value;

    const getProvinces = async () => {
      const res = await fetch(`/api/provinces?nombre=${nombre}`);
      const data = await res.json();

      if (data.status === 404) {
        setProvincesFound(null);
        return;
      }

      const provincesFound = data.provincias;
      setProvincesFound(provincesFound);
    };
    getProvinces();
  };

  console.log(provincesFound);

  return (
    <div className='flex'>
      <Head>
        <title>Search Latitude and Longitude in Argentina</title>
        <meta
          name='description'
          content='App to search latitudes and longitudes in argentinian provinces'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className='flex flex-1 flex-col items-center
      bg-gradient-to-t from-sky-400 to-blue-700 '>
        <h1
          className='text-3xl font-bold mt-10 mb-10 text-white text-center
        '>
          Search Latitude and Longitude <br />
          in Argentinian Provinces
        </h1>
        <SearchBar onSubmit={onSubmit} />
        {provincesFound ? (
          <div
            className='flex flex-wrap justify-center gap-4 
          mt-10 mb-10
          '>
            {provincesFound.map((province: IProvince) => (
              <Card province={province} key={province.id} />
            ))}
          </div>
        ) : (
          <p className='text-2xl font-bold mt-10 mb-10'>No results found</p>
        )}
      </main>
      <SideBar provinces={provinces} />
    </div>
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
