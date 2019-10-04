import React from "react";

const footerInfContactus = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com ",
  "0123 456789"
];

const Footer = () => {
  return (
    <div className="container col-12 footer">
      <h3>Contactus Us</h3>
      <ul className="row col-10 classUl">
        {footerInfContactus.map((footerInfContactus, index) => (
          <li className="li" key={index}>
            {footerInfContactus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
