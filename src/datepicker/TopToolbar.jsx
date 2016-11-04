import React, { PropTypes } from 'react';
import moment from 'moment';
import './TopToolbar.css';

const TopToolbar = ({ onLeft, date, onRight }) => (
  <div className="TopToolbar">
    <button
      onClick={onLeft}
      className="mdl-button mdl-js-button mdl-button--icon"
    >
      <i className="material-icons">keyboard_arrow_left</i>
    </button>
    <div className="formatted-month">{date.format('MMMM YYYY')}</div>
    <button
      onClick={onRight}
      className="mdl-button mdl-js-button mdl-button--icon"
    >
      <i className="material-icons">keyboard_arrow_right</i>
    </button>
  </div>
);

TopToolbar.propTypes = {
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment),
};

export default TopToolbar;
