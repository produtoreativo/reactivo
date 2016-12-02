"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("/Users/cmilfont/projetos/reactivo/node_modules/react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BottomToolbar = function BottomToolbar(_ref) {
  var onClose = _ref.onClose,
      onChange = _ref.onChange;
  return _react2.default.createElement(
    "div",
    { className: "mdl-dialog__actions" },
    _react2.default.createElement(
      "button",
      { type: "button", className: "mdl-button mdl-color-text--accent", onClick: onChange },
      "Ok"
    ),
    _react2.default.createElement(
      "button",
      { type: "button", className: "mdl-button mdl-color-text--accent close", onClick: onClose },
      "Close"
    )
  );
};

BottomToolbar.propTypes = {
  onClose: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

exports.default = BottomToolbar;