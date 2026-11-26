app.component('Foodsearchbar', {
  template:
  /*html*/`
  <div>
    
  <input v-model="searchterm" placeholder="indtast madvare">
  <button @click ="GetFood">Hent mad</button>
    
</div>`,
   data(){
        return{
            foods:[],
            searchterm:'',
            barcode:0
        }
    },
    methods: {
        GetFood(){
            axios
            .get('http://localhost:5109/getfood/' + this.searchterm)
            .then(response => {
                console.log(response.status)
                console.log(response.data)
                this.barcode = response.data.barcodeid
                searchterm=''
                
            }
            )
        }
    }
})