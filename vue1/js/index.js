let schemaInit = {
    nombre:null,
    display:true,
    dataInput : "",
    status : false,
    tasks : []
}

let app = {
    data:function(){
        return schemaInit
    },
    methods:{
        addTask:function(){
            this.tasks.push(this.dataInput);
            this.dataInput = "";
            console.log(this.tasks)
        },
        clearTask(task){
            console.log(task);
            this.tasks = this.tasks.filter( data => data !== task);
        },
        name(){
            this.nombre = this.nombre
        }
    }
}



let rootComponent = Vue.createApp(app);
rootComponent.mount("#app");