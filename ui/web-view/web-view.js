Component({
  mixins: [],
  data: {},
  props: {
    onekitId:"",
    onekitClass:"",
    onekitStyle:"",
    src:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    webView_Message(e){
      if(this.props.onMessage){
        this.props.onMessage(e.detail)
      }
    }
  },
});
