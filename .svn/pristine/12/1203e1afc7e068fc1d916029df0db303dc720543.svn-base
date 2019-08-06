<template>
    <div class="container">
        <div class="add-class" @click="toEditClassDetail" v-if="classNum > 0">
            <img src="./../../images/classList/xinzengbanji.png"/>
            <div class="btn-title">
                <div class="title">新增班级</div>
                <div class="desc">点击此处添加班级</div>
            </div>
            <icon class="iconfont icon-more" />
        </div>
        <div class="class-list" v-if="classNum > 0">
            <div class="class-item" v-for="item in classList" :key="index" @click="toClassDetail(item.class_id)">
                <img src="./../../images/classList/banjikapian.png"/>
                <div class="float-item">
                    <div class="top-item">
                        <img src="./../../images/classList/banjiicon.png"/>
                        <div class="class-name">{{item.class_name}}</div>
                        <icon class="iconfont icon-more" />
                    </div>
                    <div class="bottom-item">
                        <div class="item">
                            <div class="num">{{item.student_num}}</div>
                            <div class="title"><img src="./../../images/classList/zongrenshu.png"><span>班级人数</span></div>
                        </div>
                        <div class="item">
                            <div class="num">{{item.activity_num}}</div>
                            <div class="title"><img src="./../../images/classList/yibangka.png"><span>激活人数</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="no-class" v-if="classNum === 0">
            <img src="./../../images/classList/wubanji.png"/>
            <div class="add-class-tips">您还没有班级哦，赶快去创建班级吧！</div>
            <button class="weui-btn add-class-btn" type="primary" @click="toEditClassDetail">创建班级</button>
        </div>
    </div>
</template>

<script>
  import syncFun from '@/utils/syncFun.js'
  import textToFixed from '@/components/textToFixed'
  import mainMixin from '@/mixin/mainMixin.js'

  export default {
    data () {
      return {
        classList: [],
        classNum: 0
      }
    },
    mixins: [mainMixin],
    components: {
      textToFixed: textToFixed
    },
    watch: {

    },
    methods: {
      async getClassList(){
        try {
          this.classList = []
          wx.showLoading({title: '加载中...', mask: true})
          let ret = await syncFun.request({
            url: this.globalData.apiBaseUrl + '/teacher/sclass/list',
            data: {token: this.globalData.token},
            method: 'GET'
          })
          wx.hideLoading();
          if (ret.data.retCode !== 0) {
            wx.showToast({ title: ret.data.retMsg, icon: 'none', })
            return
          }
          this.classList = ret.data.retData ? ret.data.retData : []
          this.classNum = this.classList.length

        } catch (e) {
          console.log(e)
          wx.hideLoading();
          wx.showToast({ title: '网络通信错误！', icon: 'none', })
        } finally {

        }
      },
      toClassDetail(classId){
        wx.navigateTo({url: '/pages/classDetail/main?classId=' + classId})
      },
      toEditClassDetail(){
        wx.navigateTo({url: '/pages/editClassDetail/main'})
      }
    },
    onShow(){
      this.getClassList()
    },
    onLoad () {

    },
    onUnload(){
      this.classList = []
      this.classNum = 0
    }
  }
</script>

<style scoped>
    .container{
        align-items: center;
        width: 100%;
        background-color: #f5f5f7;
        height: 100%;
        overflow-y: scroll;
    }
    .add-class{
        width: calc(100% - 20px);
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 77px;
        border-radius: 3px;
        display: flex;display: -webkit-flex;
        flex-direction: row;
        background-color: #ffffff;
        align-items: center;
    }
    .add-class img{
        height: 53px;
        width: 74px;
        margin-left: 30px;
    }
    .add-class .btn-title{
        flex: 1;
        margin-left: 20px;
    }
    .add-class .btn-title .title{
        font-size: 17px;
        color: #353535
    }
    .add-class .btn-title .desc{
        font-size: 12px;
        color: #aaaaaa;
    }
    .icon-more{
        font-size: 20px;
        margin-right: 20px;
    }
    .class-list{
        margin-left: 10px;
        width: calc(100% - 20px);
        background-color: #ffffff;
        border-radius: 6px;
    }
    .class-item{
        width: 100%;
        display: flex;display: -webkit-flex;
        flex-direction: column;
        background-color: #f5f5f7;
        height: 155px;
        padding-bottom: 10px;
        position: relative;
    }
    .class-item img{
        height: 155px;
        width: 100%;
    }
    .class-item .top-item{
        height: 50px;
        width: 100%;
        display: flex;display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        background-color: #ffffff;
    }
    .float-item{
        position: absolute;
        top: 0;
        width: 100%;
    }
    .class-item .bottom-item{
        display: -webkit-flex;display: flex;
        flex-direction: row;
    }

    .class-item .top-item img{
        width: 21px;
        height: 21px;
        margin-left: 15px;
    }
    .class-item .class-name{
        font-size: 18px;
        flex: 1;
        margin-left: 10px;
    }
    .bottom-item .item{
        height: 100px;
        flex: 1;
        display: -webkit-flex;display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .bottom-item .item .num{
        font-size: 17px;
        color: #353535;
        margin-bottom: 10px;
    }
    .bottom-item .item .title{
        font-size: 14px;
        color: #9a9a9a;
        height: 20px;
        line-height: 20px;
        display: -webkit-flex;display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .bottom-item .item .title img{
        width: 17px;
        height: 17px;
        margin-right: 10px;
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
    .no-class .add-class-btn{
        width: 156px;
        height: 49px;
        line-height: 49px;
        margin-top: 30px;
        border-radius: 4px;
        font-size: 17px;
    }
</style>
