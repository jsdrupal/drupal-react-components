const path = require('path');
const webpack = require('webpack');
const Minify = require('babel-minify-webpack-plugin');

const productionPluginDefine =
  process.env.NODE_ENV === 'production'
    ? [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new Minify(),
      ]
    : [];

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build'),
      library: 'DrupalReactComponents',
      libraryTarget: 'umd',
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    plugins: productionPluginDefine,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  modules: false,
                  useBuiltIns: 'entry',
                  targets: {
                    browsers: [
                      'chrome >= 62',
                      'edge >= 15',
                      'fireFox >= 56',
                      'safari >= 11',
                      'opera >= 47',
                    ],
                  },
                },
              ],
            ],
          },
        },
      ],
    },
  },
];
