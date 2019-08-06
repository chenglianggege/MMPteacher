<script>
export default {
  async created () {
    wx.getSetting({
      success: function (setting) {
        console.log('setting', setting)
      }
    })

  }
}
</script>

