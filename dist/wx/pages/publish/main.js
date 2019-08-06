require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(322);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_392b26f6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(329);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-392b26f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_392b26f6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/publish/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-392b26f6", Component.options)
  } else {
    hotAPI.reload("data-v-392b26f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 323:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixin_cartMixin_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_selBtn__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_listFooter__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixin_mainMixin_js__ = __webpack_require__(3);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      paperList: [],
      grade: 7,
      moduleId: 4,
      qsType: 0,
      tbType: 4,
      qsTypeList: []

    };
  },
  onError: function onError(err) {
    console.log(err);
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixin_cartMixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixin_mainMixin_js__["a" /* default */]],
  components: {
    'sel-btn': __WEBPACK_IMPORTED_MODULE_5__components_selBtn__["a" /* default */],
    'list-footer': __WEBPACK_IMPORTED_MODULE_6__components_listFooter__["a" /* default */]
  },
  computed: {
    cartNum: function cartNum() {
      return this.qsNum();
    },
    duration: function duration() {
      return this.qsDuration();
    }
  },
  watch: {},
  methods: {
    setModule: function setModule(module) {
      this.moduleId = +module;
      wx.setStorageSync('moduleId', +module);
      this.initPage();
    },
    setGrade: function setGrade(grade) {
      this.grade = +grade;
      wx.setStorageSync('grade', +grade);
      this.initPage();
    },
    setTongbu: function setTongbu(tbType) {
      this.tbType = +tbType;
      wx.setStorageSync('tbType', +tbType);
      this.loadPaper();
    },
    setQsType: function setQsType(qsType) {
      this.qsType = qsType;
      wx.setStorageSync('qsType', qsType);
      this.loadPaper();
    },
    selectPaper: function selectPaper(paper_id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var paperDetail, items, paperQsNum, i, question, duration, qsScore, _i, info, j, qsInfoNum;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this2.cart.hasOwnProperty('p_' + paper_id)) {
                  _context.next = 3;
                  break;
                }

                _this2.removeCart(paper_id);
                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return _this2.loadPaperDetail(paper_id);

              case 5:
                paperDetail = _context.sent;
                items = [];
                paperQsNum = paperDetail.length;

                for (i in paperDetail) {
                  question = paperDetail[i];
                  duration = 0;
                  qsScore = 0;

                  for (_i in question.info) {
                    info = question.info[_i];

                    duration += +info.duration;
                    for (j in info.items) {
                      qsScore += +info.items[j].item_score;
                    }
                  }
                  duration += +question.audio_duration;
                  duration += question.item_num * 1000;
                  qsInfoNum = paperDetail[i]['info'].length;

                  items.push({ paperId: paper_id, paperQsNum: paperQsNum, qsId: question.qs_id, qsTitle: question.qs_title, qsInfoNum: qsInfoNum, qsInfoIds: [], duration: duration, qsScore: qsScore });
                }
                _this2.batchAdd(items);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    toDetail: function toDetail(id) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var paper, paperDetail;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                paper = _this3.paperList[id];
                _context2.next = 3;
                return _this3.loadPaperDetail(paper.paper_id);

              case 3:
                paperDetail = _context2.sent;

                wx.setStorageSync('paperDetail_' + paper.paper_id, paperDetail);
                wx.setStorageSync('paper_' + paper.paper_id, paper);
                wx.navigateTo({ url: '/pages/paper/main?paperId=' + paper.paper_id });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    initPage: function initPage() {
      // 同步
      if (this.moduleId === 4) {
        this.loadPaper();
      }
      //模拟
      if (this.moduleId === 2) {
        this.loadPaper();
      }
      //专项
      if (this.moduleId === 3) {
        this.loadQsType();
      }
    },
    loadPaper: function loadPaper() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var moduleId, ret;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                moduleId = _this4.moduleId;

                if (moduleId === 4) {
                  moduleId = _this4.tbType;
                }
                _this4.paperList = [];
                _context3.prev = 3;

                wx.showLoading({ title: '加载中...', mask: true });
                _context3.next = 7;
                return __WEBPACK_IMPORTED_MODULE_3__utils_syncFun_js__["a" /* default */].request({
                  url: _this4.globalData.apiBaseUrl + '/teacher/paper/query',
                  data: { token: _this4.globalData.token, grade: _this4.grade, paper_type: moduleId, qs_type: _this4.qsType },
                  method: 'GET'
                });

              case 7:
                ret = _context3.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context3.next = 12;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context3.abrupt("return");

              case 12:
                _this4.paperList = ret.data.retData ? ret.data.retData : [];
                _context3.next = 20;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](3);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log('e', _context3.t0);

              case 20:
                _context3.prev = 20;
                return _context3.finish(20);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[3, 15, 20, 22]]);
      }))();
    },
    loadQsType: function loadQsType() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var ret;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.paperList = [];
                _this5.qsTypeList = [];
                _context4.prev = 2;

                wx.showLoading({ title: '加载中...', mask: true });
                _context4.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3__utils_syncFun_js__["a" /* default */].request({
                  url: _this5.globalData.apiBaseUrl + '/teacher/paper/types',
                  data: { token: _this5.globalData.token, grade: _this5.grade },
                  method: 'GET'
                });

              case 6:
                ret = _context4.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context4.next = 11;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context4.abrupt("return");

              case 11:
                _this5.qsTypeList = ret.data.retData ? ret.data.retData : [];

                if (_this5.qsTypeList.length) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt("return");

              case 14:
                _this5.qsType = _this5.qsTypeList[0].qs_type_id;
                _this5.loadPaper();

                _context4.next = 22;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](2);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 22:
                _context4.prev = 22;
                return _context4.finish(22);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[2, 18, 22, 24]]);
      }))();
    },
    loadPaperDetail: function loadPaperDetail(paperId) {
      var _this = this;
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5(resolve, reject) {
          var ret;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;

                  wx.showLoading({ title: '获取试卷中...', mask: true });
                  _context5.next = 4;
                  return __WEBPACK_IMPORTED_MODULE_3__utils_syncFun_js__["a" /* default */].request({
                    url: _this.globalData.apiBaseUrl + '/teacher/paper/detail',
                    data: { token: _this.globalData.token, paper_id: paperId },
                    method: 'GET'
                  });

                case 4:
                  ret = _context5.sent;

                  wx.hideLoading();

                  if (!(ret.data.retCode !== 0)) {
                    _context5.next = 10;
                    break;
                  }

                  wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                  resolve(false);
                  return _context5.abrupt("return");

                case 10:
                  resolve(ret.data.retData);
                  _context5.next = 19;
                  break;

                case 13:
                  _context5.prev = 13;
                  _context5.t0 = _context5["catch"](0);

                  wx.hideLoading();
                  wx.showToast({ title: '网络通信错误！', icon: 'none' });
                  console.log('e', _context5.t0);
                  reject(_context5.t0);

                case 19:
                  _context5.prev = 19;
                  return _context5.finish(19);

                case 21:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[0, 13, 19, 21]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    toConfirm: function toConfirm() {
      if (this.qsNum() <= 0) {
        wx.showToast({ title: '还未选择发布的试题！', icon: 'none' });
        return;
      }
      wx.navigateTo({ url: '/pages/publishConfirm/main' });
    },
    toCart: function toCart() {
      if (this.qsNum() <= 0) {
        wx.showToast({ title: '还未选择发布的试题！', icon: 'none' });
        return;
      }
      wx.navigateTo({ url: '/pages/paper/main' });
    }
  },

  onLoad: function onLoad() {
    var grade = wx.getStorageSync('grade') ? wx.getStorageSync('grade') : 0;
    this.grade = grade ? grade : 7;
    var moduleId = wx.getStorageSync('moduleId');
    this.moduleId = moduleId ? moduleId : 4;
    var tbType = wx.getStorageSync('tbType');
    this.tbType = tbType ? tbType : 4;
    this.initPage();
    var _this = this;
    this.cartEvent = onfire.on('cart2', function () {
      var cart = wx.getStorageSync('cart');
      _this.cart = {};
      _this.cart = cart ? cart : {};
      _this.$forceUpdate();
    });
  },
  onUnload: function onUnload() {
    onfire.un('cart');
    onfire.un(this.cartEvent);
  }
});

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_selBtn_vue__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_629422aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_selBtn_vue__ = __webpack_require__(328);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(326)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-629422aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_selBtn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_629422aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_selBtn_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/selBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] selBtn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-629422aa", Component.options)
  } else {
    hotAPI.reload("data-v-629422aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 326:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'selBtn',
  props: {
    paper: {},
    cart: {}
  },
  computed: {
    selStat: function selStat() {
      var paperId = this.paper.paper_id;
      // 未选择
      if (!this.cart.hasOwnProperty('p_' + paperId)) {
        return 0;
      }
      var qsNum = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.cart['p_' + paperId]['qs']).length;
      // 半选
      if (qsNum < this.cart['p_' + paperId]['paperQsNum']) {
        return 1;
      }
      // 全选
      return 2;
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    click: function click() {
      this.$emit('click', this.paper.paper_id);
    }
  }
});

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "weui-btn list-btn-select ",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.click
    }
  }, [_vm._v("\n  " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-629422aa", esExports)
  }
}

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "groups"
  }, [_c('div', {
    staticClass: "item-group"
  }, [_c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.grade === 7
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.setGrade(7)
      }
    }
  }, [_vm._v("七年级")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.grade === 8
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.setGrade(8)
      }
    }
  }, [_vm._v("八年级")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.grade === 9
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.setGrade(9)
      }
    }
  }, [_vm._v("九年级")])]), _vm._v(" "), _c('div', {
    staticClass: "item-group"
  }, [_c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.moduleId === 4
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.setModule(4)
      }
    }
  }, [_vm._v("同步跟读")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.moduleId === 3
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.setModule(3)
      }
    }
  }, [_vm._v("听说专项")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.moduleId === 2
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.setModule(2)
      }
    }
  }, [_vm._v("模拟试卷")])]), _vm._v(" "), (_vm.moduleId === 3) ? _c('div', {
    staticClass: "item-group"
  }, _vm._l((_vm.qsTypeList), function(item, index) {
    return _c('div', {
      key: item.qs_type_id,
      staticClass: "item",
      class: {
        'item-select': _vm.qsType == item.qs_type_id
      },
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.setQsType(item.qs_type_id)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.qs_type_name) + "\n      ")])
  })) : _vm._e(), _vm._v(" "), (_vm.moduleId === 4) ? _c('div', {
    staticClass: "item-group"
  }, [_c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.tbType === 4
    },
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.setTongbu(4)
      }
    }
  }, [_vm._v("单词跟读")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      'item-select': _vm.tbType === 5
    },
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.setTongbu(5)
      }
    }
  }, [_vm._v("课文跟读")])]) : _vm._e()]), _vm._v(" "), _c('scroll-div', {
    staticClass: "list-group",
    attrs: {
      "scroll-y": "",
      "enable-back-to-top": "",
      "mpcomid": '2'
    }
  }, [_vm._l((_vm.paperList), function(item, index) {
    return _c('div', {
      key: item.paper_id,
      staticClass: "list-item"
    }, [_c('text', {
      staticClass: "list-content"
    }, [_vm._v(_vm._s(item.paper_title))]), _vm._v(" "), _c('div', {
      staticClass: "list-option"
    }, [_c('text', {
      staticClass: "list-btn-detail c-primary",
      attrs: {
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(index)
        }
      }
    }, [_vm._v("详情")]), _vm._v(" "), _c('sel-btn', {
      attrs: {
        "cart": _vm.cart,
        "paper": item,
        "eventid": '10_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": _vm.selectPaper
      }
    })], 1)])
  }), _vm._v(" "), _c('div', {
    staticClass: "mt20"
  }, [_c('list-footer', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "footer-bar"
  }, [_c('div', {
    staticClass: "clear-all bar-item",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.clearCart
    }
  }, [_c('icon', {
    staticClass: "iconfont icon-ziyuan ic-clear-all"
  }), _vm._v("清空试题")], 1), _vm._v(" "), _c('div', {
    staticClass: "qs-num bar-item",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": _vm.toCart
    }
  }, [_vm._v("共" + _vm._s(_vm.cartNum) + "题")]), _vm._v(" "), _c('div', {
    staticClass: "to-publish bar-item",
    attrs: {
      "eventid": '13'
    },
    on: {
      "click": _vm.toConfirm
    }
  }, [_c('div', {
    staticClass: "mr10"
  }, [_c('div', {
    staticClass: "title1"
  }, [_vm._v("布置作业")]), _vm._v(" "), _c('div', {
    staticClass: "title2"
  }, [_vm._v("预计" + _vm._s(_vm.duration) + "分钟完成")])]), _vm._v(" "), _c('icon', {
    staticClass: "iconfont icon-icnext ic-to-publish"
  })], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-392b26f6", esExports)
  }
}

/***/ })

},[321]);
//# sourceMappingURL=main.js.map