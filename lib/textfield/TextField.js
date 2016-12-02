'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _uuid = require('/Users/cmilfont/projetos/reactivo/node_modules/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function (_React$Component) {
  (0, _inherits3.default)(TextField, _React$Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      id: (0, _uuid2.default)(),
      focused: false,
      invalid: false,
      errors: []
    }, _this.onFocus = function () {
      _this.setState((0, _extends3.default)({}, _this.state, {
        focused: true
      }));
    }, _this.mapErrors = function () {
      var errors = _this.props.errors || [];
      return errors.map(function (error) {
        return _react2.default.createElement(
          'b',
          null,
          error
        );
      });
    }, _this.handleBlur = function () {
      var value = _this.state.value;

      var focused = !!value;
      _this.setState((0, _extends3.default)({}, _this.state, {
        focused: focused
      }));
    }, _this.onChange = function (event) {
      var value = event.target.value;

      _this.setState((0, _extends3.default)({}, _this.state, {
        value: value
      }), function () {
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(value);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          value = _props.value,
          errors = _props.errors;

      var focused = !!value;
      var invalid = !!errors;
      var newValue = value ? String(value) : '';
      this.setState({
        value: newValue,
        focused: focused,
        invalid: invalid,
        errors: errors || []
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          errors = nextProps.errors;

      var focused = !!value;
      var invalid = !!errors;
      this.setState({
        value: value,
        focused: focused,
        invalid: invalid,
        errors: errors || []
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          onChange = _state.onChange,
          value = _state.value,
          focused = _state.focused,
          invalid = _state.invalid,
          id = _state.id;
      var _props2 = this.props,
          labelName = _props2.labelName,
          name = _props2.name,
          onClick = _props2.onClick;

      var isFocused = focused ? 'is-focused' : '';
      var isInvalid = invalid ? 'is-invalid' : '';
      var errors = this.mapErrors();
      return _react2.default.createElement(
        'div',
        {
          key: id,
          className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label ' + isInvalid + ' ' + isFocused },
        _react2.default.createElement('input', {
          className: 'mdl-textfield__input',
          type: 'text',
          id: id,
          name: name,
          value: value,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onBlur: this.handleBlur,
          onClick: onClick
        }),
        _react2.default.createElement(
          'label',
          { className: 'mdl-textfield__label', htmlFor: id },
          labelName
        ),
        _react2.default.createElement(
          'span',
          { className: 'mdl-textfield__error' },
          errors
        )
      );
    }
  }]);
  return TextField;
}(_react2.default.Component);

exports.default = TextField;