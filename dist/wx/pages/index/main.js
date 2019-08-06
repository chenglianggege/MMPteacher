require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(215);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ead5e40e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(218);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ead5e40e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ead5e40e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ead5e40e", Component.options)
  } else {
    hotAPI.reload("data-v-ead5e40e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      formData: {
        phone: '',
        password: '',
        role: 2,
        device: 'WXAPP'
      }
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__["a" /* default */]],
  components: {},

  methods: {
    toPasswd: function toPasswd() {
      wx.navigateTo({ url: '/pages/forget/main' });
    },
    toLogin: function toLogin() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var loginRet, regx, token;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loginRet = null;
                regx = /^1\d{10}$/;

                if (regx.test(_this.formData.phone)) {
                  _context.next = 5;
                  break;
                }

                wx.showToast({
                  title: '请输入正确的11位手机号码！',
                  icon: 'none'
                });
                return _context.abrupt('return');

              case 5:
                if (_this.formData.password) {
                  _context.next = 8;
                  break;
                }

                wx.showToast({
                  title: '请输入密码！',
                  icon: 'none'
                });
                return _context.abrupt('return');

              case 8:
                _context.prev = 8;

                wx.showLoading({
                  title: '登录中...',
                  mask: true
                });
                _context.next = 12;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/account/login',
                  data: _this.formData,
                  method: 'POST'
                });

              case 12:
                loginRet = _context.sent;

                wx.hideLoading();

                if (!(loginRet.data.retCode !== 0)) {
                  _context.next = 17;
                  break;
                }

                wx.showToast({ title: loginRet.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 17:
                token = loginRet.data.retData.token;

                wx.setStorageSync('token', token);
                wx.setStorageSync('login', { phone: _this.formData.phone, password: _this.formData.password });
                _this.globalData.token = token;
                _this.getUserInfo(token);
                _context.next = 29;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context['catch'](8);

                console.log('e', _context.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 29:
                _context.prev = 29;
                return _context.finish(29);

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[8, 24, 29, 31]]);
      }))();
    },
    getUserInfo: function getUserInfo(token) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var userInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                wx.showLoading({ title: '获取老师用户信息...', mask: true });

                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/user/info',
                  data: { token: token },
                  method: 'GET'
                });

              case 4:
                userInfo = _context2.sent;

                wx.hideLoading();

                if (!(userInfo.data.retCode !== 0)) {
                  _context2.next = 9;
                  break;
                }

                wx.showToast({ title: userInfo.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 9:
                wx.setStorageSync('userInfo', userInfo.data.retData);
                _this2.globalData.userInfo = userInfo.data.retData;
                console.log('userInfo', userInfo.data.retData);
                wx.reLaunch({ url: '/pages/home/main' });
                _context2.next = 20;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2['catch'](0);

                console.log('e', _context2.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 20:
                _context2.prev = 20;
                return _context2.finish(20);

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 15, 20, 22]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    var token = wx.getStorageSync('token');
    if (token) {
      this.getUserInfo(token);
    }
    var login = wx.getStorageSync('login');
    if (login) {
      this.formData.phone = login.phone;
      this.formData.password = login.password;
    }
    var kick = this.$root.$mp.query.hasOwnProperty('kick') ? this.$root.$mp.query.kick : null;
    if (kick) {
      wx.showToast({ title: '您的账号刚才在另一设备登录，若非本人操作，建议及时修改密码！', icon: 'none' });
    }
  }
});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": "./../../images/logo.jpg",
      "background-size": "cover"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "logo-title c-gray"
  }, [_vm._v("为老师节省时间的小程序")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "width": "250px"
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
      "value": _vm.formData.phone,
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
      "value": _vm.formData.password,
      "maxlength": "20",
      "type": "password",
      "placeholder-class": "c-gray",
      "placeholder": "请输入登录密码",
      "eventid": '1'
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
      "eventid": '2'
    },
    on: {
      "click": _vm.toLogin
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-icnext",
    staticStyle: {
      "font-size": "40px"
    }
  })], 1)], 1), _vm._v(" "), _c('text', {
    staticClass: "c-primary",
    staticStyle: {
      "font-size": "14px",
      "margin-top": "30px"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toPasswd
    }
  }, [_vm._v("忘记密码")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ead5e40e", esExports)
  }
}

/***/ })

},[214]);
//# sourceMappingURL=main.js.map