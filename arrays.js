var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


var addElementToBeginningOfArray = (arr, val) => {
  var newArray = [val, ...arr]
  return newArray
}

var destructivelyAddElementToBeginningOfArray = (arr, val) => {
  arr.unshift(val)
  return arr
}

var addElementToEndOfArray = (arr, val) => {
  var newArray = [...arr, val]
  return newArray
}

var destructivelyAddElementToEndOfArray = (arr, val) => {
  arr.push(val)
  return arr
}
