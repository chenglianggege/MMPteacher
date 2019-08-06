require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(165);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b3c9566_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b3c9566"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7b3c9566_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/editClassDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3c9566", Component.options)
  } else {
    hotAPI.reload("data-v-7b3c9566", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      classTitle: '',
      grades: [{ grade: 7, name: '七年级' }, { grade: 8, name: '八年级' }, { grade: 9, name: '九年级' }],
      grade: 0,
      years: [],
      year: 0,
      classId: 0
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin_mainMixin_js__["a" /* default */]],
  computed: {},
  components: {},
  watch: {},
  methods: {
    submitEdit: function submitEdit() {
      if (this.classId) {
        this.editClass();
      } else {
        this.addClass();
      }
    },
    addClass: function addClass() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.classTitle.length < 2 || _this.classTitle.length > 6)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', wx.showToast({ title: '请输入班级名称(2-8个字符)', icon: 'none' }));

              case 2:
                _context.prev = 2;

                wx.showLoading({ title: '数据提交中...', mask: true });
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/sclass/add?token=' + _this.globalData.token,
                  data: { class_name: _this.classTitle, grade: _this.grades[_this.grade].grade, year: _this.years[_this.year] },
                  method: 'POST'
                });

              case 6:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 11;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 11:
                wx.redirectTo({ url: '/pages/editClassSuccess/main' });
                _context.next = 19;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](2);

                console.log(_context.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 19:
                _context.prev = 19;
                return _context.finish(19);

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[2, 14, 19, 21]]);
      }))();
    },
    editClass: function editClass() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.classTitle.length < 2 || _this2.classTitle.length > 6)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', wx.showToast({ title: '请输入班级名称(2-8个字符)', icon: 'none' }));

              case 2:
                _context2.prev = 2;

                wx.showLoading({ title: '数据提交中...', mask: true });
                _context2.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/teacher/sclass/save?token=' + _this2.globalData.token,
                  data: { class_id: _this2.classId, class_name: _this2.classTitle, grade: _this2.grades[_this2.grade].grade, year: _this2.years[_this2.year] },
                  method: 'POST'
                });

              case 6:
                ret = _context2.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 11;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 11:
                wx.redirectTo({ url: '/pages/editClassSuccess/main?classId=' + _this2.classId });
                _context2.next = 19;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](2);

                console.log(_context2.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 19:
                _context2.prev = 19;
                return _context2.finish(19);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 14, 19, 21]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    var year = new Date().getFullYear();
    var years = [];
    years.push(year - 1 + '~' + year);
    years.push(year + '~' + (year + 1));

    this.classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null;
    if (this.classId) {
      var query = this.$root.$mp.query;
      console.log(query);
      this.classTitle = query.className;
      this.year = years.findIndex(function (item) {
        return item === query.classYear;
      });
      if (this.year === -1) {
        years.push(query.classYear);
      }
      this.year = years.length - 1;
      var grade = this.grades.findIndex(function (item) {
        return item.grade == query.classGrade;
      });
      this.grade = grade >= 0 ? grade : 0;
      console.log('this.grade', this.grade);
      wx.setNavigationBarTitle({ title: '修改班级' });
    } else {
      wx.setNavigationBarTitle({ title: '创建班级' });
    }
    this.years = years;
  },
  onUnload: function onUnload() {
    this.classId = 0;
    this.classTitle = '';
    this.grade = 0;
    this.years = [];
    this.year = 0;
  }
});

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "class-title"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.classTitle),
      expression: "classTitle"
    }],
    attrs: {
      "type": "text",
      "maxlength": "6",
      "value": _vm.classTitle,
      "placeholder": "请输入班级名称",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.classTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.classTitle = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "class-grade"
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('picker', {
    attrs: {
      "value": _vm.grade,
      "range": _vm.grades,
      "range-key": "name",
      "eventid": '1'
    },
    on: {
      "change": function (e) { return this$1.grade = e.mp.detail.value; }
    }
  }, [_c('view', [_vm._v(_vm._s(_vm.grades[_vm.grade].name))])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "class-grade"
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('picker', {
    attrs: {
      "value": _vm.year,
      "range": _vm.years,
      "eventid": '2'
    },
    on: {
      "change": function (e) { return this$1.year = e.mp.detail.value; }
    }
  }, [_c('view', [_vm._v(_vm._s(_vm.years[_vm.year]))])])], 1)])]), _vm._v(" "), _c('div', {
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
  })], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("班级名称")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("班级年级")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("班级年度")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b3c9566", esExports)
  }
}

/***/ })

},[164]);
//# sourceMappingURL=main.js.map