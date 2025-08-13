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

// Auto-slide awards logos
// This function will automatically scroll the awards logos section
function autoSlideAwards() {
  const logoSections = document.querySelectorAll('.awards-logos');

  logoSections.forEach(section => {
    let scrollAmount = 0;
    const scrollStep = 1; // px per frame
    const scrollDelay = 20; // ms per frame

    function scrollLogos() {
      section.scrollLeft += scrollStep;
      scrollAmount += scrollStep;

      if (section.scrollLeft + section.clientWidth >= section.scrollWidth) {
        section.scrollLeft = 0; // reset to start
        scrollAmount = 0;
      }
    }

    setInterval(scrollLogos, scrollDelay);
  });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', autoSlideAwards);
