
import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    console.log(props.code);
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "010d": "RAIN",
        "010n": "RAIN",
        "011d": "CLEAR_NIGHT",
        "011n": "CLEAR_NIGHT",
        "013d": "SNOW",
        "013n": "SNOW",
        "015d": "FOG",
        "015n": "FOG"
    };

    return (
            <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="#1d6ef8"
            size={64}
            animate={true}
            />
        );
}


