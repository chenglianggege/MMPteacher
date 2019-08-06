<template>
  <div class="container">
    <div class="main">
      <div style="margin-top: 20px;width: 280px">
        <div class="input-phone">
          <icon class="iconfont icon-mobile c-gray" style="font-size: 25px"></icon>
          <input v-model="formData.phone" maxlength="11" type="number" placeholder-class="c-gray" placeholder="请输入手机号码"/>
        </div>
        <div class="input-phone">
          <icon class="iconfont icon-safe c-gray" style="font-size: 25px;"></icon>
          <input v-model="formData.phone_code" class="phone-code" maxlength="4" type="number" placeholder-class="c-gray" placeholder="请输入验证码"/>
          <button @click="sendCode" class="weui-btn btn-send" plain type="primary">{{sendTime > 0 ? sendTime + '秒后重发' : '发送验证码'}}</button>
        </div>
        <div class="input-phone">
          <icon class="iconfont icon-lock c-gray" style="font-size: 25px;"></icon>
          <input v-model="formData.password" type="password" placeholder-class="c-gray" placeholder="请输入新密码"/>
        </div>
        <button @tap="findPasswd" class="weui-btn btn-login" type="primary" style=""><icon class="iconfont icon-icnext" style="font-size: 40px"></icon></button>
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
      formData: {
        phone: '',
        password: '',
        phone_code: '',
        role: 2
      },
      sendTime: 0
    }
  },
  mixins: [mainMixin],
  components: {
  },

  methods: {
    async sendCode(){
      if (this.sendTime > 0) {
        return
      };
      let regx = /^1\d{10}$/
      if (!regx.test(this.formData.phone)) {
        wx.showToast({title: '请输入正确的11位手机号码！', icon: 'none',})
        return
      }

      try {
        wx.showLoading({title: '验证码发送中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/account/login/send-code',
          data: this.formData,
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
    async findPasswd(){
      let regx = /^1\d{10}$/
      if (!regx.test(this.formData.phone)) {
        wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none', })
        return
      }
      if (!this.formData.phone_code) {
        wx.showToast({ title: '请输入手机短信验证码！', icon: 'none', })
        return
      }
      if (!this.formData.password) {
        wx.showToast({ title: '请输入密码！', icon: 'none', })
        return
      }
      /*
      if (this.formData.password !== this.submitForm.re_password) {
        wx.showToast({ title: '两次输入密码不一致！', icon: 'none', })
        return
      }
      */
      try {
        wx.showLoading({
          title: '提交中...',
          mask: true
        })
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/account/find',
          data: this.formData,
          method: 'POST'
        })
        wx.hideLoading();
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        await syncFun.showModal({
          title: '重置密码',
          content: '密码已重置，请用新密码登录！',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#409eff'
        })
        wx.navigateBack();
      }catch (e) {
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
        return
      }finally {
      }
    }
  },
  onUnload(){
    this.sendTime = 0
    clearInterval(this.interval)
    this.formData = {
      phone: '',
      password: '',
      phone_code: '',
      role: 2
    }
  },
  created () {
    this.userInfo = this.globalData.userInfo
  }
}
</script>

<style scoped>
  .main {
    display: flex;display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    font-size: 16px;
    padding-left: 10px;
    width: 200px;
  }
  .input-phone{
    height: 35px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #9f9f9f;
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }
  .btn-login{
    height: 48px;
    line-height: 40px;
    font-size: 40px;
    margin-top: 40px;
  }
  .phone-code{
    width: 100px;
  }
  .btn-send{
    width: 100px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    margin-top: 0;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
