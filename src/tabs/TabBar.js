import React, { Component, PropTypes } from 'react';

class TabBar extends Component {

  mapItemToTabBar = (tab) => {
    const { active, closeable, onClose } = tab.props;
    const onSelectWrapper = this.onSelectWrapper.bind(this, tab);
    const key = `tab-bar-${tab.key}`;
    const className = `mdl-tabs__tab ${(active) ? 'is-active' : '' }`;
    const closeableContainer = (closeable) ?
      <div className="closeable">
        <i className="material-icons mdl-color-text--accent" onClick={onClose}>clear</i>
      </div> : '';

    return <a key={key} onClick={onSelectWrapper} className={className}>
      {tab.props.title}
      {closeableContainer}
      <span className="mdl-tabs__ripple-container mdl-js-ripple-effect">
        <span className="mdl-ripple is-animating" />
      </span>
    </a>
  }

  onSelectWrapper(tab) {
    const { active } = tab.props;
    const { onSelect } = this.props;
    if (!active) {
      onSelect(tab);
    }
  }

  render() {

    const { children } = this.props;
    const items = children.map(this.mapItemToTabBar, this);
    return (
      <div className="mdl-tabs__tab-bar">
        {items}
      </div>
    )
  }
}

export default TabBar;
