/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/notes-bg.png */ "./src/img/notes-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
}
header{
	height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

body{
	background: rgb(63,94,251);
	background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(237,237,237,1) 100%);
	text-align: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
main{
	display: grid;
	grid-template-columns: 5fr 1fr;
}
.main-container{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	justify-items: center;
	gap: 25px;

}

.list, .notes-item{
	width: 400px;
	height: 500px;
	border: 2px solid gray;
	border-radius: 15px;
	padding: 25px;
	position: relative;
	background-color: rgba(240, 248, 255, 0.5);


}
.app-item-title{
	height: 40px;
	margin-bottom: 25px;
	border-bottom: 3px solid rgba(128, 128, 128, 0.2);
}
.list ul{
	height: 80%;
	overflow: scroll;
	display: grid;
	gap: 10px;
	position: relative;
	grid-template-rows: repeat(20, fit-content(10%)) ;
	align-items: normal;
	
}
.delete-li-btn{
	position: absolute;
	width: 30px;
	top:25%;
	right: 15px;
}
.list ul::-webkit-scrollbar, .list li::-webkit-scrollbar, 
.update-li-input::-webkit-scrollbar, .new-li-input::-webkit-scrollbar, .notes-content::-webkit-scrollbar{
	display: none;
}
.list li {
	position: relative;
	text-align: left;
	border-radius: 10px;
	list-style: none;
	padding: 10px;
	box-shadow: 0px 0px 2px inset gray;
	display: grid;
	grid-template-columns: 1fr 30px;
	align-items: center;
	font-size: 18px;
	min-height: 55px;
	max-height: 110px;
	height: max-content;
	align-self: start;
	overflow: scroll;
	background-color: white;

}
.checklist li {
	grid-template-columns: 40px 1fr 30px;

}
.list li p {
	height: 100%;
	width: 95%;
	overflow: hidden;
	text-align:justify;


}
.checklist li p {
	grid-column: 2;
	align-self: center;
}
li p {
	margin-top: 5px;

}
.list li:hover {
	background-color: rgba(128, 128, 128, 0.089);
}
.li-input-container {
	border: 2px solid gray;
	border-radius: 10px;
	width: calc(100% - 50px);
	position: absolute;
	bottom: 15px;
	left: 25px;
	display: grid;
	grid-template-columns: 1fr 50px;
	background-color: white;


}
.new-li-input {
	padding: 10px;
	text-align: left;
	border: 0px;
	outline: 0px;
	border-radius: 10px;
	font-size: 18px;
	height: 55px;
	max-height: auto;


}
.add-li-btn, .delete-li-btn, .checkbox{
	cursor: pointer;
	border-radius: 7px;
	border:  0px;
	transition: all .3s ease-in-out;
	background-color: transparent;

}
.add-li-btn img{
	transition: all .1s ease-in-out;

}
.add-li-btn {
	width: 40px;
}
.add-new-item{
	font-size: 20px;
	padding: 20px 40px;
	border-radius: 10px;
	border: 0;
	box-shadow: 0 0 5px gray;
	cursor: pointer;
	display: grid;
	grid-template-columns: 30px 1fr;
	align-items: center;
	gap: 5px;
	background-color: rgba(240, 248, 255, 0.199);
	text-wrap: nowrap;

}
.title-input{
	height: 40px;
	width: 100%;
	background: none;
	text-align: center;
	font-size: 1.5em;
	font-weight: bold;
	margin-bottom: 25px;
	border: none;
	outline: none;
	border-bottom: 3px solid rgba(128, 128, 128, 0.2);
}
.update-li-input{
	text-align: left;
	border-radius: 10px;
	list-style: none;
	padding: 10px;
	box-shadow: 0px 0px 2px inset gray;
	display: grid;
	grid-template-columns: 1fr 30px;
	align-items: center;
	font-size: 18px;
	min-height: 55px;
	max-height: auto;
	height: max-content;
	align-self: start;
	overflow: scroll;
	outline: 0px;
	border: 0px;
	background-color: white;
}
.checkbox {
	width: 25px;
	height: 23px;
	position: absolute;
	width: 30px;
	top:30%;
	left: 15px;


}
.li-input-container textarea{
	line-height: 35px;
}
textarea {
  resize: none;
}
.delete-list-btn{
	width: 30px;
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transform: rotate(45deg);
	}
	.sidebar{
	}
	.add-app-item-btn-container{
		position: fixed;
		display: grid;
		gap: 20px;
		top: 100px;
		right: 100px;
	}
	.notes-item{

	}
	.notes-content{
		text-align: left;
		border-radius: 10px;
		list-style: none;
		box-shadow: 0px 0px 2px inset gray;
		display: grid;
		grid-template-columns: 1fr 30px;
		align-self: center;
		font-size: 18px;
		height: 85%;
		width: 100%;
		align-self: start;
		overflow: scroll;
		outline: 0px;
		border: 0px;
    line-height: 30px;
    background: #fff url(${___CSS_LOADER_URL_REPLACEMENT_0___}) ;
		background-size: 555px;
		padding: 0px 20px;
		background-attachment:local;
	}
	.checked-checkbox + p{
		text-decoration: line-through;

	}
	li:has(.checked-checkbox){
		background-color: rgba(0, 0, 255, 0.1)!important;
	}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tbox-sizing: border-box;\r\n}\r\nheader{\r\n\theight: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nbody{\r\n\tbackground: rgb(63,94,251);\r\n\tbackground: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(237,237,237,1) 100%);\r\n\ttext-align: center;\r\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\nmain{\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 5fr 1fr;\r\n}\r\n.main-container{\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n\tjustify-items: center;\r\n\tgap: 25px;\r\n\r\n}\r\n\r\n.list, .notes-item{\r\n\twidth: 400px;\r\n\theight: 500px;\r\n\tborder: 2px solid gray;\r\n\tborder-radius: 15px;\r\n\tpadding: 25px;\r\n\tposition: relative;\r\n\tbackground-color: rgba(240, 248, 255, 0.5);\r\n\r\n\r\n}\r\n.app-item-title{\r\n\theight: 40px;\r\n\tmargin-bottom: 25px;\r\n\tborder-bottom: 3px solid rgba(128, 128, 128, 0.2);\r\n}\r\n.list ul{\r\n\theight: 80%;\r\n\toverflow: scroll;\r\n\tdisplay: grid;\r\n\tgap: 10px;\r\n\tposition: relative;\r\n\tgrid-template-rows: repeat(20, fit-content(10%)) ;\r\n\talign-items: normal;\r\n\t\r\n}\r\n.delete-li-btn{\r\n\tposition: absolute;\r\n\twidth: 30px;\r\n\ttop:25%;\r\n\tright: 15px;\r\n}\r\n.list ul::-webkit-scrollbar, .list li::-webkit-scrollbar, \r\n.update-li-input::-webkit-scrollbar, .new-li-input::-webkit-scrollbar, .notes-content::-webkit-scrollbar{\r\n\tdisplay: none;\r\n}\r\n.list li {\r\n\tposition: relative;\r\n\ttext-align: left;\r\n\tborder-radius: 10px;\r\n\tlist-style: none;\r\n\tpadding: 10px;\r\n\tbox-shadow: 0px 0px 2px inset gray;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 30px;\r\n\talign-items: center;\r\n\tfont-size: 18px;\r\n\tmin-height: 55px;\r\n\tmax-height: 110px;\r\n\theight: max-content;\r\n\talign-self: start;\r\n\toverflow: scroll;\r\n\tbackground-color: white;\r\n\r\n}\r\n.checklist li {\r\n\tgrid-template-columns: 40px 1fr 30px;\r\n\r\n}\r\n.list li p {\r\n\theight: 100%;\r\n\twidth: 95%;\r\n\toverflow: hidden;\r\n\ttext-align:justify;\r\n\r\n\r\n}\r\n.checklist li p {\r\n\tgrid-column: 2;\r\n\talign-self: center;\r\n}\r\nli p {\r\n\tmargin-top: 5px;\r\n\r\n}\r\n.list li:hover {\r\n\tbackground-color: rgba(128, 128, 128, 0.089);\r\n}\r\n.li-input-container {\r\n\tborder: 2px solid gray;\r\n\tborder-radius: 10px;\r\n\twidth: calc(100% - 50px);\r\n\tposition: absolute;\r\n\tbottom: 15px;\r\n\tleft: 25px;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 50px;\r\n\tbackground-color: white;\r\n\r\n\r\n}\r\n.new-li-input {\r\n\tpadding: 10px;\r\n\ttext-align: left;\r\n\tborder: 0px;\r\n\toutline: 0px;\r\n\tborder-radius: 10px;\r\n\tfont-size: 18px;\r\n\theight: 55px;\r\n\tmax-height: auto;\r\n\r\n\r\n}\r\n.add-li-btn, .delete-li-btn, .checkbox{\r\n\tcursor: pointer;\r\n\tborder-radius: 7px;\r\n\tborder:  0px;\r\n\ttransition: all .3s ease-in-out;\r\n\tbackground-color: transparent;\r\n\r\n}\r\n.add-li-btn img{\r\n\ttransition: all .1s ease-in-out;\r\n\r\n}\r\n.add-li-btn {\r\n\twidth: 40px;\r\n}\r\n.add-new-item{\r\n\tfont-size: 20px;\r\n\tpadding: 20px 40px;\r\n\tborder-radius: 10px;\r\n\tborder: 0;\r\n\tbox-shadow: 0 0 5px gray;\r\n\tcursor: pointer;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 30px 1fr;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n\tbackground-color: rgba(240, 248, 255, 0.199);\r\n\ttext-wrap: nowrap;\r\n\r\n}\r\n.title-input{\r\n\theight: 40px;\r\n\twidth: 100%;\r\n\tbackground: none;\r\n\ttext-align: center;\r\n\tfont-size: 1.5em;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 25px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-bottom: 3px solid rgba(128, 128, 128, 0.2);\r\n}\r\n.update-li-input{\r\n\ttext-align: left;\r\n\tborder-radius: 10px;\r\n\tlist-style: none;\r\n\tpadding: 10px;\r\n\tbox-shadow: 0px 0px 2px inset gray;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 30px;\r\n\talign-items: center;\r\n\tfont-size: 18px;\r\n\tmin-height: 55px;\r\n\tmax-height: auto;\r\n\theight: max-content;\r\n\talign-self: start;\r\n\toverflow: scroll;\r\n\toutline: 0px;\r\n\tborder: 0px;\r\n\tbackground-color: white;\r\n}\r\n.checkbox {\r\n\twidth: 25px;\r\n\theight: 23px;\r\n\tposition: absolute;\r\n\twidth: 30px;\r\n\ttop:30%;\r\n\tleft: 15px;\r\n\r\n\r\n}\r\n.li-input-container textarea{\r\n\tline-height: 35px;\r\n}\r\ntextarea {\r\n  resize: none;\r\n}\r\n.delete-list-btn{\r\n\twidth: 30px;\r\n\tposition: absolute;\r\n\ttop: 10px;\r\n\tright: 10px;\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\ttransform: rotate(45deg);\r\n\t}\r\n\t.sidebar{\r\n\t}\r\n\t.add-app-item-btn-container{\r\n\t\tposition: fixed;\r\n\t\tdisplay: grid;\r\n\t\tgap: 20px;\r\n\t\ttop: 100px;\r\n\t\tright: 100px;\r\n\t}\r\n\t.notes-item{\r\n\r\n\t}\r\n\t.notes-content{\r\n\t\ttext-align: left;\r\n\t\tborder-radius: 10px;\r\n\t\tlist-style: none;\r\n\t\tbox-shadow: 0px 0px 2px inset gray;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 1fr 30px;\r\n\t\talign-self: center;\r\n\t\tfont-size: 18px;\r\n\t\theight: 85%;\r\n\t\twidth: 100%;\r\n\t\talign-self: start;\r\n\t\toverflow: scroll;\r\n\t\toutline: 0px;\r\n\t\tborder: 0px;\r\n    line-height: 30px;\r\n    background: #fff url(\"./img/notes-bg.png\") ;\r\n\t\tbackground-size: 555px;\r\n\t\tpadding: 0px 20px;\r\n\t\tbackground-attachment:local;\r\n\t}\r\n\t.checked-checkbox + p{\r\n\t\ttext-decoration: line-through;\r\n\r\n\t}\r\n\tli:has(.checked-checkbox){\r\n\t\tbackground-color: rgba(0, 0, 255, 0.1)!important;\r\n\t}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/checklist.js":
/*!**************************!*\
  !*** ./src/checklist.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checklist: () => (/* binding */ Checklist)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


class Checklist {
	constructor(title = "New Checklist") {
		this.itemType = "checklist"
		this.title = title
		this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.guid)()
		this.items = []
	}
}



/***/ }),

/***/ "./src/eventsController.js":
/*!*********************************!*\
  !*** ./src/eventsController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsController: () => (/* binding */ EventsController)
/* harmony export */ });
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist */ "./src/checklist.js");
/* harmony import */ var _notesItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notesItem */ "./src/notesItem.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");







class EventsController {
  static initAllEventListeners() {}
	static addChecklistItemStatusChangeListener(checkbox){
		checkbox.addEventListener("click", () => {
			const itemId = checkbox.getAttribute("id")
			const parentId = checkbox.parentNode.parentNode.getAttribute("id")
			_store__WEBPACK_IMPORTED_MODULE_3__.Store.changeChecklistItemStatus(parentId, itemId)
			if(checkbox.checked){
				checkbox.classList.add("checked-checkbox")
			}else{
				checkbox.classList.remove("checked-checkbox")
			}
	
		})
	}
	static addNotesContentListener (contentElem){
		contentElem.addEventListener("input", ()=>{
			const id = contentElem.parentNode.getAttribute("data")
			_store__WEBPACK_IMPORTED_MODULE_3__.Store.changeNotesContent(id, contentElem.value)
		})
	}
	static addDeleteItemListener(list, delBtn){
		delBtn.addEventListener("click", () => {
		const id = list.getAttribute("data")
		_store__WEBPACK_IMPORTED_MODULE_3__.Store.removeList(id)
		list.remove()
		})
	}
	static changeLiItemListener(li){
		li.addEventListener("click", (event) => {
			if(event.target.type === "checkbox"){
				return
			}
			const liInput = _renderDOM__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderLiUpdateInput(li)
			liInput.addEventListener("focusout", ()=>{
				liInput.replaceWith(li)
				if(li.firstChild.type === "checkbox"){
					li.children[1].textContent = liInput.value
				}else{
					li.firstChild.textContent = liInput.value
				}
			})
			liInput.addEventListener("input", () => {
				const listId = liInput.parentNode.getAttribute("id")
				const itemId = li.firstChild.getAttribute("id")
				console.log(listId, itemId)
				const newItem = new _todoItem__WEBPACK_IMPORTED_MODULE_4__.TodoItem(liInput.value, new Date(), "high", listId)
				_store__WEBPACK_IMPORTED_MODULE_3__.Store.changeTodoItem(listId, itemId, newItem)
				li.firstChild.setAttribute("id", newItem.id)
			})

		})
	}
	static addItemTitleInput(titleElem){
			const titleParent = titleElem.parentNode;
			const itemId = titleParent.getAttribute("data")
			const titleInput = _renderDOM__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderItemTitleInput(titleElem, titleParent)
			titleInput.value = titleElem.textContent
			titleInput.addEventListener("input", ()=>{
				_store__WEBPACK_IMPORTED_MODULE_3__.Store.changeAppItemTitle(itemId, titleInput.value)
			})
	}
	static addItemListener(btn){
		btn.addEventListener("click", ()=>{
			let defaultTitleValue = ""
			const itemType = btn.getAttribute("id")
			if(itemType === "addList"){
				_store__WEBPACK_IMPORTED_MODULE_3__.Store.addAppItem(new _todoList__WEBPACK_IMPORTED_MODULE_5__.List())
				defaultTitleValue = "New List"
			}else if(itemType === "addNotes"){
				const notes = new _notesItem__WEBPACK_IMPORTED_MODULE_1__.notesItem()
				defaultTitleValue = "New Note"
				_store__WEBPACK_IMPORTED_MODULE_3__.Store.addAppItem(notes)
			}else if(itemType === "addChecklist"){
				const checklist = new _checklist__WEBPACK_IMPORTED_MODULE_0__.Checklist()
				defaultTitleValue = "New Checklist"
				_store__WEBPACK_IMPORTED_MODULE_3__.Store.addAppItem(checklist)

			}
			_renderDOM__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderAllAppItems()
			const allTitles = document.querySelectorAll(".app-item-title")			
			const relevantTitle = allTitles[allTitles.length-1]
			const titleParent = relevantTitle.parentNode
			const newItemRerender = true
			_renderDOM__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderItemTitleInput(relevantTitle, titleParent, defaultTitleValue,newItemRerender)
		})
	}
  static addLiInputListener(addBtn) {
    addBtn.addEventListener("click", () => {
			const title = addBtn.parentNode.firstChild.value
			if(!title || title === ""){
				addBtn.parentNode.firstChild.focus()
				return
			}
			const listId = addBtn.parentNode.parentNode.getAttribute("data")
			const newTodoItem = new _todoItem__WEBPACK_IMPORTED_MODULE_4__.TodoItem(title, new Date(), "high", listId)
			_store__WEBPACK_IMPORTED_MODULE_3__.Store.addTodoItem(listId, newTodoItem)
			_renderDOM__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderAllAppItems()
    });
  }
  static addLiRemoveListener(removeBtn) {
    removeBtn.addEventListener("click", () => {
			const listId = removeBtn.parentNode.parentNode.getAttribute("id")
			const itemId = removeBtn.parentNode.firstChild.getAttribute("id")
			_store__WEBPACK_IMPORTED_MODULE_3__.Store.removeTodoItem(listId, itemId)
			_renderDOM__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderAllAppItems()
    });
  }
}


/***/ }),

/***/ "./src/notesItem.js":
/*!**************************!*\
  !*** ./src/notesItem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notesItem: () => (/* binding */ notesItem)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


class notesItem {
	constructor(title = "New Note", content, dueDate, priority) {
		this.itemType = "notes"
		this.title = title
		this.content = content
		this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.guid)()

	}
	
}



/***/ }),

/***/ "./src/renderDOM.js":
/*!**************************!*\
  !*** ./src/renderDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMController: () => (/* binding */ DOMController)
/* harmony export */ });
/* harmony import */ var _src_img_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/plus.svg */ "./src/img/plus.svg");
/* harmony import */ var _src_img_delete_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/delete-outline.svg */ "./src/img/delete-outline.svg");
/* harmony import */ var _eventsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsController */ "./src/eventsController.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");





class DOMController{
	static renderAllElements(){
		DOMController.renderAllAppItems()
		DOMController.renderAddItemBtns()
	}
	static renderChecklist(listObj){
		const container = document.querySelector("#main-container")
		const list = document.createElement("div")
		list.setAttribute("data", listObj.id)
		list.classList.add("list")
		list.classList.add("checklist")
		container.append(list)
		const listTitle = document.createElement("h2")
		listTitle.classList.add("app-item-title")
		listTitle.textContent = listObj.title
		list.append(listTitle)
		const ul = document.createElement("ul")
		ul.setAttribute("id", listObj.id)
		list.append(ul)
		DOMController.renderAllChecklistItems(listObj.items, ul)
		DOMController.renderLiInput(list, listObj)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addItemTitleInput(listTitle)
		
	}
	static renderAllChecklistItems(items, ul){
		if(items){
			for(let i = items.length-1; i>=0; i--){
				DOMController.renderChecklistItem(items[i], ul)
			}	
		}
	}
	static renderChecklistItem (item, ul){
		const li = document.createElement("li")
		ul.append(li)
		const liTitle = document.createElement("p")
		liTitle.setAttribute("id", item.id)
		liTitle.textContent = item.title
		const checkbox = document.createElement("input")
		checkbox.type = "checkbox"
		checkbox.classList.add("checkbox")
		checkbox.setAttribute("id", item.id)
		checkbox.checked = item.checked
		if(item.checked){
			checkbox.classList.add("checked-checkbox")
		}else{
			checkbox.classList.remove("checked-checkbox")
		}
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addChecklistItemStatusChangeListener(checkbox)
		li.append(checkbox)
		li.append(liTitle)
		const deleteBtn = document.createElement("button")
		li.append(deleteBtn)
		deleteBtn.classList.add("delete-li-btn")
		const deleteImg = document.createElement("img")
		deleteImg.src = _src_img_delete_outline_svg__WEBPACK_IMPORTED_MODULE_1__
		deleteBtn.append(deleteImg)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addLiRemoveListener(deleteBtn)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.changeLiItemListener(li)

	}
	static renderNotesItem(notesObj){
		const container = document.querySelector("#main-container")
		const notesItem = document.createElement("div")
		DOMController.renderRemoveItemBtn(notesItem)

		notesItem.setAttribute("data", notesObj.id)
		notesItem.classList.add("notes-item")
		container.append(notesItem)
		const notesTitle = document.createElement("h2")
		notesTitle.classList.add("app-item-title")
		notesTitle.textContent = notesObj.title
		notesItem.append(notesTitle)
		const notesContent = document.createElement("textarea")
		notesContent.classList.add("notes-content")
		notesContent.value = notesObj.content || ""
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addNotesContentListener(notesContent)
		notesItem.append(notesContent)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addItemTitleInput(notesTitle)
	}
	static renderItemTitleInput(titleElem, titleParent, defaultText = "", newItemRerender){
		const titleInput = document.createElement("input")
		titleInput.classList.add("title-input")
		titleElem.style.display = "none";
		titleParent.prepend(titleInput)
		if(newItemRerender){
		const allINputs = titleParent.querySelectorAll(":scope > input");
		allINputs[1].hidden = true
		titleInput.focus()
		titleInput.value = defaultText
		const itemId = titleParent.getAttribute("data")
		titleInput.addEventListener("input", ()=>{
			_store__WEBPACK_IMPORTED_MODULE_3__.Store.changeAppItemTitle(itemId, titleInput.value)
		})

		}
		return titleInput

	}
	static renderLiUpdateInput(li){
		const updateLiInput = document.createElement("textarea")
		updateLiInput.classList.add("update-li-input")
		li.replaceWith(updateLiInput)
		updateLiInput.value = li.innerText
		updateLiInput.focus()
		return updateLiInput

	}

	static renderAddItemBtns(){
		const addItemBtns = document.querySelectorAll(".add-new-item")
		for(const btn of addItemBtns){
			const plusImg = document.createElement("img")
			plusImg.src = _src_img_plus_svg__WEBPACK_IMPORTED_MODULE_0__
			_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addItemListener(btn)
			btn.prepend(plusImg)
			btn.addEventListener("click", () => {
				btn.style.transform = "scale(.95)"
				setTimeout(()=>{
					btn.style.transform = "scale(1)"
				}, 100)
			})
	
		}

	}
	static renderAllAppItems(){
		const container = document.querySelector("#main-container")
		container.innerHTML = ""
		const IdList = _store__WEBPACK_IMPORTED_MODULE_3__.Store.getIdList()
		if(IdList){
			for(const id of IdList){
				const item = _store__WEBPACK_IMPORTED_MODULE_3__.Store.getAppItem(id)
				if(item.itemType === "list"){
					DOMController.renderTodoList(item)
				}
				if(item.itemType === "notes"){
				DOMController.renderNotesItem(item)
			}
				if(item.itemType === "checklist"){
					DOMController.renderChecklist(item)
				}
			}
		}
	}
	static renderTodoList(listObj){
		const container = document.querySelector("#main-container")
		const list = document.createElement("div")
		list.setAttribute("data", listObj.id)
		list.classList.add("list")
		container.append(list)
		const listTitle = document.createElement("h2")
		listTitle.classList.add("app-item-title")
		listTitle.textContent = listObj.title
		list.append(listTitle)
		const ul = document.createElement("ul")
		ul.setAttribute("id", listObj.id)
		list.append(ul)
		DOMController.renderAllTodoItems(listObj.items, ul)
		DOMController.renderLiInput(list, listObj)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addItemTitleInput(listTitle)
		
	}

	static renderAllTodoItems(items, ul){
		if(items){
			for(let i = items.length-1; i>=0; i--){
				DOMController.renderTodoItem(items[i], ul)
			}	
		}
	}

	static renderTodoItem(item, ul){
		const li = document.createElement("li")
		ul.append(li)
		const liTitle = document.createElement("p")
		liTitle.setAttribute("id", item.id)
		liTitle.textContent = item.title		
		li.append(liTitle)
		const deleteBtn = document.createElement("button")
		li.append(deleteBtn)
		deleteBtn.classList.add("delete-li-btn")
		const deleteImg = document.createElement("img")
		deleteImg.src = _src_img_delete_outline_svg__WEBPACK_IMPORTED_MODULE_1__
		deleteBtn.append(deleteImg)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addLiRemoveListener(deleteBtn)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.changeLiItemListener(li)

	}
	static renderLiInput(list, listObj){
		const liInputContainer = document.createElement("div")
		liInputContainer.classList.add("li-input-container")
		list.append(liInputContainer)
		DOMController.renderRemoveItemBtn(list)
		const liInput = document.createElement("textarea")
		liInput.setAttribute("data", listObj.id)
		liInput.classList.add("new-li-input")
		liInputContainer.append(liInput)
		const addBtn = document.createElement("button")
		addBtn.classList.add("add-li-btn")
		const plusImg = document.createElement("img")
		plusImg.src = _src_img_plus_svg__WEBPACK_IMPORTED_MODULE_0__
		addBtn.append(plusImg)
		liInputContainer.append(addBtn)
		addBtn.addEventListener("click", () => {
			plusImg.style.transform = "scale(.8)"
			setTimeout(()=>{
				plusImg.style.transform = "scale(1)"
			}, 100)
		})
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addLiInputListener(addBtn)
	}

	static renderRemoveItemBtn(list){
		const delBtn = document.createElement("button")
		delBtn.classList.add("delete-list-btn")
		const delBtnIcon = document.createElement("img")
		delBtnIcon.src = _src_img_plus_svg__WEBPACK_IMPORTED_MODULE_0__
		delBtn.append(delBtnIcon)
		list.prepend(delBtn)
		_eventsController__WEBPACK_IMPORTED_MODULE_2__.EventsController.addDeleteItemListener(list, delBtn)
	}
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
class Store{
	static recordIdList(id){
		if(localStorage.getItem("idList")){
			const idList =  JSON.parse(localStorage.getItem("idList"))
			idList.push(id)
			localStorage.setItem("idList", JSON.stringify(idList))
		}else{
			const idList = [];
			idList.push(id)
			localStorage.setItem("idList", JSON.stringify(idList))
		}
	}
	static removeIdfromIdList(id){
		const idList =  JSON.parse(localStorage.getItem("idList"))
		const newIdList = idList.filter(item => item !== id)
		localStorage.setItem("idList", JSON.stringify(newIdList))
	}
	static getIdList(){
		const idList =  JSON.parse(localStorage.getItem("idList"))
		return idList
	}
	static addAppItem(item){
		if(!Store.getAppItem(item.id)){
			Store.recordIdList(item.id)
		}
		localStorage.setItem(item.id, JSON.stringify(item));

	}
	static getAppItem(id){
		const item = JSON.parse(localStorage.getItem(id))
		return item
	}
	static removeList(id){
		localStorage.removeItem(id)
		Store.removeIdfromIdList(id)

	}
	static changeAppItemTitle(id, newTitle){
		const item = Store.getAppItem(id)
		console.log(item)
		item.title = newTitle
		Store.addAppItem(item)
	}

	static addTodoItem(id, item){
		const list = Store.getAppItem(id)
		list.items.push(item)
		Store.addAppItem(list)
	}
	static removeTodoItem(listId, itemId){
		const list = Store.getAppItem(listId)
		const newItems = list.items.filter(item => item.id !== itemId)
		list.items = newItems
		Store.addAppItem(list)
	}
	static changeTodoItem(listId, itemId, newItem){
		const list = Store.getAppItem(listId)
		const newItems = list.items.map((elem) => {
			if(elem.id === itemId){
				return newItem
			}
			else{
				return elem
			}
		})
		list.items = newItems
		Store.addAppItem(list)
	}
	static changeNotesContent(id, content){
		const item = Store.getAppItem(id)
		item.content = content
		Store.addAppItem(item)
	}
	static changeChecklistItemStatus(parentid, itemId){
		const checklist = Store.getAppItem(parentid)
		const newItems = checklist.items.map((elem) => {
			if(elem.id === itemId){
				elem.checked = !elem.checked
				return elem
			}
			else{
				return elem
			}
		})
		checklist.items = newItems
		Store.addAppItem(checklist)

	}
	
}

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItem: () => (/* binding */ TodoItem)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


class TodoItem {
	constructor(title, dueDate, priority, listId) {
		this.title = title
		this.dueDate = dueDate
		this.priority = priority
		this.listId = listId
		this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.guid)()

	}
	
}



/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


class List {
	constructor(title = "New List") {
		this.itemType = "list"
		this.title = title
		this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.guid)()
		this.items = []
	}
}



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   guid: () => (/* binding */ guid)
/* harmony export */ });
function guid () {
	let s4 = () => {
			return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
	}
	//return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


/***/ }),

/***/ "./src/img/delete-outline.svg":
/*!************************************!*\
  !*** ./src/img/delete-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0bb67a90c508546224.svg";

/***/ }),

/***/ "./src/img/notes-bg.png":
/*!******************************!*\
  !*** ./src/img/notes-bg.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b2e11476928dffc1adc.png";

/***/ }),

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a80973b05c3ad139286d.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");
/* harmony import */ var _notesItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notesItem */ "./src/notesItem.js");







_renderDOM__WEBPACK_IMPORTED_MODULE_4__.DOMController.renderAllElements()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksZUFBZSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGVBQWUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGVBQWUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssWUFBWSw0QkFBNEIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsS0FB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Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNTO0FBQ0Y7QUFDUztBQUNNO0FBQ0o7QUFDeEM7QUFDQSxxREFBYSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbm90ZXNJdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXJET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9ub3Rlcy1iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaGVhZGVye1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5e1xyXG5cdGJhY2tncm91bmQ6IHJnYig2Myw5NCwyNTEpO1xyXG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjMsOTQsMjUxLDEpIDAlLCByZ2JhKDIzNywyMzcsMjM3LDEpIDEwMCUpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxubWFpbntcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcclxufVxyXG4ubWFpbi1jb250YWluZXJ7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAyNXB4O1xyXG5cclxufVxyXG5cclxuLmxpc3QsIC5ub3Rlcy1pdGVte1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRoZWlnaHQ6IDUwMHB4O1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRwYWRkaW5nOiAyNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNSk7XHJcblxyXG5cclxufVxyXG4uYXBwLWl0ZW0tdGl0bGV7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcclxufVxyXG4ubGlzdCB1bHtcclxuXHRoZWlnaHQ6IDgwJTtcclxuXHRvdmVyZmxvdzogc2Nyb2xsO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z2FwOiAxMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyMCwgZml0LWNvbnRlbnQoMTAlKSkgO1xyXG5cdGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcblx0XHJcbn1cclxuLmRlbGV0ZS1saS1idG57XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdHRvcDoyNSU7XHJcblx0cmlnaHQ6IDE1cHg7XHJcbn1cclxuLmxpc3QgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAubGlzdCBsaTo6LXdlYmtpdC1zY3JvbGxiYXIsIFxyXG4udXBkYXRlLWxpLWlucHV0Ojotd2Via2l0LXNjcm9sbGJhciwgLm5ldy1saS1pbnB1dDo6LXdlYmtpdC1zY3JvbGxiYXIsIC5ub3Rlcy1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5saXN0IGxpIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDJweCBpbnNldCBncmF5O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRtaW4taGVpZ2h0OiA1NXB4O1xyXG5cdG1heC1oZWlnaHQ6IDExMHB4O1xyXG5cdGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcblx0YWxpZ24tc2VsZjogc3RhcnQ7XHJcblx0b3ZlcmZsb3c6IHNjcm9sbDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmNoZWNrbGlzdCBsaSB7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmciAzMHB4O1xyXG5cclxufVxyXG4ubGlzdCBsaSBwIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDk1JTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtYWxpZ246anVzdGlmeTtcclxuXHJcblxyXG59XHJcbi5jaGVja2xpc3QgbGkgcCB7XHJcblx0Z3JpZC1jb2x1bW46IDI7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbmxpIHAge1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHJcbn1cclxuLmxpc3QgbGk6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wODkpO1xyXG59XHJcbi5saS1pbnB1dC1jb250YWluZXIge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMTVweDtcclxuXHRsZWZ0OiAyNXB4O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5uZXctbGktaW5wdXQge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRib3JkZXI6IDBweDtcclxuXHRvdXRsaW5lOiAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG5cdG1heC1oZWlnaHQ6IGF1dG87XHJcblxyXG5cclxufVxyXG4uYWRkLWxpLWJ0biwgLmRlbGV0ZS1saS1idG4sIC5jaGVja2JveHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xyXG5cdGJvcmRlcjogIDBweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxufVxyXG4uYWRkLWxpLWJ0biBpbWd7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuLmFkZC1saS1idG4ge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbi5hZGQtbmV3LWl0ZW17XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHggNDBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJvcmRlcjogMDtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IGdyYXk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC4xOTkpO1xyXG5cdHRleHQtd3JhcDogbm93cmFwO1xyXG5cclxufVxyXG4udGl0bGUtaW5wdXR7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMS41ZW07XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xyXG59XHJcbi51cGRhdGUtbGktaW5wdXR7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDJweCBpbnNldCBncmF5O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRtaW4taGVpZ2h0OiA1NXB4O1xyXG5cdG1heC1oZWlnaHQ6IGF1dG87XHJcblx0aGVpZ2h0OiBtYXgtY29udGVudDtcclxuXHRhbGlnbi1zZWxmOiBzdGFydDtcclxuXHRvdmVyZmxvdzogc2Nyb2xsO1xyXG5cdG91dGxpbmU6IDBweDtcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hlY2tib3gge1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGhlaWdodDogMjNweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0dG9wOjMwJTtcclxuXHRsZWZ0OiAxNXB4O1xyXG5cclxuXHJcbn1cclxuLmxpLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtcclxuXHRsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi5kZWxldGUtbGlzdC1idG57XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTBweDtcclxuXHRyaWdodDogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR9XHJcblx0LnNpZGViYXJ7XHJcblx0fVxyXG5cdC5hZGQtYXBwLWl0ZW0tYnRuLWNvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRnYXA6IDIwcHg7XHJcblx0XHR0b3A6IDEwMHB4O1xyXG5cdFx0cmlnaHQ6IDEwMHB4O1xyXG5cdH1cclxuXHQubm90ZXMtaXRlbXtcclxuXHJcblx0fVxyXG5cdC5ub3Rlcy1jb250ZW50e1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCAycHggaW5zZXQgZ3JheTtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMHB4O1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0aGVpZ2h0OiA4NSU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGFsaWduLXNlbGY6IHN0YXJ0O1xyXG5cdFx0b3ZlcmZsb3c6IHNjcm9sbDtcclxuXHRcdG91dGxpbmU6IDBweDtcclxuXHRcdGJvcmRlcjogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSA7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDU1NXB4O1xyXG5cdFx0cGFkZGluZzogMHB4IDIwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6bG9jYWw7XHJcblx0fVxyXG5cdC5jaGVja2VkLWNoZWNrYm94ICsgcHtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG5cclxuXHR9XHJcblx0bGk6aGFzKC5jaGVja2VkLWNoZWNrYm94KXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpIWltcG9ydGFudDtcclxuXHR9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxhQUFhO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsbUZBQW1GO0NBQ25GLGtCQUFrQjtDQUNsQixtSkFBbUo7QUFDcEo7QUFDQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7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QUNBO0VBQ0MsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7Q0FDYjtDQUNBOztDQUVBO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztJQUNULGlCQUFpQjtJQUNqQix5REFBMkM7RUFDN0Msc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDZCQUE2Qjs7Q0FFOUI7Q0FDQTtFQUNDLGdEQUFnRDtDQUNqRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5oZWFkZXJ7XFxyXFxuXFx0aGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiKDYzLDk0LDI1MSk7XFxyXFxuXFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2Myw5NCwyNTEsMSkgMCUsIHJnYmEoMjM3LDIzNywyMzcsMSkgMTAwJSk7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxubWFpbntcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcXHJcXG59XFxyXFxuLm1haW4tY29udGFpbmVye1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMjVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QsIC5ub3Rlcy1pdGVte1xcclxcblxcdHdpZHRoOiA0MDBweDtcXHJcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXHJcXG5cXHRwYWRkaW5nOiAyNXB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNSk7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5hcHAtaXRlbS10aXRsZXtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcclxcbn1cXHJcXG4ubGlzdCB1bHtcXHJcXG5cXHRoZWlnaHQ6IDgwJTtcXHJcXG5cXHRvdmVyZmxvdzogc2Nyb2xsO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAxMHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyMCwgZml0LWNvbnRlbnQoMTAlKSkgO1xcclxcblxcdGFsaWduLWl0ZW1zOiBub3JtYWw7XFxyXFxuXFx0XFxyXFxufVxcclxcbi5kZWxldGUtbGktYnRue1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHR0b3A6MjUlO1xcclxcblxcdHJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ubGlzdCB1bDo6LXdlYmtpdC1zY3JvbGxiYXIsIC5saXN0IGxpOjotd2Via2l0LXNjcm9sbGJhciwgXFxyXFxuLnVwZGF0ZS1saS1pbnB1dDo6LXdlYmtpdC1zY3JvbGxiYXIsIC5uZXctbGktaW5wdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLCAubm90ZXMtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmxpc3QgbGkge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGluc2V0IGdyYXk7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMHB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcclxcblxcdG1pbi1oZWlnaHQ6IDU1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMTEwcHg7XFxyXFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG5cXHRhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG5cXHRvdmVyZmxvdzogc2Nyb2xsO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG4uY2hlY2tsaXN0IGxpIHtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDMwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5saXN0IGxpIHAge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogOTUlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xcclxcblxcclxcblxcclxcbn1cXHJcXG4uY2hlY2tsaXN0IGxpIHAge1xcclxcblxcdGdyaWQtY29sdW1uOiAyO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxubGkgcCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNXB4O1xcclxcblxcclxcbn1cXHJcXG4ubGlzdCBsaTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA4OSk7XFxyXFxufVxcclxcbi5saS1pbnB1dC1jb250YWluZXIge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogMTVweDtcXHJcXG5cXHRsZWZ0OiAyNXB4O1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLm5ldy1saS1pbnB1dCB7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcblxcdG91dGxpbmU6IDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRoZWlnaHQ6IDU1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogYXV0bztcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLmFkZC1saS1idG4sIC5kZWxldGUtbGktYnRuLCAuY2hlY2tib3h7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG5cXHRib3JkZXI6ICAwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG59XFxyXFxuLmFkZC1saS1idG4gaW1ne1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxufVxcclxcbi5hZGQtbGktYnRuIHtcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuLmFkZC1uZXctaXRlbXtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMjBweCA0MHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGJveC1zaGFkb3c6IDAgMCA1cHggZ3JheTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjE5OSk7XFxyXFxuXFx0dGV4dC13cmFwOiBub3dyYXA7XFxyXFxuXFxyXFxufVxcclxcbi50aXRsZS1pbnB1dHtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxyXFxufVxcclxcbi51cGRhdGUtbGktaW5wdXR7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDJweCBpbnNldCBncmF5O1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRtaW4taGVpZ2h0OiA1NXB4O1xcclxcblxcdG1heC1oZWlnaHQ6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG5cXHRhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG5cXHRvdmVyZmxvdzogc2Nyb2xsO1xcclxcblxcdG91dGxpbmU6IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmNoZWNrYm94IHtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRoZWlnaHQ6IDIzcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdHRvcDozMCU7XFxyXFxuXFx0bGVmdDogMTVweDtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLmxpLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtcXHJcXG5cXHRsaW5lLWhlaWdodDogMzVweDtcXHJcXG59XFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4uZGVsZXRlLWxpc3QtYnRue1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDEwcHg7XFxyXFxuXFx0cmlnaHQ6IDEwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcdC5zaWRlYmFye1xcclxcblxcdH1cXHJcXG5cXHQuYWRkLWFwcC1pdGVtLWJ0bi1jb250YWluZXJ7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0Z2FwOiAyMHB4O1xcclxcblxcdFxcdHRvcDogMTAwcHg7XFxyXFxuXFx0XFx0cmlnaHQ6IDEwMHB4O1xcclxcblxcdH1cXHJcXG5cXHQubm90ZXMtaXRlbXtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFx0Lm5vdGVzLWNvbnRlbnR7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDBweCAycHggaW5zZXQgZ3JheTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMwcHg7XFxyXFxuXFx0XFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDg1JTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG5cXHRcXHRvdmVyZmxvdzogc2Nyb2xsO1xcclxcblxcdFxcdG91dGxpbmU6IDBweDtcXHJcXG5cXHRcXHRib3JkZXI6IDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKFxcXCIuL2ltZy9ub3Rlcy1iZy5wbmdcXFwiKSA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiA1NTVweDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwcHggMjBweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6bG9jYWw7XFxyXFxuXFx0fVxcclxcblxcdC5jaGVja2VkLWNoZWNrYm94ICsgcHtcXHJcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFx0bGk6aGFzKC5jaGVja2VkLWNoZWNrYm94KXtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKSFpbXBvcnRhbnQ7XFxyXFxuXFx0fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBndWlkIH0gZnJvbSBcIi4vdXRpbHNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdCB7XHJcblx0Y29uc3RydWN0b3IodGl0bGUgPSBcIk5ldyBDaGVja2xpc3RcIikge1xyXG5cdFx0dGhpcy5pdGVtVHlwZSA9IFwiY2hlY2tsaXN0XCJcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZVxyXG5cdFx0dGhpcy5pZCA9IGd1aWQoKVxyXG5cdFx0dGhpcy5pdGVtcyA9IFtdXHJcblx0fVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDaGVja2xpc3QgfSBmcm9tIFwiLi9jaGVja2xpc3RcIjtcclxuaW1wb3J0IHsgbm90ZXNJdGVtIH0gZnJvbSBcIi4vbm90ZXNJdGVtXCI7XHJcbmltcG9ydCB7IERPTUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyBpbml0QWxsRXZlbnRMaXN0ZW5lcnMoKSB7fVxyXG5cdHN0YXRpYyBhZGRDaGVja2xpc3RJdGVtU3RhdHVzQ2hhbmdlTGlzdGVuZXIoY2hlY2tib3gpe1xyXG5cdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgaXRlbUlkID0gY2hlY2tib3guZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuXHRcdFx0Y29uc3QgcGFyZW50SWQgPSBjaGVja2JveC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuXHRcdFx0U3RvcmUuY2hhbmdlQ2hlY2tsaXN0SXRlbVN0YXR1cyhwYXJlbnRJZCwgaXRlbUlkKVxyXG5cdFx0XHRpZihjaGVja2JveC5jaGVja2VkKXtcclxuXHRcdFx0XHRjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC1jaGVja2JveFwiKVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC1jaGVja2JveFwiKVxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHR9KVxyXG5cdH1cclxuXHRzdGF0aWMgYWRkTm90ZXNDb250ZW50TGlzdGVuZXIgKGNvbnRlbnRFbGVtKXtcclxuXHRcdGNvbnRlbnRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKT0+e1xyXG5cdFx0XHRjb25zdCBpZCA9IGNvbnRlbnRFbGVtLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKVxyXG5cdFx0XHRTdG9yZS5jaGFuZ2VOb3Rlc0NvbnRlbnQoaWQsIGNvbnRlbnRFbGVtLnZhbHVlKVxyXG5cdFx0fSlcclxuXHR9XHJcblx0c3RhdGljIGFkZERlbGV0ZUl0ZW1MaXN0ZW5lcihsaXN0LCBkZWxCdG4pe1xyXG5cdFx0ZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRjb25zdCBpZCA9IGxpc3QuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKVxyXG5cdFx0U3RvcmUucmVtb3ZlTGlzdChpZClcclxuXHRcdGxpc3QucmVtb3ZlKClcclxuXHRcdH0pXHJcblx0fVxyXG5cdHN0YXRpYyBjaGFuZ2VMaUl0ZW1MaXN0ZW5lcihsaSl7XHJcblx0XHRsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmKGV2ZW50LnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIpe1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGxpSW5wdXQgPSBET01Db250cm9sbGVyLnJlbmRlckxpVXBkYXRlSW5wdXQobGkpXHJcblx0XHRcdGxpSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpPT57XHJcblx0XHRcdFx0bGlJbnB1dC5yZXBsYWNlV2l0aChsaSlcclxuXHRcdFx0XHRpZihsaS5maXJzdENoaWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIil7XHJcblx0XHRcdFx0XHRsaS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IGxpSW5wdXQudmFsdWVcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGxpLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBsaUlucHV0LnZhbHVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRsaUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgbGlzdElkID0gbGlJbnB1dC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpXHJcblx0XHRcdFx0Y29uc3QgaXRlbUlkID0gbGkuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGxpc3RJZCwgaXRlbUlkKVxyXG5cdFx0XHRcdGNvbnN0IG5ld0l0ZW0gPSBuZXcgVG9kb0l0ZW0obGlJbnB1dC52YWx1ZSwgbmV3IERhdGUoKSwgXCJoaWdoXCIsIGxpc3RJZClcclxuXHRcdFx0XHRTdG9yZS5jaGFuZ2VUb2RvSXRlbShsaXN0SWQsIGl0ZW1JZCwgbmV3SXRlbSlcclxuXHRcdFx0XHRsaS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIG5ld0l0ZW0uaWQpXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0fSlcclxuXHR9XHJcblx0c3RhdGljIGFkZEl0ZW1UaXRsZUlucHV0KHRpdGxlRWxlbSl7XHJcblx0XHRcdGNvbnN0IHRpdGxlUGFyZW50ID0gdGl0bGVFbGVtLnBhcmVudE5vZGU7XHJcblx0XHRcdGNvbnN0IGl0ZW1JZCA9IHRpdGxlUGFyZW50LmdldEF0dHJpYnV0ZShcImRhdGFcIilcclxuXHRcdFx0Y29uc3QgdGl0bGVJbnB1dCA9IERPTUNvbnRyb2xsZXIucmVuZGVySXRlbVRpdGxlSW5wdXQodGl0bGVFbGVtLCB0aXRsZVBhcmVudClcclxuXHRcdFx0dGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlRWxlbS50ZXh0Q29udGVudFxyXG5cdFx0XHR0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKT0+e1xyXG5cdFx0XHRcdFN0b3JlLmNoYW5nZUFwcEl0ZW1UaXRsZShpdGVtSWQsIHRpdGxlSW5wdXQudmFsdWUpXHJcblx0XHRcdH0pXHJcblx0fVxyXG5cdHN0YXRpYyBhZGRJdGVtTGlzdGVuZXIoYnRuKXtcclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuXHRcdFx0bGV0IGRlZmF1bHRUaXRsZVZhbHVlID0gXCJcIlxyXG5cdFx0XHRjb25zdCBpdGVtVHlwZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG5cdFx0XHRpZihpdGVtVHlwZSA9PT0gXCJhZGRMaXN0XCIpe1xyXG5cdFx0XHRcdFN0b3JlLmFkZEFwcEl0ZW0obmV3IExpc3QoKSlcclxuXHRcdFx0XHRkZWZhdWx0VGl0bGVWYWx1ZSA9IFwiTmV3IExpc3RcIlxyXG5cdFx0XHR9ZWxzZSBpZihpdGVtVHlwZSA9PT0gXCJhZGROb3Rlc1wiKXtcclxuXHRcdFx0XHRjb25zdCBub3RlcyA9IG5ldyBub3Rlc0l0ZW0oKVxyXG5cdFx0XHRcdGRlZmF1bHRUaXRsZVZhbHVlID0gXCJOZXcgTm90ZVwiXHJcblx0XHRcdFx0U3RvcmUuYWRkQXBwSXRlbShub3RlcylcclxuXHRcdFx0fWVsc2UgaWYoaXRlbVR5cGUgPT09IFwiYWRkQ2hlY2tsaXN0XCIpe1xyXG5cdFx0XHRcdGNvbnN0IGNoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QoKVxyXG5cdFx0XHRcdGRlZmF1bHRUaXRsZVZhbHVlID0gXCJOZXcgQ2hlY2tsaXN0XCJcclxuXHRcdFx0XHRTdG9yZS5hZGRBcHBJdGVtKGNoZWNrbGlzdClcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0RE9NQ29udHJvbGxlci5yZW5kZXJBbGxBcHBJdGVtcygpXHJcblx0XHRcdGNvbnN0IGFsbFRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwLWl0ZW0tdGl0bGVcIilcdFx0XHRcclxuXHRcdFx0Y29uc3QgcmVsZXZhbnRUaXRsZSA9IGFsbFRpdGxlc1thbGxUaXRsZXMubGVuZ3RoLTFdXHJcblx0XHRcdGNvbnN0IHRpdGxlUGFyZW50ID0gcmVsZXZhbnRUaXRsZS5wYXJlbnROb2RlXHJcblx0XHRcdGNvbnN0IG5ld0l0ZW1SZXJlbmRlciA9IHRydWVcclxuXHRcdFx0RE9NQ29udHJvbGxlci5yZW5kZXJJdGVtVGl0bGVJbnB1dChyZWxldmFudFRpdGxlLCB0aXRsZVBhcmVudCwgZGVmYXVsdFRpdGxlVmFsdWUsbmV3SXRlbVJlcmVuZGVyKVxyXG5cdFx0fSlcclxuXHR9XHJcbiAgc3RhdGljIGFkZExpSW5wdXRMaXN0ZW5lcihhZGRCdG4pIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGFkZEJ0bi5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudmFsdWVcclxuXHRcdFx0aWYoIXRpdGxlIHx8IHRpdGxlID09PSBcIlwiKXtcclxuXHRcdFx0XHRhZGRCdG4ucGFyZW50Tm9kZS5maXJzdENoaWxkLmZvY3VzKClcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBsaXN0SWQgPSBhZGRCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGFcIilcclxuXHRcdFx0Y29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW0odGl0bGUsIG5ldyBEYXRlKCksIFwiaGlnaFwiLCBsaXN0SWQpXHJcblx0XHRcdFN0b3JlLmFkZFRvZG9JdGVtKGxpc3RJZCwgbmV3VG9kb0l0ZW0pXHJcblx0XHRcdERPTUNvbnRyb2xsZXIucmVuZGVyQWxsQXBwSXRlbXMoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBhZGRMaVJlbW92ZUxpc3RlbmVyKHJlbW92ZUJ0bikge1xyXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGxpc3RJZCA9IHJlbW92ZUJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuXHRcdFx0Y29uc3QgaXRlbUlkID0gcmVtb3ZlQnRuLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG5cdFx0XHRTdG9yZS5yZW1vdmVUb2RvSXRlbShsaXN0SWQsIGl0ZW1JZClcclxuXHRcdFx0RE9NQ29udHJvbGxlci5yZW5kZXJBbGxBcHBJdGVtcygpXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3VpZCB9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBub3Rlc0l0ZW0ge1xyXG5cdGNvbnN0cnVjdG9yKHRpdGxlID0gXCJOZXcgTm90ZVwiLCBjb250ZW50LCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG5cdFx0dGhpcy5pdGVtVHlwZSA9IFwibm90ZXNcIlxyXG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlXHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50XHJcblx0XHR0aGlzLmlkID0gZ3VpZCgpXHJcblxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuIiwiaW1wb3J0IHBsdXNJbWdJY29uIGZyb20gJy4uL3NyYy9pbWcvcGx1cy5zdmcnXHJcbmltcG9ydCBkZWxldGVJbWdJY29uIGZyb20gJy4uL3NyYy9pbWcvZGVsZXRlLW91dGxpbmUuc3ZnJ1xyXG5pbXBvcnQgeyBFdmVudHNDb250cm9sbGVyIH0gZnJvbSAnLi9ldmVudHNDb250cm9sbGVyJ1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRE9NQ29udHJvbGxlcntcclxuXHRzdGF0aWMgcmVuZGVyQWxsRWxlbWVudHMoKXtcclxuXHRcdERPTUNvbnRyb2xsZXIucmVuZGVyQWxsQXBwSXRlbXMoKVxyXG5cdFx0RE9NQ29udHJvbGxlci5yZW5kZXJBZGRJdGVtQnRucygpXHJcblx0fVxyXG5cdHN0YXRpYyByZW5kZXJDaGVja2xpc3QobGlzdE9iail7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGFpbmVyXCIpXHJcblx0XHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5cdFx0bGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGxpc3RPYmouaWQpXHJcblx0XHRsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpXHJcblx0XHRsaXN0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2xpc3RcIilcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQobGlzdClcclxuXHRcdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG5cdFx0bGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhcHAtaXRlbS10aXRsZVwiKVxyXG5cdFx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdE9iai50aXRsZVxyXG5cdFx0bGlzdC5hcHBlbmQobGlzdFRpdGxlKVxyXG5cdFx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxuXHRcdHVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3RPYmouaWQpXHJcblx0XHRsaXN0LmFwcGVuZCh1bClcclxuXHRcdERPTUNvbnRyb2xsZXIucmVuZGVyQWxsQ2hlY2tsaXN0SXRlbXMobGlzdE9iai5pdGVtcywgdWwpXHJcblx0XHRET01Db250cm9sbGVyLnJlbmRlckxpSW5wdXQobGlzdCwgbGlzdE9iailcclxuXHRcdEV2ZW50c0NvbnRyb2xsZXIuYWRkSXRlbVRpdGxlSW5wdXQobGlzdFRpdGxlKVxyXG5cdFx0XHJcblx0fVxyXG5cdHN0YXRpYyByZW5kZXJBbGxDaGVja2xpc3RJdGVtcyhpdGVtcywgdWwpe1xyXG5cdFx0aWYoaXRlbXMpe1xyXG5cdFx0XHRmb3IobGV0IGkgPSBpdGVtcy5sZW5ndGgtMTsgaT49MDsgaS0tKXtcclxuXHRcdFx0XHRET01Db250cm9sbGVyLnJlbmRlckNoZWNrbGlzdEl0ZW0oaXRlbXNbaV0sIHVsKVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcblx0c3RhdGljIHJlbmRlckNoZWNrbGlzdEl0ZW0gKGl0ZW0sIHVsKXtcclxuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcblx0XHR1bC5hcHBlbmQobGkpXHJcblx0XHRjb25zdCBsaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHRcdGxpVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5pZClcclxuXHRcdGxpVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlXHJcblx0XHRjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5cdFx0Y2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIlxyXG5cdFx0Y2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpXHJcblx0XHRjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpdGVtLmlkKVxyXG5cdFx0Y2hlY2tib3guY2hlY2tlZCA9IGl0ZW0uY2hlY2tlZFxyXG5cdFx0aWYoaXRlbS5jaGVja2VkKXtcclxuXHRcdFx0Y2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtY2hlY2tib3hcIilcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC1jaGVja2JveFwiKVxyXG5cdFx0fVxyXG5cdFx0RXZlbnRzQ29udHJvbGxlci5hZGRDaGVja2xpc3RJdGVtU3RhdHVzQ2hhbmdlTGlzdGVuZXIoY2hlY2tib3gpXHJcblx0XHRsaS5hcHBlbmQoY2hlY2tib3gpXHJcblx0XHRsaS5hcHBlbmQobGlUaXRsZSlcclxuXHRcdGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHRcdGxpLmFwcGVuZChkZWxldGVCdG4pXHJcblx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1saS1idG5cIilcclxuXHRcdGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHRcdGRlbGV0ZUltZy5zcmMgPSBkZWxldGVJbWdJY29uXHJcblx0XHRkZWxldGVCdG4uYXBwZW5kKGRlbGV0ZUltZylcclxuXHRcdEV2ZW50c0NvbnRyb2xsZXIuYWRkTGlSZW1vdmVMaXN0ZW5lcihkZWxldGVCdG4pXHJcblx0XHRFdmVudHNDb250cm9sbGVyLmNoYW5nZUxpSXRlbUxpc3RlbmVyKGxpKVxyXG5cclxuXHR9XHJcblx0c3RhdGljIHJlbmRlck5vdGVzSXRlbShub3Rlc09iail7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGFpbmVyXCIpXHJcblx0XHRjb25zdCBub3Rlc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblx0XHRET01Db250cm9sbGVyLnJlbmRlclJlbW92ZUl0ZW1CdG4obm90ZXNJdGVtKVxyXG5cclxuXHRcdG5vdGVzSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIG5vdGVzT2JqLmlkKVxyXG5cdFx0bm90ZXNJdGVtLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1pdGVtXCIpXHJcblx0XHRjb250YWluZXIuYXBwZW5kKG5vdGVzSXRlbSlcclxuXHRcdGNvbnN0IG5vdGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuXHRcdG5vdGVzVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcC1pdGVtLXRpdGxlXCIpXHJcblx0XHRub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gbm90ZXNPYmoudGl0bGVcclxuXHRcdG5vdGVzSXRlbS5hcHBlbmQobm90ZXNUaXRsZSlcclxuXHRcdGNvbnN0IG5vdGVzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxyXG5cdFx0bm90ZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1jb250ZW50XCIpXHJcblx0XHRub3Rlc0NvbnRlbnQudmFsdWUgPSBub3Rlc09iai5jb250ZW50IHx8IFwiXCJcclxuXHRcdEV2ZW50c0NvbnRyb2xsZXIuYWRkTm90ZXNDb250ZW50TGlzdGVuZXIobm90ZXNDb250ZW50KVxyXG5cdFx0bm90ZXNJdGVtLmFwcGVuZChub3Rlc0NvbnRlbnQpXHJcblx0XHRFdmVudHNDb250cm9sbGVyLmFkZEl0ZW1UaXRsZUlucHV0KG5vdGVzVGl0bGUpXHJcblx0fVxyXG5cdHN0YXRpYyByZW5kZXJJdGVtVGl0bGVJbnB1dCh0aXRsZUVsZW0sIHRpdGxlUGFyZW50LCBkZWZhdWx0VGV4dCA9IFwiXCIsIG5ld0l0ZW1SZXJlbmRlcil7XHJcblx0XHRjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcblx0XHR0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dFwiKVxyXG5cdFx0dGl0bGVFbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdHRpdGxlUGFyZW50LnByZXBlbmQodGl0bGVJbnB1dClcclxuXHRcdGlmKG5ld0l0ZW1SZXJlbmRlcil7XHJcblx0XHRjb25zdCBhbGxJTnB1dHMgPSB0aXRsZVBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gaW5wdXRcIik7XHJcblx0XHRhbGxJTnB1dHNbMV0uaGlkZGVuID0gdHJ1ZVxyXG5cdFx0dGl0bGVJbnB1dC5mb2N1cygpXHJcblx0XHR0aXRsZUlucHV0LnZhbHVlID0gZGVmYXVsdFRleHRcclxuXHRcdGNvbnN0IGl0ZW1JZCA9IHRpdGxlUGFyZW50LmdldEF0dHJpYnV0ZShcImRhdGFcIilcclxuXHRcdHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpPT57XHJcblx0XHRcdFN0b3JlLmNoYW5nZUFwcEl0ZW1UaXRsZShpdGVtSWQsIHRpdGxlSW5wdXQudmFsdWUpXHJcblx0XHR9KVxyXG5cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aXRsZUlucHV0XHJcblxyXG5cdH1cclxuXHRzdGF0aWMgcmVuZGVyTGlVcGRhdGVJbnB1dChsaSl7XHJcblx0XHRjb25zdCB1cGRhdGVMaUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcblx0XHR1cGRhdGVMaUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ1cGRhdGUtbGktaW5wdXRcIilcclxuXHRcdGxpLnJlcGxhY2VXaXRoKHVwZGF0ZUxpSW5wdXQpXHJcblx0XHR1cGRhdGVMaUlucHV0LnZhbHVlID0gbGkuaW5uZXJUZXh0XHJcblx0XHR1cGRhdGVMaUlucHV0LmZvY3VzKClcclxuXHRcdHJldHVybiB1cGRhdGVMaUlucHV0XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbmRlckFkZEl0ZW1CdG5zKCl7XHJcblx0XHRjb25zdCBhZGRJdGVtQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLW5ldy1pdGVtXCIpXHJcblx0XHRmb3IoY29uc3QgYnRuIG9mIGFkZEl0ZW1CdG5zKXtcclxuXHRcdFx0Y29uc3QgcGx1c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHRcdFx0cGx1c0ltZy5zcmMgPSBwbHVzSW1nSWNvblxyXG5cdFx0XHRFdmVudHNDb250cm9sbGVyLmFkZEl0ZW1MaXN0ZW5lcihidG4pXHJcblx0XHRcdGJ0bi5wcmVwZW5kKHBsdXNJbWcpXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKC45NSlcIlxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdGJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcclxuXHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdH0pXHJcblx0XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRzdGF0aWMgcmVuZGVyQWxsQXBwSXRlbXMoKXtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250YWluZXJcIilcclxuXHRcdGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcblx0XHRjb25zdCBJZExpc3QgPSBTdG9yZS5nZXRJZExpc3QoKVxyXG5cdFx0aWYoSWRMaXN0KXtcclxuXHRcdFx0Zm9yKGNvbnN0IGlkIG9mIElkTGlzdCl7XHJcblx0XHRcdFx0Y29uc3QgaXRlbSA9IFN0b3JlLmdldEFwcEl0ZW0oaWQpXHJcblx0XHRcdFx0aWYoaXRlbS5pdGVtVHlwZSA9PT0gXCJsaXN0XCIpe1xyXG5cdFx0XHRcdFx0RE9NQ29udHJvbGxlci5yZW5kZXJUb2RvTGlzdChpdGVtKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihpdGVtLml0ZW1UeXBlID09PSBcIm5vdGVzXCIpe1xyXG5cdFx0XHRcdERPTUNvbnRyb2xsZXIucmVuZGVyTm90ZXNJdGVtKGl0ZW0pXHJcblx0XHRcdH1cclxuXHRcdFx0XHRpZihpdGVtLml0ZW1UeXBlID09PSBcImNoZWNrbGlzdFwiKXtcclxuXHRcdFx0XHRcdERPTUNvbnRyb2xsZXIucmVuZGVyQ2hlY2tsaXN0KGl0ZW0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXRpYyByZW5kZXJUb2RvTGlzdChsaXN0T2JqKXtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250YWluZXJcIilcclxuXHRcdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblx0XHRsaXN0LnNldEF0dHJpYnV0ZShcImRhdGFcIiwgbGlzdE9iai5pZClcclxuXHRcdGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIilcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQobGlzdClcclxuXHRcdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG5cdFx0bGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhcHAtaXRlbS10aXRsZVwiKVxyXG5cdFx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdE9iai50aXRsZVxyXG5cdFx0bGlzdC5hcHBlbmQobGlzdFRpdGxlKVxyXG5cdFx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxuXHRcdHVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3RPYmouaWQpXHJcblx0XHRsaXN0LmFwcGVuZCh1bClcclxuXHRcdERPTUNvbnRyb2xsZXIucmVuZGVyQWxsVG9kb0l0ZW1zKGxpc3RPYmouaXRlbXMsIHVsKVxyXG5cdFx0RE9NQ29udHJvbGxlci5yZW5kZXJMaUlucHV0KGxpc3QsIGxpc3RPYmopXHJcblx0XHRFdmVudHNDb250cm9sbGVyLmFkZEl0ZW1UaXRsZUlucHV0KGxpc3RUaXRsZSlcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbmRlckFsbFRvZG9JdGVtcyhpdGVtcywgdWwpe1xyXG5cdFx0aWYoaXRlbXMpe1xyXG5cdFx0XHRmb3IobGV0IGkgPSBpdGVtcy5sZW5ndGgtMTsgaT49MDsgaS0tKXtcclxuXHRcdFx0XHRET01Db250cm9sbGVyLnJlbmRlclRvZG9JdGVtKGl0ZW1zW2ldLCB1bClcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyVG9kb0l0ZW0oaXRlbSwgdWwpe1xyXG5cdFx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuXHRcdHVsLmFwcGVuZChsaSlcclxuXHRcdGNvbnN0IGxpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cdFx0bGlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpdGVtLmlkKVxyXG5cdFx0bGlUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGVcdFx0XHJcblx0XHRsaS5hcHBlbmQobGlUaXRsZSlcclxuXHRcdGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHRcdGxpLmFwcGVuZChkZWxldGVCdG4pXHJcblx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1saS1idG5cIilcclxuXHRcdGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHRcdGRlbGV0ZUltZy5zcmMgPSBkZWxldGVJbWdJY29uXHJcblx0XHRkZWxldGVCdG4uYXBwZW5kKGRlbGV0ZUltZylcclxuXHRcdEV2ZW50c0NvbnRyb2xsZXIuYWRkTGlSZW1vdmVMaXN0ZW5lcihkZWxldGVCdG4pXHJcblx0XHRFdmVudHNDb250cm9sbGVyLmNoYW5nZUxpSXRlbUxpc3RlbmVyKGxpKVxyXG5cclxuXHR9XHJcblx0c3RhdGljIHJlbmRlckxpSW5wdXQobGlzdCwgbGlzdE9iail7XHJcblx0XHRjb25zdCBsaUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5cdFx0bGlJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGktaW5wdXQtY29udGFpbmVyXCIpXHJcblx0XHRsaXN0LmFwcGVuZChsaUlucHV0Q29udGFpbmVyKVxyXG5cdFx0RE9NQ29udHJvbGxlci5yZW5kZXJSZW1vdmVJdGVtQnRuKGxpc3QpXHJcblx0XHRjb25zdCBsaUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcblx0XHRsaUlucHV0LnNldEF0dHJpYnV0ZShcImRhdGFcIiwgbGlzdE9iai5pZClcclxuXHRcdGxpSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5ldy1saS1pbnB1dFwiKVxyXG5cdFx0bGlJbnB1dENvbnRhaW5lci5hcHBlbmQobGlJbnB1dClcclxuXHRcdGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHRcdGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWxpLWJ0blwiKVxyXG5cdFx0Y29uc3QgcGx1c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHRcdHBsdXNJbWcuc3JjID0gcGx1c0ltZ0ljb25cclxuXHRcdGFkZEJ0bi5hcHBlbmQocGx1c0ltZylcclxuXHRcdGxpSW5wdXRDb250YWluZXIuYXBwZW5kKGFkZEJ0bilcclxuXHRcdGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRwbHVzSW1nLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoLjgpXCJcclxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHBsdXNJbWcuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiXHJcblx0XHRcdH0sIDEwMClcclxuXHRcdH0pXHJcblx0XHRFdmVudHNDb250cm9sbGVyLmFkZExpSW5wdXRMaXN0ZW5lcihhZGRCdG4pXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyUmVtb3ZlSXRlbUJ0bihsaXN0KXtcclxuXHRcdGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHRcdGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWxpc3QtYnRuXCIpXHJcblx0XHRjb25zdCBkZWxCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG5cdFx0ZGVsQnRuSWNvbi5zcmMgPSBwbHVzSW1nSWNvblxyXG5cdFx0ZGVsQnRuLmFwcGVuZChkZWxCdG5JY29uKVxyXG5cdFx0bGlzdC5wcmVwZW5kKGRlbEJ0bilcclxuXHRcdEV2ZW50c0NvbnRyb2xsZXIuYWRkRGVsZXRlSXRlbUxpc3RlbmVyKGxpc3QsIGRlbEJ0bilcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgU3RvcmV7XHJcblx0c3RhdGljIHJlY29yZElkTGlzdChpZCl7XHJcblx0XHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkTGlzdFwiKSl7XHJcblx0XHRcdGNvbnN0IGlkTGlzdCA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRMaXN0XCIpKVxyXG5cdFx0XHRpZExpc3QucHVzaChpZClcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZExpc3RcIiwgSlNPTi5zdHJpbmdpZnkoaWRMaXN0KSlcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjb25zdCBpZExpc3QgPSBbXTtcclxuXHRcdFx0aWRMaXN0LnB1c2goaWQpXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGlkTGlzdCkpXHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXRpYyByZW1vdmVJZGZyb21JZExpc3QoaWQpe1xyXG5cdFx0Y29uc3QgaWRMaXN0ID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZExpc3RcIikpXHJcblx0XHRjb25zdCBuZXdJZExpc3QgPSBpZExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gaWQpXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkTGlzdFwiLCBKU09OLnN0cmluZ2lmeShuZXdJZExpc3QpKVxyXG5cdH1cclxuXHRzdGF0aWMgZ2V0SWRMaXN0KCl7XHJcblx0XHRjb25zdCBpZExpc3QgPSAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkTGlzdFwiKSlcclxuXHRcdHJldHVybiBpZExpc3RcclxuXHR9XHJcblx0c3RhdGljIGFkZEFwcEl0ZW0oaXRlbSl7XHJcblx0XHRpZighU3RvcmUuZ2V0QXBwSXRlbShpdGVtLmlkKSl7XHJcblx0XHRcdFN0b3JlLnJlY29yZElkTGlzdChpdGVtLmlkKVxyXG5cdFx0fVxyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG5cclxuXHR9XHJcblx0c3RhdGljIGdldEFwcEl0ZW0oaWQpe1xyXG5cdFx0Y29uc3QgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpKVxyXG5cdFx0cmV0dXJuIGl0ZW1cclxuXHR9XHJcblx0c3RhdGljIHJlbW92ZUxpc3QoaWQpe1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaWQpXHJcblx0XHRTdG9yZS5yZW1vdmVJZGZyb21JZExpc3QoaWQpXHJcblxyXG5cdH1cclxuXHRzdGF0aWMgY2hhbmdlQXBwSXRlbVRpdGxlKGlkLCBuZXdUaXRsZSl7XHJcblx0XHRjb25zdCBpdGVtID0gU3RvcmUuZ2V0QXBwSXRlbShpZClcclxuXHRcdGNvbnNvbGUubG9nKGl0ZW0pXHJcblx0XHRpdGVtLnRpdGxlID0gbmV3VGl0bGVcclxuXHRcdFN0b3JlLmFkZEFwcEl0ZW0oaXRlbSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRUb2RvSXRlbShpZCwgaXRlbSl7XHJcblx0XHRjb25zdCBsaXN0ID0gU3RvcmUuZ2V0QXBwSXRlbShpZClcclxuXHRcdGxpc3QuaXRlbXMucHVzaChpdGVtKVxyXG5cdFx0U3RvcmUuYWRkQXBwSXRlbShsaXN0KVxyXG5cdH1cclxuXHRzdGF0aWMgcmVtb3ZlVG9kb0l0ZW0obGlzdElkLCBpdGVtSWQpe1xyXG5cdFx0Y29uc3QgbGlzdCA9IFN0b3JlLmdldEFwcEl0ZW0obGlzdElkKVxyXG5cdFx0Y29uc3QgbmV3SXRlbXMgPSBsaXN0Lml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGl0ZW1JZClcclxuXHRcdGxpc3QuaXRlbXMgPSBuZXdJdGVtc1xyXG5cdFx0U3RvcmUuYWRkQXBwSXRlbShsaXN0KVxyXG5cdH1cclxuXHRzdGF0aWMgY2hhbmdlVG9kb0l0ZW0obGlzdElkLCBpdGVtSWQsIG5ld0l0ZW0pe1xyXG5cdFx0Y29uc3QgbGlzdCA9IFN0b3JlLmdldEFwcEl0ZW0obGlzdElkKVxyXG5cdFx0Y29uc3QgbmV3SXRlbXMgPSBsaXN0Lml0ZW1zLm1hcCgoZWxlbSkgPT4ge1xyXG5cdFx0XHRpZihlbGVtLmlkID09PSBpdGVtSWQpe1xyXG5cdFx0XHRcdHJldHVybiBuZXdJdGVtXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4gZWxlbVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0bGlzdC5pdGVtcyA9IG5ld0l0ZW1zXHJcblx0XHRTdG9yZS5hZGRBcHBJdGVtKGxpc3QpXHJcblx0fVxyXG5cdHN0YXRpYyBjaGFuZ2VOb3Rlc0NvbnRlbnQoaWQsIGNvbnRlbnQpe1xyXG5cdFx0Y29uc3QgaXRlbSA9IFN0b3JlLmdldEFwcEl0ZW0oaWQpXHJcblx0XHRpdGVtLmNvbnRlbnQgPSBjb250ZW50XHJcblx0XHRTdG9yZS5hZGRBcHBJdGVtKGl0ZW0pXHJcblx0fVxyXG5cdHN0YXRpYyBjaGFuZ2VDaGVja2xpc3RJdGVtU3RhdHVzKHBhcmVudGlkLCBpdGVtSWQpe1xyXG5cdFx0Y29uc3QgY2hlY2tsaXN0ID0gU3RvcmUuZ2V0QXBwSXRlbShwYXJlbnRpZClcclxuXHRcdGNvbnN0IG5ld0l0ZW1zID0gY2hlY2tsaXN0Lml0ZW1zLm1hcCgoZWxlbSkgPT4ge1xyXG5cdFx0XHRpZihlbGVtLmlkID09PSBpdGVtSWQpe1xyXG5cdFx0XHRcdGVsZW0uY2hlY2tlZCA9ICFlbGVtLmNoZWNrZWRcclxuXHRcdFx0XHRyZXR1cm4gZWxlbVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0cmV0dXJuIGVsZW1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdGNoZWNrbGlzdC5pdGVtcyA9IG5ld0l0ZW1zXHJcblx0XHRTdG9yZS5hZGRBcHBJdGVtKGNoZWNrbGlzdClcclxuXHJcblx0fVxyXG5cdFxyXG59IiwiaW1wb3J0IHsgZ3VpZCB9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XHJcblx0Y29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBsaXN0SWQpIHtcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZVxyXG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcblx0XHR0aGlzLmxpc3RJZCA9IGxpc3RJZFxyXG5cdFx0dGhpcy5pZCA9IGd1aWQoKVxyXG5cclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGd1aWQgfSBmcm9tIFwiLi91dGlsc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdCB7XHJcblx0Y29uc3RydWN0b3IodGl0bGUgPSBcIk5ldyBMaXN0XCIpIHtcclxuXHRcdHRoaXMuaXRlbVR5cGUgPSBcImxpc3RcIlxyXG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlXHJcblx0XHR0aGlzLmlkID0gZ3VpZCgpXHJcblx0XHR0aGlzLml0ZW1zID0gW11cclxuXHR9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBndWlkICgpIHtcclxuXHRsZXQgczQgPSAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG5cdFx0XHRcdFx0LnRvU3RyaW5nKDE2KVxyXG5cdFx0XHRcdFx0LnN1YnN0cmluZygxKTtcclxuXHR9XHJcblx0Ly9yZXR1cm4gaWQgb2YgZm9ybWF0ICdhYWFhYWFhYSctJ2FhYWEnLSdhYWFhJy0nYWFhYSctJ2FhYWFhYWFhYWFhYSdcclxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnLi90b2RvTGlzdCdcclxuaW1wb3J0IHtTdG9yZX0gZnJvbSAnLi9zdG9yZSdcclxuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tICcuL3RvZG9JdGVtJztcclxuaW1wb3J0IHsgRE9NQ29udHJvbGxlciB9IGZyb20gJy4vcmVuZGVyRE9NJztcclxuaW1wb3J0IHsgbm90ZXNJdGVtIH0gZnJvbSAnLi9ub3Rlc0l0ZW0nO1xyXG5cclxuRE9NQ29udHJvbGxlci5yZW5kZXJBbGxFbGVtZW50cygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9