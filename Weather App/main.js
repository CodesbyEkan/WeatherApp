/*
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "fe10366156msh24240adc9983122p1bae73jsn2a322a08b88e",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

const text = document.getElementById("data");
const images = document.getElementsByTagName("img");


/*
async function weatherApp() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    //text.innerHTML = result.location.country;
    icon = result.current.condition.icon;
    images.src = icon.toString();
    console.log(result.current.condition.icon);
  } catch (error) {
    console.error(error);
  }
}

weatherApp();
*/

async function myWeather() {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "X-RapidAPI-Host",
      "community-open-weather-map.p.rapidapi.com"
    );
    myHeaders.append(
      "X-RapidAPI-Key",
      "47be25f2b2msh412286e8ef08c7dp1ab9e4jsn7d71e8d4981f"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const myResponse = await fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=Lagos,Nigeria",
      requestOptions
    );
    const myResult = myResponse.text();
    console.log(myResult);
  } catch (error) {
    console.log(error);
  }
}

myWeather();
