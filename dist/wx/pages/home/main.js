require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(205);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fff719a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(208);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(206)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fff719a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fff719a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fff719a4", Component.options)
  } else {
    hotAPI.reload("data-v-fff719a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
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
      userInfo: null,
      STATIC_URL: '',
      randkey: ''
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__["a" /* default */]],
  components: {},

  methods: {
    logOut: function logOut() {
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
                  wx.redirectTo({ url: '/pages/index/main' });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    toPublish: function toPublish() {
      wx.navigateTo({ url: '/pages/publish/main' });
    },
    toHomework: function toHomework() {
      wx.navigateTo({ url: '/pages/checkHomework/main' });
    },
    toClassList: function toClassList() {
      wx.navigateTo({ url: '/pages/classList/main' });
    },
    toSetting: function toSetting() {
      wx.navigateTo({ url: '/pages/personalSetting/main' });
    },
    toClassAnalysis: function toClassAnalysis() {
      wx.navigateTo({ url: '/pages/classAnalysis/main' });
    },
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var token, userInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = _this2.globalData.token;

                if (token) {
                  _context2.next = 4;
                  break;
                }

                wx.reLaunch({ url: '/pages/index/main' });
                return _context2.abrupt('return');

              case 4:
                _context2.prev = 4;

                wx.showLoading({ title: '获取老师用户信息...', mask: true });
                _context2.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/user/info',
                  data: { token: token },
                  method: 'GET'
                });

              case 8:
                userInfo = _context2.sent;

                wx.hideLoading();

                if (!(userInfo.data.retCode !== 0)) {
                  _context2.next = 14;
                  break;
                }

                wx.showToast({ title: userInfo.data.retMsg, icon: 'none' });
                wx.reLaunch({ url: '/pages/index/main' });
                return _context2.abrupt('return');

              case 14:
                wx.setStorageSync('userInfo', userInfo.data.retData);
                _this2.globalData.userInfo = userInfo.data.retData;
                _this2.userInfo = userInfo.data.retData;
                _context2.next = 24;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](4);

                console.log('e', _context2.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 24:
                _context2.prev = 24;
                return _context2.finish(24);

              case 26:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[4, 19, 24, 26]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    this.getUserInfo();
    this.randkey = Math.random();
    this.STATIC_URL = this.globalData.staticBaseUrl;
  },
  onUnload: function onUnload() {
    this.userInfo = null;
  },
  onShareAppMessage: function onShareAppMessage() {
    return this.globalData.shareData;
  }
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.userInfo) ? _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": _vm.STATIC_URL + '/assets/image/banner_twxapp1.2.jpg?key=' + _vm.randkey
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "teacher"
  }, [(_vm.userInfo.user_avatar) ? _c('img', {
    staticClass: "teacher-avatar",
    attrs: {
      "src": _vm.userInfo.user_avatar + '?x-oss-process=image/resize,h_100'
    }
  }) : _c('img', {
    staticClass: "teacher-avatar",
    attrs: {
      "src": "./../../images/touixang.jpg"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "teacher-info"
  }, [_c('text', {
    staticClass: "teacher-name"
  }, [_vm._v(_vm._s(_vm.userInfo.user_name) + " 老师")]), _vm._v(" "), _c('text', {
    staticClass: "teacher-school c-gray"
  }, [_vm._v(_vm._s(_vm.userInfo.school_name))])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-logout",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toSetting
    }
  }, [_c('img', {
    staticClass: "logout",
    attrs: {
      "src": "./../../images/shezhi.png"
    }
  }), _vm._v(" "), _c('text', [_vm._v("设置")])])]), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('div', {
    staticClass: "btn-main mt10",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toPublish
    }
  }, [_c('img', {
    staticClass: "btn-img",
    attrs: {
      "src": "./../../images/buzhi.png"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-main mt10",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.toHomework
    }
  }, [_c('img', {
    staticClass: "btn-img",
    attrs: {
      "src": "./../../images/jiancha.png"
    }
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-main mt10",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toClassAnalysis
    }
  }, [_c('img', {
    staticClass: "btn-img",
    attrs: {
      "src": "./../../images/xueqing.png"
    }
  }), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-main mt10",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.toClassList
    }
  }, [_c('img', {
    staticClass: "btn-img",
    attrs: {
      "src": "./../../images/banji.png"
    }
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-more"
  })], 1)])])])]) : _vm._e()
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-title"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("布置作业")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("自由选题、在线发布作业与练习")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-title"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("检查作业")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("成绩概况、分数统计、作答详情")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-title"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("学情分析")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("班级增改与学生信息查询、变更")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-title"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("班级管理")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("班级增改与学生信息查询、变更")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fff719a4", esExports)
  }
}

/***/ })

},[204]);
//# sourceMappingURL=main.js.map