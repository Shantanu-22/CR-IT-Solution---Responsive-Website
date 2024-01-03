//Nav-bar
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

//Changing Carsole image
document.addEventListener("DOMContentLoaded", function () {
    var carouselElement = document.getElementById('carouselExample');
    var myCarousel = new bootstrap.Carousel(carouselElement);
    setInterval(function () {
      myCarousel.next(); 
    }, 2000); 
});