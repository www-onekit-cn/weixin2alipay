Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    name:"",
    onekitId:"",
    headerText:"",
    disabled:false,
    mode:"selector",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    picker_Change(e){
      if(this.props.onChange){
        this.props.onChange({})
      }
    }
  },
});
