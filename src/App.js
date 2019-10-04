import React from "react";
import Heading from "./component/Heading";
import Bookings from "./component/Bookings";
import TouristInfoCards from "./component/TouristInfoCards";
import Footer from "./component/Footer";
import Restaurant from "./component/Restaurant";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
