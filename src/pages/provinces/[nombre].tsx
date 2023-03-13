import Head from 'next/head';
import Link from 'next/link';

import { IProvince } from '../../../interfaces';

import { Card } from '../../../components/Card';

export default function Provinces({ province }: { province: IProvince }) {
  return (
    <>
      <Head>
        <title>{province.nombre} - Latitude and Longitude in Argentina</title>
        <meta name='description' content='App to search a place in Argentina' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.jpg' />
      </Head>

      <main className='bg-tertiary w-full h-screen py-24'>
        <div className='max-w-7xl mx-auto px-4'>
          <Link href='/' className='block font-bold text-24 mb-8'>
            ◄ Back
          </Link>
          <Card province={province} className='max-w-2xl mx-auto w-full' />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();
  const provinces = data.provincias as IProvince[];

  const paths = provinces.map((province) => ({
    params: { nombre: province.nombre },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { nombre: string };
}) {
  const res = await fetch(`${process.env.API_URL}?nombre=${params.nombre}`);
  const data = await res.json();
  const provinces = data.provincias;
  const province = provinces[0];

  return {
    props: {
      province,
    },
  };
}
