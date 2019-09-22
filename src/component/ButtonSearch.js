import React from "react";

const ButtonSearch = props => {
  const label = props.label;
  return <button className="btn btn-primary">{label}</button>;
};

export default ButtonSearch;
