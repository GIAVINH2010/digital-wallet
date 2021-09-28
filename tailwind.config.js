module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "auth-ronin": "url('assets/images/auth-background.svg')",
        "home-ronin": "url('assets/images/home-background.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
