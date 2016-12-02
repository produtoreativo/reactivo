import React, { PropTypes } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import moment from 'moment';
import Calendar from './Calendar.jsx';
import TextField from 'textfield/TextField.js';
import './DatePicker.css';

class DatePicker extends React.Component {

  state = {
    date: null,
  }

  componentWillMount() {
    this.setState({
      date: moment(this.props.date),
    });
  }

  componentDidMount() {
    dialogPolyfill.registerDialog(this.refs.dialog);
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

  onChangeTextField = () => {
    // const { onChange } = this.props;
    // this.setState({ date }, () => {
    //   if (onChange) {
    //     onChange(this.state.date);
    //   }
    //   this.onClose();
    // });
  }

  render() {
    const { labelName, errors, landscape } = this.props;
    const { date } = this.state;
    const value = date.format('DD/MM/YYYY');
    const landscapeClass = (landscape) ? 'mdl-dialog--landscape' : '';

    return (
      <div>
        <TextField
          labelName={labelName}
          value={value}
          onClick={this.onClick}
          errors={errors}
          onChange={this.onChangeTextField}
        />
        <div>
          <dialog ref="dialog" className={`mdl-dialog ${landscapeClass}`}>
            <Calendar
              landscape={landscape}
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

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment),
};

export default DatePicker;
