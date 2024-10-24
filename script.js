document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('sphereCanvas');
    const ctx = canvas.getContext('2d');
    const title = document.querySelector('h1');
    const header = document.getElementById('main-header');
    const links = document.querySelectorAll('#main-header nav ul li a');
    const footer = document.getElementById('main-footer');
    const botonnewsletter = document.getElementById('buttom-newsletter');
    const linksmedia = document.querySelectorAll('#social-media a');
    const abouttitle = document.getElementById('about-tittle');
    const containerInfo1 = document.getElementById('container-info1');
    const containerInfo2 = document.getElementById('container-info2');
    

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.baseX = x;
            this.baseY = y;
            this.baseZ = z;
            this.velocity = Math.random() * 2.5 - 1.5;
        }

        rotate(angleX, angleY) {
            let x = this.baseX * Math.cos(angleY) - this.baseZ * Math.sin(angleY);
            let z = this.baseX * Math.sin(angleY) + this.baseZ * Math.cos(angleY);
            let y = this.baseY * Math.cos(angleX) - z * Math.sin(angleX);
            z = this.baseY * Math.sin(angleX) + z * Math.cos(angleX);

            this.x = x;
            this.y = y;
            this.z = z;
        }

        update(time, isReversing) {
            const direction = isReversing ? -1 : 1;
            this.baseY += this.velocity * direction;
            if (Math.abs(this.baseY) > 200) {
                this.velocity *= -1;
            }
        }

        project() {
            const perspective = 800;
            const scale = perspective / (perspective + this.z);
            return {
                x: this.x * scale + canvas.width / 2,
                y: this.y * scale + canvas.height / 2,
                scale: scale
            };
        }
    }

    let radius;
    const particles = [];
    let numParticles = window.innerWidth > 1020 ? 3000 : 200;
    const colors = [
        { r: 0, g: 255, b: 200 },
        { r: 255, g: 0, b: 128 },
        { r: 128, g: 0, b: 255 },
        { r: 0, g: 128, b: 255 },
        { r: 0, g: 255, b: 128 }
    ];

    radius = window.innerWidth > 1020 ? 280 : 200;

    for (let i = 0; i < numParticles; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        particles.push(new Particle(x, y, z));
    }

    let angleX = 0;
    let angleY = 0;
    let startTime = Date.now();
    let isReversing = false;

    function lerpColor(color1, color2, factor) {
        return {
            r: Math.round(color1.r + (color2.r - color1.r) * factor),
            g: Math.round(color1.g + (color2.g - color1.g) * factor),
            b: Math.round(color1.b + (color2.b - color1.b) * factor)
        };
    }

    let currentColorIndex = 0;
    let nextColorIndex = 1;
    let colorTransition = 0;
    const colorTransitionSpeed = 0.005;

    function updateTitleShadow(color) {
        title.style.textShadow = `
            0 0 10px rgb(${color.r}, ${color.g}, ${color.b}),
            0 0 20px rgb(${color.r}, ${color.g}, ${color.b}),
            0 0 30px rgb(${color.r}, ${color.g}, ${color.b})
        `;
        abouttitle.style.textShadow = `
            0 0 10px rgb(${color.r}, ${color.g}, ${color.b}),
            0 0 20px rgb(${color.r}, ${color.g}, ${color.b}),
            0 0 30px rgb(${color.r}, ${color.g}, ${color.b})
        `;
        header.style.filter = `drop-shadow(2px 2px 10px rgb(${color.r}, ${color.g}, ${color.b}))`;
        containerInfo1.style.filter = `drop-shadow(2px 2px 10px rgb(${color.r}, ${color.g}, ${color.b}))`;
        containerInfo2.style.filter = `drop-shadow(2px 2px 10px rgb(${color.r}, ${color.g}, ${color.b}))`;
        if (window.innerWidth > 1020) {
            footer.style.filter = `drop-shadow(2px 2px 10px rgb(${color.r}, ${color.g}, ${color.b}))`;
        }
        botonnewsletter.style.background = `rgb(${color.r}, ${color.g}, ${color.b})`;

        linksmedia.forEach(linkmedia => {
            const originalColor = window.getComputedStyle(linkmedia).color; // Obtener el color original
            linkmedia.addEventListener('mouseover', () => {
                linkmedia.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
            });

            linkmedia.addEventListener('mouseout', () => {
                linkmedia.style.color = originalColor; // Restaurar el color original
            });
        });

        links.forEach(link => {
            if (link.classList.contains('active')) {
                link.style.textShadow = `
                    0 0 10px rgb(${color.r}, ${color.g}, ${color.b}),
                    0 0 20px rgb(${color.r}, ${color.g}, ${color.b}),
                    0 0 30px rgb(${color.r}, ${color.g}, ${color.b})
                `;
                link.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`; 
            }

            link.addEventListener('mouseout', () => {
                if (!link.classList.contains('active')) {
                    link.style.textShadow = 'none';
                    link.style.color = ''; 
                }
            });
        });
    }

    function animate() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime >= 10000) {
            isReversing = !isReversing;
            startTime = currentTime;
        }

        ctx.fillStyle = '#07090c';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        colorTransition += colorTransitionSpeed;
        if (colorTransition >= 1) {
            colorTransition = 0;
            currentColorIndex = nextColorIndex;
            nextColorIndex = (nextColorIndex + 1) % colors.length;
        }

        const currentColor = lerpColor(
            colors[currentColorIndex],
            colors[nextColorIndex],
            colorTransition
        );

        updateTitleShadow(currentColor);

        particles.sort((a, b) => b.z - a.z);

        angleX += 0.003;
        angleY += 0.004;

        particles.forEach(particle => {
            particle.update(elapsedTime, isReversing);
            particle.rotate(angleX, angleY);
            const projected = particle.project();

            const distance = Math.sqrt(
                particle.x * particle.x +
                particle.y * particle.y +
                particle.z * particle.z
            );

            const maxDistance = radius * 1.2;
            const normalizedDistance = distance / maxDistance;
            const alpha = Math.max(0, 1 - normalizedDistance);
            const size = projected.scale * (window.innerWidth > 1020 ? 2.8 : 10);

            const gradient = ctx.createRadialGradient(
                projected.x, projected.y, 0,
                projected.x, projected.y, size * 2
            );

            gradient.addColorStop(0, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${alpha * 0.8})`);
            gradient.addColorStop(1, `rgba(${currentColor.r * 0.4}, ${currentColor.g * 0.4}, ${currentColor.b * 0.4}, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
});
