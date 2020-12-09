import React from "react";
import PropTypes from "prop-types";
import { Phone } from "./svgindex";

const TelePhone = ({ mobile, text }) => (
  <React.Fragment>
    {text}
    <div className="telephone">
      <div className="call">
        <a href={`tel:${mobile}`}>{mobile}</a>
        <Phone />
      </div>
    </div>
  </React.Fragment>
);

TelePhone.propTypes = {
  mobile: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

TelePhone.defaultProps = {
  mobile: "9292929929",
  text: "Joe Doe",
};

export default TelePhone;
