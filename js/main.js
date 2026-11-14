document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobil Navigasyon Menüsü Kontrolü
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // 2. Güvenli Scroll Reveal Animasyonu
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        document.body.classList.add('js-scroll-ready');

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }
});
