import Head from 'next/head';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

import { IProvince } from '../../../interfaces';

import { Card } from '../../../components/Card';

export default function Provinces({ province }: { province: IProvince }) {
  const title = `${province.nombre} - Latitude and Longitude in Argentina`;

  return (
    <>
      <Head>
        <title>{title}</title>
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

export async function getServerSideProps({
  params,
  req,
  res,
}: {
  params: { nombre: string };
  req: any;
  res: any;
}) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const response = await fetch(
    `${process.env.API_URL}?nombre=${params.nombre}`
  );
  const data = await response.json();
  const provinces = data.provincias;
  const province = provinces[0];

  return {
    props: {
      province,
    },
  };
}
