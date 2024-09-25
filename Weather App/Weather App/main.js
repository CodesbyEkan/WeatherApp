weatherObj = {
  "coord": {
     "lon": 7.367,
     "lat": 45.133
  },
  "weather": [
     {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
     }
  ],
  "base": "stations",
  "main": {
     "temp": 284.2,
     "feels_like": 282.93,
     "temp_min": 283.06,
     "temp_max": 286.82,
     "pressure": 1021,
     "humidity": 60,
     "sea_level": 1021,
     "grnd_level": 910
  },
  "visibility": 10000,
  "wind": {
     "speed": 4.09,
     "deg": 121,
     "gust": 3.47
  },
  "rain": {
     "1h": 2.73
  },
  "clouds": {
     "all": 83
  },
  "dt": 1726660758,
  "sys": {
     "type": 1,
     "id": 6736,
     "country": "IT",
     "sunrise": 1726636384,
     "sunset": 1726680975
  },
  "timezone": 7200,
  "id": 3165523,
  "name": "Province of Turin",
  "cod": 200
};                 

const country = document.getElementById("locate");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

//API Key = 61fc468553e472e79f9a01ef6d340ac7
const urll = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=61fc468553e472e79f9a01ef6d340ac7"
const url = "http://api.openweathermap.org/geo/1.0/direct?q=Nigeria&limit=5&appid=61fc468553e472e79f9a01ef6d340ac7"

async  function geol(){
  try {
    //const weatherlo = await fetch(urll);
    //const geolo = await fetch(url);
    //const repl = await geolo.json();
    desc.innerHTML = weatherObj.weather[0].description;
    country.innerHTML = weatherObj.name + ", " + weatherObj.sys.country + "ALY";
    tempNum = weatherObj.main.temp
    temp.innerHTML = Math.trunc(tempNum / 10) + "&deg;c";
    //console.log(repl[0].name);
    //console.log(weatherlo);
  } catch(error){
    console.log(error);
  }
}

geol();
