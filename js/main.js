var elList = document.querySelector(".box__list");


for (var pokemon of pokemons) {
  //CREATE
  var newItem = document.createElement("li");
  var newItemBodyTop = document.createElement("div");
  var newItemImg = document.createElement("img");
  var newItemBodyBottom = document.createElement("div");
  var newItemIcon = document.createElement("img");
  var newItemTitle = document.createElement("h5");
  var newItemDescType = document.createElement("p");
  var newItemBodyElement = document.createElement("div");
  var newItemBodyElementWidth = document.createElement("p");
  var newItemBodyElementAge = document.createElement("p");

  //SETATRIBUT:
  newItem.setAttribute("class", "list__item");
  newItemBodyTop.setAttribute("class", "list__item-body-main");
  newItemImg.setAttribute("class", "list__item-img");
  newItemImg.setAttribute("src", pokemon.img);
  newItemBodyBottom.setAttribute("class", "list__item-body-footer");
  newItemIcon.setAttribute("class", "list__item-icon");
  newItemTitle.setAttribute("class", "list__item-title");
  newItemDescType.setAttribute("class", "list__item-desc-type");
  newItemBodyElement.setAttribute("class", "list__item-bottom");
  newItemBodyElementWidth.setAttribute("class", "list__item-bottom-weight");
  newItemBodyElementAge.setAttribute("class", "list__item-bottom-age");

  //TEXT CONTENT:
  newItemTitle.textContent = pokemon.name;
  newItemDescType.textContent = pokemon.type;
  newItemBodyElementWidth.textContent = pokemon.weight;
  newItemBodyElementAge.textContent = pokemon.height;

  //APPENDCHILD:
  elList.appendChild(newItem);
  newItem.appendChild(newItemBodyTop);
  newItemBodyTop.appendChild(newItemImg);
  newItem.appendChild(newItemBodyBottom);
  newItemBodyBottom.appendChild(newItemIcon);
  newItemBodyBottom.appendChild(newItemTitle);
  newItemBodyBottom.appendChild(newItemDescType);
  newItemBodyBottom.appendChild(newItemBodyElement);
  newItemBodyElement.appendChild(newItemBodyElementWidth);
  newItemBodyElement.appendChild(newItemBodyElementAge);
}
