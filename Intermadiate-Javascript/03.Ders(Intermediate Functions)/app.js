const getHello = function () {
  console.log("hello");
};

function getHello2() {
  console.log("hello2");
}

const checkWordLength = function (word) {
  return word.length > 3;
};

const checkHasNumber = function (text) {
  let textFromInput = "";
  for (let index = 0; index < text.length; index++) {
    textFromInput = text.charAt(index);
    if (!isNaN(textFromInput)) {
      return true;
    }
  }

  return false;
};

const checkHasUpperWord = function (text) {
  let textFromInput = "";
  let index = 0;

  while (text.length > index) {
    textFromInput = text.charAt(index);

    let upperTextWord = textFromInput.toUpperCase();

    if (textFromInput == upperTextWord && isNaN(textFromInput)) {
      return true;
    }
    index++;
  }

  return false;
};

// ADMIN
const upperFirstWord = function (word) {
  //   let wordArray = [];
  //   for (let i = 0; i < word.length; i++) {
  //     wordArray.push(word.charAt(i));
  //   }
  const [first, ...others] = word;
  return [first.toUpperCase(), ...others].join("");
};

const transforWord = function (word, callback) {
  return callback(word);
};

console.log(upperFirstWord("admin"));

// transforWord("text", checkWordLength);
// transforWord("text", checkHasNumber);
// transforWord("text", checkHasUpperWord);
transforWord("text", upperFirstWord);

const ovod = {
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
  city: "Baku",
  deliver(beginDate, endDate) {
    console.log(
      `${this.city} şəhərinə çatdırılma ${beginDate}-${endDate} edildi `
    );
  },
  showExplaining() {
    console.log(this);
  },
};

const novella = {
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
  city: "Gence",
  showExplaining() {
    console.log(this);
  },
};

ovod.deliver("12:00", "18:00");

ovod.deliver.call(novella, "12:00", "18:00");

ovod.deliver.apply(novella, ["12:00", "18:00"]);

ovod.showExplaining(novella);

const isLocated = function () {
  console.log(` Library is located at  ${this.city}`);
};

// ovod.bind(isLocated);
// novella.bind(isLocated);

isLocated.bind(ovod)();
isLocated.bind(novella)();

novella.showExplaining();
