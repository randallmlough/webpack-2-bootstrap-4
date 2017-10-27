var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: [
                     {
                       loader: 'css-loader',
                       options: { importLoaders: 1 }
                     },
                     {
                        loader: 'postcss-loader',
                        options: {
                          ident: 'postcss',
                          plugins: () => [ require('autoprefixer')() ]
                        }
                     },
                     {
                       loader: 'sass-loader'
                     },
                   ]
                 })
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
          Tether: 'tether',
          'window.Tether': 'tether',
          Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
          Button: "exports-loader?Button!bootstrap/js/dist/button",
          Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
          Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
          Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
          Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
          Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
          Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Util: "exports-loader?Util!bootstrap/js/dist/util",
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}
