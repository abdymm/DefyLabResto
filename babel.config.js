module.exports = function (api) {
  const commonPath = './src/common/';
  const featuresPath = './src/features/';
  const pathAliases = {
    // Common
    '@Constants': `${commonPath}constants`,
    '@Components': `${commonPath}components`,
    '@Navigations': `${commonPath}navigations`,
    '@Services': `${commonPath}services`,
    '@Stores': `${commonPath}stores`,
    '@Utils': `${commonPath}utils`,

    // Feature
    '@Restaurant': `${featuresPath}Restaurant`,
  };
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: pathAliases,
        },
      ],
    ],
  };
};
