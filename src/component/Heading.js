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
          src="https://s11759.pcdn.co/wp-content/uploads/2018/04/RESI-BOS-18-June-Banner-1080x300.jpg"
          alt=""
          className="App-logo mt-2 mx-5"
        />
      </div>
    </div>
  );
};

export default Heading;
