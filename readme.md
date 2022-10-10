#### Vue 1 - Introducción a Vue
---
- Introducción a Vue.js. ¿Qué es? Instalación. CDN.
- Renderizado.
- Directivas condicionales, estructurales y de atributo.
- Componentes.

#### Vue 2 - DOM y Eventos
---

- Modificación del DOM y eventos.
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
    

            public class Contact
            {
                public string Name        { get; set; }
                public string LastName    { get; set; }
                public string PhoneNumber { get; set; }
                public string Gender      { get; set; }
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
