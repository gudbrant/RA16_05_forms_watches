import React from "react";
import PropTypes from "prop-types";

const Clocks = ({ clocksName, timezoneUTC, handleDelete }) => {
  return (
    <div className="four wide column">
      <div className="ui segment">
        <p className="clocks-name">{clocksName.city}</p>
        <p>{timezoneUTC.utcOffset(Number(clocksName.offset)).format("hh:mm:ss")}</p>
        <button onClick={() => handleDelete(clocksName.id)}>
          <i className="delete red icon"></i>
        </button>
      </div>
    </div>
  );
};

Clocks.propTypes = {
  clocksName: PropTypes.shape({
    city: PropTypes.string,
    offset: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  timezoneUTC: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default Clocks;
