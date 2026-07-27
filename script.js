const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id === 'about') {
                startTyping();
            }
        }
    });
}, { threshold: 0.2 });

revealEls.forEach(el => revealObserver.observe(el));

let typingStarted = false;
const typingTextEl = document.getElementById('typingText');
const cursorEl = document.getElementById('cursor');

const fullText = "Hello! I'm Christian Akili — a tech enthusiast who loves exploring both hardware and software. I enjoy troubleshooting complex problems, whether it's diagnosing a faulty power supply, fixing Windows driver issues, or simulating circuits in Proteus. I'm experienced with various operating systems like Kali Linux, Ubuntu, and macOS, and I can program microcontrollers such as ATmega and Arduino. I studied at [Your University] and I'm based in [Your Location]. What drives me is the curiosity to understand how things work and the determination to build solutions that actually function. Every project, whether it works on the first try or takes days of debugging, teaches me something I carry forward.";

function startTyping() {
    if (typingStarted) return;
    typingStarted = true;
    let index = 0;

    function typeChar() {
        if (index < fullText.length) {
            typingTextEl.textContent += fullText.charAt(index);
            index++;
            const delay = fullText.charAt(index - 1).match(/[.,!?]/) ? 60 : 25 + Math.random() * 20;
            setTimeout(typeChar, delay);
        } else {
            cursorEl.classList.add('hidden');
        }
    }
    setTimeout(typeChar, 400);
}

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 50 ? 'var(--border)' : 'transparent';
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gimp-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        lightboxImg.src = thumb.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
