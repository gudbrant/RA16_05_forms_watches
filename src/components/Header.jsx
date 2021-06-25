import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const { header } = props;
  return (
    <h1 className="header">{header}</h1>
  );
}

Header.defaultProps = {
  header: "World's Clocks"
};

Header.propTypes = {
  header: PropTypes.string
};
