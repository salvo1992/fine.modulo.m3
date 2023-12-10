window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Cambia il numero a seconda di quando desideri far cambiare la navbar
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });


  

  const carousels = document.querySelectorAll('.carousel');

  
  function isInViewportVertical(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight / 1.5 &&
      rect.bottom >= 0
    );
  }
  
  
  function handleScroll() {
    for (let i = 0; i < carousels.length; i++) {
      const carousel = carousels[i];
      if (isInViewportVertical(carousel)) {
        carousel.classList.add('visible');
      }
    }
  }
  
  // Event listener to trigger on scroll
  window.addEventListener('scroll', handleScroll);
  