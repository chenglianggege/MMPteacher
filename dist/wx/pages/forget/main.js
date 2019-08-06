require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(200);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_797f8c88_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(203);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-797f8c88"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_797f8c88_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/forget/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-797f8c88", Component.options)
  } else {
    hotAPI.reload("data-v-797f8c88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__ = __webpack_require__(3);


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
    return {
      formData: {
        phone: '',
        password: '',
        phone_code: '',
        role: 2
      },
      sendTime: 0
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__["a" /* default */]],
  components: {},

  methods: {
    sendCode: function sendCode() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var regx, ret, _this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.sendTime > 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                ;
                regx = /^1\d{10}$/;

                if (regx.test(_this2.formData.phone)) {
                  _context.next = 7;
                  break;
                }

                wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none' });
                return _context.abrupt('return');

              case 7:
                _context.prev = 7;

                wx.showLoading({ title: '验证码发送中...', mask: true });
                _context.next = 11;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/account/login/send-code',
                  data: _this2.formData,
                  method: 'POST'
                });

              case 11:
                ret = _context.sent;

                wx.hideLoading();
                wx.showToast({ title: ret.data.retMsg, icon: 'none' });

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt('return');

              case 16:
                _context.next = 23;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context['catch'](7);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                return _context.abrupt('return');

              case 23:
                _context.prev = 23;
                return _context.finish(23);

              case 25:
                _this = _this2;

                _this.sendTime = 60;
                _this2.interval = setInterval(function () {
                  console.log('interval');
                  if (_this.sendTime > 0) {
                    _this.sendTime--;
                  } else {
                    clearInterval(this.interval);
                  }
                }, 1000);

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[7, 18, 23, 25]]);
      }))();
    },
    findPasswd: function findPasswd() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var regx, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                regx = /^1\d{10}$/;

                if (regx.test(_this3.formData.phone)) {
                  _context2.next = 4;
                  break;
                }

                wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none' });
                return _context2.abrupt('return');

              case 4:
                if (_this3.formData.phone_code) {
                  _context2.next = 7;
                  break;
                }

                wx.showToast({ title: '请输入手机短信验证码！', icon: 'none' });
                return _context2.abrupt('return');

              case 7:
                if (_this3.formData.password) {
                  _context2.next = 10;
                  break;
                }

                wx.showToast({ title: '请输入密码！', icon: 'none' });
                return _context2.abrupt('return');

              case 10:
                _context2.prev = 10;

                wx.showLoading({
                  title: '提交中...',
                  mask: true
                });
                _context2.next = 14;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this3.globalData.apiBaseUrl + '/account/find',
                  data: _this3.formData,
                  method: 'POST'
                });

              case 14:
                ret = _context2.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 19;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 19:
                _context2.next = 21;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '重置密码',
                  content: '密码已重置，请用新密码登录！',
                  showCancel: false,
                  confirmText: '确定',
                  confirmColor: '#409eff'
                });

              case 21:
                wx.navigateBack();
                _context2.next = 29;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2['catch'](10);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                return _context2.abrupt('return');

              case 29:
                _context2.prev = 29;
                return _context2.finish(29);

              case 31:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[10, 24, 29, 31]]);
      }))();
    }
  },
  onUnload: function onUnload() {
    this.sendTime = 0;
    clearInterval(this.interval);
    this.formData = {
      phone: '',
      password: '',
      phone_code: '',
      role: 2
    };
  },
  created: function created() {
    this.userInfo = this.globalData.userInfo;
  }
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticStyle: {
      "margin-top": "20px",
      "width": "280px"
    }
  }, [_c('div', {
    staticClass: "input-phone"
  }, [_c('icon', {
    staticClass: "iconfont icon-mobile c-gray",
    staticStyle: {
      "font-size": "25px"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.phone),
      expression: "formData.phone"
    }],
    attrs: {
      "maxlength": "11",
      "type": "number",
      "placeholder-class": "c-gray",
      "placeholder": "请输入手机号码",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.formData.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.phone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "input-phone"
  }, [_c('icon', {
    staticClass: "iconfont icon-safe c-gray",
    staticStyle: {
      "font-size": "25px"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.phone_code),
      expression: "formData.phone_code"
    }],
    staticClass: "phone-code",
    attrs: {
      "maxlength": "4",
      "type": "number",
      "placeholder-class": "c-gray",
      "placeholder": "请输入验证码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.formData.phone_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.phone_code = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "weui-btn btn-send",
    attrs: {
      "plain": "",
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.sendCode
    }
  }, [_vm._v(_vm._s(_vm.sendTime > 0 ? _vm.sendTime + '秒后重发' : '发送验证码'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "input-phone"
  }, [_c('icon', {
    staticClass: "iconfont icon-lock c-gray",
    staticStyle: {
      "font-size": "25px"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.password),
      expression: "formData.password"
    }],
    attrs: {
      "type": "password",
      "placeholder-class": "c-gray",
      "placeholder": "请输入新密码",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.formData.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.password = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "weui-btn btn-login",
    attrs: {
      "type": "primary",
      "eventid": '4'
    },
    on: {
      "tap": _vm.findPasswd
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-icnext",
    staticStyle: {
      "font-size": "40px"
    }
  })], 1)], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-797f8c88", esExports)
  }
}

/***/ })

},[199]);
//# sourceMappingURL=main.js.map