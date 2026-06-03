const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
counter.innerText = "0";

const target = Number(counter.getAttribute("data-target"));
const duration = 1800;
const startTime = performance.now();

const update = (currentTime) => {
const elapsed = currentTime - startTime;
const progress = Math.min(elapsed / duration, 1);
const value = Math.floor(progress * target);

```
counter.innerText = value;

if (progress < 1) {
  requestAnimationFrame(update);
} else {
  counter.innerText = target;
}
```

};

requestAnimationFrame(update);
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
entry.target.classList.add("counted");
startCounter(entry.target);
}
});
}, { threshold: 0.35 });

counters.forEach(counter => observer.observe(counter));

const themeToggle = document.getElementById("themeToggle");

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

