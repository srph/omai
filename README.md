```
      • ▌ ▄ ·.  ▄▄▄· ▪  
▪     ·██ ▐███▪▐█ ▀█ ██ 
 ▄█▀▄ ▐█ ▌▐▌▐█·▄█▀▀█ ▐█·
▐█▌.▐▌██ ██▌▐█▌▐█ ▪▐▌▐█▌
 ▀█▄▀▪▀▀  █▪▀▀▀ ▀  ▀ ▀▀▀
```

# omai [![Build Status](https://travis-ci.org/srph/omai.svg?branch=master)](https://travis-ci.org/srph/omai?branch=master) [![Dependencies Status](https://david-dm.org/srph/omai.svg)](https://david-dm.org/srph/omai.svg) [![devDependency Status](https://david-dm.org/srph/omai/dev-status.svg)](https://david-dm.org/cdnjs/cdnjs#info=devDependencies) [![Author](http://img.shields.io/badge/author-@srph-blue.svg)](http://img.shields.io/badge/author-@srph-blue.svg)

Flat-swaggish website for me, built in ReactJS.

[![omai_by_seraphipod-d8joyrn](https://cloud.githubusercontent.com/assets/5093058/6418421/ee0535d8-beef-11e4-87d6-03efb4ad3ba2.png)](http://seraphipod.deviantart.com/art/omai-516806915)

[![omai-item](https://cloud.githubusercontent.com/assets/5093058/6545469/e6911c88-c5c3-11e4-8bd9-c0e23ae9b23e.png)
](http://seraphipod.deviantart.com/art/omai-work-item-518802626?ga_submit_new=10%253A1425811667)

## Color Schemes

| Hex         | Preview           |
|:-------------:|:-------------:|
| `#f1f3f5` | ![BG - `#f1f3f5`](https://cloud.githubusercontent.com/assets/5093058/6477763/5357ab80-c262-11e4-9d0f-deb54ededfd3.png) |
| `#ff5050` | ![Highlight - `#ff5050`](https://cloud.githubusercontent.com/assets/5093058/6477779/8451cf86-c262-11e4-8543-b09855ee02ec.png) |
| `#090909` | ![Highlight Alt - `#090909`](https://cloud.githubusercontent.com/assets/5093058/6477814/d254cc4c-c262-11e4-99af-21aa717d9028.png) |
| `#93a2a6` | ![Font Color - `#93a2a6`](https://cloud.githubusercontent.com/assets/5093058/6477789/ab7bbef0-c262-11e4-87d7-3be383e2e8ac.png) |

## Building

Feel free for learning or experimental purposes.

**Requirements**
- **node** `v0.10.*`. **jest-cli** `v0.3.*` does not work with *node** `>=v0.11`. And **jest-cli** `v0.4.*`  has [issues](https://github.com/facebook/jest/issues/249) [**jsdom**](https://github.com/tmpvar/jsdom), if I'm correct.
- **npm**
- **Git** (only to clone the repository)

### Installation

**Clone the repository**. Otherwise, you can just download the repository as zip.

```bash
$ git clone https://github.com/srph/omai.git && cd omai
```

**Install the dependencies**.

```
# make sure you're in the root folder of the repository
$ npm install
```

**Running**.

For now, I am not providing any node web-server script since I am using PHP's [SAPI](http://php.net/manual/en/features.commandline.webserver.php).

### Automation

```bash
$ npm test # run the tests / jest
$ npm run build # Build (for development) 
$ npm run watch # Watch for changes (like build, but also watches for files changes)
$ npm run prod # Build (for production; minifies output script, etc)
```

## Acknowledgement

Thanks to [**ReactJS**](https://facebook.github.io/react), [**Radium**](https://github.com/FormidableLabs/radium), [**Babel**](https://babeljs.io), and [**Webpack**](https://webpack.github.io)!

**omai** © 2015+, Kier Borromeo (srph).

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)