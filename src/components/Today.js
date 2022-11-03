import React from "react";
import "../css/styles.js";
import { useContext } from "react";
import { todayContext } from "../App.js";

const Today = () => {
  const {
    submitHandler,
    city,
    country,
    date,
    time,
    weather,
    temp,
    minTemp,
    maxTemp,
    humidity,
    pressure,
    sunrise,
    sunset,
    windSpeed,
  } = useContext(todayContext);

  return (
    <div className="Today">
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" className="searchCity" placeholder="Search City" />
      </form>
      <div className="city-date-time-wrapper">
        <p className="city">
          {city} <span className="country">{country}</span>
        </p>
        <p className="date-time">
          <span>
            <span class="material-symbols-outlined date">calendar_month</span>
            {date}
          </span>
          <span>
            <span class="material-symbols-outlined time">schedule</span>
            {time}
          </span>
        </p>
      </div>

      <div className="weather-wrapper">
        <span class="material-symbols-outlined cloudy">cloudy</span>
        <div className="temperatures-weather">
          <p>{weather}</p>
          <p className="temp">
            {temp}
            <span>
              &#176;<span>c</span>
            </span>
          </p>
          <div className="min-max-temp">
            <p className="min-temp">
              <span class="material-symbols-outlined minTemp">thermometer</span>
              {minTemp}
              <span>&#176;</span>
            </p>
            <p className="max-temp">
              <span class="material-symbols-outlined maxTemp">thermometer</span>
              {maxTemp}
              <span>&#176;</span>
            </p>
          </div>
        </div>
      </div>
      <p>{humidity}%</p>
      <p>{pressure}</p>
      <p>{sunrise}</p>
      <p>{sunset}</p>
      <p>{windSpeed} m/s</p>
    </div>
  );
};

export default Today;
