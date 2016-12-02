'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.Tab = exports.TabBar = exports.Tabs = undefined;

var _tabs = require('./tabs');

Object.defineProperty(exports, 'TabBar', {
  enumerable: true,
  get: function get() {
    return _tabs.TabBar;
  }
});
Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _tabs.Tab;
  }
});

var _tabs2 = _interopRequireDefault(_tabs);

var _textfield = require('./textfield');

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tabs = _tabs2.default;
exports.TextField = _textfield2.default;