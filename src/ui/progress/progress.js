/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    percent: '',
    showInfo: false,
    borderRadius: 0,
    strokeWidth: 2,
    fontSize: 16,
    color: '',
    activeColor: '',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: 'backwards',
    duration: 30
  },
  didMount() {
    let activeColor
    console.log(this.props.color, this.props.activeColor)
    if (this.props.color) {
      activeColor = this.props.color
    } else if (this.props.activeColor) {
      activeColor = this.props.activeColor
    } else {
      activeColor = '09BB07'
    }
    this.setData({activeColor})
  },
  methods: {
    progress_activeend(e) {
      console.log(e)
    }
  },
})
