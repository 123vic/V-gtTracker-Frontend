const app = Vue.createApp({
    data() {
        return {
            intro: 'VægtTracker',
            barcode: '',
            
            
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
    },
    computed: {
        myComputed() {
            return ''
        },

        
    }
})
