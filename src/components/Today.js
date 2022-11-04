import React from "react";
import "../css/styles.js";
import { useContext, createContext } from "react";
import { todayContext } from "../App.js";
import WeatherIcon from "./WeatherIcon";
import TodayForecast from "./TodayForecast";

export const todayForecastContext = createContext();

const pressureIcon = (
  <svg
    className="pressure"
    viewBox="0 0 1118 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M944.399989 588.230337a35.510434 35.510434 0 0 0 35.510434-35.510434 416.537389 416.537389 0 1 0-832.897227 0 35.510434 35.510434 0 1 0 71.020868 0 345.516522 345.516522 0 1 1 690.855491 0 35.510434 35.510434 0 0 0 35.510434 35.510434z" />
    <path d="M559.289334 0a559.466886 559.466886 0 0 0-330.247035 1010.8045 35.510434 35.510434 0 0 0 49.714607-7.812295 35.510434 35.510434 0 0 0-7.812296-49.537055 488.268466 488.268466 0 1 1 568.166943 5.859221 35.510434 35.510434 0 0 0 40.836998 58.237112A559.466886 559.466886 0 0 0 559.289334 0z" />
    <path d="M617.881549 443.880423a132.986575 132.986575 0 0 0-156.245909 37.818613l-104.75578-45.630908a35.510434 35.510434 0 1 0-28.230794 64.984094l104.755779 45.630908A132.986575 132.986575 0 1 0 617.881549 443.880423z" />
  </svg>
);

const sunriseIcon = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 60 60"
  >
    <g>
      <path d="M30,11c0.553,0,1-0.447,1-1V4c0-0.553-0.447-1-1-1s-1,0.447-1,1v6C29,10.553,29.447,11,30,11z" />
      <path d="M52,33c0,0.553,0.447,1,1,1h6c0.553,0,1-0.447,1-1s-0.447-1-1-1h-6C52.447,32,52,32.447,52,33z" />
      <path d="M1,34h6c0.553,0,1-0.447,1-1s-0.447-1-1-1H1c-0.553,0-1,0.447-1,1S0.447,34,1,34z" />
      <path
        d="M46.264,17.736c0.256,0,0.512-0.098,0.707-0.293l5.736-5.736c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
 l-5.736,5.736c-0.391,0.391-0.391,1.023,0,1.414C45.752,17.639,46.008,17.736,46.264,17.736z"
      />
      <path
        d="M13.029,17.443c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
 l-5.736-5.736c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L13.029,17.443z"
      />
      <path
        d="M50.251,24.404c0.162,0.381,0.532,0.609,0.921,0.609c0.131,0,0.264-0.025,0.391-0.079l2.762-1.173
 c0.509-0.217,0.746-0.804,0.53-1.312c-0.217-0.509-0.808-0.743-1.312-0.53l-2.762,1.173C50.272,23.31,50.035,23.896,50.251,24.404z
 "
      />
      <path
        d="M5.519,24.187L8.3,25.311c0.123,0.05,0.25,0.073,0.375,0.073c0.396,0,0.77-0.236,0.927-0.625
 c0.207-0.513-0.04-1.095-0.552-1.302l-2.781-1.124c-0.513-0.207-1.095,0.041-1.302,0.552C4.76,23.397,5.007,23.979,5.519,24.187z"
      />
      <path
        d="M20.093,12.219c0.162,0.381,0.532,0.609,0.921,0.609c0.131,0,0.264-0.025,0.391-0.079c0.509-0.217,0.746-0.804,0.53-1.312
 l-1.173-2.762c-0.217-0.509-0.809-0.744-1.312-0.53c-0.509,0.217-0.746,0.804-0.53,1.312L20.093,12.219z"
      />
      <path
        d="M38.241,12.602c0.123,0.05,0.25,0.073,0.375,0.073c0.396,0,0.77-0.236,0.927-0.625l1.124-2.781
 c0.207-0.513-0.04-1.095-0.552-1.302c-0.512-0.206-1.095,0.04-1.302,0.552L37.689,11.3C37.482,11.813,37.729,12.395,38.241,12.602z
 "
      />
      <path
        d="M59,40h-9.23c0.802-2.252,1.23-4.596,1.23-7c0-11.579-9.421-21-21-21S9,21.421,9,33c0,2.404,0.428,4.748,1.23,7H1
 c-0.553,0-1,0.447-1,1s0.447,1,1,1h10.021h37.957H59c0.553,0,1-0.447,1-1S59.553,40,59,40z M12.342,40
 C11.451,37.763,11,35.411,11,33c0-10.477,8.523-19,19-19s19,8.523,19,19c0,2.411-0.451,4.763-1.342,7H12.342z"
      />
      <path d="M54,45H6c-0.553,0-1,0.447-1,1s0.447,1,1,1h48c0.553,0,1-0.447,1-1S54.553,45,54,45z" />
      <path d="M49,50H11c-0.553,0-1,0.447-1,1s0.447,1,1,1h38c0.553,0,1-0.447,1-1S49.553,50,49,50z" />
      <path d="M45,55H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h30c0.553,0,1-0.447,1-1S45.553,55,45,55z" />
      <polygon points="22.293,27.293 23.707,28.707 29,23.414 29,35 31,35 31,23.414 36.293,28.707 37.707,27.293 30,19.586 	" />
    </g>
  </svg>
);

const sunsetIcon = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 60 60"
  >
    <g>
      <path d="M30,11c0.553,0,1-0.447,1-1V4c0-0.553-0.447-1-1-1s-1,0.447-1,1v6C29,10.553,29.447,11,30,11z" />
      <path d="M52,33c0,0.553,0.447,1,1,1h6c0.553,0,1-0.447,1-1s-0.447-1-1-1h-6C52.447,32,52,32.447,52,33z" />
      <path d="M1,34h6c0.553,0,1-0.447,1-1s-0.447-1-1-1H1c-0.553,0-1,0.447-1,1S0.447,34,1,34z" />
      <path
        d="M46.264,17.736c0.256,0,0.512-0.098,0.707-0.293l5.736-5.736c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
 l-5.736,5.736c-0.391,0.391-0.391,1.023,0,1.414C45.752,17.639,46.008,17.736,46.264,17.736z"
      />
      <path
        d="M13.029,17.443c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
 l-5.736-5.736c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L13.029,17.443z"
      />
      <path
        d="M50.251,24.404c0.162,0.381,0.532,0.609,0.921,0.609c0.131,0,0.264-0.025,0.391-0.079l2.762-1.173
 c0.509-0.217,0.746-0.804,0.53-1.312c-0.217-0.509-0.808-0.743-1.312-0.53l-2.762,1.173C50.272,23.31,50.035,23.896,50.251,24.404z
 "
      />
      <path
        d="M5.519,24.187L8.3,25.311c0.123,0.05,0.25,0.073,0.375,0.073c0.396,0,0.77-0.236,0.927-0.625
 c0.207-0.513-0.04-1.095-0.552-1.302l-2.781-1.124c-0.512-0.207-1.095,0.041-1.302,0.552C4.76,23.397,5.007,23.979,5.519,24.187z"
      />
      <path
        d="M20.093,12.219c0.162,0.381,0.532,0.609,0.921,0.609c0.131,0,0.264-0.025,0.391-0.079c0.509-0.217,0.746-0.804,0.53-1.312
 l-1.173-2.762c-0.217-0.509-0.809-0.744-1.312-0.53c-0.509,0.217-0.746,0.804-0.53,1.312L20.093,12.219z"
      />
      <path
        d="M38.241,12.602c0.123,0.05,0.25,0.073,0.375,0.073c0.396,0,0.77-0.236,0.927-0.625l1.124-2.781
 c0.207-0.513-0.04-1.095-0.552-1.302c-0.513-0.206-1.095,0.04-1.302,0.552L37.689,11.3C37.482,11.813,37.729,12.395,38.241,12.602z
 "
      />
      <path
        d="M59,40h-9.23c0.802-2.252,1.23-4.596,1.23-7c0-11.579-9.421-21-21-21S9,21.421,9,33c0,2.404,0.428,4.748,1.23,7H1
 c-0.553,0-1,0.447-1,1s0.447,1,1,1h10.021h37.957H59c0.553,0,1-0.447,1-1S59.553,40,59,40z M12.342,40
 C11.451,37.763,11,35.411,11,33c0-10.477,8.523-19,19-19s19,8.523,19,19c0,2.411-0.451,4.763-1.342,7H12.342z"
      />
      <path d="M54,45H6c-0.553,0-1,0.447-1,1s0.447,1,1,1h48c0.553,0,1-0.447,1-1S54.553,45,54,45z" />
      <path d="M49,50H11c-0.553,0-1,0.447-1,1s0.447,1,1,1h38c0.553,0,1-0.447,1-1S49.553,50,49,50z" />
      <path d="M45,55H15c-0.553,0-1,0.447-1,1s0.447,1,1,1h30c0.553,0,1-0.447,1-1S45.553,55,45,55z" />
      <polygon points="31,32.586 31,21 29,21 29,32.586 23.707,27.293 22.293,28.707 30,36.414 37.707,28.707 36.293,27.293 	" />
    </g>
  </svg>
);

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
    forecastList,
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
            <span className="material-symbols-outlined date">
              calendar_month
            </span>
            {date}
          </span>
          <span>
            <span className="material-symbols-outlined time">schedule</span>
            {time}
          </span>
        </p>
      </div>

      <div className="weather-wrapper">
        {/* drizzle, rain, snow, mist, smoke, haze, dust, fog, sand, ash, squall, tornado, clear, clouds */}
        <WeatherIcon />
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
      <div className="other-info-wrapper">
        <div className="humidity-wrapper">
          <span className="material-symbols-outlined humidity">
            humidity_high
          </span>
          <p>{humidity}%</p>
          <p>humidity</p>
        </div>
        <div className="pressure-wrapper">
          <span className="pressure">{pressureIcon}</span>
          <p>{pressure} hPa</p>
          <p>air pressure</p>
        </div>
        <div className="windSpeed-wrapper">
          <span className="material-symbols-outlined windSpeed">air</span>
          <p>{windSpeed} m/s</p>
          <p>wind speed</p>
        </div>
      </div>

      <div className="sunrise-sunset-wrapper">
        <div className="sunrise-wrapper">
          {sunriseIcon}
          <p>{sunrise}</p>
        </div>
        <div className="sunset-wrapper">
          {sunsetIcon}
          <p>{sunset}</p>
        </div>
      </div>

      <todayForecastContext.Provider value={{ forecastList }}>
        <TodayForecast />
      </todayForecastContext.Provider>
    </div>
  );
};

export default Today;
