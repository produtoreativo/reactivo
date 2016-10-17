import React, { PropTypes } from 'react';

const Day = ({day, className, onSelect}) => {

  const chooseButton = (day) ?
    <div onClick={onSelect} className={`day ${className}`}>{day}</div> :
    <div className="day"></div>

  return (<td>{chooseButton}</td>);
}

export default Day;
