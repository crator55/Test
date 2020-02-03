import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const MonthComponent = props => (
  <header className="month-header">
    <div className="row">
      <Link to={"/" + props.prevM.slug}>
        <i className="fas fa-chevron-circle-left" />
      </Link>
    </div>
    <div className="row">
      <h1>{props.curM.name}</h1>
    </div>
    <div className="row">
      <Link to={"/" + props.nextM.slug}>
        <i className="fas fa-chevron-circle-right" />
      </Link>
    </div>
  </header>
);

export default MonthComponent;
