const University = function (countryName, name) {
  this.countryName = countryName;
  this.name = name;
  this.url = "http://universities.hipolabs.com/search";
};

University.prototype.getUniversityViaXHR = function () {
  const request = new XMLHttpRequest();
  request.open("GET", `${this.url}?country=${this.countryName.toLowerCase()}`);
  request.send();
  console.log(request);
  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data[0]);

    if (data) {
    }
  });
};

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//   }, 1000);
// }, 1000);

// const universityOne = new University("Turkey", "middle");
// const universityTwo = new University("China", "middle");
// universityOne.getUniversity();
// universityTwo.getUniversity();

University.prototype.getUniversityViaFetch = function () {
  const request = fetch(
    `${this.url}?country=${this.countryName.toLowerCase()}`
  );

  request
    .then((response) => response.json())
    .then((reponseText) => {
      console.log(reponseText);

      if (reponseText.length == 0) {
        throw new Error("Response text has not  any value");
      }

      const chinaRequest = fetch(`${this.url}?country=china`);
      chinaRequest
        .then((responseChina) => {
          return responseChina.json();
        })
        .then((responseChinaJson) => {
          console.log(responseChinaJson);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

const universityOne = new University("xyz", "middle");
const data = universityOne.getUniversityViaFetch();
