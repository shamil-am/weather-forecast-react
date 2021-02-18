import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  const getWeatherByCityName = async (cityName) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e0cfb54a0ca365aab402c260db2feed8`
      );
      let result = await response.json();
      // console.log(result)
      if (result.cod !== "404") setWeather(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WeatherContext.Provider value={{ weather, getWeatherByCityName }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
