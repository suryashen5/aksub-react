import React, { Component } from "react";
import CardSummary from "./CardSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingBag, faChartBar, faPersonBooth, faUserPlus, faChartPie } from "@fortawesome/free-solid-svg-icons";

class CardSummaryContainer extends Component {
  state = {
    summary: [
      {
        name: "New Orders",
        value: 150,
        color: "bg-aqua",
        icon: faShoppingBag
      },
      {
        name: "Bounce Rate",
        value: "53%",
        color: "bg-green",
        icon: faChartBar
      },
      {
        name: "User Registrations",
        value: 44,
        color: "bg-yellow",
        icon: faUserPlus
      },
      {
        name: "Unique Visitors",
        value: 65,
        color: "bg-orange",
        icon: faChartPie
      }
    ]
  };

  renderCardSummary = summary => {
    return summary.map(card => <CardSummary card={card} />);
  };

  render() {
    const { summary } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="card-summary-container">
          {this.renderCardSummary(summary)}
        </div>
      </div>
    );
  }
}

export default CardSummaryContainer;
