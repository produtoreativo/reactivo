import React, { Component, PropTypes } from 'react';
import TabBar from './TabBar.jsx';

class Tabs extends Component {

  state = {
    active: null,
    tabs: [],
  }

  addTab = (tab) => {
    const { tabs } = this.state;
    const newTabs = [...tabs];
    newTabs.push(
      React.cloneElement(tab, {
        onClose: this.onClose.bind(this, tab)
      })
    );
    this.setState({
      ...this.state,
      tabs: newTabs,
    });
  }

  onClose = (tab, event) => {
    event.preventDefault();
    event.stopPropagation();
    const { tabs } = this.state;
    this.setState({
      ...this.state,
      tabs: tabs.filter(item => item.key !== tab.key),
    });
  }

  onSelect(tab) {
    const { tabs } = this.state;
    this.setState({
      tabs: tabs.map(tabItem => {
        if (tabItem.props.active) {
          return React.cloneElement(tabItem, { active: false });
        }
        if (tab.key === tabItem.key) {
          return React.cloneElement(tabItem, { active: true });
        }
        return tabItem;
      })
    });
  }

  componentWillMount() {
    const { children: tabs } = this.props;
    const active = tabs.reduce((active, item) => (
      (item.props.active) ? item : active
    ), tabs[0]);
    this.setState({ tabs, active });
  }

  render () {
    const { tabs } = this.state;
    const onSelect = this.onSelect.bind(this);

    return (
      <div className="mdl-tabs is-upgraded">
        <TabBar onSelect={onSelect}>{tabs}</TabBar>
        {tabs}
      </div>
    )
  }
}

export default Tabs;
