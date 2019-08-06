<template>
  <div class="container">
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">布置班级</text>
      </div>
      <div class="class-group">
        <button
          v-for="(item, classIdx) in classList" :key="classIdx"
          class="weui-btn class-title"
          :class="{plain: !item.selected}"
          type="primary"
          :disabled="item.student_num == 0"
          @click="selClass(classIdx)">
          {{item.class_name}}({{item.student_num}}人)
        </button>
      </div>
    </div>
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">发布时间</text>
        <button
          class="weui-btn class-title"
          :class="{plain: !(submitForm.start_type == 1)}"
          type="primary"
          @click="()=>this.submitForm.start_type = 1">
          立即开始
        </button>
        <button
          class="weui-btn class-title"
          :class="{plain: !(submitForm.start_type == 2)}"
          type="primary"
          @click="()=>this.submitForm.start_type = 2">
          指定时间
        </button>
      </div>
    </div>
    <div class="form-group" v-if="submitForm.start_type == 2">
      <div class="form-title">
        <div class="tips"></div><text class="text">指定时间</text>
        <div class="sel-data">
          <picker
            :value="start_data"
            mode="date"
            @change="(e)=>this.start_data = e.mp.detail.value"
          >
            <view class="picker f14">{{start_data}}</view>
          </picker>
        </div>
        <div class="sel-time">
          <picker
            :value="start_time"
            mode="time"
            @change="(e)=>this.start_time = e.mp.detail.value"
          >
            <view class="picker f14">{{start_time}}</view>
          </picker>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">截止时间</text>
        <div class="sel-data">
          <picker
            :value="finish_data"
            mode="date"
            @change="(e)=>this.finish_data = e.mp.detail.value"
          >
            <view class="picker f14">{{finish_data}}</view>
          </picker>
        </div>
        <div class="sel-time">
          <picker
            :value="finish_time"
            mode="time"
            @change="(e)=>this.finish_time = e.mp.detail.value"
          >
            <view class="picker f14">{{finish_time}}</view>
          </picker>
        </div>
      </div>

    </div>
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">作业名称</text>
      </div>
      <div class="exam-title">
        <input maxlength="50" type="text" :value="submitForm.exam_title" v-model="submitForm.exam_title"/>
      </div>
    </div>
    <div class="flex-center c-primary f14 ml5 mt10 cartInfo" v-if="!paperId && !examId">
      <span class="mr10">题目数量：{{cartNum}}题</span>
      <span class="mr10">总分：{{score}}分</span>
      <span >预计时间：{{duration}}分钟</span>
    </div>
    <div class="flex-center mt40">
      <div class="to-publish" @click="submitWork"><icon class="iconfont icon-icnext"></icon></div>
    </div>

  </div>
</template>

<script>
import syncFun from '@/utils/syncFun.js'
import {formatDate} from '@/utils/date.js'
const onfire = require("@/utils/onfire.js").onfire
import mainMixin from '@/mixin/mainMixin.js'
import cartMixin from "@/mixin/cartMixin.js"
export default {
  data () {

    return {
      userInfo: null,
      classList: [],
      finish_data: '',
      finish_time: '',
      start_data: '',
      start_time: '',
      submitForm:{
        start_type: '1',
        question_ids: [],
        finish_time: '',
        start_time: '',
        exam_title: '',
        class_id: [],
        exam_des: '',
        cart: []
      }
    }
  },
  mixins: [mainMixin, cartMixin],
  components: {
  },
  computed: {
    cartNum (){
      return this.qsNum()
    },
    duration () {
      return this.qsDuration()
    },
    score(){
      return this.qsScore()
    }
  },
  watch: {
    start_data(){
      this.submitForm.exam_title = formatDate(new Date(this.start_data), 'MM.dd') + '听说作业'
    }
  },
  methods: {
    async loadClassList(){
      try {
        wx.showLoading({
          title: '加载中...',
          mask: true
        })
        let classList = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/sclass/list',
          data: {token: this.globalData.token},
          method: 'GET'
        })
        if (classList.data.retCode !== 0) {
          wx.showToast({ title: classList.data.retMsg, icon: 'none', })
          return
        }
        classList = classList.data.retData
        for (let i in classList) {
          if (classList[i].student_num > 0){
            classList[i].selected = true
          } else{
            classList[i].selected = false
          }

        }
        this.classList = classList
      }catch (e) {
        console.log(e)
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {
        wx.hideLoading()
      }
    },
    selClass(classIdx){
      this.classList[classIdx].selected = !this.classList[classIdx].selected
    },
    selStartData(e){
      console.log(e)
      this.start_data = e.mp.detail.value
    },
    async submitWork(){
      let submitForm = this.submitForm
      let class_id = []
      for (let i in this.classList){
        if (this.classList[i].selected){
          class_id.push(this.classList[i].class_id)
        }
      }
      submitForm.class_id = class_id
      submitForm.finish_time = this.finish_data + ' ' + this.finish_time
      submitForm.start_time = this.start_data + ' ' + this.start_time

      try {
        wx.showLoading({title: '发布中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/homework/publish?token=' + this.globalData.token,
          data: submitForm,
          method: 'POST'
        });
        wx.hideLoading()
        if (ret.data.retCode !== 0) {
          wx.showToast({title: ret.data.retMsg, icon: 'none',})
          return
        }
        wx.removeStorageSync('cart')
        onfire.fire('cart')
        onfire.fire('cart2')
        wx.redirectTo({url: '/pages/publishSuccess/main'})
      }catch (e) {
        wx.hideLoading()
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {

      }
    }
  },

  onLoad () {
    this.loadClassList()
    let cart = wx.getStorageSync('cart') || {}
    let question_ids = []
    let sub_cart = {}
    for (let i in cart) {
      let paper = cart[i]
      for (let j in paper['qs']) {
        let qs = paper['qs'][j]
        question_ids.push(qs.qsId)
        sub_cart['qsId_' + qs.qsId] = {qsInfoIds :  qs.infoIds, qsId: qs.qsId, duration: qs.duration, qsScore: qs.qsScore}
      }
    }
    this.submitForm.question_ids = question_ids
    this.submitForm.cart = sub_cart
    let start_data = formatDate(new Date(), 'yyyy-MM-dd')
    this.finish_data = formatDate(new Date(), 'yyyy-MM-dd')
    this.finish_time = formatDate(new Date(), '23:59')
    this.start_data = start_data
    this.start_time = formatDate(new Date(), 'hh:mm')
    this.submitForm.exam_title = formatDate(new Date(start_data), 'MM.dd') + '听说作业'
  },
  onUnload(){
    this.submitForm ={
      start_type: '1',
        question_ids: [],
        finish_time: '',
        start_time: '',
        exam_title: '',
        class_id: [],
        exam_des: '',
        cart: []
    }
    this.finish_data = ''
    this.finish_time = ''
    this.start_data = ''
    this.start_time = ''
    this.classList = []
  }
}
</script>

<style scoped>
  .container{
    margin: 10px;
  }
  .form-group{
    margin-bottom: 20px;
  }
  .form-title{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
  }
  .form-title .tips{
    content: "";
    display: inline-block;
    width: 8px;
    height: 16px;
    background-color: #409eff;
  }
  .form-title .text{
    font-size: 14px;
    padding-left: 5px;
  }
  .class-group{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .class-title{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 10px 0 0 20px;
  }
  .sel-data{
    margin-left: 20px;
    border-bottom-style: solid;
    border-bottom-width: 1rpx;
    border-bottom-color: #999999;
  }
  .sel-time {
    margin-left: 20px;
    border-bottom-style: solid;
    border-bottom-width: 1rpx;
    border-bottom-color: #999999;
  }
  .exam-title{
    margin-top: 30px;
    display: flex;display: -webkit-flex;
    justify-content: center;
  }
  .exam-title input{
    border-bottom-width: 1rpx;
    border-bottom-style: solid;
    border-bottom-color: #000;
    width: 80%;
    padding-bottom: 5px;
    text-align: center;
    font-size: 16px;
  }
  .to-publish{
    width: 80%;
    height: 40px;
    background-color: #409eff;
    display: flex;display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }


  .icon-icnext{
    font-size: 35px;
    color: #fff;
    padding: 0;
    height: 40px;
    line-height: 40px;
  }

</style>
