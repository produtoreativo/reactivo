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

var _moment = require('/Users/cmilfont/projetos/reactivo/node_modules/moment');

var _moment2 = _interopRequireDefault(_moment);

var _TopToolbar = require('./TopToolbar.jsx');

var _TopToolbar2 = _interopRequireDefault(_TopToolbar);

var _BottomToolbar = require('./BottomToolbar.jsx');

var _BottomToolbar2 = _interopRequireDefault(_BottomToolbar);

var _MonthTable = require('./MonthTable.jsx');

var _MonthTable2 = _interopRequireDefault(_MonthTable);

require('./Calendar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function (_React$Component) {
  (0, _inherits3.default)(Calendar, _React$Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Calendar.__proto__ || (0, _getPrototypeOf2.default)(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: (0, _moment2.default)(),
      selected: (0, _moment2.default)()
    }, _this.onLeft = function () {
      var _this$state = _this.state,
          date = _this$state.date,
          selected = _this$state.selected;

      _this.setState({
        selected: selected,
        date: date.subtract(1, 'months')
      });
    }, _this.onRight = function () {
      var _this$state2 = _this.state,
          date = _this$state2.date,
          selected = _this$state2.selected;

      _this.setState({
        selected: selected,
        date: date.add(1, 'months')
      });
    }, _this.onSelect = function (date) {
      _this.setState({
        date: date,
        selected: (0, _moment2.default)(date._d)
      });
    }, _this.prepareDate = function () {
      _this.props.onChange(_this.state.selected);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Calendar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var date = this.props.date;

      this.setState({ date: (0, _moment2.default)(date) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          landscape = _props.landscape;
      var _state = this.state,
          date = _state.date,
          selected = _state.selected;

      var year = selected.format('YYYY');
      var dayOfWeek = selected.format('ddd, MMM DD');
      var landscapeClass = landscape ? 'Calendar-landscape' : '';
      return _react2.default.createElement(
        'div',
        { className: 'Calendar ' + landscapeClass + ' mdl-dialog__content' },
        _react2.default.createElement(
          'div',
          { className: 'SelectedDate mdl-color--primary' },
          _react2.default.createElement(
            'div',
            { className: 'year' },
            year
          ),
          _react2.default.createElement(
            'div',
            { className: 'dayOfWeek' },
            dayOfWeek
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'chooseDate' },
          _react2.default.createElement(_TopToolbar2.default, {
            date: date,
            onLeft: this.onLeft,
            onRight: this.onRight
          }),
          _react2.default.createElement(_MonthTable2.default, {
            onSelect: this.onSelect,
            date: date
          }),
          _react2.default.createElement(_BottomToolbar2.default, { onClose: onClose, onChange: this.prepareDate })
        )
      );
    }
  }]);
  return Calendar;
}(_react2.default.Component);

Calendar.propTypes = {
  onClose: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  date: _react.PropTypes.instanceOf(_moment2.default)
};

exports.default = Calendar;