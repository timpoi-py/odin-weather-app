import React, { useContext, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { todayContext } from "../App";
import WeatherCard from "./WeatherCard";
import "../css/styles";

const Forecast = () => {
  const { firstDay, secondDay, thirdDay, fourthDay, fifthDay } =
    useContext(todayContext);

  return (
    <div className="forecast">
      {
        <>
          <h3>
            {DateTime.fromISO(secondDay[0].dt_txt.slice(0, 10)).toFormat(
              "cccc"
            )}
          </h3>

          <WeatherCard forecast={secondDay} />
        </>
      }
      {
        <>
          <h3>
            {DateTime.fromISO(thirdDay[0].dt_txt.slice(0, 10)).toFormat("cccc")}
          </h3>

          <WeatherCard forecast={thirdDay} />
        </>
      }
      {
        <>
          <h3>
            {DateTime.fromISO(fourthDay[0].dt_txt.slice(0, 10)).toFormat(
              "cccc"
            )}
          </h3>

          <WeatherCard forecast={fourthDay} />
        </>
      }
      {
        <>
          <h3>
            {DateTime.fromISO(fifthDay[0].dt_txt.slice(0, 10)).toFormat("cccc")}
          </h3>

          <WeatherCard forecast={fifthDay} />
        </>
      }
    </div>
  );
};

export default Forecast;
