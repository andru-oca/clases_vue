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
- Introducción a SPA. 
- Simple Page Aplicación. ¿Qué es y qué beneficios tiene sobre una página web?
### Concepto MVC.
---

- Modelo: *Se encarga de los datos, generalmente (pero no obligatoriamente) consultando la base de datos. Actualizaciones, consultas, búsquedas, etc. todo eso va aquí, en el modelo.*

- Controlador: *Se encarga de... controlar, recibe las órdenes del usuario y se encarga de solicitar los datos al modelo y de comunicárselos a la vista.*

- Vistas: *Son la representación visual de los datos, todo lo que tenga que ver con la interfaz gráfica va aquí. Ni el modelo ni el controlador se preocupan de cómo se verán los datos, esa responsabilidad es únicamente de la vista.*
    <!-- modelo vista controlador  -->
    - MVC : 
    <!-- vs -->
    <!-- modelo vista viewModel -->
   - MVVM: 
        * https://medium.com/@reyes.leomaris/aplicando-el-patr%C3%B3n-de-dise%C3%B1o-mvvm-d4156e51bbe5
        * https://www.digitalocean.com/community/tutorials/android-mvvm-design-pattern
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
- Asincronía.
- Consumo de API REST a través de fetch y Axios.