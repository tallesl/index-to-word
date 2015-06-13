var isInteger = require('is-integer')

module.exports = function (text, index) {

  checkArgs(text, index)

  if (index >= text.length) return null

  var spaces = findSpaces(text)
    , from   = spaces[spaces.length - 1] + 1
    , to     = text.length

  for (var i = 0; i < spaces.length; ++i) {
    if (spaces[i] > index) {
      from = i === 0 ? 0 : spaces[i - 1] + 1
      to   = spaces[i]
      break
    }
  }

  return text.slice(from, to)
}

function checkArgs (text, index) {
  if (typeof(text) !== 'string') throw new Error('The given text must be an string.')
  if (typeof(index) !== 'number' || !isInteger(index)) throw new Error('The given index must be an integer.')
}

function findSpaces (text) {
  return text.split('').reduce(function (spaces, current, index) {
      if (current === ' ') spaces.push(index)
      return spaces
    }, [ ])
}

