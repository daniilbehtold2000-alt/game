(function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.site-nav');
    const yearEl = document.getElementById('copyright-year');

    // Burger menu toggle
    if (burger && nav) {
        burger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            burger.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    burger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active nav link based on current path
    const setActiveLink = () => {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const current = path === '' ? 'index.html' : path;
        document.querySelectorAll('.site-nav a').forEach((link) => {
            const href = link.getAttribute('href');
            const normalizedHref = href === './' ? 'index.html' : href;
            if (normalizedHref === current) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    setActiveLink();

    // Year in footer
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
