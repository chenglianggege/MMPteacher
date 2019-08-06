<template>
    <div class="container" v-if="detailLoaded">
        <div class="navbar" v-if="classDetail.homework_info.homework_count > 0">
            <div class="navbar-item" @click="getClassFinish" :class="{item_on: currentIdx ==0}">
                <view class="navbar-title">作业情况</view>
            </div>
            <div class="navbar-item" @click="getClassScore" :class="{item_on: currentIdx ==1}">
                <view class="navbar-title">答题得分</view>
            </div>
            <div class="navbar-item" @click="getClassStudents" :class="{item_on: currentIdx ==2}">
                <view class="navbar-title">学生详情</view>
            </div>
        </div>
        <div class="tab-finish"  v-if="currentIdx ==0 && classDetail.homework_info.homework_count > 0">
            <div >
                <div class="f14 mt5">已完成作业总次数：{{classDetail.homework_info.homework_count}}</div>
                <div class="f14 mt5">
                    班平均作业完成度：<textToFixed :value="classDetail.homework_info.complete_rate * 100" :point="2" />%
                    <span @click="()=>this.showFinishDesc = !this.showFinishDesc" class="c-primary ml5">（{{showFinishDesc ? '收起': '查看'}}说明）</span>
                </div>
                <div class="f14 mt5 tab-desc" v-show="showFinishDesc">
                    <div class="mt5"><span class="fb">作业完成：</span>学生在规定时间内完成作业</div>
                    <div class="mt10"><span class="fb">单份作业的完成度：</span>指的是完成人数占总人数比。例如：给50人布置，49人按时完成，则完成度为98.00%</div>
                    <div class="mt10"><span class="fb">班平均作业完成度：</span>指的是所有“单份作业完成度”的平均值（不含已删除的作业）</div>
                </div>
            </div>
            <div class="warp-line mt10"></div>
            <div class="mt10 time-range" v-if="finishTimeRangeType===1">
                <div class="radio-btn-group" >
                    <div class="radio-btn" :class="{select : finishTimeRangeStart == '30'}" @click="changeFinishTimeRange('30')">近30天</div>
                    <div class="radio-btn" :class="{select : finishTimeRangeStart == '60'}" @click="changeFinishTimeRange('60')">近60天</div>
                    <div class="radio-btn" :class="{select : finishTimeRangeStart == '90'}" @click="changeFinishTimeRange('90')">近90天</div>
                </div>
                <div class="radio-btn-group mt2">
                    <div class="radio-btn" :class="{select : finishTimeRangeStart == '180'}" @click="changeFinishTimeRange('180')">近半年</div>
                    <div class="radio-btn" :class="{select : finishTimeRangeStart == '365'}" @click="changeFinishTimeRange('365')">近1年</div>
                    <div class="radio-btn" @click="changeFinishTimeRangeType">其他</div>
                </div>
            </div>
            <div v-if="finishTimeRangeType===2" class="flex mt10 time-range time-range-select">
                <div class="back-arrow" @click="changeFinishTimeRangeType">
                    <i class="iconfont icon-left"></i>
                </div>
                <div>
                    <div class="flex">
                        <span class="f16">开始日期：</span>
                        <picker mode="date" :value="finishTimeRangeStart"
                            @change="(e)=>{this.finishTimeRangeStart = e.mp.detail.value;this.getClassFinish()}"
                        >
                            <view class="picker f16">{{finishTimeRangeStart}}</view>
                        </picker>
                    </div>
                    <div class="flex mt5">
                        <span class="f16">截止日期：</span>
                        <picker
                            mode="date" :value="finishTimeRangeEnd"
                            @change="(e)=>{this.finishTimeRangeEnd = e.mp.detail.value;this.getClassFinish()}"
                        >
                            <view class="picker f16">{{finishTimeRangeEnd}}</view>
                        </picker>
                    </div>
                </div>
            </div>
            <div class="ec-line" v-if="!loading && finishDataNum > 0">
                <div class="ec-div">
                    <ec-canvas class="ec-canvas" :ec="finishData" ></ec-canvas>
                </div>
                <div class="f14 mt10" style="text-align: center">
                    <div>{{finishTimeRangeStr}}</div>
                    <div>作业完成度曲线</div>
                </div>
            </div>
            <div class="no-class" v-if="finishDataNum == 0">
                <img src="./../../images/classAnalysisDetail/wushuju.png"/>
                <div class="add-class-tips">本时段内没有作业</div>
                <div class="add-class-tips">请选择其他时间段</div>
            </div>

        </div>
        <div class="tab-score"  v-if="currentIdx ==1 && classDetail.homework_info.homework_count > 0">
            <div>
                <div class="f14 mt5">已完成作业总次数：{{classDetail.homework_info.homework_count}}</div>
                <div class="f14 mt5">
                    班平均答题得分率：<textToFixed :value="classDetail.homework_info.score_rate * 100" :point="2" />%
                    <span @click="()=>this.showScoreDesc = !this.showScoreDesc" class="c-primary ml5">（{{showScoreDesc ? '收起': '查看'}}说明）</span>
                </div>
                <div class="f14 mt5 tab-desc" v-show="showScoreDesc">
                    <div class="mt5">这里是针对学生答题进行的统计（含未完成作业，不含已删除的）</div>
                    <div class="mt5"><span class="fb">单个学生单份作业答题得分率：</span>指一份作业里学生所做的题的得分与所做题的满分之间的比值</div>
                    <div class="mt10"><span class="fb">单份作业答题得分率：</span>一份作业，所有学生得分率的平均值</div>
                    <div class="mt10"><span class="fb">班平均答题得分率：</span>所有“单份作业答题得分率”的平均值</div>
                </div>
            </div>
            <div class="warp-line mt10"></div>
            <div class="mt10 time-range" v-if="scoreTimeRangeType===1">
                <div class="radio-btn-group" >
                    <div class="radio-btn" :class="{select : scoreTimeRangeStart == '30'}" @click="changeScoreTimeRange('30')">近30天</div>
                    <div class="radio-btn" :class="{select : scoreTimeRangeStart == '60'}" @click="changeScoreTimeRange('60')">近60天</div>
                    <div class="radio-btn" :class="{select : scoreTimeRangeStart == '90'}" @click="changeScoreTimeRange('90')">近90天</div>
                </div>
                <div class="radio-btn-group mt2">
                    <div class="radio-btn" :class="{select : scoreTimeRangeStart == '180'}" @click="changeScoreTimeRange('180')">近半年</div>
                    <div class="radio-btn" :class="{select : scoreTimeRangeStart == '365'}" @click="changeScoreTimeRange('365')">近1年</div>
                    <div class="radio-btn" @click="changeScoreTimeRangeType">其他</div>
                </div>
            </div>
            <div v-if="scoreTimeRangeType===2" class="flex mt10 time-range time-range-select">
                <div class="back-arrow" @click="changeScoreTimeRangeType">
                    <i class="iconfont icon-left"></i>
                </div>
                <div>
                    <div class="flex">
                        <span class="f16">开始日期：</span>
                        <picker mode="date" :value="scoreTimeRangeStart"
                                @change="(e)=>{this.scoreTimeRangeStart = e.mp.detail.value;this.getClassFinish()}"
                        >
                            <view class="picker f16">{{scoreTimeRangeStart}}</view>
                        </picker>
                    </div>
                    <div class="flex mt5">
                        <span class="f16">截止日期：</span>
                        <picker
                                mode="date" :value="scoreTimeRangeEnd"
                                @change="(e)=>{this.scoreTimeRangeEnd = e.mp.detail.value;this.getClassFinish()}"
                        >
                            <view class="picker f16">{{scoreTimeRangeEnd}}</view>
                        </picker>
                    </div>
                </div>
            </div>
            <div class="ec-line" v-if="!loading && scoreDataNum > 0">
                <div class="ec-div">
                    <ec-canvas class="ec-canvas" :ec="scoreData" ></ec-canvas>
                </div>
                <div class="f14 mt10" style="text-align: center">
                    <div>{{scoreTimeRangeStr}}</div>
                    <div>作答得分率曲线</div>
                </div>
            </div>
            <div class="no-class" v-if="scoreDataNum == 0">
                <img src="./../../images/classAnalysisDetail/wushuju.png"/>
                <div class="add-class-tips">本时段内没有作业</div>
                <div class="add-class-tips">请选择其他时间段</div>
            </div>
        </div>
        <div class="tab-student"  v-if="currentIdx ==2 && classDetail.homework_info.homework_count > 0">
            <div>
                <div class="f14 mt5">（1）历次作答得分率的平均值</div>
                <div class="f14 mt5">（2）点击蓝色数值查看得分率曲线</div>
            </div>
            <div class="student-list">
                <div class="table">
                    <div class="thead">
                        <div class="tr">
                            <div class="td flex-center" style="width: 100px" @click="sortStudentList('student_name')">
                                备注姓名
                                <div class="sort-icon flex-center-column">
                                    <i class="sort-caret ascending" :class="{primary: sortField === 'student_name' && sortBy === 'asc'}"></i>
                                    <i class="sort-caret descending" :class="{primary: sortField === 'student_name' && sortBy === 'desc'}"></i>
                                </div>
                            </div>
                            <div class="td" style="width: 50px">头像</div>
                            <div class="td flex1 flex-center" @click="sortStudentList('complete_rate')">
                                作业完成度
                                <div class="sort-icon flex-center-column">
                                    <i class="sort-caret ascending" :class="{primary: sortField === 'complete_rate' && sortBy === 'asc'}"></i>
                                    <i class="sort-caret descending" :class="{primary: sortField === 'complete_rate' && sortBy === 'desc'}"></i>
                                </div>
                            </div>
                            <div class="td flex1 flex-center" @click="sortStudentList('score_rate')">
                                作答得分率
                                <div class="sort-icon flex-center-column">
                                    <i class="sort-caret ascending" :class="{primary: sortField === 'score_rate' && sortBy === 'asc'}"></i>
                                    <i class="sort-caret descending" :class="{primary: sortField === 'score_rate' && sortBy === 'desc'}"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tbody">
                        <div class="tr" v-for="(student, idx) in studentList" :key="idx">
                            <div class="td" style="width: 100px">{{student.student_name}}</div>
                            <div class="td" style="width: 50px" v-if="student.user_avatar"><img class="student-avatar" :src="STATIC_URL + student.user_avatar + '?x-oss-process=image/resize,h_100'"/></div>
                            <div class="td" style="width: 50px" v-else><img class="student-avatar" src="./../../images/df_student.png"/></div>
                            <div class="td flex1"><textToFixed :value="student.complete_rate" :point="0" />%</div>
                            <div class="td flex1 c-primary" @click="toStudentDetail(student)"><textToFixed :value="student.score_rate" :point="0" />%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="no-class" v-if="classDetail.homework_info.homework_count == 0">
            <img src="./../../images/classAnalysisDetail/wushuju.png"/>
            <div class="add-class-tips">本班学生完成作业后才会有数据哦～</div>
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
        currentIdx: 0,
        loading: true,
        detailLoaded: false,
        finishTimeRangeType: 1,
        finishTimeRangeStart: '30',
        finishTimeRangeEnd: 'now',
        finishTimeRangeStr: '',
        scoreTimeRangeType: 1,
        scoreTimeRangeStart: '30',
        scoreTimeRangeEnd: 'now',
        scoreTimeRangeStr: '',
        finishData: {},
        scoreData: {},
        classDetail: {},
        studentList: [],
        STATIC_URL: '',
        sortField: 'score_rate',
        sortBy: 'desc',
        showFinishDesc: false,
        showScoreDesc: false,
        finishDataNum: 0,
        scoreDataNum: 0,
      }
    },
    mixins: [mainMixin],
    components: {
      textToFixed: textToFixed
    },
    watch: {

    },
    methods: {
      changeFinishTimeRange(finishTimeRange){
        this.finishTimeRangeStart = finishTimeRange
        this.getClassFinish()
      },
      changeFinishTimeRangeType(){
        if (+this.finishTimeRangeType === 2 ) {
          this.finishTimeRangeType = 1
          this.finishTimeRangeEnd = 'now'
          this.finishTimeRangeStart = 30
          this.getClassFinish()
          return
        }
        this.finishTimeRangeType = 2
        if (this.finishTimeRangeEnd === 'now') {
          let d = new Date();
          d.setDate(d.getDate() - this.finishTimeRangeStart)
          this.finishTimeRangeStart = formatDate(d, 'yyyy-MM-dd')
          this.finishTimeRangeEnd = formatDate(new Date(), 'yyyy-MM-dd')
        }
      },
      async getClassFinish(){
        this.currentIdx = 0
        this.finishData = null
        this.finishDataNum  = 0
        let classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
        if (!classId) {
          return
        }
        let start = this.finishTimeRangeStart
        if (this.finishTimeRangeEnd === 'now') {
          let d = new Date();
          d.setDate(d.getDate() - this.finishTimeRangeStart)
          this.finishTimeRangeStr = formatDate(d, 'yyyy-MM-dd') + ' 至' + formatDate(new Date(), 'yyyy-MM-dd')
          start = '-' + this.finishTimeRangeStart + ' days'
        }else{
          this.finishTimeRangeStr = this.finishTimeRangeStart + ' 至' + this.finishTimeRangeEnd
        }
        try {
          wx.showLoading({title: '加载中...', mask: true})
          this.loading = true
          let ret = await syncFun.request({
            url: this.globalData.apiBaseUrl + '/teacher/sclass/analysis/finish',
            data: {token: this.globalData.token, class_id: classId, start: start, end: this.finishTimeRangeEnd},
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
            seriesData.push({value: [+i + 1, retData[i].finish_rate] })
          }
          this.finishDataNum = seriesData.length
          this.finishData = {
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
      async getClassScore(){
        this.currentIdx = 1
        this.scoreData = null
        this.scoreDataNum = 0
        let classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
        if (!classId) {
          return
        }
        let start = this.scoreTimeRangeStart
        if (this.scoreTimeRangeEnd === 'now') {
          let d = new Date();
          d.setDate(d.getDate() - this.scoreTimeRangeStart)
          this.scoreTimeRangeStr = formatDate(d, 'yyyy-MM-dd') + ' 至' + formatDate(new Date(), 'yyyy-MM-dd')
          start = '-' + this.scoreTimeRangeStart + ' days'
        }else{
          this.scoreTimeRangeStr = this.scoreTimeRangeStart + ' 至' + this.scoreTimeRangeEnd
        }
        try {
          wx.showLoading({title: '加载中...', mask: true})
          this.loading = true
          let ret = await syncFun.request({
            url: this.globalData.apiBaseUrl + '/teacher/sclass/analysis/score',
            data: {token: this.globalData.token, class_id: classId, start: start, end: this.scoreTimeRangeEnd},
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
            seriesData.push({value: [+i + 1, retData[i].rate_score] })
          }
          this.scoreDataNum = seriesData.length
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
      async getClassDetail(){
        this.detailLoaded = false
        let classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
        if (!classId) {
          return
        }
        try {
          wx.showLoading({title: '加载中...', mask: true})
          let ret = await syncFun.request({
            url: this.globalData.apiBaseUrl + '/teacher/sclass/detail',
            data: {token: this.globalData.token, class_id: classId},
            method: 'GET'
          })
          wx.hideLoading()
          if (ret.data.retCode !== 0) {
            wx.showToast({ title: ret.data.retMsg, icon: 'none', })
            return
          }
          this.studentList = ret.data.retData.students ? ret.data.retData.students : []
          this.classDetail = ret.data.retData
          wx.setNavigationBarTitle({
            title: this.classDetail.class_name
          })
        }catch (e) {
          wx.hideLoading()
          wx.showToast({ title: '网络通信错误！', icon: 'none', })
          console.log(e)
        }finally {
          this.detailLoaded = true;
        }
      },
      changeScoreTimeRange(finishTimeRange){
        this.scoreTimeRangeStart = finishTimeRange
        this.getClassScore()
      },
      changeScoreTimeRangeType(){
        if (+this.scoreTimeRangeType === 2 ) {
          this.scoreTimeRangeType = 1
          this.scoreTimeRangeEnd = 'now'
          this.scoreTimeRangeStart = 30
          this.getClassScore()
          return
        }
        this.scoreTimeRangeType = 2
        if (this.scoreTimeRangeEnd === 'now') {
          let d = new Date();
          d.setDate(d.getDate() - this.scoreTimeRangeStart)
          this.scoreTimeRangeStart = formatDate(d, 'yyyy-MM-dd')
          this.scoreTimeRangeEnd = formatDate(new Date(), 'yyyy-MM-dd')
        }
      },
      getClassStudents(){
        this.currentIdx = 2
      },
      sortStudentList(field) {
        let sortBy = 'desc';
        if (field === this.sortField) {
          sortBy = this.sortBy === 'desc' ? 'asc' : 'desc';
        }
        this.sortBy = sortBy
        this.sortField = field
        let studentList = this.studentList
        studentList.sort(function(a, b) {
          if (!isNaN(+a[field]) && !isNaN(+b[field])) {
            if (sortBy === 'asc') {
              return a[field] - b[field]
            }
            if (sortBy === 'desc') {
              return b[field] - a[field]
            }
          }
          if (sortBy === 'asc') {
            if (a[field] > b[field]) {
              return 1;
            }
            if (a[field] === b[field]) {
              return 0;
            }
            if (a[field] < b[field]) {
              return -1;
            }
          }
          if (sortBy === 'desc') {
            if (a[field] > b[field]) {
              return -1;
            }
            if (a[field] === b[field]) {
              return 0;
            }
            if (a[field] < b[field]) {
              return 1;
            }
          }

        })
        this.studentList = studentList
      },
      toStudentDetail(student){
        let classId = this.$root.$mp.query.hasOwnProperty('classId') ? this.$root.$mp.query.classId : null
        let complete_rate = student.complete_rate  === null ? 0 :  student.complete_rate
        let score_rate = student.score_rate  === null ? 0 :  student.score_rate
        wx.navigateTo({url: '/pages/classAnalysisStudentDetail/main?' +
          'classId=' + classId +
          '&studentId=' + student.student_id +
          '&completeRate=' + complete_rate +
          '&scoreRate=' + score_rate +
          '&studentName=' + student.student_name
        })
      }
    },
    onShow(){

    },
    onLoad () {
      this.getClassDetail()
      this.getClassFinish()
      this.STATIC_URL = this.globalData.staticBaseUrl
    },
    onUnload(){
      this.currentIdx = 0
      this.loading = true
      this.detailLoaded = false
      this.finishTimeRangeType = 1
      this.finishTimeRangeStart = '30'
      this.finishTimeRangeEnd = 'now'
      this.finishTimeRangeStr = ''

      this.scoreTimeRangeType = 1
      this.scoreTimeRangeStart = '30'
      this.scoreTimeRangeEnd = 'now'
      this.scoreTimeRangeStr = ''

      this.finishData = {}
      this.scoreData = {}
      this.classDetail = {}
      this.studentList = []

      this.sortField = 'score_rate'
      this.sortBy = 'desc'

      this.showFinishDesc = false
      this.showScoreDesc = false

      this.finishDataNum = 0
      this.scoreDataNum = 0

    }
  }
</script>

<style scoped>
    .container{
        display: flex;display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .navbar{
        display: flex;display: -webkit-flex;width: 100%;
    }
    .navbar-item{
        flex: 1;
        text-align: center;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        padding-bottom: 5px;
    }
    .tab-finish,.tab-score,.tab-student{
        width: calc(100% - 20px);
        padding-top: 10px;
        display: flex;display: -webkit-flex;
        flex-direction: column;
        flex: 1;
    }
    .item_on{
        color: #409eff;
        border-bottom-style: solid;
        border-bottom-color: #409eff;
        border-right-width: 2px;
    }
    .warp-line{
        width: 100%;
        height: 1px;
        background-color: #999999;
    }
    .radio-btn-group{
        display: flex;display: -webkit-flex;width: 100%;
        flex-direction: row;
    }
    .radio-btn{
        flex: 1;
        height: 25px;
        border: 0.5px solid #999999;
        text-align: center;
        font-size: 14px;
        line-height: 25px;
    }
    .radio-btn:nth-child(2){
        border-left: none;
        border-right: none;
    }
    .radio-btn.select{
        background-color: #409eff;
        color: #ffffff;
        border: 0.5px solid #409eff;
    }
    .student-list{
        margin-top: 10px;
        width: 100%;
    }
    .tips-title .text2{
        flex: 1;
        text-align: right;
    }
    .student-avatar{
        width: 25px;
        height: 25px;
        margin-top: 3px;
    }
    .tips-content{
        border-radius: 4px;
        font-size: 14px;
    }
    .flex-center-column{
        display: flex;display: -webkit-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .flex{
        display: -webkit-flex;display: flex;
    }
    .sort-icon {
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center;
        height: 34px;
        width: 24px;
        vertical-align: middle;
        cursor: pointer;
        overflow: initial;
        position: relative;
    }
    .sort-caret {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        position: absolute;
        left: 7px;
    }
    .sort-caret.descending {
        border-top-color: #c0c4cc;
        bottom: 7px;
    }
    .sort-caret.ascending {
        border-bottom-color: #c0c4cc;
        top: 5px;
    }
    .sort-caret.descending.primary {
        border-top-color: #409eff;
    }
    .sort-caret.ascending.primary {
        border-bottom-color: #409eff;
    }
    .ec-line {
        width: 100%;height: 100%;flex:1;display: flex;display: -webkit-flex;flex-direction: column;align-items: center;
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
    .time-range{
        height: 60px;
    }
    .time-range-select{
        display: -webkit-flex;display: flex;
        align-items: center;
    }
    .picker{
        border-bottom-style: solid;
        border-bottom-width: 1rpx;
        border-bottom-color: #999999;
    }
    .tab-desc{
        background-color: #f0f6fa;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 5px;
    }
    .fb{
        font-weight: bold;
    }
    .no-class{
        display: flex;display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        text-align: center;
        flex: 1;
    }
    .no-class img{
        width: 260px;
        height: 210px;
    }
    .no-class .add-class-tips{
        font-size: 17px;
        color: #9a9a9a;
        margin-top: 45px;
    }
    .no-class .add-class-btn{
        width: 156px;
        height: 49px;
        line-height: 49px;
        margin-top: 30px;
        border-radius: 4px;
        font-size: 17px;
    }
    .back-arrow{
        height: 100%;background-color: #c7c7c7;width: 25px;
        margin-right: 20px;
        display: flex;display: -webkit-flex;
        justify-content: center;
        align-items: center;
    }
    .back-arrow .icon-left{
        color: #ffffff;
    }
</style>
