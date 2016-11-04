import React, { PropTypes } from 'react';
import uuid from 'uuid';

class Tab extends React.Component {

  state = {
    active: false,
  }

  activeClassName = 'is-active'

  componentWillReceiveProps(props) {
    const { active } = props;
    this.setState({ active });
  }

  componentWillMount() {
    const { active } = this.props;
    this.setState({ active });
  }

  render () {
    const { active } = this.state;
    const className = `mdl-tabs__panel ${(active) ? this.activeClassName : ''}`;

    return (
      <div key={uuid()} className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default Tab;
