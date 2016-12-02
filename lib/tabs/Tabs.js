'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/cmilfont/projetos/reactivo/node_modules/react');

var _react2 = _interopRequireDefault(_react);

var _TabBar = require('./TabBar.js');

var _TabBar2 = _interopRequireDefault(_TabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: null,
      tabs: []
    }, _this.addTab = function (tab) {
      var tabs = _this.state.tabs;

      var newTabs = [].concat((0, _toConsumableArray3.default)(tabs));
      newTabs.push(_react2.default.cloneElement(tab, {
        onClose: _this.onClose.bind(_this, tab)
      }));
      _this.setState((0, _extends3.default)({}, _this.state, {
        tabs: newTabs
      }));
    }, _this.onClose = function (tab, event) {
      event.preventDefault();
      event.stopPropagation();
      var tabs = _this.state.tabs;

      _this.setState((0, _extends3.default)({}, _this.state, {
        tabs: tabs.filter(function (item) {
          return item.key !== tab.key;
        })
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'onSelect',
    value: function onSelect(tab) {
      var tabs = this.state.tabs;

      this.setState({
        tabs: tabs.map(function (tabItem) {
          if (tabItem.props.active) {
            return _react2.default.cloneElement(tabItem, { active: false });
          }
          if (tab.key === tabItem.key) {
            return _react2.default.cloneElement(tabItem, { active: true });
          }
          return tabItem;
        })
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabs = this.props.children;

      var active = tabs.reduce(function (active, item) {
        return item.props.active ? item : active;
      }, tabs[0]);
      var cloneElement = _react2.default.cloneElement;

      this.setState({
        tabs: tabs.map(function (tab) {
          return cloneElement(tab, {
            onClose: _this2.onClose.bind(_this2, tab)
          });
        }),
        active: active
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = this.state.tabs;

      var onSelect = this.onSelect.bind(this);

      return _react2.default.createElement(
        'div',
        { className: 'reactivo-tabs mdl-tabs is-upgraded' },
        _react2.default.createElement(
          _TabBar2.default,
          { onSelect: onSelect },
          tabs
        ),
        tabs
      );
    }
  }]);
  return Tabs;
}(_react.Component);

exports.default = Tabs;