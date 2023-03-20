import isArray from "./isArray";

/**
 *
 * @param {Array} array 待处理的数组
 * @param {String || Array} key 需要比较的值
 * @returns true/false
 */
function repeatKey(array, key = "name") {
  let keyArray = key;
  if (!isArray(key)) {
    keyArray = [key];
  }

  const { length } = array;
  const uniq = Uniq(array, (val, val2) => {
    return (
      !!getKeyArray(val, keyArray) &&
      getKeyArray(val, keyArray) === getKeyArray(val2, keyArray)
    );
  });
  return uniq.length !== length;
}

function getKeyArray(Object, keyArray) {
  let obj = { ...Object };
  for (let index = 0; index < keyArray.length; index++) {
    const el = keyArray[index];
    if (obj === undefined) {
      return undefined;
    }
    obj = obj[el];
  }
  return obj;
}

function Uniq(array, comparator) {
  let index = -1;

  let isCommon = false;

  const { length } = array;
  const result = [];
  let seen = result;

  outer: while (++index < length) {
    let value = array[index];
    const computed = value;

    if (isCommon && computed === computed) {
      let seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!arrayIncludesWith(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}
function arrayIncludesWith(array, target, comparator) {
  if (array == null) {
    return false;
  }

  for (const value of array) {
    if (comparator(target, value)) {
      return true;
    }
  }
  return false;
}
export default repeatKey;
