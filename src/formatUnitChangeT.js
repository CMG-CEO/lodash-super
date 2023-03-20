/**
 *
 * @param {Number} fileSize 待处理的数值
 * @param {String} type1 数值的当前类型，默认为'ms'
 * @param {String} type2 数值的当前类型，默认为'm'
 * @param {Number} toFixedNumber 保留小数点，默认3位小数
 * @returns size
 */
function formatUnitChangeT(
  fileSize,
  type1 = "ms",
  type2 = "m",
  toFixedNumber = 3
) {
  // 整数不取小数点
  function isInteger(size, toFixedNumber) {
    if (parseInt(size, 10) === size) {
      return size;
    }
    return size.toFixed(toFixedNumber);
  }
  fileSize = Number(fileSize) || 0;
  let numberSize = 60;
  switch (type1) {
    case `s`:
      fileSize = fileSize * 1000;
      break;
    case `m`:
      fileSize = fileSize * 1000 * numberSize;
      break;
    case `h`:
      fileSize = fileSize * 1000 * numberSize ** 2;
      break;
    case `d`:
      fileSize = fileSize * 1000 * numberSize ** 2 * 24;
      break;
    case `m`:
      fileSize = fileSize * 1000 * numberSize ** 2 * 24 * 30;
      break;
    case `y`:
      fileSize = fileSize * 1000 * numberSize ** 2 * 24 * 30 * 12;
      break;
    default:
      break;
  }

  let numberChange = 1;
  switch (type2) {
    case `s`:
      numberChange = 1000;
      break;
    case `m`:
      numberChange = 1000 * numberSize;
      break;
    case `h`:
      numberChange = 1000 * numberSize ** 2;
      break;
    case `d`:
      numberChange = 1000 * numberSize ** 2 * 24;
      break;
    case `m`:
      numberChange = 1000 * numberSize ** 2 * 24 * 30;
      break;
    case `y`:
      numberChange = 1000 * numberSize ** 2 * 24 * 30 * 12;
      break;
    default:
      break;
  }
  return isInteger(fileSize / numberChange, toFixedNumber);
}

export default formatUnitChangeT;
