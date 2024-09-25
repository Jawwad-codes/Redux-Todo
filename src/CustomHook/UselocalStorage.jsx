export const uselocalStorage = (key) => {
  const set_Item = (key, value) => {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  const get_Item = () => {
    const item = window.localStorage.getItem(key);
    console.log("Getting from localStorage:", item);
    return item ? JSON.parse(item) : [];
  };
  const remove = () => {
    window.localStorage.removeItem(key);
  };
  return { set_Item, get_Item, remove };
};
