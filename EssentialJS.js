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

document.addEventListener("DOMContentLoaded", function() {
    const textContainer1 = document.getElementById("text-container1");
    const ulElement = textContainer1.querySelector("ul");
    const listItems = Array.from(ulElement.querySelectorAll("li"));
    ulElement.innerHTML = ""; // Clear existing bullet points

    let listItemIndex = 0;
    const displayInterval = setInterval(() => {
        if (listItemIndex < listItems.length) {
            const listItem = document.createElement("li");
            const textContent = listItems[listItemIndex].textContent;
            ulElement.appendChild(listItem);

            let charIndex = 0;
            const charDisplayInterval = setInterval(() => {
                if (charIndex < textContent.length) {
                    listItem.textContent += textContent[charIndex];
                    charIndex++;
                } else {
                    clearInterval(charDisplayInterval); // Stop interval when all characters are displayed
                }
            }, 100); // Display each character every 100 milliseconds

            listItemIndex++;
        } else {
            clearInterval(displayInterval); // Stop interval when all bullet points are displayed
        }
    }, 2000); // Display each bullet point every 2 seconds to give time for characters to appear
});