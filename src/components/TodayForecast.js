import "../css/styles";
import React, { useContext, useState, useEffect } from "react";
import { todayForecastContext } from "./Today";
import { DateTime } from "luxon";
import WeatherCard from "./WeatherCard";

const TodayForecast = () => {
  const { forecastList } = useContext(todayForecastContext);
  const [todayForecastList, setTodayForecastList] = useState([]);

  const getTodayForecastList = () => {
    const filteredForecastList = forecastList.filter(
      (each) =>
        (DateTime.fromMillis(each.dt * 1000).toFormat("D") ===
          DateTime.now().toFormat("D")) |
        (DateTime.fromMillis(each.dt * 1000).toFormat("D") ===
          DateTime.now().plus({ days: 1 }).toFormat("D"))
    );
    setTodayForecastList(filteredForecastList);
  };

  useEffect(() => {
    getTodayForecastList();
  }, [forecastList]);

  return (
    <div className="today-forecast">
      <div className="today-forecast-carousel">
        <WeatherCard forecast={todayForecastList} />
      </div>
    </div>
  );
};

export default TodayForecast;
