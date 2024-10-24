const content = document.querySelector('.content');


        // ***************************************************************************************************************************************************************************
        // Header visibility
        const header = document.getElementById('main-header');
        const navLinks = document.querySelectorAll('#main-header nav ul li a');
        let isHeaderVisible = false;
        let headerTimeout;

        function showHeader() {
            if (!isHeaderVisible) {
                header.classList.remove('hidden');
                isHeaderVisible = true;
            }
        }

        function hideHeader() {
            if (isHeaderVisible) {
                header.classList.add('hidden');
                isHeaderVisible = false;
            }
        }

        function updateHeaderVisibility(e) {
            const headerHeight = header.offsetHeight;
            const isMouseInHeaderArea = e.clientY < headerHeight;
            const isAtTop = content.scrollTop < headerHeight;

            if (window.innerWidth <= 1020) {
                showHeader();
            } else {
                if (isMouseInHeaderArea) {
                    showHeader();
                    clearTimeout(headerTimeout);
                } else {
                    if (isAtTop) {
                        hideHeader();
                    } else {
                        clearTimeout(headerTimeout);
                        headerTimeout = setTimeout(hideHeader, 3000);
                    }
                }
            }
        }

        document.addEventListener('mousemove', updateHeaderVisibility);
        content.addEventListener('scroll', () => {
            updateHeaderVisibility({ clientY: 0 });
        });
        if (window.innerWidth <= 1020) {
            updateHeaderVisibility({ clientY: 0 });
        }
        // ***************************************************************************************************************************************************************************
        // Burger menu
        const burgerMenu = document.querySelector('.burger-menu');
        const nav = document.querySelector('#main-header nav');

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('open');
            nav.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('open');
                nav.classList.remove('open');
            });
        });

        // Add resize event listener to handle responsive behavior
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1020) {
                burgerMenu.classList.remove('open');
                nav.classList.remove('open');
            }
            updateHeaderVisibility({ clientY: 0 });
        });

        // ***************************************************************************************************************************************************************************
        // Smooth scrolling for nav links
        let currentSection = 0; // Inicializar currentSection
        navLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentSection = index;
                content.scrollTo({
                    top: currentSection * window.innerHeight,
                    behavior: 'smooth'
                });
            });
        });