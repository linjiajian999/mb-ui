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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", (function() { return install; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ripple_vue__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", (function() { return __WEBPACK_IMPORTED_MODULE_0__ripple_vue__["a"]; }));

var install = function (vue, opt) {
    vue.component('mb-ripple', __WEBPACK_IMPORTED_MODULE_0__ripple_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = ({
    Ripple: __WEBPACK_IMPORTED_MODULE_0__ripple_vue__["a" /* default */],
    install: install
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ripple_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52205a09_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ripple_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(4)
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
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ripple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52205a09_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ripple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    name: 'mb-ripple',
    props: {
        color: {
            type: String,
            default: '#000000'
        },
        position: {
            type: String,
            default: 'auto'
        },
        scale: {
            type: Number,
            default: 0
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            translateX: 0,
            translateY: 0,
            isTouch: false,
            isTouchMoment: false,
            rippleW: 50
        };
    },
    computed: {
        translate: function () {
            return "translate(-50%, -50%)\n        translate(" + this.translateX + "px, " + this.translateY + "px)\n        " + (this.isTouchMoment ? 'scale(0.0001, 0.0001)' : '');
        }
    },
    methods: {
        click: function (evt) {
            !this.disable && this.$emit('click', evt);
        },
        onMouseover: function (evt) {
            this.$emit('mouseover', evt);
        },
        onMousedown: function (evt) {
            var _this = this;
            if (this.disable)
                return;
            this.setMaskWidth(evt.offsetX, evt.offsetY);
            this.isTouch = true;
            this.isTouchMoment = true;
            setTimeout((function (_) {
                _this.isTouchMoment = false;
            }), 20);
            this.$emit('mousedown', evt);
        },
        onMouseup: function (evt) {
            var _this = this;
            if (this.disable)
                return;
            setTimeout((function (_) {
                _this.isTouch = false;
            }), 20);
            this.$emit('mouseup', evt);
        },
        setMaskWidth: function (x, y) {
            var w = this.$el.offsetWidth;
            var h = this.$el.offsetHeight;
            var rx;
            var ry;
            var r;
            if (this.position === 'center') {
                rx = w / 2;
                ry = h / 2;
                this.translateX = rx;
                this.translateY = ry;
                if (this.scale > 0) {
                    r = Math.sqrt(rx * rx + ry * ry) * this.scale;
                }
                else {
                    r = Math.sqrt(rx * rx + ry * ry);
                }
            }
            else {
                rx = x > w / 2 ? x : w - x;
                ry = y > h / 2 ? h : h - y;
                this.translateX = x;
                this.translateY = y;
                r = Math.sqrt(rx * rx + ry * ry);
            }
            this.rippleW = r * 2;
        }
    }
}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['mb mb-ripple', _vm.disable ? 'disable' : ''],style:({
    overflow: _vm.position === 'center' ? 'unset' : 'hidden'
  }),on:{"click":function($event){_vm.click($event)},"mouseover":_vm.onMouseover,"mousedown":_vm.onMousedown,"mouseout":_vm.onMouseup,"mouseup":_vm.onMouseup}},[_vm._t("default"),_vm._v(" "),_c('span',{staticClass:"mb-ripple-container"},[_c('span',{class:['mb-ripple-content', {
        visible: _vm.isTouch,
        isAnimating: !_vm.isTouchMoment
      }],style:({
        transform: _vm.translate,
        width: _vm.rippleW + 'px',
        height: _vm.rippleW + 'px',
        backgroundColor: _vm.color
      })})])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dialogs_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ffea4e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dialogs_vue__ = __webpack_require__(20);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogsInstall__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_class_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_class_component__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('mb-ripple', __WEBPACK_IMPORTED_MODULE_1__ripple__["default"]);

var MbDialogs = /** @class */ (function (_super) {
    __extends(MbDialogs, _super);
    function MbDialogs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visiable = true;
        _this.title = '提示';
        _this.content = '内容文字';
        _this.confirm = '確定';
        _this.cancel = '取消';
        _this.maskClickToHide = false;
        _this.callback = null;
        _this.classObj = null;
        _this.hideCancel = true;
        return _this;
    }
    // methods
    MbDialogs.prototype.maskClick = function () {
        this.maskClickToHide && this.close();
    };
    MbDialogs.prototype.show = function () {
        this.visiable = true;
        this.callback && this.callback('show');
    };
    MbDialogs.prototype.close = function () {
        this.visiable = false;
        this.callback && this.callback('close');
    };
    MbDialogs.prototype.onclick = function (action) {
        this.callback && this.callback(action);
    };
    MbDialogs = __decorate([
        __WEBPACK_IMPORTED_MODULE_2_vue_class_component___default.a
    ], MbDialogs);
    return MbDialogs;
}(__WEBPACK_IMPORTED_MODULE_0_vue___default.a));
/* harmony default export */ __webpack_exports__["a"] = (MbDialogs);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-class-component v6.0.0
  * (c) 2015-2017 Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(1));

function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push((function (options) { return factory(options, key, index); }));
    };
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    Component.prototype._init = function () {
        var _this = this;
        var keys = Object.getOwnPropertyNames(vm);
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach((function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; }
                });
            }
        }));
    };
    var data = new Component();
    var plainData = {};
    Object.keys(data).forEach((function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    }));
    if (process.env.NODE_ENV !== 'production') {
        if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured'
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach((function (key) {
        if (key === 'constructor') {
            return;
        }
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    }));
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach((function (fn) { return fn(options); }));
    }
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    return Super.extend(options);
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports['default'] = Component$1;
exports.createDecorator = createDecorator;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"mb-dialogs-ani"}},[(_vm.visiable)?_c('div',{staticClass:"mb-dialogs-container"},[_c('div',{staticClass:"mb-dialogs-mask",on:{"click":_vm.maskClick}}),_vm._v(" "),_c('div',{staticClass:"mb-center mb-dialogs"},[_c('div',{staticClass:"mb-dialogs-title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"mb-dialogs-content"},[_vm._v("\n        "+_vm._s(_vm.content)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"mb-dialogs-bottom"},[(!_vm.hideCancel)?_c('mb-ripple',{staticClass:"mb-dialogs-button",on:{"click":function($event){_vm.onclick('cancel')}}},[_vm._v(_vm._s(_vm.cancel))]):_vm._e(),_vm._v(" "),_c('mb-ripple',{staticClass:"mb-dialogs-button",on:{"click":function($event){_vm.onclick('confirm')}}},[_vm._v(_vm._s(_vm.confirm))])],1)])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 21 */
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