var test = require('tape')
var Echo = require('../posix-echo.js')

function assertResult(s, cb) {
  var result = ''
  s.on('data', function(data) {
    result += data.toString().replace('\r', '')
  }).on('end', function() {
    cb(result)
  })
}

test('echo nothing', function(t) {
  t.plan(1)
  var echo = new Echo()
  assertResult(echo, function(result) {
    t.equal(result, '\n')
  })
})

test('echo strings', function(t) {
  t.plan(1)
  var echo = new Echo({
    _: ['one', 'two'],
  })
  assertResult(echo, function(result) {
    t.equal(result, 'one two\n')
  })
})