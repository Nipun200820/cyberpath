document.addEventListener('DOMContentLoaded', function() {
    // Welcome text animation
    const welcomeText = "Welcome to CyberPath";
    const welcomeElement = document.getElementById('welcome-text');
    
    // Matrix-style typing effect
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(i);
            i++;
            
            // Random glitch effect occasionally
            if (Math.random() > 0.8) {
                welcomeElement.style.textShadow = '0 0 10px #ff00ff';
                setTimeout(() => {
                    welcomeElement.style.textShadow = '0 0 10px #00ff00';
                }, 100);
            }
        } else {
            clearInterval(typingEffect);
        }
    }, 150);
    
    // Add terminal cursor effect
    welcomeElement.style.borderRight = '2px solid #00ff00';
    setInterval(() => {
        welcomeElement.style.borderRightColor = welcomeElement.style.borderRightColor === 'transparent' ? '#00ff00' : 'transparent';
    }, 500);
});