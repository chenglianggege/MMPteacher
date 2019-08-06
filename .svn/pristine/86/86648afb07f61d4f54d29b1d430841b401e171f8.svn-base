
function request(object) {
  return new Promise((resolve, reject) => {
    object = object ? object : {}
    object.success = res=>{
      if (res.data.retCode === 4001){
        wx.removeStorageSync('token')
        wx.reLaunch({url: '/pages/index/main?kick=1'})
      }
      resolve(res)
    }
    object.fail = res=>reject(res)
    wx.request(object)
  })
}
function showModal(object) {
  return new Promise((resolve, reject) => {
    object = object ? object : {}
    object.success = res=>resolve(res)
    object.fail = res=>reject(res)
    wx.showModal(object)
  })
}
export default {
  request,
  showModal
}
