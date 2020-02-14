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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shope.js */ \"../shope.js\");\n/* harmony import */ var _shope_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shope_js__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log('Ok');\r\n\r\n\r\n/*import {Product} from './product.js';\r\nimport {Client} from './client.js';\r\nimport {Purchase} from './purchase.js';\r\n\r\nlet client01 = new Client(1, 'Mary', 'Smit');\r\nlet client02 = new Client(2, 'Bob', 'Adams');\r\n\r\n// -----------------------(id, name,    type, cost, amount)--------\r\nlet product01 = new Product(1, 'apple', 'fruit', 20, 100),\r\n    product02 = new Product(2, 'carrot', 'vegetables', 5, 200),\r\n    product03 = new Product(3, 'porridge', 'cereals', 25, 50);\r\n\r\nlet shop = new Shop();\r\n\r\n// Добавление клиентов\r\nshop.addClients(client01);\r\nshop.addClients(client02);\r\n\r\n// Добавление товара\r\nshop.addProducts(product01);\r\nshop.addProducts(product02);\r\nshop.addProducts(product03);\r\n\r\nconsole.log(' - Products -');\r\nconsole.log(shop.listProducts);\r\n\r\n// console.log(' - Clients -');\r\n// console.log(shop.listClients);\r\n\r\n// Удаление киента\r\n// shop.delClients(client01);\r\n\r\n// Удаление продукта\r\n// shop.delProducts(product02);\r\n\r\n// Продажа товара клиенту\r\n// shop.sellProduct(product01, 07/02/2020, 10);\r\n// console.log(shop);\r\n*/\n\n//# sourceURL=webpack:///../index.js?");

/***/ }),

/***/ "../shope.js":
/*!*******************!*\
  !*** ../shope.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (8:15)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     }\\n|     \\n>     addClients = function(client) {\\n|         listClients.push(client);\\n|     }\");\n\n//# sourceURL=webpack:///../shope.js?");

/***/ })

/******/ });