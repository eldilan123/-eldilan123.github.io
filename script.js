
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

const toggleMobileMenu = () => {
    navLinks.classList.toggle('active');
    
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    
    const links = navLinks.querySelectorAll('a');
    links.forEach((link, index) => {
        if (navLinks.classList.contains('active')) {
            link.style.animation = `slideIn 0.4s ease forwards ${index * 0.1}s`;
        } else {
            link.style.animation = 'none';
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
        }
    });
};


mobileMenuBtn.addEventListener('click', toggleMobileMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});