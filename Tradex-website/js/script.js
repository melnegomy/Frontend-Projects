
    (function () {
      'use strict';
      var forms = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
    })();

    let started = false;

  function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const speed = 150; 
    const increment = target / speed;

    let count = 0;
    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  }

  window.addEventListener('scroll', function () {
    const counters = document.querySelectorAll('.counter-number');
    const section = document.querySelector('.counter');

    if (!started && isInViewport(section)) {
      counters.forEach(counter => animateCounter(counter));
      started = true;
    }
  });


  $(document).ready(function () {
    var owl = $(".testimonial-carousel");

    owl.owlCarousel({
      items: 2,
      margin: 0,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });

    
    $(".owl-prev-custom").click(function () {
      owl.trigger('prev.owl.carousel');
    });

    $(".owl-next-custom").click(function () {
      owl.trigger('next.owl.carousel');
    });
  });