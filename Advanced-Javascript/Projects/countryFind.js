const log = console.log;
const BASE_URL = "https://restcountries.com/v3.1/name/";
let searchBtn = document.querySelector("#search");
let countryInp = document.querySelector("#countryName");
let card = document.querySelector(".card-body");

const displayCountry = function ({
  capital,
  flags: { svg, png },
  name: { common },
  languages,
  maps,
}) {
  log(languages);

  let languageHtml = "<ul class='lang-group'>";

  Object.values(languages).forEach((lang) => {
    languageHtml += `<li>${lang} </li>`;
  });
  languageHtml += "</ul>";

  log(common);
  let countryHtml = "";
  countryHtml = `  <div class='country--container'>
    <img src='${svg}' class='flag-img'>
    <h2 style="margin-left:40%;margin-top:10px">
        ${common.toUpperCase()}
    </h2>

    <div class="country--detail mt-3" >
        <div class='capital--name'>
            <h3>Capital:</h3><span>${capital}</span>
        </div>
       <h4>LANGUAGES</h4>
     ${languageHtml}
       <a target='_blank' class='btn btn-danger w-50 mx-auto' href='${
         maps.googleMaps
       }'>MAP</a>
    </div>  
</div>`;

  card.innerHTML = countryHtml;
};

//ES5

// const findCountry = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `${BASE_URL}${countryName}`);

//   request.send();

//   request.addEventListener("load", function () {
//     const [responJson] = JSON.parse(this.responseText);
//     displayCountry(responJson);
//   });
// };

const findCountry = async function (countryName) {
  try {
    const response = await fetch(`${BASE_URL}${countryName}`);
    const [country] = await response.json();
    return country;
  } catch (error) {
    throw Error("There is some error");
  }
};
searchBtn.addEventListener("click", function () {
  findCountry(countryInp.value)
    .then((json) => displayCountry(json))
    .catch((err) => alertify.alert(err.message));
});
