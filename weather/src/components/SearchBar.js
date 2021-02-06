import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

///////////
function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

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
  const clearValue = () => {
    setValue("");
    setFocused(false);
  };
  //
  const searchWeather = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e0cfb54a0ca365aab402c260db2feed8`
      );
      let result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <div className="searchBar">
      <form action="" autoComplete="off ">
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
          <CloseIcon onClick={clearValue} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
