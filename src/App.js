import React, { Component } from 'react';
import DatePicker from './datepicker';
import './App.css';

class App extends Component {
  render() {
    const onChange = (date) => {
      console.log("selected date:", date);
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Date Picker</h2>
        </div>
        <DatePicker onChange={onChange} />
      </div>
    );
  }
}

export default App;
