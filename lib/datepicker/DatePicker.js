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

var _dialogPolyfill = require('/Users/cmilfont/projetos/reactivo/node_modules/dialog-polyfill');

var _dialogPolyfill2 = _interopRequireDefault(_dialogPolyfill);

var _moment = require('/Users/cmilfont/projetos/reactivo/node_modules/moment');

var _moment2 = _interopRequireDefault(_moment);

var _Calendar = require('./Calendar.jsx');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _TextField = require('/Users/cmilfont/projetos/reactivo/src/textfield/TextField.js');

var _TextField2 = _interopRequireDefault(_TextField);

require('./DatePicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_React$Component) {
  (0, _inherits3.default)(DatePicker, _React$Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: null
    }, _this.onClick = function () {
      _this.refs.dialog.show();
    }, _this.onClose = function () {
      _this.refs.dialog.close();
    }, _this.onChange = function (date) {
      var onChange = _this.props.onChange;

      _this.setState({ date: date }, function () {
        if (onChange) {
          onChange(_this.state.date);
        }
        _this.onClose();
      });
    }, _this.onChangeTextField = function () {
      // const { onChange } = this.props;
      // this.setState({ date }, () => {
      //   if (onChange) {
      //     onChange(this.state.date);
      //   }
      //   this.onClose();
      // });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DatePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        date: (0, _moment2.default)(this.props.date)
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _dialogPolyfill2.default.registerDialog(this.refs.dialog);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          labelName = _props.labelName,
          errors = _props.errors,
          landscape = _props.landscape;
      var date = this.state.date;

      var value = date.format('DD/MM/YYYY');
      var landscapeClass = landscape ? 'mdl-dialog--landscape' : '';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TextField2.default, {
          labelName: labelName,
          value: value,
          onClick: this.onClick,
          errors: errors,
          onChange: this.onChangeTextField
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'dialog',
            { ref: 'dialog', className: 'mdl-dialog ' + landscapeClass },
            _react2.default.createElement(_Calendar2.default, {
              landscape: landscape,
              date: date,
              onClose: this.onClose,
              onChange: this.onChange
            })
          )
        )
      );
    }
  }]);
  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  date: _react.PropTypes.instanceOf(_moment2.default)
};

exports.default = DatePicker;