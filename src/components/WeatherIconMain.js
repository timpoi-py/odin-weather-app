import React, { useContext } from "react";
import { todayContext } from "../App.js";
import "../css/styles";

const WeatherIconMain = () => {
  const { weatherMain } = useContext(todayContext);

  const switchIcon = () => {
    switch (weatherMain) {
      case "Rain":
        return <span className="material-symbols-outlined rainy">rainy</span>;
        break;
      case "Drizzle":
        return <span className="material-symbols-outlined rainy">rainy</span>;
        break;
      case "Snow":
        return (
          <span className="material-symbols-outlined snowy">weather_snowy</span>
        );
        break;
      case "Mist":
        return <span className="material-symbols-outlined foggy">foggy</span>;
        break;
      case "Smoke":
        return <span className="material-symbols-outlined foggy">foggy</span>;
        break;
      case "Haze":
        return <span className="material-symbols-outlined foggy">foggy</span>;
        break;
      case "Dust":
        return <span className="material-symbols-outlined foggy">foggy</span>;
        break;
      case "Fog":
        return <span className="material-symbols-outlined foggy">foggy</span>;
        break;
      case "Tornado":
        return (
          <span className="material-symbols-outlined tornado">tornado</span>
        );
        break;
      case "Clear":
        return (
          <span className="material-symbols-outlined clear_day">clear_day</span>
        );
        break;

      case "Clouds":
        return <span className="material-symbols-outlined cloudy">cloudy</span>;
        break;

      default:
        return <span className="material-symbols-outlined cloudy">cloudy</span>;
        break;
    }
  };

  return (
    <div className="weather-icon-main">
      {switchIcon()}
      {/* drizzle, rain, snow, mist, smoke, haze, dust, fog, sand, ash, squall, tornado, clear, clouds */}
    </div>
  );
};

export default WeatherIconMain;
