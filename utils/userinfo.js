const app = getApp()
// get userinfo
function GetUserInfo(){
  try{
    let value = wx.getStorageSync('userinfo')
    if(value) return value
    else{
      SetWrongSet([])
      return GetUserInfo()
    }
  }catch(e){
    console.log("Error: Can not get userinfo storage!\n")
    console.log(e)
  }
}

// set userinfo
function SetUserInfo(userInfo){
  try {
    wx.setStorageSync('userinfo', userInfo)
  } catch (error) {
    console.log("Error: Can not set userinfo storage!\n")
    console.log(error)
  }
}

// add userinfo
function RefreshUserInfo(){
  let userInfo = {
    nickName: "未登录",
    avatarUrl: "/static/unlogin.png",
    rainbowCoin: 0,
    wrongSetID: 'defaultwrongset',
    testLogID: 'defaulttestlog',
    everydayLogID: 'defaulteverydaylog'
  }
  if(app.globalData.hasUserInfo === true){
    userInfo = {
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
      rainbowCoin: 0,
      wrongSetID: app.globalData.userInfo.nickName + 'wrongset',
      testLogID: app.globalData.userInfo.nickName + 'testlog',
      everydayLogID:  app.globalData.userInfo.nickName + 'everydaylog'
    }
  }
  SetUserInfo(userInfo)
}

// add rainbowcoin
function AddRainbowCoin(){
  let userInfo = GetUserInfo()
  userInfo.rainbowCoin++
  SetUserInfo(userInfo)
}

module.exports = {
  GetUserInfo:GetUserInfo,
  RefreshUserInfo:RefreshUserInfo,
  AddRainbowCoin:AddRainbowCoin
}