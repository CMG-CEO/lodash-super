function filterBy(array, key, value, name) {
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
