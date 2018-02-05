const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        //__dirname é uma varável de ambiente do node.
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        //criou uma instância dele para dizer o nome do arquivo que vai gerar a partir do Parser que vai fazer em cima do CSS.
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            //para interpretar as duas extensões como o .js e/ou .jsx
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            //isso é para o webpack interpretar ou processar esses arquivos.
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, 
            loader: 'file-loader'        
        }]
    }
}