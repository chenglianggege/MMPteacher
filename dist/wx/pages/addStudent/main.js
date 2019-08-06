require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([27],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_83ca982e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-83ca982e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_83ca982e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/addStudent/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83ca982e", Component.options)
  } else {
    hotAPI.reload("data-v-83ca982e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      phoneNum: '',
      studentName: '',
      classId: 0
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
        var regx, classId, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                regx = /^1\d{10}$/;

                if (regx.test(_this.phoneNum)) {
                  _context.next = 4;
                  break;
                }

                wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none' });
                return _context.abrupt('return');

              case 4:
                if (!(!_this.studentName || _this.studentName.length < 2 || _this.studentName.length > 6)) {
                  _context.next = 7;
                  break;
                }

                wx.showToast({ title: '请输入备注姓名(2-6个汉字)！', icon: 'none' });
                return _context.abrupt('return');

              case 7:
                classId = _this.$root.$mp.query.hasOwnProperty('classId') ? _this.$root.$mp.query.classId : null;

                if (classId) {
                  _context.next = 11;
                  break;
                }

                wx.showToast({ title: '操作失败，请返回重试！', icon: 'none' });
                return _context.abrupt('return');

              case 11:
                _context.prev = 11;

                wx.showLoading({ title: '数据提交中...', mask: true });
                _context.next = 15;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/sclass/add-student?token=' + _this.globalData.token,
                  data: { student_phone: _this.phoneNum, student_name: _this.studentName, class_id: classId },
                  method: 'POST'
                });

              case 15:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 20;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 20:
                wx.redirectTo({ url: '/pages/addStudentSuccess/main?classId=' + classId });
                _context.next = 28;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context['catch'](11);

                console.log(_context.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 28:
                _context.prev = 28;
                return _context.finish(28);

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[11, 23, 28, 30]]);
      }))();
    }
  },

  onLoad: function onLoad() {},
  onUnload: function onUnload() {
    this.phoneNum = '';
    this.studentName = '';
    this.classId = 0;
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "phone-num"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phoneNum),
      expression: "phoneNum"
    }],
    attrs: {
      "maxlength": "11",
      "type": "number",
      "placeholder": "请输入11位手机号码",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.phoneNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phoneNum = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
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
      "placeholder": "请输入备注姓名(2-6个汉字)",
      "eventid": '1'
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
      "eventid": '2'
    },
    on: {
      "click": _vm.submitEdit
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-icnext"
  })], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("请输入学生/家长的手机号码")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("备注姓名")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-83ca982e", esExports)
  }
}

/***/ })

},[100]);
//# sourceMappingURL=main.js.map