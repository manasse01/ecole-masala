// MENU STICKY
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// FADE-IN SECTIONS
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));


// REFERENCE A-----------------------------------------------------------------------------
// FADE-IN AU SCROLL
const elements = document.querySelectorAll('.fade-in');

const observerR = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observerR.observe(el));

// COMPTEUR ANIMÉ
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + (target === 90 ? '%' : '+');
        }
    };

    updateCounter();
});



// ===== REFERENCE B =====------------------------------------------------------------------
// ===== SLIDER AUTOMATIQUE =====
const slider = document.querySelector('.slider');
let scrollAmount = 0;

function autoSlide(){
    scrollAmount += 320;

    if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}

setInterval(autoSlide, 3000);


// ===== ANIMATION SCROLL =====
const elementss = document.querySelectorAll('.fade-in');

const observera = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});

elementss.forEach(el => observera.observe(el));


// topbar
// MENU MOBILE
function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

// NAVBAR SCROLL
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// NOS ACTIVITES
const cards = document.querySelectorAll(".card");

const observerE = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observerE.observe(card);
});

