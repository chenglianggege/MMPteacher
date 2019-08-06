<template>
  <div class="container">
    <div class="form-group" >
      <div class="phone-num">
        <icon class="iconfont icon-mobile" />
        <text style="margin-left: 10px;font-size: 16px">{{passPhone}}（原号码）</text>
      </div>

      <div class="phone-num">
        <icon class="iconfont icon-mobile" />
        <input type="number" maxlength="11" :value="teacherPhone" v-model="teacherPhone" placeholder="请输入新手机号码">
      </div>
      <div class="phone-num">
        <icon class="iconfont icon-safe" />
        <input type="number" maxlength="4" :value="phoneCode" v-model="phoneCode" placeholder="请输入4位验证码">
        <button class="weui-btn plain sent-code" @click="sendCode">{{sendTime > 0 ? sendTime + '秒后重发' : '发送验证码'}}</button>
      </div>

      <div class="flex-center mt40">
        <div class="to-publish" @click="submitEdit"><icon class="iconfont icon-icnext"></icon></div>
      </div>
    </div>


  </div>
</template>

<script>
import syncFun from '@/utils/syncFun.js'
import mainMixin from '@/mixin/mainMixin.js'

export default {
  data () {
    return {
      teacherPhone: '',
      phoneCode: '',
      userInfo: '',
      passPhone: '',
      sendTime: 0
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
      let regx = /^1\d{10}$/
      if (!regx.test(this.teacherPhone)) {
        wx.showToast({title: '请输入正确的11位手机号码！', icon: 'none',})
        return
      }
      if (!this.phoneCode) {
        wx.showToast({ title: '请输入手机短信验证码！', icon: 'none', })
        return
      }
      if (this.teacherPhone == this.userInfo.user_phone) {
        wx.showToast({title: '新旧手机号码不能相同！', icon: 'none',})
        return
      }
      try {
        wx.showLoading({title: '提交中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/user/info/save-phone?token=' + this.globalData.token,
          data: {phone: this.teacherPhone, phone_code: this.phoneCode},
          method: 'POST'
        });
        wx.hideLoading();
        if (ret.data.retCode !== 0) {
          wx.showToast({title: ret.data.retMsg, icon: 'none',})
          return
        }
        await syncFun.showModal({
          title: '修改手机号码',
          content: '手机号码修改成功，下次登录请用新手机号码登录！',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#409eff'
        })
        this.userInfo.user_phone = this.teacherPhone
        this.globalData.userInfo = this.userInfo
        wx.navigateBack({delta: 1})

      }catch (e) {
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
        return
      }finally {
      }
    },
    async sendCode(){
      if (this.sendTime > 0) {
        return
      };
      let regx = /^1\d{10}$/
      if (!regx.test(this.teacherPhone)) {
        wx.showToast({title: '请输入正确的11位手机号码！', icon: 'none',})
        return
      }
      if (this.teacherPhone == this.userInfo.user_phone) {
        wx.showToast({title: '新旧手机号码不能相同！', icon: 'none',})
        return
      }

      try {
        wx.showLoading({title: '验证码发送中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/account/login/send-code?token=' + this.globalData.token,
          data: {phone: this.teacherPhone},
          method: 'POST'
        });
        wx.hideLoading();
        wx.showToast({title: ret.data.retMsg, icon: 'none',})
        if (ret.data.retCode !== 0) {
          return
        }
      }catch (e) {
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
        return
      }finally {
      }

      let _this = this
      _this.sendTime = 60;
      this.interval = setInterval(function() {
        console.log('interval')
        if (_this.sendTime > 0) {
          _this.sendTime --;
        }else{
          clearInterval(this.interval)
        }
      }, 1000)
    },
  },

  onLoad () {
    this.userInfo = this.globalData.userInfo
    let phone = this.userInfo.user_phone
    this.passPhone = phone.substr(0, 3) + '****' + phone.substr(-4)
  },
  onUnload(){
    this.userInfo = null
    this.teacherPhone = ''
    this.passPhone = ''
    this.phoneCode = ''
    this.sendTime = 0
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
  .container{
    padding: 10px;
  }
  .form-group{
    margin-bottom: 10px;
    margin-left: 20px;
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
    margin-top: 20px;
    display: flex;display: -webkit-flex;
    align-items: center;
  }
  .phone-num icon, .student-name icon{
    font-size: 26px;
  }
  .phone-num input, .student-name input{
    border-bottom-width: 1rpx;
    border-bottom-style: solid;
    border-bottom-color: #000;
    flex: 1;
    padding-bottom: 5px;
    font-size: 16px;
    margin-left: -30px;
    padding-left: 40px;
    margin-right: 10px;
  }
  .to-publish{
    width: 100%;
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
  .sent-code{
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>
