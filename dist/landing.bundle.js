!function(e){var n={};function t(_){if(n[_])return n[_].exports;var r=n[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,_){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:_})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(t.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(_,r,function(n){return e[n]}.bind(null,r));return _},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./static/js/landing/index.js")}({"./global.js":
/*!*******************!*\
  !*** ./global.js ***!
  \*******************/
/*! no static exports found */function(module,exports){eval("exports.host = 'http://localhost:3000'\n\n//# sourceURL=webpack:///./global.js?")},"./static/js/landing/checkExistingUser.js":
/*!************************************************!*\
  !*** ./static/js/landing/checkExistingUser.js ***!
  \************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nlet timeoutId;\n\n/*If \"visitedFP\" is true, the user \nhas previously visited app and is redirected\nto token authentication. Else a landing screen displays\nfor 5 seconds before redirecting to login. The user can\nalso trigger the redirect process at anytime with a button*/\nconst checkExistingUser = (redirect, btn) => {\n  const checkVisited = localStorage.getItem('visitedFP')\n  if (checkVisited) {\n    redirect()\n  } else {\n    timeoutId = setTimeout(() => {\n      redirect()\n    }, 5000)\n\n    localStorage.setItem('visitedFP', true)\n    btn.addEventListener('click', () => {\n      clearTimeout(timeoutId)\n      redirect()\n    })\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkExistingUser);\n\n//# sourceURL=webpack:///./static/js/landing/checkExistingUser.js?")},"./static/js/landing/checkForToken.js":
/*!********************************************!*\
  !*** ./static/js/landing/checkForToken.js ***!
  \********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nconst checkForToken = () => {\n  const token = localStorage.getItem('token')\n  if (!token) {\n    return null\n  }\n\n  return token\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkForToken);\n\n//# sourceURL=webpack:///./static/js/landing/checkForToken.js?")},"./static/js/landing/index.js":
/*!************************************!*\
  !*** ./static/js/landing/index.js ***!
  \************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkExistingUser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkExistingUser.js */ "./static/js/landing/checkExistingUser.js");\n/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect */ "./static/js/landing/redirect.js");\n\n\n\nwindow.onload = async () => {\n  const btn = document.querySelector(\'.next-btn\')\n\n  Object(_checkExistingUser_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_redirect__WEBPACK_IMPORTED_MODULE_1__["default"], btn)\n}\n\n//# sourceURL=webpack:///./static/js/landing/index.js?')},"./static/js/landing/redirect.js":
/*!***************************************!*\
  !*** ./static/js/landing/redirect.js ***!
  \***************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkForToken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForToken.js */ "./static/js/landing/checkForToken.js");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global.js */ "./global.js");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/*This function redirects the user the login or\nhome page depending on the existence of a jwt token*/\nconst redirect = () => {\n  const token = Object(_checkForToken_js__WEBPACK_IMPORTED_MODULE_0__["default"])()\n  if (token) {\n    window.location.replace(`${_global_js__WEBPACK_IMPORTED_MODULE_1__["host"]}/home?token=${token}`)\n  } else {\n    window.location.replace(_global_js__WEBPACK_IMPORTED_MODULE_1__["host"] + \'/account/login\')\n  }\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (redirect);\n\n//# sourceURL=webpack:///./static/js/landing/redirect.js?')}});