import "./css/App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=Manila,&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return <div className="App"></div>;
}

export default App;
