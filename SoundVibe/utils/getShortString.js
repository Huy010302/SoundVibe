export const getShortString = (str, size) => {
  if (!str || str.length <= size || str.length === 0) return str;
  const strs = str.split(" ");
  return (
    strs.reduce((strSave, item) => {
      const tmp = strSave;
      strSave += item;
      if (strSave.length <= size) strSave += " ";
      else strSave = tmp;
      return strSave;
    }, "") + "…"
  );
};
