require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(331);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4a66e180_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(334);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(332)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a66e180"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4a66e180_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/publishConfirm/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a66e180", Component.options)
  } else {
    hotAPI.reload("data-v-4a66e180", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 332:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_date_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixin_mainMixin_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixin_cartMixin_js__ = __webpack_require__(35);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInfo: null,
      classList: [],
      finish_data: '',
      finish_time: '',
      start_data: '',
      start_time: '',
      submitForm: {
        start_type: '1',
        question_ids: [],
        finish_time: '',
        start_time: '',
        exam_title: '',
        class_id: [],
        exam_des: '',
        cart: []
      }
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixin_mainMixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixin_cartMixin_js__["a" /* default */]],
  components: {},
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
  watch: {
    start_data: function start_data() {
      this.submitForm.exam_title = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(this.start_data), 'MM.dd') + '听说作业';
    }
  },
  methods: {
    loadClassList: function loadClassList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var classList, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                wx.showLoading({
                  title: '加载中...',
                  mask: true
                });
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this.globalData.apiBaseUrl + '/teacher/sclass/list',
                  data: { token: _this.globalData.token },
                  method: 'GET'
                });

              case 4:
                classList = _context.sent;

                if (!(classList.data.retCode !== 0)) {
                  _context.next = 8;
                  break;
                }

                wx.showToast({ title: classList.data.retMsg, icon: 'none' });
                return _context.abrupt('return');

              case 8:
                classList = classList.data.retData;
                for (i in classList) {
                  if (classList[i].student_num > 0) {
                    classList[i].selected = true;
                  } else {
                    classList[i].selected = false;
                  }
                }
                _this.classList = classList;
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 17:
                _context.prev = 17;

                wx.hideLoading();
                return _context.finish(17);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 13, 17, 20]]);
      }))();
    },
    selClass: function selClass(classIdx) {
      this.classList[classIdx].selected = !this.classList[classIdx].selected;
    },
    selStartData: function selStartData(e) {
      console.log(e);
      this.start_data = e.mp.detail.value;
    },
    submitWork: function submitWork() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var submitForm, class_id, i, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                submitForm = _this2.submitForm;
                class_id = [];

                for (i in _this2.classList) {
                  if (_this2.classList[i].selected) {
                    class_id.push(_this2.classList[i].class_id);
                  }
                }
                submitForm.class_id = class_id;
                submitForm.finish_time = _this2.finish_data + ' ' + _this2.finish_time;
                submitForm.start_time = _this2.start_data + ' ' + _this2.start_time;

                _context2.prev = 6;

                wx.showLoading({ title: '发布中...', mask: true });
                _context2.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this2.globalData.apiBaseUrl + '/teacher/homework/publish?token=' + _this2.globalData.token,
                  data: submitForm,
                  method: 'POST'
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
                wx.removeStorageSync('cart');
                onfire.fire('cart');
                onfire.fire('cart2');
                wx.redirectTo({ url: '/pages/publishSuccess/main' });
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2['catch'](6);

                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 25:
                _context2.prev = 25;
                return _context2.finish(25);

              case 27:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[6, 21, 25, 27]]);
      }))();
    }
  },

  onLoad: function onLoad() {
    this.loadClassList();
    var cart = wx.getStorageSync('cart') || {};
    var question_ids = [];
    var sub_cart = {};
    for (var i in cart) {
      var paper = cart[i];
      for (var j in paper['qs']) {
        var qs = paper['qs'][j];
        question_ids.push(qs.qsId);
        sub_cart['qsId_' + qs.qsId] = { qsInfoIds: qs.infoIds, qsId: qs.qsId, duration: qs.duration, qsScore: qs.qsScore };
      }
    }
    this.submitForm.question_ids = question_ids;
    this.submitForm.cart = sub_cart;
    var start_data = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'yyyy-MM-dd');
    this.finish_data = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'yyyy-MM-dd');
    this.finish_time = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), '23:59');
    this.start_data = start_data;
    this.start_time = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(), 'hh:mm');
    this.submitForm.exam_title = Object(__WEBPACK_IMPORTED_MODULE_3__utils_date_js__["a" /* formatDate */])(new Date(start_data), 'MM.dd') + '听说作业';
  },
  onUnload: function onUnload() {
    this.submitForm = {
      start_type: '1',
      question_ids: [],
      finish_time: '',
      start_time: '',
      exam_title: '',
      class_id: [],
      exam_des: '',
      cart: []
    };
    this.finish_data = '';
    this.finish_time = '';
    this.start_data = '';
    this.start_time = '';
    this.classList = [];
  }
});

/***/ }),

/***/ 334:
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
    staticClass: "class-group"
  }, _vm._l((_vm.classList), function(item, classIdx) {
    return _c('button', {
      key: classIdx,
      staticClass: "weui-btn class-title",
      class: {
        plain: !item.selected
      },
      attrs: {
        "type": "primary",
        "disabled": item.student_num == 0,
        "eventid": '0_' + classIdx
      },
      on: {
        "click": function($event) {
          _vm.selClass(classIdx)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.class_name) + "(" + _vm._s(item.student_num) + "人)\n      ")])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("发布时间")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn class-title",
    class: {
      plain: !(_vm.submitForm.start_type == 1)
    },
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": function () { return this$1.submitForm.start_type = 1; }
    }
  }, [_vm._v("\n        立即开始\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn class-title",
    class: {
      plain: !(_vm.submitForm.start_type == 2)
    },
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": function () { return this$1.submitForm.start_type = 2; }
    }
  }, [_vm._v("\n        指定时间\n      ")])], 1)]), _vm._v(" "), (_vm.submitForm.start_type == 2) ? _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "form-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("指定时间")]), _vm._v(" "), _c('div', {
    staticClass: "sel-data"
  }, [_c('picker', {
    attrs: {
      "value": _vm.start_data,
      "mode": "date",
      "eventid": '3'
    },
    on: {
      "change": function (e) { return this$1.start_data = e.mp.detail.value; }
    }
  }, [_c('view', {
    staticClass: "picker f14"
  }, [_vm._v(_vm._s(_vm.start_data))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sel-time"
  }, [_c('picker', {
    attrs: {
      "value": _vm.start_time,
      "mode": "time",
      "eventid": '4'
    },
    on: {
      "change": function (e) { return this$1.start_time = e.mp.detail.value; }
    }
  }, [_c('view', {
    staticClass: "picker f14"
  }, [_vm._v(_vm._s(_vm.start_time))])])], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "eventid": '5'
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
      "eventid": '6'
    },
    on: {
      "change": function (e) { return this$1.finish_time = e.mp.detail.value; }
    }
  }, [_c('view', {
    staticClass: "picker f14"
  }, [_vm._v(_vm._s(_vm.finish_time))])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "exam-title"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.submitForm.exam_title),
      expression: "submitForm.exam_title"
    }],
    attrs: {
      "maxlength": "50",
      "type": "text",
      "value": _vm.submitForm.exam_title,
      "eventid": '7'
    },
    domProps: {
      "value": (_vm.submitForm.exam_title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.submitForm.exam_title = $event.target.value
      }
    }
  })])]), _vm._v(" "), (!_vm.paperId && !_vm.examId) ? _c('div', {
    staticClass: "flex-center c-primary f14 ml5 mt10 cartInfo"
  }, [_c('span', {
    staticClass: "mr10"
  }, [_vm._v("题目数量：" + _vm._s(_vm.cartNum) + "题")]), _vm._v(" "), _c('span', {
    staticClass: "mr10"
  }, [_vm._v("总分：" + _vm._s(_vm.score) + "分")]), _vm._v(" "), _c('span', [_vm._v("预计时间：" + _vm._s(_vm.duration) + "分钟")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex-center mt40"
  }, [_c('div', {
    staticClass: "to-publish",
    attrs: {
      "eventid": '8'
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
  }, [_vm._v("布置班级")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
     require("vue-hot-reload-api").rerender("data-v-4a66e180", esExports)
  }
}

/***/ })

},[330]);
//# sourceMappingURL=main.js.map