import Vue from 'vue'
import App from './App'
import '@/style/weui.css'
import '@/style/icon.css'
import '@/style/main.css'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.globalData = {
  userInfo: wx.getStorageSync('userInfo'),
  apiBaseUrl: 'https://api.365speak.cn/v2',
  staticBaseUrl: 'https://static.365speak.cn',
  paperBaseUrl: 'https://exam.17kouyu.com',
  token: wx.getStorageSync('token'),
  player: wx.createInnerAudioContext(),
  shareData: {
    title: '为老师节省时间的小程序',
    imageUrl: 'https://static.365speak.cn/assets/image/share_twxapp1.2.jpg?key=' + Math.random()
  }
}

const app = new Vue(App)
app.$mount()
