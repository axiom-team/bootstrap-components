const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const url = require('url')
const path = require('path')
const paths = require('./paths')
const getClientEnvironment = require('./env')
const publicPath = paths.servedPath
const shouldUseRelativeAssetPaths = publicPath === './'
const publicUrl = publicPath.slice(0, -1)
const env = getClientEnvironment(publicUrl)

process.env.NODE_ENV = 'production'

if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.')
}

const cssFilename = 'static/css/[name].[contenthash:8].css'

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {}

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: [
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: publicPath
  },
  resolve: {
    modules: ['node_modules'].concat(paths.nodePaths),
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  resolveLoader: {
    modules: [
      paths.ownNodeModules,
      paths.appNodeModules
    ]
  },
  module: {
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [{
          options: {
            configFile: path.join(__dirname, '../.eslintrc.js'),
            useEslintrc: false
          },
          loader: 'eslint-loader'
        }],
        include: paths.appSrc
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(Object.assign({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            }, {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ]
                  })
                ]
              }
            }
          ]
        }, extractTextPluginOptions))
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    // new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: cssFilename
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
