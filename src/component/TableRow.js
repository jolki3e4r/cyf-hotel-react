import React, { Component } from "react";
import moment from "moment";

class TableRow extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      currentIndex: -1
    };
  }

  handleClick = index => {
    this.setState(previusState => {
      return { currentIndex: previusState.currentIndex === index ? -1 : index };
    });
  };
  render() {
    const arrayInfo = this.props.infoJSON;
    return arrayInfo.map((name, index) => {
      return (
        <tr
          key={name.id}
          className={this.state.currentIndex === index ? "changeColor" : ""}
          onClick={() => {
            this.handleClick(index);
          }}
        >
          <th scope="row">{name.id}</th>
          <td>{name.title}</td>
          <td>{name.firstName}</td>
          <td>{name.surname}</td>
          <td>{name.email}</td>
          <td>{name.roomId}</td>
          <td>{name.checkInDate}</td>
          <td>{name.checkOutDate}</td>
          <td>
            {moment(name.checkOutDate).diff(moment(name.checkInDate), "days")}
          </td>
        </tr>
      );
    });
  }
}

export default TableRow;
