import isArray from "./isArray";
/**
 *
 * @param {Array} array 待处理的数组
 * @param {String} key 组成对象的键
 * @param {String} value 组成对象的值
 * @returns (Object): 返回生成的新对象
 */
function array2obj(array, key = "key", value = "value") {
  const object = {};
  if (!isArray(array)) {
    return console.error("传入的不是数组");
  }
  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    object[item[key]] = item[value];
  }
  return object;
}
export default array2obj;
