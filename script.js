const form = document.getElementById("contactForm");
const button = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  button.innerText = "Sending...";
  button.disabled = true;

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset();
    form.style.display = "none";
    successMessage.style.display = "block";
  } else {
    button.innerText = "Error. Try again";
    button.disabled = false;
  }
});

// ADD THIS TO THE END OF script.js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

