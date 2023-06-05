var apikey = 'b92c7b94ea2bfe103131662778308a84';
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=';


var cityInputEl = document.getElementById('cityInput');
var searchBtnEl = document.getElementById('searchBtn');
var cityNameEl = document.getElementById('cityName');
var weathericonEl = document.getElementById('weather-icon');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');


var cardForecastEl = document.getElementById('cardForecast');
var day1 = document.getElementById('day1');
var day1Icon = document.getElementById('day1Icon');
var day1Temp = document.getElementById('day1Temp');
var day2 = document.getElementById('day2');
var day2Icon = document.getElementById('day2Icon');
var day2Temp = document.getElementById('day2Temp');
var day3 = document.getElementById('day3');
var day3Icon = document.getElementById('day3Icon');
var day3Temp = document.getElementById('day3Temp');
var day4 = document.getElementById('day4');
var day4Icon = document.getElementById('day4Icon');
var day4Temp = document.getElementById('day4Temp');
var day5 = document.getElementById('day5');
var day5Icon = document.getElementById('day5Icon');
var day5Temp = document.getElementById('day5Temp');


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

  // Get 5 day forecast 

  fetch(`${forecastUrl}${city}&appid=${apikey}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      day1.text = moment().format('dddd');
      day1Icon.src = 'https://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'@2x.png';
      day1Temp.textContent = data.list[0].main.temp + ' °F';

      day2.textContent = moment().add(1, 'days').format('dddd');
      day2Icon.src = 'https://openweathermap.org/img/wn/'+data.list[8].weather[0].icon+'@2x.png';
      day2Temp.textContent = data.list[8].main.temp + ' °F';

      day3.textContent = moment().add(2, 'days').format('dddd');
      day3Icon.src = 'https://openweathermap.org/img/wn/'+data.list[16].weather[0].icon+'@2x.png';
      day3Temp.textContent = data.list[16].main.temp + ' °F';

      day4.textContent = moment().add(3, 'days').format('dddd');
      day4Icon.src = 'https://openweathermap.org/img/wn/'+data.list[24].weather[0].icon+'@2x.png';
      day4Temp.textContent = data.list[24].main.temp + ' °F';

      day5.textContent = moment().add(4, 'days').format('dddd');
      day5Icon.src = 'https://openweathermap.org/img/wn/'+data.list[32].weather[0].icon+'@2x.png';
      day5Temp.textContent = data.list[32].main.temp + ' °F';
  })
};







searchBtnEl.addEventListener('click', function(event) {
  event.preventDefault()
  var city = cityInputEl.value
  getdata(city)
})