const app = new Vue({
    el: '#app',
    data:{
        titulo:'Vue js',
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea:function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            console.log(this.tareas);
            this.nuevaTarea ='';
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
        },
        eliminarTarea: function(index){
            this.tareas.splice(index, 1);
        }
    }
})