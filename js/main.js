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

    // 2. Scroll Reveal (Kaydırdıkça Yumuşak Belirme) Animasyonu
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Bir kez belirdikten sonra tekrar gizleme
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Eski tarayıcılar için yedek
        revealElements.forEach(el => el.classList.add('is-visible'));
    }
});
