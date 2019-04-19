// client/pages/mapdemo/mapdemo.js

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    "positionList":[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key:'LPQBZ-SKVRR-F4LWX-WECSX-R34LH-MLFKZ'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      "locInfo": {
        startLat: 39.96126, 
        startLng: 116.35817,
        startName: "BUPT", // 起点名称 选填
        endLat: 39.94055, // 终点经度必传
        endLng: 116.43207, //终点纬度 必传
        endName: "来福士购物中心", //终点名称 必传
        mode: "bus" //算路方式 选填
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _this = this
    qqmapsdk.search({
      keyword: '酒店',
      success: function (res) {
        console.log(res);
        console.log(this)
        _this.setData({"positionList":res.data});
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
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

  },

  backfill: function (data) {
    // var id = e.currentTarget.id;
    console.log('chosen position info',data)
    this.setData({
      "locInfo": {
        startLat: 39.96126,
        startLng: 116.35817,
        startName: "BUPT", // 起点名称 选填
        endLat: data.currentTarget.dataset.info.latitude, // 终点经度必传
        endLng: data.currentTarget.dataset.info.longitude, //终点纬度 必传
        endName: data.currentTarget.dataset.info.title, //终点名称 必传
        mode: "bus" //算路方式 选填
      }
    })
  },

  //触发关键词输入提示事件
  getsuggest: function (e) {
    var _this = this;
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
      success: function (res) {//搜索成功后的回调
        console.log(res);
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          suggestion: sug
        });
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }
})