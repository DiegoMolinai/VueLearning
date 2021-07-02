const app = new Vue({
    el: '#app',
    data:{
        titulo:['Ejemplo','Frutas','Objetos','V-Model','TOTAL'],
        frutas:["xd1","xd2","xd3"],
        objetos:[
            {nombre:"manzana",tipo:"fruta",precio:100,stock:0},
            {nombre:"pera",tipo:"fruta",precio:500,stock:100},
            {nombre:"lechuga",tipo:"verdura",precio:100,stock:500}
        ],
        nuevaFruta:'',
        total: 0
    },
    methods:{
        agregarFruta()
        {
            this.objetos.push({nombre:this.nuevaFruta,tipo:"fruta",precio:200,stock:20});
            this.nuevaFruta = '';
        }
    },
    computed:{
        sumarStocks()
        {
            this.total=0;
            for(objeto of this.objetos){
                this.total = this.total + objeto.stock;
            }
            return this.total;
        }
    }
})