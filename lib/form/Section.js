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

var _immutable = require('/Users/cmilfont/projetos/reactivo/node_modules/immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _Button = require('/Users/cmilfont/projetos/reactivo/src/button/Button.jsx');

var _Button2 = _interopRequireDefault(_Button);

var _TextField = require('/Users/cmilfont/projetos/reactivo/src/textfield/TextField.js');

var _TextField2 = _interopRequireDefault(_TextField);

var _uuid = require('/Users/cmilfont/projetos/reactivo/node_modules/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Section);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (field, value) {
      var updateForm = _this.context.updateForm;

      if (updateForm) {
        updateForm(field, value);
      }
      event.preventDefault();
      event.stopPropagation();
    }, _this.mapFields = function (_ref2) {
      var _ref2$field = _ref2.field,
          label = _ref2$field.label,
          name = _ref2$field.name;
      var fields = _this.props.fields;

      var field = fields[name];
      return _react2.default.createElement(_TextField2.default, {
        key: (0, _uuid2.default)(),
        onChange: _this.onChange.bind(_this, field),
        value: field.value,
        labelName: label,
        name: name
      });
    }, _this.mapSectionColumns = function (fieldList) {
      var fields = fieldList.map(_this.mapFields, _this);
      return _react2.default.createElement(
        'div',
        { key: (0, _uuid2.default)(), className: 'FormSectionColumn' },
        fields
      );
    }, _this.mapButtons = function (_ref3) {
      var name = _ref3.name,
          label = _ref3.label,
          onClick = _ref3.onClick;

      var action = _this.context[onClick];
      return _react2.default.createElement(_Button2.default, { key: (0, _uuid2.default)(), onClick: action, name: name, label: label });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          description = _props.description,
          buttons = _props.buttons,
          columns = _props.columns;

      var sectionColumns = _immutable2.default.fromJS(columns).groupBy(function (x) {
        return x.get("sectionColumn");
      }).toArray().map(function (item) {
        return item.toJS();
      });

      var container = buttons && buttons.length ? _react2.default.createElement(
        'div',
        { className: 'FormSection FormSectionButtons mdl-card__actions mdl-card--border' },
        buttons.map(this.mapButtons, this)
      ) : _react2.default.createElement(
        'div',
        { className: 'FormSection mdl-card__supporting-text' },
        _react2.default.createElement(
          'div',
          { className: 'FormSectionTitle mdl-card__title' },
          _react2.default.createElement(
            'h2',
            null,
            description
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'FormSectionFields' },
          sectionColumns.map(this.mapSectionColumns, this)
        )
      );

      return container;
    }
  }]);
  return Section;
}(_react2.default.Component);

Section.contextTypes = {
  updateForm: _react.PropTypes.func.isRequired,
  onSave: _react.PropTypes.func.isRequired
};
exports.default = Section;