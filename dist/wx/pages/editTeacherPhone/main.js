require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(195);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28c64965_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(198);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(196)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28c64965"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28c64965_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/editTeacherPhone/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28c64965", Component.options)
  } else {
    hotAPI.reload("data-v-28c64965", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
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
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      teacherPhone: '',
      phoneCode: '',
      userInfo: '',
      passPhone: '',
      sendTime: 0
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__["a" /* default */]],
  computed: {},
  components: {},
  watch: {},
  methods: {
    submitEdit: function submitEdit() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var regx, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                regx = /^1\d{10}$/;

                if (regx.test(_this2.teacherPhone)) {
                  _context.next = 4;
                  break;
                }

                wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none' });
                return _context.abrupt('return');

              case 4:
                if (_this2.phoneCode) {
                  _context.next = 7;
                  break;
                }

                wx.showToast({ title: '请输入手机短信验证码！', icon: 'none' });
                return _context.abrupt('return');

              case 7:
                if (!(_this2.teacherPhone == _this2.userInfo.user_phone)) {
                  _context.next = 10;
                  break;
                }

                wx.showToast({ title: '新旧手机号码不能相同！', icon: 'none' });
                return _context.abrupt('return');

              case 10:
                _context.prev = 10;

                wx.showLoading({ title: '提交中...', mask: true });
                _context.next = 14;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/user/info/save-phone?token=' + _this2.globalData.token,
                  data: { phone: _this2.teacherPhone, phone_code: _this2.phoneCode },
                  method: 'POST'
                });

              case 14:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 19;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 19:
                _context.next = 21;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '修改手机号码',
                  content: '手机号码修改成功，下次登录请用新手机号码登录！',
                  showCancel: false,
                  confirmText: '确定',
                  confirmColor: '#409eff'
                });

              case 21:
                _this2.userInfo.user_phone = _this2.teacherPhone;
                _this2.globalData.userInfo = _this2.userInfo;
                wx.navigateBack({ delta: 1 });

                _context.next = 31;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context['catch'](10);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                return _context.abrupt('return');

              case 31:
                _context.prev = 31;
                return _context.finish(31);

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[10, 26, 31, 33]]);
      }))();
    },
    sendCode: function sendCode() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var regx, ret, _this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.sendTime > 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                ;
                regx = /^1\d{10}$/;

                if (regx.test(_this3.teacherPhone)) {
                  _context2.next = 7;
                  break;
                }

                wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none' });
                return _context2.abrupt('return');

              case 7:
                if (!(_this3.teacherPhone == _this3.userInfo.user_phone)) {
                  _context2.next = 10;
                  break;
                }

                wx.showToast({ title: '新旧手机号码不能相同！', icon: 'none' });
                return _context2.abrupt('return');

              case 10:
                _context2.prev = 10;

                wx.showLoading({ title: '验证码发送中...', mask: true });
                _context2.next = 14;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this3.globalData.apiBaseUrl + '/account/login/send-code?token=' + _this3.globalData.token,
                  data: { phone: _this3.teacherPhone },
                  method: 'POST'
                });

              case 14:
                ret = _context2.sent;

                wx.hideLoading();
                wx.showToast({ title: ret.data.retMsg, icon: 'none' });

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt('return');

              case 19:
                _context2.next = 26;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2['catch'](10);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                return _context2.abrupt('return');

              case 26:
                _context2.prev = 26;
                return _context2.finish(26);

              case 28:
                _this = _this3;

                _this.sendTime = 60;
                _this3.interval = setInterval(function () {
                  console.log('interval');
                  if (_this.sendTime > 0) {
                    _this.sendTime--;
                  } else {
                    clearInterval(this.interval);
                  }
                }, 1000);

              case 31:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[10, 21, 26, 28]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    this.userInfo = this.globalData.userInfo;
    var phone = this.userInfo.user_phone;
    this.passPhone = phone.substr(0, 3) + '****' + phone.substr(-4);
  },
  onUnload: function onUnload() {
    this.userInfo = null;
    this.teacherPhone = '';
    this.passPhone = '';
    this.phoneCode = '';
    this.sendTime = 0;
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "phone-num"
  }, [_c('icon', {
    staticClass: "iconfont icon-mobile"
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "margin-left": "10px",
      "font-size": "16px"
    }
  }, [_vm._v(_vm._s(_vm.passPhone) + "（原号码）")])], 1), _vm._v(" "), _c('div', {
    staticClass: "phone-num"
  }, [_c('icon', {
    staticClass: "iconfont icon-mobile"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.teacherPhone),
      expression: "teacherPhone"
    }],
    attrs: {
      "type": "number",
      "maxlength": "11",
      "value": _vm.teacherPhone,
      "placeholder": "请输入新手机号码",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.teacherPhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.teacherPhone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "phone-num"
  }, [_c('icon', {
    staticClass: "iconfont icon-safe"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phoneCode),
      expression: "phoneCode"
    }],
    attrs: {
      "type": "number",
      "maxlength": "4",
      "value": _vm.phoneCode,
      "placeholder": "请输入4位验证码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.phoneCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phoneCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "weui-btn plain sent-code",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.sendCode
    }
  }, [_vm._v(_vm._s(_vm.sendTime > 0 ? _vm.sendTime + '秒后重发' : '发送验证码'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex-center mt40"
  }, [_c('div', {
    staticClass: "to-publish",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.submitEdit
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-icnext"
  })], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28c64965", esExports)
  }
}

/***/ })

},[194]);
//# sourceMappingURL=main.js.map