document.addEventListener("DOMContentLoaded", function() { 

    // Typewriter effect for text
    const typeText = document.querySelector('.typewriter-text');
    const text = typeText.getAttribute('data-text');
    let index = 0;
    setInterval(() => {
        if(index < text.length) {
            typeText.textContent += text[index];
            index++;
        }
    }, 100);

    // Progress bar on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const progressMax = docHeight - windowHeight;
        const scrollPosition = window.scrollY;
        const progressValue = (scrollPosition / progressMax) * 100;
        document.getElementById('pageProgress').value = progressValue;
    });
    
    
});
