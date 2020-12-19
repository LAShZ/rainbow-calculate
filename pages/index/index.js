//index.js
//获取应用实例
const {formatTime} = require("../../utils/util")
const app = getApp()

Page({
  data: {
    rank: 0,
    rankArr: ["一年级", "二年级", "三年级"],
    typeChoose: false,
    que: ["10以内加减法", "20以内加减法", "100以内加减法", "表内乘法", "表内除法", "混合运算", "万以内加减法", "多位数乘一位数", "复杂乘除"],
    type: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  chooseType: function(){
    wx.navigateTo({
      url: '/pages/typeChoose/typeChoose',
      // events: {
      //   acceptDateFromOpenedPage: function(data){
      //     console.log(data)
      //   },
      //   someData: function(data){
      //     console.log(data)
      //   }
      // },
      // success: function(res){
      //   res.eventChannel.emit('acceptDateFromOpenedPage', {data: 'test'})
      // }
    })
  },
  showChooseType: function () {
    console.log(formatTime(new Date()))
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})