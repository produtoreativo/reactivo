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

var _uuid = require('/Users/cmilfont/projetos/reactivo/node_modules/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _Section = require('/Users/cmilfont/projetos/reactivo/src/form/Section.jsx');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransformerMetadata = function (_React$Component) {
  (0, _inherits3.default)(TransformerMetadata, _React$Component);

  function TransformerMetadata() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TransformerMetadata);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransformerMetadata.__proto__ || (0, _getPrototypeOf2.default)(TransformerMetadata)).call.apply(_ref, [this].concat(args))), _this), _this.mapSections = function (_ref2) {
      var description = _ref2.description,
          sectionButtons = _ref2.sectionButtons,
          sectionFields = _ref2.sectionFields;
      var fields = _this.props.fields;

      return _react2.default.createElement(_Section2.default, {
        key: (0, _uuid2.default)(),
        fields: fields,
        description: description,
        buttons: sectionButtons,
        columns: sectionFields
      });
    }, _this.mapMetadata = function () {
      var sections = _this.props.metadata.sections;

      return sections.map(_this.mapSections, _this);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TransformerMetadata, [{
    key: 'render',
    value: function render() {
      var container = this.mapMetadata();
      return _react2.default.createElement(
        'div',
        { className: 'FormContainer--body mdl-card' },
        container
      );
    }
  }]);
  return TransformerMetadata;
}(_react2.default.Component);

exports.default = TransformerMetadata;