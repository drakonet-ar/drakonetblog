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
        
        //const indicador1 = document.getElementById('inidicador1');
        //const indicador2 = document.getElementById('inidicador2');

        //if (window.innerWidth <= 1020) {
        //    indicador2.style.opacity = '0';
        //    indicador1.style.opacity = '0';
        //}

        if(window.innerWidth > 1020){

            window.onload = function() {
                console.log("La página ha cargado completamente");
                const containerInfo1 = document.getElementById('container-info1');
                const containerInfo2 = document.getElementById('container-info2');
            
                containerInfo1.classList.add('desaparecer-container-info-left');
                containerInfo2.classList.add('desaparecer-container-info-right');
                
            };
            

            

            document.addEventListener('mousemove', function(event) {
                const screenWidth = window.innerWidth;
                const mouseX = event.clientX;
                const cross1  = document.getElementById('cross1');
                const cross2  = document.getElementById('cross2');
                const cross3  = document.getElementById('cross3');
                const linkhome = document.getElementById('home');
                const linkabout = document.getElementById('about');
                const linkcontact = document.getElementById('contact');
                const containerInfo1 = document.getElementById('container-info1');
                const containerInfo2 = document.getElementById('container-info2');
                const leftBoundary = screenWidth * 0.1; // 20% de la pantalla desde la izquierda
                const rightBoundary = screenWidth * 0.9; // 20% de la pantalla desde la derecha
                const flecha1  = document.getElementById('flecha1');
                const flecha2  = document.getElementById('flecha2');
                //const indicador1 = document.getElementById('inidicador1');
                //const indicador2 = document.getElementById('inidicador2');
                const containerInfo3 = document.getElementById('container-info3');
                const linknewsletter = document.getElementById('newsletter');


                linknewsletter.addEventListener('click', function(event) {
                    event.preventDefault();
                    if(!containerInfo1.classList.contains('desaparecer-container-info-left')||!containerInfo2.classList.contains('desaparecer-container-info-right')){
                        containerInfo2.classList.add('desaparecer-container-info-right');
                        containerInfo1.classList.add('desaparecer-container-info-left');
                    }
                    containerInfo3.classList.remove('desaparecer-container-info-up');
                    containerInfo3.classList.add('center');
                });

                if(!containerInfo1.classList.contains('desaparecer-container-info-left')||!containerInfo3.classList.contains('desaparecer-container-info-up')){
                    flecha1.style.opacity = '0';
                    //indicador1.style.opacity = '0';
                }else{
                    flecha1.style.opacity = '1';
                    //indicador1.style.opacity = '1';
                }
                if(!containerInfo2.classList.contains('desaparecer-container-info-right')||!containerInfo3.classList.contains('desaparecer-container-info-up')){
                    flecha2.style.opacity = '0';
                    //indicador2.style.opacity = '0';
                }else{
                    flecha2.style.opacity = '1';
                    //indicador2.style.opacity = '1';
                }
            
                linkabout.addEventListener('click', function() {
                    if(containerInfo1.classList.contains('desaparecer-container-info-left')){
                        containerInfo1.classList.remove('desaparecer-container-info-left');
                        containerInfo1.classList.add('left');
                    }
                    if(!containerInfo3.classList.contains('desaparecer-container-info-up')){
                        containerInfo3.classList.add('desaparecer-container-info-up');
                        containerInfo3.classList.remove('center');
                    }
                });
            
                linkcontact.addEventListener('click', function() {
                    if(containerInfo2.classList.contains('desaparecer-container-info-right')){
                        containerInfo2.classList.remove('desaparecer-container-info-right');
                        containerInfo2.classList.add('right');
                    }
                    if(!containerInfo3.classList.contains('desaparecer-container-info-up')){
                        containerInfo3.classList.add('desaparecer-container-info-up');
                        containerInfo3.classList.remove('center');
                    }
                });
            
                linkhome.addEventListener('click', function() {
                    if(!containerInfo3.classList.contains('desaparecer-container-info-up')){
                        containerInfo3.classList.add('desaparecer-container-info-up');
                        containerInfo3.classList.remove('center');
                        linknewsletter.classList.remove('active');
                        linkhome.classList.add('active');
                        linknewsletter.style.color = '#ffff';
                        linknewsletter.style.textShadow = 'none';
                    }
                    if(!containerInfo2.classList.contains('desaparecer-container-info-right')&&!containerInfo1.classList.contains('desaparecer-container-info-left')){
                        containerInfo2.classList.add('desaparecer-container-info-right');
                        containerInfo1.classList.add('desaparecer-container-info-left');
                        containerInfo2.classList.remove('right');
                        containerInfo1.classList.remove('left');
                        linkabout.classList.remove('active');
                        linkhome.classList.add('active');
                        linkcontact.classList.remove('active');
                        linknewsletter.classList.remove('active');
                        linkabout.style.color = '#ffff';
                        linkcontact.style.color = '#ffff';
                        linknewsletter.style.color = '#ffff';
                        linkabout.style.textShadow = 'none';
                        linknewsletter.style.textShadow = 'none';
                        linkcontact.style.textShadow = 'none';
                    }else{
                        if(!containerInfo2.classList.contains('desaparecer-container-info-right')&&containerInfo1.classList.contains('desaparecer-container-info-left')){
                            containerInfo2.classList.add('desaparecer-container-info-right');
                            containerInfo2.classList.remove('right');
                            linkabout.classList.remove('active');
                            linkhome.classList.add('active');
                            linkcontact.classList.remove('active');
                            linknewsletter.classList.remove('active');
                            linkabout.style.color = '#ffff';
                            linkcontact.style.color = '#ffff';
                            linknewsletter.style.color = '#ffff';
                            linkabout.style.textShadow = 'none';
                            linknewsletter.style.textShadow = 'none';
                            linkcontact.style.textShadow = 'none';
                        }else{
                            if(containerInfo2.classList.contains('desaparecer-container-info-right')&&!containerInfo1.classList.contains('desaparecer-container-info-left')){
                                containerInfo1.classList.add('desaparecer-container-info-left');
                                containerInfo1.classList.remove('left');
                                linkabout.classList.remove('active');
                                linkhome.classList.add('active');
                                linkcontact.classList.remove('active');
                                linknewsletter.classList.remove('active');
                                linkabout.style.color = '#ffff';
                                linkcontact.style.color = '#ffff';
                                linknewsletter.style.color = '#ffff';
                                linkabout.style.textShadow = 'none';
                                linknewsletter.style.textShadow = 'none';
                                linkcontact.style.textShadow = 'none';
                            }
                        }
                    }
                });

                if(!containerInfo3.classList.contains('desaparecer-container-info-up')){
                    linkabout.classList.remove('active');
                    linkhome.classList.remove('active');
                    linkcontact.classList.remove('active');
                    linknewsletter.classList.add('active');
                    linkhome.style.color = '#ffff';
                    linkcontact.style.color = '#ffff';
                    linkhome.style.textShadow = 'none';
                    linkcontact.style.textShadow = 'none';
                }
            
                if(!containerInfo1.classList.contains('desaparecer-container-info-left')&&!containerInfo2.classList.contains('desaparecer-container-info-right')&&containerInfo3.classList.contains('desaparecer-container-info-up')){
                    linkabout.classList.add('active');
                    linkhome.classList.remove('active');
                    linkcontact.classList.add('active');
                    linknewsletter.classList.remove('active');
                    linkhome.style.color = '#ffff';
                    linknewsletter.style.color = '#ffff';
                    linkhome.style.textShadow = 'none';
                    linknewsletter.style.textShadow = 'none';
                }else{
                    if(!containerInfo1.classList.contains('desaparecer-container-info-left')&&containerInfo2.classList.contains('desaparecer-container-info-right')&&containerInfo3.classList.contains('desaparecer-container-info-up')){
                        linkabout.classList.add('active');
                        linkhome.classList.remove('active');
                        linkcontact.classList.remove('active');
                        linknewsletter.classList.remove('active');
                        linkhome.style.color = '#ffff';
                        linknewsletter.style.color = '#ffff';
                        linkcontact.style.color = '#ffff';
                        linkhome.style.textShadow = 'none';
                        linknewsletter.style.textShadow = 'none';
                        linkcontact.style.textShadow = 'none';
                    }else{
                        if(containerInfo1.classList.contains('desaparecer-container-info-left')&&containerInfo2.classList.contains('desaparecer-container-info-right')&&containerInfo3.classList.contains('desaparecer-container-info-up')){
                            linkabout.classList.remove('active');
                            linkhome.classList.add('active');
                            linkcontact.classList.remove('active');
                            linknewsletter.classList.remove('active');
                            linkabout.style.color = '#ffff';
                            linknewsletter.style.color = '#ffff';
                            linkcontact.style.color = '#ffff';
                            linkabout.style.textShadow = 'none';
                            linknewsletter.style.textShadow = 'none';
                            linkcontact.style.textShadow = 'none';
                    }
                    else{
                        if(containerInfo1.classList.contains('desaparecer-container-info-left')&&!containerInfo2.classList.contains('desaparecer-container-info-right')&&containerInfo3.classList.contains('desaparecer-container-info-up')){
                            linkabout.classList.remove('active');
                            linkhome.classList.remove('active');
                            linkcontact.classList.add('active');
                            linknewsletter.classList.remove('active');
                            linkabout.style.color = '#ffff';
                            linknewsletter.style.color = '#ffff';
                            linkhome.style.color = '#ffff';
                            linkabout.style.textShadow = 'none';
                            linknewsletter.style.textShadow = 'none';
                            linkhome.style.textShadow = 'none';
                        }
                    }
                }
            }
            

                if(containerInfo3.classList.contains('desaparecer-container-info-up')){
                    // Mostrar el contenedor de la izquierda
                    if (mouseX < leftBoundary) {
                        containerInfo1.classList.remove('desaparecer-container-info-left');
                        containerInfo1.classList.add('left');
                    }
                }

                cross1.addEventListener('click', function() {
                    containerInfo1.classList.remove('left');
                    // Solo añadir la clase de desaparición si no la tiene
                    if (!containerInfo1.classList.contains('desaparecer-container-info-left')) {
                        containerInfo1.classList.add('desaparecer-container-info-left');
                    }
                });
            
                if(containerInfo3.classList.contains('desaparecer-container-info-up')){
                    // Mostrar el contenedor de la derecha
                    if (mouseX > rightBoundary) {
                        containerInfo2.classList.remove('desaparecer-container-info-right');
                        containerInfo2.classList.add('right');
                    } 
                }

                cross2.addEventListener('click', function() {
                    containerInfo2.classList.remove('right');
                    if (!containerInfo2.classList.contains('desaparecer-container-info-right')) {
                        containerInfo2.classList.add('desaparecer-container-info-right');
                    }
                });

                cross3.addEventListener('click', function() {
                    containerInfo2.classList.remove('right');
                    if (!containerInfo3.classList.contains('desaparecer-container-info-up')) {
                        containerInfo3.classList.add('desaparecer-container-info-up');
                    }
                });

            });

            }


// Verifica el ancho de la ventana
if (window.innerWidth <= 1020) {
    const linkhome = document.getElementById('home');
    const linkabout = document.getElementById('about');
    const linkcontact = document.getElementById('contact');
    const linknewsletter = document.getElementById('newsletter');
    const containerInfo1 = document.getElementById('container-info1');
    const containerInfo2 = document.getElementById('container-info2');
    const containerInfo3 = document.getElementById('container-info3');

    // Ajuste en píxeles para el scroll
    const offset = 80; // Cambia este valor según sea necesario
    // Función para hacer scroll suave con ajuste
    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Evento para el enlace "about"
    linkabout.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        smoothScroll(containerInfo1); // Scroll hacia containerInfo1
    });

    // Evento para el enlace "contact"
    linkcontact.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        smoothScroll(containerInfo2); // Scroll hacia containerInfo2
    });

    // Evento para el enlace "newsletter"
    linknewsletter.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        smoothScroll(containerInfo3); // Scroll hacia containerInfo2
    });

    // Evento para el enlace "home"
    linkhome.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll hacia arriba
    });

}


