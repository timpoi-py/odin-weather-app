import { DateTime } from "luxon";
import React from "react";
import "../css/styles";
import WeatherIconForecast from "./WeatherIconForecast";

const WeatherCard = ({ forecast }) => {
  return (
    <div className="weather-card-container">
      {forecast.map((each, index) => {
        return (
          <div className="weather-card" key={index}>
            <p className="time">{each.dt_txt.slice(11, 16)}</p>
            <WeatherIconForecast weatherMain={each.weather[0].main} />
            <p className="description">{each.weather[0].description}</p>
            <p className="temp">
              {each.main.temp}
              <span>&#176;</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherCard;
