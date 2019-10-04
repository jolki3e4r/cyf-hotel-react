import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <div className="containers">
      <header className="App-header">
        CYF Hotel
        <Clock />
      </header>
      <div className="class-img">
        <img
          src="http://www.fotoclipping.com/blog/wp-content/uploads/800-300-banner/banner-1.jpg"
          alt=""
          className="App-logo mt-2"
        />
      </div>
    </div>
  );
};

export default Heading;
