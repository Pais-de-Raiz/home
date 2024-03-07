document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del head.html en la sección con id "head"
    var headContainer = document.getElementById('head');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                headContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar head: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', "https://pais-de-raiz.github.io/home/assets/partials/head.html", true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del head.html en la sección con id "Bannercomunidades"
    var bannercomunidadesContainer = document.getElementById('banner-comunidades');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                bannercomunidadesContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar head: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/banner_comunidades.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del footer.html en la sección con id "footer"
    var navbarContainer = document.getElementById('navbar');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                navbarContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el navbar: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/navbar.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del footer.html en la sección con id "footer"
    var footerContainer = document.getElementById('footer');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                footerContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el footer: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/footer.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del slider.html en la sección con id "slider"
    var sliderContainer = document.getElementById('slider');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                sliderContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el slider: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/slider.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del filosofia.html en la sección con id "filosofia"
    var filosofiaContainer = document.getElementById('filosofia');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                filosofiaContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar filosofia: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/filosofia.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del do.html en la sección con id "do"
    var doContainer = document.getElementById('do');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                doContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar do: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/do.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del quotes.html en la sección con id "quotes"
    var quotesContainer = document.getElementById('quotes');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                quotesContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar quotes: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/quotes.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del services.html en la sección con id "services"
    var servicesContainer = document.getElementById('services');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                servicesContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar services: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/services.html', true);
    xhr.send();
});


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
 //
 //
 //Cargar de tarjetas de voluntariado experencial
var tarjetasContainer = document.getElementById('servicios-voluntariado-experiencial');

fetch('servicios-voluntariado-experiencial.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var cardColumn = document.createElement('div');
            cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

            var card = document.createElement('div');
            card.className = 'card';

            var cardImg = document.createElement('img');
            cardImg.className = 'card-img-top';
            cardImg.src = item.card.imgSrc;
            cardImg.alt = item.card.imgAlt;
            cardImg.style.borderRadius = '20px 20px 0px 0px'
            //estilo
            card.style.width = '19rem';
            card.style.height = '30rem';
            card.style.margin = '10px auto';

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = item.card.title;

            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = item.card.text;

            var btn = document.createElement('a');
            btn.className = 'btn btn-primary';
            btn.href = item.card.btnLink;
            btn.innerText = item.card.btnText;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(btn);

            card.appendChild(cardImg);
            card.appendChild(cardBody);

            cardColumn.appendChild(card);

            tarjetasContainer.appendChild(cardColumn);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

//Cargar de tarjetas de Bienestar
var tarjetasContainer2 = document.getElementById('servicios-bienestar');
fetch('servicios-bienestar.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var cardColumn = document.createElement('div');
            cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

            var card = document.createElement('div');
            card.className = 'card';

            var cardImg = document.createElement('img');
            cardImg.className = 'card-img-top';
            cardImg.src = item.card.imgSrc;
            cardImg.alt = item.card.imgAlt;
            cardImg.style.borderRadius = '20px 20px 0px 0px'
            //estilo
            card.style.width = '19rem';
            card.style.height = '30rem';
            card.style.margin = '10px auto';

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = item.card.title;

            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = item.card.text;

            var btn = document.createElement('a');
            btn.className = 'btn btn-primary';
            btn.href = item.card.btnLink;
            btn.innerText = item.card.btnText;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(btn);

            card.appendChild(cardImg);
            card.appendChild(cardBody);

            cardColumn.appendChild(card);

            tarjetasContainer2.appendChild(cardColumn);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

//Cargar de tarjetas de Gestion de comunidades
var tarjetasContainer3 = document.getElementById('servicios-gestion-comunidades');
fetch('servicios-gestion-comunidades.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var cardColumn = document.createElement('div');
            cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

            var card = document.createElement('div');
            card.className = 'card';

            var cardImg = document.createElement('img');
            cardImg.className = 'card-img-top';
            cardImg.src = item.card.imgSrc;
            cardImg.alt = item.card.imgAlt;
            cardImg.style.borderRadius = '20px 20px 0px 0px'
            //estilo
            card.style.width = '19rem';
            card.style.height = '30rem';
            card.style.margin = '10px auto';

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = item.card.title;

            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = item.card.text;

            var btn = document.createElement('a');
            btn.className = 'btn btn-primary';
            btn.href = item.card.btnLink;
            btn.innerText = item.card.btnText;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(btn);

            card.appendChild(cardImg);
            card.appendChild(cardBody);

            cardColumn.appendChild(card);

            tarjetasContainer3.appendChild(cardColumn);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));




    var fundacionesContainer = document.getElementById('fundaciones-container');

    fetch('fundaciones-cards.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var cardColumn = document.createElement('div');
                cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
    
                var card = document.createElement('div');
                card.className = 'card';
    
                var cardImg = document.createElement('img');
                cardImg.className = 'card-img-top';
                cardImg.src = item.card.imgSrc;
                cardImg.alt = item.card.imgAlt;
                cardImg.style.borderRadius = '20px 20px 0px 0px'
                //estilo
                card.style.width = '18rem';
                card.style.margin = '10px auto';
    
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
    
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
                btn.className = 'btn btn-primary';
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

        
// Cargar tarjetas filtradas por fundacion:
function cargarTarjetasFiltradas(jsonFile, fundacion, contenedorId) {
    var tarjetasContainer = document.getElementById(contenedorId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Filtrar tarjetas con la fundación específica
            var tarjetasFiltradas = data.filter(item => item.card.fundacion === fundacion);

            tarjetasFiltradas.forEach(item => {
                var cardColumn = document.createElement('div');
                cardColumn.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

                var card = document.createElement('div');
                card.className = 'card';

                var cardImg = document.createElement('img');
                cardImg.className = 'card-img-top';
                cardImg.src = item.card.imgSrc;
                cardImg.alt = item.card.imgAlt;
                cardImg.style.borderRadius = '20px 20px 0px 0px';

                // Estilo
                card.style.width = '19rem';
                card.style.height = '30rem';
                card.style.margin = '10px auto';

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = item.card.title;

                var cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.innerText = item.card.text;

                var btn = document.createElement('a');
                btn.className = 'btn btn-primary';
                btn.href = item.card.btnLink;
                btn.innerText = item.card.btnText;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(btn);

                card.appendChild(cardImg);
                card.appendChild(cardBody);

                cardColumn.appendChild(card);

                tarjetasContainer.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Llamadas a la función para cargar tarjetas en diferentes contenedores y con diferentes fundaciones
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Biblioseo', 'servicios-biblioseo');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Debra Colombia', 'servicios-debra');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Mujeres de éxito', 'servicios-mujeres');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Corporación Centro Holístico', 'servicios-holistico');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Corporación Entrégate Colombia', 'servicios-entregate');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'CoimpactoB', 'servicios-coimpacto');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Hermanas del Padre Pío', 'servicios-hermanas');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Casa Ronald Mac Donald -Familias', 'servicios-mcdonald');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Quipu Ainy', 'servicios-quipu');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Humanos 3D ', 'servicios-humanos');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'San Antonio', 'servicios-fsa');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Techo', 'servicios-techo');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Cartagena al 100%', 'servicios-cartagena');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Trabajando por amor', 'servicios-trabajando');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Samaritanos di Padre Pio', 'servicios-samaritanos');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Tu cultura', 'servicios-cultura');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Fundacion el Quemado', 'servicios-quemado');
cargarTarjetasFiltradas('https://pais-de-raiz.github.io/home/servicios-voluntariado-experiencial.json', 'Fundacion Bahia y Ecosistemas de Colombia', 'servicios-bahia');