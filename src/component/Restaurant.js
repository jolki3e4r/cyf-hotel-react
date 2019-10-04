import React, { Component } from "react";

import Order from "./Order";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
