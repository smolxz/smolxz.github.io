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

// ================= TYPING TEXT EFFECT =================
const typeSpan = document.querySelector(".auto-type");
const cursorSpan = document.querySelector(".cursor");

const words = ["Modern Websites", "Digital Platforms", "The Future"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typeSpan.textContent += words[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typeSpan.textContent = words[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= words.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Start the animation only if the element exists (prevents errors on other pages)
if (typeSpan) { 
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(words.length) setTimeout(type, newTextDelay + 250);
  });
}

