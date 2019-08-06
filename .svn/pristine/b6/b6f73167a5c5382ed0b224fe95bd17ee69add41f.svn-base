export default {
  onShow(){
    this.logTrack()
  },
  methods: {
    logTrack (path) {
      path = path ? '/' + path : ''
      let pages = getCurrentPages()
      let contentUrl = pages[pages.length-1].route
      if (contentUrl.indexOf('#') >= 0) {
        contentUrl = contentUrl.substr(contentUrl.indexOf('#') + 1)
      }
      if (contentUrl.indexOf('?') > 0) {
        contentUrl = contentUrl.substr(0, contentUrl.indexOf('?'))
      }
      let params = wx.getStorageSync('userInfo')
      params = params || {}
      let userArea = ''
      params.province = ''
      params.city = ''
      params.area = ''
      if (params && params.hasOwnProperty('user_area') && params.user_area) {
        userArea = params.user_area.province_name + params.user_area.city_name
        userArea = userArea + (+params.user_area.area_id !== +params.user_area.city_id ? params.user_area.full_name : '')
        params.province = params.user_area.province_name
        params.city = params.user_area.city_name
        params.area = params.user_area.full_name
      }
      params.user_area = userArea
      params.contentUrl = contentUrl + path
      params.APIVersion = '0.6.0'
      params.client = 'wxapp'
      wx.request({
        url: 'https://365speak.cn-hangzhou.log.aliyuncs.com/logstores/teacher_client_log/track',
        data: params,
        method: 'GET'
      })
    }
  }
}

