<template>

  <div v-if="isChecked || showCart" :class="{'onplay': playUrl == item.source_content}" class="checkbox-item" >
      <label class="checkbox" >
        <checkbox :value="value" :checked="isChecked" :disabled="disabled || !showCart" v-show="showCart" />
        <div  class="f12" @click="toAnswer(item.item_id, item.source_content)" style="min-width: 50px">{{item.item_content}}</div>
      </label>
    <icon v-if="item.source_content" class="iconfont icon-laba" @click="audioPlay(item.source_content)"></icon>
  </div>
</template>

<script>
export default {
  name: 'checkBox',
  props: {
    value: {},
    checkedValues: {},
    disabled: {},
    showCart: {},
    item: {},
    playUrl: {}
  },
  computed: {
    isChecked (){
      if (!this.checkedValues.length) {
        return true
      }
     return this.checkedValues.indexOf(this.value) != -1
    }
  },
  data () {
    return {

    }
  },
  methods: {
    audioPlay(src){
      this.$parent.audioPlay(src)
    },
    toAnswer(item_id, src){
      if (this.$parent.showAnswer){
        this.$parent.toAnswer(item_id)
      } else {
        this.$parent.audioPlay(src)
      }
    }
  },
  onUnload(){
    this.item = {}
    this.playUrl = ''
    this.checkedValues = []
    this.value = ''
  }
}
</script>

<style scoped>
  .checkbox-item{
    overflow: scroll;display: flex;display: -webkit-flex;margin-top: 10px;height: 30px;line-height: 30px;width: 150px;
  }
</style>
