
// Typing animation for About section
const typingText = document.getElementById('typing-text');
const textToType = "En Drakonet, somos una comunidad apasionada por la tecnología y la innovación. Nacimos con una misión clara: ayudar a los desarrolladores a alcanzar su máximo potencial.Todo comenzó cuando Leandro Bellone, frustrado por la falta de recursos útiles, decidió cambiar las reglas del juego. Sabía que el desarrollo web es más que código: es crear experiencias y resolver problemas reales. Pero muchos se quedaban atrapados sin las herramientas necesarias para avanzar.Por eso nacio Drakonet, un espacio donde los desarrolladores pueden aprender, mejorar y crecer. Más allá de los recursos, creemos en el poder de la colaboración y en el impacto que tiene una web bien diseñada.Nuestro compromiso es con cada desarrollador que busca llevar sus habilidades al siguiente nivel.En Drakonet, no solo compartimos conocimiento, sino que construimos una comunidad donde todos pueden crecer juntos.";

let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingText.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    }
}// Start typing animation when About section becomes active
const aboutSection = document.getElementById('container-info1');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && charIndex === 0) {
            typeText();
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);