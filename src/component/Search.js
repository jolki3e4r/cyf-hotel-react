import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  submit = event => {
    event.preventDefault();
    this.props.search(this.state.searchInput);
  };

  handleSearchInput = event => {
    return this.setState({ searchInput: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box" onSubmit={this.submit}>
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  value={this.state.searchInput}
                  onChange={this.handleSearchInput}
                />
                <button className="btn btn-primary">Search IDs</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
