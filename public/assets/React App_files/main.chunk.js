(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/tabStyle.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Sidebar/tabStyle.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-tabs {\n  -webkit-tap-highlight-color: transparent;\n  width: 100%;\n}\n\n.react-tabs__tab-list {\n  margin: 0 0 40px;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.react-tabs__tab {\n  display: inline-block;\n  border: 1px solid transparent;\n  border-bottom: none;\n  bottom: -1px;\n  position: relative;\n  list-style: none;\n  padding: 6px 12px;\n  cursor: pointer;\n  text-align: center;\n  width: 115px;\n  height: 35px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.react-tabs__tab--selected {\n  color: black;\n  font-weight: 700;\n  border-bottom: 2px solid black;\n}\n\n.react-tabs__tab--disabled {\n  color: GrayText;\n  cursor: default;\n}\n\n.react-tabs__tab:focus {\n  outline: none;\n  color: black;\n  font-weight: 700;\n  border-bottom: 2px solid black;\n}\n\n.react-tabs__tab-panel {\n  display: none;\n}\n\n.react-tabs__tab-panel--selected {\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: addQuote, editQuote, removeQuote, setTerm, getImage, ImageReceived, getRandomImage, randomImageReceived, getRandomQuote, randomQuoteReceived */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuote", function() { return addQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editQuote", function() { return editQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeQuote", function() { return removeQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTerm", function() { return setTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return getImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReceived", function() { return ImageReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomImage", function() { return getRandomImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomImageReceived", function() { return randomImageReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomQuote", function() { return getRandomQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomQuoteReceived", function() { return randomQuoteReceived; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_1__);


var addQuote = function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    payload: Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, quote, {
      id: uuid_v1__WEBPACK_IMPORTED_MODULE_1___default()()
    })
  };
};
var editQuote = function editQuote(quote) {
  return {
    type: 'EDIT_QUOTE',
    payload: quote
  };
};
var removeQuote = function removeQuote(id) {
  return {
    type: 'REMOVE_QUOTE',
    payload: id
  };
};
var setTerm = function setTerm(term) {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
var getImage = function getImage(term) {
  return {
    type: 'GET_IMAGE',
    payload: term
  };
};
var ImageReceived = function ImageReceived(data) {
  return {
    type: 'IMAGE_RECEIVED',
    payload: data
  };
};
var getRandomImage = function getRandomImage() {
  return {
    type: 'GET_RANDOM_IMAGE'
  };
};
var randomImageReceived = function randomImageReceived(data) {
  return {
    type: 'RANDOM_IMAGE_RECEIVED',
    payload: data
  };
};
var getRandomQuote = function getRandomQuote() {
  return {
    type: 'GET_RANDOM_QUOTE'
  };
};
var randomQuoteReceived = function randomQuoteReceived(data) {
  return {
    type: 'RANDOM_QUOTE_RECEIVED',
    payload: data
  };
};

/***/ }),

/***/ "./src/apis/randomQuote.js":
/*!*********************************!*\
  !*** ./src/apis/randomQuote.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://quotesondesign.com/wp-json'
}));

/***/ }),

/***/ "./src/apis/unsplash.js":
/*!******************************!*\
  !*** ./src/apis/unsplash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://api.unsplash.com'
}));

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _QuoteList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuoteList */ "./src/components/QuoteList/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar/index.js");

var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/App.js";

function _templateObject2() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  height: calc(100% - 50px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuoteList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled.js */ "./src/components/Navbar/styled.js");
var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/Navbar/index.js";




var Navbar = function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_2__["NavbarContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Quote Maker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_2__["Counter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Quotes: ", props.quotes.length));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    quotes: state.quotes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Navbar));

/***/ }),

/***/ "./src/components/Navbar/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/styled.js ***!
  \*****************************************/
/*! exports provided: NavbarContainer, Logo, Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarContainer", function() { return NavbarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  line-height: 50px;\n  margin: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  line-height: 50px;\n  margin: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nwidth: 100%;\nbackground: #067bc2;\npadding: 0 20px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject2());
var Counter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject3());

/***/ }),

/***/ "./src/components/QuoteCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/QuoteCard/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled.js */ "./src/components/QuoteCard/styled.js");
var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/QuoteCard/index.js";



var QuoteCard = function QuoteCard(props) {
  console.log(props);
  var _props$quote = props.quote,
      content = _props$quote.content,
      image = _props$quote.image,
      author = _props$quote.author;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    image: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_1__["QuoteContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_1__["QuoteBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_1__["QuoteAuthor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, author)));
};

/* harmony default export */ __webpack_exports__["default"] = (QuoteCard);

/***/ }),

/***/ "./src/components/QuoteCard/styled.js":
/*!********************************************!*\
  !*** ./src/components/QuoteCard/styled.js ***!
  \********************************************/
/*! exports provided: Card, QuoteContent, QuoteBody, QuoteAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteContent", function() { return QuoteContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteBody", function() { return QuoteBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteAuthor", function() { return QuoteAuthor; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80%;\n  margin-top: 20px;\n  font-size: 20px;\n  text-align: right;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80%;\n  font-size: 30px;\n  font-weight: lighter;\n  font-style: italic;\n  text-align: center;\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  z-index: 3;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: white;\n  background-image: url('", "');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 400px;\n  height: 400px;\n  position: relative;\n  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);\n  :after {\n    content: \"\";\n    position: absolute;\n    top: 0; bottom: 0; left: 0; right: 0; \n    background: rgba(0,0,0,0.5);\n    pointer-events: none;\n    z-index: 2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.image;
});
var QuoteContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var QuoteBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject3());
var QuoteAuthor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject4());

/***/ }),

/***/ "./src/components/QuoteInput/index.js":
/*!********************************************!*\
  !*** ./src/components/QuoteInput/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../actions */ "./src/actions/index.js");
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled.js */ "./src/components/QuoteInput/styled.js");





var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/QuoteInput/index.js";






var QuoteInput =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuoteInput, _React$Component);

  function QuoteInput() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuoteInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuoteInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSubmit = function (formValues) {
      _this.props.addQuote(formValues);
    };

    _this.renderTextArea = function (_ref) {
      var input = _ref.input,
          meta = _ref.meta;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, input.name.charAt(0).toUpperCase() + input.name.slice(1)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Textarea"], Object.assign({}, input, {
        placeholder: "I know that I know nothing",
        image: _this.props.image,
        font: _this.getFontSize,
        type: "text",
        value: _this.props.randomContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["ErrorContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, _this.renderError(meta)));
    };

    _this.renderInput = function (_ref2) {
      var input = _ref2.input,
          meta = _ref2.meta;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, input.name.charAt(0).toUpperCase() + input.name.slice(1)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Input"], Object.assign({}, input, {
        placeholder: "Plato",
        image: _this.props.image,
        autoComplete: "off",
        value: _this.props.randomAuthor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["ErrorContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, _this.renderError(meta)));
    };

    _this.renderImage = function (_ref3) {
      var input = _ref3.input,
          meta = _ref3.meta;

      _this.props.change('image', _this.props.image);

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", Object.assign({}, input, {
        type: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["ErrorContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, _this.renderError(meta)));
    };

    return _this;
  }

  Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuoteInput, [{
    key: "renderError",
    value: function renderError(_ref4) {
      var error = _ref4.error,
          touched = _ref4.touched;

      if (touched && error) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Error"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["FormContainer"], {
        image: this.props.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.props.handleSubmit(this.onSubmit),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "image",
        image: this.props.image,
        component: this.renderImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "content",
        component: this.renderTextArea,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "author",
        component: this.renderInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Add quote")));
    }
  }]);

  return QuoteInput;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var validate = function validate(formValues) {
  var errors = {};

  if (!formValues.content) {
    errors.content = "Please write something!";
  }

  if (!formValues.author) {
    errors.author = "Please enter an author!";
  }

  if (!formValues.image) {
    errors.image = "Please selected an image!";
  }

  return errors;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    image: state.quotes.image
  };
};

var formWrapped = Object(redux_form__WEBPACK_IMPORTED_MODULE_7__["reduxForm"])({
  form: 'quoteCreate',
  validate: validate
})(QuoteInput);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  addQuote: _actions__WEBPACK_IMPORTED_MODULE_8__["addQuote"]
})(formWrapped));

/***/ }),

/***/ "./src/components/QuoteInput/styled.js":
/*!*********************************************!*\
  !*** ./src/components/QuoteInput/styled.js ***!
  \*********************************************/
/*! exports provided: FormContainer, Form, Input, Textarea, Button, ErrorContainer, Error, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorContainer", function() { return ErrorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject8() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-left: 10px;\n  padding-bottom: 5px;\n  margin: 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: red;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 20px;\n  width: 100%;\n  color: red;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n  line-height: 40px;\n  background-color: lightgray;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0px 2px 20px rgba(0,0,0,0.2);\n  :hover {\n    box-shadow: 0px 0px 20px rgba(0,0,0,0);\n    color: #067bc2;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 100px;\n  border: none;\n  line-height: 30px;\n  padding-left: 10px;\n  color: black;\n  border-radius: 5px;\n  resize: none;\n  outline: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  border: none;\n  line-height: 40px;\n  padding-left: 10px;\n  color: black;\n  border-radius: 5px;\n  outline: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject2());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject3());
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea(_templateObject4());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject5());
var ErrorContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var Error = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject7());
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject8());

/***/ }),

/***/ "./src/components/QuoteList/index.js":
/*!*******************************************!*\
  !*** ./src/components/QuoteList/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _QuoteCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../QuoteCard */ "./src/components/QuoteCard/index.js");
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled.js */ "./src/components/QuoteList/styled.js");





var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/QuoteList/index.js";





var QuoteList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuoteList, _Component);

  function QuoteList() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuoteList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuoteList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderList = function () {
      return _this.props.quotes.map(function (quote) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_QuoteCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: quote.id,
          quote: quote,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        });
      });
    };

    return _this;
  }

  Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuoteList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.renderList());
    }
  }]);

  return QuoteList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    quotes: state.quotes.list
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(QuoteList));

/***/ }),

/***/ "./src/components/QuoteList/styled.js":
/*!********************************************!*\
  !*** ./src/components/QuoteList/styled.js ***!
  \********************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  overflow: scroll;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/RandomSelector/index.js":
/*!************************************************!*\
  !*** ./src/components/RandomSelector/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled.js */ "./src/components/RandomSelector/styled.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/RandomSelector/index.js";





var RandomSelector = function RandomSelector(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: props.getRandomQuote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Random quote"));
};

var mapDispatchToProps = {
  getRandomImage: _actions__WEBPACK_IMPORTED_MODULE_3__["getRandomImage"],
  getRandomQuote: _actions__WEBPACK_IMPORTED_MODULE_3__["getRandomQuote"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(RandomSelector));

/***/ }),

/***/ "./src/components/RandomSelector/styled.js":
/*!*************************************************!*\
  !*** ./src/components/RandomSelector/styled.js ***!
  \*************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  border: none;\n  line-height: 40px;\n  background-color: lightgray;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0px 2px 20px rgba(0,0,0,0.2);\n  :hover {\n    box-shadow: 0px 0px 20px rgba(0,0,0,0);\n    color: #067bc2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject());

/***/ }),

/***/ "./src/components/SearchImage/index.js":
/*!*********************************************!*\
  !*** ./src/components/SearchImage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled.js */ "./src/components/SearchImage/styled.js");
/* harmony import */ var _images_image_placeholder_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../images/image-placeholder.png */ "./src/images/image-placeholder.png");
/* harmony import */ var _images_image_placeholder_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_image_placeholder_png__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/SearchImage/index.js";






var SearchImage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchImage, _React$Component);

  function SearchImage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onFormSubmit = function (event) {
      event.preventDefault();

      _this.props.getImage();
    };

    return _this;
  }

  Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchImage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["ImageContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        image: this.props.image,
        placeholder: _images_image_placeholder_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Image"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["FormContainer"], {
        onSubmit: this.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "text",
        value: this.props.term,
        onChange: function onChange(e) {
          return _this2.props.setTerm(e.target.value);
        } // onBlur={this.onFormSubmit}
        ,
        placeholder: "angry, happy, people, etc...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Go")));
    }
  }]);

  return SearchImage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    term: state.quotes.term,
    image: state.quotes.image
  };
};

var mapDispatchToProps = {
  getImage: _actions__WEBPACK_IMPORTED_MODULE_7__["getImage"],
  setTerm: _actions__WEBPACK_IMPORTED_MODULE_7__["setTerm"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(SearchImage));

/***/ }),

/***/ "./src/components/SearchImage/styled.js":
/*!**********************************************!*\
  !*** ./src/components/SearchImage/styled.js ***!
  \**********************************************/
/*! exports provided: FormContainer, Input, Button, ImageContainer, Image, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-left: 10px;\n  padding-bottom: 5px;\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  right: calc(50% - 80%/2);\n  width: 80%;\n  height: 80%;\n  background-color: white;\n  background-image: url('", "');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 40px;\n  border-radius: 0px 5px 5px 0;\n  border: none;\n  background-color: lightgray;\n  cursor: pointer;\n  transition: all 0.1s ease;\n  :hover {\n    font-weight: bold;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 1 100%;\n  width: 100px;\n  border: none;\n  line-height: 40px;\n  padding-left: 10px;\n  color: black;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  width: 100%;\n  padding-bottom: 4px;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject2());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3());
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5(), function (props) {
  return props.image ? props.image : props.placeholder;
});
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject6());

/***/ }),

/***/ "./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabStyle.css */ "./src/components/Sidebar/tabStyle.css");
/* harmony import */ var _tabStyle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tabStyle_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled.js */ "./src/components/Sidebar/styled.js");
/* harmony import */ var _QuoteInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../QuoteInput */ "./src/components/QuoteInput/index.js");
/* harmony import */ var _SearchImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchImage */ "./src/components/SearchImage/index.js");
/* harmony import */ var _RandomSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RandomSelector */ "./src/components/RandomSelector/index.js");
var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/components/Sidebar/index.js";









var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_js__WEBPACK_IMPORTED_MODULE_4__["SidebarContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Create Quote"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Lazy Mode")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SearchImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuoteInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RandomSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    quotes: state.quotes.list,
    image: state.quotes.image,
    randomQuote: state.randomQuote.randomQuote,
    randomImage: state.randomQuote.randomImage
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Sidebar));

/***/ }),

/***/ "./src/components/Sidebar/styled.js":
/*!******************************************!*\
  !*** ./src/components/Sidebar/styled.js ***!
  \******************************************/
/*! exports provided: SidebarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainer", function() { return SidebarContainer; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 30%;\n  height: 100%;\n  background: gray;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/Sidebar/tabStyle.css":
/*!*********************************************!*\
  !*** ./src/components/Sidebar/tabStyle.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./tabStyle.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/tabStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./tabStyle.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/tabStyle.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./tabStyle.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar/tabStyle.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/images/image-placeholder.png":
/*!******************************************!*\
  !*** ./src/images/image-placeholder.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/image-placeholder-12d0fc49.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store.js");
var _jsxFileName = "/Users/Seba/code/technical-interviews/colvin-test/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.querySelector('#root'));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _quotesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotesReducer */ "./src/reducers/quotesReducer.js");
/* harmony import */ var _randomQuoteReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomQuoteReducer */ "./src/reducers/randomQuoteReducer.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  quotes: _quotesReducer__WEBPACK_IMPORTED_MODULE_1__["quotesReducer"],
  randomQuote: _randomQuoteReducer__WEBPACK_IMPORTED_MODULE_2__["randomQuoteReducer"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_3__["reducer"]
}));

/***/ }),

/***/ "./src/reducers/quotesReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/quotesReducer.js ***!
  \***************************************/
/*! exports provided: initialState, quotesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotesReducer", function() { return quotesReducer; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");


var initialState = {
  list: [],
  term: '',
  image: ''
};
var quotesReducer = function quotesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_QUOTE':
      return Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        list: [].concat(Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.list), [action.payload])
      });

    case 'EDIT_QUOTE':
      return state.list.map(function (quote) {
        return quote.id === action.payload.id ? action.payload : quote;
      });

    case 'REMOVE_QUOTE':
      return state.list.filter(function (quote) {
        return quote.id !== action.paylaod;
      });

    case 'SET_TERM':
      return Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        term: action.payload
      });

    case 'IMAGE_RECEIVED':
      return Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        image: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/randomQuoteReducer.js":
/*!********************************************!*\
  !*** ./src/reducers/randomQuoteReducer.js ***!
  \********************************************/
/*! exports provided: initialState, randomQuoteReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomQuoteReducer", function() { return randomQuoteReducer; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var initialState = {
  randomImage: '',
  randomQuote: {
    author: '',
    content: ''
  }
};
var randomQuoteReducer = function randomQuoteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RANDOM_IMAGE_RECEIVED':
      return Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        randomImage: action.payload
      });

    case 'RANDOM_QUOTE_RECEIVED':
      return Object(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        randomQuote: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _apis_randomQuote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../apis/randomQuote */ "./src/apis/randomQuote.js");
/* harmony import */ var _apis_unsplash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../apis/unsplash */ "./src/apis/unsplash.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/sagas/selectors.js");


var _marked =
/*#__PURE__*/
_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchRandomQuote),
    _marked2 =
/*#__PURE__*/
_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchRandomImage),
    _marked3 =
/*#__PURE__*/
_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchImage),
    _marked4 =
/*#__PURE__*/
_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(actionWatcher),
    _marked5 =
/*#__PURE__*/
_Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






function fetchRandomQuote() {
  var response;
  return _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchRandomQuote$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _apis_randomQuote__WEBPACK_IMPORTED_MODULE_2__["default"].get('/posts?filter[orderby]=rand&filter[posts_per_page]=1').then(function (result) {
            var content = result.data[0].content;
            content = content.slice(0, 50);
            content = content.replace('<p>', "");
            content = content.replace('</p>', "");
            var author = result.data[0].title;
            return {
              content: content,
              author: author
            };
          });

        case 2:
          response = _context.sent;
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'RANDOM_QUOTE_RECEIVED',
            payload: response
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function fetchRandomImage() {
  var response;
  return _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchRandomImage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _apis_unsplash__WEBPACK_IMPORTED_MODULE_3__["default"].get('/photos/random', {
            params: {
              orientation: 'squarish'
            },
            headers: {
              Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54'
            }
          }).then(function (result) {
            return result.data.urls.regular;
          });

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'RANDOM_IMAGE_RECEIVED',
            payload: response
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function fetchImage() {
  var term, response;
  return _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchImage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_4__["getTerm"]);

        case 2:
          term = _context3.sent;
          _context3.next = 5;
          return _apis_unsplash__WEBPACK_IMPORTED_MODULE_3__["default"].get('/search/photos', {
            params: {
              query: term,
              orientation: 'squarish'
            },
            headers: {
              Authorization: 'Client-ID caf295221fb949ce9661404707301ecbf00021083633bd3e5e3827278b3fef54'
            }
          }).then(function (result) {
            if (result.data.results.length) {
              var randomImage = result.data.results[Math.floor(Math.random() * result.data.results.length)];
              return randomImage.urls.regular;
            }
          });

        case 5:
          response = _context3.sent;
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'IMAGE_RECEIVED',
            payload: response
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function actionWatcher() {
  return _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function actionWatcher$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('GET_RANDOM_QUOTE', fetchRandomQuote);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('GET_RANDOM_IMAGE', fetchRandomImage);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('GET_IMAGE', fetchImage);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function rootSaga() {
  return _Users_Seba_code_technical_interviews_colvin_test_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([actionWatcher()]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

/***/ }),

/***/ "./src/sagas/selectors.js":
/*!********************************!*\
  !*** ./src/sagas/selectors.js ***!
  \********************************/
/*! exports provided: getTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerm", function() { return getTerm; });
var getTerm = function getTerm(state) {
  return state.quotes.term;
};

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");




var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Seba/code/technical-interviews/colvin-test/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Seba/code/technical-interviews/colvin-test/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map