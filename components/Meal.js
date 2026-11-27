app.component('Meal', {
props: {
    meals: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="card card-olive mb-3">
    <div class="card-body">
      <h4 class="card-title">Min tallerken</h4>
    </div>
    <ul class="list-group list-group-flush" v-if="meals.length">
      <li class="list-group-item" v-for="(meal, index) in meals" :key="index">
        {{ meal.name }} {{meal.grams}} g
      </li>
    </ul>
  </div>
  `
})