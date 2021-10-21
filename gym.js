const gym = new Vue({
    el:"#gym",
    data:{
        titulo: 'GYM vue',
        tareas: [],
        nuevaTarea:'',
         
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));

        },
        eliminarTarea(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
       /* guardarlc(){
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }*/
    },
    created(){ //Para poder guarardar en el local
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB===null){
            this.tareas=[];
        }else{
            this.tareas=datosDB;
        }
    }

})