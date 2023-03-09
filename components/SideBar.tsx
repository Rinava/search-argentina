import Link from 'next/link';

const SideBar = ({ provinces }) => {
  return (
    <aside
      className='flex flex-col bg-sky-900 w-1/4 h-screen
     text-sky-300 font-mono '>
      <h2>Not sure which to investigate? </h2>
      <h3>Check out these provinces</h3>
      {provinces && (
        <ul className='flex flex-col items-center justify-center'>
          {provinces.map((province) => (
            <li
              key={province.id}
              className='text-sky-200 text-center font-bold'>
              <Link
                href={`/provinces/${province.nombre}`}
                key={province.nombre}>
                {province.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default SideBar;
