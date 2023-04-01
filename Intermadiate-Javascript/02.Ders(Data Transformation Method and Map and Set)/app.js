const bookLibrary = {
  books: [
    "Romeo and Juliet",
    "Crime and Punishment",
    "u geni",
    "Ferhad Shirin",
    "1984",
    "Red dragon",
    "Herb ve sulh",
  ],
  prices: [12, 15, 12, 25, 28, 21],
  genre: ["Dedective", "Romantic", "Classical"],
  bookWithGenre: new Map(),
};
const employee = [
  {
    Department: "HR",
    Fullname: "Elon Musk",
    salary: 2000,
  },
  {
    Department: "HR",
    Fullname: "Jeff Bezos",
    salary: 2500,
  },
  {
    Department: "HR",
    Fullname: "Jeff Bezos",
    salary: 2500,
  },
];

bookLibrary.description = new Map();
bookLibrary.description.set("1984", "1984 is my fav book");

const [dededctive, romantic, classical] = bookLibrary.genre;

bookLibrary.bookWithGenre.set(romantic, [
  bookLibrary.books[4],
  bookLibrary.books[5],
]);

bookLibrary.bookWithGenre.set(dededctive, [
  bookLibrary.books[2],
  bookLibrary.books[3],
]);

bookLibrary.bookWithGenre.set(classical, [
  bookLibrary.books[0],
  bookLibrary.books[1],
  bookLibrary.books[6],
]);

for (const [key, value] of bookLibrary.bookWithGenre) {
  console.log(` ${key}  : ${value} `);
}

console.log(bookLibrary);
console.log(bookLibrary.description);
console.log(bookLibrary.bookWithGenre);

function groupBy(array, key) {
  const map = new Map();

  // Loop through the array and group the elements by the specified key
  array.forEach(function (obj) {
    const value = obj[key]; //
    const group = map.get(value) || [];
    group.push(obj);
    map.set(value, group);
  });
  return map;
}

// Example usage:
const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Dave", age: 30 },
];

// const m = new Map();
// console.log(m.get(data[0]));
// const groupedData = groupBy(data, "age");
// console.log(groupedData); // Output: [{ id: 1, name: "Alice", age: 25 }, { id: 3, name: "Charlie", age: 25 }]

const mappedNames = ["John Wick", " Breaking Bad", "American Psycho"];
const numbers = [1, 2, 4, 5, 6];

const newNumber = numbers.map((number) => {
  return number * 10;
});

bookLibrary.sales = bookLibrary.prices.map((price) => {
  return price + price * 0.5;
});

// const { prices, sale } = bookLibrary;

const bestSalesBook = bookLibrary.sales.filter((saleFilter) => {
  return saleFilter > 25;
});

let sumPrice = bookLibrary.prices.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(sumPrice);

let salesPrice = bookLibrary.sales.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(salesPrice);

console.log(bestSalesBook);

let searchedEmployee = employee.filter((value) => {
  return value.Department.includes("HR");
});

console.log(employee.find((v) => v.Department == "HR"));

console.log(employee.some((v) => v.Department == "HR"));
console.log(employee.every((v) => v.Department == "HR"));

console.log(searchedEmployee);

const allNumbers = [-23, -113, 1300, 200, 4000, -60];

console.log(bookLibrary.books.sort());
let sortedNum = allNumbers.sort((a, b) => {
  console.log(`a : ${a} b : ${b}`);
  return a - b;
});
console.log();
