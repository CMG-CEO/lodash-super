/**
 *
 * @param {Number} n 生成的位数
 * @param {Number} low 最小值，默认a
 * @param {Number} low 最大值，默认z
 * @returns String
 */
function randomStr(n = 5, low = 97, low = 122) {
  let str = "";
  for (let i = 0; i < n; i++) {
    const min = Math.ceil(low);
    const max = Math.floor(low);
    const random = Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    str += String.fromCharCode(random);
  }
  return str;
}

export default randomStr;
