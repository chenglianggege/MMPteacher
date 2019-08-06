require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([22],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(155);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_25a54f50_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(158);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25a54f50"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_25a54f50_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/classDetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25a54f50", Component.options)
  } else {
    hotAPI.reload("data-v-25a54f50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 157:
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





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      classId: 0,
      classDetail: null,
      STATIC_URL: '',
      BIND_STATUS: { 1: '已绑卡', 2: '已过期', 3: '未绑定' }
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixin_mainMixin_js__["a" /* default */]],
  components: {},
  watch: {},
  methods: {
    editStudent: function editStudent(student) {
      var _this = this;
      wx.showActionSheet({
        itemList: ['重置密码', '修改备注姓名', '移出班级'],
        success: function success(res) {
          if (res.tapIndex === 0) {
            _this.resetStudentPassword(student);
          }
          if (res.tapIndex === 1) {
            _this.toEditStudent(student);
          }
          if (res.tapIndex === 2) {
            _this.removeStudent(student);
          }
        }
      });
    },
    resetStudentPassword: function resetStudentPassword(student) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var studentId, ok;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                studentId = student.student_id;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '重置密码',
                  content: '确认将该学生密码设置为默认值 123456吗？',
                  showCancel: true,
                  confirmColor: '#009efa'
                });

              case 3:
                ok = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    removeStudent: function removeStudent(student) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var studentId, ok, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                studentId = student.student_id;
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '移除班级',
                  content: '确认将该学生移出本班？',
                  showCancel: true,
                  confirmColor: '#009efa'
                });

              case 3:
                ok = _context2.sent;

                if (!ok.confirm) {
                  _context2.next = 24;
                  break;
                }

                _context2.prev = 5;

                wx.showLoading({ title: '删除中...', mask: true });
                _context2.next = 9;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this3.globalData.apiBaseUrl + '/teacher/sclass/remove?token=' + _this3.globalData.token,
                  data: { class_id: _this3.classId, student_id: studentId },
                  method: 'POST'
                });

              case 9:
                ret = _context2.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context2.next = 14;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context2.abrupt('return');

              case 14:
                _this3.getClassDetail();

                _context2.next = 22;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2['catch'](5);

                console.log(_context2.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 22:
                _context2.prev = 22;
                return _context2.finish(22);

              case 24:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[5, 17, 22, 24]]);
      }))();
    },
    toEditStudent: function toEditStudent(student) {
      wx.navigateTo({ url: '/pages/editStudent/main?' + 'studentId=' + student.student_id + '&studentName=' + student.student_name
      });
    },
    getClassDetail: function getClassDetail() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var ret, classDetail, students, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.classDetail = null;
                wx.showLoading({ title: '加载中...', mask: true });
                _context3.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this4.globalData.apiBaseUrl + '/teacher/sclass/detail',
                  data: { token: _this4.globalData.token, class_id: _this4.classId },
                  method: 'GET'
                });

              case 5:
                ret = _context3.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context3.next = 10;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context3.abrupt('return');

              case 10:
                classDetail = ret.data.retData ? ret.data.retData : null;
                students = classDetail.students ? classDetail.students : [];

                for (i in students) {
                  students[i].bindStatus = 1;
                  if (!students[i].expire_status) {
                    students[i].bindStatus = 3;
                    if (students[i].expire_time) {
                      students[i].bindStatus = 2;
                    }
                  }
                }

                students.sort(function (objectN, objectM) {
                  var valueN = objectN['bindStatus'];
                  var valueM = objectM['bindStatus'];
                  if (valueN < valueM) return 1;else if (valueN > valueM) return -1;else return 0;
                });

                classDetail.students = students;
                _this4.classDetail = classDetail;
                wx.setNavigationBarTitle({ title: _this4.classDetail.class_name });
                _context3.next = 24;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3['catch'](0);

                console.log(_context3.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 24:
                _context3.prev = 24;
                return _context3.finish(24);

              case 26:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[0, 19, 24, 26]]);
      }))();
    },
    toEditClass: function toEditClass() {
      wx.navigateTo({
        url: '/pages/editClassDetail/main?' + 'classId=' + this.classId + '&className=' + this.classDetail.class_name + '&classYear=' + this.classDetail.class_year + '&classGrade=' + this.classDetail.grade_id
      });
    },
    delClass: function delClass() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var ok, ret;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '确认删除',
                  content: '是否确认删除班级？',
                  showCancel: true,
                  confirmColor: '#009efa'
                });

              case 2:
                ok = _context4.sent;

                if (!ok.confirm) {
                  _context4.next = 25;
                  break;
                }

                _context4.prev = 4;

                wx.showLoading({ title: '删除中...', mask: true });
                _context4.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].request({
                  url: _this5.globalData.apiBaseUrl + '/teacher/sclass/del?token=' + _this5.globalData.token,
                  data: { class_id: _this5.classId },
                  method: 'POST'
                });

              case 8:
                ret = _context4.sent;

                wx.hideLoading();

                if (!(ret.data.retCode !== 0)) {
                  _context4.next = 13;
                  break;
                }

                wx.showToast({ title: ret.data.retMsg, icon: 'none' });
                return _context4.abrupt('return');

              case 13:
                _context4.next = 15;
                return __WEBPACK_IMPORTED_MODULE_2__utils_syncFun_js__["a" /* default */].showModal({
                  title: '删除成功',
                  content: ret.data.retMsg,
                  showCancel: false,
                  confirmColor: '#009efa'
                });

              case 15:
                wx.navigateBack({ delta: 1 });

                _context4.next = 23;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4['catch'](4);

                console.log(_context4.t0);
                wx.hideLoading();
                wx.showToast({ title: '网络通信错误！', icon: 'none' });

              case 23:
                _context4.prev = 23;
                return _context4.finish(23);

              case 25:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[4, 18, 23, 25]]);
      }))();
    },
    toAddStudent: function toAddStudent() {
      wx.navigateTo({ url: '/pages/addStudent/main?' + 'classId=' + this.classId });
    }
  },
  onShow: function onShow() {
    console.log('onShow');
    this.classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null;
    this.getClassDetail();
  },
  onLoad: function onLoad() {
    this.STATIC_URL = this.globalData.staticBaseUrl;
  },
  onUnload: function onUnload() {
    this.classId = 0;
    this.classDetail = null;
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.classDetail) ? _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "weui-btn btn",
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.toAddStudent
    }
  }, [_vm._v("添加学生")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn btn",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.toEditClass
    }
  }, [_vm._v("修改班级")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn btn",
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.delClass
    }
  }, [_vm._v("删除班级")])], 1), _vm._v(" "), _c('div', {
    staticClass: "student-list"
  }, [_c('div', {
    staticClass: "tips-title"
  }, [_c('div', {
    staticClass: "tips"
  }), _c('text', {
    staticClass: "text"
  }, [_vm._v("成员（点击姓名编辑）")]), _vm._v(" "), _c('text', {
    staticClass: "text text2"
  }, [_vm._v("激活人数: " + _vm._s(_vm.classDetail.activity_num) + "/" + _vm._s(_vm.classDetail.student_num) + "人")])]), _vm._v(" "), _c('div', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l((_vm.classDetail.students), function(student, index) {
    return _c('div', {
      key: index,
      staticClass: "tr"
    }, [_c('div', {
      staticClass: "td c-primary",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.editStudent(student)
        }
      }
    }, [_vm._v(_vm._s(student.student_name))]), _vm._v(" "), (student.user_avatar) ? _c('div', {
      staticClass: "td"
    }, [_c('img', {
      staticClass: "student-avatar",
      attrs: {
        "src": _vm.STATIC_URL + student.user_avatar + '?x-oss-process=image/resize,h_100'
      }
    })]) : _c('div', {
      staticClass: "td"
    }, [_c('img', {
      staticClass: "student-avatar",
      attrs: {
        "src": "./../../images/df_student.png"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(student.student_phone))]), _vm._v(" "), _c('div', {
      staticClass: "td",
      class: {
        'c-red': student.bindStatus != 1
      }
    }, [_vm._v(_vm._s(_vm.BIND_STATUS[student.bindStatus]))])])
  }))])])]) : _vm._e()
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
  }, [_vm._v("头像")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("电话")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("绑卡状态")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25a54f50", esExports)
  }
}

/***/ })

},[154]);
//# sourceMappingURL=main.js.map