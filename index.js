function countdown(callback) {
  return window.setTimeout(callback, 2000);
};

function createMultiplier(multiplierValue) {
  return function (value) {
    return multiplierValue * value
  }
}

function multipler(a,b) {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doubler = multipler.bind(null, 2);
var tripler = multipler.bind(null, 3);
