# ARC Webpack Scripts
Minified Scripts used for ARC Travel Connect.  

This repository uses [https://webpack.js.org/](webpack) as the primary bundler with [https://babeljs.io/](babel) to provide support for ES6 syntax.  In addition, it also uses [http://sass-lang.com/](SASS) to as a css pre-compiler. The output directory for compiled files go to the `dist/` directory.

## Install
Clone the git repository and make sure to install the node modules:

```shell
git clone https://github.com/AirlinesReportingCorporation/minified-scripts.git

cd minified-scripts

npm install
```

## Usage
To compile use:

```shell
npm start
```

This command runs `npm webpack` in context and compiles all source files in `src/` to the `dist/` directory for production.

### Folder Structure
```
minified-scripts/
|
|-- src/
|   |-- arctravelconnect.js
|   |-- arctravelconnect-highlights.js
|   |-- tc.scss
|   |-- tc-hl.scss
|   |-- partials / 
|       |-- _TC-common.scss
|
|-- dist/
|   |-- tc.min.js
|   |-- tc-hl.min.js
|   |-- tc.min.css
|   |-- tc-hl.min.css
|
|-- webpack.config.js
|
|-- package.json

```

### Config
The webpack configuration file is located in the root as `webpack.config.js`. Any webpack options/loader configs should be made in this file.

### Additional Moudles
To add an additional module for scripts/css, add a js file under the `src/` directory and edit the `webpack.config.js` file.

```javascript
//webpack.config.js

module.exports = 
  {
    ...
    entry: {
      tc: './src/arctravelconnect.js',
      tc_hl: './src/arctravelconnect-highlights.js',
      additional_module: './src/additional_module.js'
    },
    ...
  }
```

To import styles just import the stylesheet into the js file created:

```javascript
//additional_module.js

import './additional_module.scss';

```