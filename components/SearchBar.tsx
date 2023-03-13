import clsx from 'clsx';

import { motion } from 'framer-motion';

interface SearchBarProps {
  onSubmit: (query: string) => void;
  className?: string;
}

export const SearchBar = ({ onSubmit, className }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget[0] as HTMLInputElement).value;
    onSubmit(query);
  };

  return (
    <form
      className={clsx(
        'bg-light h-12 md:h-16 border-secondary border-2 md:border-4 flex items-center justify-between',
        className
      )}
      onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='e.g. Buenos Aires'
        className='h-full text-12 md:text-16 lg:text-24 bg-transparent pl-4 flex-1'
        minLength={2}
        maxLength={60}
        required
      />
      <motion.button
        type='submit'
        whileHover={{ backgroundColor : "#fcbf45", color: "#f7f7f7" }}
        whileTap={{ scale: 0.9 }}
        className='w-16 md:w-24 text-24 text-secondary h-full border-l-2 md:border-l-4 border-secondary'>
        {'>'}
      </motion.button>
    </form>
  );
};
