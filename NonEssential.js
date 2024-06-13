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

// ChatGPT: Start of JavaScript for BMI and Body Fat Percentage Calculation

document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate BMI
    function calculateBMI() {
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const height = parseFloat(document.getElementById('bmi-height').value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height)) {
            alert('Please enter valid numbers for weight and height.');
            return;
        }

        const bmi = weight / (height * height);
        // ChatGPT worked here: Updated code to display result in correct location
document.getElementById('bmi-result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2);

document.getElementById('standard-bmi').innerHTML = 'BMI in the range of 18.5 to 24.9 is considered normal.';


    }


    // Event listeners for form submit buttons
    document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);
	
});








document.addEventListener("DOMContentLoaded", function() {
	
	function setDisplay() {
		
		var mobileHTML = `
      <!-- Your HTML code for mobile goes here -->
  <div id="testimonyCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <!-- Carousel items -->
      
<div class="carousel-item active">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Divyansh.jpg">
    <div class="card-body">
      <h5 class="card-title">Divyansh</h5>
      <p class="card-text">Age: 25</p>
      <p class="card-text">"KayakalpWithSaket has helped me reduce 30kgs of healthy weight loss without any dieting or exercise. It has also helped me with my thyroid issues and I don't need any medicines now."</p>
    </div>
  </div>
</div>

</div>
</div>

<div class="carousel-item">
  <div class="row"> 
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Kaavya.jpg">
    <div class="card-body">
      <h5 class="card-title">Kaavya</h5>
      <p class="card-text">Age: 19</p>
      <p class="card-text">"I used to have nose bleeding every once in a while. I tried medication but it was still there. KayakalpWithSaket has helped me in totally curing that. I haven't had that issue in years since I started using KayakalpWithSaket."</p>
    </div>
  </div>
</div>

  </div>
</div>

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Banu.jpg">
    <div class="card-body">
      <h5 class="card-title">Banu</h5>
      <p class="card-text">Age: 52</p>
      <p class="card-text">"I had melasma which is a skin disease on my face and had taken medications and expensive therapies for years, but it only got worse, but thanks to KayakalpWithSaket, it is totally cured now without any medications."</p>
    </div>
  </div>
</div>

  </div>
</div>

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Ramnath.jpg">
    <div class="card-body">
      <h5 class="card-title">Ramnath</h5>
      <p class="card-text">Age: 55</p>
      <p class="card-text">"I have had heart and BP issues due to my weight. I also couldn't climb the stairs. I have lost 46kgs of weight under KayakalpWithSaket, and my knees are better than ever. It's like getting a second life."</p>
    </div>
  </div>
</div>

  </div>
</div>

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Rajesh.jpg">
    <div class="card-body">
      <h5 class="card-title">Rajesh</h5>
      <p class="card-text">Age: 58</p>
      <p class="card-text">"KayakalpWtihSaket has helped me reduce 21kgs of weight. I have much more energy and live a healthier and happier life now. Thanks to my coach and community."</p>
    </div>
  </div>
</div>

  </div>
</div>

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Bitti.png">
    <div class="card-body">
      <h5 class="card-title">Suchita</h5>
      <p class="card-text">Age: 50</p>
      <p class="card-text">"KayakalpWtihSaket has helped me reduce 10kgs of weight within 2 months of starting their program."</p>
    </div>
  </div>
</div>

  </div>
</div>

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Shyam.png">
    <div class="card-body">
      <h5 class="card-title">Shyam</h5>
      <p class="card-text">Age: 52</p>
      <p class="card-text">"KayakalpWtihSaket has helped me reduce 16kgs of weight in just 2 months time from the time I started their program."</p>
    </div>
  </div>
</div>

  </div>
</div>

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Next.jpg">
    <div class="card-body">
      <h5 class="card-title">You</h5>
      <p class="card-text">Age: ??</p>
      <p class="card-text">"Put your trust in us and be the next authentic testimony with your amazing results"</p>
    </div>
  </div>
</div>

  </div>
</div>

    </div>
<!-- Carousel controls -->
<a class="carousel-control-prev" href="#testimonyCarousel" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#testimonyCarousel" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>

  </div>
    `;

    var desktopHTML = `
    <!-- Your HTML code for desktop goes here -->
  <div id="testimonyCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <!-- Carousel items -->
      
<div class="carousel-item active">
  <div class="row">
    
<div class="col-md-4" style="margin-left: 240px;">
  <div class="card testimony-card">
    <img class="card-img-top" src="Divyansh.jpg">
    <div class="card-body">
      <h5 class="card-title">Divyansh</h5>
      <p class="card-text">Age: 25</p>
      <p class="card-text">"KayakalpWithSaket has helped me reduce 30kgs of weight without any dieting or exercise. It has also helped me with my thyroid issues and I don't need any medicines now."</p>
    </div>
  </div>
</div>
<!--
</div>
</div>

<div class="carousel-item">
  <div class="row"> -->
<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Kaavya.jpg">
    <div class="card-body">
      <h5 class="card-title">Kaavya</h5>
      <p class="card-text">Age: 19</p>
      <p class="card-text">"I used to have nose bleeding every once in a while. I tried medication but it was still there. KayakalpWithSaket has helped me in totally curing that. I haven't had that issue in years since I started using KayakalpWithSaket."</p>
    </div>
  </div>
</div>

  </div>
</div>

<!-- Second set of testimonies -->

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4" style="margin-left: 240px;">
  <div class="card testimony-card">
    <img class="card-img-top" src="Banu.jpg">
    <div class="card-body">
      <h5 class="card-title">Banu</h5>
      <p class="card-text">Age: 52</p>
      <p class="card-text">"I had melasma which is a skin disease on my face and had taken medications and expensive therapies for years, but it only got worse, but thanks to KayakalpWithSaket, it is totally cured now without any medications."</p>
    </div>
  </div>
</div>

<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Ramnath.jpg">
    <div class="card-body">
      <h5 class="card-title">Ramnath</h5>
      <p class="card-text">Age: 55</p>
      <p class="card-text">"I have had heart and BP issues due to my weight. I also couldn't climb the stairs. I have lost 46kgs of weight under KayakalpWithSaket, and my knees are better than ever. It's like getting a second life."</p>
    </div>
  </div>
</div>

  </div>
</div>

<!-- Third Set of Testimonies -->

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4" style="margin-left: 240px;">
  <div class="card testimony-card">
    <img class="card-img-top" src="Rajesh.jpg">
    <div class="card-body">
      <h5 class="card-title">Rajesh</h5>
      <p class="card-text">Age: 58</p>
      <p class="card-text">"KayakalpWtihSaket has helped me reduce 21kgs of weight. I have much more energy and live a healthier and happier life now. Thanks to my coach and community."</p>
    </div>
  </div>
</div>

<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Shyam.png">
    <div class="card-body">
      <h5 class="card-title">Shyam</h5>
      <p class="card-text">Age: 52</p>
      <p class="card-text">"KayakalpWtihSaket has helped me reduce 16kgs of weight in just 2 months time from the time I started their program."</p>
    </div>
  </div>
</div>

  </div>
</div>

<!-- Fourth Set of Testimonies -->

<div class="carousel-item ">
  <div class="row">
    
<div class="col-md-4" style="margin-left: 240px;">
  <div class="card testimony-card">
    <img class="card-img-top" src="Bitti.png">
    <div class="card-body">
      <h5 class="card-title">Suchita</h5>
      <p class="card-text">Age: 50</p>
      <p class="card-text">"KayakalpWtihSaket has helped me reduce 10kgs of weight within 2 months of starting their program."</p>
    </div>
  </div>
</div>

<div class="col-md-4">
  <div class="card testimony-card">
    <img class="card-img-top" src="Next.jpg">
    <div class="card-body">
      <h5 class="card-title">You</h5>
      <p class="card-text">Age: ??</p>
      <p class="card-text">"Put your trust in us and be the next authentic testimony with your amazing results."</p>
    </div>
  </div>
</div>

  </div>
</div>

    </div>
	
<!-- Carousel controls -->
<a class="carousel-control-prev" href="#testimonyCarousel" role="button" data-slide="prev" style="opacity: 0.9 !important;">
  <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: #B2BEB5 !important;"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#testimonyCarousel" role="button" data-slide="next" style="opacity: 0.8 !important;">
  <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: #B2BEB5 !important;"></span>
  <span class="sr-only">Next</span>
</a>

	
  </div>
  `;
		
	var mobileSection = document.getElementById('mobileSection');
    var desktopSection = document.getElementById('desktopSection');

    if (window.innerWidth <= 768) {
        mobileSection.innerHTML = mobileHTML;
        mobileSection.style.display = 'block';
        desktopSection.style.display = 'none';
    } else {
        desktopSection.innerHTML = desktopHTML;
        desktopSection.style.display = 'block';
        mobileSection.style.display = 'none';
    }
	
	}
    // Initial setting
    setDisplay();

    // Update display on window resize
    window.addEventListener('resize', function() {
        setDisplay();
    });

});



    // Add margin-left to the dynamically generated Testimony cards
    const testimonyCards = document.querySelectorAll('.testimony-card');
    testimonyCards.forEach(card => {
        card.style.marginLeft = '330px';
    });

// Function to open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Add event listeners to close buttons
document.addEventListener('DOMContentLoaded', function() {
  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach((button) => {
    button.addEventListener('click', function() {
      const modalId = this.id.replace('-close', '-modal');
      closeModal(modalId);
    });
  });
});
