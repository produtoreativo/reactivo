import React, { Component } from 'react';
import uuid from 'uuid';
import DatePicker from './datepicker';
import TextField from 'textfield/TextField.js';
import { Tabs, Tab } from 'tabs';
import FormContainer from 'form/FormContainer.jsx';
import metadata from 'Seed.js';
import Button from 'button';
import './App.css';
import 'reactivo-css.js';

class App extends Component {

  addTab = () => {

    const key = uuid();

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
    const onChange = (text) => {
      console.log("selected text:", text);
    }

    const addTab = this.addTab.bind(this);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Reactivo: Material Design</h2>
        </div>

        <Tabs ref="tabs">
          <Tab key="tab1" active title="Add Tab">

            <div className="snippet-demo-container demo-switch demo-switch__switch-on">
              <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="switch-1" data-upgraded=",MaterialSwitch,MaterialRipple">
                <input type="checkbox" id="switch-1" className="mdl-switch__input" checked="" />
                <span className="mdl-switch__label"></span>
                <div className="mdl-switch__track"></div>
                <div className="mdl-switch__thumb">
                  <span className="mdl-switch__focus-helper"></span>
                </div>
                <span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple">
                  <span className="mdl-ripple is-animating" style={{
                      width: '137.765px;',
                      height: '137.765px;',
                      transform: 'translate(-50%, -50%) translate(24px, 24px);',
                    }}
                  />
                </span>
              </label>
            </div>

            <Button onClick={addTab} name="addTab" label="Add Tab" />
          </Tab>

          <Tab key="tabtext" title="TextField">
            <TextField
              key={uuid()}
              labelName="TextField Example"
              onChange={onChange}
            />

            <TextField
              key={uuid()}
              labelName="TextField with Erros"
              onChange={onChange}
              errors={['Validation error']}
            />
          </Tab>
          <Tab key="tab2" title="DatePicker">
            <DatePicker
              key={uuid()}
              labelName="DatePicker"
              onChange={onChange} />

              <DatePicker
                key={uuid()}
                landscape
                labelName="Landscape DatePicker"
                onChange={onChange} />
          </Tab>
          <Tab key="tab3" title="Form Container">
            <FormContainer metadata={metadata} />
          </Tab>
          <Tab key="tab4" closeable title="Closeable Tab">
            Content
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default App;
