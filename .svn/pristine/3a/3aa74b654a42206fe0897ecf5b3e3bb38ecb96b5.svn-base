<template>
  <div class="container">
    <div class="form-group" >
      <div class="student-name">
        <input type="text" maxlength="6" :value="teacherName" v-model="teacherName">
      </div>
    </div>
    <div class="flex-center mt40">
      <div class="to-publish" @click="submitEdit"><icon class="iconfont icon-icnext"></icon></div>
    </div>

  </div>
</template>

<script>
import syncFun from '@/utils/syncFun.js'
import mainMixin from '@/mixin/mainMixin.js'

export default {
  data () {
    return {
      teacherName: '',
      userInfo: null
    }
  },
  mixins: [mainMixin],
  computed: {

  },
  components: {

  },
  watch: {

  },
  methods: {
    async submitEdit(){
      //let han = /^[\u4e00-\u9fa5]+$/;
      //han.test(this.teacherName)
      if (!this.teacherName || this.teacherName.length < 2 ) {
        wx.showToast({ title: '请输入2-6个汉字姓名！', icon: 'none'})
        return
      }
      try {
        wx.showLoading({title: '提交中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/user/info/save?token=' + this.globalData.token,
          data: {user_name: this.teacherName},
          method: 'POST'
        })
        wx.hideLoading();
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        await syncFun.showModal({
          title: '修改姓名',
          content: ret.data.retMsg,
          showCancel: false,
          confirmColor: '#009efa'
        })
        this.userInfo.user_name = this.teacherName
        this.globalData.userInfo = this.userInfo
        wx.navigateBack({delta: 1})

      } catch (e) {
        console.log(e)
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      } finally {

      }
    }
  },

  onLoad () {
    this.userInfo = this.globalData.userInfo
    this.teacherName = this.userInfo.user_name
  },
  onUnload(){
    this.userInfo = null
    this.teacherName = ''
  }
}
</script>

<style scoped>
  .container{
    padding: 10px;
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
  .phone-num , .student-name{
    margin-top: 30px;
    display: flex;display: -webkit-flex;
    justify-content: center;
  }

  .phone-num input, .student-name input{
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
