import Link from 'next/link';
import { motion } from 'framer-motion';

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
            <motion.li
              key={province.id}
              className='text-sky-200 text-center font-bold'
              whileHover={{ scale: 1.4, color: '#f8e71c' }}>
              <Link
                href={`/provinces/${province.nombre}`}
                key={province.nombre}>
                {province.nombre}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default SideBar;
