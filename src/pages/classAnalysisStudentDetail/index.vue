<template>
    <div class="container">
        <div class="ml10">
            <div class="f14 mt5">作业完成度: {{completeRate}}%</div>
            <div class="f14 mt5">平均作答得分率: {{scoreRate}}%</div>
        </div>
        <div class="warp-line mt10"></div>
        <div class="ec-line" v-if="!loading && scoreDataNum > 0">
            <div class="ec-div">
                <ec-canvas class="ec-canvas" :ec="scoreData" ></ec-canvas>
            </div>
            <div class="f14 mt10" style="text-align: center">
                <div>作答得分率</div>
            </div>
        </div>
        <div class="no-class" v-if="scoreDataNum == 0">
            <img src="./../../images/classAnalysisDetail/wushuju.png"/>
            <div class="add-class-tips">这个学生一直没做作业...</div>
        </div>
    </div>
</template>

<script>
  import syncFun from '@/utils/syncFun.js'
  import {formatDate} from '@/utils/date.js'
  import textToFixed from '@/components/textToFixed'
  import mainMixin from '@/mixin/mainMixin.js'

  export default {
    data () {
      return {
        loading: true,
        scoreData: {},
        scoreDataNum: 0,
        completeRate: '',
        scoreRate: '',
      }
    },
    mixins: [mainMixin],
    components: {
      textToFixed: textToFixed
    },
    watch: {

    },
    methods: {
      async getStudentScore(){
        this.scoreData = null
        this.scoreDataNum = 0
        let studentId = this.$root.$mp.query.hasOwnProperty('studentId') ? this.$root.$mp.query.studentId : null
        let classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
        if (!studentId || !classId) {
          return
        }
        try {
          wx.showLoading({title: '加载中...', mask: true})
          this.loading = true
          let ret = await syncFun.request({
            url: this.globalData.apiBaseUrl + '/teacher/sclass/analysis/student-score',
            data: {token: this.globalData.token, class_id: classId, student_id: studentId},
            method: 'GET'
          })
          wx.hideLoading()
          if (ret.data.retCode !== 0) {
            wx.showToast({ title: ret.data.retMsg, icon: 'none', })
            return
          }
          let retData = ret.data.retData ? ret.data.retData : []
          let seriesData = []
          for (let i in retData) {
            seriesData.push({value: [+i + 1, retData[i].ratio_score] })
          }
          this.scoreDataNum = retData.length
          this.scoreData = {
            options: {
              color: ["#409eff"],
              grid: {left: 0, right: 10, bottom: 0, top: 10, containLabel: true},
              tooltip: { show: false },
              xAxis: {
                type: 'category',
                boundaryGap: false
              },
              yAxis: {
                type: 'value',
              },
              series: [{
                type: 'line',
                smooth: false,
                data: seriesData
              }]
            }
          }

        }catch (e) {
          wx.hideLoading()
          wx.showToast({ title: '网络通信错误！', icon: 'none', })
          console.log(e)
        }finally {
          this.loading = false;
        }
      },
    },
    onShow(){
      //console.log('this.$root.$mp.query', this.$root.$mp.query)
      this.completeRate = (+this.$root.$mp.query.completeRate ).toFixed(0)
      this.scoreRate = (+this.$root.$mp.query.scoreRate ).toFixed(0)
      this.getStudentScore()
      wx.setNavigationBarTitle({
        title: this.$root.$mp.query.studentName
      })
    },
    onLoad () {


    },
    onUnload(){
      this.loading = true
      this.scoreData = {}
      this.completeRate = ''
      this.scoreRate = ''
      this.scoreDataNum = 0
    }
  }
</script>

<style scoped>
    .container{
        display: flex;display: -webkit-flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .warp-line{
        width: 100%;
        height: 1px;
        background-color: #999999;
    }

    .ec-line {
        width: 100%;flex:1;display: flex;display: -webkit-flex;flex-direction: column;align-items: center;
        margin-top: 10px;
    }
    .ec-div{
        height: 100%;
        width: 100%;
    }
    .ec-canvas{
        width: 100%;
        height: 350px;
        display: block;
    }
    .no-class{
        display: flex;display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .no-class img{
        width: 260px;
        height: 210px;
        margin-bottom: 40px;
    }
    .no-class .add-class-tips{
        font-size: 17px;
        color: #9a9a9a;
        margin-top: 5px;
    }
</style>
