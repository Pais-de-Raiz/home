// Esperar 2 segundos antes de mostrar la sección
setTimeout(function() {
    var loaderSection = document.getElementById('contenido');
    loaderSection.style.display = 'block';
  }, 1000);


// Simula la carga de la página y oculta la pantalla de carga después de 2 segundos
window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.loader-wrapper').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 1000);
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion para la carga de archivos almacenado en partials para reutilizar los recursos
document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar contenido HTML en un contenedor específico
    function cargarContenido(url, contenedor) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    contenedor.innerHTML = xhr.responseText;
                } else {
                    console.error('Error al cargar contenido desde ' + url + ': ' + xhr.status);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }
    
    // Cargar el loader primero
    cargarContenido("../../assets/partials/head.html", document.getElementById('head'));
    cargarContenido("../../assets/partials/loader.html", document.getElementById('loader'));
    cargarContenido("../../assets/partials/navbar.html", document.getElementById('navbar'));

    // Luego, cargar las otras secciones después de un retraso
    setTimeout(function() {
        cargarContenido("../../assets/partials/banner_comunidades.html", document.getElementById('banner-comunidades'));
        cargarContenido("../../assets/partials/footer.html", document.getElementById('footer'));
        cargarContenido("../../assets/partials/slider.html", document.getElementById('slider'));
        cargarContenido("../../assets/partials/filosofia.html", document.getElementById('filosofia'));
        cargarContenido("../../assets/partials/do.html", document.getElementById('do'));
        cargarContenido("../../assets/partials/quotes.html", document.getElementById('quotes'));
        // Puedes seguir agregando más llamadas a cargarContenido para cargar más secciones
    }, 500); // Aquí especificamos un retraso de 500 milisegundos (0.5 segundos)
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Función para la lectura de JSON y almacenarlo en una variable y colocarlos en id del html
// Función para cargar tarjetas desde un archivo JSON a un contenedor específico
function cargarTarjetasDesdeJSON(jsonFile, containerId) {
    var tarjetasContainer = document.getElementById(containerId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var cardColumn = document.createElement('div');
                cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

                var card = document.createElement('div');
                card.className = 'card card-experiencias w-100';

                var cardImg = document.createElement('img');
                cardImg.className = 'card-img-top';
                cardImg.src = item.card.imgSrc;
                cardImg.alt = item.card.imgAlt;
                cardImg.style.borderRadius = '20px 20px 0px 0px'

                card.style.width = '19rem';
                card.style.margin = '10px auto';

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body d-flex flex-column';

                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = item.card.title;

                var cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.innerText = item.card.text;

                var cardSubtitle = document.createElement('h6');
                cardSubtitle.className = 'card-cardSubtitle';
                cardSubtitle.innerText = 'En alianza con:';

                var cardImgfundation = document.createElement('img');
                cardImgfundation.className = '';
                cardImgfundation.src = item.card.logo;
                cardImgfundation.alt = item.card.fundacion;

                var btn = document.createElement('a');
                btn.className = 'btn btn-primary mt-auto';
                btn.href = item.card.btnLink;
                btn.innerText = item.card.btnText;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardSubtitle);
                cardBody.appendChild(cardImgfundation);
                cardBody.appendChild(btn);
                

                card.appendChild(cardImg);
                card.appendChild(cardBody);

                cardColumn.appendChild(card);

                tarjetasContainer.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Llamar a la función para cargar las tarjetas de voluntariado experiencial
        cargarTarjetasDesdeJSON('servicios-voluntariado-experiencial.json', 'servicios-voluntariado-experiencial');
        // Llamar a la función para cargar las tarjetas de Bienestar
        cargarTarjetasDesdeJSON('servicios-bienestar.json', 'servicios-bienestar');
        // Llamar a la función para cargar las tarjetas de Gestión de comunidades
        cargarTarjetasDesdeJSON('servicios-gestion-comunidades.json', 'servicios-gestion-comunidades');
    }, 1000); // 5000 milisegundos = 5 segundos
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Función para cargar tarjetas filtradas por fundación desde un archivo JSON a un contenedor específico
function cargarTarjetasFiltradas(jsonFile, fundacion, contenedorId) {
    var tarjetasContainer = document.getElementById(contenedorId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Filtrar tarjetas con la fundación específica
            var tarjetasFiltradas = data.filter(item => item.card.fundacion === fundacion);

            tarjetasFiltradas.forEach(item => {
                var cardColumn = document.createElement('div');
                var card = document.createElement('div');
                var cardImg = document.createElement('img');
                var cardBody = document.createElement('div');
                var cardTitle = document.createElement('h5');
                var cardText = document.createElement('p');
                var cardSubtitle = document.createElement('h6');
                var cardImgfundation = document.createElement('img');
                var btn = document.createElement('a');

                cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
                card.className = 'card card-experiencias w-100';
                cardImg.className = 'card-img-top';
                cardBody.className = 'card-body d-flex flex-column';
                cardTitle.className = 'card-title';
                cardText.className = 'card-text';
                cardSubtitle.className = 'card-cardSubtitle';
                cardImgfundation.className = '';
                btn.className = 'btn btn-primary mt-auto';

                cardImg.src = item.card.imgSrc;
                cardImg.alt = item.card.imgAlt;
                cardImgfundation.src = item.card.logo;
                cardImgfundation.alt = item.card.fundacion;
                cardImg.style.borderRadius = '20px 20px 0px 0px';

                card.style.width = '19rem';
                card.style.margin = '10px auto';

                cardTitle.innerText = item.card.title;
                cardText.innerText = item.card.text;
                cardSubtitle.innerText = 'En alianza con:';
                btn.href = item.card.btnLink;
                btn.innerText = item.card.btnText;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardSubtitle);
                cardBody.appendChild(cardImgfundation);
                cardBody.appendChild(btn);

                card.appendChild(cardImg);
                card.appendChild(cardBody);

                cardColumn.appendChild(card);

                tarjetasContainer.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Lista de configuraciones para cargar las tarjetas
var configuracionesTarjetas = [
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Biblioseo', contenedorId: 'servicios-biblioseo' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Debra Colombia', contenedorId: 'servicios-debra' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Mujeres de éxito', contenedorId: 'servicios-mujeres' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Corporación Centro Holístico', contenedorId: 'servicios-holistico' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Corporación Entrégate Colombia', contenedorId: 'servicios-entregate' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'CoimpactoB', contenedorId: 'servicios-coimpacto' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Hermanas del Padre Pío', contenedorId: 'servicios-hermanas' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Casa Ronald Mac Donald -Familias', contenedorId: 'servicios-mcdonald' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Quipu Ainy', contenedorId: 'servicios-quipu' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Humanos 3D', contenedorId: 'servicios-humanos' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'San Antonio', contenedorId: 'servicios-fsa' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Techo', contenedorId: 'servicios-techo' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Cartagena al 100%', contenedorId: 'servicios-cartagena' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Trabajando por amor', contenedorId: 'servicios-trabajando' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Samaritanos di Padre Pio', contenedorId: 'servicios-samaritanos' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Tu cultura', contenedorId: 'servicios-cultura' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundacion el Quemado', contenedorId: 'servicios-quemado' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundacion Bahia y Ecosistemas de Colombia', contenedorId: 'servicios-bahia' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundación Apoyar', contenedorId: 'servicios-apoyar' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundación alma perruna', contenedorId: 'servicios-perruna' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundación Red de Árboles', contenedorId: 'servicios-arboles' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundación Pan Para un Abuelo', contenedorId: 'servicios-pan' },
    { jsonFile: '../../servicios-voluntariado-experiencial.json', fundacion: 'Fundación Asilo de Abuelos Fundasab', contenedorId: 'servicios-fundasab' },
];

// Llamada a la función para cargar las tarjetas después de 2 segundos de carga de la página
setTimeout(function() {
    configuracionesTarjetas.forEach(config => cargarTarjetasFiltradas(config.jsonFile, config.fundacion, config.contenedorId));
}, 2000);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Filtrar y mostrar servicios de "Voluntariado Experiencial" al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    filtrarServicios('voluntariado-experiencial');
  });

  function filtrarServicios(categoria) {
    // Oculta todos los servicios
    const servicios = document.querySelectorAll('.servicio');
    servicios.forEach(servicio => servicio.style.display = 'none');

    // Muestra solo los servicios de la categoría seleccionada
    const serviciosCategoria = document.querySelectorAll(`.servicio.${categoria}`);
    serviciosCategoria.forEach(servicio => servicio.style.display = 'block');
}

 // Alistamiento de .JSON
    var fundacionesContainer = document.getElementById('fundaciones-container');

    fetch('../../fundaciones-cards.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var cardColumn = document.createElement('div');
                cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
    
                var card = document.createElement('div');
                card.className = 'card card-fundaciones w-100';
    
                var cardImg = document.createElement('img');
                cardImg.className = 'card-img-top';
                cardImg.src = item.card.imgSrc;
                cardImg.alt = item.card.imgAlt;
                cardImg.style.borderRadius = '20px 20px 0px 0px'
                //estilo
                card.style.width = '18rem';
                card.style.height = 'rem';
                card.style.margin = '10px auto';
    
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body d-flex flex-column';
    
                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = item.card.title;

                var cardLocation = document.createElement('h6');
                cardLocation.className = 'card-location';
                cardLocation.innerText = item.card.location;
    
                var cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.innerText = item.card.text;
    
                var btn = document.createElement('a');
                btn.className = 'btn btn-primary mt-auto';
                btn.href = item.card.btnLink;
                btn.innerText = item.card.btnText;
    
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardLocation);
                cardBody.appendChild(cardText);
                cardBody.appendChild(btn);
    
                card.appendChild(cardImg);
                card.appendChild(cardBody);
    
                cardColumn.appendChild(card);
    
                fundacionesContainer.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

        

// Cargar tarjetas filtradas por servicio:
function cargarTarjetasFiltradas2(jsonFile, codigo, contenedorId) {
    var tarjetasContainer2 = document.getElementById(contenedorId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Filtrar tarjetas con la fundación específica
            var tarjetasFiltradas = data.filter(item => item.card.codigo === codigo);

            tarjetasFiltradas.forEach(item => {
                var cardColumn = document.createElement('div');

                var card = document.createElement('div');
                card.className = 'card';

                var cardImg = document.createElement('img');
                cardImg.className = 'card-img-top';
                cardImg.src = item.card.imgSrc;
                cardImg.alt = item.card.imgAlt;
                cardImg.style.borderRadius = '20px 20px 0px 0px';

                // Estilo
                card.style.width = '20rem';
                card.style.height = '300px';
                card.style.margin = 'auto';

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = item.card.title;

                cardBody.appendChild(cardTitle);

                card.appendChild(cardImg);
                card.appendChild(cardBody);

                cardColumn.appendChild(card);

                tarjetasContainer2.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-001', 'servicio-exp-v-001');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-002', 'servicio-exp-v-002');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-003', 'servicio-exp-v-003');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-004', 'servicio-exp-v-004');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-005', 'servicio-exp-v-005');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-006', 'servicio-exp-v-006');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-007', 'servicio-exp-v-007');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-008', 'servicio-exp-v-008');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-009', 'servicio-exp-v-009');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-010', 'servicio-exp-v-010');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-011', 'servicio-exp-v-011');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-012', 'servicio-exp-v-012');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-013', 'servicio-exp-v-013');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-014', 'servicio-exp-v-014');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-015', 'servicio-exp-v-015');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-016', 'servicio-exp-v-016');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-017', 'servicio-exp-v-017');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-018', 'servicio-exp-v-018');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-019', 'servicio-exp-v-019');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-020', 'servicio-exp-v-020');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-021', 'servicio-exp-v-021');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-022', 'servicio-exp-v-022');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-023', 'servicio-exp-v-023');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-024', 'servicio-exp-v-024');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-025', 'servicio-exp-v-025');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-026', 'servicio-exp-v-026');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-027', 'servicio-exp-v-027');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-028', 'servicio-exp-v-028');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-029', 'servicio-exp-v-029');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-030', 'servicio-exp-v-030');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-031', 'servicio-exp-v-031');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-032', 'servicio-exp-v-032');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-033', 'servicio-exp-v-033');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-034', 'servicio-exp-v-034');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-035', 'servicio-exp-v-035');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-036', 'servicio-exp-v-036');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-037', 'servicio-exp-v-037');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-038', 'servicio-exp-v-038');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-039', 'servicio-exp-v-039');
    cargarTarjetasFiltradas2('../../servicios-voluntariado-experiencial.json', 'exp-v-040', 'servicio-exp-v-040');
    cargarTarjetasFiltradas2('../../servicios-bienestar.json', 'exp-b-001', 'servicio-exp-b-001');
    cargarTarjetasFiltradas2('../../servicios-bienestar.json', 'exp-b-002', 'servicio-exp-b-002');
    cargarTarjetasFiltradas2('../../servicios-bienestar.json', 'exp-b-003', 'servicio-exp-b-003');
    cargarTarjetasFiltradas2('../../servicios-gestion-comunidades.json', 'exp-g-001', 'servicio-exp-g-001');
    cargarTarjetasFiltradas2('../../servicios-gestion-comunidades.json', 'exp-g-002', 'servicio-exp-g-002');
    cargarTarjetasFiltradas2('../../servicios-gestion-comunidades.json', 'exp-g-003', 'servicio-exp-g-003');
});


// Cargar tarjetas filtradas por categoría:
function cargarTarjetasFiltradas4(jsonFile, categoria, contenedorId) {
    var tarjetasContainer4 = document.getElementById(contenedorId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
                    
            // Filtrar tarjetas con la fundación específica
            var tarjetasFiltradas = data.filter(item => item.card.categoria === categoria);

            tarjetasFiltradas.forEach(item => {
                var cardColumn = document.createElement('div');
            cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

            var card = document.createElement('div');
            //ocupar ancho total 
            card.className = 'card card-experiencias w-100';

            var cardImg = document.createElement('img');
            cardImg.className = 'card-img-top';
            cardImg.src = item.card.imgSrc;
            cardImg.alt = item.card.imgAlt;
            cardImg.style.borderRadius = '20px 20px 0px 0px'
            
            //estilo
            card.style.width = '19rem';
            //card.style.height = '30rem';
            card.style.margin = '10px auto';

            var cardBody = document.createElement('div');
            //d-flex flex-column colocar boton sabr mas al final
            cardBody.className = 'card-body d-flex flex-column';

            var cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = item.card.title;

            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = item.card.text;

            var cardSubtitle = document.createElement('h6');
            cardSubtitle.className = 'card-cardSubtitle';
            cardSubtitle.innerText = 'En alianza con:';

            var cardImgfundation = document.createElement('img');
            cardImgfundation.className = '';
            cardImgfundation.src = item.card.logo;
            cardImgfundation.alt = item.card.fundacion;

            var btn = document.createElement('a');
            //mt-auto colocar boton sabr mas al final
            btn.className = 'btn btn-primary mt-auto';
            btn.href = item.card.btnLink;
            btn.innerText = item.card.btnText;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(cardImgfundation);
            cardBody.appendChild(btn);

            card.appendChild(cardImg);
            card.appendChild(cardBody);

            cardColumn.appendChild(card);

            tarjetasContainer4.appendChild(cardColumn);
                
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}


document.addEventListener("DOMContentLoaded", function() {
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Salud', 'servicio-salud');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Educación infantil y Juvenil', 'servicio-educacion');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Deporte', 'servicio-deporte');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Seguridad Alimentaria', 'servicio-seguridadali');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Discapacidad', 'servicio-discapacidad');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Arte y Cultura', 'servicio-artecultura');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Mejoramiento de Condiciones De Vida // Construcción de espacios dignos.', 'servicio-construccion');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Cuidado Del Medio Ambiente', 'servicio-medioambiente');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Cuidado del Adulto Mayor', 'servicio-adulto');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Empoderamiento de las Mujeres', 'servicio-mujeres');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Comunidad Indígena', 'servicio-comunidad');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Paz Y Reconciliación', 'servicio-paz');
    cargarTarjetasFiltradas4('../../servicios-voluntariado-experiencial.json', 'Protección Animal', 'servicio-animal');
});




document.addEventListener('DOMContentLoaded', function() {
    // Asignar evento clic a todos los enlaces de categorías
    var enlacesCategorias = document.querySelectorAll('.dropdown-item');
    enlacesCategorias.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            var categoria = this.getAttribute('href').substring(1); // Obtener el ID de la categoría desde el href
            mostrarCategoria(categoria);
        });
    });
});

function mostrarCategoria(categoria) {
    // Ocultar todos los divs de categorías
    ocultarTodosLosDivs();

    // Mostrar el div de la categoría seleccionada
    var divCategoria = document.getElementById(categoria);
    if (divCategoria) {
        divCategoria.style.display = 'block';
    }
}

function ocultarTodosLosDivs() {
    // Ocultar todos los divs de categorías
    var divsCategorias = document.querySelectorAll('.categoria');
    divsCategorias.forEach(function(div) {
        div.style.display = 'none';
    });
}


//FORMULARIO 
function attachEventListeners() {
    // Adjuntar evento al botón de enviar dentro del formulario cargado dinámicamente
    $('#footer').find('#enviarBtn').click(function() {
        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();
        var mensaje = $('#mensaje').val();

        if (nombre && correo && telefono && mensaje) {
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbyv5y9-j_I1c6LNwzLSj21-PTE-maLX-zJ3QOmoSnOscSo2pAWgleVLlONH2dfHOvDmhQ/exec',
                method: 'POST',
                data: {
                    nombre: nombre,
                    correo: correo,
                    telefono: telefono,
                    mensaje: mensaje
                },
                success: function(response) {
                    console.log('¡Formulario enviado exitosamente!');
                    mostrarModal();
                    limpiarCampos();
                },
                error: function(error) {
                    console.log('Error al enviar el formulario:', error);
                }
            });
        } else {
            console.log('Error: Uno o más campos están vacíos.');
        }
    });
}

function mostrarModal() {
    $('#successModal').modal('show');
    setTimeout(function() {
        $('#successModal').modal('hide');
    }, 3000); // Cerrar el modal después de 3 segundos
}

function limpiarCampos() {
    $('#nombre').val('');
    $('#correo').val('');
    $('#telefono').val('');
    $('#mensaje').val('');
}
