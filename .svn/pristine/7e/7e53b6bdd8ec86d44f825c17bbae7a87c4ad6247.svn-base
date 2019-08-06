<template>
  <div class="container">
    <div class="form-group" >
      <div class="form-title">
      <div class="tips"></div><text class="text">班级名称</text>
    </div>
      <div class="class-title">
        <input type="text" maxlength="6" :value="classTitle" v-model="classTitle" placeholder="请输入班级名称"/>
      </div>
    </div>
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">班级年级</text>
      </div>
      <div class="class-grade">
        <div class="picker">
          <picker @change="(e)=>this.grade = e.mp.detail.value" :value="grade" :range="grades" range-key="name">
            <view >{{grades[grade].name}}</view>
          </picker>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">班级年度</text>
      </div>
      <div class="class-grade">
        <div class="picker">
          <picker @change="(e)=>this.year = e.mp.detail.value" :value="year" :range="years">
            <view>{{years[year]}}</view>
          </picker>
        </div>
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
      classTitle: '',
      grades: [{grade: 7, name: '七年级'}, {grade: 8, name: '八年级'}, {grade: 9, name: '九年级'}],
      grade: 0,
      years: [],
      year: 0,
      classId: 0
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
    submitEdit(){
      if (this.classId) {
        this.editClass()
      }else{
        this.addClass()
      }
    },
    async addClass(){
      if (this.classTitle.length < 2 || this.classTitle.length > 6) {
        return wx.showToast({ title: '请输入班级名称(2-8个字符)', icon: 'none', })
      }
      try {
        wx.showLoading({title: '数据提交中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/sclass/add?token=' + this.globalData.token,
          data: {class_name: this.classTitle, grade: this.grades[this.grade].grade, year: this.years[this.year]},
          method: 'POST'
        })
        wx.hideLoading();
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        wx.redirectTo({url: '/pages/editClassSuccess/main'})
      } catch (e) {
        console.log(e)
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      } finally {

      }
    },
    async editClass(){
      if (this.classTitle.length < 2 || this.classTitle.length > 6) {
        return wx.showToast({ title: '请输入班级名称(2-8个字符)', icon: 'none', })
      }
      try {
        wx.showLoading({title: '数据提交中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/sclass/save?token=' + this.globalData.token,
          data: {class_id: this.classId, class_name: this.classTitle, grade: this.grades[this.grade].grade, year: this.years[this.year]},
          method: 'POST'
        })
        wx.hideLoading();
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        wx.redirectTo({url: '/pages/editClassSuccess/main?classId=' + this.classId})
      } catch (e) {
        console.log(e)
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      } finally {

      }
    }
  },

  onLoad () {
    let year = new Date().getFullYear()
    let years = []
    years.push((year - 1) + '~' + year)
    years.push(year + '~' + (year + 1))

    this.classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
    if (this.classId) {
      let query = this.$root.$mp.query
      console.log(query)
      this.classTitle = query.className
      this.year = years.findIndex(function(item) {
        return item === query.classYear
      })
      if (this.year === -1) {
        years.push(query.classYear)
      }
      this.year = years.length - 1
      let grade = this.grades.findIndex(function(item) {
        return item.grade == query.classGrade
      })
      this.grade = grade >= 0 ? grade : 0
      console.log('this.grade', this.grade)
      wx.setNavigationBarTitle({title: '修改班级'})
    }else{
      wx.setNavigationBarTitle({title: '创建班级'})
    }
    this.years = years
  },
  onUnload(){
    this.classId = 0;
    this.classTitle = '';
    this.grade = 0
    this.years = []
    this.year = 0
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
  .class-title{
    margin-top: 30px;
    display: flex;display: -webkit-flex;
    justify-content: center;
  }
  .class-grade{
    margin-top: 30px;
    display: flex;display: -webkit-flex;
    justify-content: center;
  }
  .class-title input{
    border-bottom-width: 1rpx;
    border-bottom-style: solid;
    border-bottom-color: #999999;
    width: 80%;
    padding-bottom: 5px;
    text-align: center;
    font-size: 16px;
  }
  .class-grade .picker{
    border-bottom-style: solid;
    border-bottom-width: 1rpx;
    border-bottom-color: #999999;
    width: 80%;
    display: flex;display: -webkit-flex;
    justify-content: center;
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
