'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBar = function (_Component) {
  (0, _inherits3.default)(TabBar, _Component);

  function TabBar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).call.apply(_ref, [this].concat(args))), _this), _this.mapItemToTabBar = function (tab) {
      var _tab$props = tab.props,
          active = _tab$props.active,
          closeable = _tab$props.closeable,
          onClose = _tab$props.onClose;

      var onSelectWrapper = _this.onSelectWrapper.bind(_this, tab);
      var key = 'tab-bar-' + tab.key;
      var className = 'mdl-tabs__tab ' + (active ? 'is-active' : '');
      var closeableContainer = closeable ? _react2.default.createElement(
        'div',
        { className: 'closeable' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons mdl-color-text--accent', onClick: onClose },
          'clear'
        )
      ) : '';

      return _react2.default.createElement(
        'a',
        { key: key, onClick: onSelectWrapper, className: className },
        tab.props.title,
        closeableContainer,
        _react2.default.createElement(
          'span',
          { className: 'mdl-tabs__ripple-container mdl-js-ripple-effect' },
          _react2.default.createElement('span', { className: 'mdl-ripple is-animating' })
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TabBar, [{
    key: 'onSelectWrapper',
    value: function onSelectWrapper(tab) {
      var active = tab.props.active;
      var onSelect = this.props.onSelect;

      if (!active) {
        onSelect(tab);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var items = children.map(this.mapItemToTabBar, this);
      return _react2.default.createElement(
        'div',
        { className: 'mdl-tabs__tab-bar' },
        items
      );
    }
  }]);
  return TabBar;
}(_react.Component);

exports.default = TabBar;