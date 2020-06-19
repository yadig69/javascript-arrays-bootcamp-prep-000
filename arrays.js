var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


var addElementToBeginningOfArray = (arr, val) => {
  var newArray = [val, ...arr]
  return newArray
}
