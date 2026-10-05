
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); 
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

const typingText = "Giorgos!";
const typingElement = document.querySelector('.typing');
let i = 0;
function type() {
    if (i < typingText.length) {
        typingElement.textContent += typingText.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}
type();

document.addEventListener('mousemove', e => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

