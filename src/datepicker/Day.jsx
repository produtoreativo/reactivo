import React, { PropTypes } from 'react';

const Day = ({ day, className, onSelect }) => {
  const classNameMounted = `day${className}`;
  const chooseButton = (day) ? <div onClick={onSelect} className={classNameMounted} >
    {day}
  </div> : <div className="day" />;

  return (<td>{chooseButton}</td>);
};

Day.propTypes = {
  onSelect: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Day;
