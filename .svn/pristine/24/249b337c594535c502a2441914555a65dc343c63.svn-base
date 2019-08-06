<template>
  <div class="container">
    <div style="margin-top: 50px"><icon type="success" size="70" /></div>
    <div style="margin-top: 30px;font-size: 18px">作业布置成功</div>
    <div style="margin-top: 40px;">
      <button class="weui-btn btn-next" type="primary" @click="toPublish">继续布置</button>
    </div>
    <div style="margin-top: 30px;">
      <button class="weui-btn btn-next" type="primary" @click="toHomework">检查作业</button>
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

    }
  },
  mixins: [mainMixin],
  components: {
  },
  watch: {

  },
  methods: {
    toPublish(){
      wx.navigateBack({delta: 1})
    },
    toHome(){
      wx.reLaunch({url:'/pages/home/main'})
    },
    toHomework(){
      wx.redirectTo({url: '/pages/checkHomework/main'})
    }
  },

  onLoad () {

  },
  onUnload(){

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
