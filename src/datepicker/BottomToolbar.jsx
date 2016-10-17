import React, { PropTypes } from 'react';

const BottomToolbar = ({ onClose, onChange }) => {
  return (
    <div className="BottomToolbar">
      <button onClick={onClose}>Close</button>
      <button onClick={onChange}>Ok</button>
    </div>
  )
}

export default BottomToolbar;
