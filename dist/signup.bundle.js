!function(e){var _={};function t(n){if(_[n])return _[n].exports;var r=_[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=_,t.d=function(e,_,n){t.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,_){if(1&_&&(e=t(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var r in e)t.d(n,r,function(_){return e[_]}.bind(null,r));return n},t.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(_,"a",_),_},t.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},t.p="",t(t.s="./static/js/signup/index.js")}({"./global.js":
/*!*******************!*\
  !*** ./global.js ***!
  \*******************/
/*! no static exports found */function(module,exports){eval("exports.host = 'http://localhost:3000'\n\n//# sourceURL=webpack:///./global.js?")},"./static/js/common/addFormListeners.js":
/*!**********************************************!*\
  !*** ./static/js/common/addFormListeners.js ***!
  \**********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/*\nThis function takes in a form, a callback and a state instance.\nIt iterates over all the form's children and adds event listeners\nto all valid input elements.\n*/\n\nconst addFormListeners = (form, cb, state) => {\n  const children = form.children\n  \n  for(let child of children) {\n    if (\n      child.nodeName === 'INPUT' || \n      child.nodeName === 'SELECT' ||\n      child.nodeName === 'TEXTAREA'\n    ) {\n      child.addEventListener('input', event => {\n        cb(event, state)\n      })\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addFormListeners);\n\n//# sourceURL=webpack:///./static/js/common/addFormListeners.js?")},"./static/js/common/createFormBtn.js":
/*!*******************************************!*\
  !*** ./static/js/common/createFormBtn.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nconst createFormBtn = (text, form) => {\n  const submitBtn = document.createElement('button')\n  submitBtn.className = 'form-submit'\n  const submitBtnText = document.createTextNode(text)\n  submitBtn.appendChild(submitBtnText)\n  form.appendChild(submitBtn)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createFormBtn);\n\n//# sourceURL=webpack:///./static/js/common/createFormBtn.js?")},"./static/js/common/createFormInput.js":
/*!*********************************************!*\
  !*** ./static/js/common/createFormInput.js ***!
  \*********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/*\nThis function accepts an array of objects and\na form to create linked inputs and labels.\n*/\n\n/*Object structure\n  id: input id, label for attribute,\n  name: input name,\n  type: input type,\n  label: label text\n*/\n\nconst createFormInput = (inputs, form) => {\n  for(let i of inputs) {\n    const label = document.createElement('label')\n    const labelText = document.createTextNode(i.label)\n    label.appendChild(labelText)\n    label.setAttribute('for', i.id)\n    const input = document.createElement('input')\n    input.setAttribute('type', i.type)\n    input.setAttribute('name', i.name)\n    input.id = i.id\n    form.appendChild(label)\n    form.appendChild(input)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createFormInput);\n\n//# sourceURL=webpack:///./static/js/common/createFormInput.js?")},"./static/js/common/createFormTitle.js":
/*!*********************************************!*\
  !*** ./static/js/common/createFormTitle.js ***!
  \*********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nconst createFormTitle = (text, form) => {\n  const title = document.createElement('h3')\n  title.className = 'form-title'\n  const titleText = document.createTextNode(text)\n  title.appendChild(titleText)\n  form.appendChild(title)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createFormTitle);\n\n//# sourceURL=webpack:///./static/js/common/createFormTitle.js?")},"./static/js/common/inputListener.js":
/*!*******************************************!*\
  !*** ./static/js/common/inputListener.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/*\nThis is a called when an input changes and \nupdates state using the key value pair of the\ninput\'s name and value.\n*/\n\nconst inputListener = (event, state) => {\n  const key = event.target.name\n  const value = event.target.value\n  const oldState = state.getCurrentState()\n  \n  const updatedState = {...oldState}\n  updatedState[key] = value\n  state.updateState(updatedState)\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (inputListener);\n\n//# sourceURL=webpack:///./static/js/common/inputListener.js?')},"./static/js/common/postRequest.js":
/*!*****************************************!*\
  !*** ./static/js/common/postRequest.js ***!
  \*****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global.js */ "./global.js");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst postRequest = async (body, url) => {\n  const res = await fetch(_global_js__WEBPACK_IMPORTED_MODULE_0__["host"] + url, {\n    headers: {\n      "Content-Type": "application/json",\n    },\n    method: \'POST\',\n    body: JSON.stringify(body)\n  })\n\n  const resData = await res.json()\n  return resData\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (postRequest);\n\n//# sourceURL=webpack:///./static/js/common/postRequest.js?')},"./static/js/common/state.js":
/*!***********************************!*\
  !*** ./static/js/common/state.js ***!
  \***********************************/
/*! exports provided: FormState */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormState", function() { return FormState; });\nclass FormState {\n  constructor(state) {\n    this.state = state || {}\n  }\n\n  updateState(newState) {\n    this.state = newState\n  }\n\n  getCurrentState() {\n    return this.state\n  }\n}\n\n\n\n//# sourceURL=webpack:///./static/js/common/state.js?')},"./static/js/signup/appendProfileForm.js":
/*!***********************************************!*\
  !*** ./static/js/signup/appendProfileForm.js ***!
  \***********************************************/
/*! exports provided: formState, default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formState", function() { return formState; });\n/* harmony import */ var _profileCreationForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileCreationForm */ "./static/js/signup/profileCreationForm.js");\n/* harmony import */ var _common_inputListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/inputListener */ "./static/js/common/inputListener.js");\n/* harmony import */ var _common_addFormListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/addFormListeners */ "./static/js/common/addFormListeners.js");\n/* harmony import */ var _profileFormSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileFormSubmit */ "./static/js/signup/profileFormSubmit.js");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global.js */ "./global.js");\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/state */ "./static/js/common/state.js");\n\n\n\n\n\n\n\nconst formState = new _common_state__WEBPACK_IMPORTED_MODULE_5__["FormState"]()\n\nconst appendProfileForm = () => {\n  const signupForm = document.querySelector(\'.signup-form\')\n  const newForm = document.createElement(\'form\')\n  newForm.className = \'profile-form\'\n  newForm.appendChild(_profileCreationForm__WEBPACK_IMPORTED_MODULE_0__["default"])\n  signupForm.replaceWith(newForm)\n  Object(_common_addFormListeners__WEBPACK_IMPORTED_MODULE_2__["default"])(newForm, _common_inputListener__WEBPACK_IMPORTED_MODULE_1__["default"], formState)\n\n  newForm.addEventListener(\'submit\', (event) => {\n    event.preventDefault()\n    Object(_profileFormSubmit__WEBPACK_IMPORTED_MODULE_3__["default"])(formState)\n  })\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (appendProfileForm);\n\n//# sourceURL=webpack:///./static/js/signup/appendProfileForm.js?')},"./static/js/signup/index.js":
/*!***********************************!*\
  !*** ./static/js/signup/index.js ***!
  \***********************************/
/*! exports provided: formState */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formState", function() { return formState; });\n/* harmony import */ var _common_inputListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/inputListener */ "./static/js/common/inputListener.js");\n/* harmony import */ var _common_addFormListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/addFormListeners */ "./static/js/common/addFormListeners.js");\n/* harmony import */ var _signupFormCb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signupFormCb */ "./static/js/signup/signupFormCb.js");\n/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state */ "./static/js/common/state.js");\n/* harmony import */ var _appendProfileForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appendProfileForm */ "./static/js/signup/appendProfileForm.js");\n\n\n\n\n\n\nconst formState = new _common_state__WEBPACK_IMPORTED_MODULE_3__["FormState"]()\n\nwindow.onload = () => {\n  if (localStorage.getItem(\'familyId\')) {\n    Object(_appendProfileForm__WEBPACK_IMPORTED_MODULE_4__["default"])()\n  } else {\n    const form = document.querySelector(\'.signup-form\')\n    Object(_common_addFormListeners__WEBPACK_IMPORTED_MODULE_1__["default"])(form, _common_inputListener__WEBPACK_IMPORTED_MODULE_0__["default"], formState)\n    form.addEventListener(\'submit\', _signupFormCb__WEBPACK_IMPORTED_MODULE_2__["default"])\n  }\n}\n\n\n//# sourceURL=webpack:///./static/js/signup/index.js?')},"./static/js/signup/profileCreationForm.js":
/*!*************************************************!*\
  !*** ./static/js/signup/profileCreationForm.js ***!
  \*************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_createFormInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/createFormInput */ \"./static/js/common/createFormInput.js\");\n/* harmony import */ var _common_createFormTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/createFormTitle */ \"./static/js/common/createFormTitle.js\");\n/* harmony import */ var _common_createFormBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/createFormBtn */ \"./static/js/common/createFormBtn.js\");\n\n\n\n\nconst profileCreationFragment = new DocumentFragment()\n\nObject(_common_createFormTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Enter your information', profileCreationFragment)\n\nconst formInputs = [\n  {\n    id: 'family-member-name',\n    name: 'firstName',\n    type: 'text',\n    label: 'Enter your first name'\n  },\n  {\n    id: 'family-member-dob',\n    name: 'dateOfBirth',\n    type: 'date',\n    label: 'Enter your date of birth'\n  },\n  {\n    id: 'family-member-email',\n    name: 'email',\n    type: 'text',\n    label: 'Enter your email'\n  },\n  {\n    id: 'family-member-relationship',\n    name: 'relationship',\n    type: 'text',\n    label: 'Describe your family relationship eg, \"Mother\", \"Father\", \"Child\"'\n  },\n]\n\nObject(_common_createFormInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formInputs, profileCreationFragment)\nObject(_common_createFormBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Create your profile', profileCreationFragment)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileCreationFragment);\n\n\n//# sourceURL=webpack:///./static/js/signup/profileCreationForm.js?")},"./static/js/signup/profileFormSubmit.js":
/*!***********************************************!*\
  !*** ./static/js/signup/profileFormSubmit.js ***!
  \***********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_postRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/postRequest */ \"./static/js/common/postRequest.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ \"./global.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst profileFormSubmit = async (state) => {\n  const url = '/account/profile/create'\n  const body = {\n    familyId: localStorage.getItem('familyId'),\n    ...state.getCurrentState()\n  }\n\n  const response = await Object(_common_postRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body, url)\n  localStorage.removeItem('familyId')\n  localStorage.setItem('token', response.token)\n  window.location.href = _global__WEBPACK_IMPORTED_MODULE_1__[\"host\"] + '/home'\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileFormSubmit);\n\n//# sourceURL=webpack:///./static/js/signup/profileFormSubmit.js?")},"./static/js/signup/signupFormCb.js":
/*!******************************************!*\
  !*** ./static/js/signup/signupFormCb.js ***!
  \******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./static/js/signup/index.js");\n/* harmony import */ var _signupFormSubmit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signupFormSubmit.js */ "./static/js/signup/signupFormSubmit.js");\n\n\n\n/*Grab the signup btn innerText to determine if the user\nis joining or creating a family.*/\nconst signupFormCb = event => {\n  event.preventDefault()\n  const btn = document.querySelector(\'.signup-btn\')\n  const signupType = btn.innerText.toLowerCase()\n  Object(_signupFormSubmit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(signupType, _index_js__WEBPACK_IMPORTED_MODULE_0__["formState"])\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (signupFormCb);\n\n//# sourceURL=webpack:///./static/js/signup/signupFormCb.js?')},"./static/js/signup/signupFormSubmit.js":
/*!**********************************************!*\
  !*** ./static/js/signup/signupFormSubmit.js ***!
  \**********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_postRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/postRequest.js */ "./static/js/common/postRequest.js");\n/* harmony import */ var _appendProfileForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendProfileForm */ "./static/js/signup/appendProfileForm.js");\n\n\n\n/*Submit the signup form for profile creation and\ndisplay an onscreen notification if an error occurs. \nUse javascript to create the profile creation form so \nits can be displayed as soon as confirmation of \nfamily creation has been recieved*/\nconst signupFormSubmit = async (signupType, state) => {\n  const url = \'/account/signup/\' + signupType\n  const body = state.getCurrentState()\n  const response = await Object(_common_postRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(body, url)\n  localStorage.setItem(\'familyId\', response.familyId)\n  Object(_appendProfileForm__WEBPACK_IMPORTED_MODULE_1__["default"])()\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (signupFormSubmit);\n\n//# sourceURL=webpack:///./static/js/signup/signupFormSubmit.js?')}});