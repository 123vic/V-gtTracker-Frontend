const app = Vue.createApp({
    data() {
        return {
            intro: 'VægtTracker',
            barcode: '',
            weight: 0.0
            
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
        }
    },

    computed: {
        myComputed() {
            return ''
        },

        
    }
})
