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

var _datepicker = require('./datepicker');

var _datepicker2 = _interopRequireDefault(_datepicker);

var _TextField = require('/Users/cmilfont/projetos/reactivo/src/textfield/TextField.js');

var _TextField2 = _interopRequireDefault(_TextField);

var _tabs = require('/Users/cmilfont/projetos/reactivo/src/tabs');

var _FormContainer = require('/Users/cmilfont/projetos/reactivo/src/form/FormContainer.jsx');

var _FormContainer2 = _interopRequireDefault(_FormContainer);

var _Seed = require('/Users/cmilfont/projetos/reactivo/src/Seed.js');

var _Seed2 = _interopRequireDefault(_Seed);

var _button = require('/Users/cmilfont/projetos/reactivo/src/button');

var _button2 = _interopRequireDefault(_button);

require('./App.css');

require('/Users/cmilfont/projetos/reactivo/src/reactivo-css.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.addTab = function () {

      var key = (0, _uuid2.default)();

      _this.refs.tabs.addTab(_react2.default.createElement(
        _tabs.Tab,
        {
          key: key,
          title: key,
          closeable: true
        },
        'Content ',
        key
      ));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var onChange = function onChange(text) {
        console.log("selected text:", text);
      };

      var addTab = this.addTab.bind(this);

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'div',
          { className: 'App-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Reactivo: Material Design'
          )
        ),
        _react2.default.createElement(
          _tabs.Tabs,
          { ref: 'tabs' },
          _react2.default.createElement(
            _tabs.Tab,
            { key: 'tab1', active: true, title: 'Add Tab' },
            _react2.default.createElement(
              'div',
              { className: 'snippet-demo-container demo-switch demo-switch__switch-on' },
              _react2.default.createElement(
                'label',
                { className: 'mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked', htmlFor: 'switch-1', 'data-upgraded': ',MaterialSwitch,MaterialRipple' },
                _react2.default.createElement('input', { type: 'checkbox', id: 'switch-1', className: 'mdl-switch__input', checked: '' }),
                _react2.default.createElement('span', { className: 'mdl-switch__label' }),
                _react2.default.createElement('div', { className: 'mdl-switch__track' }),
                _react2.default.createElement(
                  'div',
                  { className: 'mdl-switch__thumb' },
                  _react2.default.createElement('span', { className: 'mdl-switch__focus-helper' })
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center', 'data-upgraded': ',MaterialRipple' },
                  _react2.default.createElement('span', { className: 'mdl-ripple is-animating', style: {
                      width: '137.765px;',
                      height: '137.765px;',
                      transform: 'translate(-50%, -50%) translate(24px, 24px);'
                    }
                  })
                )
              )
            ),
            _react2.default.createElement(_button2.default, { onClick: addTab, name: 'addTab', label: 'Add Tab' })
          ),
          _react2.default.createElement(
            _tabs.Tab,
            { key: 'tabtext', title: 'TextField' },
            _react2.default.createElement(_TextField2.default, {
              key: (0, _uuid2.default)(),
              labelName: 'TextField Example',
              onChange: onChange
            }),
            _react2.default.createElement(_TextField2.default, {
              key: (0, _uuid2.default)(),
              labelName: 'TextField with Erros',
              onChange: onChange,
              errors: ['Validation error']
            })
          ),
          _react2.default.createElement(
            _tabs.Tab,
            { key: 'tab2', title: 'DatePicker' },
            _react2.default.createElement(_datepicker2.default, {
              key: (0, _uuid2.default)(),
              labelName: 'DatePicker',
              onChange: onChange }),
            _react2.default.createElement(_datepicker2.default, {
              key: (0, _uuid2.default)(),
              landscape: true,
              labelName: 'Landscape DatePicker',
              onChange: onChange })
          ),
          _react2.default.createElement(
            _tabs.Tab,
            { key: 'tab3', title: 'Form Container' },
            _react2.default.createElement(_FormContainer2.default, { metadata: _Seed2.default })
          ),
          _react2.default.createElement(
            _tabs.Tab,
            { key: 'tab4', closeable: true, title: 'Closeable Tab' },
            'Content'
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;