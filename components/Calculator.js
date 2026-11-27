app.component('calculator', {
    props: {
        weight: {
            type: Number,
            default: 0
        },
        caloriesPer100g: {
            type: Number,
            default: 0
        }
    },

    computed: {
        totalKcal() {
            return this.weight * this.caloriesPer100g / 100;
        }
    },

    template: /*html*/ `
        <div>
            <p>Vægt: {{ weight }} g</p>
            <p>Kcal pr. 100 g: {{ caloriesPer100g }}</p>
            <p>I alt: {{ totalKcal.toFixed(1) }} kcal</p>
        </div>
    `
});