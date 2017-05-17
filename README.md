# webpack-demo
An introduction to webpack

## Pre-requisite
* Brew installed
* NPM installed via ``` brew install npm```

## Building the webpack module
**Notes:**
* package.json - scripts/build is set to "webpack"
* The following command will build the webpack module dist/bundle.json as configured by the [webpack.config.js](webpack.config.js) file
```bash
npm run build
```

## New Webpack Project Initialization

#### Initialize Project Directory
Run the following commands
```bash
mkdir [new-dir] && cd [new-dir]
npm init -y
npm install --save-dev webpack
```
#### Additional Configuration
* Set package.json - scripts/build to "webpack"

## Reference
* http://webpack.github.io/
* https://webpack.js.org/guides/get-started/
* https://webpack.js.org/concepts/module-resolution/
