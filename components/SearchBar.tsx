const SearchBar = ({ onSubmit }) => {
  return (
    <form
      className='flex items-center justify-center w-full h-20 bg-gray-100'
      onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Misiones'
        className='w-1/2 h-10 px-5 pr-10 text-sm text-gray-700 bg-white rounded-full focus:outline-none'
        minLength={2}
        required
      />
      <button
        type='submit'
        className='w-20 h-10 px-5 text-sm font-bold text-white bg-blue-500 rounded-full'>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
