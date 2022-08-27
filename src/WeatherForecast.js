import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        console.log(forecast);
        return (
         <div className="WeatherForecast">
            <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu</div> 
                    <WeatherIcon code="01d" size={32}/>
                    <div className="WeatherForecast-temperature"> 
                    <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
                    <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span> 
                    </div>
            </div>
            </div>
        </div>
        );

    } else { 
        
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = "798023fb3d35165272c1fae40ceef0ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        
    axios.get(apiUrl).then(handleResponse);
    
    return null;
        
    }
}

