// DOM selectors
const tbody = document.querySelector("table tbody");
const incomeValue = document.querySelector(".income-value");
const outcomeValue = document.querySelector(".outcome-value");
const gainValue = document.querySelector(".gain-value");
const userNameInp = document.querySelector("#userName");
const passwordInp = document.querySelector("#password");
const loginContainer = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");
const appContainer = document.querySelector(".section-1");
const sale = document.querySelector("#Sale");
const purchase = document.querySelector("#purchase");
const add = document.querySelector("#addBtn");
const listHome = document.querySelector(".home-list");
const load = document.querySelector(".cutom_button");
const sort = document.querySelector(".fa-sort");

let homeAdded = [];
// DATASs
const broker1 = {
  fullName: "Fariz Huseynov",
  userName: "fariz",
  dateOfBirth: 1900,
  password: "",
  homes: [
    {
      purchasePrice: 150000,
      salePrice: 250000,
      type: 1,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 1,
    },
    {
      purchasePrice: 280000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 170000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker2 = {
  fullName: "Rehim Memmedov",
  userName: "rehim",
  dateOfBirth: 2000,
  password: "",
  homes: [
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 140000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 130000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker3 = {
  fullName: "Vaqif Mehdiyev",
  userName: "vaqif",
  dateOfBirth: 2000,
  password: "",
  homes: [
    {
      purchasePrice: 140000,
      salePrice: 50000,
      type: 1,
    },
    {
      purchasePrice: 200000,
      salePrice: 350000,
      type: 1,
    },
    {
      purchasePrice: 10000,
      salePrice: 230000,
      type: 1,
    },
    {
      purchasePrice: 110000,
      salePrice: 170000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 200000,
      type: 1,
    },
  ],
};

const brokers = [broker1, broker2, broker3];

//FUNCTIONS
const showHomeDetails = function (homeDetails) {
  console.log(homeDetails);
  homeDetails.forEach((home) => {
    let type = home.type == 1 ? "Satış" : "Alış";

    let result = home.purchasePrice < home.salePrice ? "Qazanc" : "Ziyan";

    let classResult =
      home.purchasePrice < home.salePrice
        ? "text-bg-success"
        : "text-bg-danger";
    let inputHtml = `
            <tr>
                <td>${home.purchasePrice}</td>
                <td>${home.salePrice}</td>
                <td>${type}</td>
                <td>
                    <span class="badge p-2 rounded-pill ${classResult}">${result}</span>
                </td>
            </tr>
    `;

    tbody.insertAdjacentHTML("afterbegin", inputHtml);
  });
};

const clearInput = () => {
  purchase.value = "";
  sale.value = "";
};
const loadHomeList = function (homes) {
  console.log(homes);
  console.log(homes.salePrice);
  listHome.innerHTML = "";
  homes.forEach((home) => {
    let inputHomeListHtml = `
            <li class="list-group-item">${home.purchasePrice} - ${home.salePrice}</li>
    `;
    listHome.insertAdjacentHTML("afterbegin", inputHomeListHtml);
  });
};

const displayHomes = function (currentBroker) {
  showHomeDetails(currentBroker.homes);
  add.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(+sale.value);
    const home = new Map();
    home.set("purchasePrice", +purchase.value);
    home.set("salePrice", +sale.value);
    home.set("type", 1);

    console.log(homeAdded);
    homeAdded.push(Object.fromEntries(home));
    loadHomeList(homeAdded);
    clearInput();
  });

  load.addEventListener("click", (e) => {
    e.preventDefault();

    if (homeAdded) {
      currentBroker.homes = [...currentBroker.homes, ...homeAdded];
      listHome.innerHTML = "<li class='list-group-item'>An item</li>";
      showHomeDetails(currentBroker.homes);
      homeAdded = [];
    }
  });
};

displayHomes(brokers[2]);
