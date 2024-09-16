let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Original Burger",
    image: "burgerC.png",
    price: 42_000,
  },
  {
    id: 2,
    name: "Double Patty",
    image: "doubleBeef.png",
    price: 56_000,
  },
  {
    id: 3,
    name: "Double Cheese",
    image: "doubleCheese.png",
    price: 48_000,
  },
  {
    id: 4,
    name: "Hotdog Beef",
    image: "hotdogBeef.png",
    price: 47_000,
  },
  {
    id: 5,
    name: "Original Hotdog",
    image: "hotdogSosis.png",
    price: 32_000,
  },
  {
    id: 6,
    name: "Signature Hotdog",
    image: "originalHotdog.png",
    price: 43_000,
  },
  {
    id: 7,
    name: "Coke",
    image: "coke.png",
    price: 12_000,
  },
  {
    id: 8,
    name: "Fanta",
    image: "fanta.png",
    price: 10_000,
  },
  {
    id: 9,
    name: "Mineral",
    image: "mineral.png",
    price: 5_000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="./assets/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="./assets/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
