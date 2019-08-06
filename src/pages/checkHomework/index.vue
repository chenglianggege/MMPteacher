<template>
  <div class="container">
    <div class="homework-list" v-if="total > 0">
      <homework-item v-for="(item,idx) in homeworkList" :key="idx" :item="item" @del="onRemove(idx)" />
    </div>
    <div class="no-class" v-if="total === 0">
      <img src="./../../images/checkHomework/wuzuoye.png"/>
      <div class="add-class-tips">您还没有布置任何作业！</div>
      <button class="weui-btn clear add-class" type="primary" @click="toPublish">布置作业</button>
    </div>
    <list-footer v-if="total == loadTotal && total > 0"></list-footer>
  </div>
</template>


<script>
import syncFun from '@/utils/syncFun.js'
import {formatDate} from '@/utils/date.js'
import homeworkItem from '@/components/homeworkItem'
import listFooter from '@/components/listFooter'
const onfire = require("@/utils/onfire.js").onfire
import mainMixin from '@/mixin/mainMixin.js'

export default {
  data () {
    return {
      homeworkList: [],
      page: 1,
      total: 0,
      loadTotal: 0
    }
  },
  mixins: [mainMixin],
  components: {
    'homework-item': homeworkItem,
    'list-footer': listFooter
  },
  watch: {

  },
  methods: {
    onRemove(idx){
      let homeworkList = this.homeworkList
      homeworkList.splice(idx, 1);
      this.homeworkList = homeworkList
      this.total = this.total - 1
      this.loadTotal = this.loadTotal - 1
    },
    async loadHomework(page){
      if ( this.loading ){
        return
      }
      try {
        this.loading = true
        //wx.showLoading({title: '加载中...', mask: true})
        let ret = await syncFun.request({
          url: this.globalData.apiBaseUrl + '/teacher/homework/list',
          data: {token: this.globalData.token, pagesize: 10, page: page},
          method: 'GET'
        })
        wx.stopPullDownRefresh()
        wx.hideLoading()
        if (ret.data.retCode !== 0) {
          wx.showToast({ title: ret.data.retMsg, icon: 'none', })
          return
        }
        let homeworkList = ret.data.retData.list || []
        //console.log('homeworkList', homeworkList)
        if (page >1){
          this.homeworkList = this.homeworkList.concat(homeworkList)
        } else{
          this.homeworkList = homeworkList
        }
        this.loadTotal = this.homeworkList.length
        this.total = +ret.data.retData.total
      }catch (e) {
        wx.hideLoading()
        wx.showToast({ title: '网络通信错误！', icon: 'none', })
      }finally {
        this.loading = false
      }
    },
    toPublish(){
      wx.redirectTo({url: '/pages/publish/main'})
    },
  },

  onLoad () {
    let _this = this
    this.reloadEvent = onfire.on('reloadHomework', function (){
      _this.homeworkList = []
      _this.page = 1
      wx.showLoading({title: '加载中...', mask: true})
      _this.loadHomework(1)
      _this.$forceUpdate()
    })

    this.homeworkList = []
    this.loading = false
    wx.showLoading({title: '加载中...', mask: true})
    this.loadHomework(1)
  },
  onUnload(){
    this.homeworkList = []
    this.page = 1
    onfire.un('reloadHomework');
    onfire.un(this.reloadEvent);
  },
  onPullDownRefresh(){
    this.page = 1
    this.loadHomework(1)
  },
  onReachBottom(){
    if (this.loadTotal >= this.total) {
      return
    }
    this.loadHomework(this.page + 1)
    this.page = this.page + 1
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    background-color: #f5f5f7;
    flex: 1;
  }
  .homework-list{
    display: flex;display: -webkit-flex;
    flex-direction: column;
    width: calc(100% - 20px);
    margin-left: 10px;
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
  }
  .no-class .add-class-tips{
    font-size: 17px;
    color: #9a9a9a;
    margin-top: 56px;
  }
  .no-class .add-class{
    width: 156px;
    height: 49px;
    line-height: 49px;
    margin-top: 30px;
    border-radius: 4px;
    font-size: 17px;
  }
</style>
