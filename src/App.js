import "./css/styles";
import { DateTime } from "luxon";
import React, { useEffect, useState, useContext, createContext } from "react";
import Today from "./components/Today";

export const todayContext = createContext();

function App() {
  const [cityData, setCityData] = useState();
  const [country, setCountry] = useState();
  const [searchCity, setSearchCity] = useState("seoul");
  const [city, setCity] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [updateTime, setUpdateTime] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [temp, setTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [weather, setWeather] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [forecastList, setForecastList] = useState([]);
  const [weatherMain, setWeatherMain] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchCity(e.target[0].value);
    e.target.reset();
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity},&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setCityData(data);
        setLat(data[0].lat);
        setLon(data[0].lon);
        const dataLat = data[0].lat;
        const dataLon = data[0].lon;
        setCity(data[0].name);

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${dataLat}&lon=${dataLon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw response;
          })
          .then((data) => {
            setUpdateTime(new Date(data.dt * 1000).toLocaleTimeString());
            setTemp(data.main.temp);
            setMinTemp(data.main.temp_min);
            setMaxTemp(data.main.temp_max);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setSunrise(
              DateTime.fromMillis(data.sys.sunrise * 1000).toFormat("t")
            );
            setSunset(
              DateTime.fromMillis(data.sys.sunset * 1000).toFormat("t")
            );
            setWeather(data.weather[0].description);
            setWeatherMain(data.weather[0].main);
            setWindSpeed(data.wind.speed);

            fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${dataLat}&lon=${dataLon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw response;
              })
              .then((data) => {
                setForecastList(data.list);
              });
            fetch(
              `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.REACT_APP_TIME_API_KEY}&format=json&by=position&lat=${dataLat}&lng=${dataLon}`
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw response;
              })
              .then((data) => {
                let dateList = data.formatted.slice(0, 10).split("-");
                let timeList = data.formatted.slice(10).trim().split(":");
                let dtDateTime = DateTime.local(
                  Number(dateList[0]),
                  Number(dateList[1]),
                  Number(dateList[2]),
                  Number(timeList[0]),
                  Number(timeList[1]),
                  Number(timeList[2])
                );
                let dateFormatted = dtDateTime
                  .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
                  .slice(0, -6);
                let timeFormatted = dtDateTime.toFormat("t");
                setDate(dateFormatted);
                setTime(timeFormatted);
                setCountry(data.countryName);
              });
          });
      });
  }, [searchCity]);

  return (
    <div className="App">
      <div className="app-container">
        <todayContext.Provider
          value={{
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
            weatherMain,
            forecastList,
          }}
        >
          <Today />
        </todayContext.Provider>

        {/* <ul>
          {forecastList.map((each, id) => {
            let str = JSON.stringify(each);
            return <li key={id}>{str}</li>;
          })}
        </ul> */}
        {/* drizzle, rain, snow, mist, smoke, haze, dust, fog, sand, ash, squall, tornado, clear, clouds */}
      </div>
    </div>
  );
}

export default App;
