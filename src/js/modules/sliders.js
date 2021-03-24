const slider = (slider, dir = null, prev, next) => {
  let slideIndex = 1,
    paused = false;
  const slides = document.querySelectorAll(slider);


  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slid => {
      slid.classList.add('animated');
      slid.style.display = 'none';
      slid.addEventListener('mouseover', () => {

      })
    });

    slides[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex - 1);

  function plusSlide(n) {
    showSlides(slideIndex += n);
  }


  try {
    const nextBtn = document.querySelector(next),
      prevBtn = document.querySelector(prev);

    nextBtn.addEventListener('click', () => {
      plusSlide(1);
      slides[slideIndex - 1].classList.remove('slideInRight');
      slides[slideIndex - 1].classList.add('slideInLeft');
    });

    prevBtn.addEventListener('click', () => {
      plusSlide(-1);
      slides[slideIndex - 1].classList.remove('slideInLeft');
      slides[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}

  function activateAnimated() {
    if (dir === 'vertical') {
      paused = setInterval(() => {
        plusSlide(1);
        slides[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlide(1);
        slides[slideIndex - 1].classList.remove('slideInRight');
        slides[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }

  activateAnimated();

  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimated();
  });

};

export default slider;