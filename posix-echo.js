var Readable = require('readable-stream/readable')
var inherits = require('inherits')
var xtend = require('xtend')

function Cat(argv) {
  if (!(this instanceof Cat)) return new Cat(argv)
  var self = this
  Readable.call(self)
  this.params = xtend({
    _: [],
    newline: '\n',
  }, argv)
}
module.exports = Cat
inherits(Cat, Readable)

Cat.prototype._read = function() {
  this.push(this.params._.join(' ') + this.params.newline)
  this.push(null)
}
