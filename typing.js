
// Typing animation for About section
const typingText = document.getElementById('typing-text');
const textToType = "Hello! I'm a passionate web developer with a keen interest in creating innovative and user-friendly digital experiences. With a strong foundation in front-end technologies and a growing expertise in back-end development, I'm always eager to take on new challenges and push the boundaries of what's possible on the web. I'm currently seeking opportunities to collaborate on exciting projects that make a positive impact. Whether it's a startup looking for a dedicated developer or an established company in need of fresh perspectives, I'm ready to bring my skills and enthusiasm to the table.";

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