const sharedPresets = [
  '@babel/typescript',
  [
    '@babel/preset-react',
    {
      runtime: 'automatic',
    },
  ],
];
const shared = {
  presets: sharedPresets,
  ignore: [
    'src/**/*.stories.ts',
    '**/*.test.tsx',
    '**/*.d.ts',
    '**/*.js',
    '**/*.mdx',
    '**/.storybook/**/*',
    '**/.jest/**/*',
  ],
};

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  env: {
    esmUnbundled: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
        ...sharedPresets,
      ],
    },
    esmBundled: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            targets: '> 0.25%, not dead',
            modules: false,
          },
        ],
        ...sharedPresets,
      ],
    },
    cjs: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            modules: 'commonjs',
          },
        ],
        ...sharedPresets,
      ],
    },
  },
};
