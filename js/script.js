// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // close mobile menu after click
      document.querySelector(".nav-links")?.classList.remove("open");
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Greeting message by time of day
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greeting = "Welcome!";

if (hour < 12) greeting = "Good morning 👋";
else if (hour < 18) greeting = "Good afternoon 👋";
else greeting = "Good evening 👋";

greetingEl.textContent = greeting;

// Theme toggle (dark/light)
const themeBtn = document.getElementById("themeBtn");

function setTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  themeBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "light");

themeBtn.addEventListener("click", () => {
  const isLight = !document.body.classList.contains("light");
  setTheme(isLight);
});

// Fake contact form submission (no backend)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "✅ Thanks! Your message has been sent successfully.";
  contactForm.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
