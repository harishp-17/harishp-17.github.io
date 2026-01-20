// ============================================
// HARISH P PORTFOLIO - STATIC GitHub Pages JS
// Mobile Menu + Smooth Scroll + Navbar Effects
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu after click
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect (darken on scroll)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10,10,10,0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(255,215,0,0.1)';
            } else {
                navbar.style.background = 'rgba(10,10,10,0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
            }
        }
    });

    // Hero text animation on load
    const heroTitle = document.querySelector('.hero-text h1');
    const heroSubtitle = document.querySelector('.hero-text h2');
    if (heroTitle) heroTitle.style.opacity = '0';
    if (heroSubtitle) heroSubtitle.style.opacity = '0';

    setTimeout(() => {
        if (heroTitle) heroTitle.style.transition = 'opacity 1s ease';
        if (heroSubtitle) heroSubtitle.style.transition = 'opacity 1s ease 0.3s';
        if (heroTitle) heroTitle.style.opacity = '1';
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
    }, 300);

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate project cards and sections
    document.querySelectorAll('.project-card, .about, .contact').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 10px 25px rgba(255,215,0,0.4)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
    });

    // Window resize - close mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

});
