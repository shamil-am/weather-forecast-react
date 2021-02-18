import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";
import "../styles/MainBody.css";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

//////////////
function MainBody() {
  const { weather } = useContext(WeatherContext);
  const timestampToDate = (timestamp) => {
    let unix_timestamp = timestamp;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    // let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  };
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };
  return weather ? (
    <div className="row mainbody py-3">
      <div className="col-12 city">
        <h2>
          {weather.name}-{weather.sys.country}
        </h2>
      </div>
      <div className="col-12 col-md-3">
        <div className="sunline">
          <div className="sunrise">
            <WbSunnyIcon style={{ color: "yellow", fontSize: "2rem" }} />
            <ArrowUpwardIcon style={{ fontSize: "1rem" }} />
            <h6>Sunrise: {timestampToDate(weather.sys.sunrise || null)}</h6>
          </div>
          <div className="sunset">
            <WbSunnyIcon style={{ color: "#ffbe76", fontSize: "2rem" }} />
            <ArrowDownwardIcon style={{ fontSize: "1rem" }} />
            <h6>Sunset: {timestampToDate(weather.sys.sunset || null)}</h6>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-9 maininfo">
        <div className="feels_like">
          <h5>Feels like</h5>
          <span>{kelvinToCelsius(weather.main.feels_like)} °C</span>
        </div>
        <div className="humidity">
          <h5>Humidity</h5>
          <span>{weather.main.humidity} %</span>
        </div>
        <div className="pressure">
          <h5>Pressure</h5>
          <span>{weather.main.pressure}</span>
        </div>
        <div className="temp">
          <h5>Temperature</h5>
          <span>{kelvinToCelsius(weather.main.temp)} °C</span>
        </div>
      </div>
    </div>
  ) : (
    <div>Enter city name</div>
  );
}

export default MainBody;
