import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      infoJSON: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(responsive => responsive.json())
      .then(data =>
        this.setState({
          infoJSON: data,
          loading: false
        })
      )
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  search = searchVal => {
    let filtersFirstName = this.state.infoJSON.filter(
      name => searchVal === name.firstName || searchVal === name.surname
    );

    this.setState({
      infoJSON: filtersFirstName
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <span role="img" aria-label="#">
          Loading...
        </span>
      );
    } else if (this.state.error) {
      return (
        <span role="img" aria-label="#">
          Something went wrong
        </span>
      );
    }
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults infoJSON={this.state.infoJSON} />
        </div>
      </div>
    );
  }
}

export default Bookings;
