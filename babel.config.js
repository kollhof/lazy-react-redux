module.exports = {
  plugins: [],

  presets: ['@babel/preset-react'],

  env: {
    test: {
      sourceMaps: 'both',
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current'
          }
        }]
      ],
      plugins: []
    }
  }
};
