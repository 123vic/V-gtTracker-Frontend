const app = Vue.createApp({
    data() {
        return {
            intro: 'VægtTracker',
            barcode: '',
            weight: 0.0,
            caloriesPer100g: 0.0,
            protein: 0.0,
            fat: 0.0,
            carbohydrate: 0.0,
            productInfo: null,
            totalKcal: 0.0,
            totalFat: 0.0,
            totalProtein: 0.0,
            totalCarbohydrate: 0.0
        }
    },
    methods: {
        myMethod(){

    },
        recieveBarcode(barcodeId){
        this.barcode = barcodeId
        console.log(this.barcode)
    },
        mymethod() {
        },
        updateWeight(newWeight) {
            console.log('Weight updated:', newWeight);
            // You can perform additional actions here, such as updating the UI or making API calls.
            this.weight = newWeight;
        },
        updateproductInfo(ingredient) {
            console.log('Product info updated:', ingredient);
            // You can perform additional actions here, such as updating the UI or making API calls.
            this.productInfo = ingredient
            this.caloriesPer100g = ingredient.caloriesPer100g
            this.protein = ingredient.proteinPer100g
            this.fat = ingredient.fedtPer100g
            this.carbohydrate = ingredient.kulhydratPer100g
        },
        updateTotalKcal(newTotalKcal) {
            console.log('Total Kcal updated:', newTotalKcal);
            this.totalKcal = newTotalKcal;
        },
        updateTotalFat(newTotalFat) {
            console.log('Total Fat updated:', newTotalFat);
            this.totalFat = newTotalFat;
        },
        updateTotalProtein(newTotalProtein) {
            console.log('Total Protein updated:', newTotalProtein);
            this.totalProtein = newTotalProtein;
        },
        updateTotalCarbohydrate(newTotalCarbohydrate) {
            console.log('Total Carbohydrate updated:', newTotalCarbohydrate);
            this.totalCarbohydrate = newTotalCarbohydrate;
        }

    },

    computed: {
        myComputed() {
            return ''
        },

        
    }
})
