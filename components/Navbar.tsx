import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='bg-light w-full border-b-secondary border-b-4 fixed top-0 z-10'>
      <div className='max-w-7xl mx-auto py-4 px-8 h-full w-full'>
        <Link href='/' className='text-16 md:text-24 font-extrabold'>
          LATITUDE & LONGITUDE
        </Link>
      </div>
    </div>
  );
};
