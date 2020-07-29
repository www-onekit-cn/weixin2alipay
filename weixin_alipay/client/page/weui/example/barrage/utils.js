import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const msgs = [
    '666666',
    '保护',
    '妈妈我上电视了！！',
    '我要上电视！！',
    '老板晚上好',
    '前方高能预警',
    '主播迟到了~~~',
    '干的漂亮',
    '广东人民发来贺电'
];
const color = [
    'red',
    'rgb(0, 255, 0)',
    '#0000FF'
];
const getRandom = (max,min)=>{
    Math.floor(Math.random() * max - min + min);
};
const mockData = (num,message)=>{
    const data = [
    ];
    for(var i = 0;i < num;i++){
        const msgId = getRandom(message.length);
        const colorId = getRandom(color.length);
        data.push({
            content:message[msgId],
            color:color[colorId]
        });
    };
    return data;
};
module.exports = {
    mockData:mockData
};
