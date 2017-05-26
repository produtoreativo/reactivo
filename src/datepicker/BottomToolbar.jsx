import React from 'react';
import PropTypes from 'prop-types';

const BottomToolbar = ({ onClose, onChange }) => (
  <div className="mdl-dialog__actions">
    <button type="button" className="mdl-button mdl-color-text--accent" onClick={onChange}>Ok</button>
    <button type="button" className="mdl-button mdl-color-text--accent close" onClick={onClose}>Close</button>
  </div>
);

BottomToolbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BottomToolbar;
