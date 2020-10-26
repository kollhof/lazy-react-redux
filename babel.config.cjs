module.exports = {
  plugins: [
    ['@babel/plugin-transform-react-jsx', {
      runtime: 'automatic'
    }],
  ],

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
