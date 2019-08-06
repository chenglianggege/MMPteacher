<template>
  <div class="container">
    <div style="margin-top: 50px"><icon type="success" size="70" /></div>
    <div style="margin-top: 30px;font-size: 18px">添加学生成功</div>
    <div style="margin-top: 40px;">
      <button class="weui-btn btn-next" type="primary" @click="toAddStudent">继续添加学生</button>
    </div>
    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toClassDetail">返回班级详情</button>
    </div>
    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toClassList">返回班级列表</button>
    </div>
    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toHome">返回首页</button>
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
    toAddStudent(){
      wx.redirectTo({url: '/pages/addStudent/main?classId=' + this.classId})
    },
    toHome(){
      wx.reLaunch({url:'/pages/home/main'})
    },
    toClassDetail(){
      wx.navigateBack({delta: 1})
      //wx.redirectTo({url: '/pages/classDetail/main?classId=' + this.classId})
    },
    toClassList(){
      wx.navigateBack({delta: 2})
      //wx.redirectTo({url: '/pages/classList/main'})
    }
  },

  onLoad () {
    this.classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
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
