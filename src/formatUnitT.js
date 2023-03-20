/**
 *
 * @param {Number} fileSize 待处理的数值
 * @param {String} type 数值的当前类型，默认为'ms'
 * @param {Number} toFixedNumber 保留小数点，默认2位小数
 * @returns Object size + unit
 */
function formatUnitT(fileSize, type = "ms", toFixedNumber = 3) {
  // 整数不取小数点
  function isInteger(size, toFixedNumber = 3) {
    if (parseInt(size, 10) === size) {
      return size;
    }
    return size.toFixed(toFixedNumber);
  }
  fileSize = Number(fileSize) || 0;
  let temp = 0;
  let numberSize = 60;
  let unit = "ms";
  switch (type) {
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
  if (fileSize < 1000) {
    temp = isInteger(fileSize, toFixedNumber);
  } else if (fileSize < 1000 * numberSize) {
    temp = isInteger(fileSize / 1000, toFixedNumber);
    unit = "s";
  } else if (fileSize < 1000 * numberSize ** 2) {
    temp = isInteger(fileSize / (1000 * numberSize), toFixedNumber);
    unit = "m";
  } else if (fileSize < 1000 * numberSize ** 2 * 24) {
    temp = isInteger(fileSize / (1000 * numberSize ** 2), toFixedNumber);
    unit = "h";
  } else if (fileSize < 1000 * numberSize ** 2 * 24 * 30) {
    temp = isInteger(fileSize / (1000 * numberSize ** 2 * 24), toFixedNumber);
    unit = "d";
  } else if (fileSize < 1000 * numberSize ** 2 * 24 * 30 * 12) {
    temp = isInteger(
      fileSize / (1000 * numberSize ** 2 * 24 * 30),
      toFixedNumber
    );
    unit = "m";
  } else {
    temp = isInteger(
      fileSize / (1000 * numberSize ** 2 * 24 * 30 * 12),
      toFixedNumber
    );
    unit = "y";
  }
  return { size: temp, unit };
}

export default formatUnitT;
