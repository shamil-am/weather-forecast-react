import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";
///////////
function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { getWeatherByCityName } = useContext(WeatherContext);

  const changeLabelPositionOnFocus = () => {
    setFocused(true);
  };
  //
  const changeLabelPositionOnBlur = (e) => {
    const input = e.target;
    if (input.value === "") {
      setFocused(false);
    }
  };
  //
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  //
  const clearValue = (bool) => {
    setValue("");
    setFocused(bool);
  };
  //
  const searchWeather = () => {
    if(value){
          getWeatherByCityName(value);
    }else{
      alert("Please type city name")
    }
  };

  const onSumbitForm = (e) => {
    e.preventDefault();
    getWeatherByCityName(value);
    clearValue(true);
  };
  //
  return (
    <div className="searchBar">
      <form action="" autoComplete="off" onSubmit={onSumbitForm}>
        <label htmlFor="searchInput" className={focused ? "focused" : ""}>
          Enter city's name
        </label>
        <input
          onFocus={changeLabelPositionOnFocus}
          onBlur={changeLabelPositionOnBlur}
          id="searchInput"
          type="text"
          style={{
            border: focused ? "1px solid #2f3640" : "1px solid #dcdde1b7",
          }}
          value={value}
          onChange={valueHandler}
        />
        <div className="searchBarButtons">
          <SearchIcon className="mr-1" onClick={searchWeather} />
          <CloseIcon onClick={()=>clearValue(false)} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
