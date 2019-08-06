<template>
  <div class="container">
    <div class="menu-list">
      <div class="menu-item" @click="toEditName">
        <icon class="iconfont icon-bianji ml10" />
        <text>修改姓名</text>
        <icon class="iconfont icon-more" />
      </div>
      <div class="menu-item" @click="toEditPhone">
        <icon class="iconfont icon-mobile ml10" />
        <text>修改手机号码</text>
        <icon class="iconfont icon-more" />
      </div>
      <div class="menu-item" @click="toEditPass">
        <icon class="iconfont icon-lock ml10" />
        <text>重置密码</text>
        <icon class="iconfont icon-more" />
      </div>

      <div class="menu-item mt10" style="text-align: center" @click="toLogout">
        <text>退出登录</text>
      </div>

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
    toEditName(){
      wx.navigateTo({url: '/pages/editTeacherName/main'})
    },
    toEditPhone(){
      wx.navigateTo({url: '/pages/editTeacherPhone/main'})
    },
    toEditPass(){
      wx.navigateTo({url: '/pages/editTeacherPassword/main'})
    },
    async toLogout(){
      let ok = await syncFun.showModal({
        title: '确认退出',
        content: '是否确认退出当前账号?',
        showCancel: true,
        confirmColor: '#009efa'
      })
      if (ok.confirm){
        wx.removeStorageSync('token', '')
        wx.reLaunch({url: '/pages/index/main'})
      }
    },
  },

  onLoad () {

  },
  onUnload(){

  }
}
</script>

<style scoped>
  .container{
    display: flex;display: -webkit-flex;
    flex-direction: column;
    background-color: #f5f5f5;
    height: 100%;
  }
  .menu-list{
    margin-top: 10px;
    width: 100%;
  }
  .menu-item{
    height: 60px;
    width: 100%;
    display: flex;display: -webkit-flex;
    align-items: center;
    font-size: 18px;
    border-bottom-style: solid;
    border-bottom-color: #f5f5f5;
    border-bottom-width: 1rpx;
    background-color: #ffffff;
  }
  .menu-item icon{
    font-size: 32px;
    color: #353535;
  }
  .menu-item text{
    margin-left: 10px;
    flex: 1;
    color: #353535;
    font-size: 17px;
  }
  .icon-more{
    font-size: 26px !important;
    margin-right: 20px !important;
  }

</style>
