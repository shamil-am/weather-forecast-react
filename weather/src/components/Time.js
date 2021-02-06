import React, { useState } from "react";
import "../styles/Timer.css";

//
function Time() {
  const [time, setTime] = useState({});

  // const timeSetter = () => {
  //   setInterval(() => {
  //     let hours = new Date().getHours();
  //     let minutes = new Date().getMinutes();
  //     if (hours <= 9) {
  //       hours = `0${hours}`;
  //     }
  //     if (minutes <= 9) {
  //       minutes = `0${minutes}`;
  //     }
  //     setTime({
  //       hours,
  //       minutes,
  //     });
  //   }, 1000);
  // };
  // timeSetter();
  return (
    <div className="timeHolder">
      <h3>
        {time.hours}
        <span className="dot">:</span>
        {time.minutes}
      </h3>
    </div>
  );
}

export default Time;
