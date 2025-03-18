/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './*.js'],
  presets: [require ('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#28282b',
        'btn-green': '#4eccbc',
        'btn-red': '#be6e75',
      },
    },
  },
  plugins: [],
};
