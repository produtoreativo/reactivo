'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _moment = require('/Users/cmilfont/projetos/reactivo/node_modules/moment');

var _moment2 = _interopRequireDefault(_moment);

var _Day = require('./Day.jsx');

var _Day2 = _interopRequireDefault(_Day);

require('./MonthTable.css');

require('./Day.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthTable = function (_React$Component) {
  (0, _inherits3.default)(MonthTable, _React$Component);

  function MonthTable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MonthTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MonthTable.__proto__ || (0, _getPrototypeOf2.default)(MonthTable)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (_ref2) {
      var day = _ref2.target.textContent;
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          date = _this$props.date;

      var selectedDate = (0, _moment2.default)([date.year(), date.month(), Number(day)]);
      onSelect(selectedDate);
    }, _this.mapColumns = function (day) {
      return _react2.default.createElement(
        'th',
        { key: day },
        day.substring(0, 3)
      );
    }, _this.createRows = function () {
      var date = _this.props.date;

      var month = date.month();

      var current = (0, _moment2.default)();
      var currentDay = current.date();
      var currentMonth = current.month();

      var dayOfMonth = date.date();
      var dateOfMonth = (0, _moment2.default)(date._d).startOf('month');
      var firstDay = dateOfMonth.day();
      var lastDay = dateOfMonth.endOf('month').date();
      var count = 0;

      var rows = [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (_, r) {
        var columns = [].concat((0, _toConsumableArray3.default)(Array(7))).map(function (x, c) {
          if (count === lastDay) {
            count = 0;
          }
          if (r === 0 && c === firstDay || count > 0) {
            count += 1;
          }
          var currentDayClass = currentMonth === month && count === currentDay ? 'mdl-color-text--primary' : '';
          var selectedDay = dayOfMonth === count ? 'mdl-color--primary selectedDay' : '';
          var className = '  ' + currentDayClass + ' ' + selectedDay;
          var key = 'datepicker-' + r + '-' + c + '-day-' + count;
          return _react2.default.createElement(_Day2.default, {
            onSelect: _this.onSelect,
            key: key,
            day: count,
            className: className
          });
        });
        return _react2.default.createElement(
          'tr',
          { key: 'datepicker-row-' + r },
          columns
        );
      });
      return rows;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MonthTable, [{
    key: 'render',
    value: function render() {
      var columns = _moment2.default.weekdays().map(this.mapColumns);
      var rows = this.createRows();
      var table = _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            columns
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          rows
        )
      );
      return _react2.default.createElement(
        'div',
        { className: 'reactive-monthtable' },
        table
      );
    }
  }]);
  return MonthTable;
}(_react2.default.Component);

MonthTable.propTypes = {
  onSelect: _react.PropTypes.func.isRequired,
  date: _react.PropTypes.instanceOf(_moment2.default)
};

exports.default = MonthTable;