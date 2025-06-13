// Mobile Navigation
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  setTimeout(() => {
    alert('Terima kasih telah menghubungi saya!');
  }, 100);
});

// Animation on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.project-card, .about-content, form');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state
document.querySelectorAll('.project-card, .about-content, form').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

const sliderTrack = document.querySelector("#projects .slider-track");
const prevBtn = document.querySelector("#projects .slider-btn.prev");
const nextBtn = document.querySelector("#projects .slider-btn.next");

nextBtn.addEventListener("click", () => {
  sliderTrack.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  sliderTrack.scrollBy({ left: -320, behavior: "smooth" });
});
