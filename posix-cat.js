var Transform = require('readable-stream/transform')
var inherits = require('inherits')
var xtend = require('xtend')
var nextTick = require('next-tick')

function Cat(argv) {
  if (!(this instanceof Cat)) return new Cat(argv)
  var self = this
  Transform.call(self)
  this.params = xtend({
    _: [],
    u: false,
  }, argv)
  this._buffer = []
  Object.defineProperty(self, 'fs', {
    get: function() { return self.params.fs || require('fs') }
  })
  if (self.params._.length > 0) {
    nextTick(function() {
      var fs = self.params.fs
      for (var i = 0; i < self.params._.length; ++i) {
        fs.createReadStream(self.params._[i]).pipe(self)
      }
    })
  }
}
module.exports = Cat
inherits(Cat, Transform)

Cat.prototype._transform = function(chunk, enc, cb) {
  if (this.params.u) this.push(chunk)
  else this._buffer.push(chunk)
  cb()
}

Cat.prototype._flush = function(cb) {
  if (!this.params.u) this.push(this._buffer.join(''))
  cb()
}
