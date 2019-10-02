import React, { Component } from "react";
import CardSummary from "./CardSummary";
import homes from "../../../services/modules/homes.js";

class CardSummaryContainer extends Component {
  state = {
    homes: []
    // summary: [
    //   {
    //     color: "bg-aqua",
    //     icon: faShoppingBag
    //   },
    //   {
    //     color: "bg-green",
    //     icon: faChartBar
    //   },
    //   {
    //     color: "bg-yellow",
    //     icon: faUserPlus
    //   },
    //   {
    //     color: "bg-orange",
    //     icon: faChartPie
    //   }
    // ]
  };

  componentDidMount() {
    const data = homes.getHomeData();
    data.then(response => {
      this.setState({ homes: response.data });
    });
  }

  renderHomes() {
    const { homes } = this.state;
    return homes.map(home => <CardSummary home={home} />);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="card-summary-container">{this.renderHomes()}</div>
      </div>
    );
  }
}

export default CardSummaryContainer;
