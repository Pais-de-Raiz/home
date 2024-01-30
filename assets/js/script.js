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


// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
        // Obtén el contenedor de animación dentro de la sección
        var animationContainer = document.getElementById("animation-container");

        // Verifica si el contenedor existe antes de inicializar la animación
        if (animationContainer) {
            // Configura la animación
            var animation = bodymovin.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'img/animation.json' // Reemplaza con la ruta correcta de tu archivo JSON
            });
        } else {
            console.error("No se encontró el contenedor de animación en la sección.");
        }
});

