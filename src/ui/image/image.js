/* eslint-disable no-console */
/* eslint-disable camelcase */
import {
  PATH
} from 'oneutil'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    src: '',
    mode: 'scaleToFill',
    webp: false,
    lazyLoad: false,
    showMenuByLongpress: false
  },
  didMount() {
    const pages = getCurrentPages()
    if (!this.props.src.indexOf('://')) {
      const currentUrl = pages[pages.length - 1].route
      const alipay_src = '/' + PATH.rel2abs(currentUrl, this.props.src)
      this.setData({
        src: alipay_src
      })
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    image_error(e) {
      if (this.props.onError) {
        this.props.onError(e)
      }
    },
    image_load(e) {
      if (this.props.onLoad) {
        this.props.onLoad(e)
      }
    },
    onShareAppMessage() {
      return {
        title: '分享 View 组件',
        desc: 'View 组件很通用',
        path: 'weixin2alipay/ui/image/image',
      }
    },
    image_longTap() {
      if (this.props.showMenuByLongpress === true) {
        my.showActionSheet({
          items: ['发送给朋友', '收藏', '保存图片', '识别图片的小程序码'],
          cancelButtonText: '取消',
          success: ({
            index
          }) => {
            if (index === -1) {
              return
            }
            switch (index) {
              case 0:
                this.onShareAppMessage()
                break
              case 1:
                my.alert({
                  title: "请点击右上角的'☆'收藏按钮"
                })
                break
              case 2:
                my.saveImage({
                  url: this.props.src,
                  showActionSheet: true,
                  success: () => {
                    my.alert({
                      title: '保存成功',
                    })
                  },
                })
                break
              case 3:
                my.ix.onCodeScan((r) => {
                  if (r.success) {
                    console.log('code: ' + r.code)
                  }
                })
                break
              default:
                break
            }
          }
        })
        this.setData({
          showMenuByLongpress: this.props.showMenuByLongpress
        })
      }
    }
  },
})
