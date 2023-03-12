import { motion } from 'framer-motion';
const SearchBar = ({ onSubmit }) => {
  return (
    <form
      className='flex items-center justify-center w-full h-20 bg-gray-100'
      onSubmit={onSubmit}>
      <motion.input
        type='text'
        placeholder='Misiones'
        className='w-1/2 h-10 px-5 pr-10 text-sm text-gray-700 bg-white rounded-full focus:outline-none'
        minLength={2}
        required
        animate = {{
          scale: [1, 1.2, 1, 1.2, 1],

          backgroundColor: ['#0ea5e9', '#f8e71c', '#0ea5e9', '#f8e71c', '#0ea5e9'],
        }}
        transition = {{
          duration: 1
        }}

      />
      <motion.button
        type='submit'
        className='w-20 h-10 px-5 text-sm font-bold text-white bg-blue-500 rounded-full m-10'
        whileHover={{
          scale: 1.3,
          color: '#0ea5e9',
          backgroundColor: '#f8e71c',
        }}
        whileTap={{ scale: 0.9 }}>
        Search
      </motion.button>
    </form>
  );
};

export default SearchBar;
