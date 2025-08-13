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

// // 
// function autoSlideAwards() {
//   const container = document.querySelector('.awards-logos');

//   if (window.innerWidth <= 900) {
//     let scrollAmount = 0;
//     const scrollStep = 100; // px per step
//     const maxScroll = container.scrollWidth - container.clientWidth;

//     setInterval(() => {
//       if (scrollAmount >= maxScroll) {
//         scrollAmount = 0;
//       } else {
//         scrollAmount += scrollStep;
//       }
//       container.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }, 2000); // every 2 seconds
//   }
// }

// autoSlideAwards();
// window.addEventListener('resize', autoSlideAwards);
let awardInterval;

function autoSlideAwards() {
  clearInterval(awardInterval); // stop any previous scrolling

  const container = document.querySelector('.awards-logos');
  if (!container) return;

  if (window.innerWidth <= 900) {
    let scrollAmount = 0;
    const scrollStep = 120; // pixels per step
    const maxScroll = container.scrollWidth - container.clientWidth;

    awardInterval = setInterval(() => {
      scrollAmount = (scrollAmount >= maxScroll) ? 0 : scrollAmount + scrollStep;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 2000);
  }
}

autoSlideAwards();
window.addEventListener('resize', autoSlideAwards);


autoSlideAwards();
window.addEventListener('resize', autoSlideAwards);
