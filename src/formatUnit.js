/**
 *
 * @param {Number} fileSize 待处理的数值
 * @param {String} type 数值的当前类型，默认为'B'
 * @param {Number} toFixedNumber 保留小数点，默认2位小数
 * @param {Number} numberSize 数值的进位，默认为1024
 * @returns Object size + unit
 */
function formatUnit(
  fileSize,
  type = "B",
  toFixedNumber = 2,
  numberSize = 1024
) {
  // 整数不取小数点
  function isInteger(size, toFixedNumber = 2) {
    if (parseInt(size, 10) === size) {
      return size;
    }
    return size.toFixed(toFixedNumber);
  }
  fileSize = Number(fileSize) || 0;
  let temp = 0;

  // 根据不同的 大小 返回
  switch (type) {
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

    default:
      break;
  }
  if (fileSize < numberSize) {
    temp = isInteger(fileSize, toFixedNumber);
  } else if (fileSize < numberSize ** 2) {
    temp = isInteger(fileSize / numberSize, toFixedNumber);
    unit = "K";
  } else if (fileSize < numberSize ** 3) {
    temp = isInteger(fileSize / numberSize ** 2, toFixedNumber);
    unit = "M";
  } else if (fileSize < numberSize ** 4) {
    temp = isInteger(fileSize / numberSize ** 3, toFixedNumber);
    unit = "G";
  } else if (fileSize < numberSize ** 5) {
    temp = isInteger(fileSize / numberSize ** 4, toFixedNumber);
    unit = "T";
  } else if (fileSize < numberSize ** 6) {
    temp = isInteger(fileSize / numberSize ** 5, toFixedNumber);
    unit = "P";
  }
  return { size: temp, unit };
}

export default formatUnit;
