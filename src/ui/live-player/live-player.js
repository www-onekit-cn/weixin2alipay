/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    src: '',
    autoplay: false,
    muted: false,
    orientation: 'vertical',
    objectFit: 'contain',
    backgroundMute: false,
    minCache: 1,
    maxCache: 3,

  },
  didMount() {
    const that = this
    this.livePlayerCtx = my.createMapContext(this.props.onekitId)

    my.createSelectorQuery().select('.onekit-live-player').boundingClientRect().exec((rect) => {
      that.setData({
        rect: rect[0]
      })
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    live_player_statechange({detail}) {
      const dataset = this._dataset()
      if (this.props.onStateChange) {
        this.props.onStateChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    live_player_netstatus({detail}) {
      const dataset = this._dataset()
      if (this.props.onNetStatus) {
        this.props.onNetStatus({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    live_player_fullscreenchange({detail}) {
      const dataset = this._dataset()
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
  },
})
