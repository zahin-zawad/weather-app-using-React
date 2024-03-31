import React from 'react'
import './WeatherApp.css'
import searchIcon from '../assets/search.png'
import cloudImage from '../assets/cloud.png'
import humidityIcon from '../assets/humidity.png'
import windIcon from '../assets/wind.png'


export const WeatherApp =  () => {

  let apiKey = "7b0c95f7352a7e4f82cbfe62d9753a85"

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if(element.value ===""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);

    let data = await response.json();

    console.log(data)
    console.log(url)
    console.log(response)

    const temperature = document.getElementsByClassName('weather-temp');

    const location = document.getElementsByClassName('Location');

    const humidity = document.getElementsByClassName('humidity-percent');

    const windSpeed = document.getElementsByClassName('wind-speed');
    const wicon = document.getElementsByClassName('weatherIcon');

    location[0].innerHTML = data.name;
    temperature[0].innerHTML = data.main.temp +"°C";
    humidity[0].innerHTML = data.main.humidity + "%";
    windSpeed[0].innerHTML = data.wind.speed + " Km/h";

    let iconcode = data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    console.log(iconurl);
    wicon.src = iconurl;


  }
  return (
    <div className='container'>
        <div className="topbar">
            <input type="text" className="cityInput" placeholder='Search City' />
            <div className="search-icon" onClick={() => {search()}}>
                <img src={searchIcon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloudImage} alt="" className='weatherIcon' />
        </div>
        <div className="weather-temp">24°C</div>
        <div className='Location'>London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidityIcon} alt="" className='icon' />
            <div className="data">
              <div className="humidity-percent">80%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} alt="" className='icon' />
            <div className="data">
              <div className="wind-speed">24 km/h</div>
              <div className="text">Wind speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}
