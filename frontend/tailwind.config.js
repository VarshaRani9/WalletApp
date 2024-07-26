/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'light-blue-to-white': 'linear-gradient(to right, #e3f2fd, #ffffff)',
        'gray-to-white': 'linear-gradient(to right, #f0f0f0, #ffffff)',
        'gray-green-blue': 'linear-gradient(to right, #e2e8f0, #a3d9a5, #bfdbfe)',
      },
    },
  },
  plugins: [],
};
