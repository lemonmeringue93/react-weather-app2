import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
        
    <div className="row mt-3">

        <div className="col-6">
        <div className="d-flex">
            <div className="float-left">   
            <WeatherIcon code={props.data.icon} size={89} alt={props.data.description}/>
            </div>

            <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature}/>
            </div>                 
        </div>
        </div>
                <div className="col-6">
                    <ul>
        
                        <li>
                            Humidity: {props.data.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(props.data.wind)} km/h
                        </li>
                    </ul>
                </div>
    </div>

            
      </div>  
        );
}