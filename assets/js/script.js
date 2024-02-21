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
    xhr.open('GET', 'assets/partials/head.html', true);
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

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del comunidades.html en la sección con id "comunidades"
    var comunidadesContainer = document.getElementById('comunidades');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                comunidadesContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar comunidades: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/comunidades.html', true);
    xhr.send();
});




var tarjetasContainer = document.getElementById('servicios-container');

fetch('servicios.json')
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
            //estilo
            card.style.width = '18rem';
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
