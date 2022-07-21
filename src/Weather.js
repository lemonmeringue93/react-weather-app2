import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000), 
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
    }

    function search () {
        const apiKey = "798023fb3d35165272c1fae40ceef0ea";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //search for a city
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
         return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search"  
                placeholder="Enter a city" 
                className="form-control" 
                autoFocus="on" 
                onChange={handleCityChange}/>
               </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
           <WeatherInfo data={weatherData}/>
            <h1>{weatherData.city}</h1>
            <ul>
                <li><FormattedDate date={weatherData.date} /></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
        <div className="row mt-3">

            <div className="col-6">

                <img 
                src ={weatherData.iconUrl}
                alt={weatherData.description}
                />

                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>

                </div>

                <div className="col-6">
                    <ul>
        
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(weatherData.wind)} km/h
                        </li>
                    </ul>
                </div>
        </div>

            
        </div>
         );
    } else {
   search();

   return "Loading...";
    }

   
   
  
    
}