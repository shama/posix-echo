# [posix-echo](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/echo.html)

A POSIX `echo` in JavaScript.

[![NPM](https://nodei.co/npm/posix-echo.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/posix-echo/)

[![build status](https://secure.travis-ci.org/shama/posix-echo.svg)](https://travis-ci.org/shama/posix-echo)
[![Build status](https://ci.appveyor.com/api/projects/status/c15rf5fkw1g1cfqd)](https://ci.appveyor.com/project/shama/posix-echo)
[![NPM version](https://badge.fury.io/js/posix-echo.svg)](https://badge.fury.io/js/posix-echo)

<!-- [![browser support][https://ci.testling.com/shama/posix-echo.png]][https://ci.testling.com/shama/posix-echo] -->
[![Sauce Test Status](https://saucelabs.com/browser-matrix/shama.svg)](https://saucelabs.com/u/shama)

## CLI

```shell
echo "hi" > msg.file
```

## API

```js
var echo = require('posix-echo')
```

### `var echo = new echo(argv)`
Returns a transform stream. `argv` can be:

* `_`: An array of arguments to echo; such as `echo one two three`

# license
(c) 2015 Kyle Robinson Young. MIT License
