import { useRef, useState } from 'react';
import Head from 'next/head';
import { IProvince } from '@/../interfaces';
import { Heading } from '../../components/Heading';
import { ProvincesList } from '../../components/ProvincesList';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home({ provinces }: { provinces: IProvince[] }) {
  const { data: session } = useSession();
  const [provincesFound, setProvincesFound] = useState<IProvince[] | null>(
    null
  );
  const listRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (query: string) => {
    const res = await fetch(`/api/provinces?name=${query}`);
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
        {session ? (
          <>
            <Heading onSubmit={onSubmit} provinces={provinces} />
            <ProvincesList provinces={provincesFound} ref={listRef} />{' '}
          </>
        ) : (
          <div className='bg-primary h-screen w-full border-b-secondary border-b-4'>
            <div className='max-w-7xl mx-auto px-4 h-full w-full flex flex-col justify-center items-center'>
              <p className='text-24 md:text-32 lg:text-42 text-center text-light mb-6 md:mb-8 font-heading'>
                Not <span className='text-secondary font-heading'>signed</span>{' '}
                In
              </p>
              <Link
                href='/api/auth/signin'
                className='bg-secondary text-16 md:text-24 font-bold text-light px-4 py-2 rounded-lg'>
                Sign In
              </Link>
            </div>
          </div>
        )}
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
