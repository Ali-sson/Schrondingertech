const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Image slider functionality

const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 5000); // Change image every 5 seconds

// 

// Fade-in delay for each stat
document.querySelectorAll('.stat').forEach((el, index) => {
  el.style.animationDelay = `${index * 0.3}s`;
});

// Counting animation
const counters = document.querySelectorAll('.count');
const speed = 100; // smaller = faster

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('data-target');
    const data = +counter.innerText.replace(/\+/g, '').replace(/,/g, '');
    const increment = value / speed;

    if (data < value) {
      counter.innerText = Math.ceil(data + increment);
      setTimeout(animate, 20);
    } else {
      counter.innerText = value.toLocaleString() + (value >= 1000000 ? '+' : '+');
    }
  };
  animate();
});

// 

 const awardSlider = document.querySelector('.award-slider');
  const awardSlides = document.querySelectorAll('.award-slide');
  const awardPrevBtn = document.querySelector('.award-prev');
  const awardNextBtn = document.querySelector('.award-next');

  let awardIndex = 0;
  let awardVisibleSlides = getVisibleSlides();

  function getVisibleSlides() {
    if (window.innerWidth <= 500) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  function awardShowSlide(i) {
    if (i < 0) {
      awardIndex = awardSlides.length - awardVisibleSlides;
    } else if (i > awardSlides.length - awardVisibleSlides) {
      awardIndex = 0;
    }
    awardSlider.style.transform = `translateX(${-awardIndex * (100 / awardVisibleSlides)}%)`;
  }

  awardPrevBtn.addEventListener('click', () => {
    awardIndex--;
    awardShowSlide(awardIndex);
  });

  awardNextBtn.addEventListener('click', () => {
    awardIndex++;
    awardShowSlide(awardIndex);
  });

  // Auto-slide every 5 seconds
  // setInterval(() => {
  //   awardIndex++;
  //   awardShowSlide(awardIndex);
  // }, 1000000);

  // Adjust visibleSlides when window resizes
  window.addEventListener('resize', () => {
    awardVisibleSlides = getVisibleSlides();
    awardShowSlide(awardIndex);
  });
