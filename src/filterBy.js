/**
 *
 * @param {Array} array 待处理的数组
 * @param {String} key 匹配 value 的对象的键
 * @param {String} value 与 需要相等 的value值
 * @param {any} name 需要获取的对象值
 * @returns 获取到的 name 值
 */
function filterBy(array, key = "id", value, name = "name") {
  const result = [];

  if (!array.length) {
    return result;
  }
  const arrayFilter = array.filter((item) => item[key] === value);
  if (arrayFilter.length > 0) {
    arrayFilter.forEach((item) => {
      result.push(item[name]);
    });
    if (result.length <= 1) {
      return result[0];
    } else {
      return result;
    }
  }
  return undefined;
}

export default filterBy;
