var apikey = 'b92c7b94ea2bfe103131662778308a84';
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=';
// var city = 'Irvine';

var cityInputEl = document.getElementById('cityInput');
var searchBtnEl = document.getElementById('searchBtn');
var cityNameEl = document.getElementById('cityName');
var weathericonEl = document.getElementById('weather-icon');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');


function getdata(city) {
  fetch(`${weatherUrl}${city}&appid=${apikey}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      cityNameEl.innerHTML = '<i class="fa-solid fa-map-pin"></i> ' + data.name;
      weathericonEl.src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
      tempEl.textContent = 'Temperature: '+ data.main.temp + ' °F';
      windEl.textContent = 'Wind: '+ data.wind.speed + ' mph';
      humidityEl.textContent = 'Humidity ' + data.main.humidity + ' %';
  })

  fetch(`${forecastUrl}${city}&appid=${apikey}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
  })
};



searchBtnEl.addEventListener('click', function(event) {
  event.preventDefault()
  var city = cityInputEl.value
  getdata(city)
})