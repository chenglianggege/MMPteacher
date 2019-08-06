const onfire = require("@/utils/onfire.js").onfire

import cartMixin from '@/mixin/cartMixin'
export default {
  onLoad () {
    //console.log(this.showDetail, this.question.info)
    let allItems = []
    for (let i in this.question.info){
      allItems.push(this.question.info[i]['info_id'])
    }
    this.checkedInfos = []
    let paperId = this.question.paper_id
    let qsId = this.question.qs_id
    if (this.checkQs(paperId, qsId)) {
      this.checkedInfos = this.cart['p_' + paperId]['qs']['q_' + qsId]['infoIds']
    } else {
      this.checkedInfos = allItems
    }
    //console.log(this.checkedInfos)
    let _this = this
    /*
    this.stopPlayEvent = onfire.on('stopPlay', function (){
      _this.playUrl = ''
      _this.$forceUpdate()
    })
    */
    this.cartEvent =  onfire.on('cart', function (){
      let cart = wx.getStorageSync('cart')
      _this.cart = {}
      _this.cart = cart ? cart : {}
      _this.$forceUpdate()
    })
    this.STATIC_URL = this.globalData.paperBaseUrl

    this.player = wx.createInnerAudioContext()
    this.player.autoplay = true
    this.player.onStop(() => {
      console.log('onStop')
      //_this.playUrl = ''
      //_this.$forceUpdate()
    })
    this.player.onEnded(() => {
      console.log('onEnded')
      _this.playUrl = ''
      _this.$forceUpdate()
    })
    this.player.onPlay(() => {
      console.log('onPlay')
    })
    this.player.onError((res) => {
      console.log('onError',res)
    })
  },
  onUnload(){
    this.player.destroy()
    //onfire.un('stopPlay');
    //onfire.un(this.stopPlayEvent);
    onfire.un('cart');
    onfire.un(this.cartEvent);
    //this.$data = {}
    //unload时要清除下数据 ----！！！巨坑！！！！
    this.question = {}
    this.showDetail = false
    this.showCart = false
    this.studentAnswer = {}
  },
  mixins: [cartMixin],
  props: {
    question: {},
    showCart: {},
    studentAnswer: {}
  },
  data (){
    return {
      showDetail: false,
      playUrl: '',
      STATIC_URL: '',
      options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      checkedInfos: []
    }
  },
  computed: {
    selStat (){
      let paperId = this.question.paper_id
      let qsId = this.question.qs_id
      return this.checkQs(paperId, qsId)
    },
    showAnswer(){
      return this.question.hasOwnProperty('student_score')
    }
  },
  methods: {
    toggleDetail() {
      this.player.stop()
      this.showDetail = !this.showDetail
    },
    checkboxChange(e){
      console.log('e', e)
      this.checkedInfos = e.mp.detail.value

    },
    selectQs(){
      let paperId = this.question.paper_id
      let qsId = this.question.qs_id
      console.log('paperId, qsId', paperId, qsId)
      if (this.checkQs(paperId, qsId)) {
        this.removeCart(paperId, qsId)
        return
      }
      let paper = this.$parent.paper
      let qsNum = this.$parent.paperDetail.length
      let duration = 0
      let qsScore = 0
      for (let i in this.question.info) {
        let info = this.question.info[i]
        if (this.checkedInfos.length && this.checkedInfos.indexOf(info.info_id) >= 0){
          duration += +info.duration
          for (let j in info.items) {
            qsScore += +info.items[j].item_score
          }
        }
      }
      duration += +this.question.audio_duration
      duration += this.question.item_num * 1000
      // 试卷ID ，试卷题目数量， 题目ID， 题目小题IDs， 题目小题总数量
      this.addCart(paperId, qsNum, qsId, paper.paper_title, this.question.info.length, this.checkedInfos, duration, qsScore);
    },
    audioPlay(playUrl){
      if (this.playUrl === playUrl) {
        this.player.stop()
        this.playUrl = ''
        return
      }
      this.playUrl = playUrl
      this.player.src = this.globalData.paperBaseUrl + playUrl + '?r=' + Math.random()
    },
    toAnswer(itemId){
      //console.log('itemId', itemId)
      let examId = this.$parent.examId
      if (this.showAnswer && examId){
        wx.setStorageSync('answer_' + examId, this.question.student_score)
        wx.navigateTo({url: '/pages/studentAnswer/main?itemId=' + itemId + '&examId=' + examId})
      }
    }
  }
}
