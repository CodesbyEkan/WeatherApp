weatherObj = {
  coord: {
    lon: 7.367,
    lat: 45.133,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 284.2,
    feels_like: 282.93,
    temp_min: 283.06,
    temp_max: 286.82,
    pressure: 1021,
    humidity: 60,
    sea_level: 1021,
    grnd_level: 910,
  },
  visibility: 10000,
  wind: {
    speed: 4.09,
    deg: 121,
    gust: 3.47,
  },
  rain: {
    "1h": 2.73,
  },
  clouds: {
    all: 83,
  },
  dt: 1726660758,
  sys: {
    type: 1,
    id: 6736,
    country: "IT",
    sunrise: 1726636384,
    sunset: 1726680975,
  },
  timezone: 7200,
  id: 3165523,
  name: "Province of Turin",
  cod: 200,
};

function WeatherForecast() {
  //API Key = 61fc468553e472e79f9a01ef6d340ac7
  const urll =
    "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=61fc468553e472e79f9a01ef6d340ac7";

  //const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=61fc468553e472e79f9a01ef6d340ac7`;

  const url =
    "http://api.openweathermap.org/geo/1.0/direct?q=Lagos&limit=5&appid=61fc468553e472e79f9a01ef6d340ac7";

  async function getCoord() {
    const loc = document.getElementById("loc");

    let lat = 0;
    let long = 0;
    try {
      const geolo = await fetch(url);
      const response = await geolo.json();

      if (response[0].country == "NG") {
        lat = response[0].lat;
        long = response[0].lon;
        loc.innerHTML = response[0].name;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function getForecast() {
    const country = document.getElementById("locate");
    const temp = document.getElementById("temp");
    const desc = document.getElementById("desc");
    const icons = document.getElementById("imgs");

    try {
      const weatherlo = await fetch(urll);
      const resp = await weatherlo.json();

      desc.innerHTML = resp.weather[0].description;
      country.innerHTML = resp.name + ", " + resp.sys.country;
      tempNum = resp.main.temp;
      temp.innerHTML = Math.trunc(tempNum / 10) + "&deg;c";
      //console.log(repl[0].name);
      //console.log(resp);
    } catch (error) {
      alert(error.message);
    }
  }

  getForecast();
  getIcons();
}

WeatherForecast();
