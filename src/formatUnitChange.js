/**
 *
 * @param {Number} fileSize 待处理的数值
 * @param {String} type1 数值的当前类型，默认为'B'
 * @param {String} type2 数值转换的类型，默认为'K'
 * @param {Number} toFixedNumber 保留小数点，默认3位小数
 * @param {Number} numberSize  数值的进位，默认为1024
 * @returns size
 */
function formatUnitChange(
  fileSize,
  type1 = "B",
  type2 = "K",
  toFixedNumber = 3,
  numberSize = 1024
) {
  // 整数不取小数点
  function isInteger(size, toFixedNumber) {
    if (parseInt(size, 10) === size) {
      return size;
    }
    return size.toFixed(toFixedNumber);
  }
  fileSize = Number(fileSize) || 0;

  switch (type1) {
    case `K`:
      fileSize = fileSize * numberSize;
      break;
    case `M`:
      fileSize = fileSize * numberSize ** 2;
      break;
    case `G`:
      fileSize = fileSize * numberSize ** 3;
      break;
    case `T`:
      fileSize = fileSize * numberSize ** 4;
      break;
    case `P`:
      fileSize = fileSize * numberSize ** 5;
      break;

    default:
      break;
  }
  let numberChange = 1;
  switch (type2) {
    case `K`:
      numberChange = numberChange * numberSize;
      break;
    case `M`:
      numberChange = numberChange * numberSize ** 2;
      break;
    case `G`:
      numberChange = numberChange * numberSize ** 3;
      break;
    case `T`:
      numberChange = numberChange * numberSize ** 4;
      break;
    case `P`:
      numberChange = numberChange * numberSize ** 5;
      break;
    default:
      break;
  }
  return isInteger(fileSize / numberChange, toFixedNumber);
}

export default formatUnitChange;
