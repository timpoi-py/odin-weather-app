import "./css/App.css";
import { useEffect, useState } from "react";

function App() {
  const [cityData, setCityData] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState("seoul");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [weather, setWeather] = useState();
  const [windSpeed, setWindSpeed] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
    console.log(e.target[0].value);
    e.target.reset();
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city},&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setCityData(data);
        setCountry(data[0].country);
        setCity(data[0].name);
        setLat(data[0].lat);
        setLon(data[0].lon);
        const dataLat = data[0].lat;
        const dataLon = data[0].lon;
        console.log(data);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${dataLat}&lon=${dataLon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw response;
          })
          .then((data) => {
            setDate(new Date(data.dt * 1000).toLocaleDateString());
            setTime(new Date(data.dt * 1000).toLocaleTimeString());
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
            setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString());
            setWeather(data.weather[0].description);
            setWindSpeed(data.wind.speed);
            console.log(data);
          });
      });
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={submitHandler}>
          <input type="text" />
        </form>
        <div className="upper-wrapper">
          <p>
            {city}, {country}
          </p>
          <p>{date}</p>
          <p>{time}</p>
          <p>
            {temp}
            <span>&#176;</span>C
          </p>
        </div>
        <p>{humidity}%</p>
        <p>{sunrise}</p>
        <p>{sunset}</p>
        <p>
          {weather.replace(
            weather.slice(0, 1),
            weather.slice(0, 1).toUpperCase()
          )}
        </p>
        <p>{windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default App;
