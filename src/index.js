
exports.min = function min(array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    return array.sort((a, b) => a - b)[0];
  }

}

exports.max = function max (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    return array.sort((a, b) => b - a)[0];
  }
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) {
    return 0;
  } else {
    return array.reduce((sum, current) => sum + current) / array.length;
  }
}
