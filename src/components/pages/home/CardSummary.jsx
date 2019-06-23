import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card-summary.css";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const CardSummary = props => (
  <div className="card-summary-block">
    <div className={props.card.color}>
    <div className="card-summary-content">
      <div className="card-summary-value">
        <h3 className="text-color-white">{props.card.value}</h3>
        <p className="text-color-white">{props.card.name}</p>
      </div>
      <div className="card-summary-icon">
        <h1>
          <FontAwesomeIcon icon={props.card.icon} />
        </h1>
      </div>
    </div>
    <div className="card-summary-footer">
      <p className="text-color-white">More info<i> <FontAwesomeIcon icon={faArrowCircleRight} /></i></p>
    </div>
    </div>
  </div>
);

export default CardSummary;
