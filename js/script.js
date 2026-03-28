// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      document.querySelector(".nav-links")?.classList.remove("open");
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Greeting message by time of day
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greeting = "Welcome!";

if (hour < 12) {
  greeting = "Good morning 👋";
} else if (hour < 18) {
  greeting = "Good afternoon 👋";
} else {
  greeting = "Good evening 👋";
}

if (greetingEl) {
  greetingEl.textContent = greeting;
}

// Theme toggle with localStorage
const themeBtn = document.getElementById("themeBtn");

function setTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  if (themeBtn) {
    themeBtn.textContent = isLight ? "☀️" : "🌙";
  }
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "light");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light");
    setTheme(isLight);
  });
}

// Contact form validation and feedback
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields before submitting.";
      formStatus.className = "form-status error";
      return;
    }

    if (!emailPattern.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    formStatus.textContent = "✅ Thanks! Your message has been sent successfully.";
    formStatus.className = "form-status success";
    contactForm.reset();
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
