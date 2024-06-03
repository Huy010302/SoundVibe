export const getLimitItems = (data, limit = 10) => {
  if (!Array.isArray(data) || data.length === 0 || !Number.isInteger(limit))
    return;
  if (data.length <= limit) return data;

  let arr = [];
  let i = 0;
  while (i < limit) {
    arr.push(data[i]);
    i++;
  }

  return arr;
};
