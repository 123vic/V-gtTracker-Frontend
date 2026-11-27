app.component('Inhold', {
  props: {
    barcode: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ingrediens: null
    }
  },
  watch: {
    barcode: {
      immediate: true,
      handler(newValue) {
        if (newValue && newValue.length >= 8) {
          this.getByBarcode()
        }
      }
    }
  },
  methods: {
    getByBarcode() {
      axios.get(`http://localhost:5109/api/Ingrediens/barcode/${this.barcode}`)
        .then(response => {
          this.ingrediens = response.data
          this.$emit('product-info', this.ingrediens)
        })
        .catch(error => {
          this.ingrediens = null
          if (error.response && error.response.status === 404) {
            console.error('Produktet blev ikke fundet')
          } else if (error.response && error.response.status === 400) {
            console.error('Ugyldig stregkode')
          } else {
            console.error('Failed to get ingrediens:', error)
          } 
        })

    }
  },
  template:
  /*html*/
  `
  <div class="card card-olive w-75 mb-3" v-if="ingrediens">
    <div class="card-body">
      <h4 class="card-title">{{ ingrediens.name }}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{ ingrediens.brand }}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ ingrediens.caloriesPer100g }} kcal pr. 100 g</li>
      <li class="list-group-item">Protein: {{ ingrediens.proteinPer100g }} g</li>
      <li class="list-group-item">Kulhydrat: {{ ingrediens.kulhydratPer100g }} g</li>
      <li class="list-group-item">Fedt: {{ ingrediens.fedtPer100g }} g</li>
    </ul>
  </div>
  `
})