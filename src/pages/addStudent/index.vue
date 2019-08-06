<template>
  <div class="container">
    <div class="form-group" >
      <div class="form-title">
      <div class="tips"></div><text class="text">请输入学生/家长的手机号码</text>
    </div>
      <div class="phone-num">
        <input  v-model="phoneNum"  maxlength="11"  type="number"  placeholder="请输入11位手机号码"/>
      </div>
    </div>
    <div class="form-group">
      <div class="form-title">
        <div class="tips"></div><text class="text">备注姓名</text>
      </div>
      <div class="student-name">
        <input type="text" maxlength="6" :value="studentName" v-model="studentName" placeholder="请输入备注姓名(2-6个汉字)"/>
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
      phoneNum: '',
      studentName: '',
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
    async submitEdit(){
      let regx = /^1\d{10}$/
      if (!regx.test(this.phoneNum)) {
        wx.showToast({ title: '请输入正确的11位手机号码！', icon: 'none', })
        return
      }
      if (!this.studentName || this.studentName.length < 2 || this.studentName.length > 6) {
        wx.showToast({ title: '请输入备注姓名(2-6个汉字)！', icon: 'none', })
        return
      }
      let classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
      if (!classId) {
        wx.showToast({ title: '操作失败，请返回重试！', icon: 'none', })
        return
      }
      try {
        wx.showLoading({title: '数据提交中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/sclass/add-student?token=' + this.globalData.token,
          data: {student_phone: this.phoneNum, student_name: this.studentName, class_id: classId},
          method: 'POST'
        })
        wx.hideLoading();
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        wx.redirectTo({url: '/pages/addStudentSuccess/main?classId=' + classId})
      } catch (e) {
        console.log(e)
        wx.hideLoading();
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      } finally {

      }
    }
  },

  onLoad () {

  },
  onUnload(){
    this.phoneNum = '';
    this.studentName = '';
    this.classId = 0;
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
