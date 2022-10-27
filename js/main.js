
Vue.createApp({
    data() {
      return {
        data: [ 1, 2, 3, 4, 5],
        activeButton: null,
        isSubmit: false,
      }
    },
    methods: {
        setActive(index){
            this.activeButton = index + 1;
        },
        submit(activeButton){
            if(activeButton)
                this.isSubmit = true;
        }
    }
  }).mount('#card-rating')