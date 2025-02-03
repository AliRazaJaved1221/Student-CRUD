// tailwind.config.js
module.exports = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: '5rem', // Adds default padding
    },
  },
  plugins: [],
};