module.exports = {
  presets: [
    [
      '@babel/preset-react',
      { targets: { browsers: ['last 2 versions', '>= 5% in KR'] } },
    ],
    '@babel/preset-env',
    '@babel/typescript',
  ],
};
