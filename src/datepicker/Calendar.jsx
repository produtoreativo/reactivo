import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TopToolbar from './TopToolbar.jsx';
import BottomToolbar from './BottomToolbar.jsx';
import MonthTable from './MonthTable.jsx';
import './Calendar.css';

class Calendar extends React.Component {

  state = {
    date: moment(),
    selected: moment(),
  }

  componentWillMount() {
    const { date } = this.props;
    this.setState({ date: moment(date) });
  }

  onLeft = () => {
    const { date, selected } = this.state;
    this.setState({
      selected,
      date: date.subtract(1, 'months'),
    });
  }

  onRight = () => {
    const { date, selected } = this.state;
    this.setState({
      selected,
      date: date.add(1, 'months'),
    });
  }

  onSelect = (date) => {
    this.setState({
      date,
      selected: moment(date._d),
    });
  }

  prepareDate = () => {
    this.props.onChange(this.state.selected);
  }

  render() {
    const { onClose, landscape } = this.props;
    const { date, selected } = this.state;
    const year = selected.format('YYYY');
    const dayOfWeek = selected.format('ddd, MMM DD');
    const landscapeClass = (landscape) ? 'Calendar-landscape' : '';
    return (
      <div className={`Calendar ${landscapeClass} mdl-dialog__content`}>
        <div className="SelectedDate mdl-color--primary">
          <div className="year">
            {year}
          </div>
          <div className="dayOfWeek">
            {dayOfWeek}
          </div>
        </div>
        <div className="chooseDate">
          <TopToolbar
            date={date}
            onLeft={this.onLeft}
            onRight={this.onRight}
          />
          <MonthTable
            onSelect={this.onSelect}
            date={date}
          />
          <BottomToolbar onClose={onClose} onChange={this.prepareDate} />
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment),
};

export default Calendar;
