require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(180);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_714f4638_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-714f4638"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_714f4638_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/editStudent/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-714f4638", Component.options)
  } else {
    hotAPI.reload("data-v-714f4638", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      studentName: ''
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__["a" /* default */]],
  computed: {},
  components: {},
  watch: {},
  methods: {
    submitEdit: function submitEdit() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var studentId, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.studentName) {
                  _context.next = 3;
                  break;
                }

                wx.showToast({ title: '请输入备注姓名！', icon: 'none' });
                return _context.abrupt('return');

              case 3:
                if (!(_this.studentName.length < 2 || _this.studentName.length > 6)) {
                  _context.next = 6;
                  break;
                }

                wx.showToast({ title: '请输入备注姓名(2-6个汉字)', icon: 'none' });
                return _context.abrupt('return');

              case 6:
                studentId = _this.$root.$mp.query.hasOwnProperty('studentId') ? _this.$root.$mp.query.studentId : null;
                _context.prev = 7;

                wx.showLoading({ title: '提交中...', mask: true });
                _context.next = 11;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/sclass/edit-student?token=' + _this.globalData.token,
                  data: { student_id: studentId, student_name: _this.studentName },
                  method: 'POST'
                });

              case 11:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 16;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 16:
                _context.next = 18;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '修改备注姓名',
                  content: ret.data.retMsg,
                  showCancel: false,
                  confirmColor: '#009efa'
                });

              case 18:
                wx.navigateBack({ delta: 1 });

                _context.next = 26;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context['catch'](7);

                console.log(_context.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 26:
                _context.prev = 26;
                return _context.finish(26);

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[7, 21, 26, 28]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    this.studentName = this.$root.$mp.query.hasOwnProperty('studentName') ? this.$root.$mp.query.studentName : '';
  },
  onUnload: function onUnload() {
    this.studentName = '';
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "student-name"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.studentName),
      expression: "studentName"
    }],
    attrs: {
      "type": "text",
      "maxlength": "6",
      "value": _vm.studentName,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.studentName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.studentName = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "flex-center mt40"
  }, [_c('div', {
    staticClass: "to-publish",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.submitEdit
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-icnext"
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-714f4638", esExports)
  }
}

/***/ })

},[179]);
//# sourceMappingURL=main.js.map