import { DateTime } from "luxon";
import React from "react";
import "../css/styles";
import WeatherIconForecast from "./WeatherIconForecast";

const WeatherCard = ({ forecast }) => {
  return (
    <div className="weather-card">
      {forecast.map((each, index) => {
        return (
          <div key={index}>
            <p className="time">
              {DateTime.fromMillis(each.dt * 1000).toFormat("t")}
            </p>
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
