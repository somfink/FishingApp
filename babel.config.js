module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~/assets': './assets',
            '~/screens': './screens',
            '~/hooks': './hooks',
            '~/utils': './utils',
            '~/components': './components',
            '~/mocks': './mocks',
          },
        },
      ],
    ],
  };
};
