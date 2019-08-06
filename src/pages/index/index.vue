<template>
  <div class="container">
    <div class="main">
      <img class="logo" src="./../../images/logo.jpg" background-size="cover"/>
      <div class="logo-title c-gray">为老师节省时间的小程序</div>

      <div style="margin-top: 20px;width: 250px">
        <div class="input-phone">
          <icon class="iconfont icon-mobile c-gray" style="font-size: 25px"></icon>
          <input :value="formData.phone" v-model="formData.phone" maxlength="11" type="number" placeholder-class="c-gray" placeholder="请输入手机号码"/>
        </div>
        <div class="input-phone">
          <icon class="iconfont icon-lock c-gray" style="font-size: 25px;"></icon>
          <input :value="formData.password" v-model="formData.password" maxlength="20" type="password" placeholder-class="c-gray" placeholder="请输入登录密码"/>
        </div>
        <button @click="toLogin" class="weui-btn btn-login" type="primary" style=""><icon class="iconfont icon-icnext" style="font-size: 40px"></icon></button>
      </div>

      <text class="c-primary" style="font-size: 14px; margin-top: 30px"  @click="toPasswd">忘记密码</text>

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
        role: 2,
        device: 'WXAPP'
      }
    }
  },
  mixins: [mainMixin],
  components: {
  },

  methods: {
    toPasswd(){
      wx.navigateTo({url: '/pages/forget/main'})
    },
    async toLogin () {
      let loginRet = null
      let regx = /^1\d{10}$/
      if (!regx.test(this.formData.phone)) {
        wx.showToast({
          title: '请输入正确的11位手机号码！',
          icon: 'none',
        })
        return
      }
      if (!this.formData.password) {
        wx.showToast({
          title: '请输入密码！',
          icon: 'none',
        })
        return
      }
      try {
        wx.showLoading({
          title: '登录中...',
          mask: true
        })
        loginRet = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/account/login',
          data: this.formData,
          method: 'POST'
        });
        wx.hideLoading()
        if (loginRet.data.retCode !== 0) {
          wx.showToast({title: loginRet.data.retMsg, icon: 'none',})
          return
        }
        let token = loginRet.data.retData.token
        wx.setStorageSync('token', token)
        wx.setStorageSync('login', {phone: this.formData.phone, password: this.formData.password})
        this.globalData.token = token
        this.getUserInfo(token)
      }catch (e) {
        console.log('e', e)
        wx.hideLoading()
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {
      }
    },

    async getUserInfo(token){
      try {
        wx.showLoading({title: '获取老师用户信息...', mask: true})

        let userInfo = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/user/info',
          data: {token: token},
          method: 'GET'
        });
        wx.hideLoading();
        if (userInfo.data.retCode !== 0) {
          wx.showToast({ title: userInfo.data.retMsg, icon: 'none'})
          return
        }
        wx.setStorageSync('userInfo', userInfo.data.retData)
        this.globalData.userInfo = userInfo.data.retData
        console.log('userInfo', userInfo.data.retData)
        wx.reLaunch({url: '/pages/home/main'})
      }catch (e) {
        console.log('e', e)
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {

      }
    }
  },

  onLoad () {
    let token = wx.getStorageSync('token')
    if (token) {
      this.getUserInfo(token)
    }
    let login = wx.getStorageSync('login')
    if (login){
      this.formData.phone = login.phone
      this.formData.password = login.password
    }
    let kick = this.$root.$mp.query.hasOwnProperty('kick') ? this.$root.$mp.query.kick : null
    if (kick) {
      wx.showToast({ title: '您的账号刚才在另一设备登录，若非本人操作，建议及时修改密码！', icon: 'none', })
    }

  }
}
</script>

<style scoped>
  .main {
    display: flex;display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 130px;
    height: 40px;
    margin-top: 30px;
  }
  .logo-title{
    font-size: 14px;
    margin-top: 15px;
  }

  input {
    font-size: 16px;
    padding-left: 10px;
    width: 200px;
  }
  .input-phone{
    height: 30px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #9f9f9f;
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
  }
  .btn-login{
    height: 48px;
    line-height: 48px;
    margin-top: 40px;
  }

</style>
