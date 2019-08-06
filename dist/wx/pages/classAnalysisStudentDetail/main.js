require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([23],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(150);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19b20332_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(153);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19b20332"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19b20332_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/classAnalysisStudentDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b20332", Component.options)
  } else {
    hotAPI.reload("data-v-19b20332", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_textToFixed__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixin_mainMixin_js__ = __webpack_require__(3);


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
      loading: true,
      scoreData: {},
      scoreDataNum: 0,
      completeRate: '',
      scoreRate: ''
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_5__mixin_mainMixin_js__["a" /* default */]],
  components: {
    textToFixed: __WEBPACK_IMPORTED_MODULE_4__components_textToFixed__["a" /* default */]
  },
  watch: {},
  methods: {
    getStudentScore: function getStudentScore() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var studentId, classId, ret, retData, seriesData, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.scoreData = null;
                _this.scoreDataNum = 0;
                studentId = _this.$root.$mp.query.hasOwnProperty('studentId') ? _this.$root.$mp.query.studentId : null;
                classId = _this.$root.$mp.query.hasOwnProperty('classId') ? _this.$root.$mp.query.classId : null;

                if (!(!studentId || !classId)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return');

              case 6:
                _context.prev = 6;

                wx.showLoading({ title: '加载中...', mask: true });
                _this.loading = true;
                _context.next = 11;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/sclass/analysis/student-score',
                  data: { token: _this.globalData.token, class_id: classId, student_id: studentId },
                  method: 'GET'
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
                retData = ret.data.retData ? ret.data.retData : [];
                seriesData = [];

                for (i in retData) {
                  seriesData.push({ value: [+i + 1, retData[i].ratio_score] });
                }
                _this.scoreDataNum = retData.length;
                _this.scoreData = {
                  options: {
                    color: ["#409eff"],
                    grid: { left: 0, right: 10, bottom: 0, top: 10, containLabel: true },
                    tooltip: { show: false },
                    xAxis: {
                      type: 'category',
                      boundaryGap: false
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [{
                      type: 'line',
                      smooth: false,
                      data: seriesData
                    }]
                  }
                };

                _context.next = 28;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context['catch'](6);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log(_context.t0);

              case 28:
                _context.prev = 28;

                _this.loading = false;
                return _context.finish(28);

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[6, 23, 28, 31]]);
      }))();
    }
  },
  onShow: function onShow() {
    //console.log('this.$root.$mp.query', this.$root.$mp.query)
    this.completeRate = (+this.$root.$mp.query.completeRate).toFixed(0);
    this.scoreRate = (+this.$root.$mp.query.scoreRate).toFixed(0);
    this.getStudentScore();
    wx.setNavigationBarTitle({
      title: this.$root.$mp.query.studentName
    });
  },
  onLoad: function onLoad() {},
  onUnload: function onUnload() {
    this.loading = true;
    this.scoreData = {};
    this.completeRate = '';
    this.scoreRate = '';
    this.scoreDataNum = 0;
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "ml10"
  }, [_c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("作业完成度: " + _vm._s(_vm.completeRate) + "%")]), _vm._v(" "), _c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("平均作答得分率: " + _vm._s(_vm.scoreRate) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "warp-line mt10"
  }), _vm._v(" "), (!_vm.loading && _vm.scoreDataNum > 0) ? _c('div', {
    staticClass: "ec-line"
  }, [_c('div', {
    staticClass: "ec-div"
  }, [_c('ec-canvas', {
    staticClass: "ec-canvas",
    attrs: {
      "ec": _vm.scoreData,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.scoreDataNum == 0) ? _c('div', {
    staticClass: "no-class"
  }, [_c('img', {
    attrs: {
      "src": "./../../images/classAnalysisDetail/wushuju.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add-class-tips"
  }, [_vm._v("这个学生一直没做作业...")])]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "f14 mt10",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('div', [_vm._v("作答得分率")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b20332", esExports)
  }
}

/***/ })

},[149]);
//# sourceMappingURL=main.js.map