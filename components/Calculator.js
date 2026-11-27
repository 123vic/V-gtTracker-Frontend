app.component('calculator', {
    props: {
        weight: {
            type: Number,
            default: 0
        },
        caloriesPer100g: {
            type: Number,
            default: 0
        },
        protein: {
            type: Number,
            default: 0
        },
        fat: {
            type: Number,
            default: 0
        },
        carbohydrate: {
            type: Number,
            default: 0
        }
    },

    emits: [
    'total-kcal-updated',
    'total-fat-updated',
    'total-protein-updated',
    'total-carbohydrate-updated'
    ],

    computed: {
        totalKcal() {
            return this.weight * this.caloriesPer100g / 100;
            
        },
        totalFat() {
            return this.weight * this.fat / 100;
            
        },
        totalProtein() {
            return this.weight * this.protein / 100;
        },
        totalCarbohydrate() {
            a = this.weight * this.carbohydrate / 100;
            return a;
        },
            
        },

watch: {
    totalKcal(value) {
        this.$emit('total-kcal-updated', value);
    },
    totalFat(value) {
        this.$emit('total-fat-updated', value);
    },
    totalProtein(value) {
        this.$emit('total-protein-updated', value);
    },
    totalCarbohydrate(value) {
        this.$emit('total-carbohydrate-updated', value);
    }
},

    template: /*html*/ `
        <div>
            <p>Vægt: {{ weight }} g</p>
            <p>Kcal pr. 100 g: {{ caloriesPer100g }}</p>
            <p>I alt: {{ totalKcal.toFixed(1) }} kcal</p>
            <p>I alt: {{totalFat.toFixed(1) }} fat </p>
            <p>I alt: {{ totalProtein.toFixed(1) }} Proteins</p>
            <p>I alt: {{totalCarbohydrate.toFixed(1) }} Carbohydrates </p>
            
        </div>
    `
});