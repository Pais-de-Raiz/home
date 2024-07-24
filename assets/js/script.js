const ServiciosBienestar = "https://raw.githubusercontent.com/Pais-de-Raiz/backend/main/servicios-bienestar.json";
const VoluntariadoExperiencial = "https://raw.githubusercontent.com/Pais-de-Raiz/backend/main/servicios-voluntariado-experiencial.json";
const GestionComunidades = "https://raw.githubusercontent.com/Pais-de-Raiz/backend/main/servicios-gestion-comunidades.json";
const Fundaciones = "https://raw.githubusercontent.com/Pais-de-Raiz/backend/main/fundaciones-cards.json";

// Luego puedes usar la variable 'url' donde necesites en tu código
fetch(ServiciosBienestar)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


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
        cargarTarjetasDesdeJSON(VoluntariadoExperiencial, 'servicios-voluntariado-experiencial');
        // Llamar a la función para cargar las tarjetas de Bienestar
        cargarTarjetasDesdeJSON(ServiciosBienestar, 'servicios-bienestar');
        // Llamar a la función para cargar las tarjetas de Gestión de comunidades
        cargarTarjetasDesdeJSON(GestionComunidades, 'servicios-gestion-comunidades');
    }, 1000); // 5000 milisegundos = 5 segundos
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Función para cargar tarjetas filtradas por fundación desde un archivo JSON a un contenedor específico
function cargarTarjetasFiltradas(jsonFile, FundacionCodigo, contenedorId, limite = 300) {
    var tarjetasContainer = document.getElementById(contenedorId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Filtrar tarjetas con la fundación específica
            var tarjetasFiltradas = data.filter(item => item.card.FundacionCodigo === FundacionCodigo);

            // Limitar a los primeros 'limite' elementos
            tarjetasFiltradas = tarjetasFiltradas.slice(0, limite);

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

// Función para generar códigos de fundación
function generarCodigosFundacion(codigoBase, cantidad) {
    let codigos = [];
    for (let i = 1; i <= cantidad; i++) {
        let codigo = codigoBase + (i < 10 ? '00' : i < 100 ? '0' : '') + i;
        codigos.push(codigo);
    }
    return codigos;
}

// Lista de configuraciones para cargar las tarjetas
var configuracionesTarjetas = generarCodigosFundacion('F', 300).map(codigo => ({
    jsonFile: VoluntariadoExperiencial,
    FundacionCodigo: codigo,
    contenedorId: `servicios-${codigo}`
}));

// Cargar tarjetas para cada configuración
configuracionesTarjetas.forEach(config => {
    cargarTarjetasFiltradas(config.jsonFile, config.FundacionCodigo, config.contenedorId);
});

//////////////////////////////////////////////////////




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

    fetch(Fundaciones)
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
                cardImg.style.width = '100%'; // La imagen se adapta al ancho del contenedor

                // Estilo
                card.style.width = '20rem';
                card.style.margin = 'auto';

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = item.card.title;

                // Nuevo subtítulo
                var cardSubtitle = document.createElement('h6');
                cardSubtitle.className = 'card-subtitle';
                cardSubtitle.innerText = 'En alianza con:';

                // Nueva imagen de fundación
                var cardImgfundation = document.createElement('img');
                cardImgfundation.className = 'card-img-fundation';
                cardImgfundation.src = item.card.logo;
                cardImgfundation.alt = item.card.fundacion;
                cardImgfundation.style.width = '100%';  // La imagen se adapta al ancho del contenedor
                cardImgfundation.style.borderRadius = '0px 0px 20px 20px';

                // Agregar subtítulo y la imagen de fundación al cuerpo de la tarjeta
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardSubtitle);
                cardBody.appendChild(cardImgfundation);

                card.appendChild(cardImg);
                card.appendChild(cardBody);

                cardColumn.appendChild(card);

                tarjetasContainer2.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}



// Cargar tarjetas dentro del detalle de los servicios

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 200; i++) {
        let index = i.toString().padStart(3, '0');
        cargarTarjetasFiltradas2(VoluntariadoExperiencial, `exp-v-${index}`, `servicio-exp-v-${index}`);
        cargarTarjetasFiltradas2(ServiciosBienestar, `exp-b-${index}`, `servicio-exp-b-${index}`);
        cargarTarjetasFiltradas2(GestionComunidades, `exp-g-${index}`, `servicio-exp-g-${index}`);
    }
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
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Salud', 'servicio-salud');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Educación infantil y Juvenil', 'servicio-educacion');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Deporte', 'servicio-deporte');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Seguridad Alimentaria', 'servicio-seguridadali');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Discapacidad', 'servicio-discapacidad');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Arte y Cultura', 'servicio-artecultura');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Mejoramiento de Condiciones De Vida // Construcción de espacios dignos.', 'servicio-construccion');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Cuidado Del Medio Ambiente', 'servicio-medioambiente');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Cuidado del Adulto Mayor', 'servicio-adulto');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Empoderamiento de las Mujeres', 'servicio-mujeres');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Comunidad Indígena', 'servicio-comunidad');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Paz Y Reconciliación', 'servicio-paz');
    cargarTarjetasFiltradas4(VoluntariadoExperiencial, 'Protección Animal', 'servicio-animal');
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
document.addEventListener('DOMContentLoaded', function() {
    console.log('Documento listo');

    // Cargar el contenido del footer en la sección con id="footer"
    fetch('../../assets/partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            console.log('Footer cargado');

            // Manejador del botón de enviar después de cargar el footer
            $('#enviarBtn').click(function() {
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
        })
        .catch(error => console.error('Error cargando el footer:', error));

    function mostrarModal() {
        var modal = new bootstrap.Modal(document.getElementById('successModal'), {});
        modal.show();
        setTimeout(function() {
            modal.hide();
        }, 3000); // Cerrar el modal después de 3 segundos
    }

    function limpiarCampos() {
        $('#nombre').val('');
        $('#correo').val('');
        $('#telefono').val('');
        $('#mensaje').val('');
    }
});

console.log('Botón de enviar:', $('#enviarBtn').length);
console.log('Modal de éxito:', $('#successModal').length);



document.addEventListener('DOMContentLoaded', () => {
    // URL del archivo JSON
    const jsonUrl = 'https://raw.githubusercontent.com/Pais-de-Raiz/backend/main/equipo.json';

    // Fetch para obtener el JSON desde la URL
    fetch(jsonUrl)
        .then(response => {
            // Verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Convierte la respuesta a JSON
            return response.json();
        })
        .then(data => {
            // Obtén el contenedor donde se agregarán las tarjetas del equipo
            const teamContainer = document.getElementById('team-container');

            // Itera sobre cada miembro en los datos JSON
            data.forEach(member => {
                const { nombre, cargo, linkedin, foto } = member.person;

                // Genera el HTML de la tarjeta para cada miembro
                const memberCard = `
                    <div class="col-6 col-md-4 col-lg-4">
                        <div class="card-equipo">
                          <img src="${foto || 'default.jpg'}" class="card-img-top" alt="${nombre}">
                          <div class="card-body">
                              <h5 class="card-title" style="margin-bottom: 0px;">${nombre}</h5>
                              <p class="card-text" style="margin-top: 0px;">${cargo}</p>
                              <div class="circle-background">
                                  <a href="${linkedin}" target="_blank">
                                      <img src="../../img/Linkedin.svg" alt="linkedin-logo">
                                  </a>
                              </div>
                          </div>
                        </div>
                    </div>
                `;

                // Inserta la tarjeta generada en el contenedor del equipo
                teamContainer.insertAdjacentHTML('beforeend', memberCard);
            });
        })
        .catch(error => console.error('Error al cargar el equipo:', error));
});

