import React, { PropTypes } from 'react';

const BottomToolbar = ({ onClose, onChange }) => (
  <div className="BottomToolbar">
    <button onClick={onClose}>Close</button>
    <button onClick={onChange}>Ok</button>
  </div>
);

BottomToolbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BottomToolbar;
