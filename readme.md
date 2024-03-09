# uniport

Available on [npm](https://www.npmjs.com/package/uniport).

A simple, zero-configuration command line (CLI) tool to bundle your JavaScript projects. Leveraging the power of Webpack and Babel, `uniport` abstracts away the complexity of your build configuration into a single, easy command. Perfect for rapid development and production builds alike.

## Installation

To use `uniport` in your project, run:

```
npm install --save-dev uniport
```

This installs `uniport` as a development dependency, meaning it will be available for building your project, but won't be included in your production dependencies.

## Usage

After installation, you can use `uniport` to bundle your project or start a development server with live reloading.

### Bundling for Production

To create a production bundle of your project, add the following script to your `package.json`:

```json
"scripts": {
  "build": "uniport",
  "start": "uniport live"
}
```
Then, run:
`npm run build
`
This command bundles your application into a single file, uniport.js, located in the dist directory, ready for production use.

Custom Entry Point

uniport uses the source field in your package.json to determine the entry point of your application. If not specified, it defaults to ./src/index.js. To specify a different entry point, add a source field to your package.json like so:

```json
"source": "index.js",
"main": "dist/uniport.js",
"module": "dist/uniport.js",
"browser": "dist/uniport.js"
```

Meow <3
