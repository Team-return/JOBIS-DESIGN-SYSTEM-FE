module.exports = {
  presets: [
    [
      '@babel/preset-react',
      { targets: { browsers: ['last 2 versions', '>= 5% in KR'] } },
    ],
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
  ],
};
