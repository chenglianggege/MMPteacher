require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(317);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6ebe5ed2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(320);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(318)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ebe5ed2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6ebe5ed2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/personalSetting/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ebe5ed2", Component.options)
  } else {
    hotAPI.reload("data-v-6ebe5ed2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 318:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixin_mainMixin_js__ = __webpack_require__(3);


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





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixin_mainMixin_js__["a" /* default */]],
  components: {},
  watch: {},
  methods: {
    toEditName: function toEditName() {
      wx.navigateTo({ url: '/pages/editTeacherName/main' });
    },
    toEditPhone: function toEditPhone() {
      wx.navigateTo({ url: '/pages/editTeacherPhone/main' });
    },
    toEditPass: function toEditPass() {
      wx.navigateTo({ url: '/pages/editTeacherPassword/main' });
    },
    toLogout: function toLogout() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var ok;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '确认退出',
                  content: '是否确认退出当前账号?',
                  showCancel: true,
                  confirmColor: '#009efa'
                });

              case 2:
                ok = _context.sent;

                if (ok.confirm) {
                  wx.removeStorageSync('token', '');
                  wx.reLaunch({ url: '/pages/index/main' });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },

  onLoad: function onLoad() {},
  onUnload: function onUnload() {}
});

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "menu-list"
  }, [_c('div', {
    staticClass: "menu-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toEditName
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-bianji ml10"
  }), _vm._v(" "), _c('text', [_vm._v("修改姓名")]), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "menu-item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toEditPhone
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-mobile ml10"
  }), _vm._v(" "), _c('text', [_vm._v("修改手机号码")]), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "menu-item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.toEditPass
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-lock ml10"
  }), _vm._v(" "), _c('text', [_vm._v("重置密码")]), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "menu-item mt10",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toLogout
    }
  }, [_c('text', [_vm._v("退出登录")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ebe5ed2", esExports)
  }
}

/***/ })

},[316]);
//# sourceMappingURL=main.js.map