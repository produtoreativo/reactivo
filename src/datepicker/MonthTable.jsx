import React, { PropTypes } from 'react';
import moment from 'moment';
import Day from './Day.jsx';
import './MonthTable.css';
import './Day.css';

class MonthTable extends React.Component {

  onSelect = ({ target: { textContent: day } }) => {
    const { onSelect, date } = this.props;
    const selectedDate = moment([date.year(), date.month(), Number(day)]);
    onSelect(selectedDate);
  }

  mapColumns = day => (<th key={day}>{day.substring(0, 3)}</th>)

  createRows = () => {
    const { date } = this.props;
    const month = date.month();

    const current = moment();
    const currentDay = current.date();
    const currentMonth = current.month();

    const dayOfMonth = date.date();
    const dateOfMonth = moment(date._d).startOf('month');
    const firstDay = dateOfMonth.day();
    const lastDay = dateOfMonth.endOf('month').date();
    let count = 0;

    const rows = [...Array(6)].map((_, r) => {
      const columns = [...Array(7)].map((x, c) => {
        if (count === lastDay) {
          count = 0;
        }
        if ((r === 0 && c === firstDay) || count > 0) {
          count += 1;
        }
        const currentDayClass = (currentMonth === month && count === currentDay) ? 'mdl-color-text--primary' : '';
        const selectedDay = (dayOfMonth === count) ? 'mdl-color--primary selectedDay' : '';
        const className = `  ${currentDayClass} ${selectedDay}`;
        const key = `datepicker-${r}-${c}-day-${count}`;
        return (
          <Day
            onSelect={this.onSelect}
            key={key}
            day={count}
            className={className}
          />
        );
      });
      return <tr key={`datepicker-row-${r}`}>{columns}</tr>;
    });
    return rows;
  }

  render() {
    const columns = moment.weekdays().map(this.mapColumns);
    const rows = this.createRows();
    const table = (
      <table>
        <thead>
          <tr>
            {columns}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
    return (
      <div className="reactive-monthtable">{table}</div>
    );
  }
}

MonthTable.propTypes = {
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment),
};

export default MonthTable;
