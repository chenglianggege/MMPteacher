require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(341);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f669db80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(344);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(342)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f669db80"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f669db80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/studentAnswer/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f669db80", Component.options)
  } else {
    hotAPI.reload("data-v-f669db80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 342:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_mainMixin_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      answers: [],
      playUrl: '',
      onLoading: false
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_mainMixin_js__["a" /* default */]],
  components: {},
  watch: {},
  methods: {
    audioPlay: function audioPlay(playUrl) {
      if (this.playUrl === playUrl) {
        this.player.stop();
        this.playUrl = '';
        return;
      }
      this.onLoading = true;
      this.playUrl = playUrl;
      console.log('https://' + playUrl + '.mp3?r=' + Math.random());
      this.player.src = 'https://' + playUrl + '.mp3?r=' + Math.random();
    }
  },

  onLoad: function onLoad() {
    var query = this.$root.$mp.query;
    var examId = query.hasOwnProperty('examId') ? query.examId : 0;
    var itemId = query.hasOwnProperty('itemId') ? query.itemId : 0;
    var studentScore = wx.getStorageSync('answer_' + examId) || [];
    var answers = [];
    // 题目
    for (var i in studentScore) {
      var studentAnswers = studentScore[i];
      for (var j in studentAnswers) {
        var studentAnswer = studentAnswers[j];
        for (var k in studentAnswer['detail']) {
          var detail = studentAnswer['detail'][k];
          if (itemId == detail['item_id']) {
            detail['answer_type'] = studentAnswer['answer_type'];
            answers.push(detail);
          }
        }
      }
    }

    answers.sort(function (objectN, objectM) {
      var valueN = objectN['exam_score'];
      var valueM = objectM['exam_score'];
      if (valueN < valueM) return 1;else if (valueN > valueM) return -1;else return 0;
    });

    this.answers = answers;

    var _this = this;
    this.player = wx.createInnerAudioContext();
    this.player.autoplay = true;
    this.player.onStop(function () {
      console.log('onStop');
    });
    this.player.onPlay(function () {
      _this.onLoading = false;
    });
    this.player.onError(function (e) {
      _this.onLoading = false;
      _this.playUrl = '';
      _this.$forceUpdate();
      console.log('onError', e);
    });
    this.player.onEnded(function () {
      console.log('onEnded');
      _this.playUrl = '';
      _this.$forceUpdate();
    });
  },
  onUnload: function onUnload() {
    this.answers = [];
    this.playUrl = '';
    this.player.destroy();
    this.onLoading = false;
  }
});

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.answers), function(answer, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tr",
      class: {
        'c-primary': _vm.playUrl == answer.user_answer
      },
      attrs: {
        "eventid": '0_' + idx
      },
      on: {
        "click": function($event) {
          _vm.audioPlay(answer.user_answer)
        }
      }
    }, [_c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(answer.student_name))]), _vm._v(" "), _c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(answer.exam_score))]), _vm._v(" "), _c('div', {
      staticClass: "td"
    }, [(answer.answer_type == 2) ? _c('icon', {
      staticClass: "iconfont",
      class: _vm.onLoading && _vm.playUrl == answer.user_answer ? 'icon-spin icon-loadc' : 'icon-laba'
    }) : _vm._e(), _vm._v(" "), (answer.answer_type != 2) ? _c('div', {
      class: answer.exam_score > 0 ? 'c-green' : 'c-red'
    }, [_vm._v(_vm._s(answer.user_answer))]) : _vm._e()], 1)])
  }))])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "td"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("排名")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("得分")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("学生作答")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f669db80", esExports)
  }
}

/***/ })

},[340]);
//# sourceMappingURL=main.js.map