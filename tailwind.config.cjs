module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "daisy-",
    darkTheme: "dark",
  },
};
