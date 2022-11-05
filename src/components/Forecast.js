import React, { useContext } from "react";
import { todayContext } from "../App";

const Forecast = () => {
  const { forecastList } = useContext(todayContext);

  return (
    <div className="forecast">
      <ul>
        {forecastList.map((each) => {
          return <li>{JSON.stringify(each)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Forecast;
