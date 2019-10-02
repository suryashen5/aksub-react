import configs from "../../configs";
import {
  faShoppingBag,
  faChartBar,
  faUserPlus,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";

const {
  homes
} = configs.urls;

const getHomeData = {
  method: "GET",
  urls: homes.getHomes,
  code: 200,
  message: "success",
  data: [{
      id: 1,
      code: "ORDER",
      name: "New Orders",
      value: 150,
      color: "bg-aqua",
      icon: faShoppingBag
    },
    {
      id: 2,
      code: "RATE",
      name: "Bounce Rate",
      value: 53,
      color: "bg-green",
      icon: faChartBar
    },
    {
      id: 3,
      code: "REGISTRATION",
      name: "User Registration",
      value: 44,
      color: "bg-yellow",
      icon: faUserPlus
    },
    {
      id: 4,
      code: "VISITORS",
      name: "Unique Visitors",
      value: 65,
      color: "bg-orange",
      icon: faChartPie
    },
  ]
}

const getHomeByIdData = {
  method: "GET",
  urls: homes.getHomeById(1),
  code: 200,
  message: "success",
  data: {
    id: 1,
    code: "ORDER",
    name: "New Orders",
    value: 150
  }
}

export default [getHomeData, getHomeByIdData];