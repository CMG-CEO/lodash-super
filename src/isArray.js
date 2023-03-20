function isArray(arr) {
  Object.prototype.toString.call(arr) === "[object Array]";
}

export default isArray;
