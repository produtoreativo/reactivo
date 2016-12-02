'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _TransformerMetadata = require('/Users/cmilfont/projetos/reactivo/src/form/TransformerMetadata.jsx');

var _TransformerMetadata2 = _interopRequireDefault(_TransformerMetadata);

require('./FormContainer.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContainer = function (_React$Component) {
  (0, _inherits3.default)(FormContainer, _React$Component);

  function FormContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormContainer.__proto__ || (0, _getPrototypeOf2.default)(FormContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fields: {},
      dirty: {}
    }, _this.updateForm = function (field, value) {
      var dirty = _this.state.dirty;

      var newField = (0, _extends4.default)({}, field, {
        value: value
      });
      _this.setState((0, _extends4.default)({}, _this.state, {
        dirty: (0, _extends4.default)({}, dirty, (0, _defineProperty3.default)({}, newField.name, newField))
      }));
    }, _this.onSubmit = function () {
      var onSubmit = _this.props.onSubmit;

      event.preventDefault();
      event.stopPropagation();
      if (onSubmit) {
        onSubmit();
      }
    }, _this.onSave = function () {
      var fields = _this.state.fields;

      debugger;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        updateForm: this.updateForm,
        onSave: this.onSave
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      debugger;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var Map = _immutable2.default.Map,
          Set = _immutable2.default.Set,
          fromJS = _immutable2.default.fromJS;
      var metadata = this.props.metadata;

      var fields = Map(metadata.sections.map(function (item) {
        return item.sectionFields.map(function (section) {
          var field = (0, _extends4.default)({}, section.field, {
            value: ''
          });
          return [field.name, field];
        });
      }).reduce(function (arr, item) {
        return [].concat((0, _toConsumableArray3.default)(arr), (0, _toConsumableArray3.default)(item));
      }, [])).toJS();
      this.setState({
        fields: fields,
        dirty: (0, _extends4.default)({}, fields)
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var fields = this.state.fields;
      var metadata = this.props.metadata;

      return _react2.default.createElement(
        'form',
        { onSubmit: this.onSubmit },
        _react2.default.createElement(_TransformerMetadata2.default, {
          fields: fields,
          metadata: metadata
        })
      );
    }
  }]);
  return FormContainer;
}(_react2.default.Component);

FormContainer.childContextTypes = {
  updateForm: _react.PropTypes.func,
  onSave: _react.PropTypes.func
};
exports.default = FormContainer;