import React, { PropTypes } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import Calendar from './Calendar.jsx';

class DatePicker extends React.Component {

  state = {
    date: null,
  }

  componentDidMount() {
    dialogPolyfill.registerDialog(this.refs.dialog);
  }

  componentWillMount() {
    this.setState({
      date: moment(this.props.date),
    })
  }

  onClick = () => {
    this.refs.dialog.show();
  }

  onClose = () => {
    this.refs.dialog.close();
  }

  onChange = (date) => {
    const { onChange } = this.props;
    this.setState({ date }, () => {
      if (onChange) {
        onChange(this.state.date);
      }
      this.onClose();
    });
  }

  render () {

    const { date } = this.state;
    const value = date.format('DD/MM/YYYY');

    return (
      <div>
        <div>
          <input value={value} readOnly onClick={this.onClick} type="text" />
        </div>
        <div>
          <dialog ref="dialog">
            <Calendar
              date={date}
              onClose={this.onClose}
              onChange={this.onChange}
            />
          </dialog>
        </div>
      </div>
    );
  }
}

export default DatePicker;
