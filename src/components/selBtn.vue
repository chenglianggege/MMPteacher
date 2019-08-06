<template>
  <button class="weui-btn list-btn-select " :class="{plain: !selStat}" type="primary" @click="click">
    {{!selStat ? '选择' : (selStat === 1 ? '部分选' : '已选择' )}}
  </button>
</template>

<script>
export default {
  name: 'selBtn',
  props: {
    paper: {},
    cart: {}
  },
  computed: {
    selStat (){
      let paperId = this.paper.paper_id
      // 未选择
      if (!this.cart.hasOwnProperty('p_' + paperId)){
        return 0
      }
      let qsNum = Object.keys(this.cart['p_' + paperId]['qs']).length
      // 半选
      if (qsNum < this.cart['p_' + paperId]['paperQsNum']) {
        return 1
      }
      // 全选
      return 2
    }
  },
  data () {
    return {

    }
  },
  methods: {
    click(){
      this.$emit('click', this.paper.paper_id)
    }
  }
}
</script>

<style scoped>
  .list-btn-select{
    height: 25px;
    line-height: 25px;
    margin-top: 0;
    font-size: 16px;
    width: 60px;
    text-align: center;
    padding: 0;
  }
</style>
