import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'模态弹窗',
            path:'packageAPI/pages/modal/modal'
        };
    },
    data:{
        modalHidden:true,
        modalHidden2:true
    },
    modalTap:function(){
        wx.showModal({
            title:'弹窗标题',
            content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            showCancel:false,
            confirmText:'确定'
        });
    },
    noTitlemodalTap:function(){
        wx.showModal({
            content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            confirmText:'确定',
            cancelText:'取消'
        });
    }
});
