module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  entry: {
    // Other entry points...
    client: "./src/app/page.js", // Mark 'page.js' as a client entry
  },
};
