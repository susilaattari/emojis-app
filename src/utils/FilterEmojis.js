export const FilterEmojis = ({ emojisData, searchText = "", maxData = 20 }) => {
  const filterEmojisData = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  });
  return filterEmojisData.splice(0, maxData);
};
