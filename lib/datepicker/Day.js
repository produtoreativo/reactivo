"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("/Users/cmilfont/projetos/reactivo/node_modules/react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Day = function Day(_ref) {
  var day = _ref.day,
      className = _ref.className,
      onSelect = _ref.onSelect;

  var classNameMounted = "day" + className;
  var chooseButton = day ? _react2.default.createElement(
    "div",
    { onClick: onSelect, className: classNameMounted },
    day
  ) : _react2.default.createElement("div", { className: "day" });

  return _react2.default.createElement(
    "td",
    null,
    chooseButton
  );
};

Day.propTypes = {
  onSelect: _react.PropTypes.func.isRequired,
  day: _react.PropTypes.number.isRequired,
  className: _react.PropTypes.string
};

exports.default = Day;