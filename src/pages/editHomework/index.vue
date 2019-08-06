<template>
  <div class="container">
    <div class="form-group" >
      <div class="form-title">
        <div class="tips"></div><text class="text">发布时间</text>
        <div class="sel-data f14 c-gray" @click="changeStart">
          {{startTime}}
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
        <input type="text" maxlength="50" :value="exam_title" v-model="exam_title"/>
      </div>
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

export default {
  data () {
    return {
      finish_data: '',
      finish_time: '',
      exam_title: '',
    }
  },
  mixins: [mainMixin],
  computed: {
    startTime(){
      let publish_time = this.$root.$mp.query.publish_time
      return formatDate(new Date(parseInt(publish_time + '000')), 'yyyy-MM-dd hh:mm')
    }
  },
  components: {

  },
  watch: {

  },
  methods: {
    changeStart(){
      wx.showToast({ title: '不能修改发布时间！', icon: 'none', })
    },
    async submitWork(){
      let submitForm = {exam_id: this.$root.$mp.query.examId, finish_time: this.finish_data + ' ' + this.finish_time, exam_title: this.exam_title}
      try {
        wx.showLoading({
          title: '修改中...',
          mask: true
        })
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/homework/save?token=' + this.globalData.token,
          data: submitForm,
          method: 'POST'
        });
        wx.hideLoading()
        if (ret.data.retCode !== 0) {
          wx.showToast({title: ret.data.retMsg, icon: 'none',})
          return
        }
        onfire.fire('reloadHomework')
        await syncFun.showModal({
          title: '修改',
          content: ret.data.retMsg,
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#409eff'
        })
        wx.navigateBack();
      }catch (e) {
        wx.hideLoading()
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {
      }
    }
  },

  onLoad () {
    let finishTime = this.$root.$mp.query.finish_time
    this.finish_data = formatDate(new Date(parseInt(finishTime + '000')), 'yyyy-MM-dd')
    this.finish_time = formatDate(new Date(parseInt(finishTime + '000')), 'hh:mm')
    this.exam_title = this.$root.$mp.query.exam_title
  },
  onUnload(){
    this.finish_data = ''
    this.finish_time = ''
    this.exam_title = ''
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
    overflow: scroll;
  }
  .sel-data{
    margin-left: 20px;
  }
  .sel-time {
    margin-left: 5px;
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
