import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
    function handleResponse(response) {
        console.log(response.data);
    }

   const apiKey = "798023fb3d35165272c1fae40ceef0ea";
   let city = "Tokyo";
   let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`;
   axios.get(apiURL).then(handleResponse); 
   return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search"  placeholder="Enter a city" className="form-control" autoFocus="on" />
               </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
           
            <h1>Tokyo</h1>
            <ul>
                <li>Sunday 17:00</li>
                <li>Sunny</li>
            </ul>
        <div className="row mt-3">

            <div className="col-6">

                <img 
                src ="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                />

                <span className="temperature">26</span>
                <span className="unit">°C</span>

                </div>

                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Wind: 13 km/h
                        </li>
                    </ul>
                </div>
        </div>

            
        </div>
    )
}