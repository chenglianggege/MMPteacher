require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(175);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26137929_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(178);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26137929"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26137929_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/editHomework/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26137929", Component.options)
  } else {
    hotAPI.reload("data-v-26137929", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
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



var onfire = __webpack_require__(20).onfire;


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      finish_data: '',
      finish_time: '',
      exam_title: ''
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixin_mainMixin_js__["a" /* default */]],
  computed: {
    startTime: function startTime() {
      var publish_time = this.$root.$mp.query.publish_time;
      return Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(parseInt(publish_time + '000')), 'yyyy-MM-dd hh:mm');
    }
  },
  components: {},
  watch: {},
  methods: {
    changeStart: function changeStart() {
      wx.showToast({ title: '不能修改发布时间！', icon: 'none' });
    },
    submitWork: function submitWork() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var submitForm, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                submitForm = { exam_id: _this.$root.$mp.query.examId, finish_time: _this.finish_data + ' ' + _this.finish_time, exam_title: _this.exam_title };
                _context.prev = 1;

                wx.showLoading({
                  title: '修改中...',
                  mask: true
                });
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/homework/save?token=' + _this.globalData.token,
                  data: submitForm,
                  method: 'POST'
                });

              case 5:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 10;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 10:
                onfire.fire('reloadHomework');
                _context.next = 13;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '修改',
                  content: ret.data.retMsg,
                  showCancel: false,
                  confirmText: '确定',
                  confirmColor: '#409eff'
                });

              case 13:
                wx.navigateBack();
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](1);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 20:
                _context.prev = 20;
                return _context.finish(20);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 16, 20, 22]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    var finishTime = this.$root.$mp.query.finish_time;
    this.finish_data = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(parseInt(finishTime + '000')), 'yyyy-MM-dd');
    this.finish_time = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(parseInt(finishTime + '000')), 'hh:mm');
    this.exam_title = this.$root.$mp.query.exam_title;
  },
  onUnload: function onUnload() {
    this.finish_data = '';
    this.finish_time = '';
    this.exam_title = '';
  }
});

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("发布时间")]), _vm._v(" "), _c('div', {
    staticClass: "sel-data f14 c-gray",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.changeStart
    }
  }, [_vm._v("\n        " + _vm._s(_vm.startTime) + "\n      ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("截止时间")]), _vm._v(" "), _c('div', {
    staticClass: "sel-data"
  }, [_c('picker', {
    attrs: {
      "value": _vm.finish_data,
      "mode": "date",
      "eventid": '1'
    },
    on: {
      "change": function (e) { return this$1.finish_data = e.mp.detail.value; }
    }
  }, [_c('view', {
    staticClass: "picker f14"
  }, [_vm._v(_vm._s(_vm.finish_data))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sel-time"
  }, [_c('picker', {
    attrs: {
      "value": _vm.finish_time,
      "mode": "time",
      "eventid": '2'
    },
    on: {
      "change": function (e) { return this$1.finish_time = e.mp.detail.value; }
    }
  }, [_c('view', {
    staticClass: "picker f14"
  }, [_vm._v(_vm._s(_vm.finish_time))])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "exam-title"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.exam_title),
      expression: "exam_title"
    }],
    attrs: {
      "type": "text",
      "maxlength": "50",
      "value": _vm.exam_title,
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.exam_title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.exam_title = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "flex-center mt40"
  }, [_c('div', {
    staticClass: "to-publish",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.submitWork
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
  }, [_vm._v("作业名称")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26137929", esExports)
  }
}

/***/ })

},[174]);
//# sourceMappingURL=main.js.map