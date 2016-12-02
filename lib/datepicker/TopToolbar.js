'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/cmilfont/projetos/reactivo/node_modules/react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('/Users/cmilfont/projetos/reactivo/node_modules/moment');

var _moment2 = _interopRequireDefault(_moment);

require('./TopToolbar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopToolbar = function TopToolbar(_ref) {
  var onLeft = _ref.onLeft,
      date = _ref.date,
      onRight = _ref.onRight;
  return _react2.default.createElement(
    'div',
    { className: 'TopToolbar' },
    _react2.default.createElement(
      'button',
      {
        onClick: onLeft,
        className: 'mdl-button mdl-js-button mdl-button--icon'
      },
      _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        'keyboard_arrow_left'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'formatted-month' },
      date.format('MMMM YYYY')
    ),
    _react2.default.createElement(
      'button',
      {
        onClick: onRight,
        className: 'mdl-button mdl-js-button mdl-button--icon'
      },
      _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        'keyboard_arrow_right'
      )
    )
  );
};

TopToolbar.propTypes = {
  onLeft: _react.PropTypes.func.isRequired,
  onRight: _react.PropTypes.func.isRequired,
  date: _react.PropTypes.instanceOf(_moment2.default)
};

exports.default = TopToolbar;