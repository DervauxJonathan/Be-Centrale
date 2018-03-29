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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_app_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_app_scss__);

var Email = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"email\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).Email
var myMsg = new Email(
{ from: "me@example.com"
, to:   "delphine.braive@gmail.com"
, subject: "Knock knock..."
, body: "Who's there?"
})
// if callback is provided, errors will be passed into it
// else errors will be thrown
myMsg.send(function(err){
console.log(err)
})


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Roboto);", ""]);

// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0; }\n\n.community_page .container {\n  margin-top: 119px;\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex; }\n\n.community_page .title {\n  left: 50%;\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n  text-align: center;\n  transform: translateX(-50%);\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center; }\n  .community_page .title hr {\n    background: #00d991;\n    height: 5px;\n    width: 50px;\n    margin-right: 25px;\n    border: none;\n    display: block; }\n  .community_page .title h2 {\n    font-size: 40px;\n    display: block;\n    color: #00d991; }\n\n.community_page .left {\n  width: 30%; }\n\n.community_page .bg {\n  width: 80%;\n  height: 300px;\n  min-width: 200px;\n  margin-left: 20px;\n  background-color: #f9f9f9; }\n\n.community_page .text {\n  margin-top: -240px;\n  margin-left: 50px;\n  min-width: 250px; }\n  .community_page .text p {\n    font-family: \"Roboto\";\n    font-size: 16px;\n    line-height: 30px; }\n\n.community_page .right {\n  display: flex;\n  width: 70%;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.community_page .img-ctn {\n  width: 174px;\n  border: 2px;\n  border-color: #00d991;\n  border-style: solid;\n  margin-left: 30px;\n  height: 174px;\n  margin-bottom: 20px;\n  transition: 100ms background-color ease-in; }\n\n.community_page .img-ctn:hover {\n  background-color: #fafafa; }\n\n@media screen and (max-width: 790px) {\n  .community_page .container {\n    margin-top: 0;\n    flex-direction: column;\n    justify-content: center; }\n  .community_page .right {\n    width: 100%; }\n  .community_page .title {\n    left: 60%;\n    position: absolute; } }\n\n* {\n  padding: 0;\n  margin: 0; }\n\n.cofunders_page .bg {\n  width: 893px;\n  height: 384px;\n  background: #f9f9f9;\n  position: absolute;\n  left: 200px;\n  bottom: 0;\n  margin-top: 0;\n  z-index: -2;\n  top: 0; }\n\n.cofunders_page .description {\n  position: relative;\n  line-height: 30px;\n  left: 45%;\n  padding: 10px; }\n  .cofunders_page .description p {\n    max-width: 675px;\n    width: 50%;\n    font-family: \"Roboto\"; }\n\n.cofunders_page header,\n.cofunders_page section {\n  margin-bottom: 100px; }\n\n.cofunders_page .cofunders {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 25px;\n  justify-content: space-between; }\n  .cofunders_page .cofunders .img-block-1 {\n    margin-right: 10px;\n    display: inline-block;\n    position: relative;\n    margin-bottom: 20px;\n    max-width: 250px;\n    overflow: hidden;\n    width: 100%; }\n  .cofunders_page .cofunders .img img {\n    width: 100%;\n    transform: scale(1.1);\n    transition: 0.5s ease-in-out; }\n  .cofunders_page .cofunders .img .more {\n    color: #00d991;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 20px;\n    z-index: 5; }\n    .cofunders_page .cofunders .img .more a {\n      text-decoration: none;\n      color: #00d991; }\n  .cofunders_page .cofunders .text {\n    background: #0F001F;\n    height: 80px;\n    color: white;\n    width: 100%;\n    text-transform: uppercase; }\n    .cofunders_page .cofunders .text p {\n      padding: 10px;\n      font-family: \"Montserrat\";\n      font-size: 14px;\n      padding-top: 30px; }\n\n.amb {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 20px; }\n  .amb .img-block {\n    margin-right: 10px;\n    display: inline-block;\n    position: relative;\n    margin-bottom: 20px;\n    max-width: 250px;\n    overflow: hidden;\n    width: 100%; }\n    .amb .img-block .img {\n      width: 100%; }\n      .amb .img-block .img img {\n        width: 100%;\n        transform: scale(1.1);\n        transition: 0.5s ease-in-out; }\n      .amb .img-block .img .more {\n        color: #00d991;\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        font-size: 20px;\n        z-index: 5; }\n        .amb .img-block .img .more a {\n          text-decoration: none;\n          color: #00d991; }\n    .amb .img-block .text {\n      background: #0F001F;\n      height: 80px;\n      color: white;\n      text-transform: uppercase; }\n      .amb .img-block .text p {\n        padding: 10px;\n        font-family: \"Montserrat\";\n        font-size: 14px;\n        padding-top: 30px; }\n\n.title {\n  left: 30%;\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n  text-align: center;\n  transform: translateX(-50%);\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n  top: 40px; }\n  .title hr {\n    background: #00d991;\n    height: 5px;\n    width: 50px;\n    margin-right: 25px;\n    border: none;\n    display: block; }\n\n.titles {\n  left: 50%;\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n  text-align: center;\n  transform: translateX(-50%);\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center; }\n  .titles hr {\n    background: #00d991;\n    height: 5px;\n    width: 50px;\n    margin-right: 25px;\n    border: none;\n    display: block; }\n  .titles h2 {\n    font-size: 40px;\n    display: block;\n    color: #00d991; }\n\n@media screen and (max-width: 440px) {\n  .description {\n    left: 0 !important; }\n    .description p {\n      min-width: 300px;\n      padding: 20px; }\n    .description .titles {\n      margin-bottom: 10px; }\n  .img-block-1 {\n    left: 20%; }\n  .img-block {\n    left: 20%; } }\n\n.form {\n  width: 100%;\n  padding-bottom: 100px;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .form :focus {\n    outline: none; }\n  .form .form a {\n    outline: none; }\n  .form .title {\n    left: 20%;\n    position: relative;\n    width: 400px;\n    margin-bottom: 50px;\n    text-align: center;\n    transform: translateX(-50%);\n    font-family: \"Roboto\";\n    display: flex;\n    align-items: center; }\n    .form .title hr {\n      background: #00d991;\n      height: 5px;\n      width: 40px;\n      border: none;\n      display: block; }\n    .form .title h2 {\n      font-size: 40px;\n      display: block;\n      color: #00d991; }\n  .form .container {\n    width: 80%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 0 auto;\n    margin-top: 50px; }\n    .form .container .form_contact {\n      border: 1px solid;\n      border-color: #00d991;\n      box-sizing: border-box;\n      display: -webkit-flex;\n      display: -ms-flex;\n      display: flex;\n      justify-content: center;\n      width: 400px; }\n      .form .container .form_contact #first-group {\n        display: grid;\n        grid-template-columns: 129px 129px;\n        grid-column-gap: 40px;\n        grid-row-gap: 20px; }\n      .form .container .form_contact #second-group {\n        margin-top: 20px; }\n      .form .container .form_contact .form-group {\n        margin: 0 auto; }\n      .form .container .form_contact h4 {\n        font-size: 11.5px;\n        font-family: \"roboto\";\n        font-weight: 100;\n        color: #757575;\n        margin-bottom: 20px;\n        width: 50px; }\n      .form .container .form_contact .checkbox {\n        width: 100%; }\n        .form .container .form_contact .checkbox h4 {\n          font-size: 11.5px;\n          font-family: \"roboto\";\n          color: #757575;\n          width: 30%;\n          border-bottom: 1px solid #cccccc; }\n        .form .container .form_contact .checkbox .contain {\n          width: 100%;\n          display: flex;\n          justify-content: space-between; }\n          .form .container .form_contact .checkbox .contain input[type=\"checkbox\"] {\n            height: 11px;\n            width: 11px;\n            border: none;\n            width: 28px; }\n          .form .container .form_contact .checkbox .contain span {\n            font-size: 10px;\n            font-family: 'roboto';\n            margin-left: 5px; }\n          .form .container .form_contact .checkbox .contain .form-group {\n            display: -webkit-flex;\n            display: -ms-flex;\n            display: flex;\n            justify-content: space-between;\n            margin: 0 auto; }\n    .form .container .send_msg {\n      margin-top: 60px;\n      margin: 0 auto; }\n      .form .container .send_msg textarea {\n        border: none;\n        border-bottom: 1px solid #333333;\n        padding-bottom: 50px;\n        width: 100%; }\n      .form .container .send_msg h4 {\n        font-size: 11.5px;\n        font-family: \"roboto\";\n        color: #757575;\n        border-bottom: 1px solid #cccccc;\n        margin-top: 20px; }\n    .form .container .form-label {\n      font-size: 12px;\n      color: #5e9bfc;\n      margin: 0;\n      display: block;\n      opacity: 1;\n      -webkit-transition: 0.333s ease top, 0.333s ease opacity;\n      transition: 0.333s ease top, 0.333s ease opacity; }\n    .form .container .form-control {\n      border-radius: 0;\n      border-color: #ccc;\n      border-width: 0 0 1px 0;\n      border-style: none none solid none;\n      box-shadow: none; }\n    .form .container .form-control:focus {\n      box-shadow: none;\n      border-color: #5e9bfc; }\n    .form .container .js-hide-label {\n      opacity: 0; }\n    .form .container .js-unhighlight-label {\n      color: #00d991; }\n\n#container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n#mc_embed_signup_scroll {\n  width: 30%;\n  height: 394px;\n  border: 1px solid #333333;\n  margin: 0 auto;\n  background: white; }\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);