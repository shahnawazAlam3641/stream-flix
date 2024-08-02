const useTruncate = (text, limit) => {
  const sentenceArr = text.split(" ");
  if (sentenceArr.length > limit) {
    text = sentenceArr.slice(0, limit).join(" ");
  }
  return text + "...";
};

export default useTruncate;
