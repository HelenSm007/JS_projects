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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Client\", function() { return Client; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Client = function Client(id, fname, lname) {\n  var spentMoney = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n  _classCallCheck(this, Client);\n\n  this.id = id;\n  this.fname = fname;\n  this.lname = lname;\n  this.spentMoney = spentMoney;\n};\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shope.js */ \"./src/shope.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.js */ \"./src/product.js\");\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.js */ \"./src/client.js\");\nconsole.log('Ok');\n\n\n\nvar client01 = new _client_js__WEBPACK_IMPORTED_MODULE_2__[\"Client\"](1, 'Mary', 'Smit');\nvar client02 = new _client_js__WEBPACK_IMPORTED_MODULE_2__[\"Client\"](2, 'Bob', 'Adams'); // -----------------------(id, name,    type, cost, amount)--------\n\nvar product01 = new _product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](1, 'apple', 'fruit', 20, 100),\n    product02 = new _product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](2, 'carrot', 'vegetables', 5, 200),\n    product03 = new _product_js__WEBPACK_IMPORTED_MODULE_1__[\"Product\"](3, 'porridge', 'cereals', 25, 50);\nvar shop = new _shope_js__WEBPACK_IMPORTED_MODULE_0__[\"Shop\"](); // Добавление клиентов\n\nshop.addClients(client01);\nshop.addClients(client02); // Добавление товара\n\nshop.addProducts(product01);\nshop.addProducts(product02);\nshop.addProducts(product03);\nconsole.log(' - Shope -');\nconsole.log(shop); // console.log(' - Clients -');\n// console.log(shop.listClients);\n// Удаление киента\n// shop.delClients(client01);\n// Удаление продукта\n// shop.delProducts(product02);\n// Продажа товара клиенту\n// shop.sellProduct(product01, 07/02/2020, 10);\n// console.log(shop);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Product = function Product(id, name, type, cost, amount) {\n  _classCallCheck(this, Product);\n\n  this.id = id;\n  this.name = name;\n  this.type = type;\n  this.cost = cost;\n  this.amount = amount;\n};\n\n//# sourceURL=webpack:///./src/product.js?");

/***/ }),

/***/ "./src/purchase.js":
/*!*************************!*\
  !*** ./src/purchase.js ***!
  \*************************/
/*! exports provided: Purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Purchase\", function() { return Purchase; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//История покупок\nvar Purchase = function Purchase(name, type, amount, sum) {\n  var purchaseTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Date();\n\n  _classCallCheck(this, Purchase);\n\n  this.name = name;\n  this.type = type;\n  this.amount = amount;\n  this.sum = sum;\n  this.purchaseTime = purchaseTime;\n};\n/*\r\nlet time = new Date();\r\nconsole.log(time);\r\n*/\n\n//# sourceURL=webpack:///./src/purchase.js?");

/***/ }),

/***/ "./src/shope.js":
/*!**********************!*\
  !*** ./src/shope.js ***!
  \**********************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shop\", function() { return Shop; });\n/* harmony import */ var _purchase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.js */ \"./src/purchase.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Shop =\n/*#__PURE__*/\nfunction () {\n  function Shop() {\n    _classCallCheck(this, Shop);\n\n    this.listClients = [];\n    this.listProducts = [];\n    this.listPurchases = [];\n  }\n\n  _createClass(Shop, [{\n    key: \"addClients\",\n    value: function addClients(client) {\n      this.listClients.push(client);\n    }\n  }, {\n    key: \"delClients\",\n    value: function delClients(client) {\n      this.listClients.forEach(function (item, i, listClients) {\n        if (item.id == client.id) {\n          //    console.log('i =' + i);\n          listClients.splice(i, 1);\n        }\n      });\n    }\n  }, {\n    key: \"addProducts\",\n    value: function addProducts(product) {\n      this.listProducts.push(product);\n    }\n  }, {\n    key: \"delProducts\",\n    value: function delProducts(product) {\n      this.listProducts.forEach(function (item, i, listProducts) {\n        if (item.id == product.id) {\n          //    console.log('i =' + i);\n          listProducts.splice(i, 1);\n        }\n      });\n    }\n  }, {\n    key: \"addPurchases\",\n    value: function addPurchases(purchase) {\n      this.listPurchases.push(purchase);\n    } // Продажа товара клиенту\n\n  }, {\n    key: \"sellProduct\",\n    value: function sellProduct(product, date, amount) {\n      var sum = product.cost * amount;\n      var purchase = new _purchase_js__WEBPACK_IMPORTED_MODULE_0__[\"Purchase\"](product.name, product.type, amount, sum);\n      this.addPurchases(purchase);\n    }\n  }]);\n\n  return Shop;\n}();\n\n//# sourceURL=webpack:///./src/shope.js?");

/***/ })

/******/ });