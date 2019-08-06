<template>
  <div class="homework-item">
    <div class="homework-title">
      <div class="item-status" :class="{'status-unbegin': item.status == 100, 'status-begin': item.status == 101, 'status-end': item.status == 200}">
        {{item.status == 100 ? '未开始' : ''}}
        {{item.status == 101 ? '进行中' : ''}}
        {{item.status == 200 ? '已结束' : ''}}
      </div>
      <div class="title"><text>{{item.exam_title}}</text></div>
    </div>
    <div class="homework-time">{{beginTime}} ~ {{endTime}}</div>
    <div class="warp-line"></div>
    <div class="class-info">
      <img src="./../images/classList/banjiicon.png"/>
      <div class="title">{{item.class_name}}</div>
    </div>
    <div class="homework-info">
      完成人数：<text class="f14 mr10 c-primary">{{item.finish_user_num}}/{{item.exam_user_num}}</text> 平均分：{{item.average_score}}/{{item.paper_score}}
    </div>
    <div class="warp-line"></div>
    <div class="menus" v-if="item.status == 100">
      <div class="menu" @click="toPaper"><img src="./../images/homeworkItem/xiangqing.png"/><div>预览</div></div>
      <div class="menu" @click="toEdit"><img src="./../images/homeworkItem/xiugai.png"/><div>修改</div></div>
      <div class="menu" @click="confirmBack"><img src="./../images/homeworkItem/chehui.png"/><div>撤回</div></div>
      <div class="menu"></div>
    </div>
    <div class="menus" v-if="item.status == 101">
      <div class="menu" @click="toDetail"><img src="./../images/homeworkItem/xiangqing.png"/><div>作业详情</div></div>
      <div class="menu" @click="toPaper"><img src="./../images/homeworkItem/jiangping.png"/><div>内容讲评</div></div>
      <div class="menu" @click="toEdit"><img src="./../images/homeworkItem/xiugai.png"/><div>修改</div></div>
      <div class="menu" @click="confirmBack"><img src="./../images/homeworkItem/chehui.png"/><div>撤回</div></div>
    </div>
    <div class="menus" v-if="item.status == 200">
      <div class="menu" @click="toDetail"><img src="./../images/homeworkItem/xiangqing.png"/><div>作业详情</div></div>
      <div class="menu" @click="toPaper"><img src="./../images/homeworkItem/jiangping.png"/><div>内容讲评</div></div>
      <div class="menu" @click="toEdit"><img src="./../images/homeworkItem/xiugai.png"/><div>修改</div></div>
      <div class="menu"></div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/utils/date.js'
  import syncFun from '@/utils/syncFun.js'
  export default {
    name: 'homeworkItem',
    props: {
      item: {}
    },
    computed: {
      beginTime (){
        return formatDate(new Date(parseInt(this.item.publish_time + '000')), 'yyyy-MM-dd hh:mm')
      },
      endTime(){
        return formatDate(new Date(parseInt(this.item.finish_time+ '000')), 'yyyy-MM-dd hh:mm')
      }
    },
    methods: {
      async confirmBack(){
        let ok = await syncFun.showModal({
          title: '确认撤回',
          content: '是否确认撤回作业?',
          showCancel: true,
          confirmColor: '#009efa'
        })
        if (ok.confirm){
          try {
            wx.showLoading({title: '删除中...', mask: true})
            let ret = await syncFun.request({
              url: this.globalData.apiBaseUrl + '/teacher/homework/del?token=' + this.globalData.token,
              data: {exam_id: this.item.exam_id},
              method: 'POST'
            });
            if (ret.data.retCode !== 0) {
              wx.showToast({title: ret.data.retMsg, icon: 'none',})
              return
            }
            this.$emit('del')
          }catch (e) {
            wx.showToast({ title: '网络通信错误！', icon: 'none', })
          }finally {
            wx.hideLoading()
          }

        }
      },
      toPaper(){
        let examId = this.item.exam_id
        wx.navigateTo({url: '/pages/paper/main?examId=' + examId})
      },
      toEdit(){
        wx.navigateTo({url:
          '/pages/editHomework/main' +
          '?examId=' + this.item.exam_id +
          '&publish_time=' + this.item.publish_time +
          '&finish_time=' + this.item.finish_time +
          '&exam_title=' + this.item.exam_title
        })
      },
      toDetail(){
        let examId = this.item.exam_id
        wx.navigateTo({url: '/pages/homeworkDetail/main?examId=' + examId})
      }
    }
  }
</script>

<style scoped>
  .homework-item{
    background-color: #ffffff;
    display: flex;display: -webkit-flex;
    flex-direction: column;
    margin-top: 10px;
    border-radius: 4px;
    height: 226px;
    width: 100%;
  }
  .homework-title{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    padding-left: 15px;
  }
  .class-info{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .class-info img{
    width: 21px;
    height: 21px;
    margin-left: 15px;
  }
  .class-info .title{
    font-size: 17px;
    color: #353535;
    margin-left: 15px;
  }
  .item-status{
    font-size: 12px;
    color: #fff;
    border-radius: 3px;
    height: 22px;
    width: 54px;
    text-align: center;
    line-height: 22px;
  }
  .status-unbegin{
    background-color: #1294fa;
  }
  .status-begin{
    background-color: #41b611;
  }
  .status-end{
    background-color: #c5c5c5;
  }
  .homework-title .title{
    font-size: 17px;
    overflow-y: scroll;
    white-space: nowrap;
    margin-left: 15px;
    color: #353535;
  }
  .homework-time,.homework-info{
    font-size: 14px;
    margin-left: 15px;
    color: #9a9a9a;
    margin-bottom: 10px;
  }
  .warp-line{
    width: 98%;
    height: 1rpx;
    background-color: #efefef;
  }
  .menus{
    display: flex;display: -webkit-flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
  }
  .menu{
    display: flex;display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    font-size: 12px;
    color: #aaaaaa;
    flex: 1;
  }
  .menu img{
    height: 20px;
    width: 20px;
    margin-bottom: 5px;
  }
</style>
