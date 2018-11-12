/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./frontend/interfaces/mainPage/index.js","common","vue-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/components/carousel.vue":
/*!******************************************!*\
  !*** ./frontend/components/carousel.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_vue_vue_type_template_id_3b43ad4a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug& */ "./frontend/components/carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug&");
/* harmony import */ var _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.vue?vue&type=script&lang=js& */ "./frontend/components/carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true& */ "./frontend/components/carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _carousel_vue_vue_type_template_id_3b43ad4a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _carousel_vue_vue_type_template_id_3b43ad4a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b43ad4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/components/carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/components/carousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./frontend/components/carousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/components/carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./frontend/components/carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--3-3!../../node_modules/stylus-loader!../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3b43ad4a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/components/carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug&":
/*!**********************************************************************************************!*\
  !*** ./frontend/components/carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_3b43ad4a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_3b43ad4a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_3b43ad4a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/components/dateFormat.vue":
/*!********************************************!*\
  !*** ./frontend/components/dateFormat.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dateFormat_vue_vue_type_template_id_40f29e2f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug& */ "./frontend/components/dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug&");
/* harmony import */ var _dateFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateFormat.vue?vue&type=script&lang=js& */ "./frontend/components/dateFormat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true& */ "./frontend/components/dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dateFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dateFormat_vue_vue_type_template_id_40f29e2f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dateFormat_vue_vue_type_template_id_40f29e2f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40f29e2f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/components/dateFormat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/components/dateFormat.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./frontend/components/dateFormat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./dateFormat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/dateFormat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/components/dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./frontend/components/dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--3-3!../../node_modules/stylus-loader!../../node_modules/vue-loader/lib??vue-loader-options!./dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_style_index_0_id_40f29e2f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/components/dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./frontend/components/dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_template_id_40f29e2f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_template_id_40f29e2f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dateFormat_vue_vue_type_template_id_40f29e2f_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/components/formElement.vue":
/*!*********************************************!*\
  !*** ./frontend/components/formElement.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formElement_vue_vue_type_template_id_1f9b099e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug& */ "./frontend/components/formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug&");
/* harmony import */ var _formElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formElement.vue?vue&type=script&lang=js& */ "./frontend/components/formElement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true& */ "./frontend/components/formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _formElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formElement_vue_vue_type_template_id_1f9b099e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formElement_vue_vue_type_template_id_1f9b099e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f9b099e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/components/formElement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/components/formElement.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./frontend/components/formElement.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./formElement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/formElement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/components/formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./frontend/components/formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--3-3!../../node_modules/stylus-loader!../../node_modules/vue-loader/lib??vue-loader-options!./formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_style_index_0_id_1f9b099e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/components/formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug&":
/*!*************************************************************************************************!*\
  !*** ./frontend/components/formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_template_id_1f9b099e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_template_id_1f9b099e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formElement_vue_vue_type_template_id_1f9b099e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/components/mainSlider.vue":
/*!********************************************!*\
  !*** ./frontend/components/mainSlider.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainSlider_vue_vue_type_template_id_47c8de64_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug& */ "./frontend/components/mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug&");
/* harmony import */ var _mainSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainSlider.vue?vue&type=script&lang=js& */ "./frontend/components/mainSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true& */ "./frontend/components/mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mainSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mainSlider_vue_vue_type_template_id_47c8de64_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mainSlider_vue_vue_type_template_id_47c8de64_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47c8de64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/components/mainSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/components/mainSlider.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./frontend/components/mainSlider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./mainSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/mainSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/components/mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./frontend/components/mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--3-3!../../node_modules/stylus-loader!../../node_modules/vue-loader/lib??vue-loader-options!./mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_style_index_0_id_47c8de64_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/components/mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./frontend/components/mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_template_id_47c8de64_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_template_id_47c8de64_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mainSlider_vue_vue_type_template_id_47c8de64_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/components/metTitle.vue":
/*!******************************************!*\
  !*** ./frontend/components/metTitle.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metTitle_vue_vue_type_template_id_f9ecf874_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug& */ "./frontend/components/metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug&");
/* harmony import */ var _metTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metTitle.vue?vue&type=script&lang=js& */ "./frontend/components/metTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true& */ "./frontend/components/metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _metTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _metTitle_vue_vue_type_template_id_f9ecf874_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _metTitle_vue_vue_type_template_id_f9ecf874_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f9ecf874",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/components/metTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/components/metTitle.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./frontend/components/metTitle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./metTitle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/metTitle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/components/metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./frontend/components/metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--3-3!../../node_modules/stylus-loader!../../node_modules/vue-loader/lib??vue-loader-options!./metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_style_index_0_id_f9ecf874_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/components/metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug&":
/*!**********************************************************************************************!*\
  !*** ./frontend/components/metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_template_id_f9ecf874_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_template_id_f9ecf874_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_metTitle_vue_vue_type_template_id_f9ecf874_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/components/siteHeader.vue":
/*!********************************************!*\
  !*** ./frontend/components/siteHeader.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siteHeader_vue_vue_type_template_id_539b521e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug& */ "./frontend/components/siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug&");
/* harmony import */ var _siteHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siteHeader.vue?vue&type=script&lang=js& */ "./frontend/components/siteHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true& */ "./frontend/components/siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _siteHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _siteHeader_vue_vue_type_template_id_539b521e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _siteHeader_vue_vue_type_template_id_539b521e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "539b521e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/components/siteHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/components/siteHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./frontend/components/siteHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./siteHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/siteHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/components/siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./frontend/components/siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--3-3!../../node_modules/stylus-loader!../../node_modules/vue-loader/lib??vue-loader-options!./siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_style_index_0_id_539b521e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/components/siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./frontend/components/siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_template_id_539b521e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/pug-plain-loader!../../node_modules/vue-loader/lib??vue-loader-options!./siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_template_id_539b521e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_siteHeader_vue_vue_type_template_id_539b521e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/interfaces/mainPage/App.vue":
/*!**********************************************!*\
  !*** ./frontend/interfaces/mainPage/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_b660fb00_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b660fb00&lang=pug& */ "./frontend/interfaces/mainPage/App.vue?vue&type=template&id=b660fb00&lang=pug&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./frontend/interfaces/mainPage/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=stylus& */ "./frontend/interfaces/mainPage/App.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_b660fb00_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_b660fb00_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/interfaces/mainPage/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/interfaces/mainPage/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./frontend/interfaces/mainPage/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/interfaces/mainPage/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/interfaces/mainPage/App.vue?vue&type=style&index=0&lang=stylus&":
/*!**********************************************************************************!*\
  !*** ./frontend/interfaces/mainPage/App.vue?vue&type=style&index=0&lang=stylus& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--3-3!../../../node_modules/stylus-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/interfaces/mainPage/App.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_ref_3_3_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./frontend/interfaces/mainPage/App.vue?vue&type=template&id=b660fb00&lang=pug&":
/*!**************************************************************************************!*\
  !*** ./frontend/interfaces/mainPage/App.vue?vue&type=template&id=b660fb00&lang=pug& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b660fb00_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b660fb00&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/interfaces/mainPage/App.vue?vue&type=template&id=b660fb00&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b660fb00_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b660fb00_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/interfaces/mainPage/index.js":
/*!***********************************************!*\
  !*** ./frontend/interfaces/mainPage/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./frontend/interfaces/mainPage/App.vue");



const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

__webpack_require__(/*! moment/locale/ru */ "./node_modules/moment/locale/ru.js");

moment.locale('ru');
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$moment = moment;
new vue__WEBPACK_IMPORTED_MODULE_0__["default"](_App__WEBPACK_IMPORTED_MODULE_1__["default"]).$mount('#page');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/carousel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/carousel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "carousel",
  props: ['height', 'padding'],

  data() {
    return {
      step: 0,
      position: 0,
      rightBorder: 0
    };
  },

  computed: {
    stopPrev() {
      return !this.position ? 'empty' : '';
    },

    stopNext() {
      return this.position <= this.rightBorder ? 'empty' : '';
    }

  },

  mounted() {
    this.step = this.$refs.area.firstChild.offsetWidth;
    this.rightBorder = this.$el.offsetWidth - this.$refs.area.offsetWidth;
  },

  methods: {
    move(next = false) {
      if (next) {
        this.position -= this.position >= this.rightBorder + this.step ? this.step + parseInt(this.padding) : 0;
      } else {
        this.position += this.position ? this.step + parseInt(this.padding) : 0;
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/dateFormat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/dateFormat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dateFormat",
  props: ['date'],

  data() {
    return {
      dt: new this.$moment(this.date).format('DD MMMM').split(' ')
    };
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/formElement.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/formElement.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "formElement",
  props: ['in_action', 'label']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/mainSlider.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/mainSlider.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "mainSlider",
  props: ['value'],

  data() {
    return {
      slideIndex: 0,
      changeX: 0,
      changeWidth: 100
    };
  },

  computed: {
    leftSpace() {
      return (document.documentElement.clientWidth - 1130) / 2;
    },

    currentImg() {
      return this.value[this.slideIndex].img;
    },

    currentDate() {
      return this.value[this.slideIndex].date;
    },

    currentMask() {
      return 'url(#mask_' + this.slideIndex + ')';
    }

  },
  methods: {
    rotateSlider(index = null) {
      const self = this;
      this.runSlide();
      let currentIndex;

      if (index) {
        currentIndex = index;
      } else {
        currentIndex = self.slideIndex < self.value.length - 1 ? self.slideIndex + 1 : 0;
      }

      setTimeout(() => self.slideIndex = currentIndex, 1500);
    },

    runSlide() {
      const self = this;
      this.changeX = document.documentElement.clientWidth;
      setTimeout(() => self.changeWidth = 100, 500);
      setTimeout(() => self.changeX = 0, 1000);
      setTimeout(() => self.changeWidth = 0, 1500);
    }

  },

  mounted() {
    const self = this;
    this.changeX = document.documentElement.clientWidth;
    setTimeout(function run() {
      self.rotateSlider();
      setTimeout(run, 7000);
    }, 7000);
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/metTitle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/metTitle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "metTitle",
  props: ['title'],
  computed: {
    first() {
      return this.title[0];
    },

    other() {
      return this.title.slice(1);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/siteHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/siteHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_metTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/metTitle */ "./frontend/components/metTitle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "siteHeader",
  components: {
    MetTitle: _component_metTitle__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/interfaces/mainPage/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./frontend/interfaces/mainPage/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_siteHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/siteHeader */ "./frontend/components/siteHeader.vue");
/* harmony import */ var _component_mainSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/mainSlider */ "./frontend/components/mainSlider.vue");
/* harmony import */ var _component_metTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/metTitle */ "./frontend/components/metTitle.vue");
/* harmony import */ var _component_dateFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/dateFormat */ "./frontend/components/dateFormat.vue");
/* harmony import */ var _component_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/carousel */ "./frontend/components/carousel.vue");
/* harmony import */ var _component_formElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/formElement */ "./frontend/components/formElement.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    FormElement: _component_formElement__WEBPACK_IMPORTED_MODULE_5__["default"],
    Carousel: _component_carousel__WEBPACK_IMPORTED_MODULE_4__["default"],
    DateFormat: _component_dateFormat__WEBPACK_IMPORTED_MODULE_3__["default"],
    MetTitle: _component_metTitle__WEBPACK_IMPORTED_MODULE_2__["default"],
    MainSlider: _component_mainSlider__WEBPACK_IMPORTED_MODULE_1__["default"],
    SiteHeader: _component_siteHeader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  data() {
    return {
      bodyClass: 'default',
      scrolls: [],
      slides: [{
        img: 'frontend/assets/slide3.jpg',
        text: 'Юбилейный концерт. 20 лет',
        date: '7 ноября'
      }, {
        img: 'frontend/assets/slide2.jpg',
        text: 'А зори здесь тихие',
        date: '23 марта'
      }, {
        img: 'frontend/assets/slide1.jpg',
        text: 'День театра',
        date: '27 марта'
      }],
      slideIndex: 1,
      quote: {
        text: 'В театре режиссёр - Бог, но актёры, увы, атеисты.',
        author: 'Жарко Петан'
      },
      news: [{
        title: 'Заголовок новости с непонятным названием',
        date: new Date(2018, 10, 3),
        link: '#'
      }, {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: new Date(2018, 9, 30),
        link: '#'
      }, {
        title: 'Aliquam rhoncus ex lacus, vitae placerat augue posuere ut. Praesent ac dui cursus, sollicitudin erat vel, efficitur ligula.',
        date: new Date(2018, 9, 17),
        link: '#'
      }],
      repertoire: [{
        img: "frontend/assets/ss.jpg",
        title: 'Название спектакля'
      }, {
        img: "frontend/assets/ss.jpg",
        title: 'Название спектакля'
      }, {
        img: "frontend/assets/ss.jpg",
        title: 'Название спектакля'
      }, {
        img: "frontend/assets/ss.jpg",
        title: 'Название спектакля'
      }, {
        img: "frontend/assets/ss.jpg",
        title: 'Название спектакля'
      }],
      text: null,
      email: null,
      textFocus: false,
      emailFocus: false
    };
  },

  computed: {},
  methods: {
    changeBodyClass() {
      let body = document.getElementsByTagName('body')[0];
      let doChange = false;
      this.scrolls.forEach(data => {
        if (data.offsetTop <= window.scrollY - 300) {
          doChange = true;
          body.classList.add(data.className);
        } else if (data.offsetTop > window.scrollY - 300) {
          body.classList.remove(data.className);
        }
      });
    },

    pushSep: e => {
      return {
        className: e.dataset.change,
        offsetTop: e.getBoundingClientRect().top + window.scrollY
      };
    }
  },

  mounted() {
    let scroll = [];
    const self = this;
    NodeList.prototype.forEach = Array.prototype.forEach;
    document.querySelectorAll('.sep').forEach(el => scroll.push(self.pushSep(el)));
    this.scrolls = scroll;
    window.onscroll = this.changeBodyClass;
  },

  created() {
    window.addEventListener('scroll', this.changeBodyClass);
  },

  destroyed() {
    window.removeEventListener('scroll', this.changeBodyClass);
  }

});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/carousel.vue?vue&type=style&index=0&id=3b43ad4a&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/dateFormat.vue?vue&type=style&index=0&id=40f29e2f&lang=stylus&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/formElement.vue?vue&type=style&index=0&id=1f9b099e&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/mainSlider.vue?vue&type=style&index=0&id=47c8de64&lang=stylus&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/metTitle.vue?vue&type=style&index=0&id=f9ecf874&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/siteHeader.vue?vue&type=style&index=0&id=539b521e&lang=stylus&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/interfaces/mainPage/App.vue?vue&type=style&index=0&lang=stylus&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/interfaces/mainPage/App.vue?vue&type=style&index=0&lang=stylus& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ru":
/*!********************************************!*\
  !*** ./node_modules/moment/locale sync ru ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ru";

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/carousel.vue?vue&type=template&id=3b43ad4a&scoped=true&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "carousel_wrapper" }, [
    _c(
      "a",
      {
        staticClass: "control prev",
        class: _vm.stopPrev,
        on: {
          click: function($event) {
            _vm.move()
          }
        }
      },
      [_vm._v("<")]
    ),
    _c(
      "a",
      {
        staticClass: "control next",
        class: _vm.stopNext,
        on: {
          click: function($event) {
            _vm.move(true)
          }
        }
      },
      [_vm._v(">")]
    ),
    _c(
      "div",
      { staticClass: "carousel", style: "height: " + _vm.height + "px" },
      [
        _c(
          "div",
          {
            ref: "area",
            staticClass: "slide_area",
            style: "left: " + _vm.position + "px"
          },
          [_vm._t("default")],
          2
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/dateFormat.vue?vue&type=template&id=40f29e2f&scoped=true&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cal" }, [
    _c("div", { staticClass: "line" }),
    _c("span", { staticClass: "date" }, [_vm._v(_vm._s(_vm.dt[0]))]),
    _c("span", { staticClass: "month" }, [_vm._v(_vm._s(_vm.dt[1]))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/formElement.vue?vue&type=template&id=1f9b099e&scoped=true&lang=pug& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control", class: { in_action: _vm.in_action } },
    [
      _c("label", {}, [_vm._v(_vm._s(_vm.label))]),
      _vm._t("default"),
      _c("div", { staticClass: "fake_border" })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/mainSlider.vue?vue&type=template&id=47c8de64&scoped=true&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "main_slider" } }, [
    _c("svg", { attrs: { width: "100%", height: "550" } }, [
      _c(
        "defs",
        _vm._l(_vm.value, function(slide, index) {
          return _c(
            "mask",
            {
              attrs: {
                x: "0",
                y: "0",
                width: "100%",
                height: "550",
                id: "mask_" + index
              }
            },
            [
              _c("rect", {
                attrs: {
                  x: "0",
                  y: "400",
                  width: "100%",
                  height: "100",
                  fill: "#ddd"
                }
              }),
              _c("rect", {
                attrs: {
                  x: "0",
                  y: "510",
                  width: "100%",
                  height: "15",
                  fill: "#ddd"
                }
              }),
              _c(
                "text",
                {
                  staticClass: "mask_text",
                  attrs: { x: _vm.leftSpace, y: "480", dy: "1" }
                },
                [_vm._v(_vm._s(slide.text))]
              )
            ]
          )
        })
      ),
      _c("image", { attrs: { id: "slide", "xlink:href": _vm.currentImg } }),
      _c(
        "text",
        {
          attrs: {
            id: "date",
            x: _vm.leftSpace,
            y: "399",
            dy: "1",
            fill: "white"
          }
        },
        [_vm._v(_vm._s(_vm.currentDate))]
      ),
      _c("rect", {
        attrs: {
          x: "0",
          y: "400",
          width: "100%",
          height: "125",
          mask: _vm.currentMask,
          fill: "white"
        }
      }),
      _c("rect", {
        attrs: {
          id: "change",
          x: _vm.changeX,
          y: "0",
          width: _vm.changeWidth + "%",
          height: "550",
          fill: "white"
        }
      })
    ]),
    _c(
      "div",
      { staticClass: "slider_controls" },
      _vm._l(_vm.value, function(slide, index) {
        return _c("a", {
          staticClass: "slide_control",
          class: { active: index === _vm.slideIndex },
          on: {
            click: function($event) {
              _vm.rotateSlider(index)
            }
          }
        })
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/metTitle.vue?vue&type=template&id=f9ecf874&scoped=true&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c("span", { staticClass: "big" }, [_vm._v(_vm._s(_vm.first))]),
    _vm._v(_vm._s(_vm.other))
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/components/siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/components/siteHeader.vue?vue&type=template&id=539b521e&scoped=true&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c("div", { staticClass: "container" }, [
      _c(
        "a",
        { staticClass: "brand", attrs: { href: "#" } },
        [_c("met-title", { attrs: { title: "Этюд" } })],
        1
      ),
      _c("span", { staticClass: "separator" }),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Новости")]),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Афиша")]),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Труппа")]),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Репертуар")]),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Контакты")]),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Обратная связь")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./frontend/interfaces/mainPage/App.vue?vue&type=template&id=b660fb00&lang=pug&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./frontend/interfaces/mainPage/App.vue?vue&type=template&id=b660fb00&lang=pug& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("site-header"),
      _c("main-slider", {
        model: {
          value: _vm.slides,
          callback: function($$v) {
            _vm.slides = $$v
          },
          expression: "slides"
        }
      }),
      _c("section", { staticClass: "quote" }, [
        _c("div", { staticClass: "container" }, [
          _c("blockquote", [
            _c("p", [_vm._v(_vm._s(_vm.quote.text))]),
            _c("span", [_vm._v(_vm._s(_vm.quote.author))])
          ])
        ])
      ]),
      _c("section", { attrs: { id: "news" } }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "h2",
            { staticClass: "section_title" },
            [_c("met-title", { attrs: { title: "Новости" } })],
            1
          ),
          _c(
            "div",
            { staticClass: "news" },
            _vm._l(_vm.news, function(article) {
              return _c(
                "article",
                [
                  _c("date-format", { attrs: { date: article.date } }),
                  _c(
                    "a",
                    {
                      staticClass: "news_title",
                      attrs: { href: article.link }
                    },
                    [_c("h3", [_vm._v(_vm._s(article.title))])]
                  )
                ],
                1
              )
            })
          )
        ])
      ]),
      _c("section", { staticClass: "sep", attrs: { "data-change": "blue" } }),
      _c("section", { attrs: { id: "repertoire" } }, [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "h2",
              { staticClass: "section_title" },
              [_c("met-title", { attrs: { title: "Репертуар" } })],
              1
            ),
            _c(
              "carousel",
              {
                staticClass: "stages",
                attrs: { height: "484", padding: "20" }
              },
              _vm._l(_vm.repertoire, function(stage) {
                return _c("article", { staticClass: "stage" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("img", { attrs: { src: stage.img } }),
                    _c("h3", [_vm._v(_vm._s(stage.title))])
                  ])
                ])
              })
            )
          ],
          1
        )
      ]),
      _c("section", { attrs: { id: "members" } }, [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "h2",
              { staticClass: "section_title" },
              [_c("met-title", { attrs: { title: "Коллектив" } })],
              1
            ),
            _c(
              "carousel",
              {
                staticClass: "members",
                attrs: { height: "220", padding: "65" }
              },
              _vm._l([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], function(stage) {
                return _c("article", { staticClass: "member" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("img", {
                      attrs: { src: "frontend/assets/member.jpeg" }
                    }),
                    _c("div", { staticClass: "info" }, [
                      _c("span", [_vm._v("Владимир")]),
                      _c("span", [_vm._v("Коробков")])
                    ])
                  ])
                ])
              })
            )
          ],
          1
        )
      ]),
      _c("section", { staticClass: "sep", attrs: { "data-change": "green" } }),
      _c("section", { attrs: { id: "contacts" } }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "h2",
            { staticClass: "section_title" },
            [_c("met-title", { attrs: { title: "Обратная связь" } })],
            1
          ),
          _c(
            "div",
            { staticClass: "contact_form" },
            [
              _c(
                "form-element",
                {
                  attrs: {
                    label: "Сообщение",
                    in_action: _vm.textFocus || _vm.text
                  }
                },
                [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.text,
                        expression: "text"
                      }
                    ],
                    staticClass: "form_message",
                    attrs: { rows: "3" },
                    domProps: { value: _vm.text },
                    on: {
                      focus: function($event) {
                        _vm.textFocus = true
                      },
                      blur: function($event) {
                        _vm.textFocus = false
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.text = $event.target.value
                      }
                    }
                  })
                ]
              )
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "form_actions" },
            [
              _c(
                "form-element",
                {
                  attrs: {
                    label: "email",
                    in_action: _vm.emailFocus || _vm.email
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    domProps: { value: _vm.email },
                    on: {
                      focus: function($event) {
                        _vm.emailFocus = true
                      },
                      blur: function($event) {
                        _vm.emailFocus = false
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  })
                ]
              ),
              _c("button", { staticClass: "btn" }, [_vm._v("Отправить")])
            ],
            1
          )
        ])
      ]),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "footer_list" }, [
          _c("p", { staticClass: "met_adres" }, [
            _vm._v("Народный Коллектив"),
            _c("br"),
            _vm._v("Молодёжный Экспериментальный Театр"),
            _c("br"),
            _vm._v('"ЭТЮД"'),
            _c("br"),
            _c("br"),
            _vm._v("ул. Ленина 3а, г. Сафоново, Смоленской обл."),
            _c("br"),
            _vm._v("тел: +7 123 456 78 90")
          ]),
          _c("ul", { staticClass: "first_list" }, [
            _c("li", [_vm._v("Ссылка c описанием 0")]),
            _c("li", [_vm._v("Ссылка c описанием 1")]),
            _c("li", [_vm._v("Ссылка c описанием 2")]),
            _c("li", [_vm._v("Ссылка c описанием 3")]),
            _c("li", [_vm._v("Ссылка c описанием 4")])
          ]),
          _c("ul", { staticClass: "first_list" }, [
            _c("li", [_vm._v("Ещё ссылка 0")]),
            _c("li", [_vm._v("Ещё ссылка 1")]),
            _c("li", [_vm._v("Ещё ссылка 2")]),
            _c("li", [_vm._v("Ещё ссылка 3")]),
            _c("li", [_vm._v("Ещё ссылка 4")])
          ]),
          _c("ul", [
            _c("li", [_vm._v("какая то маленькая ссылка 0")]),
            _c("li", [_vm._v("какая то маленькая ссылка 1")]),
            _c("li", [_vm._v("какая то маленькая ссылка 2")]),
            _c("li", [_vm._v("какая то маленькая ссылка 3")]),
            _c("li", [_vm._v("какая то маленькая ссылка 4")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map