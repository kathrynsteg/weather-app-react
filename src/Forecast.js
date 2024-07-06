import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <u>
        <li>{props.description}</li>
        <li>{props.humidity}%</li>
        <li>{props.windSpeed} mph</li>
      </u>
    </div>
  );
}
