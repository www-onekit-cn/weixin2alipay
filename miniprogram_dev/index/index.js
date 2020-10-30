import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
var pageData = {
    data:{
        switch1Checked:true,
        switch2Checked:false,
        switch1Style:'',
        switch2Style:'text-decoration: line-through'
    }
};
for(var i = 1;(i <= 2);++i){
    (function(index){
        pageData[`switch${index}Change`] = function(e){
        console.log(`switch${index}发生change事件，携带值为`,e.detail.value);
        var obj = {};
        obj[`switch${index}Checked`] = e.detail.value;
        this.setData(obj);
        obj = {};
        obj[`switch${index}Style`] = e.detail.value?'':'text-decoration: line-through';
        this.setData(obj);
    };
    })(i);
};
OnekitPage(pageData);