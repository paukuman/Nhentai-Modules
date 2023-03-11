<div style="text-align: center; font-family: Courier, sans-serif;">  
  <h1><span style="color: red">Custom</span> <span style="color: green">Console</span> <span style="color: white; background-color: black">Colors</span></h1>
</div>
<div style="text-align: center">
  <strong>Custom tools for NodeJS</strong>
</div>
<br />

<span class="badge-npmversion"><a href="https://npmjs.org/package/custom-console-colors" title="View this project on NPM"><img src="https://img.shields.io/npm/v/custom-console-colors.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/custom-console-colors" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/custom-console-colors.svg" alt="NPM downloads" /></a></span>
[![Build Status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/github/ialopezg/custom-console-colors/badge.svg?branch=main)](https://coveralls.io/github/ialopezg/custom-console-colors?branch=main)
[![All Contributors][contributors]][contributors-link]
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/ialopezg" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/ialopezg" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-paypal"><a href="https://www.paypal.me/isidrolopezg" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="Open Collective donate button" /></a></span>

 > Custom Colors and Formats to be used in NodeJS or in a Terminal console.

## Technology Stack

![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=plastic&logo=visual-studio-code)
![Shell](https://img.shields.io/badge/-Shell-blasck?style=plastic&logo=Shell)
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github)
![Node.JS](https://img.shields.io/badge/-Node.JS-black?style=plastic&logo=Node.js)
![TypeScript](https://img.shields.io/badge/-TypeScript-000000?style=flat&logo=typescript)
![JavaScript](https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=javascript)

## Features

- Compatible with both TypeScript and ES6 (I recommend to use [TypeScript](http://www.typescriptlang.org))
- Zero dependencies

## Getting started

### Requirements

- `npm v6+` or `yarn v1.17+`
- `NodeJS v8+`

### Installation

You have two options to install this repository.

1. By adding the dependency to your `package.json` file.

   ```json
   {
     "dependencies": {
       "custom-console-colors": "^0.0.1"
     }
   }
   ```

   ```bash
   # Install dependencies
   # NPM
   npm install
   # or Yarn
   yarn
   ```

2. By using a package manager
   ```bash
   # NPM
   npm install --save custom-console-color
   # or Yarn
   yarn add @ialopezg/core
   ```

### Usage

Usage:
```javascript
const { Color } = require('custom-console-color')
```

Colored text
```javascript
console.log(Color.red('Red color text'));
```

Mixed styles
```javascript
console.log(Color.red().bold('Red color text with bold style'))
```

Styled text with unstyled text
```javascript
console.log(`${Color.red('Red color')} text with ${Color.bold('unstyled')} text`)
```

__Predefining colors__
```javascript
const error = Color.red;
const log = Color.green;
const notice = Color.blue;
const warn = Color.yellow;

console.log(error('Error!'));
console.log(log('Log!'));
console.log(notice('Notice!'));
console.log(warn('Warning!'));
```

__Another awesome example__
```javascript
const appStarted = (host, port, proxy) => {
  const divider = Color.green('\n-----------------------------------')
  const ip = '127.0.0.1';

  console.log(`Server started! ${Color.green('✓')}`)
  if (proxy) {
    console.log(`Proxy initialized! ${Color.green('✓')}`)
  }

  console.log(`
${Color.bold('Access URLs:')}${divider}
Localhost: ${Color.magenta(`http://${host}:${port}`)}
      LAN: ${Color.magenta(`http://${ip}:${port}`) +
    (proxy ? `\n    Proxy: ${Color.magenta(proxy)}` : '')}${divider}
${Color.blue(`Press ${Color.italic('CTRL-C')} to stop`)}
    `)
};

appStarted('localhost', 3000, '192.168.0.255');
```

## Available Colors and Styles

### Styles

* bold
* dim
* italic
* underline
* blink
* inverse
* hidden
* strike

### Foreground colors
| Normal (ANSI) | Bright (Extended) |
| ------------- | ----------------- |
| black | brightBlack |
| red | brightRed |
| green | brightGreen |
| yellow | brightYellow |
| blue | brightBlue |
| magenta | brightMagenta |
| cyan | brightCyan|
| white | brightWhite |

### Background colors

| Normal (ANSI) | Bright (Extended) |
| --- | --- |
| bgBlack | bgBrightBlack |
| bgRed | bgBrightRed |
| bgGreen | bgBrightGreen |
| bgYellow | bgBrightYellow |
| bgBlue | bgBrightBlue |
| bgMagenta | bgBrightMagenta |
| bgCyan | bgBrightCyan |
| bgWhite | bgBrightWhite |

## People

Author - [Isidro A. Lopez G.](https://github.com/ialopezg")

## License

CustomConsoleColors is licensed under [MIT](LICENSE) license.

---

&copy; Copyright 2019-present - CustomConsoleColors by [Isidro A. López G.](https://ialopezg.com/)

[npm-image]: https://img.shields.io/npm/v/custom-console-colors.svg
[npm-url]: https://npmjs.org/package/custom-console-colors
[downloads-image]: https://img.shields.io/npm/dm/custom-console-colors.svg
[downloads-url]: https://npmcharts.com/compare/custom-console-colors?minimal=true
[travis-url]: https://app.travis-ci.com/ialopezg/custom-console-colors
[travis-image]: https://app.travis-ci.com/ialopezg/custom-console-colors.svg?branch=main&label=linux
[contributors]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[contributors-link]: #contributors
