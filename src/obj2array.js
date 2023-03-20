/**
 *
 * @param {Object} obj 待处理的对象
 * @param {String} key 组成对象的键
 * @param {String} value 组成对象的值
 * @returns (Array): 返回生成的新数组
 */
function obj2array(obj, key = "key", value = "value") {
  const array = [];
  Object.keys(obj).forEach((ikey) => {
    const ivalue = obj[ikey];
    array.push({
      [key]: ikey,
      [value]: ivalue,
    });
  });
  return array;
}
export default obj2array;
