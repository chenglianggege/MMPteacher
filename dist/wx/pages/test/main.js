require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(346);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a64801be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(349);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(347)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a64801be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a64801be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/test/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a64801be", Component.options)
  } else {
    hotAPI.reload("data-v-a64801be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 347:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_syncFun_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_js__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ec: {
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
            radius: [0, '60%'],
            data: [{
              value: 55,
              name: '北京'
            }, {
              value: 20,
              name: '武汉'
            }, {
              value: 10,
              name: '杭州'
            }, {
              value: 20,
              name: '广州'
            }, {
              value: 38,
              name: '上海'
            }],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 2, 2, 0.3)'
              }
            }
          }]
        }
      }
    };
  },


  components: {},
  watch: {},
  methods: {},

  onLoad: function onLoad() {},
  onUnload: function onUnload() {}
});

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('ec-canvas', {
    staticStyle: {
      "width": "300px",
      "height": "300px",
      "display": "block"
    },
    attrs: {
      "ec": _vm.ec,
      "id": "mychart-dom-bar",
      "canvas-id": "mychart-bar",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")]), _vm._v(" "), _c('div', [_vm._v("11111")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a64801be", esExports)
  }
}

/***/ })

},[345]);
//# sourceMappingURL=main.js.map