var test = require('tape')
var Cat = require('../index.js')

function assertResult(s, cb) {
  var result = ''
  s.on('data', function(data) {
    result += data.toString().replace('\r', '')
  }).on('end', function() {
    cb(result)
  })
}

test('concat files', function(t) {
  t.plan(1)
  var cat = new Cat({
    _: ['test/fixtures/one.js', 'test/fixtures/two.js'],
  })
  cat.write('// before\n')
  assertResult(cat, function(result) {
    t.equal(result, '// before\nvar one = true;\nvar two = true;\n')
  })
})
