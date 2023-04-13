#### Vue 1 - Introducción a Vue --> Anderson Update!

---
- Introducción a Vue.js. ¿Qué es? Instalación. CDN.
    >Instalación de VUE - Modo por CLI\
    >Modo de uso CDN
- Renderizado.
    > Renderizado de objetos:\
    _Se suele realizar el renderizado por medio de declaraciones simples, entendiendo el concepto de la sintaxis de creación y de instanciado del objeto VUE_
    
**MUY IMPORANTE: Conocer el concepto de los ciclos de vida de los elementos en el archivo lifecycle se observaran los estados** 
>  _ver archivo ligecycle.html_

> Declaraciones de instancia inicial recomendado:\
    * _Todo objeto Vue debe ser instanciado con un objeto_\
    * _Debe ser creado y colocado dentro de una variable_\
    * _Debe ser montado, usando el método .mount("<ID_elemento_a_montar>")_
    
```
//Forma recomendada de instanciar un Vue
    let argumentObject = {
        data(){
            return{
                //data de inicializacion 
                key:value
            }
        },
        created(){
            /*agrega codigo para ser ejecutado al momento de ser creado*/
        },
        mounted(){
            /* agrega o ejecuta codigo cuando ha sido montado el elemento*/
        },
        methods:{
            /*
            son las funciones que permiten las acciones y funcionabilidades en Vue usando JS
            */
        },
        computed:{
            /*calculos computados en el momento de ser ejecutados -- se recomienda no realizar calculos muy complejos*/
        },
        watch:{
            /*observador, que permite ver cuando suceden cambios*/
        }
    /*entre otros*/
    }
```    

> En el archivo HTML, template, etc, debemos proporcionarle las directivas que debe leer VueJs, de tal manera que entienda que requerimientos se está realizando en cada elemento proporcionado.

### Principales Directivas:
- v-text: https://es.vuejs.org/v2/api/#v-text
    _Coloca el valor de la data dentro del set colocado_
- v-bind: https://es.vuejs.org/v2/api/#v-bind 
    _enlaca el valor con el elemento seleccionado_
- v-if, v-else, v-elseif: https://es.vuejs.org/v2/api/#v-if 
    _condicionales (tambien se puede usar el shortcircuit)_
- v-for: https://es.vuejs.org/v2/api/#v-for 
    _iterador_
- v-show: https://es.vuejs.org/v2/api/#v-show 
    _permite ver o no ver_
- v-model: https://es.vuejs.org/v2/api/#v-model  
    __
- Directivas condicionales, estructurales y de atributo.
    
- Componentes.
> Creacion de componentes.\
Se puede realizar de dos formas, uno creando funcionalidades internas dentro del elemento


#### Ejemplos generales : TPO
> Ejemplo de Router sin VUE-ROUTER spa.vue.html
---
- Detalles a tener en cuenta: _El procedimiento es generar procesos asincronos que nos permitan devolver elementos iteradores dentro del root_


#### Vue 2 - DOM y Eventos
---

- Modificación del DOM y eventos.
> Modelo del DOM  y eventos:\
* Que es un evento en VUE, es un método que se ejecuta al un listener.

```
//ejemplos de eventos

/*
onclick
onkeydown & onkeyup
onload
entre varios*/

una forma de agregar un escuchador de eventos:

elemento.addEventListener(<evento>, function) ;
si bien el scope puede realizarse de manera global, no es lo más recomendado y cuando escala el proyecto suele performar de manera negativa


diferencia en VUE,

se enfoca principalemente en el scope de la instancia/elemento y se declaran en el sector de methods

methods:{
    function,
    function
}

posterior se le asigna al elemento con la acción respectiva


```
---
- Esquema de componentes. Dividir un proyecto frontend en componentes.

- Aplicaciones Reactivas.

- Enviar y pedir datos a un servidor.

#### Vue 3 - SPA y Asincronía
---

#### Introducción a SPA.

- Single Page Application:

     Simple Page Aplicación. ¿Qué es y qué beneficios tiene sobre una página web?

    [Link de Multipage vs Single](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)


    - #### Concepto MVC.
    ---

    - Modelo: *Se encarga de los datos, generalmente (pero no obligatoriamente) consultando la base de datos. Actualizaciones, consultas, búsquedas, etc. todo eso va aquí, en el modelo.*

    - Controlador: *Se encarga de... controlar, recibe las órdenes del usuario y se encarga de solicitar los datos al modelo y de comunicárselos a la vista.*

    - Vistas: *Son la representación visual de los datos, todo lo que tenga que ver con la interfaz gráfica va aquí. Ni el modelo ni el controlador se preocupan de cómo se verán los datos, esa responsabilidad es únicamente de la vista.*
        <!-- modelo vista controlador  -->
    - MVC :
        * [Codigo Facilito](https://codigofacilito.com/articulos/mvc-model-view-controller-explicado)
        <!-- vs -->
        <!-- modelo vista viewModel -->
    - MVVM:  
        * [Medium](https://medium.com/@reyes.leomaris/aplicando-el-patr%C3%B3n-de-dise%C3%B1o-mvvm-d4156e51bbe5)
        * [Digital Ocean](https://www.digitalocean.com/community/tutorials/android-mvvm-design-pattern)

    #### Concepto de Modelo:
    ---
    - Modelo: *Es el modelo de datos y lógica del negocio, también lo podemos considerar como el schema de la lógica de negocio.* 
    

             class Contact{
                constructor(){
                 Name        { get; set; }
                 LastName    { get; set; }
                 PhoneNumber { get; set; }
                 Gender      { get; set; }
                }
            }
            
    - Vista-Modelo : *La vista modelo es la lógica de renderización, lo cual implementa las propiedades  y comandos que define las funcionalidades que tendrá la app*
            

            Class Mostrar Valores que se invocan alteraciones

            Class Instancias de Schemas

            Class Aparencias/design/componentes
            
            
    - Vista: *Muestra como la información será renderizada y las funcionalidades que tendrá  cuando se muestra gráficamente*

    ---

    - Ejemplo práctico de un SPA en Vue.
    - Asincronía:
    > https://www.w3schools.com/js/js_async.asp

    >  Async / Await es la forma más actual de como manejar promesas de manera corta y rápida.
    ```
    let getData = async ()=>{
        let fetchData = await fetch('https://dummyjson.com/products') ;
        
        let data = await fetchData.json();
        console.log(data.products);
    }

    getData();

    ```

    - Consumo de API REST a través de fetch y Axios.
    ---
    > Fetch vs Axios :

    [Axios vs Fetch](https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/#:~:text=Differences%20between%20Axios%20and%20Fetch%3A&text=Axios%20has%20url%20in%20request,installation%20is%20required%20as%20such)

    No hay mucha diferencia, fetch tiene como concepto de que es una herramienta built in de JS, y axios permite relizar pedidos a una API o cualquier promise HTTP con manera más sencillo de obtener los errores de manera más practica

    _Ver ejemplo en la carpeta Vue3 con Axios_
    
    [AXIOS](https://axios-http.com/)


### Proyectos Adicionales
---
- Lista de tareas
- Autosave
- SPA Home | Login | Contact Us
