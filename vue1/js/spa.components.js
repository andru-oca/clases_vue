// primer paso obtener todos los elementos a un template y de tipo string

const loadPage = async (page) => {
    const response = await fetch(page);
    const resHtml = await response.text();
    return resHtml;
  };
  

  const loadAllPages = async () => {
    backend = await loadPage('./spaComponents/backEnd.html');
    dba = await loadPage('./spaComponents/dba.html');
    frontend = await loadPage('./spaComponents/frontEnd.html');
    vue = await loadPage('./spaComponents/vue.html');
    
    sessionStorage.setItem('backend',`${backend}`);
    sessionStorage.setItem('dba',`${dba}`);
    sessionStorage.setItem('frontend',`${frontend}`);
    sessionStorage.setItem('vue',`${vue}`);

  };


loadAllPages();

  let data = {
    backend : sessionStorage.getItem('backend'),
    dba : sessionStorage.getItem('dba'),
    frontend : sessionStorage.getItem('frontend'),
    vue : sessionStorage.getItem('vue')
}


  /*usar solo componentes para poder generar lo dinámico de estas páginas*/

let backend = {
    template:data.backend,
    data(){
        return{
            titulo:"BACKEND"
        }
    }
}

let dba ={
    template:data.dba
}

let frontend ={
    template:data.frontend
}

let vue ={
    template:data.vue
}



/*crear la forma de incluirlos*/

let root = {
    data(){
        return {
            name:"Components"
        }
    }
}


let rootComponent = Vue.createApp(root)

rootComponent.component("backend-component",backend);
rootComponent.component("frontend-component",frontend);
rootComponent.component("dba-component",dba);
rootComponent.component("vue-component",vue);

rootComponent.mount("#root");
