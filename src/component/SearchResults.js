import React, { Component } from "react";
// import FakeBookings from "../data/fakeBookings.json";
import TableRow from "./TableRow";

class SearchResults extends Component {
  render() {
    return (
      <div className="container-fluid">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">firstName</th>
              <th scope="col">surname</th>
              <th scope="col">email</th>
              <th scope="col">roomId</th>
              <th scope="col">checkInDate</th>
              <th scope="col">checkOutDate</th>
              <th scope="col">#Days</th>
            </tr>
          </thead>
          <tbody>
            <TableRow infoJSON={this.props.infoJSON} />
          </tbody>
        </table>
      </div>
    );
  }
}
export default SearchResults;

// results={FakeBookings}
