(function () {
    'use strict';

    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    if (!toggle || !links) {
        return;
    }

    function closeMenu() {
        toggle.classList.remove('is-open');
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        toggle.classList.add('is-open');
        links.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function () {
        var isOpen = links.classList.contains('is-open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Bir bağlantıya tıklandığında menü otomatik kapansın
    Array.prototype.forEach.call(links.querySelectorAll('a'), function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Escape tuşu ile kapama (klavye kullanılabilirliği)
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    // Menü dışına tıklandığında kapama
    document.addEventListener('click', function (event) {
        var isOpen = links.classList.contains('is-open');
        if (!isOpen) {
            return;
        }
        var clickedInsideMenu = links.contains(event.target);
        var clickedToggle = toggle.contains(event.target);
        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });
})();
