const movies = {
  name: "Silence of The sheep",
  genre: ["Dram", "Dedective", "Grammy"],
  languages: ["Azerbaijan", "Russian", "English"],
  subTitles: ["Azerbaijan", "Turk", "Arabic"],

  seasons: {
    firstSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    secondSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    lastSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
  },

  playWithLanguage(langIndex, subIndex) {
    return [this.languages[langIndex], this.subTitles[subIndex], this.genre];
  },

  additionalInformation({ imdbPoint, realesDate }) {
    if (imdbPoint > 6) {
      console.log(realesDate);
    }
  },

  addNewLanguage(langNames) {
    console.log(langNames);
    this.languages = [...new Set([...this.languages, ...langNames])];
  },
};

const bookLibrary = {
  books: [
    "1984",
    "Crime and Punishment",
    "Red dragon",
    "u geni",
    "Romeo and Juliet",
    "Ferhad Shirin",
    "Her ve sulh",
  ],
  prices: [12, 15, 12, 25, 28, 21],
  genre: ["Dedective", "Romantic", "Classical"],
};

//DESTRUCTING

const numbers = [1, 2, 3, 4, 5];

let [numberOne, numberTwo] = numbers;

console.log(numberOne, numberTwo);

let [, , secondary] = movies.genre;

console.log(movies.playWithLanguage(1, 1));

const [lang, subTitle, [first, second, thirty]] = movies.playWithLanguage(1, 0);

if (lang.toLowerCase() == "Russian".toLowerCase()) {
  console.log(lang, subTitle, second);
}

// const {name,genre ,seasons} = movies;

// console.log(name,genre)

const { seasons } = movies;

const { lastSeason } = seasons;
// const {episodeOne,episodeTwo,episodeThree} = lastSeason;
console.log(seasons);
console.log(lastSeason);
// console.log(episodeOne,episodeTwo,episodeThree)

const {
  lastSeason: { episodeOne, episodeTwo, episodeThree },
} = movies.seasons;
console.log(episodeOne);

const movies1Info = {
  imdbPoint: 7.5,
  realesDate: 2018,
};
const movies3Info = {
  imdbPoint: 8.5,
  realesDate: 2016,
};
const movies2Info = {
  imdbPoint: 5.5,
  realesDate: 2022,
};

movies.additionalInformation(movies3Info);

const positiveNUmbers = [1, 2, 3];
const negativeNumbers = [-1, -2, -3];
console.log(...positiveNUmbers);

const allNumbers = [...positiveNUmbers, ...negativeNumbers, 0];
console.log(allNumbers);

const newLangs = [
  "Spain",
  "German",
  "French",
  "Azerbaijan",
  "Russian",
  "Arabic",
  "German",
];
movies.addNewLanguage(newLangs);
const allLangs = [...movies.languages];

console.log(allLangs);

const show = function (...values) {
  console.log(...values);
};

show(...[1, 2, 3], 1, 23);

const numbersA = [1, 2, 3, 1, 2, 2, 2, 3, 1];

console.log(numbersA);

const setNumbers = new Set(numbersA);
console.log(setNumbers);
