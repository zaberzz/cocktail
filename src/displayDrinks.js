import get from "./getElement.js";

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    title.textContent = `Sorry, no result matched`;
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `  <a href="drink.html">
    <article class="cocktail" data-id="${id}"></article>
    <img src="${image}" alt="${name}" />
    <h3>${name}</h3>
  </a>`;
    })
    .join("");
  title.textContent = "";
  section.innerHTML = newDrinks;
};

export default displayDrinks;
