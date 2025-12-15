/* =========================
   ACTIVE NAVIGATION ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   SMOOTH SCROLL (BACKUP)
========================= */
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* =========================
   CONTACT FORM VALIDATION
========================= */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.borderColor = "#ef4444";
        valid = false;
      } else {
        input.style.borderColor = "#d1d5db";
      }
    });

    if (valid) {
      alert("Message sent successfully!");
      form.reset();
    }
  });
}

/* =========================
   FADE-IN ON SCROLL
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
