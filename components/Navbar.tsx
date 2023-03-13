import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className='bg-light w-full border-b-secondary border-b-4 fixed top-0 z-40'>
      <div className='max-w-7xl mx-auto py-3 px-4 md:px-8 h-full w-full flex justify-between items-center'>
        <Link
          href='/'
          className='text-16 md:text-24 font-extrabold flex items-center'>
          <Image
            src='/favicon.jpg'
            width={42}
            height={42}
            alt='logo'
            className='inline rounded-full mr-2 drop-shadow-lg'
          />
          <span className='hidden md:inline-block ml-2 opacity-80'>
            Latitude & Longitude
          </span>
        </Link>
        {session && (
          <div className='flex items-center gap-4 md:gap-8'>
            <p className='hidden sm:flex items-center font-semibold text-16 '>
              Hello
              {session.user?.image && (
                <Image
                  className='rounded-full ml-2 mr-1 drop-shadow-lg '
                  src={session.user.image}
                  width={32}
                  height={32}
                  alt='profile picture'
                />
              )}
              {session.user?.name}!
            </p>
            <Link
              href='/api/auth/signout'
              className='bg-secondary text-16 font-bold text-light px-4 py-2 rounded-lg'>
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
