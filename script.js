document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
const target = Number(counter.getAttribute("data-target"));
let current = 0;
const duration = 1800;
const stepTime = 20;
const steps = duration / stepTime;
const increment = target / steps;


const updateCounter = () => {
  current += increment;

  if (current < target) {
    counter.innerText = Math.floor(current);
    setTimeout(updateCounter, stepTime);
  } else {
    counter.innerText = target;
  }
};

updateCounter();


});

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
if (localStorage.getItem("theme") === "light") {
document.body.classList.add("light-mode");
themeToggle.innerText = "☀️";
}


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.innerText = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.innerText = "🌙";
    localStorage.setItem("theme", "dark");
  }
});


}
});
