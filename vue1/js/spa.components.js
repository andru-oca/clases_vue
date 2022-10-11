// primer paso obtener todos los elementos a un template y de tipo string

const loadPage = async (page) => {
    const response = await fetch(page);
    const resHtml = await response.text();
    return `${resHtml}`
  };


// Creo lista de componentes

componentesToUse = {
    backend:{  async created(){
        this.templates = await loadPage('./spaComponents/backEnd.html');
    }},
    frontend:{  async created(){
        this.templates = await loadPage('./spaComponents/frontEnd.html');
    }},
    dba:{  async created(){
        this.templates = await loadPage('./spaComponents/dba.html');
    }},
    vue:{  async created(){
        this.templates = await loadPage('./spaComponents/vue.html');
    }
    }
};

///Genero data en modo 

for (let route in componentesToUse){
    let body = {
        template:`
        <div > 
        <h1 class="style">{{titulo}}</h1>
        <div v-html="templates"></div>
        </div>
        `,
        data(){
            return{
                templates:null,
            }
        },
        props:{
            titulo:String,
            style:String
        }
    } 
    componentesToUse[route] ={...componentesToUse[route],...body}
}


/*crear la forma de incluirlos*/

let root = {
    data(){
        return {
            name:"Components",
            componenteSeleccionado : null,
            props: "BIENVENIDO A CODO A CODO VUE CLASS",
            isActive:true,
            design:"footerStyle",
            bgJS: "background",
        }
    },
    methods:{
        changeNav(componente,propiedades){
            this.componenteSeleccionado = componente;
            this.props = propiedades
        }
    },
    components:{
        'backend-component': componentesToUse.backend,
        'frontend-component':componentesToUse.frontend,
        'dba-component':componentesToUse.dba,
        'vue-component':componentesToUse.vue
    } 
}


let rootComponent = Vue.createApp(root)

let footer ={
    template:'<footer > {{ titulo }}  </footer>',
    props:{
        titulo:String,
        cssStyle:String
    }

}


rootComponent.component('footer-component',
    footer
)

rootComponent.mount("#root");




const target = document.getElementById('js')

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(target)

  if (withinBoundaries) {
    document.querySelector('body').classList = 'background';
  } else {
    document.querySelector('body').classList.remove('background');
  } 
})