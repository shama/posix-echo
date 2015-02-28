# [ix-echo](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/echo.html)

A POSIX-like `echo` in JavaScript.

[![NPM](https://nodei.co/npm/ix-echo.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ix-echo/)

[![build status](https://secure.travis-ci.org/shama/ix-echo.svg)](https://travis-ci.org/shama/ix-echo)
[![Build status](https://ci.appveyor.com/api/projects/status/jm3cp41m3j6mnji4)](https://ci.appveyor.com/project/shama/ix-echo)
[![NPM version](https://badge.fury.io/js/ix-echo.svg)](https://badge.fury.io/js/ix-echo)

<!-- [![browser support][https://ci.testling.com/shama/ix-echo.png]][https://ci.testling.com/shama/ix-echo] -->
[![Sauce Test Status](https://saucelabs.com/browser-matrix/shama.svg)](https://saucelabs.com/u/shama)

## CLI

```shell
echo "hi" > msg.file
```

## API

```js
var Echo = require('ix-echo')
```

### `var echo = new Echo(argv)`
Returns a transform stream. `argv` can be:

* `_`: An array of arguments to echo; such as `echo one two three`

# license
(c) 2015 Kyle Robinson Young. MIT License
