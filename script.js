// Year in footer
var yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reviews slider (moves ONLY the reviews row)
var reviewsRow = document.getElementById("reviews");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

if (reviewsRow && prevBtn && nextBtn) {
  var step = 336; // 320 card width + 16 gap
  var currentIndex = 0;

  function updateSlider() {
    reviewsRow.style.transform = "translateX(" + (-currentIndex * step) + "px)";
  }

  nextBtn.addEventListener("click", function () {
    var totalCards = reviewsRow.children.length;
    var maxIndex = totalCards - 3; // show 3 at a time
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
}

//start of form

document.addEventListener("DOMContentLoaded", function () {

  // 1. Get elements
  const form = document.querySelector(".contact-form");
  const overlay = document.getElementById("thankYouOverlay");
  const closeBtn = document.getElementById("closeThankYou");

  // Safety check
  if (!form) {
    console.error("Form not found!");
    return;
  }

  // 2. Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop normal submit

    // 3. Collect form data
    const formData = new FormData(form);

    // 4. Send data to PHP
    fetch("/geek-up/PROJECT/submitform.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(text => {
      const result = text.trim();

      console.log("PHP RESPONSE:", result);

      // 5. Success case
      if (result === "success") {
        overlay.style.display = "flex";
        form.reset();
      }
      // 6. Error case
      else {
        alert("Something went wrong.\n\nPHP returned:\n" + result);
      }
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("Connection error. Check console.");
    });
  });

  // 7. Close overlay
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  }

});



//end of form


