#!/usr/bin/env node
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const fs = require('fs');

// Load the user's package.json
const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = require(packageJsonPath);
const entry = packageJson.source || './src/index.js'; // Fallback to default if not specified

// Webpack configuration
const webpackConfig = {
    entry: entry,
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'uniport.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
            exclude: /node_modules/,
        }],
    },
};

const argv = process.argv.slice(2);

if (argv.includes('live')) {
    // Start development server
    const compiler = webpack(webpackConfig);
    const devServerOptions = {open: true};
    const server = new WebpackDevServer(devServerOptions, compiler);

    server.start();
}
else {
    // Production build
    webpack(webpackConfig, (err, stats) =>
    {
        if (err || stats.hasErrors()) {
            console.error('Webpack build error:', err || stats.toJson().errors);
            process.exit(1);
        }
        console.log('Webpack build completed successfully.');
    });
}
