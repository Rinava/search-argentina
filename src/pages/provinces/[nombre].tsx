import Head from 'next/head';

export default function Provinces({ province }) {
  return (
    <>
      <Head>
        <title>Search In Argentina</title>
        <meta name='description' content='App to search a place in Argentina' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>{province.nombre}</h1>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();
  const provinces = data.provincias;

  const paths = provinces.map((province) => ({
    params: { nombre: province.nombre },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
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
