// client/pages/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      selectList:[
        {
          name:'肖',
          sex:'male',
          phoneNum:'18813136860',
          address:'北京市海淀区北京邮电大学西土城校区学二121',
          distance:'1km',
          status:'待接单',
          timeType:'尽快送达',
          payType:'线上支付',
          ifPay:true,
          price:'17',
          orderId:'123123123123523',
          time:'2019-2-12 10:11:12',
          comment:'无备注'
        },
        {
          name:'张',
          sex:'male',
          phoneNum:'18813136860',
          address:'北京市海淀区北京邮电大学西土城校区学二121',
          distance:'1km',
          status:'待接单',
          timeType:'尽快送达',
          payType:'线上支付',
          ifPay:true,
          price:'17',
          orderId:'123123123123523',
          time:'2019-2-12 10:11:12',
          comment:'无备注'
        },
        {
          name:'张',
          sex:'male',
          phoneNum:'13113137860',
          address:'北京市海淀区北京航空航天大学',
          distance:'2.1km',
          status:'待接单',
          timeType:'尽快送达',
          payType:'线上支付',
          ifPay:true,
          price:'17',
          orderId:'123123123123523',
          time:'2019-2-12 10:11:12',
          comment:'无备注'
        },
        {
          name:'林',
          sex:'male',
          phoneNum:'18813136860',
          address:'北京市海淀区北京邮电大学西土城校区学二121',
          distance:'1km',
          status:'待接单',
          timeType:'尽快送达',
          payType:'线上支付',
          ifPay:true,
          price:'12',
          orderId:'123123123123523',
          time:'2019-2-12 10:11:12',
          comment:'无备注'
        },
        
      ]
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})