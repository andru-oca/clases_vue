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
    
    sessionStorage.setItem('backend',JSON.stringify(backend));
    sessionStorage.setItem('dba',JSON.stringify(dba));
    sessionStorage.setItem('frontend',JSON.stringify(frontend));
    sessionStorage.setItem('vue',JSON.stringify(vue));

  };

 let data = {
    backend : sessionStorage.getItem('backend'),
    dba : sessionStorage.getItem('dba'),
    frontend : sessionStorage.getItem('frontend'),
    vue : sessionStorage.getItem('vue')
}


  /*usar solo componentes para poder generar lo dinámico de estas páginas*/

let backend = {
    template:data.backend,
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
rootComponent.mount("#root");