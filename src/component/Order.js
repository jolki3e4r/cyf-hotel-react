import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      orders: 0
    };
  }

  addOrder = () => {
    this.setState(previousState => {
      return { orders: previousState.orders + 1 };
    });
  };
  render() {
    return (
      <li>
        {this.props.orderType} - {this.state.orders}
        <RestaurantButton addOrder={this.addOrder} />
      </li>
    );
  }
}

export default Order;
