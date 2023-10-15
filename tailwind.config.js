/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-radial':'radial-gradient(#FFF 0%, #C25600 100%);'
      }
    },
    fontFamily:{
      'comic' : ['Comic Sans MS', 'cursive'],
      'montserrat' : ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
};
