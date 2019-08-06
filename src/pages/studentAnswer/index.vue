<template>
  <div class="container">
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="td">姓名</div>
          <div class="td">排名</div>
          <div class="td">得分</div>
          <div class="td">学生作答</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr" @click="audioPlay(answer.user_answer)" :class="{'c-primary': playUrl == answer.user_answer}" v-for="(answer, idx) in answers" :key="idx">
          <div class="td">{{answer.student_name}}</div>
          <div class="td">{{idx + 1}}</div>
          <div class="td">{{answer.exam_score}}</div>
          <div class="td">
            <icon v-if="answer.answer_type == 2" :class="onLoading && playUrl == answer.user_answer ? 'icon-spin icon-loadc' : 'icon-laba'" class="iconfont" />
            <div v-if="answer.answer_type != 2" :class="answer.exam_score > 0 ? 'c-green' : 'c-red'">{{answer.user_answer}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mainMixin from '@/mixin/mainMixin.js'
export default {
  data () {
    return {
      answers: [],
      playUrl: '',
      onLoading: false
    }
  },
  mixins: [mainMixin],
  components: {
  },
  watch: {

  },
  methods: {
    audioPlay(playUrl){
      if (this.playUrl === playUrl) {
        this.player.stop()
        this.playUrl = ''
        return
      }
      this.onLoading = true
      this.playUrl = playUrl
      console.log('https://' + playUrl + '.mp3?r=' + Math.random())
      this.player.src = 'https://' + playUrl + '.mp3?r=' + Math.random()
    }
  },

  onLoad () {
    let query = this.$root.$mp.query
    let examId = query.hasOwnProperty('examId') ? query.examId : 0
    let itemId = query.hasOwnProperty('itemId') ? query.itemId : 0
    let studentScore = wx.getStorageSync('answer_' + examId) || []
    let answers = []
    // 题目
    for (let i in studentScore){
      let studentAnswers = studentScore[i]
      for (let j in studentAnswers){
        let studentAnswer = studentAnswers[j]
        for (let k in studentAnswer['detail']){
          let detail = studentAnswer['detail'][k]
          if (itemId == detail['item_id']){
            detail['answer_type'] = studentAnswer['answer_type']
            answers.push(detail)
          }
        }
      }
    }

    answers.sort(function (objectN, objectM) {
      let valueN = objectN['exam_score']
      let valueM = objectM['exam_score']
      if (valueN < valueM) return 1
      else if (valueN > valueM) return -1
      else return 0
    })

    this.answers = answers

    let _this = this
    this.player = wx.createInnerAudioContext()
    this.player.autoplay = true
    this.player.onStop(() => {
      console.log('onStop')
    })
    this.player.onPlay(() => {
      _this.onLoading = false
    })
    this.player.onError((e) => {
      _this.onLoading = false
      _this.playUrl = ''
      _this.$forceUpdate()
      console.log('onError', e)
    })
    this.player.onEnded(() => {
      console.log('onEnded')
      _this.playUrl = ''
      _this.$forceUpdate()
    })
  },
  onUnload(){
    this.answers = []
    this.playUrl = ''
    this.player.destroy()
    this.onLoading = false
  }
}
</script>

<style scoped>
  .container{
    margin: 10px;
    display: flex;display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .td{
    flex: 1;
    overflow: hidden;
    text-align: center;
  }

</style>
