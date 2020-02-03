import React from "react";
import "./index.css";

const WeekDaysComponent = props => (
  <header className="weekdays">
    {props.days.map((weekday, i) => (
      <strong key={i}>{weekday}</strong>
    ))}
  </header>
);

export default WeekDaysComponent;
