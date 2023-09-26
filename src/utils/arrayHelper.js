export function moveItem(arr = [], fromIndex = 0, toIndex = 0) {
  let res = [...arr];
  let fromItem = res.splice(fromIndex, 1)[0]; // remove 'from' item + store it
  res.splice(toIndex, 0, fromItem); // insert stored 'from' item

  return res;
}

export function insertItem(arr = [], toIndex = 0, item = {}) {
  let res = [...arr];
  res.splice(toIndex, 0, item);
  return res;
}

export function removeItem(arr = [], removeItem = {}, fieldName = "") {
  return arr.filter((item) => item[fieldName] !== removeItem[fieldName]);
}
