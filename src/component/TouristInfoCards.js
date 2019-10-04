import React, { Component } from "react";

class TouristInfoCards extends Component {
  render() {
    return (
      <div className="card-group text-center">
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/11/19/02/architecture-3076685_150.jpg"
            className="card-img-top tamano"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_150.jpg"
            className="card-img-top tamano"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_150.jpg "
            className="card-img-top tamano"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="https://www.visitlondon.com/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TouristInfoCards;
