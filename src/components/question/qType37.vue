<template>
  <div class="question">
    <div class="question-title">
      <div class="tips"></div><text class="text">{{question.qs_title}}</text>
    </div>
    <div class="select-question" v-show="showCart">
      <div class="flex1">
        <button class="weui-btn select-btn" :class="{plain: !selStat}" type="primary"  @click="selectQs">
          {{!selStat ? '选择' : (selStat === 1 ? '部分选' : '已选择' )}}
        </button>
      </div>
      <div class="flex1 flex-center">
        <text class="show-detail" @click="toggleDetail">{{showDetail ? '收起详情↑' : '查看详情↓'}}</text>
      </div>
    </div>
    <div class="question-detail" v-show="!showCart || showDetail">
      <div class="question-subtitle">{{question.qs_content}}</div>
      <div class="question-prediv">
        <div class="qs-info" v-for="(info,info_idx) in question.info" :key="info.info_id">
          <div v-if="info_idx == 0">
            <div class="info-content">
              {{info.info_content}}
            </div>
            <img class="info-img" v-if="info.info_content_img" :src="STATIC_URL + info.info_content_img">
            <div class="items" v-for="(item,index1) in info.items" :key="item.item_id">
              <div class="item-content"><span v-show="item.source_content" class="horn-icon" :data-src="item.source_content" @click="audioPlay($event)"></span></div>
              <div class="item-answer"  v-for="answer in item.answers" :key="answer.answer_id"><span>填空{{index1+1}}：{{answer.answer_content}}</span></div>
              <div class="item-answer">准备时间：{{item.item_prepare_second}}秒 答题时间：{{item.item_answer_second}}秒 题目满分：{{item.item_score}}分</div>
              <div class="item-answer c-primary" v-if="showAnswer" @click="toAnswer(item.item_id)">查看学生回答→</div>
            </div>
          </div>
          <div v-if="info_idx == 1">
            <div class="info-content">
              {{info.info_content}}
            </div>
            <div class="items" v-for="(item,index2) in info.items" :key="item.item_id">
              <div class="item-content"><span v-show="item.source_content" class="horn-icon" :data-src="item.source_content" @click="audioPlay($event)"></span></div>
              <div class="item-answer"  v-for="answer in item.answers" :key="answer.answer_id"><span>评分参考文本：{{answer.answer_content}}</span></div>
              <div class="item-answer">准备时间：{{item.item_prepare_second}}秒 答题时间：{{item.item_answer_second}}秒 题目满分：{{item.item_score}}分</div>
              <div class="item-answer c-primary" v-if="showAnswer" @click="toAnswer(item.item_id)">查看学生回答→</div>
            </div>
          </div>
          <div v-if="info_idx == 2">
            <div class="info-content">
              {{info.info_content}}
            </div>
            <div class="items" v-for="(item,index3) in info.items" :key="item.item_id">
              <div class="item-content">{{item.item_content ? item.item_content + '. ' : '问题' + (index3+1) + '. '}}<span v-show="item.source_content" class="horn-icon" :data-src="item.source_content" @click="audioPlay($event)"></span></div>
              <div class="item-answer"  v-for="answer in item.answers" :key="answer.answer_id"><span>评分参考文本：{{answer.answer_content}}</span></div>
              <div class="item-answer">准备时间：{{item.item_prepare_second}}秒 答题时间：{{item.item_answer_second}}秒 题目满分：{{item.item_score}}分</div>
              <div class="item-answer c-primary" v-if="showAnswer" @click="toAnswer(item.item_id)">查看学生回答→</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/style/question.css'
import quesitonMixin from '@/mixin/questionMixin'
export default {
  name: 'qType38',
  mixins: [quesitonMixin]
}
</script>

<style scoped>

</style>
