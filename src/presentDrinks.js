import fetchDrinks from "./fetchDrinks.js";
const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
};

export default showDrinks;
