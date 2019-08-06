const onfire = require("../utils/onfire.js").onfire
import syncFun from '@/utils/syncFun.js'
export default {
  onLoad: function () {
    let cart = wx.getStorageSync('cart')
    this.cart = cart ? cart : {}
  },
  data (){
    return {
      cart: {}
    }
  },
  methods: {
    _addToCart(paperId, paperQsNum, qsId, qsTitle, infoNum, qsInfoIds, duration, qsScore){
      console.log('_addToCart',paperId, qsId, this.cart)
      let cartItems = this.cart
      if (!cartItems.hasOwnProperty('p_' + paperId)){
        cartItems['p_' + paperId] = {paperQsNum: paperQsNum, qs: {}, selState: 0}
      }
      if (!cartItems['p_' + paperId]['qs'].hasOwnProperty('q_' + qsId)){
        cartItems['p_' + paperId]['qs']['q_' + qsId] = {infoNum: infoNum, infoIds: [], selState: 0, qsTitle: qsTitle, qsId: qsId, duration: duration, qsScore: qsScore}
      }
      cartItems['p_' + paperId]['qs']['q_' + qsId]['infoIds'] = qsInfoIds ? qsInfoIds : []
      this.cart = {}
      this.cart = cartItems

    },
    _removeCart(paperId, qsId) {
      if (!this.cart.hasOwnProperty('p_' + paperId)){
        return false
      }
      let cartItems = this.cart
      if (!qsId){
        delete cartItems['p_' + paperId]
        this.cart = cartItems
        return true
      }
      if (!cartItems['p_' + paperId]['qs'].hasOwnProperty('q_' + qsId)){
        return false
      }
      delete cartItems['p_' + paperId]['qs']['q_' + qsId]
      if (!Object.keys(cartItems['p_' + paperId]['qs']).length){
        delete cartItems['p_' + paperId]
      }
      this.cart = {}
      this.cart = cartItems
    },
    saveCart(){
      let cartItems = this.cart
      this.cart = {}
      this.cart = cartItems
      this.$forceUpdate()
      wx.setStorageSync('cart', this.cart)
      onfire.fire('cart')
      onfire.fire('cart2')
    },
    qsNum(){
      let qsNum = 0
      let cartItems = this.cart
      for (let i in cartItems) {
        qsNum += Object.keys(cartItems[i]['qs']).length
      }
      return qsNum
    },
    qsScore(){
      let qsScore = 0
      let cartItems = this.cart
      for (let i in cartItems) {
        let qs = cartItems[i]['qs']
        let keys = Object.keys(qs)
        for (let j in keys){
          qsScore += +qs[keys[j]]['qsScore']
        }
      }
      return qsScore
    },
    qsDuration(){
      let qsDuration = 0
      let cartItems = this.cart
      for (let i in cartItems) {
        let qs = cartItems[i]['qs']
        let keys = Object.keys(qs)
        for (let j in keys){
          qsDuration += +qs[keys[j]]['duration']
        }
      }
      return Math.ceil(qsDuration / 60000)
    },
    toMuchModal(){
      return new Promise(async function(resolve, reject) {
        await wx.showModal({
          title: '提示',
          content: '已经10道题了，一份作业别让学生做太久~~',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#409eff'
        });
        resolve()
      })
    },
    checkPaper(paperId){
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
    },
    checkQs(paperId, qsId){
      // 未选择
      if (!this.cart.hasOwnProperty('p_' + paperId)){
        return 0
      }
      if (!this.cart['p_' + paperId]['qs'].hasOwnProperty('q_' + qsId)){
        return 0
      }
      // 此qsId已选info数量
      let infoIdsNum = this.cart['p_' + paperId]['qs']['q_' + qsId]['infoIds'].length;
      // 此qsId总info数量
      let infoNum = this.cart['p_' + paperId]['qs']['q_' + qsId]['infoNum'];
      // 半选
      if (infoIdsNum && infoIdsNum < infoNum) {
        return 1
      }
      // 全选
      return 2
    },
    // 试卷ID ，试卷题目数量， 题目ID， 题目小题IDs， 题目小题总数量
    addCart (paperId, paperQsNum, qsId, qsTitle, qsInfoNum, qsInfoIds, duration, qsScore){
      let _this = this
      return new Promise(async function(resolve, reject) {
        if (_this.qsNum() >= 10) {
          await _this.toMuchModal();
          return resolve()
        }
        _this._addToCart(paperId, paperQsNum, qsId, qsTitle, qsInfoNum, qsInfoIds, duration, qsScore);
        _this.saveCart();
        resolve()
      })
    },
    removeCart(paperId, qsId){
      this._removeCart(paperId, qsId)
      this.saveCart();
    },
    batchAdd(items){
      let _this = this
      return new Promise(async function(resolve, reject) {
        for (let i in items) {
          if (_this.qsNum() >= 10) {
            await _this.toMuchModal();
            break;
          }
          console.log('items', items[i])
          _this._addToCart(...Object.values(items[i]))
        }
        _this.saveCart()
        resolve()
      })
    },
    async clearCart(){
      let ok = await syncFun.showModal({
        title: '清空试题',
        content: '是否确认清空所有试题?',
        showCancel: true,
        confirmColor: '#009efa'
      })
      if (ok.confirm){
        this.cart = {}
        this.saveCart()
      }
    }
  }
}
