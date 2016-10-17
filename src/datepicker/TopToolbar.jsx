import React, { PropTypes } from 'react';
import moment from 'moment';

const TopToolbar = ({ onLeft, date, onRight }) => (
  <div>
    <button onClick={onLeft} >
      Voltar
    </button>
    <div>{date.format('MMMM YYYY')}</div>
    <button onClick={onRight} >
      Avançar
    </button>
  </div>
);

TopToolbar.propTypes = {
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment),
};

export default TopToolbar;
