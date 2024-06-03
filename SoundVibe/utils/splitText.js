export const splitText = (text, getIndex) => {
  if (!text) return { result: "", orderText: "" };
  const texts = text.split(" ");

  let orderText = " ";
  texts.filter((element, idx) => {
    if (idx !== getIndex) {
      orderText += element + " ";
    }
  });

  return { result: texts[getIndex], orderText };
};
