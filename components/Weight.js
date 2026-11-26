app.component('Weight', {
  data() {
    return {
        Weight: 0,
    }
  },
  methods: {
    getWeight() {
        axios.get('http://localhost:5109/api/Weight')
        .then(response => {
            this.Weight = response.data;
            this.$emit('weight-updated', this.Weight);
        })
    },

  },
  template:
  /*html*/
  `
      <button @click="getWeight">Get Weight</button>
  `
})
