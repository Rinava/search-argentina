import Head from 'next/head';
import SearchBar from '@/../components/SearchBar';
import SideBar from '@/../components/SideBar';
import Card from '@/../components/Card';
import { useState } from 'react';

export default function Home({ provinces }) {
  const [provincesFound, setProvincesFound] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    console.log(nombre);

    const getProvinces = async () => {
      const res = await fetch(`/api/provinces?nombre=${nombre}`);
      const data = await res.json();
      const provincesFound = data.provincias;
      setProvincesFound(provincesFound);
    };
    getProvinces();
  };

  return (
    <div className='flex'>
      <Head>
        <title>Search In Argentina</title>
        <meta name='description' content='App to search a place in Argentina' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-1 flex-col items-center'>
        <h1 className='text-4xl font-bold mt-10 mb-10'>
          Search Provinces In Argentina
        </h1>
        <SearchBar onSubmit={onSubmit} />
        {provincesFound &&
          provincesFound.map((province) => (
            <Card province={province} key={province.id} />
          ))}
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
