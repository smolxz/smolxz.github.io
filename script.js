// --- CONTACT FORM LOGIC ---
const form = document.getElementById("contactForm");
const button = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

// Only run this if the form exists (prevents crash on Home/About pages)
if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    button.innerText = "Sending...";
    button.disabled = true;

    const formData = new FormData(form);

    try {
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
    } catch (error) {
      button.innerText = "Error. Try again";
      button.disabled = false;
    }
  });
}

// --- HAMBURGER MENU LOGIC ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// --- THEME TOGGLE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Safety check: ensure themeToggle exists before using it
if (themeToggle) {
  // Check if user previously selected light mode
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerText = '☾';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeToggle.innerText = '☾';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerText = '☀';
    }
  });
}
