# Soundex
[![npm](http://img.shields.io/npm/v/soundex-phonetics.svg?style=flat-quare)](https://npmjs.com/soundex-phonetics)
[![npm downloads](http://img.shields.io/npm/dm/soundex-phonetics.svg?style=flat-quare)](https://npmjs.com/soundex-phonetics)
[![build status](http://img.shields.io/travis/jhermsmeier/node-soundex-phonetics.svg?style=flat-quare)](https://travis-ci.org/jhermsmeier/node-soundex-phonetics)

## Install via [npm](https://npmjs.com)

```sh
$ npm install soundex-phonetics
```

## Usage

```js
var soundex = require( 'soundex-phonetics' )
```

```js
if( soundex( 'Ekzampul' ) === soundex( 'Example' ) ) {
  // It sounds similar!
}
```
