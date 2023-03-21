/**
 *
 * @param {Array} array 待处理数组
 * @param {Function / String} comparator 迭代器
 * @returns 新的数组
 */
function filterField(array, comparator) {
  const comparatorFunc = typeof comparator === "function";
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (comparatorFunc ? comparator(array[i]) : array[i][comparator]) {
      if (array[i].children && array[i].children.length > 0) {
        const filteredChildren = filterCodeThree(array[i].children);
        if (filteredChildren.length > 0) {
          array[i].children = filteredChildren;
        }
      }
      result.push(array[i]);
    } else if (array[i].children && array[i].children.length > 0) {
      const filteredChildren = filterCodeThree(array[i].children);
      if (filteredChildren.length > 0) {
        result.push(array[i]);
        array[i].children = filteredChildren;
      }
    }
  }
  return result;
}

export default filterField;
