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
      <div class="f14 c-primary" v-show="showAnswer">点击句子查看答题结果</div>
      <div class="question-prediv">
        <checkbox-group @change="checkboxChange" class="check-group flex-column">
        <div class="qs-info" v-for="(info,infoIdx) in question.info" :key="info.info_id">
          <div class="item-content" v-for="(item,itemIdx) in info.items" :key="item.item_id">
            <checkbox2  :value="info.info_id" :checkedValues="checkedInfos" :disabled="selStat > 0" :item="item" :showCart="showCart" :playUrl="playUrl"/>
          </div>
        </div>
        </checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import '@/style/question.css'
import quesitonMixin from '@/mixin/questionMixin'
import checkBox from '@/components/checkBox2'
export default {
  name: 'qType40',
  mixins: [quesitonMixin],
  data () {
    return {

    }
  },
  components: {
    checkbox2: checkBox
  },
  onLoad(){

  }
}
</script>

<style scoped>

</style>
