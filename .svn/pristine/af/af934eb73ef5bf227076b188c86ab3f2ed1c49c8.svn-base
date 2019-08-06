<template>
  <div class="container">
    <div style="margin-top: 50px"><icon type="success" size="70" /></div>
    <div style="margin-top: 30px;font-size: 18px">{{classId > 0 ? '修改班级成功' : '创建班级成功'}}</div>
    <div style="margin-top: 40px;" v-if="!(classId > 0)">
      <button class="weui-btn btn-next" type="primary" @click="toAddClass">继续创建班级</button>
    </div>
    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toClassList">返回班级列表</button>
    </div>

    <div style="margin-top: 30px;" v-if="classId > 0">
      <button class="weui-btn btn-next" type="primary" @click="toClassDetail">返回班级详情</button>
    </div>

    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toHome">返回首页</button>
    </div>
    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toPublish">布置作业</button>
    </div>
  </div>
</template>

<script>
import syncFun from '@/utils/syncFun.js'
import {formatDate} from '@/utils/date.js'
import mainMixin from '@/mixin/mainMixin.js'
export default {
  data () {
    return {
      classId: 0
    }
  },
  mixins: [mainMixin],
  components: {
  },
  watch: {

  },
  methods: {
    toAddClass(){
      wx.redirectTo({url: '/pages/editClassDetail/main'})
    },
    toHome(){
      wx.reLaunch({url:'/pages/home/main'})
    },
    toClassList(){
      wx.navigateBack({delta: this.classId ? 2 : 1})

    },
    toPublish(){
      wx.redirectTo({url: '/pages/publish/main'})
    },
    toClassDetail(){
      //wx.redirectTo({url: '/pages/classDetail/main?classId=' + this.classId})
      wx.navigateBack({delta: 1})
    }
  },

  onLoad () {
    this.classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
    if (this.classId) {
      wx.setNavigationBarTitle({title: '修改班级'})
    }else{
      wx.setNavigationBarTitle({title: '创建班级'})
    }
  },
  onUnload(){
    this.classId = 0
  }
}
</script>

<style scoped>
  .container{
    margin: 10px;
    display: flex;display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-next{
    height: 40px;
    width: 200px;
    font-size: 16px;
    line-height: 40px;
  }
</style>
