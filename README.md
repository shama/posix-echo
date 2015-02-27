# [posix-cat](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/cat.html)

A POSIX `cat` in JavaScript.

[![NPM](https://nodei.co/npm/posix-cat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/posix-cat/)

## CLI

```shell
echo "// before" | cat one.js two.js three.js > output.js
```

## API

```js
var Cat = require('posix-cat')
```

### `var cat = new Cat(argv)`
Returns a transform stream. `argv` can be:

* `_`: An array of arguments of file paths to concat; such as `cat one.js two.js three.js`
* `fs`: Override the file system with a node/io compatible fs.
* `u`: Write bytes without buffering.

# license
(c) 2015 Kyle Robinson Young. MIT License
