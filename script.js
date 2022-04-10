// let weather = {
//     apiKey: "API KEY GOES HERE",
//     fetchWeather: function fetchWeather(city) {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
//       )
//         .then((response) => {
//         //   if (!response.ok) {
//         //     alert("No weather found.");
//         //     throw new Error("No weather found.");
//         //   }
//           return response.json();
//         })
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function (data) {
//         console.log(data);
//       const { name } = data;
//       const { icon, description } = data.weather[0];
//       const { temp, humidity } = data.main;
//       const { speed } = data.wind;
//       document.querySelector(".city").innerText = "Weather in " + name;
//       document.querySelector(".icon").src =
//         "https://openweathermap.org/img/wn/" + icon + ".png";
//       document.querySelector(".description").innerText = description;
//       document.querySelector(".temp").innerText = temp + "°C";
//       document.querySelector(".humidity").innerText =
//         "Humidity: " + humidity + "%";
//       document.querySelector(".wind").innerText =
//         "Wind speed: " + speed + " km/h";
//       document.querySelector(".weather").classList.remove("loading");
//       document.body.style.backgroundImage =
//         "url('https://source.unsplash.com/1600x900/?" + name + "')";
//     },
//     search: function () {
//       this.fetchWeather(document.querySelector(".input").value);
//     },
//   };
  
//   document.querySelector(".anchor_btn").addEventListener("click", function () {
//     weather.search();
//   });
  
//   document
//     .querySelector(".input")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });
  
//   weather.fetchWeather("Mumbai");


// function showData() {
//     prompt("Hello I am Javascript prompt")
// }
// showData()


const api = {
    key: "fcc8de7015bbb202209bbf0261babf4c",
    base: "https://api.openweathermap.org/data/2.5/"
}


function setQuery(evt) {
        getResults(document.getElementsByClassName('input')[0].value);
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

     let now = new Date();
     let date = document.querySelector('.date');
     date.innerText = dateBuilder(now);

    
    let hilow = document.querySelector('.temp');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c(Min) / ${Math.round(weather.main.temp_max)}°c(Max)`;

    let weather_el = document.querySelector('.current');
    weather_el.innerText = weather.weather[0].main;

}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}