import "../css/styles";
import React, { useContext, useState, useEffect } from "react";
import { todayForecastContext } from "../App";
import { DateTime } from "luxon";

const TodayForecast = () => {
  const { forecastList } = useContext(todayForecastContext);
  const [todayForecastList, setTodayForecastList] = useState();

  const getTodayForecastList = () => {
    const filteredForecastList = forecastList.filter(
      (each) =>
        DateTime.fromMillis(each.dt * 1000).toFormat("D") ===
        DateTime.now().toFormat("D")
    );
    setTodayForecastList(filteredForecastList);
    console.log(filteredForecastList);
  };

  useEffect(() => {
    getTodayForecastList();
  }, [forecastList]);

  return <div className="today-forecast"></div>;
};

export default TodayForecast;
