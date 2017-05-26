import React from 'react';
import { number, string, object, shape} from 'prop-types';

class Snackbar extends React.PureComponent {

  static propTypes = {
    timeout: number,
    className: string,
    style: object,
    notification: shape({
      message: string.isRequired,
    }).isRequired,
  }

  state = {
    active: false
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: true });
  }

  componentDidUpdate() {
    const { active } = this.state;
    if (active) {
      this.intervalId = setInterval(this.close, this.timeout);
    } else {
      clearInterval(this.intervalId);
    }
  }

  close = () => {
    this.setState({ active: false });
  }

  render () {
    const { active } = this.state;
    const { style, timeout, className, notification: { message } } = this.props;
    this.timeout = timeout || 2000;
    const defaultStyle = {
      ...style,
    };
    const activeClass = active ? 'mdc-snackbar--active' : '';
    const snackbarClass = `mdc-snackbar ${activeClass} ${className}`;
    return (
      <div className={snackbarClass}
           style={defaultStyle}
           aria-live="assertive"
           aria-atomic="true"
           aria-hidden="true">
        <div className="mdc-snackbar__text">{message}</div>
        <div className="mdc-snackbar__action-wrapper">
          <button type="button" className="mdc-button mdc-snackbar__action-button"></button>
        </div>
      </div>
    )
  }
}

export default Snackbar;
