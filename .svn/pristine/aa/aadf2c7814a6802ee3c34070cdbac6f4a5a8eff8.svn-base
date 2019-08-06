<template>
  <div class="container" v-if="summary">
    <div style="flex: 0 0 auto;">
      <div class="group-title pt10">
        <div class="tips"></div><text class="f14 ml5">题目序号</text>
        <div style="text-align: right;flex: 1"><text style="color: #409eff" @click="()=>this.showQsList = !showQsList">{{showQsList ? '收起↑' : '显示↓'}}</text></div>
      </div>
      <div class="table qs-list mt10" v-show="showQsList">
        <div class="thead">
          <div class="tr">
            <div class="td qs-no">序号</div>
            <div class="td qs-title">题目名称</div>
          </div>
        </div>
        <div class="tbody">
          <div class="tr" v-for="(qsInfo, idx) in summary.paper_nav" :key="idx">
            <div class="td qs-no">{{idx + 1}}</div>
            <div class="td qs-title">{{qsInfo.title}}</div>
          </div>
        </div>
      </div>
      <div class="tab">
        <div class="navbar">
          <div class="navbar-item" @click="()=>this.loadPaperSummary()" :class="{item_on: currentIdx ==0}">
            <view class="navbar-title">整体情况</view>
          </div>
          <div class="navbar-item" @click="()=>this.loadPaperStudent()" :class="{item_on: currentIdx ==1}">
            <view class="navbar-title">学生成绩</view>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-items">
      <div class="summary" v-if="currentIdx ==0">
        <div class="group-title mt10">
          <div class="tips"></div><text class="f14 ml5">试题得分情况（统计范围：已完成作业的学生）</text>
        </div>
        <div class="table mt10 qs-list">
          <div class="thead">
            <div class="tr">
              <div class="td qs-no">序号</div>
              <div class="td flex1">满分值</div>
              <div class="td flex1">平均分</div>
              <div class="td flex1">得分率</div>
              <div class="td flex1">最高分</div>
              <div class="td flex1">最低分</div>
            </div>
          </div>
          <div class="tbody">
            <div class="tr" v-for="(qsInfo, idx) in summary.paper_nav" :key="idx">
              <div class="td qs-no">{{idx + 1}}</div>
              <div class="td flex1"><text-fixed :point="1" :value="qsInfo.score"/></div>
              <div class="td flex1"><text-fixed :point="1" :value="qsInfo.average_score"/></div>
              <div class="td flex1"><text-fixed :point="1" :value="qsInfo.rate_score * 100"/>%</div>
              <div class="td flex1"><text-fixed :point="1" :value="qsInfo.max_score"/></div>
              <div class="td flex1"><text-fixed :point="1" :value="qsInfo.min_score"/></div>
            </div>
          </div>
        </div>
        <div class="group-title mt10">
          <div class="tips"></div><text class="f14 ml5">学生得分分布情况（统计范围：已完成作业的学生）</text>
        </div>
        <div class="table mt10 score-range">
          <div class="thead">
            <div class="tr">
              <div class="td flex1">分数段</div>
              <div class="td flex1">人数</div>
              <div class="td flex1">百分比</div>
            </div>
          </div>
          <div class="tbody">
            <div class="tr" v-for="(num, idx) in summary.homework_info.distribution" :key="idx">
              <div class="td flex1">{{idx}}</div>
              <div class="td flex1">{{num}}</div>
              <div class="td flex1"><text-fixed :point="1" :value="num / summary.homework_info.total_count * 100" />%</div>
            </div>
          </div>
        </div>
        <div v-if="ec.show" style="display: flex;display: -webkit-flex;justify-content: center;align-items: center ;width: 100%;height: 250px">
          <ec-canvas style="width: 100%;height: 100%;display: block;" :ec="ec" id="mychart-dom-bar" canvas-id="mychart-bar"></ec-canvas>
        </div>
        <list-footer></list-footer>
      </div>
      <div class="student" v-if="currentIdx ==1 && students" style="height: 100%; display: flex;display: -webkit-flex;flex-direction: column">
        <div class="group-title  mt10">
          <div class="tips"></div><text class="f14 ml5">学生得分详情（数据显示范围：所有学生，含未完成）</text>
        </div>

        <div class="mt10" style="overflow: scroll;position: relative;float: left;flex:1;">
          <div class="table">
            <div class="thead">
              <div class="tr">
                <div class="td student-name">姓名</div>
                <div class="td process">进度</div>
                <div class="td score">得分</div>
                <div class="td score" v-for="(qsInfo, idx) in summary.paper_nav" :key="idx">{{idx + 1}}</div>
              </div>
            </div>
            <div class="tbody">
              <div class="tr" v-for="(student, idx) in students" :key="idx">
                <div class="td student-name">{{student.student_name}}</div>
                <div class="td process"><text-fixed :point="1" :value="student.exam_process * 100" />%</div>
                <div class="td score"><text-fixed :point="1" :value="student.score" /></div>
                <div class="td score" v-for="(score, idx2) in student.score_info" :key="idx2"><text-fixed :point="1" :value="score.score_overall" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import syncFun from '@/utils/syncFun.js'
import {formatDate} from '@/utils/date.js'
import ListFooter from "@/components/listFooter";
import textToFixed from "@/components/textToFixed";
import mainMixin from '@/mixin/mainMixin.js'
export default {
  data () {
    return {
      currentIdx: 0,
      ec: {},
      summary: null,
      students: null,
      showQsList: true,
    }
  },
  mixins: [mainMixin],
  components: {
    'list-footer': ListFooter,
    'text-fixed': textToFixed
  },
  watch: {
  },
  methods: {
    async loadPaperSummary(){
      this.currentIdx = 0;
      let examId = this.$root.$mp.query.examId
      if (this.summary) {
        return
      }
      try {
        this.summary = null
        this.ec = null
        wx.showLoading({title: '加载中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/homework/detail/summary',
          data: {token: this.globalData.token, exam_id: examId},
          method: 'GET'
        })
        wx.hideLoading()
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        let summary = ret.data.retData
        let data = []
        let total_count = summary.homework_info.total_count

        for (let i in summary.homework_info.distribution){
          let distribution = summary.homework_info.distribution[i]
          if (distribution > 0){
            data.push({value: distribution, name: i, rate: total_count > 0 ? (distribution / total_count * 100).toFixed(0) : 0})
          }
        }
        summary.homework_info.data = data
        let  ec = {
          show: data.length,
          options: {
            backgroundColor: "#ffffff",
            color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
            series: [{
              label: {
                normal: {
                  fontSize: 14
                }
              },
              type: 'pie',
              center: ['50%', '50%'],
              radius: [0, '50%'],
              data: data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 2, 2, 0.3)'
                }
              }
            }]
          }
        }
        this.ec = ec
        this.summary = summary
      }catch (e) {
        wx.hideLoading()
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
        console.log(e)
      }
    },
    async loadPaperStudent(){
      this.logTrack('student')
      this.currentIdx = 1;
      let examId = this.$root.$mp.query.examId
      if (this.students) {
        return
      }
      this.students = null
      try {
        wx.showLoading({title: '加载中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/homework/student/list',
          data: {token: this.globalData.token, exam_id: examId},
          method: 'GET'
        })
        wx.hideLoading()
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        this.students = ret.data.retData
      }catch (e) {
        wx.hideLoading()
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }
    }
  },

  onLoad () {
    this.loadPaperSummary()
  },
  onUnload(){
    this.currentIdx = 0
    this.summary = null
    this.students = null
    this.showQsList = true
    this.ec = {}
  }
}
</script>

<style scoped>
  .container{
    height: 100%;
    margin: 0 10px;
    display: flex;display: -webkit-flex;
    flex-direction: column;
  }
  .group-title{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }
  .group-title .tips{
    content: "";
    display: inline-block;
    width: 8px;
    height: 16px;
    background-color: #409eff;
  }
  .table{
    font-size: 16px;
  }
  .qs-list{

  }
  .score-range{

  }
  .qs-no{
    width: 50px !important;
    text-align: center;
  }
  .qs-title{
    flex: 1;
  }
  .tbody{
  }
  .tbody .qs-title{
    overflow-y: scroll;
    white-space:nowrap;
    text-align: left;
  }
  .tab{
    margin-top: 20px;
  }
  .tab-items{
    width: 100%;
    flex: 1;
    display: flex;display: -webkit-flex;
    flex-direction: column;
    height: 100%;
    /*overflow-y: scroll;*/
  }
  .table{
    width: 100%;
  }
  .navbar{
    display: flex;display: -webkit-flex;
  }
  .navbar-item{
    flex: 1;
    text-align: center;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    padding-bottom: 5px;
  }
  .item_on{
    color: #409eff;
    border-bottom-style: solid;
    border-bottom-color: #409eff;
    border-right-width: 2px;
  }
  .tr .student-name{
    min-width: 80px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tb3 .student-name{
    background-color: #fff;
  }
  .tr .process{
    min-width: 60px;
    flex: 1;
  }
  .tr .score{
    min-width: 40px;
    flex: 1;
  }
  .td{
    display: block;
  }
  .thead{
    /*position: fixed;*/
    /*top: 0;*/
  }
  .fixed{
    position: fixed;
  }
  .student-list{
  }
  .student{

  }
  .tb1{
    position: fixed;
    z-index: 1001;
    width: 60px;
  }
  .tb2{
    position: -webkit-sticky;
    position: sticky;
    margin-left: 60px;
    top: 0;
    z-index: 1000;
  }
  .tb3{
    float: left;
    position: sticky;
    position: -webkit-sticky;
    z-index: 1000;
    width: 60px;
    left: 0;
  }
  .tb4 {
    left: 60px;
    position: absolute;
  }
  .summary{
    flex: 1;
  }

</style>
