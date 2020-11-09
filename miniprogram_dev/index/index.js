import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';
global = {};
const app = getApp();
OnekitPage({
  data: {},
  onLoad: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    };
    this.x = -100;
    var temp = wx.createSelectorQuery();
    console.log("createSelectorQuery", temp);
    temp = temp.select('#canvas');
    console.log("select", temp);
    temp = temp.fields({
   //   node: true,
      size: true
    }, (res) => { console.log('fields_res', res) });
    console.log("fields", temp);
    temp = temp.select('#canvas').scrollOffset((res) => { console.log("scrollOffset_res", res) });
    console.log("scrollOffset", temp);
    temp = temp.exec(this.init.bind(this));
    console.log("exec", temp);
  },
  init: function (res) {
    console.log(res)
    /*
    const width = res[0].width;
    const height = res[0].height;
    const canvas = res[0].node;
    const ctx = canvas.getContext('2d');
    const dpr = wx.getSystemInfoSync().pixelRatio;
    canvas.width = (width * dpr);
    canvas.height = (height * dpr);
    ctx.scale(dpr, dpr);
    const renderLoop = () => {
      this.render(canvas, ctx);
      canvas.requestAnimationFrame(renderLoop);
    };
    canvas.requestAnimationFrame(renderLoop);
    const img = canvas.createImage();
    img.onload = () => { this._img = img };
    img.src = './car.png';*/
  },
  render: function (canvas, ctx) {
    ctx.clearRect(0, 0, 300, 300);
    this.drawBall(ctx);
    this.drawCar(ctx);
  },
  drawBall: function (ctx) {
    const p = this.position;
    p.x += p.vx;
    p.y += p.vy;
    if ((p.x >= 300)) {
      p.vx = -2;
    }
    if ((p.x <= 7)) {
      p.vx = 2;
    }
    if ((p.y >= 300)) {
      p.vy = -2;
    }
    if ((p.y <= 7)) {
      p.vy = 2;
    }
    function ball(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, (Math.PI * 2));
      ctx.fillStyle = '#1aad19';
      ctx.strokeStyle = 'rgba(1,1,1,0)';
      ctx.fill();
      ctx.stroke();
    };
    ball(p.x, 150);
    ball(150, p.y);
    ball((300 - p.x), 150);
    ball(150, (300 - p.y));
    ball(p.x, p.y);
    ball((300 - p.x), (300 - p.y));
    ball(p.x, (300 - p.y));
    ball((300 - p.x), p.y);
  },
  drawCar: function (ctx) {
    if (!this._img) return
    if ((this.x > 350)) {
      this.x = -100;
    }
    ctx.drawImage(this._img, this.x++, (150 - 25), 100, 50);
    ctx.restore();
  }
});