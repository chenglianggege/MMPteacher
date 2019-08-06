require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(210);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4e45b0a0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(211)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e45b0a0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4e45b0a0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/homeworkDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e45b0a0", Component.options)
  } else {
    hotAPI.reload("data-v-4e45b0a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 211:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_listFooter__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_textToFixed__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixin_mainMixin_js__ = __webpack_require__(3);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ec: {},
      summary: null,
      students: null,
      showQsList: true
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_6__mixin_mainMixin_js__["a" /* default */]],
  components: {
    'list-footer': __WEBPACK_IMPORTED_MODULE_4__components_listFooter__["a" /* default */],
    'text-fixed': __WEBPACK_IMPORTED_MODULE_5__components_textToFixed__["a" /* default */]
  },
  watch: {},
  methods: {
    loadPaperSummary: function loadPaperSummary() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var examId, ret, summary, data, total_count, i, distribution, ec;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.currentIdx = 0;
                examId = _this.$root.$mp.query.examId;

                if (!_this.summary) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:
                _context.prev = 4;

                _this.summary = null;
                _this.ec = null;
                wx.showLoading({ title: '加载中...', mask: true });
                _context.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/homework/detail/summary',
                  data: { token: _this.globalData.token, exam_id: examId },
                  method: 'GET'
                });

              case 10:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 15;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 15:
                summary = ret.data.retData;
                data = [];
                total_count = summary.homework_info.total_count;


                for (i in summary.homework_info.distribution) {
                  distribution = summary.homework_info.distribution[i];

                  if (distribution > 0) {
                    data.push({ value: distribution, name: i, rate: total_count > 0 ? (distribution / total_count * 100).toFixed(0) : 0 });
                  }
                }
                summary.homework_info.data = data;
                ec = {
                  show: data.length,
                  options: {
                    backgroundColor: "#ffffff",
                    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
                    series: [{
                      label: {
                        normal: {
                          fontSize: 14
                        }
                      },
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: [0, '50%'],
                      data: data,
                      itemStyle: {
                        emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 2, 2, 0.3)'
                        }
                      }
                    }]
                  }
                };

                _this.ec = ec;
                _this.summary = summary;
                _context.next = 30;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context['catch'](4);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log(_context.t0);

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[4, 25]]);
      }))();
    },
    loadPaperStudent: function loadPaperStudent() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var examId, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.logTrack('student');
                _this2.currentIdx = 1;
                examId = _this2.$root.$mp.query.examId;

                if (!_this2.students) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt('return');

              case 5:
                _this2.students = null;
                _context2.prev = 6;

                wx.showLoading({ title: '加载中...', mask: true });
                _context2.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/teacher/homework/student/list',
                  data: { token: _this2.globalData.token, exam_id: examId },
                  method: 'GET'
                });

              case 10:
                ret = _context2.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 15;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 15:
                _this2.students = ret.data.retData;
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2['catch'](6);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[6, 18]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    this.loadPaperSummary();
  },
  onUnload: function onUnload() {
    this.currentIdx = 0;
    this.summary = null;
    this.students = null;
    this.showQsList = true;
    this.ec = {};
  }
});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.summary) ? _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticStyle: {
      "flex": "0 0 auto"
    }
  }, [_c('div', {
    staticClass: "group-title pt10"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "f14 ml5"
  }, [_vm._v("题目序号")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right",
      "flex": "1"
    }
  }, [_c('text', {
    staticStyle: {
      "color": "#409eff"
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function () { return this$1.showQsList = !_vm.showQsList; }
    }
  }, [_vm._v(_vm._s(_vm.showQsList ? '收起↑' : '显示↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showQsList),
      expression: "showQsList"
    }],
    staticClass: "table qs-list mt10"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.summary.paper_nav), function(qsInfo, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td qs-no"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('div', {
      staticClass: "td qs-title"
    }, [_vm._v(_vm._s(qsInfo.title))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "tab"
  }, [_c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "navbar-item",
    class: {
      item_on: _vm.currentIdx == 0
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function () { return this$1.loadPaperSummary(); }
    }
  }, [_c('view', {
    staticClass: "navbar-title"
  }, [_vm._v("整体情况")])]), _vm._v(" "), _c('div', {
    staticClass: "navbar-item",
    class: {
      item_on: _vm.currentIdx == 1
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function () { return this$1.loadPaperStudent(); }
    }
  }, [_c('view', {
    staticClass: "navbar-title"
  }, [_vm._v("学生成绩")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-items"
  }, [(_vm.currentIdx == 0) ? _c('div', {
    staticClass: "summary"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "table mt10 qs-list"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.summary.paper_nav), function(qsInfo, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td qs-no"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": qsInfo.score,
        "mpcomid": '0_' + idx
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": qsInfo.average_score,
        "mpcomid": '1_' + idx
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": qsInfo.rate_score * 100,
        "mpcomid": '2_' + idx
      }
    }), _vm._v("%")], 1), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": qsInfo.max_score,
        "mpcomid": '3_' + idx
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": qsInfo.min_score,
        "mpcomid": '4_' + idx
      }
    })], 1)])
  }))]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "table mt10 score-range"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.summary.homework_info.distribution), function(num, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td flex1"
    }, [_vm._v(_vm._s(idx))]), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_vm._v(_vm._s(num))]), _vm._v(" "), _c('div', {
      staticClass: "td flex1"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": num / _vm.summary.homework_info.total_count * 100,
        "mpcomid": '5_' + idx
      }
    }), _vm._v("%")], 1)])
  }))]), _vm._v(" "), (_vm.ec.show) ? _c('div', {
    staticStyle: {
      "display": "-webkit-flex",
      "justify-content": "center",
      "align-items": "center",
      "width": "100%",
      "height": "250px"
    }
  }, [_c('ec-canvas', {
    staticStyle: {
      "width": "100%",
      "height": "100%",
      "display": "block"
    },
    attrs: {
      "ec": _vm.ec,
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "mpcomid": '6'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('list-footer', {
    attrs: {
      "mpcomid": '7'
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.currentIdx == 1 && _vm.students) ? _c('div', {
    staticClass: "student",
    staticStyle: {
      "height": "100%",
      "display": "-webkit-flex",
      "flex-direction": "column"
    }
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "mt10",
    staticStyle: {
      "overflow": "scroll",
      "position": "relative",
      "float": "left",
      "flex": "1"
    }
  }, [_c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "td student-name"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "td process"
  }, [_vm._v("进度")]), _vm._v(" "), _c('div', {
    staticClass: "td score"
  }, [_vm._v("得分")]), _vm._v(" "), _vm._l((_vm.summary.paper_nav), function(qsInfo, idx) {
    return _c('div', {
      key: idx,
      staticClass: "td score"
    }, [_vm._v(_vm._s(idx + 1))])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.students), function(student, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td student-name"
    }, [_vm._v(_vm._s(student.student_name))]), _vm._v(" "), _c('div', {
      staticClass: "td process"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": student.exam_process * 100,
        "mpcomid": '8_' + idx
      }
    }), _vm._v("%")], 1), _vm._v(" "), _c('div', {
      staticClass: "td score"
    }, [_c('text-fixed', {
      attrs: {
        "point": 1,
        "value": student.score,
        "mpcomid": '9_' + idx
      }
    })], 1), _vm._v(" "), _vm._l((student.score_info), function(score, idx2) {
      return _c('div', {
        key: idx2,
        staticClass: "td score"
      }, [_c('text-fixed', {
        attrs: {
          "point": 1,
          "value": score.score_overall,
          "mpcomid": '10_' + idx + '-' + idx2
        }
      })], 1)
    })], 2)
  }))])])]) : _vm._e()])]) : _vm._e()
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "td qs-no"
  }, [_vm._v("序号")]), _vm._v(" "), _c('div', {
    staticClass: "td qs-title"
  }, [_vm._v("题目名称")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "group-title mt10"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "f14 ml5"
  }, [_vm._v("试题得分情况（统计范围：已完成作业的学生）")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "td qs-no"
  }, [_vm._v("序号")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("满分值")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("平均分")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("得分率")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("最高分")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("最低分")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "group-title mt10"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "f14 ml5"
  }, [_vm._v("学生得分分布情况（统计范围：已完成作业的学生）")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "td flex1"
  }, [_vm._v("分数段")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("人数")]), _vm._v(" "), _c('div', {
    staticClass: "td flex1"
  }, [_vm._v("百分比")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "group-title  mt10"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "f14 ml5"
  }, [_vm._v("学生得分详情（数据显示范围：所有学生，含未完成）")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e45b0a0", esExports)
  }
}

/***/ })

},[209]);
//# sourceMappingURL=main.js.map