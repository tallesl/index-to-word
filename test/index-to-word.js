var assert      = require('assert')
  , indexToWord = require('../lib/index-to-word')

it('should find the word', function () {

  // o   n   e       t   w   o       t   h   r   e   e       f   o   u   r
  // 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17
  var text = 'one two three four'

  assert.equal(indexToWord(text,  0), 'one')
  assert.equal(indexToWord(text,  1), 'one')
  assert.equal(indexToWord(text,  2), 'one')

  assert.equal(indexToWord(text,  3), 'two')
  assert.equal(indexToWord(text,  4), 'two')
  assert.equal(indexToWord(text,  5), 'two')
  assert.equal(indexToWord(text,  6), 'two')

  assert.equal(indexToWord(text,  7), 'three')
  assert.equal(indexToWord(text,  8), 'three')
  assert.equal(indexToWord(text,  9), 'three')
  assert.equal(indexToWord(text, 10), 'three')
  assert.equal(indexToWord(text, 11), 'three')
  assert.equal(indexToWord(text, 12), 'three')

  assert.equal(indexToWord(text, 13), 'four')
  assert.equal(indexToWord(text, 14), 'four')
  assert.equal(indexToWord(text, 15), 'four')
  assert.equal(indexToWord(text, 16), 'four')
  assert.equal(indexToWord(text, 17), 'four')

})

it('should return the given text', function () {

  assert.equal(indexToWord('@', 0), '@')

  assert.equal(indexToWord('swordfish', 0), 'swordfish')
  assert.equal(indexToWord('swordfish', 7), 'swordfish')
  assert.equal(indexToWord('swordfish', 8), 'swordfish')

})

it('should return null', function () {

  assert.equal(indexToWord('',  0), null)
  assert.equal(indexToWord('@', 1), null)

  assert.equal(indexToWord('swordfish',  9), null)
  assert.equal(indexToWord('swordfish', 99), null)

})

it('should throw', function () {

  assert.throws(function () { indexToWord()        })
  assert.throws(function () { indexToWord(0)       })
  assert.throws(function () { indexToWord(null)    })
  assert.throws(function () { indexToWord('')      })
  assert.throws(function () { indexToWord('', '')  })
  assert.throws(function () { indexToWord('', 1.2) })

})

