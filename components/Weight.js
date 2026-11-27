app.component('Weight', {
  data() {
    return {
        Weight: 0,
    }
  },
  methods: {
    getWeight() {
        axios.post('http://localhost:5109/api/Weight/save')
        .then(response => {
            this.Weight = response.data.gram;
            this.$emit('weight-updated', this.Weight);
        })
        .catch(error => {
            console.log(error);
        });
    },
  },
  template:
  /*html*/
  `
      <button @click="getWeight">Get Weight</button>
  `
})