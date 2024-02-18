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


