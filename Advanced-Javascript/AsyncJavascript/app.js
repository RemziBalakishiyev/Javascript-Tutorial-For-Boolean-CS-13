const BASE_URL = "https://restcountries.com/v3.1/name/turkey";

const getCountry = async function () {
  const response = await fetch(BASE_URL);

  const responseData = await response.json();

  const [country] = responseData;
  if (country.borders) {
    const borderCountry = await fetch(
      `https://restcountries.com/v3.1/alpha/${country.borders[1]}`
    );

    const borderCountryData = await borderCountry.json();
    let countryWithBorder = [...responseData, ...borderCountryData];
    return countryWithBorder;
  }

  return responseData;
};

getCountry().then((country) => console.log(country));
