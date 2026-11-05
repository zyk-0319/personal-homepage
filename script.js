/* ===== 页面元素 ===== */
const root = document.documentElement;
const nav = document.getElementById("site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const themeToggle = document.getElementById("theme-toggle");
const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".project-card");
const dotsContainer = document.querySelector(".carousel-dots");
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

/* ===== 主题切换与偏好记忆 ===== */
function getPreferredTheme() {
  const savedTheme = localStorage.getItem("homepage-theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("dark-theme", isDark);
  themeToggle.textContent = isDark ? "浅色模式" : "深色模式";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("homepage-theme", theme);
}

themeToggle.addEventListener("click", () => {
  applyTheme(root.classList.contains("dark-theme") ? "light" : "dark");
});

/* ===== 移动端导航 ===== */
function closeMenu() {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu, { passive: true }));
document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !nav.classList.contains("open")) return;
  const focusWasInsideMenu = nav.contains(document.activeElement);
  closeMenu();
  if (focusWasInsideMenu) menuToggle.focus();
});

/* ===== 导航当前区域高亮 ===== */
function setActiveSection(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const observedSections = Array.from(navLinks)
  .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) setActiveSection(visibleEntry.target.id);
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

/* ===== 项目轮播 ===== */
let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "carousel-dot";
  dot.setAttribute("aria-label", `显示第 ${index + 1} 个项目`);
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentIndex;
    slide.classList.toggle("is-active", isActive);

    if (isActive) {
      slide.removeAttribute("inert");
    } else {
      slide.setAttribute("inert", "");
    }
  });

  dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
    const isActive = dotIndex === currentIndex;
    dot.classList.toggle("active", isActive);
    if (isActive) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

document.querySelectorAll(".carousel-button").forEach((button) => {
  button.addEventListener("click", () => showSlide(currentIndex + Number(button.dataset.direction)));
});

carousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showSlide(currentIndex - 1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    showSlide(currentIndex + 1);
  }
});

let swipeStartX = 0;
let swipeStartY = 0;

carousel.addEventListener("pointerdown", (event) => {
  swipeStartX = event.clientX;
  swipeStartY = event.clientY;
}, { passive: true });

carousel.addEventListener("pointerup", (event) => {
  const deltaX = event.clientX - swipeStartX;
  const deltaY = event.clientY - swipeStartY;

  if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 30) {
    showSlide(currentIndex + (deltaX < 0 ? 1 : -1));
  }
}, { passive: true });

/* ===== 联系表单校验 ===== */
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  message: document.getElementById("message"),
};

const errors = {
  name: document.getElementById("name-error"),
  email: document.getElementById("email-error"),
  message: document.getElementById("message-error"),
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldState(fieldName, message) {
  errors[fieldName].textContent = message;
  fields[fieldName].classList.toggle("invalid", Boolean(message));
  fields[fieldName].setAttribute("aria-invalid", String(Boolean(message)));
}

function validateField(fieldName) {
  const value = fields[fieldName].value.trim();

  if (fieldName === "email") {
    if (!value) return "邮箱不能为空";
    if (!emailPattern.test(value)) return "请输入有效邮箱，例如 name@example.com";
    return "";
  }

  if (!value) return fieldName === "name" ? "姓名不能为空" : "留言不能为空";
  return "";
}

Object.keys(fields).forEach((fieldName) => {
  fields[fieldName].addEventListener("input", () => setFieldState(fieldName, ""));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let firstInvalidField = null;
  let isValid = true;

  Object.keys(fields).forEach((fieldName) => {
    const message = validateField(fieldName);
    setFieldState(fieldName, message);

    if (message) {
      isValid = false;
      if (!firstInvalidField) firstInvalidField = fields[fieldName];
    }
  });

  if (isValid) {
    form.reset();
    formStatus.textContent = "已收到留言";
  } else {
    formStatus.textContent = "";
    firstInvalidField.focus();
  }
});

/* ===== 初始状态 ===== */
applyTheme(getPreferredTheme());
setActiveSection("home");
showSlide(0);


