require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([24],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(145);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7801ab68_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7801ab68"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7801ab68_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/classAnalysisDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7801ab68", Component.options)
  } else {
    hotAPI.reload("data-v-7801ab68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
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
      currentIdx: 0,
      loading: true,
      detailLoaded: false,
      finishTimeRangeType: 1,
      finishTimeRangeStart: '30',
      finishTimeRangeEnd: 'now',
      finishTimeRangeStr: '',
      scoreTimeRangeType: 1,
      scoreTimeRangeStart: '30',
      scoreTimeRangeEnd: 'now',
      scoreTimeRangeStr: '',
      finishData: {},
      scoreData: {},
      classDetail: {},
      studentList: [],
      STATIC_URL: '',
      sortField: 'score_rate',
      sortBy: 'desc',
      showFinishDesc: false,
      showScoreDesc: false,
      finishDataNum: 0,
      scoreDataNum: 0
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_5__mixin_mainMixin_js__["a" /* default */]],
  components: {
    textToFixed: __WEBPACK_IMPORTED_MODULE_4__components_textToFixed__["a" /* default */]
  },
  watch: {},
  methods: {
    changeFinishTimeRange: function changeFinishTimeRange(finishTimeRange) {
      this.finishTimeRangeStart = finishTimeRange;
      this.getClassFinish();
    },
    changeFinishTimeRangeType: function changeFinishTimeRangeType() {
      if (+this.finishTimeRangeType === 2) {
        this.finishTimeRangeType = 1;
        this.finishTimeRangeEnd = 'now';
        this.finishTimeRangeStart = 30;
        this.getClassFinish();
        return;
      }
      this.finishTimeRangeType = 2;
      if (this.finishTimeRangeEnd === 'now') {
        var d = new Date();
        d.setDate(d.getDate() - this.finishTimeRangeStart);
        this.finishTimeRangeStart = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(d, 'yyyy-MM-dd');
        this.finishTimeRangeEnd = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'yyyy-MM-dd');
      }
    },
    getClassFinish: function getClassFinish() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var classId, start, d, ret, retData, seriesData, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.currentIdx = 0;
                _this.finishData = null;
                _this.finishDataNum = 0;
                classId = _this.$root.$mp.query.hasOwnProperty('classId') ? _this.$root.$mp.query.classId : null;

                if (classId) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return');

              case 6:
                start = _this.finishTimeRangeStart;

                if (_this.finishTimeRangeEnd === 'now') {
                  d = new Date();

                  d.setDate(d.getDate() - _this.finishTimeRangeStart);
                  _this.finishTimeRangeStr = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(d, 'yyyy-MM-dd') + ' 至' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'yyyy-MM-dd');
                  start = '-' + _this.finishTimeRangeStart + ' days';
                } else {
                  _this.finishTimeRangeStr = _this.finishTimeRangeStart + ' 至' + _this.finishTimeRangeEnd;
                }
                _context.prev = 8;

                wx.showLoading({ title: '加载中...', mask: true });
                _this.loading = true;
                _context.next = 13;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/sclass/analysis/finish',
                  data: { token: _this.globalData.token, class_id: classId, start: start, end: _this.finishTimeRangeEnd },
                  method: 'GET'
                });

              case 13:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 18;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 18:
                retData = ret.data.retData ? ret.data.retData : [];
                seriesData = [];

                for (i in retData) {
                  seriesData.push({ value: [+i + 1, retData[i].finish_rate] });
                }
                _this.finishDataNum = seriesData.length;
                _this.finishData = {
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

                _context.next = 30;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context['catch'](8);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log(_context.t0);

              case 30:
                _context.prev = 30;

                _this.loading = false;
                return _context.finish(30);

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[8, 25, 30, 33]]);
      }))();
    },
    getClassScore: function getClassScore() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var classId, start, d, ret, retData, seriesData, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.currentIdx = 1;
                _this2.scoreData = null;
                _this2.scoreDataNum = 0;
                classId = _this2.$root.$mp.query.hasOwnProperty('classId') ? _this2.$root.$mp.query.classId : null;

                if (classId) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return');

              case 6:
                start = _this2.scoreTimeRangeStart;

                if (_this2.scoreTimeRangeEnd === 'now') {
                  d = new Date();

                  d.setDate(d.getDate() - _this2.scoreTimeRangeStart);
                  _this2.scoreTimeRangeStr = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(d, 'yyyy-MM-dd') + ' 至' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'yyyy-MM-dd');
                  start = '-' + _this2.scoreTimeRangeStart + ' days';
                } else {
                  _this2.scoreTimeRangeStr = _this2.scoreTimeRangeStart + ' 至' + _this2.scoreTimeRangeEnd;
                }
                _context2.prev = 8;

                wx.showLoading({ title: '加载中...', mask: true });
                _this2.loading = true;
                _context2.next = 13;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/teacher/sclass/analysis/score',
                  data: { token: _this2.globalData.token, class_id: classId, start: start, end: _this2.scoreTimeRangeEnd },
                  method: 'GET'
                });

              case 13:
                ret = _context2.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 18;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 18:
                retData = ret.data.retData ? ret.data.retData : [];
                seriesData = [];

                for (i in retData) {
                  seriesData.push({ value: [+i + 1, retData[i].rate_score] });
                }
                _this2.scoreDataNum = seriesData.length;
                _this2.scoreData = {
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

                _context2.next = 30;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2['catch'](8);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log(_context2.t0);

              case 30:
                _context2.prev = 30;

                _this2.loading = false;
                return _context2.finish(30);

              case 33:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[8, 25, 30, 33]]);
      }))();
    },
    getClassDetail: function getClassDetail() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var classId, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.detailLoaded = false;
                classId = _this3.$root.$mp.query.hasOwnProperty('classId') ? _this3.$root.$mp.query.classId : null;

                if (classId) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt('return');

              case 4:
                _context3.prev = 4;

                wx.showLoading({ title: '加载中...', mask: true });
                _context3.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this3.globalData.apiBaseUrl + '/teacher/sclass/detail',
                  data: { token: _this3.globalData.token, class_id: classId },
                  method: 'GET'
                });

              case 8:
                ret = _context3.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context3.next = 13;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context3.abrupt('return');

              case 13:
                _this3.studentList = ret.data.retData.students ? ret.data.retData.students : [];
                _this3.classDetail = ret.data.retData;
                wx.setNavigationBarTitle({
                  title: _this3.classDetail.class_name
                });
                _context3.next = 23;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3['catch'](4);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log(_context3.t0);

              case 23:
                _context3.prev = 23;

                _this3.detailLoaded = true;
                return _context3.finish(23);

              case 26:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[4, 18, 23, 26]]);
      }))();
    },
    changeScoreTimeRange: function changeScoreTimeRange(finishTimeRange) {
      this.scoreTimeRangeStart = finishTimeRange;
      this.getClassScore();
    },
    changeScoreTimeRangeType: function changeScoreTimeRangeType() {
      if (+this.scoreTimeRangeType === 2) {
        this.scoreTimeRangeType = 1;
        this.scoreTimeRangeEnd = 'now';
        this.scoreTimeRangeStart = 30;
        this.getClassScore();
        return;
      }
      this.scoreTimeRangeType = 2;
      if (this.scoreTimeRangeEnd === 'now') {
        var d = new Date();
        d.setDate(d.getDate() - this.scoreTimeRangeStart);
        this.scoreTimeRangeStart = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(d, 'yyyy-MM-dd');
        this.scoreTimeRangeEnd = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'yyyy-MM-dd');
      }
    },
    getClassStudents: function getClassStudents() {
      this.currentIdx = 2;
    },
    sortStudentList: function sortStudentList(field) {
      var sortBy = 'desc';
      if (field === this.sortField) {
        sortBy = this.sortBy === 'desc' ? 'asc' : 'desc';
      }
      this.sortBy = sortBy;
      this.sortField = field;
      var studentList = this.studentList;
      studentList.sort(function (a, b) {
        if (!isNaN(+a[field]) && !isNaN(+b[field])) {
          if (sortBy === 'asc') {
            return a[field] - b[field];
          }
          if (sortBy === 'desc') {
            return b[field] - a[field];
          }
        }
        if (sortBy === 'asc') {
          if (a[field] > b[field]) {
            return 1;
          }
          if (a[field] === b[field]) {
            return 0;
          }
          if (a[field] < b[field]) {
            return -1;
          }
        }
        if (sortBy === 'desc') {
          if (a[field] > b[field]) {
            return -1;
          }
          if (a[field] === b[field]) {
            return 0;
          }
          if (a[field] < b[field]) {
            return 1;
          }
        }
      });
      this.studentList = studentList;
    },
    toStudentDetail: function toStudentDetail(student) {
      var classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null;
      var complete_rate = student.complete_rate === null ? 0 : student.complete_rate;
      var score_rate = student.score_rate === null ? 0 : student.score_rate;
      wx.navigateTo({ url: '/pages/classAnalysisStudentDetail/main?' + 'classId=' + classId + '&studentId=' + student.student_id + '&completeRate=' + complete_rate + '&scoreRate=' + score_rate + '&studentName=' + student.student_name
      });
    }
  },
  onShow: function onShow() {},
  onLoad: function onLoad() {
    this.getClassDetail();
    this.getClassFinish();
    this.STATIC_URL = this.globalData.staticBaseUrl;
  },
  onUnload: function onUnload() {
    this.currentIdx = 0;
    this.loading = true;
    this.detailLoaded = false;
    this.finishTimeRangeType = 1;
    this.finishTimeRangeStart = '30';
    this.finishTimeRangeEnd = 'now';
    this.finishTimeRangeStr = '';

    this.scoreTimeRangeType = 1;
    this.scoreTimeRangeStart = '30';
    this.scoreTimeRangeEnd = 'now';
    this.scoreTimeRangeStr = '';

    this.finishData = {};
    this.scoreData = {};
    this.classDetail = {};
    this.studentList = [];

    this.sortField = 'score_rate';
    this.sortBy = 'desc';

    this.showFinishDesc = false;
    this.showScoreDesc = false;

    this.finishDataNum = 0;
    this.scoreDataNum = 0;
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.detailLoaded) ? _c('div', {
    staticClass: "container"
  }, [(_vm.classDetail.homework_info.homework_count > 0) ? _c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "navbar-item",
    class: {
      item_on: _vm.currentIdx == 0
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.getClassFinish
    }
  }, [_c('view', {
    staticClass: "navbar-title"
  }, [_vm._v("作业情况")])]), _vm._v(" "), _c('div', {
    staticClass: "navbar-item",
    class: {
      item_on: _vm.currentIdx == 1
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.getClassScore
    }
  }, [_c('view', {
    staticClass: "navbar-title"
  }, [_vm._v("答题得分")])]), _vm._v(" "), _c('div', {
    staticClass: "navbar-item",
    class: {
      item_on: _vm.currentIdx == 2
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.getClassStudents
    }
  }, [_c('view', {
    staticClass: "navbar-title"
  }, [_vm._v("学生详情")])])]) : _vm._e(), _vm._v(" "), (_vm.currentIdx == 0 && _vm.classDetail.homework_info.homework_count > 0) ? _c('div', {
    staticClass: "tab-finish"
  }, [_c('div', [_c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("已完成作业总次数：" + _vm._s(_vm.classDetail.homework_info.homework_count))]), _vm._v(" "), _c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("\n                班平均作业完成度："), _c('textToFixed', {
    attrs: {
      "value": _vm.classDetail.homework_info.complete_rate * 100,
      "point": 2,
      "mpcomid": '0'
    }
  }), _vm._v("%\n                "), _c('span', {
    staticClass: "c-primary ml5",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function () { return this$1.showFinishDesc = !this$1.showFinishDesc; }
    }
  }, [_vm._v("（" + _vm._s(_vm.showFinishDesc ? '收起' : '查看') + "说明）")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showFinishDesc),
      expression: "showFinishDesc"
    }],
    staticClass: "f14 mt5 tab-desc"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "warp-line mt10"
  }), _vm._v(" "), (_vm.finishTimeRangeType === 1) ? _c('div', {
    staticClass: "mt10 time-range"
  }, [_c('div', {
    staticClass: "radio-btn-group"
  }, [_c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.finishTimeRangeStart == '30'
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.changeFinishTimeRange('30')
      }
    }
  }, [_vm._v("近30天")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.finishTimeRangeStart == '60'
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.changeFinishTimeRange('60')
      }
    }
  }, [_vm._v("近60天")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.finishTimeRangeStart == '90'
    },
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.changeFinishTimeRange('90')
      }
    }
  }, [_vm._v("近90天")])]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn-group mt2"
  }, [_c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.finishTimeRangeStart == '180'
    },
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.changeFinishTimeRange('180')
      }
    }
  }, [_vm._v("近半年")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.finishTimeRangeStart == '365'
    },
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.changeFinishTimeRange('365')
      }
    }
  }, [_vm._v("近1年")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.changeFinishTimeRangeType
    }
  }, [_vm._v("其他")])])]) : _vm._e(), _vm._v(" "), (_vm.finishTimeRangeType === 2) ? _c('div', {
    staticClass: "flex mt10 time-range time-range-select"
  }, [_c('div', {
    staticClass: "back-arrow",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.changeFinishTimeRangeType
    }
  }, [_c('i', {
    staticClass: "iconfont icon-left"
  })], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "flex"
  }, [_c('span', {
    staticClass: "f16"
  }, [_vm._v("开始日期：")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.finishTimeRangeStart,
      "eventid": '11'
    },
    on: {
      "change": function (e) {
        this$1.finishTimeRangeStart = e.mp.detail.value;
        this$1.getClassFinish()
      }
    }
  }, [_c('view', {
    staticClass: "picker f16"
  }, [_vm._v(_vm._s(_vm.finishTimeRangeStart))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex mt5"
  }, [_c('span', {
    staticClass: "f16"
  }, [_vm._v("截止日期：")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.finishTimeRangeEnd,
      "eventid": '12'
    },
    on: {
      "change": function (e) {
        this$1.finishTimeRangeEnd = e.mp.detail.value;
        this$1.getClassFinish()
      }
    }
  }, [_c('view', {
    staticClass: "picker f16"
  }, [_vm._v(_vm._s(_vm.finishTimeRangeEnd))])])], 1)])]) : _vm._e(), _vm._v(" "), (!_vm.loading && _vm.finishDataNum > 0) ? _c('div', {
    staticClass: "ec-line"
  }, [_c('div', {
    staticClass: "ec-div"
  }, [_c('ec-canvas', {
    staticClass: "ec-canvas",
    attrs: {
      "ec": _vm.finishData,
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "f14 mt10",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.finishTimeRangeStr))]), _vm._v(" "), _c('div', [_vm._v("作业完成度曲线")])])]) : _vm._e(), _vm._v(" "), (_vm.finishDataNum == 0) ? _c('div', {
    staticClass: "no-class"
  }, [_c('img', {
    attrs: {
      "src": "./../../images/classAnalysisDetail/wushuju.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add-class-tips"
  }, [_vm._v("本时段内没有作业")]), _vm._v(" "), _c('div', {
    staticClass: "add-class-tips"
  }, [_vm._v("请选择其他时间段")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.currentIdx == 1 && _vm.classDetail.homework_info.homework_count > 0) ? _c('div', {
    staticClass: "tab-score"
  }, [_c('div', [_c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("已完成作业总次数：" + _vm._s(_vm.classDetail.homework_info.homework_count))]), _vm._v(" "), _c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("\n                班平均答题得分率："), _c('textToFixed', {
    attrs: {
      "value": _vm.classDetail.homework_info.score_rate * 100,
      "point": 2,
      "mpcomid": '2'
    }
  }), _vm._v("%\n                "), _c('span', {
    staticClass: "c-primary ml5",
    attrs: {
      "eventid": '13'
    },
    on: {
      "click": function () { return this$1.showScoreDesc = !this$1.showScoreDesc; }
    }
  }, [_vm._v("（" + _vm._s(_vm.showScoreDesc ? '收起' : '查看') + "说明）")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showScoreDesc),
      expression: "showScoreDesc"
    }],
    staticClass: "f14 mt5 tab-desc"
  }, [_c('div', {
    staticClass: "mt5"
  }, [_vm._v("这里是针对学生答题进行的统计（含未完成作业，不含已删除的）")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c('div', {
    staticClass: "warp-line mt10"
  }), _vm._v(" "), (_vm.scoreTimeRangeType === 1) ? _c('div', {
    staticClass: "mt10 time-range"
  }, [_c('div', {
    staticClass: "radio-btn-group"
  }, [_c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.scoreTimeRangeStart == '30'
    },
    attrs: {
      "eventid": '14'
    },
    on: {
      "click": function($event) {
        _vm.changeScoreTimeRange('30')
      }
    }
  }, [_vm._v("近30天")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.scoreTimeRangeStart == '60'
    },
    attrs: {
      "eventid": '15'
    },
    on: {
      "click": function($event) {
        _vm.changeScoreTimeRange('60')
      }
    }
  }, [_vm._v("近60天")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.scoreTimeRangeStart == '90'
    },
    attrs: {
      "eventid": '16'
    },
    on: {
      "click": function($event) {
        _vm.changeScoreTimeRange('90')
      }
    }
  }, [_vm._v("近90天")])]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn-group mt2"
  }, [_c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.scoreTimeRangeStart == '180'
    },
    attrs: {
      "eventid": '17'
    },
    on: {
      "click": function($event) {
        _vm.changeScoreTimeRange('180')
      }
    }
  }, [_vm._v("近半年")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    class: {
      select: _vm.scoreTimeRangeStart == '365'
    },
    attrs: {
      "eventid": '18'
    },
    on: {
      "click": function($event) {
        _vm.changeScoreTimeRange('365')
      }
    }
  }, [_vm._v("近1年")]), _vm._v(" "), _c('div', {
    staticClass: "radio-btn",
    attrs: {
      "eventid": '19'
    },
    on: {
      "click": _vm.changeScoreTimeRangeType
    }
  }, [_vm._v("其他")])])]) : _vm._e(), _vm._v(" "), (_vm.scoreTimeRangeType === 2) ? _c('div', {
    staticClass: "flex mt10 time-range time-range-select"
  }, [_c('div', {
    staticClass: "back-arrow",
    attrs: {
      "eventid": '20'
    },
    on: {
      "click": _vm.changeScoreTimeRangeType
    }
  }, [_c('i', {
    staticClass: "iconfont icon-left"
  })], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "flex"
  }, [_c('span', {
    staticClass: "f16"
  }, [_vm._v("开始日期：")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.scoreTimeRangeStart,
      "eventid": '21'
    },
    on: {
      "change": function (e) {
        this$1.scoreTimeRangeStart = e.mp.detail.value;
        this$1.getClassFinish()
      }
    }
  }, [_c('view', {
    staticClass: "picker f16"
  }, [_vm._v(_vm._s(_vm.scoreTimeRangeStart))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex mt5"
  }, [_c('span', {
    staticClass: "f16"
  }, [_vm._v("截止日期：")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.scoreTimeRangeEnd,
      "eventid": '22'
    },
    on: {
      "change": function (e) {
        this$1.scoreTimeRangeEnd = e.mp.detail.value;
        this$1.getClassFinish()
      }
    }
  }, [_c('view', {
    staticClass: "picker f16"
  }, [_vm._v(_vm._s(_vm.scoreTimeRangeEnd))])])], 1)])]) : _vm._e(), _vm._v(" "), (!_vm.loading && _vm.scoreDataNum > 0) ? _c('div', {
    staticClass: "ec-line"
  }, [_c('div', {
    staticClass: "ec-div"
  }, [_c('ec-canvas', {
    staticClass: "ec-canvas",
    attrs: {
      "ec": _vm.scoreData,
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "f14 mt10",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.scoreTimeRangeStr))]), _vm._v(" "), _c('div', [_vm._v("作答得分率曲线")])])]) : _vm._e(), _vm._v(" "), (_vm.scoreDataNum == 0) ? _c('div', {
    staticClass: "no-class"
  }, [_c('img', {
    attrs: {
      "src": "./../../images/classAnalysisDetail/wushuju.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add-class-tips"
  }, [_vm._v("本时段内没有作业")]), _vm._v(" "), _c('div', {
    staticClass: "add-class-tips"
  }, [_vm._v("请选择其他时间段")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.currentIdx == 2 && _vm.classDetail.homework_info.homework_count > 0) ? _c('div', {
    staticClass: "tab-student"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "student-list"
  }, [_c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "td flex-center",
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "eventid": '23'
    },
    on: {
      "click": function($event) {
        _vm.sortStudentList('student_name')
      }
    }
  }, [_vm._v("\n                            备注姓名\n                            "), _c('div', {
    staticClass: "sort-icon flex-center-column"
  }, [_c('i', {
    staticClass: "sort-caret ascending",
    class: {
      primary: _vm.sortField === 'student_name' && _vm.sortBy === 'asc'
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "sort-caret descending",
    class: {
      primary: _vm.sortField === 'student_name' && _vm.sortBy === 'desc'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "td",
    staticStyle: {
      "width": "50px"
    }
  }, [_vm._v("头像")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1 flex-center",
    attrs: {
      "eventid": '24'
    },
    on: {
      "click": function($event) {
        _vm.sortStudentList('complete_rate')
      }
    }
  }, [_vm._v("\n                            作业完成度\n                            "), _c('div', {
    staticClass: "sort-icon flex-center-column"
  }, [_c('i', {
    staticClass: "sort-caret ascending",
    class: {
      primary: _vm.sortField === 'complete_rate' && _vm.sortBy === 'asc'
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "sort-caret descending",
    class: {
      primary: _vm.sortField === 'complete_rate' && _vm.sortBy === 'desc'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "td flex1 flex-center",
    attrs: {
      "eventid": '25'
    },
    on: {
      "click": function($event) {
        _vm.sortStudentList('score_rate')
      }
    }
  }, [_vm._v("\n                            作答得分率\n                            "), _c('div', {
    staticClass: "sort-icon flex-center-column"
  }, [_c('i', {
    staticClass: "sort-caret ascending",
    class: {
      primary: _vm.sortField === 'score_rate' && _vm.sortBy === 'asc'
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "sort-caret descending",
    class: {
      primary: _vm.sortField === 'score_rate' && _vm.sortBy === 'desc'
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.studentList), function(student, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td",
      staticStyle: {
        "width": "100px"
      }
    }, [_vm._v(_vm._s(student.student_name))]), _vm._v(" "), (student.user_avatar) ? _c('div', {
      staticClass: "td",
      staticStyle: {
        "width": "50px"
      }
    }, [_c('img', {
      staticClass: "student-avatar",
      attrs: {
        "src": _vm.STATIC_URL + student.user_avatar + '?x-oss-process=image/resize,h_100'
      }
    })]) : _c('div', {
      staticClass: "td",
      staticStyle: {
        "width": "50px"
      }
    }, [_c('img', {
      staticClass: "student-avatar",
      attrs: {
        "src": "./../../images/df_student.png"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('textToFixed', {
      attrs: {
        "value": student.complete_rate,
        "point": 0,
        "mpcomid": '4_' + idx
      }
    }), _vm._v("%")], 1), _vm._v(" "), _c('div', {
      staticClass: "td flex1 c-primary",
      attrs: {
        "eventid": '26_' + idx
      },
      on: {
        "click": function($event) {
          _vm.toStudentDetail(student)
        }
      }
    }, [_c('textToFixed', {
      attrs: {
        "value": student.score_rate,
        "point": 0,
        "mpcomid": '5_' + idx
      }
    }), _vm._v("%")], 1)])
  }))])])]) : _vm._e(), _vm._v(" "), (_vm.classDetail.homework_info.homework_count == 0) ? _c('div', {
    staticClass: "no-class"
  }, [_c('img', {
    attrs: {
      "src": "./../../images/classAnalysisDetail/wushuju.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add-class-tips"
  }, [_vm._v("本班学生完成作业后才会有数据哦～")])]) : _vm._e()]) : _vm._e()
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt5"
  }, [_c('span', {
    staticClass: "fb"
  }, [_vm._v("作业完成：")]), _vm._v("学生在规定时间内完成作业")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt10"
  }, [_c('span', {
    staticClass: "fb"
  }, [_vm._v("单份作业的完成度：")]), _vm._v("指的是完成人数占总人数比。例如：给50人布置，49人按时完成，则完成度为98.00%")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt10"
  }, [_c('span', {
    staticClass: "fb"
  }, [_vm._v("班平均作业完成度：")]), _vm._v("指的是所有“单份作业完成度”的平均值（不含已删除的作业）")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt5"
  }, [_c('span', {
    staticClass: "fb"
  }, [_vm._v("单个学生单份作业答题得分率：")]), _vm._v("指一份作业里学生所做的题的得分与所做题的满分之间的比值")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt10"
  }, [_c('span', {
    staticClass: "fb"
  }, [_vm._v("单份作业答题得分率：")]), _vm._v("一份作业，所有学生得分率的平均值")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mt10"
  }, [_c('span', {
    staticClass: "fb"
  }, [_vm._v("班平均答题得分率：")]), _vm._v("所有“单份作业答题得分率”的平均值")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("（1）历次作答得分率的平均值")]), _vm._v(" "), _c('div', {
    staticClass: "f14 mt5"
  }, [_vm._v("（2）点击蓝色数值查看得分率曲线")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7801ab68", esExports)
  }
}

/***/ })

},[144]);
//# sourceMappingURL=main.js.map