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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/drink-food-kitchen-32266.jpg */ \"./src/images/drink-food-kitchen-32266.jpg\"));\n\n// Module\nexports.push([module.i, \".navbar .fab {\\r\\npadding-left: 15px;\\r\\nfont-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.jumbotron {\\r\\nbackground-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\nbackground-size: cover;\\r\\nbackground-position: center;\\r\\nwidth: 100%;\\r\\nmin-height: 500px;\\r\\n}\\r\\n\\r\\n.row img {\\r\\nwidth: 150px;\\r\\nheight: 150px;\\r\\n}\\r\\n\\r\\n#map-container-google-11 {\\r\\nmargin-top: 25px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\nbackground-color: #28A745 !important;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/images/drink-food-kitchen-32266.jpg":
/*!*************************************************!*\
  !*** ./src/images/drink-food-kitchen-32266.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cd9e0f780c937638a3aea650ae98f944.jpg\";\n\n//# sourceURL=webpack:///./src/images/drink-food-kitchen-32266.jpg?");

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create about section\r\nconst renderAbout = () => {\r\n  const containerDiv3 = document.createElement(\"div\");\r\n  containerDiv3.setAttribute(\"class\", \"container text-center\");\r\n  \r\n  const heading = document.createElement(\"h1\");\r\n  heading.setAttribute(\"id\", \"about\");\r\n  heading.innerHTML = \"About\";\r\n  \r\n  // append heading to containerDiv3\r\n  containerDiv3.appendChild(heading);\r\n  \r\n  function addParagraph(text) {\r\n    const newParagraph = document.createTextNode(text);\r\n    return newParagraph;\r\n  }\r\n  \r\n  const p1 = addParagraph(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in dolor quis tempus. Etiam neque tortor, condimentum ut bibendum et, consequat non ex. Mauris ullamcorper viverra luctus. Nullam pretium consectetur purus et interdum. Nulla fermentum lorem mattis, semper eros tristique, pulvinar nunc. Nam vestibulum felis leo, in maximus dui pretium vitae. Suspendisse sollicitudin justo id nisi varius, vel finibus nisl porta. Vestibulum et dolor sed urna pretium porttitor vitae pulvinar libero. Maecenas ornare odio at enim laoreet pharetra. Vivamus eu consectetur dui. Maecenas mollis tristique faucibus. In pharetra dui nec velit bibendum, sit amet tristique dolor tempus.\");\r\n  \r\n  const p2 = addParagraph(\"Cras hendrerit arcu vitae tellus porttitor convallis. Nulla maximus faucibus sem at volutpat. Donec viverra eu risus et convallis. Maecenas quis vehicula ligula, ac viverra nulla. Nulla faucibus a nunc nec feugiat. Nam luctus urna in dui volutpat placerat. Morbi bibendum scelerisque metus, sed vestibulum leo semper et. Nam lobortis sapien et nibh varius, sed lobortis justo luctus. Vivamus ornare orci tortor, ut aliquet purus tincidunt vel. Quisque vel rhoncus diam.\");\r\n  \r\n  const br = document.createElement(\"br\");\r\n  \r\n  // append paragraphs to containerDiv3\r\n  containerDiv3.appendChild(p1);\r\n  containerDiv3.appendChild(br);\r\n  containerDiv3.appendChild(p2);\r\n   \r\n  // Add about section to body\r\n  document.querySelector(\".content\").appendChild(containerDiv3);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderAbout);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/about.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create contact section\r\nconst renderContact = () => {\r\n  const containerDiv5 = document.createElement(\"div\");\r\n  containerDiv5.classList.add(\"container\");\r\n\r\n  const contactHeading = document.createElement(\"h1\");\r\n  contactHeading.classList.add(\"text-center\");\r\n  contactHeading.setAttribute(\"id\", \"contact\");\r\n  contactHeading.innerHTML = \"Contact\";\r\n\r\n  const contactRow = document.createElement(\"div\");\r\n  contactRow.classList.add(\"row\");\r\n\r\n  const contactRowItem = document.createElement(\"div\");\r\n  contactRowItem.setAttribute(\"class\", \"col-12 text-center\");\r\n  contactRowItem.setAttribute(\"style\", \"padding-top: 10px;\");\r\n\r\n  function addParagraph(text) {\r\n    const newParagraph = document.createTextNode(text);\r\n    return newParagraph;\r\n  }\r\n\r\n  function addBreak() {\r\n    const br = document.createElement(\"br\");\r\n    return br;\r\n  }\r\n\r\n  const p3 = addParagraph(\"1234 Tea Shop Ave.\");\r\n  const br1 = addBreak();\r\n  const p4 = addParagraph(\"Metairie, LA 70002\");\r\n  const br2 = addBreak();\r\n\r\n  const telephone = document.createElement(\"a\");\r\n  telephone.setAttribute(\"href\", \"tel:1-504-555-5555\");\r\n  telephone.innerHTML = \"1-504-555-5555\";\r\n\r\n  const br3 = addBreak();\r\n  const p5 = addParagraph(\"Monday-Thursday: 11am - 9pm\");\r\n  const br4 = addBreak();\r\n  const p6 = addParagraph(\"Friday-Sunday: 11am - 10pm\");\r\n\r\n  // append contactHeading to containerDiv5\r\n  containerDiv5.appendChild(contactHeading);\r\n\r\n  // append paragraphs, br and telephone to contactRowItem\r\n  contactRowItem.appendChild(p3);\r\n  contactRowItem.appendChild(br1);\r\n  contactRowItem.appendChild(p4);\r\n  contactRowItem.appendChild(br2);\r\n  contactRowItem.appendChild(telephone);\r\n  contactRowItem.appendChild(br3);\r\n  contactRowItem.appendChild(p5);\r\n  contactRowItem.appendChild(br4);\r\n  contactRowItem.appendChild(p6);\r\n\r\n  // append contactRowItem to contactRow\r\n  contactRow.appendChild(contactRowItem);\r\n\r\n  // append constactRow to constainerDiv5\r\n  containerDiv5.appendChild(contactRow);\r\n\r\n  // Add contact section to body\r\n  document.querySelector(\".content\").appendChild(containerDiv5);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderContact);\n\n//# sourceURL=webpack:///./src/js/contact.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create footer section\r\nconst renderFooter = () => {\r\n    const containerDiv7 = document.createElement(\"div\");\r\n    containerDiv7.classList.add(\"container\");\r\n\r\n    const footer = document.createElement(\"footer\");\r\n    footer.setAttribute(\"class\", \"page-footer font-small blue pt-1\");\r\n\r\n    const footerDiv = document.createElement(\"div\");\r\n    footerDiv.setAttribute(\"class\", \"footer-copyright text-center py-2\");\r\n    footerDiv.innerHTML = \"© 2018 Copyright: Tea Shop\";\r\n\r\n    // append footerDiv to footer\r\n    footer.appendChild(footerDiv);\r\n\r\n    // append footer to containerDiv7\r\n    containerDiv7.appendChild(footer);\r\n\r\n    // Add footer section to body\r\n    document.querySelector(\".content\").appendChild(containerDiv7);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderFooter);\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jumbotron */ \"./src/js/jumbotron.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/js/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/js/contact.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map */ \"./src/js/map.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n// import 'bootstrap/dist/css/bootstrap.min.css';\r\n// import 'bootstrap';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_jumbotron__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nObject(_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\nObject(_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\nObject(_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\nObject(_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/jumbotron.js":
/*!*****************************!*\
  !*** ./src/js/jumbotron.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create jumbotron\r\n// Set background image in CSS\r\nconst renderJumbotron = () => {\r\n  const containerDiv2 = document.createElement(\"div\");\r\n  containerDiv2.classList.add(\"container\");\r\n  \r\n  const jumbotronDiv = document.createElement(\"div\");\r\n  jumbotronDiv.setAttribute(\"class\", \"jumbotron jumbotron-fluid\");\r\n  \r\n  // append jumbotronDiv to containerDiv\r\n  containerDiv2.appendChild(jumbotronDiv);\r\n  // Add jumbotron to body \r\n  document.querySelector(\".content\").appendChild(containerDiv2);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderJumbotron);\n\n//# sourceURL=webpack:///./src/js/jumbotron.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create map section\r\nconst renderMap = () => {\r\n    const containerDiv6 = document.createElement(\"div\");\r\n    containerDiv6.classList.add(\"container\");\r\n\r\n    const mapDiv = document.createElement(\"div\");\r\n    mapDiv.setAttribute(\"id\", \"map-container-google-11\");\r\n    mapDiv.setAttribute(\"class\", \"z-depth-1-half map-container-6\");\r\n\r\n    const mapFrame = document.createElement(\"iframe\");\r\n    mapFrame.setAttribute(\"height\", \"400\");\r\n    mapFrame.setAttribute(\"width\", \"100%\");\r\n    mapFrame.setAttribute(\"src\", \"https://maps.google.com/maps?q=lakeside%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed\");\r\n    mapFrame.setAttribute(\"frameborder\", \"0\");\r\n    mapFrame.setAttribute(\"style\", \"border:0\");\r\n    mapFrame.setAttribute(\"allowfullscreen\", \"\");\r\n\r\n    // append mapFrame to mapDiv\r\n    mapDiv.appendChild(mapFrame);\r\n\r\n    // append mapDiv to containerDiv6\r\n    containerDiv6.appendChild(mapDiv);\r\n\r\n    // Add map section to body\r\n    document.querySelector(\".content\").appendChild(containerDiv6);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMap);\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create menu section\r\nconst renderMenu = () => {\r\n    const containerDiv4 = document.createElement(\"div\");\r\n    containerDiv4.classList.add(\"container\");\r\n    \r\n    const menuHeading = document.createElement(\"h1\");\r\n    menuHeading.classList.add(\"text-center\");\r\n    menuHeading.setAttribute(\"id\", \"menu\");\r\n    menuHeading.innerHTML = \"Menu\";\r\n    \r\n    // add menuHeading to containerDiv4\r\n    containerDiv4.appendChild(menuHeading);\r\n    \r\n    const hr = document.createElement(\"hr\");\r\n    \r\n    // add hr to containerDiv4\r\n    containerDiv4.appendChild(hr);\r\n    \r\n    const rowContainer = document.createElement(\"div\");\r\n    rowContainer.classList.add(\"container\");\r\n    \r\n    function addRow() {\r\n      const row = document.createElement(\"div\");\r\n      row.classList.add(\"row\");\r\n      return row;\r\n    }\r\n    \r\n    function addMenuItem(imgSrc, title, description) {\r\n      const menuItemDiv = document.createElement(\"div\");\r\n      menuItemDiv.classList.add(\"col-md-4\");\r\n    \r\n      const image = document.createElement(\"IMG\");\r\n      image.setAttribute(\"src\", imgSrc);\r\n      image.setAttribute(\"class\", \"rounded-circle mx-auto d-block\");\r\n    \r\n      const menuTitle = document.createElement(\"h3\");\r\n      menuTitle.setAttribute(\"class\", \"text-center text-success\");\r\n      menuTitle.innerHTML = title;\r\n    \r\n      const menuDescription = document.createElement(\"p\");\r\n      menuDescription.classList.add(\"text-center\");\r\n      menuDescription.innerHTML = description;\r\n    \r\n      // append image to menuItemDiv\r\n      menuItemDiv.appendChild(image);\r\n    \r\n      // append menuTitle to menuItemDiv\r\n      menuItemDiv.appendChild(menuTitle);\r\n    \r\n      // append menuDescription to menuItemDiv\r\n      menuItemDiv.appendChild(menuDescription);\r\n    \r\n      return menuItemDiv;\r\n    }\r\n    \r\n    const row1 = addRow();\r\n    \r\n    const greenTea = addMenuItem(\"../src/images/aromatic-close-cup-1417945.jpg\", \"Green Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    const oolongTea = addMenuItem(\"../src/images/aromatic-close-cup-1417945.jpg\", \"Oolong Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    const blackTea = addMenuItem(\"../src/images/aromatic-close-cup-1417945.jpg\", \"Black Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    \r\n    // append greenTea to row1\r\n    row1.appendChild(greenTea);\r\n    \r\n    // append oolongTea to row1\r\n    row1.appendChild(oolongTea);\r\n    \r\n    // append blackTea to row1\r\n    row1.appendChild(blackTea);\r\n    \r\n    // append row1 to rowContainer\r\n    rowContainer.appendChild(row1);\r\n    \r\n    const row2 = addRow();\r\n\r\n    const greenMilkTea = addMenuItem(\"../src/images/beverage-caffeine-cappuccino-1025493.jpg\", \"Green Milk Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    const oolongMilkTea = addMenuItem(\"../src/images/beverage-caffeine-cappuccino-1025493.jpg\", \"Oolong Milk Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    const blackMilkTea = addMenuItem(\"../src/images/beverage-caffeine-cappuccino-1025493.jpg\", \"Black Milk Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    \r\n    // append greenMilkTea to row2\r\n    row2.appendChild(greenMilkTea);\r\n    \r\n    // append oolongMilkTea to row2\r\n    row2.appendChild(oolongMilkTea);\r\n    \r\n    // append blackMilkTea to row2\r\n    row2.appendChild(blackMilkTea);\r\n    \r\n    // append row2 to rowContainer\r\n    rowContainer.appendChild(row2);\r\n\r\n    const row3 = addRow();\r\n\r\n    const matchaGreenTea = addMenuItem(\"../src/images/aroma-beverage-cup-206713.jpg\", \"Matcha Green Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    const thaiTea = addMenuItem(\"../src/images/aroma-beverage-cup-206713.jpg\", \"Thai Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n    const gingerTea = addMenuItem(\"../src/images/aroma-beverage-cup-206713.jpg\", \"Ginger Tea\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus\");\r\n\r\n    // append matchaGreenTea to row3\r\n    row3.appendChild(matchaGreenTea);\r\n\r\n    // append thaiTea to row3\r\n    row3.appendChild(thaiTea);\r\n\r\n    // append gingerTea to row3\r\n    row3.appendChild(gingerTea);\r\n\r\n    // append row3 to rowContainer\r\n    rowContainer.appendChild(row3);\r\n\r\n    // append rowContainer to containerDiv4\r\n    containerDiv4. appendChild(rowContainer);\r\n\r\n    // Add menu section to body\r\n    document.querySelector(\".content\").appendChild(containerDiv4);    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMenu);\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module to create navbar\r\nconst renderNavbar = () => {\r\n  const containerDiv = document.createElement(\"div\");\r\n  containerDiv.classList.add(\"container\");\r\n  \r\n  const nav = document.createElement(\"nav\");\r\n  nav.setAttribute(\"class\", \"navbar navbar-expand-lg navbar-light bg-light\");\r\n  \r\n  // append nav to containerDiv\r\n  containerDiv.appendChild(nav);\r\n  \r\n  const brand = document.createElement(\"a\");\r\n  brand.setAttribute(\"class\", \"navbar-brand text-success\");\r\n  brand.setAttribute(\"href\", \"#\");\r\n  brand.innerHTML = \"Tea Shop\";\r\n  \r\n  // append brand to nav\r\n  nav.appendChild(brand);\r\n  \r\n  const navBtn = document.createElement(\"button\");\r\n  navBtn.classList.add(\"navbar-toggler\");\r\n  navBtn.setAttribute(\"type\", \"button\");\r\n  navBtn.setAttribute(\"data-toggle\", \"collapse\");\r\n  navBtn.setAttribute(\"data-target\", \"#navbarNav\");\r\n  navBtn.setAttribute(\"aria-controls\", \"navbarNav\");\r\n  navBtn.setAttribute(\"aria-expanded\", \"false\");\r\n  navBtn.setAttribute(\"aria-label\", \"Toggle navigation\");\r\n  const navBtnSpan = document.createElement(\"span\");\r\n  navBtnSpan.classList.add(\"navbar-toggler-icon\");\r\n  \r\n  // append navBtnSpan to navBtn\r\n  navBtn.appendChild(navBtnSpan);\r\n  // append navBtn to nav\r\n  nav.appendChild(navBtn);\r\n  \r\n  const navDiv = document.createElement(\"div\");\r\n  navDiv.setAttribute(\"class\", \"collapse navbar-collapse\");\r\n  navDiv.setAttribute(\"id\", \"navbarNav\");\r\n  \r\n  // append navDiv to nav\r\n  nav.appendChild(navDiv);\r\n  \r\n  const navUl = document.createElement(\"ul\");\r\n  navUl.classList.add(\"navbar-nav\");\r\n  \r\n  // append navUl to navDiv\r\n  navDiv.appendChild(navUl);\r\n  \r\n  const aboutLi = document.createElement(\"li\");\r\n  aboutLi.setAttribute(\"class\", \"nav-item active\");\r\n  const aboutAnchor = document.createElement(\"a\");\r\n  aboutAnchor.classList.add(\"nav-link\");\r\n  aboutAnchor.setAttribute(\"href\", \"#about\");\r\n  aboutAnchor.innerHTML = \"About\";\r\n  const aboutSpan = document.createElement(\"span\");\r\n  aboutSpan.classList.add(\"sr-only\");\r\n  aboutSpan.innerHTML = \"(current)\";\r\n  \r\n  // append aboutSpan to aboutAnchor\r\n  aboutAnchor.appendChild(aboutSpan);\r\n  // append aboutAnchor to aboutLi\r\n  aboutLi.appendChild(aboutAnchor);\r\n  // append aboutLi to navUl\r\n  navUl.appendChild(aboutLi);\r\n  \r\n  const menuLi = document.createElement(\"li\");\r\n  menuLi.classList.add(\"nav-item\");\r\n  const menuAnchor = document.createElement(\"a\");\r\n  menuAnchor.classList.add(\"nav-link\");\r\n  menuAnchor.setAttribute(\"href\", \"#menu\");\r\n  menuAnchor.innerHTML = \"Menu\";\r\n  \r\n  // append menuAnchor to menuLi\r\n  menuLi.appendChild(menuAnchor);\r\n  // append menuLi to navUl\r\n  navUl.appendChild(menuLi);\r\n  \r\n  const contactLi = document.createElement(\"li\");\r\n  contactLi.classList.add(\"nav-item\");\r\n  const contactAnchor = document.createElement(\"a\");\r\n  contactAnchor.classList.add(\"nav-link\");\r\n  contactAnchor.setAttribute(\"href\", \"#contact\");\r\n  contactAnchor.innerHTML = \"Contact\";\r\n  \r\n  // append contactAnchor to contactLi\r\n  contactLi.appendChild(contactAnchor);\r\n  // append contactLi to navUl\r\n  navUl.appendChild(contactLi);\r\n  \r\n  const iconUl = document.createElement(\"ul\");\r\n  iconUl.setAttribute(\"class\", \"navbar-nav ml-auto\");\r\n  \r\n  // append iconUl to navDiv\r\n  navDiv.appendChild(iconUl);\r\n  \r\n  const igLi = document.createElement(\"li\");\r\n  const igAnchor = document.createElement(\"a\");\r\n  igAnchor.setAttribute(\"href\", \"http://instagram.com\");\r\n  const igI = document.createElement(\"i\");\r\n  igI.setAttribute(\"class\", \"fab fa-instagram text-success\");\r\n  \r\n  // append igI to igAnchor\r\n  igAnchor.appendChild(igI);\r\n  // append igAnchor to igLi\r\n  igLi.appendChild(igAnchor);\r\n  // append igLi to iconUl\r\n  iconUl.appendChild(igLi);\r\n  \r\n  const fbLi = document.createElement(\"li\");\r\n  const fbAnchor = document.createElement(\"a\");\r\n  fbAnchor.setAttribute(\"href\", \"http://facebook.com\");\r\n  const fbI = document.createElement(\"i\");\r\n  fbI.setAttribute(\"class\", \"fab fa-facebook-square text-success\");\r\n  \r\n  // append fbI to fbAnchor\r\n  fbAnchor.appendChild(fbI);\r\n  // append fbAnchor to fbLi\r\n  fbLi.appendChild(fbAnchor);\r\n  // append fbLi to iconUl\r\n  iconUl.appendChild(fbLi);\r\n  \r\n  // Add container to body\r\n  document.querySelector(\".content\").appendChild(containerDiv);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderNavbar);\n\n//# sourceURL=webpack:///./src/js/navbar.js?");

/***/ })

/******/ });