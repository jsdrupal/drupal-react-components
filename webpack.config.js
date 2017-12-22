const path = require('path');
const webpack = require('webpack');

const productionPluginDefine = process.env.NODE_ENV === 'production' ? [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin(),
] : [];

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
                '@babel/preset-env', {
                  modules: false,
                  targets: {
                    browsers: ['last 2 versions'],
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
