(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["dialogs"] = factory(require("vue"));
	else
		root["dialogs"] = factory(root["Vue"]);
})(this, (function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dialogs_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ffea4e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dialogs_vue__ = __webpack_require__(18);
function injectStyle (ssrContext) {
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dialogs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ffea4e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dialogs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogs_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogsInstall__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "install", (function() { return __WEBPACK_IMPORTED_MODULE_1__dialogsInstall__["a"]; }));
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogs", (function() { return __WEBPACK_IMPORTED_MODULE_0__dialogs_vue__["a"]; }));



/* harmony default export */ __webpack_exports__["default"] = ({
    Dialogs: __WEBPACK_IMPORTED_MODULE_0__dialogs_vue__["a" /* default */],
    install: __WEBPACK_IMPORTED_MODULE_1__dialogsInstall__["a" /* default */]
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

// Vue.component('mb-ripple', ripple)
// import Component from 'vue-class-component'
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    name: 'mb-dialogs',
    data: function () {
        return {
            visiable: true,
            title: '提示',
            content: '内容文字',
            confirm: '確定',
            cancel: '取消',
            maskClickToHide: false,
            callback: null,
            classObj: null,
            hideCancel: true
        };
    },
    methods: {
        // methods
        maskClick: function () {
            this.maskClickToHide && this.close();
        },
        show: function () {
            this.visiable = true;
            this.callback && this.callback('show');
        },
        close: function () {
            this.visiable = false;
            this.callback && this.callback('close');
        },
        onclick: function (action) {
            this.callback && this.callback(action);
        }
    }
}));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"mb-dialogs-ani"}},[(_vm.visiable)?_c('div',{staticClass:"mb-dialogs-container"},[_c('div',{staticClass:"mb-dialogs-mask",on:{"click":_vm.maskClick}}),_vm._v(" "),_c('div',{staticClass:"mb-center mb-dialogs"},[_c('div',{staticClass:"mb-dialogs-title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"mb-dialogs-content"},[_vm._v("\n        "+_vm._s(_vm.content)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"mb-dialogs-bottom"},[(!_vm.hideCancel)?_c('mb-ripple',{staticClass:"mb-dialogs-button",on:{"click":function($event){_vm.onclick('cancel')}}},[_vm._v(_vm._s(_vm.cancel))]):_vm._e(),_vm._v(" "),_c('mb-ripple',{staticClass:"mb-dialogs-button",on:{"click":function($event){_vm.onclick('confirm')}}},[_vm._v(_vm._s(_vm.confirm))])],1)])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 19 */
/***/ ((function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_vue__ = __webpack_require__(7);


// @implement
// instance
var defaultOptions = {
    title: '提示',
    confirm: '確定',
    cancel: '取消',
    callback: null,
    slot: null,
    hideCancel: true
};
var getDefault = function () {
    var options = {};
    for (var prop in defaultOptions) {
        options[prop] = defaultOptions[prop];
    }
    return options;
};
var merge = function (source) {
    var target = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        target[_i - 1] = arguments[_i];
    }
    for (var i = 1; i < target.length; i++) {
        var mergeObj = target[i];
        for (var prop in mergeObj) {
            source[prop] = mergeObj[prop];
        }
    }
    return source;
};
var showingStack = [];
var promiseStack = [];
var setDialogsOptions = function (dialog, options) {
    var mergeOption = defaultOptions;
    if (typeof options === 'object') {
        mergeOption = merge(getDefault(), options);
    }
    for (var opt in mergeOption) {
        if (opt !== 'callback') {
            dialog[opt] = mergeOption[opt];
        }
    }
    dialog.callback = function (action) {
        if (action === 'close') {
            setTimeout((function () {
                document.body.removeChild(dialog.$el);
            }), 300);
        }
        else if (action === 'cancel' || action === 'confirm') {
            var popDialogs = void 0;
            var popPromise = void 0;
            for (var i = 0; i < showingStack.length; i++) {
                popDialogs = showingStack.splice(i, 1)[0];
                popDialogs && popDialogs.close();
                if (typeof Promise !== 'undefined') {
                    popPromise = promiseStack.splice(i, 1)[0];
                    popPromise.resolve(action);
                }
                break;
            }
        }
        if (typeof mergeOption.callback === 'function') {
            mergeOption.callback(action);
        }
    };
};
var install = function (vue, options) {
    var $mbDialogs = {
        show: function (options) {
            var dialog = new __WEBPACK_IMPORTED_MODULE_1__dialogs_vue__["a" /* default */]({
                el: document.createElement('div')
            });
            document.body.appendChild(dialog.$el);
            setDialogsOptions(dialog, options);
            showingStack.push(dialog);
            if (typeof Promise !== 'undefined') {
                return new Promise(function (resolve, reject) {
                    promiseStack.push({
                        resolve: resolve,
                        reject: reject
                    });
                });
            }
        },
        close: function () {
            if (showingStack.length >= 1) {
                var dialog = showingStack.pop();
                dialog.close();
                if (typeof Promise !== 'undefined') {
                    var promise = promiseStack.pop();
                    promise.resolve('close');
                }
            }
        },
        setDefault: function (options) {
            for (var opt in options) {
                if (Object.hasOwnProperty.call(options, opt)) {
                    defaultOptions[opt] = options[opt];
                }
            }
        }
    };
    if (!__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$mbDialogs) {
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$mbDialogs = $mbDialogs;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (install);


/***/ }))
/******/ ]);
}));