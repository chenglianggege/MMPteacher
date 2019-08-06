<template>
  <text>{{newVal}}</text>
</template>

<script>
export default {
  name: 'textToFixed',
  props: {
    value: {},
    point: {}
  },
  computed: {
    newVal (){
      return (+this.value).toFixed(this.point)
    }
  },
  data () {
    return {

    }
  },
  onUnload(){
    this.value = ''
    this.point = 1
  }
}
</script>
