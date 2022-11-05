import "./css/styles";
import { DateTime } from "luxon";
import React, { useEffect, useState, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Today from "./components/Today";
import Forecast from "./components/Forecast";
import Navigation from "./components/Navigation";

export const todayContext = createContext();

function App() {
  const [cityData, setCityData] = useState();
  const [country, setCountry] = useState();
  const [searchCity, setSearchCity] = useState("Seoul");
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

  const [firstDay, setFirstDay] = useState([]);
  const [secondDay, setSecondDay] = useState([]);
  const [thirdDay, setThirdDay] = useState([]);
  const [fourthDay, setFourthDay] = useState([]);
  const [fifthDay, setFifthDay] = useState([]);

  const categorizeForecastList = (dataDt, dataList) => {
    const firstFilter = dataList.filter((each) => {
      return (
        DateTime.fromISO(each.dt_txt.slice(0, 10)).toFormat("DD") ===
        dataDt.toFormat("DD")
      );
    });
    const secondFilter = dataList.filter((each) => {
      return (
        DateTime.fromISO(each.dt_txt.slice(0, 10)).toFormat("DD") ===
        dataDt.plus({ days: 1 }).toFormat("DD")
      );
    });
    const thirdFilter = dataList.filter((each) => {
      return (
        DateTime.fromISO(each.dt_txt.slice(0, 10)).toFormat("DD") ===
        dataDt.plus({ days: 2 }).toFormat("DD")
      );
    });
    const fourthFilter = dataList.filter((each) => {
      return (
        DateTime.fromISO(each.dt_txt.slice(0, 10)).toFormat("DD") ===
        dataDt.plus({ days: 3 }).toFormat("DD")
      );
    });
    const fifthFilter = dataList.filter((each) => {
      return (
        DateTime.fromISO(each.dt_txt.slice(0, 10)).toFormat("DD") ===
        dataDt.plus({ days: 4 }).toFormat("DD")
      );
    });

    setFirstDay(firstFilter);
    setSecondDay(secondFilter);
    setThirdDay(thirdFilter);
    setFourthDay(fourthFilter);
    setFifthDay(fifthFilter);
  };

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

            const fetch1 = fetch(
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
                return dtDateTime;
              });
            const fetch2 = fetch(
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
                return data.list;
              });
            Promise.all([fetch1, fetch2]).then((data) => {
              categorizeForecastList(data[0], data[1]);
            });
          });
      });
  }, [searchCity]);

  return (
    <div className="App">
      <div className="app-container">
        <form onSubmit={(e) => submitHandler(e)}>
          <input type="text" className="searchCity" placeholder="Search City" />
        </form>
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
            firstDay,
            secondDay,
            thirdDay,
            fourthDay,
            fifthDay,
          }}
        >
          <Routes>
            <Route path="/" element={<Today />}></Route>
            <Route path="/forecast" element={<Forecast />}></Route>
          </Routes>
        </todayContext.Provider>

        <Navigation />

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
