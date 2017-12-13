/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "varying vec3 vView;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying mat3 vNormalMat;\r\nvarying vec3 vLightDir;\r\nvarying float vDisplacement;\r\n\r\n\r\nvec3 cubicCurve( float t , vec3  c0 , vec3 c1 , vec3 c2 , vec3 c3 ){\r\n\r\n  float s  = 1. - t; \r\n\r\n  vec3 v1 = c0 * ( s * s * s );\r\n  vec3 v2 = 3. * c1 * ( s * s ) * t;\r\n  vec3 v3 = 3. * c2 * s * ( t * t );\r\n  vec3 v4 = c3 * ( t * t * t );\r\n\r\n  vec3 value = v1 + v2 + v3 + v4;\r\n\r\n  return value;\r\n\r\n}\r\n\r\n\r\nvec3 interpolate( float amount , vec3 c0 , vec3 c0 , vec3 c0 , vec3 c0 ){\r\n\r\n  vec3 p1 = c0;\r\n  vec3 p2 = c1;\r\n  vec3 p3 = c2;\r\n  vec3 p4 = c3;\r\n  \r\n  vec3 v1 = vec3(0.);\r\n  vec3 v2 = .2  * p1-p3;\r\n  vec3 v3 = .5  * p2-p4;\r\n  vec3 v4 = vec3(0.);\r\n\r\n  vec3 v = cubicCurve( amount , v1 , v2 , v3 , v4 );\r\n\r\n  return v;\r\n\r\n\r\n}\r\n\r\n\r\nvoid main(){\r\n\r\n  vec3 newNormal = normalize( vNormal );\r\n\r\n  vec3 nNormal = normalize( vNormalMat * newNormal  );\r\n  vec3 nView = normalize(vView);\r\n  vec3 nReflection = normalize( reflect( vView , nNormal )); \r\n\r\n  vec3 refl = reflect( vLightDir , nNormal );\r\n  float facingRatio = abs( dot(  nNormal, refl) );\r\n\r\n  float newDot = dot( normalize( nNormal ), nView );\r\n  float inverse_dot_view = 1.0 - max( newDot  , 0.0);\r\n\r\n\r\n  vec3 red = vec3( 1. , 0. , 0. );\r\n  vec3 gre = vec3( 0. , 1. , 0. );\r\n  vec3 blu = vec3( 0. , 0. , 1. );\r\n\r\n\r\n\r\n  if( facingRatio > .4 ){\r\n    gl_FragColor = vec4(vec3(1. , 1. , 1.) , 0.0);\r\n  }else{\r\n    gl_FragColor = vec4(0.);//vec4( abs(vec3(refl),  1.0 );\r\n  }\r\n\r\n}"

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glsl_glsl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glsl_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__glsl_glsl__);

// var vertexShader = require("./glsl.vs");


console.log(__WEBPACK_IMPORTED_MODULE_0__glsl_glsl___default.a)


/***/ })
/******/ ]);