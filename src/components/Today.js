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
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" className="searchCity" placeholder="Search City" />
      </form>
      <div className="upper-wrapper">
        <p className="city">
          {city} <span className="country">{country}</span>
        </p>
        <p className="date-time">
          <span>
            <span class="material-symbols-outlined">calendar_month</span>
            {date}
          </span>
          <span>
            <span class="material-symbols-outlined">schedule</span>
            {time}
          </span>
        </p>
      </div>

      <p>{weather}</p>

      <p className="temp">
        {temp}
        <span>&#176;C</span>
      </p>
      <p className="min-temp">
        {minTemp}
        <span>&#176;C</span>
      </p>
      <p className="max-temp">
        {maxTemp}
        <span>&#176;C</span>
      </p>
      <p>{humidity}%</p>
      <p>{pressure}</p>
      <p>{sunrise}</p>
      <p>{sunset}</p>
      <p>{windSpeed} m/s</p>
    </div>
  );
};

export default Today;
