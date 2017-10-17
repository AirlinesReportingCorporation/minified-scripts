# ARC Webpack Scripts
Minified Scripts used for ARC Travel Connect

## Install
Clone the git repository and make sure to install the node modules:

```shell
git clone https://github.com/AirlinesReportingCorporation/minified-scripts.git

cd minified-scripts

npm install
```

#  Usage
To compile use:

```shell
npm start
```

### Folder Structure
```
minified-scripts/
|
|-- src/
|  |-- arctravelconnect.js
|  |-- arctravelconnect-highlights.js
|  |-- tc.scss
|  |-- tc-hl.scss
|  |-- partials / 
|
|-- dist/
|  |-- tc.min.js
|  |-- tc-hl.min.js
|  |-- tc.min.css
|  |-- tc-hl.min.css
|
|-- webpack.config.js
|
|-- package.json

```

## Javascript
This repository uses [https://webpack.js.org/](webpack) as the primary bundler with [https://babeljs.io/](babel) to provide support for ES6 syntax.  Scripts compile to the `dist/` directory.

## CSS
This repository uses [http://sass-lang.com/](SASS) to as a css pre-compiler and compiles to the `dist/` directory.