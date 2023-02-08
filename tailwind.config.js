/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_purple: '#635FC7',
        hover_purple: '#A8A4FF',
        dark_grey: '#2B2C37',
        medium_grey: '#828FA3',
        light_grey: '#F4F7FD',
        very_dark_grey: '#20212C',
        dark_lines: '#3E3F4E',
        light_lines: '#E4EBFA',
        white: '#FFFFFF',
        black: '#000112',
        main_red: '#EA5555',
        hover_red: '#FF9898',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
