// alert("Body will be green!");
// body.style.backgroundColor = "green";

// let body = document.querySelector("body");

// setTimeout(function () {
//   body.style.backgroundColor = "red";
// }, 5000);
// body.style.backgroundColor = "green";

const University = function (countryName, name) {
  this.countryName = countryName;
  this.name = name;
  this.url = "http://univeries.hipolabs.com/search";
};

University.prototype.getUniversity = function () {
  const request = new XMLHttpRequest();
  request.open("GET", `${this.url}?country=${this.countryName.toLowerCase()}`);
  request.send();
  console.log(request);
  request.addEventListener("load", function () {
    console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data[0]);
  });
};

const universityOne = new University("Turkey", "middle");
universityOne.getUniversity();
