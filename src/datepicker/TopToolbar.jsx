import React, { PropTypes } from 'react';

class TopToolbar extends React.Component {
  render () {
    const date = this.props.date.format('MMMM YYYY');
    return (
      <div>
        <button onClick={this.props.onLeft} >
          Voltar
        </button>
        <div>{date}</div>
        <button onClick={this.props.onRight} >
          Avançar
        </button>
      </div>
    );
  }
}

export default TopToolbar;
