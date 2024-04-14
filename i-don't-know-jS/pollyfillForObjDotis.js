if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNagZero(x);
    var yNegZero = isItNagZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNan(x) && isItNan(y)) {
      return true;
    } else {
      return x === y;
    }

    // *********************
    function isItNagZero(value) {
      return value == 0 && 1 / value == -Infinity;
    }

    function isItNan(value) {
      return value !== value;
    }
  };
}
