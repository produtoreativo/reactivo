import React, { Component } from 'react';
import DatePicker from './datepicker';
import Tabs, { Tab } from 'tabs';
import './App.css';

class App extends Component {

  addTab = () => {

    const key = `tab-${new Date().getTime()}`;

    this.refs.tabs.addTab(
      <Tab
        key={key}
        title={key}
        closeable
      >
        Content {key}
      </Tab>
    );
  }

  render() {
    const onChange = (date) => {
      console.log("selected date:", date);
    }

    const addTab = this.addTab.bind(this);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Reactivo: Material Design</h2>
        </div>

        <Tabs ref="tabs">
          <Tab key="tab1" active title="Tab one">
            Content 1
            <button onClick={addTab}>Add Tab</button>
          </Tab>
          <Tab key="tab2" title="Tab Two">
            Content 2
          </Tab>
          <Tab key="tab3" title="Title 3">
            Content 3
          </Tab>
        </Tabs>

        <DatePicker onChange={onChange} />
      </div>
    );
  }
}

export default App;
