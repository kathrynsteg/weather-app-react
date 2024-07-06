import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div id="icon"></div>
      <div className="weatherAppTemperature">{props.temperature}</div>
      <div className="weatherAppUnit">°C</div>
    </div>
  );
}
