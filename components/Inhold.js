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
  <div class="card w-75 mb-3" v-if="ingrediens">
    <div class="card-body">
      <h4 class="card-title">{{ ingrediens.name }}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{ ingrediens.brand }}</h6>
      <p class="card-text">{{ ingrediens.calories }} kcal pr. 100 g</p>
      <p class="card-text">Protein: {{ ingrediens.proteinPer100g }} g</p>
      <p class="card-text">Kulhydrat: {{ ingrediens.kulhydratPer100g }} g</p>
      <p class="card-text">Fedt: {{ ingrediens.fedtPer100g }} g</p>
    </div>
  </div>
  `
})