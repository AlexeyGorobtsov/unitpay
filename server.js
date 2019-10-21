const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = new express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});