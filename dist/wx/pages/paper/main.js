require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_cartMixin__ = __webpack_require__(35);
var onfire = __webpack_require__(20).onfire;


/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad() {
    //console.log(this.showDetail, this.question.info)
    var allItems = [];
    for (var i in this.question.info) {
      allItems.push(this.question.info[i]['info_id']);
    }
    this.checkedInfos = [];
    var paperId = this.question.paper_id;
    var qsId = this.question.qs_id;
    if (this.checkQs(paperId, qsId)) {
      this.checkedInfos = this.cart['p_' + paperId]['qs']['q_' + qsId]['infoIds'];
    } else {
      this.checkedInfos = allItems;
    }
    //console.log(this.checkedInfos)
    var _this = this;
    /*
    this.stopPlayEvent = onfire.on('stopPlay', function (){
      _this.playUrl = ''
      _this.$forceUpdate()
    })
    */
    this.cartEvent = onfire.on('cart', function () {
      var cart = wx.getStorageSync('cart');
      _this.cart = {};
      _this.cart = cart ? cart : {};
      _this.$forceUpdate();
    });
    this.STATIC_URL = this.globalData.paperBaseUrl;

    this.player = wx.createInnerAudioContext();
    this.player.autoplay = true;
    this.player.onStop(function () {
      console.log('onStop');
      //_this.playUrl = ''
      //_this.$forceUpdate()
    });
    this.player.onEnded(function () {
      console.log('onEnded');
      _this.playUrl = '';
      _this.$forceUpdate();
    });
    this.player.onPlay(function () {
      console.log('onPlay');
    });
    this.player.onError(function (res) {
      console.log('onError', res);
    });
  },
  onUnload: function onUnload() {
    this.player.destroy();
    //onfire.un('stopPlay');
    //onfire.un(this.stopPlayEvent);
    onfire.un('cart');
    onfire.un(this.cartEvent);
    //this.$data = {}
    //unload时要清除下数据 ----！！！巨坑！！！！
    this.question = {};
    this.showDetail = false;
    this.showCart = false;
    this.studentAnswer = {};
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_cartMixin__["a" /* default */]],
  props: {
    question: {},
    showCart: {},
    studentAnswer: {}
  },
  data: function data() {
    return {
      showDetail: false,
      playUrl: '',
      STATIC_URL: '',
      options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      checkedInfos: []
    };
  },

  computed: {
    selStat: function selStat() {
      var paperId = this.question.paper_id;
      var qsId = this.question.qs_id;
      return this.checkQs(paperId, qsId);
    },
    showAnswer: function showAnswer() {
      return this.question.hasOwnProperty('student_score');
    }
  },
  methods: {
    toggleDetail: function toggleDetail() {
      this.player.stop();
      this.showDetail = !this.showDetail;
    },
    checkboxChange: function checkboxChange(e) {
      console.log('e', e);
      this.checkedInfos = e.mp.detail.value;
    },
    selectQs: function selectQs() {
      var paperId = this.question.paper_id;
      var qsId = this.question.qs_id;
      console.log('paperId, qsId', paperId, qsId);
      if (this.checkQs(paperId, qsId)) {
        this.removeCart(paperId, qsId);
        return;
      }
      var paper = this.$parent.paper;
      var qsNum = this.$parent.paperDetail.length;
      var duration = 0;
      var qsScore = 0;
      for (var i in this.question.info) {
        var info = this.question.info[i];
        if (this.checkedInfos.length && this.checkedInfos.indexOf(info.info_id) >= 0) {
          duration += +info.duration;
          for (var j in info.items) {
            qsScore += +info.items[j].item_score;
          }
        }
      }
      duration += +this.question.audio_duration;
      duration += this.question.item_num * 1000;
      // 试卷ID ，试卷题目数量， 题目ID， 题目小题IDs， 题目小题总数量
      this.addCart(paperId, qsNum, qsId, paper.paper_title, this.question.info.length, this.checkedInfos, duration, qsScore);
    },
    audioPlay: function audioPlay(playUrl) {
      if (this.playUrl === playUrl) {
        this.player.stop();
        this.playUrl = '';
        return;
      }
      this.playUrl = playUrl;
      this.player.src = this.globalData.paperBaseUrl + playUrl + '?r=' + Math.random();
    },
    toAnswer: function toAnswer(itemId) {
      //console.log('itemId', itemId)
      var examId = this.$parent.examId;
      if (this.showAnswer && examId) {
        wx.setStorageSync('answer_' + examId, this.question.student_score);
        wx.navigateTo({ url: '/pages/studentAnswer/main?itemId=' + itemId + '&examId=' + examId });
      }
    }
  }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(220);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3819d633_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(315);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3819d633"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3819d633_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/paper/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3819d633", Component.options)
  } else {
    hotAPI.reload("data-v-3819d633", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_question_qType1__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_question_qType3__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_question_qType4__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_question_qType5__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_question_qType9__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_question_qType12__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_question_qType13__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_question_qType16__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_question_qType17__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_question_qType18__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_question_qType21__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_question_qType26__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_question_qType37__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_question_qType38__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_question_qType40__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_question_qType41__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_question_qType42__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_question_qType1901__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_listFooter__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mixin_mainMixin_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mixin_cartMixin_js__ = __webpack_require__(35);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      paperId: 0,
      examId: 0,
      paper: {},
      paperDetail: []
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_22__mixin_mainMixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_23__mixin_cartMixin_js__["a" /* default */]],
  components: {
    qtype1: __WEBPACK_IMPORTED_MODULE_3__components_question_qType1__["a" /* default */],
    qtype3: __WEBPACK_IMPORTED_MODULE_4__components_question_qType3__["a" /* default */],
    qtype4: __WEBPACK_IMPORTED_MODULE_5__components_question_qType4__["a" /* default */],
    qtype5: __WEBPACK_IMPORTED_MODULE_6__components_question_qType5__["a" /* default */],
    qtype9: __WEBPACK_IMPORTED_MODULE_7__components_question_qType9__["a" /* default */],
    qtype12: __WEBPACK_IMPORTED_MODULE_8__components_question_qType12__["a" /* default */],
    qtype13: __WEBPACK_IMPORTED_MODULE_9__components_question_qType13__["a" /* default */],
    qtype16: __WEBPACK_IMPORTED_MODULE_10__components_question_qType16__["a" /* default */],
    qtype17: __WEBPACK_IMPORTED_MODULE_11__components_question_qType17__["a" /* default */],
    qtype18: __WEBPACK_IMPORTED_MODULE_12__components_question_qType18__["a" /* default */],
    qtype21: __WEBPACK_IMPORTED_MODULE_13__components_question_qType21__["a" /* default */],
    qtype26: __WEBPACK_IMPORTED_MODULE_14__components_question_qType26__["a" /* default */],
    qtype38: __WEBPACK_IMPORTED_MODULE_16__components_question_qType38__["a" /* default */],
    qtype37: __WEBPACK_IMPORTED_MODULE_15__components_question_qType37__["a" /* default */],
    qtype40: __WEBPACK_IMPORTED_MODULE_17__components_question_qType40__["a" /* default */],
    qtype41: __WEBPACK_IMPORTED_MODULE_18__components_question_qType41__["a" /* default */],
    qtype42: __WEBPACK_IMPORTED_MODULE_19__components_question_qType42__["a" /* default */],
    qtype1901: __WEBPACK_IMPORTED_MODULE_20__components_question_qType1901__["a" /* default */],
    'list-footer': __WEBPACK_IMPORTED_MODULE_21__components_listFooter__["a" /* default */]
  },
  computed: {
    cartNum: function cartNum() {
      return this.qsNum();
    },
    duration: function duration() {
      return this.qsDuration();
    },
    score: function score() {
      return this.qsScore();
    }
  },
  methods: {
    loadCachePaper: function loadCachePaper(paperId) {
      this.paperId = paperId;
      this.paper = wx.getStorageSync('paper_' + paperId);
      wx.setNavigationBarTitle({ title: this.paper.paper_title });
      this.paperDetail = wx.getStorageSync('paperDetail_' + paperId);
    },
    loadCartPaper: function loadCartPaper() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var cart, question_ids, i, paper, j, qs, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cart = wx.getStorageSync('cart') || {};
                question_ids = [];

                for (i in cart) {
                  paper = cart[i];

                  for (j in paper['qs']) {
                    qs = paper['qs'][j];

                    question_ids.push(qs.qsId);
                  }
                }

                if (question_ids.length) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return');

              case 5:
                _context.prev = 5;

                wx.showLoading({ title: '获取试卷中...', mask: true });
                _context.next = 9;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/paper/question-by-ids',
                  data: { token: _this.globalData.token, question_ids: question_ids.join(',') },
                  method: 'GET'
                });

              case 9:
                ret = _context.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context.next = 14;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 14:
                _this.paperDetail = ret.data.retData;
                wx.setNavigationBarTitle({ title: '预览' });
                _context.next = 23;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context['catch'](5);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log('e', _context.t0);

              case 23:
                _context.prev = 23;
                return _context.finish(23);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[5, 18, 23, 25]]);
      }))();
    },
    loadExamPaper: function loadExamPaper(examId) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.examId = examId;
                _context2.prev = 1;

                wx.showLoading({ title: '获取试卷中...', mask: true });
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/teacher/homework/paper',
                  data: { token: _this2.globalData.token, exam_id: examId },
                  method: 'GET'
                });

              case 5:
                ret = _context2.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 10;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 10:
                _this2.paperDetail = ret.data.retData;
                wx.setNavigationBarTitle({ title: '内容讲评' });

                _context2.next = 19;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](1);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });
                console.log('e', _context2.t0);

              case 19:
                _context2.prev = 19;
                return _context2.finish(19);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 14, 19, 21]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    this.paper = {};
    this.paperDetail = {};
    var query = this.$root.$mp.query;
    var paperId = query.hasOwnProperty('paperId') ? query.paperId : 0;
    if (paperId) {
      this.loadCachePaper(paperId);
      return;
    }
    var examId = query.hasOwnProperty('examId') ? query.examId : 0;
    if (examId) {
      this.loadExamPaper(examId);
      return;
    }
    this.loadCartPaper();
  },
  onUnload: function onUnload() {
    this.paperId = 0;
    this.examId = 0;
    this.paper = {};
    this.paperDetail = {};
    wx.removeStorage({ key: 'paper_' + this.paperId });
    wx.removeStorage({ key: 'paperDetail_' + this.paperId });
  }
});

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType1_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1cd13037_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType1_vue__ = __webpack_require__(238);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(224)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cd13037"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1cd13037_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType1_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cd13037", Component.options)
  } else {
    hotAPI.reload("data-v-1cd13037", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 224 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType1',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '2_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_vm._v("\n            " + _vm._s(_vm.options[index]) + "."), _c('span', {
          staticClass: "f14"
        }, [_vm._v(" " + _vm._s(answer.answer_content) + " ")]), _vm._v(" "), (answer.source_content) ? _c('img', {
          staticClass: "option-img",
          attrs: {
            "mode": "aspectFit",
            "src": _vm.STATIC_URL + answer.source_content
          }
        }) : _vm._e(), _vm._v(" "), _c('icon', {
          staticClass: "iconfont",
          class: answer.answer_is_right == 1 ? 'icon-check' : 'icon-close'
        })], 1)
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    }))
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1cd13037", esExports)
  }
}

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType3_vue__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1ced5f39_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType3_vue__ = __webpack_require__(242);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(240)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ced5f39"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType3_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1ced5f39_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType3_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType3.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType3.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ced5f39", Component.options)
  } else {
    hotAPI.reload("data-v-1ced5f39", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 240 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType3',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n        ")]), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '2_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_vm._v("\n            " + _vm._s(_vm.options[index]) + "."), _c('span', {
          staticClass: "f12"
        }, [_vm._v(" " + _vm._s(answer.answer_content) + " ")]), _vm._v(" "), (answer.source_content) ? _c('img', {
          staticClass: "option-img",
          attrs: {
            "mode": "aspectFit",
            "src": _vm.STATIC_URL + answer.source_content
          }
        }) : _vm._e(), _vm._v(" "), _c('icon', {
          staticClass: "iconfont",
          class: answer.answer_is_right == 1 ? 'icon-check' : 'icon-close'
        })], 1)
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1ced5f39", esExports)
  }
}

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType4_vue__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1cfb76ba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType4_vue__ = __webpack_require__(246);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cfb76ba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType4_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1cfb76ba_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType4_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType4.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType4.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cfb76ba", Component.options)
  } else {
    hotAPI.reload("data-v-1cfb76ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 244 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType4',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          短文录音："), (info.source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), (info.info_content_img) ? _c('img', {
      staticClass: "info-img",
      attrs: {
        "mode": "aspectFit",
        "src": _vm.STATIC_URL + info.info_content_img
      }
    }) : _vm._e(), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_vm._v("\n            " + _vm._s(_vm.options[index]) + "."), _c('span', {
          staticClass: "f12"
        }, [_vm._v(" " + _vm._s(answer.answer_content) + " ")]), _vm._v(" "), (answer.source_content) ? _c('img', {
          staticClass: "option-img",
          attrs: {
            "mode": "aspectFit",
            "src": _vm.STATIC_URL + answer.source_content
          }
        }) : _vm._e(), _vm._v(" "), _c('icon', {
          staticClass: "iconfont",
          class: answer.answer_is_right == 1 ? 'icon-check' : 'icon-close'
        })], 1)
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1cfb76ba", esExports)
  }
}

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType5_vue__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d098e3b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType5_vue__ = __webpack_require__(250);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(248)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d098e3b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType5_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d098e3b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType5_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType5.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType5.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d098e3b", Component.options)
  } else {
    hotAPI.reload("data-v-1d098e3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType5',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '2_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()])
    }))
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d098e3b", esExports)
  }
}

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType9_vue__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d41ec3f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType9_vue__ = __webpack_require__(254);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d41ec3f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType9_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d41ec3f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType9_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType9.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType9.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d41ec3f", Component.options)
  } else {
    hotAPI.reload("data-v-1d41ec3f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 252 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType9',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n          "), (info.source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v("问题" + _vm._s(itemIdx + 1) + "：" + _vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d41ec3f", esExports)
  }
}

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType12_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d6c800b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType12_vue__ = __webpack_require__(258);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d6c800b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType12_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d6c800b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType12_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType12.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType12.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d6c800b", Component.options)
  } else {
    hotAPI.reload("data-v-7d6c800b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 256 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType9',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n          "), (info.source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d6c800b", esExports)
  }
}

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType13_vue__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d7a978c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType13_vue__ = __webpack_require__(262);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d7a978c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType13_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d7a978c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType13_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType13.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType13.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d7a978c", Component.options)
  } else {
    hotAPI.reload("data-v-7d7a978c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 260 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType13',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '2_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()])
    }))
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d7a978c", esExports)
  }
}

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType16_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7da4de0f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType16_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7da4de0f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType16_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7da4de0f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType16_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType16.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType16.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7da4de0f", Component.options)
  } else {
    hotAPI.reload("data-v-7da4de0f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 264 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType5',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '2_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()])
    }))
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7da4de0f", esExports)
  }
}

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType17_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7db2f590_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType17_vue__ = __webpack_require__(270);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(268)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7db2f590"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType17_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7db2f590_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType17_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType17.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType17.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7db2f590", Component.options)
  } else {
    hotAPI.reload("data-v-7db2f590", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 268 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType9',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n          "), (info.source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7db2f590", esExports)
  }
}

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType18_vue__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7dc10d11_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType18_vue__ = __webpack_require__(274);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(272)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dc10d11"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType18_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7dc10d11_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType18_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType18.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType18.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dc10d11", Component.options)
  } else {
    hotAPI.reload("data-v-7dc10d11", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 272 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType9',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n          "), (info.source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7dc10d11", esExports)
  }
}

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType21_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f134129_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType21_vue__ = __webpack_require__(278);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f134129"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType21_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f134129_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType21_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType21.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType21.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f134129", Component.options)
  } else {
    hotAPI.reload("data-v-7f134129", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 276 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType9',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n          "), (info.source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v("问题" + _vm._s(itemIdx + 1) + "：" + _vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f134129", esExports)
  }
}

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType26_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f59b6ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType26_vue__ = __webpack_require__(282);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(280)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f59b6ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType26_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f59b6ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType26_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType26.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType26.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f59b6ae", Component.options)
  } else {
    hotAPI.reload("data-v-7f59b6ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 280 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType9',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content ? info.info_content : '') + "\n          "), (info.info_content_source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.info_content_source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.info_content_source_content)
        }
      }
    }) : _vm._e()], 1), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v("问题" + _vm._s(infoIdx + 1) + "：" + _vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f59b6ae", esExports)
  }
}

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType37_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fdc6b264_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType37_vue__ = __webpack_require__(286);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fdc6b264"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType37_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fdc6b264_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType37_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType37.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType37.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdc6b264", Component.options)
  } else {
    hotAPI.reload("data-v-fdc6b264", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 284 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType38',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, info_idx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [(info_idx == 0) ? _c('div', [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n            " + _vm._s(info.info_content) + "\n          ")]), _vm._v(" "), (info.info_content_img) ? _c('img', {
      staticClass: "info-img",
      attrs: {
        "src": _vm.STATIC_URL + info.info_content_img
      }
    }) : _vm._e(), _vm._v(" "), _vm._l((info.items), function(item, index1) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (item.source_content),
          expression: "item.source_content"
        }],
        staticClass: "horn-icon",
        attrs: {
          "data-src": item.source_content,
          "eventid": '2_' + info_idx + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.audioPlay($event)
          }
        }
      })]), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("填空" + _vm._s(index1 + 1) + "：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + info_idx + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2) : _vm._e(), _vm._v(" "), (info_idx == 1) ? _c('div', [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n            " + _vm._s(info.info_content) + "\n          ")]), _vm._v(" "), _vm._l((info.items), function(item, index2) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (item.source_content),
          expression: "item.source_content"
        }],
        staticClass: "horn-icon",
        attrs: {
          "data-src": item.source_content,
          "eventid": '4_' + info_idx + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.audioPlay($event)
          }
        }
      })]), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '5_' + info_idx + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2) : _vm._e(), _vm._v(" "), (info_idx == 2) ? _c('div', [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n            " + _vm._s(info.info_content) + "\n          ")]), _vm._v(" "), _vm._l((info.items), function(item, index3) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content ? item.item_content + '. ' : '问题' + (index3 + 1) + '. ')), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (item.source_content),
          expression: "item.source_content"
        }],
        staticClass: "horn-icon",
        attrs: {
          "data-src": item.source_content,
          "eventid": '6_' + info_idx + '-' + index3
        },
        on: {
          "click": function($event) {
            _vm.audioPlay($event)
          }
        }
      })]), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '7_' + info_idx + '-' + index3
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2) : _vm._e()])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fdc6b264", esExports)
  }
}

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType38_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fdaa8362_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType38_vue__ = __webpack_require__(290);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fdaa8362"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType38_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fdaa8362_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType38_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType38.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType38.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdaa8362", Component.options)
  } else {
    hotAPI.reload("data-v-fdaa8362", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 288 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType38',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v("请听音频\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '2_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_c('span', [_vm._v("评分参考文本：" + _vm._s(answer.answer_content))])])
      }), _vm._v(" "), _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    }))
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fdaa8362", esExports)
  }
}

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType40_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fb224a34_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType40_vue__ = __webpack_require__(298);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fb224a34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType40_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fb224a34_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType40_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType40.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType40.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb224a34", Component.options)
  } else {
    hotAPI.reload("data-v-fb224a34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 292 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_checkBox__ = __webpack_require__(294);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType40',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]],
  data: function data() {
    return {};
  },

  components: {
    checkbox2: __WEBPACK_IMPORTED_MODULE_2__components_checkBox__["a" /* default */]
  },
  onLoad: function onLoad() {}
});

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_checkBox_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_70e48e2b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_checkBox_vue__ = __webpack_require__(297);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-70e48e2b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_checkBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_70e48e2b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_checkBox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/checkBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70e48e2b", Component.options)
  } else {
    hotAPI.reload("data-v-70e48e2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 295 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
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
  name: 'checkBox',
  props: {
    value: {},
    checkedValues: {},
    disabled: {},
    showCart: {},
    item: {},
    playUrl: {}
  },
  computed: {
    isChecked: function isChecked() {
      if (!this.checkedValues.length) {
        return true;
      }
      return this.checkedValues.indexOf(this.value) != -1;
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    audioPlay: function audioPlay(src) {
      this.$parent.audioPlay(src);
    },
    toAnswer: function toAnswer(item_id, src) {
      if (this.$parent.showAnswer) {
        this.$parent.toAnswer(item_id);
      } else {
        this.$parent.audioPlay(src);
      }
    }
  },
  onUnload: function onUnload() {
    this.item = {};
    this.playUrl = '';
    this.checkedValues = [];
    this.value = '';
  }
});

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isChecked || _vm.showCart) ? _c('div', {
    staticClass: "checkbox-item",
    class: {
      'onplay': _vm.playUrl == _vm.item.source_content
    }
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('checkbox', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    attrs: {
      "value": _vm.value,
      "checked": _vm.isChecked,
      "disabled": _vm.disabled || !_vm.showCart
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "f12",
    staticStyle: {
      "min-width": "50px"
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toAnswer(_vm.item.item_id, _vm.item.source_content)
      }
    }
  }, [_vm._v(_vm._s(_vm.item.item_content))])], 1), _vm._v(" "), (_vm.item.source_content) ? _c('icon', {
    staticClass: "iconfont icon-laba",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.audioPlay(_vm.item.source_content)
      }
    }
  }) : _vm._e()], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70e48e2b", esExports)
  }
}

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showAnswer),
      expression: "showAnswer"
    }],
    staticClass: "f14 c-primary"
  }, [_vm._v("点击单词查看答题结果")]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, [_c('checkbox-group', {
    staticClass: "check-group flex-row",
    attrs: {
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.checkboxChange
    }
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "item-content"
      }, [_c('checkbox2', {
        attrs: {
          "value": info.info_id,
          "checkedValues": _vm.checkedInfos,
          "disabled": _vm.selStat > 0,
          "item": item,
          "showCart": _vm.showCart,
          "playUrl": _vm.playUrl,
          "mpcomid": '0_' + infoIdx + '-' + itemIdx
        }
      })], 1)
    }))
  }))], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb224a34", esExports)
  }
}

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType41_vue__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fb061b32_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType41_vue__ = __webpack_require__(306);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(300)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fb061b32"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType41_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fb061b32_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType41_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType41.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType41.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb061b32", Component.options)
  } else {
    hotAPI.reload("data-v-fb061b32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 300 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_checkBox2__ = __webpack_require__(302);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType40',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]],
  data: function data() {
    return {};
  },

  components: {
    checkbox2: __WEBPACK_IMPORTED_MODULE_2__components_checkBox2__["a" /* default */]
  },
  onLoad: function onLoad() {}
});

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_checkBox2_vue__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a8763ed2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_checkBox2_vue__ = __webpack_require__(305);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(303)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a8763ed2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_checkBox2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a8763ed2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_checkBox2_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/checkBox2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkBox2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8763ed2", Component.options)
  } else {
    hotAPI.reload("data-v-a8763ed2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 303 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
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
  name: 'checkBox2',
  props: {
    value: {},
    checkedValues: {},
    disabled: {},
    showCart: {},
    item: {},
    playUrl: {}
  },
  computed: {
    isChecked: function isChecked() {
      if (!this.checkedValues.length) {
        return true;
      }
      return this.checkedValues.indexOf(this.value) != -1;
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    audioPlay: function audioPlay(src) {
      this.$parent.audioPlay(src);
    },
    toAnswer: function toAnswer(item_id, src) {
      if (this.$parent.showAnswer) {
        this.$parent.toAnswer(item_id);
      } else {
        this.$parent.audioPlay(src);
      }
    }
  },
  onUnload: function onUnload() {
    this.item = {};
    this.playUrl = '';
  }
});

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isChecked || _vm.showCart) ? _c('div', {
    staticClass: "checkbox-item",
    class: {
      'onplay': _vm.playUrl == _vm.item.source_content
    }
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('checkbox', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    attrs: {
      "value": _vm.value,
      "checked": _vm.isChecked,
      "disabled": _vm.disabled || !_vm.showCart
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "f12",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toAnswer(_vm.item.item_id, _vm.item.source_content)
      }
    }
  }, [_vm._v(_vm._s(_vm.item.item_content))])], 1), _vm._v(" "), (_vm.item.source_content) ? _c('icon', {
    staticClass: "iconfont icon-laba",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.audioPlay(_vm.item.source_content)
      }
    }
  }) : _vm._e()], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a8763ed2", esExports)
  }
}

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showAnswer),
      expression: "showAnswer"
    }],
    staticClass: "f14 c-primary"
  }, [_vm._v("点击句子查看答题结果")]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, [_c('checkbox-group', {
    staticClass: "check-group flex-column",
    attrs: {
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.checkboxChange
    }
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "item-content"
      }, [_c('checkbox2', {
        attrs: {
          "value": info.info_id,
          "checkedValues": _vm.checkedInfos,
          "disabled": _vm.selStat > 0,
          "item": item,
          "showCart": _vm.showCart,
          "playUrl": _vm.playUrl,
          "mpcomid": '0_' + infoIdx + '-' + itemIdx
        }
      })], 1)
    }))
  }))], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb061b32", esExports)
  }
}

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType42_vue__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fae9ec30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType42_vue__ = __webpack_require__(310);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(308)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fae9ec30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType42_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fae9ec30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType42_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType42.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType42.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fae9ec30", Component.options)
  } else {
    hotAPI.reload("data-v-fae9ec30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 308 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType42',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]]
});

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [_c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(info.info_content) + "\n        ")]), _vm._v(" "), (info.info_content_source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.info_content_source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.info_content_source_content)
        }
      }
    }) : _vm._e(), _vm._v(" "), (_vm.question.info[0].info_content_img && infoIdx == 0) ? _c('img', {
      staticClass: "option-img picimg_cl",
      attrs: {
        "mode": "aspectFit",
        "src": _vm.STATIC_URL + _vm.question.info[0].info_content_img
      }
    }) : _vm._e(), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [_c('div', {
        staticClass: "item-content"
      }, [_vm._v(_vm._s(item.item_content) + "\n            "), (item.source_content) ? _c('icon', {
        staticClass: "iconfont icon-laba",
        class: {
          'onplay': _vm.playUrl == item.source_content
        },
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.audioPlay(item.source_content)
          }
        }
      }) : _vm._e()], 1), _vm._v(" "), (infoIdx == 0) ? _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("第" + _vm._s(itemIdx + 1) + "题 题目满分：" + _vm._s(item.item_score) + "分 ")]) : _vm._e(), _vm._v(" "), (infoIdx == 1) ? _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分 ")]) : _vm._e(), _vm._v(" "), _vm._l((item.answers), function(answer, index) {
        return _c('div', {
          key: answer.answer_id,
          staticClass: "item-answer"
        }, [_vm._v("\n            " + _vm._s(_vm.options[index]) + "."), _c('span', {
          staticClass: "f12"
        }, [_vm._v(" " + _vm._s(answer.answer_content) + " ")]), _vm._v(" "), (answer.source_content) ? _c('img', {
          staticClass: "option-img",
          attrs: {
            "mode": "aspectFit",
            "src": _vm.STATIC_URL + answer.source_content
          }
        }) : _vm._e(), _vm._v(" "), _c('icon', {
          staticClass: "iconfont",
          class: answer.answer_is_right == 1 ? 'icon-check' : 'icon-close'
        })], 1)
      }), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '4_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()], 2)
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fae9ec30", esExports)
  }
}

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType1901_vue__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4615ab93_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType1901_vue__ = __webpack_require__(314);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(312)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4615ab93"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_qType1901_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4615ab93_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_qType1901_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/question/qType1901.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qType1901.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4615ab93", Component.options)
  } else {
    hotAPI.reload("data-v-4615ab93", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 312 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_question_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_question_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'qType3',
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_questionMixin__["a" /* default */]],
  computed: {
    weifangQusetion1: function weifangQusetion1() {
      try {
        return JSON.parse(this.question.info[0].info_content)[0].text;
      } catch (e) {}
    },
    weifangQusetion1a: function weifangQusetion1a() {
      try {
        return JSON.parse(this.question.info[0].info_content)[1].text;
      } catch (e) {}
    },
    weifangQusetion2: function weifangQusetion2() {
      try {
        return JSON.parse(this.question.info[1].info_content)[0].text;
      } catch (e) {}
    },
    weifangQusetion2a: function weifangQusetion2a() {
      try {
        return JSON.parse(this.question.info[1].info_content)[1].text;
      } catch (e) {}
    },
    weifangQusetion2b: function weifangQusetion2b() {
      try {
        return JSON.parse(this.question.info[1].info_content)[2].text;
      } catch (e) {}
    }
  }
});

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "question-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.question.qs_title))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCart),
      expression: "showCart"
    }],
    staticClass: "select-question"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('button', {
    staticClass: "weui-btn select-btn",
    class: {
      plain: !_vm.selStat
    },
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.selectQs
    }
  }, [_vm._v("\n        " + _vm._s(!_vm.selStat ? '选择' : (_vm.selStat === 1 ? '部分选' : '已选择')) + "\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "flex1 flex-center"
  }, [_c('text', {
    staticClass: "show-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toggleDetail
    }
  }, [_vm._v(_vm._s(_vm.showDetail ? '收起详情↑' : '查看详情↓'))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showCart || _vm.showDetail),
      expression: "!showCart || showDetail"
    }],
    staticClass: "question-detail"
  }, [_c('div', {
    staticClass: "question-subtitle"
  }, [_vm._v(_vm._s(_vm.question.qs_content))]), _vm._v(" "), _c('div', {
    staticClass: "question-prediv"
  }, _vm._l((_vm.question.info), function(info, infoIdx) {
    return _c('div', {
      key: info.info_id,
      staticClass: "qs-info"
    }, [(infoIdx == 0) ? _c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(_vm.weifangQusetion1) + "\n          "), _c('br'), _vm._v("\n          " + _vm._s(_vm.weifangQusetion1a) + "\n        ")], 1) : _vm._e(), _vm._v(" "), (infoIdx == 1) ? _c('div', {
      staticClass: "info-content"
    }, [_vm._v("\n          " + _vm._s(_vm.weifangQusetion2) + "\n          "), _c('br'), _vm._v("\n          " + _vm._s(_vm.weifangQusetion2a) + "\n          "), _c('br'), _vm._v("\n          " + _vm._s(_vm.weifangQusetion2b) + "\n        ")], 1) : _vm._e(), _vm._v(" "), (info.info_content_source_content) ? _c('icon', {
      staticClass: "iconfont icon-laba",
      class: {
        'onplay': _vm.playUrl == info.info_content_source_content
      },
      attrs: {
        "eventid": '2_' + infoIdx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(info.info_content_source_content)
        }
      }
    }) : _vm._e(), _vm._v(" "), (_vm.question.info[0].info_content_img && infoIdx == 0) ? _c('img', {
      staticClass: "option-img picimg_cl",
      attrs: {
        "mode": "aspectFit",
        "src": _vm.STATIC_URL + _vm.question.info[0].info_content_img
      }
    }) : _vm._e(), _vm._v(" "), _vm._l((info.items), function(item, itemIdx) {
      return _c('div', {
        key: item.item_id,
        staticClass: "items"
      }, [(infoIdx == 0) ? _c('div', {
        staticClass: "item-content"
      }, [_vm._v("\n              " + _vm._s('填空' + (itemIdx + 1) + ':   ' + item.item_content) + "\n          ")]) : _vm._e(), _vm._v(" "), (infoIdx == 1) ? _c('div', {
        staticClass: "item-content"
      }, [_vm._v("\n              " + _vm._s(item.item_content) + "\n          ")]) : _vm._e(), _vm._v(" "), (infoIdx == 1) ? _c('div', {
        staticClass: "item-answer"
      }, [_vm._v("准备时间：" + _vm._s(item.item_prepare_second) + "秒 答题时间：" + _vm._s(item.item_answer_second) + "秒 题目满分：" + _vm._s(item.item_score) + "分")]) : _vm._e(), _vm._v(" "), (_vm.showAnswer) ? _c('div', {
        staticClass: "item-answer c-primary",
        attrs: {
          "eventid": '3_' + infoIdx + '-' + itemIdx
        },
        on: {
          "click": function($event) {
            _vm.toAnswer(item.item_id)
          }
        }
      }, [_vm._v("查看学生回答→")]) : _vm._e()])
    })], 2)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4615ab93", esExports)
  }
}

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(!_vm.paperId && !_vm.examId) ? _c('div', {
    staticClass: "c-primary f14 ml5 mt10 cartInfo"
  }, [_c('span', {
    staticClass: "mr10"
  }, [_vm._v("题目数量：" + _vm._s(_vm.cartNum) + "题")]), _vm._v(" "), _c('span', {
    staticClass: "mr10"
  }, [_vm._v("总分：" + _vm._s(_vm.score) + "分")]), _vm._v(" "), _c('span', [_vm._v("预计时间：" + _vm._s(_vm.duration) + "分钟")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _vm._l((_vm.paperDetail), function(question, index) {
    return _c('div', {
      key: index,
      staticClass: "questions"
    }, [(question.qs_type == 1) ? _c('qtype1', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '0_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 3) ? _c('qtype3', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '1_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 4) ? _c('qtype4', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '2_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 5) ? _c('qtype5', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '3_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 9) ? _c('qtype9', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '4_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 12) ? _c('qtype12', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '5_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 13) ? _c('qtype13', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '6_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 16) ? _c('qtype16', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '7_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 17) ? _c('qtype17', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '8_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 18) ? _c('qtype18', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '9_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 21) ? _c('qtype21', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '10_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 26) ? _c('qtype26', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '11_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 37) ? _c('qtype37', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '12_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 38) ? _c('qtype38', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '13_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 40) ? _c('qtype40', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '14_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 41) ? _c('qtype41', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '15_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 42) ? _c('qtype42', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '16_' + index
      }
    }) : _vm._e(), _vm._v(" "), (question.qs_type == 1901) ? _c('qtype1901', {
      attrs: {
        "question": question,
        "showCart": _vm.paperId > 0,
        "mpcomid": '17_' + index
      }
    }) : _vm._e()], 1)
  }), _vm._v(" "), (!_vm.paperId) ? _c('list-footer', {
    attrs: {
      "mpcomid": '18'
    }
  }) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3819d633", esExports)
  }
}

/***/ })
],[219]);
//# sourceMappingURL=main.js.map