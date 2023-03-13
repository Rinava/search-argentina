/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#75aadb',
      secondary: '#fcbf45',
      tertiary: '#fff8ea',
      light: '#f7f7f7',
      dark: '#1a1a1a',
      transparent: 'transparent',
    },
    fontSize: {
      42: '2.625rem',
      32: '2rem',
      24: '1.5rem',
      16: '1rem',
      12: '0.75rem',
    },
    fontFamily: {
      heading: ['Climate Crisis', 'sans-serif'],
      body: ['poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
