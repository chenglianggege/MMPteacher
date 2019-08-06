<template>
  <div class="container" v-if="userInfo">
    <div class="banner">
      <img :src="STATIC_URL + '/assets/image/banner_twxapp1.2.jpg?key=' + randkey" />
    </div>

    <div class="body">
      <div class="header">
        <div class="teacher">
          <img class="teacher-avatar" v-if="userInfo.user_avatar" :src="userInfo.user_avatar + '?x-oss-process=image/resize,h_100'" />
          <img class="teacher-avatar" v-else src="./../../images/touixang.jpg" />
          <div class="teacher-info">
            <text class="teacher-name">{{userInfo.user_name}} 老师</text>
            <text class="teacher-school c-gray">{{userInfo.school_name}}</text>
          </div>
        </div>
        <div class="btn-logout"  @click="toSetting">
          <img src="./../../images/shezhi.png" class="logout"/>
          <text>设置</text>
        </div>
      </div>
      <div class="main">
        <div class="btn-group">
          <div class="btn-main mt10"  @click="toPublish">
            <img src="./../../images/buzhi.png" class="btn-img" />
            <div class="btn-title">
              <div class="title">布置作业</div>
              <div class="desc">自由选题、在线发布作业与练习</div>
            </div>
            <icon class="iconfont icon-more" />
          </div>

          <div class="btn-main mt10"  @click="toHomework">
            <img src="./../../images/jiancha.png" class="btn-img" />
            <div class="btn-title">
              <div class="title">检查作业</div>
              <div class="desc">成绩概况、分数统计、作答详情</div>
            </div>
            <icon class="iconfont icon-more" />
          </div>

          <div class="btn-main mt10"  @click="toClassAnalysis">
            <img src="./../../images/xueqing.png" class="btn-img" />
            <div class="btn-title">
              <div class="title">学情分析</div>
              <div class="desc">班级增改与学生信息查询、变更</div>
            </div>
            <icon class="iconfont icon-more" />
          </div>

          <div class="btn-main mt10"  @click="toClassList">
            <img src="./../../images/banji.png" class="btn-img" />
            <div class="btn-title">
              <div class="title">班级管理</div>
              <div class="desc">班级增改与学生信息查询、变更</div>
            </div>
            <icon class="iconfont icon-more" />
          </div>



        </div>
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
      userInfo: null,
      STATIC_URL: '',
      randkey: ''
    }
  },
  mixins: [mainMixin],
  components: {
  },

  methods: {
    async logOut(){
      let ok = await syncFun.showModal({
        title: '确认退出',
        content: '是否确认退出当前账号?',
        showCancel: true,
        confirmColor: '#009efa'
      })
      if (ok.confirm){
        wx.removeStorageSync('token', '')
        wx.redirectTo({url: '/pages/index/main'})
      }
    },
    toPublish(){
      wx.navigateTo({url: '/pages/publish/main'})
    },
    toHomework(){
      wx.navigateTo({url: '/pages/checkHomework/main'})
    },
    toClassList(){
      wx.navigateTo({url: '/pages/classList/main'})
    },
    toSetting(){
      wx.navigateTo({url: '/pages/personalSetting/main'})
    },
    toClassAnalysis () {
      wx.navigateTo({url: '/pages/classAnalysis/main'})
    },
    async getUserInfo(){
      let token = this.globalData.token
      if (!token) {
        wx.reLaunch({url: '/pages/index/main'})
        return
      }
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
          wx.reLaunch({url: '/pages/index/main'})
          return
        }
        wx.setStorageSync('userInfo', userInfo.data.retData)
        this.globalData.userInfo = userInfo.data.retData
        this.userInfo = userInfo.data.retData
      }catch (e) {
        console.log('e', e)
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {

      }
    }
  },

  onLoad () {
    this.getUserInfo()
    this.randkey = Math.random()
    this.STATIC_URL = this.globalData.staticBaseUrl
  },
  onUnload(){
    this.userInfo = null
  },
  onShareAppMessage() {
    return this.globalData.shareData
  }
}
</script>

<style scoped>
  .container{
    height: 100%;
    width: 100%;
    display: flex;display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    background-color:#f5f5f5;

  }
  .banner{
    width: 100%;
  }
  .banner img{
    height: 170px;
    width: 100%;
  }
  .header{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    height: 95px;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% - 20px);
    z-index: 999;
    margin-top: -55px;
  }
  .teacher {
    margin-left: 20px;
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
  }
  .teacher-avatar{
    width: 60px;
    height: 60px;
  }
  .teacher-info{
    display: flex;display: -webkit-flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .teacher-name{
    font-size: 18px;
  }
  .teacher-school{
    font-size: 14px;
  }
  .btn-logout{
    color: #707070;
    width: 38px;
    flex-direction: column;display: flex;display: -webkit-flex;align-items: center;justify-content: center;margin-top: -20px;margin-right: 10px;
  }
  .logout{
    width: 20px;
    height: 20px;
  }
  .btn-logout text{
    font-size: 12px;margin-top: 5px;margin-left: -2px;color: #aaaaaa;
  }
  .body{
    display: flex;display: -webkit-flex;flex-direction: column;background-color: #f5f5f5;width: 100%;align-items: center;height: 100%;
  }
  .main{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    justify-items: center;
    width: calc(100% - 20px);
  }
  .btn-group{
    display: flex;display: -webkit-flex;flex-direction: column;width: 100%;
  }
  .btn-main{
    width: 100%;
    height: 80px;
    margin-top: 10px;
    display: flex;display: -webkit-flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 4px;
  }
  .btn-item{
    font-size: 100px;
  }
  .btn-title{
    flex: 1;
    margin-left: 10px;
  }
  .title{
    font-size: 17px;
    color: #353535
  }
  .desc{
    font-size: 12px;
    color: #aaaaaa;
  }
  .btn-img{
    width: 55px;
    height: 52px;
    margin-left: 20px;
    margin-top: -10px;
  }
  .icon-more{
    font-size: 20px;
    margin-right: 20px;
  }


</style>
