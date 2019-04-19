//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        sendingList:[],
    },
    onShow(){
      this.setData({
        sendingList:[
          {
            name: '张',
            sex: 'male',
            phoneNum: '18813136860',
            address: '北京市海淀区北京邮电大学学生宿舍二号楼121',
            orderNum: '21091231239845345345',
            time: '2019-03-02 13:52:11',
            position: {},
          },
          {
            name: '肖',
            sex: 'male',
            phoneNum: '18813136860',
            address: '北京市海淀区北京邮电大学学生宿舍二号楼121',
            orderNum: '21091231239845345345',
            time: '2019-03-02 13:52:11',
            position: {},
          },
        ],
        waitSendList:[
          {
            name:'张',
            sex:'male',
            phoneNum:'18813136860',
            address:'北京市海淀区北京邮电大学学生宿舍二号楼121',
            orderNum:'21091231239845345345',
            time:'2019-03-02 13:52:11',
            position:{},
          },
          {
            name:'肖',
            sex:'male',
            phoneNum:'18813136860',
            address:'北京市海淀区北京邮电大学学生宿舍二号楼121',
            orderNum:'21091231239845345345',
            time:'2019-03-02 13:52:11',
            position:{},
          },
          {
            name:'林',
            sex:'male',
            phoneNum:'18813136860',
            address:'北京市海淀区北京邮电大学学生宿舍二号楼121',
            orderNum:'21091231239845345345',
            time:'2019-03-02 13:52:11',
            position:{},
          },
          {
            name:'林',
            sex:'male',
            phoneNum:'18813136860',
            address:'北京市海淀区北京邮电大学学生宿舍二号楼121',
            orderNum:'21091231239845345345',
            time:'2019-03-02 13:52:11',
            position:{},
            chosen:false,
          },
        ]
      })
    },
    toggleItemChosen(event){
      console.log(event.currentTarget.dataset)
    }
})
