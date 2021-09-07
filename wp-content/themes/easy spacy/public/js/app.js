/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/easy spacy/resources/js/app.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/easy spacy/resources/js/app.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ill4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ill4 */ "./wp-content/themes/easy spacy/resources/js/ill4.js");
/* harmony import */ var _ill1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ill1 */ "./wp-content/themes/easy spacy/resources/js/ill1.js");
/* harmony import */ var _ill2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ill2 */ "./wp-content/themes/easy spacy/resources/js/ill2.js");
/* harmony import */ var _ill3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ill3 */ "./wp-content/themes/easy spacy/resources/js/ill3.js");




var game = {
  canvas: document.querySelector('#canvas'),
  context: null,
  ill1: _ill1__WEBPACK_IMPORTED_MODULE_1__.default,
  ill2: _ill2__WEBPACK_IMPORTED_MODULE_2__.default,
  ill3: _ill3__WEBPACK_IMPORTED_MODULE_3__.default,
  ill4: _ill4__WEBPACK_IMPORTED_MODULE_0__.default,
  defaultWidth: 1920,
  init: function init() {
    var _this = this;

    this.context = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.ill4.init(this);
    this.ill3.init(this);
    this.ill2.init(this);
    this.ill1.init(this);
    this.canvas.height = this.ill1.frame.dh;
    this.ill1.sprite.addEventListener('load', function () {
      _this.animate();
    }, false);
    this.resize();
  },
  animate: function animate() {
    var _this2 = this;

    this.animation = window.requestAnimationFrame(function () {
      _this2.animate();
    });
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ill4.update();
    this.ill3.update();
    this.ill2.update();
    this.ill1.update();
  },
  renderSpriteFrame: function renderSpriteFrame(coordinates, image) {
    this.context.drawImage(image, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);
  },
  resize: function resize() {
    var _this3 = this;

    window.addEventListener('resize', function () {
      _this3.canvas.width = window.innerWidth;
      _this3.canvas.height = _ill1__WEBPACK_IMPORTED_MODULE_1__.default.frame.dh;
    });
  }
};
game.init();

/***/ }),

/***/ "./wp-content/themes/easy spacy/resources/js/ill1.js":
/*!***********************************************************!*\
  !*** ./wp-content/themes/easy spacy/resources/js/ill1.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ill1 = {
  game: null,
  sprite: new Image(),
  spriteSrc: 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill1.svg',
  frame: {
    sx: 0,
    sy: 0,
    sw: 1920,
    sh: 802,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  },
  update: function update() {
    this.ratio = this.frame.sh / this.frame.sw;
    this.frame.dw = this.game.canvas.width;
    this.frame.dh = this.frame.dw * this.ratio;
    this.game.renderSpriteFrame(this.frame, this.sprite);
  },
  init: function init(game) {
    this.game = game;
    this.ratio = this.frame.sh / this.frame.sw;
    this.frame.dw = this.game.canvas.width;
    this.frame.dh = this.frame.dw * this.ratio;
    this.sprite.src = this.spriteSrc;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ill1);

/***/ }),

/***/ "./wp-content/themes/easy spacy/resources/js/ill2.js":
/*!***********************************************************!*\
  !*** ./wp-content/themes/easy spacy/resources/js/ill2.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ill2 = {
  game: null,
  sprite: new Image(),
  spriteSrc: 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill2.svg',
  frame: {
    sx: 0,
    sy: 0,
    sw: 1873,
    sh: 693,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  },
  update: function update() {
    this.defaultRatio = this.game.canvas.width / this.game.defaultWidth;
    this.spaceWidth = Math.abs(this.game.canvas.width - this.frame.sw * this.defaultRatio);
    this.frame.dw = this.game.canvas.width - this.spaceWidth;
    this.frame.dh = this.frame.dw * this.ratio;
    this.frame.dx = this.spaceWidth / 2;
    this.game.renderSpriteFrame(this.frame, this.sprite);
  },
  init: function init(game) {
    this.game = game;
    this.defaultRatio = this.game.canvas.width / this.game.defaultWidth;
    this.ratio = this.frame.sh / this.frame.sw;
    this.spaceWidth = Math.abs(this.game.canvas.width - this.frame.sw * this.defaultRatio);
    this.frame.dw = this.game.canvas.width - this.spaceWidth;
    this.frame.dh = this.frame.dw * this.ratio;
    this.frame.dx = this.spaceWidth / 2;
    this.sprite.src = this.spriteSrc;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ill2);

/***/ }),

/***/ "./wp-content/themes/easy spacy/resources/js/ill3.js":
/*!***********************************************************!*\
  !*** ./wp-content/themes/easy spacy/resources/js/ill3.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ill3 = {
  game: null,
  sprite: new Image(),
  spriteSrc: 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill3.svg',
  frame: {
    sx: 0,
    sy: 0,
    sw: 1598,
    sh: 704,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  },
  update: function update() {
    this.defaultRatio = this.game.canvas.width / this.game.defaultWidth;
    this.spaceWidth = Math.abs(this.game.canvas.width - this.frame.sw * this.defaultRatio);
    this.frame.dw = this.game.canvas.width - this.spaceWidth;
    this.frame.dh = this.frame.dw * this.ratio;
    this.frame.dx = this.spaceWidth / 2;
    this.game.renderSpriteFrame(this.frame, this.sprite);
  },
  init: function init(game) {
    this.game = game;
    this.defaultRatio = this.game.canvas.width / this.game.defaultWidth;
    this.ratio = this.frame.sh / this.frame.sw;
    this.spaceWidth = Math.abs(this.game.canvas.width - this.frame.sw * this.defaultRatio);
    this.frame.dw = this.game.canvas.width - this.spaceWidth;
    this.frame.dh = this.frame.dw * this.ratio;
    this.frame.dx = this.spaceWidth / 2;
    this.sprite.src = this.spriteSrc;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ill3);
/*
defaut = 1920
frame = 1598
ratio = frame/defaut
calc(fenetre - (frame*ratio))
*/

/***/ }),

/***/ "./wp-content/themes/easy spacy/resources/js/ill4.js":
/*!***********************************************************!*\
  !*** ./wp-content/themes/easy spacy/resources/js/ill4.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ill4 = {
  game: null,
  sprite: new Image(),
  spriteSrc: 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill4.svg',
  frame: {
    sx: 0,
    sy: 0,
    sw: 1640,
    sh: 599,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  },
  update: function update() {
    this.defaultRatio = this.game.canvas.width / this.game.defaultWidth;
    this.spaceWidth = Math.abs(this.game.canvas.width - this.frame.sw * this.defaultRatio);
    this.frame.dw = this.game.canvas.width - this.spaceWidth;
    this.frame.dh = this.frame.dw * this.ratio;
    this.frame.dx = this.spaceWidth / 2;
    this.game.renderSpriteFrame(this.frame, this.sprite);
  },
  init: function init(game) {
    this.game = game;
    this.defaultRatio = this.game.canvas.width / this.game.defaultWidth;
    this.ratio = this.frame.sh / this.frame.sw;
    this.spaceWidth = Math.abs(this.game.canvas.width - this.frame.sw * this.defaultRatio);
    this.frame.dw = this.game.canvas.width - this.spaceWidth;
    this.frame.dh = this.frame.dw * this.ratio;
    this.frame.dx = this.spaceWidth / 2;
    this.sprite.src = this.spriteSrc;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ill4);

/***/ }),

/***/ "./wp-content/themes/easy spacy/resources/scss/theme.scss":
/*!****************************************************************!*\
  !*** ./wp-content/themes/easy spacy/resources/scss/theme.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/wp-content/themes/easy spacy/public/js/app": 0,
/******/ 			"wp-content/themes/easy spacy/public/css/theme": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprojet_Easy_Spacy"] = self["webpackChunkprojet_Easy_Spacy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["wp-content/themes/easy spacy/public/css/theme"], () => (__webpack_require__("./wp-content/themes/easy spacy/resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["wp-content/themes/easy spacy/public/css/theme"], () => (__webpack_require__("./wp-content/themes/easy spacy/resources/scss/theme.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;