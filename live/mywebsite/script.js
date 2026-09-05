const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxClose = document.querySelector(".lightbox-close");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const progressBar = document.querySelector(".scroll-progress span");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeText = document.querySelector(".theme-text");
const langToggle = document.querySelector(".lang-toggle");
const typingText = document.querySelector("#typingText");
const counters = document.querySelectorAll(".counter");
const gallerySearch = document.querySelector("#gallerySearch");
const galleryEmpty = document.querySelector("#galleryEmpty");
const backToTop = document.querySelector(".back-to-top");
const slides = document.querySelectorAll(".slide");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const sliderDots = document.querySelector(".slider-dots");
const mouseGlow = document.querySelector(".mouse-glow");
const canAnimate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const categoryLabels = {
  ar: {
    dashboard: "لوحات تحكم",
    realestate: "عقارات",
    cars: "سيارات",
    education: "تعليم",
    charity: "خيري",
    tourism: "سياحة",
    store: "متجر"
  },
  en: {
    dashboard: "Dashboards",
    realestate: "Real Estate",
    cars: "Automotive",
    education: "Education",
    charity: "Charity",
    tourism: "Tourism",
    store: "Store"
  }
};

let lastFocusedElement = null;
let activeFilter = "all";
let activeSlide = 0;
let slideTimer = null;

// Initialize language preference from localStorage or default to Arabic (ar)
let currentLang = localStorage.getItem("portfolio-lang") || "ar";

function updateScrollFeatures() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }

  backToTop?.classList.toggle("is-visible", scrollTop > 520);
}

window.addEventListener("scroll", updateScrollFeatures, { passive: true });
window.addEventListener("load", updateScrollFeatures);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: canAnimate ? "smooth" : "auto" });
});

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  const isLight = theme === "light";
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  if (themeIcon) themeIcon.textContent = isLight ? "☀" : "☾";
  if (themeText) {
    themeText.textContent = isLight 
      ? (currentLang === "en" ? "Light" : "فاتح") 
      : (currentLang === "en" ? "Dark" : "داكن");
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");
applyTheme(savedTheme || "dark");

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
});

// Dynamic typing words for both languages
const typingWords = {
  ar: ["واجهات مواقع", "لوحات تحكم", "منصات تعليمية", "متاجر إلكترونية", "معارض أعمال"],
  en: ["Web Interfaces", "Dashboards", "Educational Platforms", "E-commerce Stores", "Portfolios"]
};
let typingIndex = 0;
let typingInterval = null;

function startTypingEffect() {
  if (!typingText || !canAnimate) return;
  clearInterval(typingInterval);

  const words = typingWords[currentLang];
  typingText.textContent = words[typingIndex % words.length];

  typingInterval = setInterval(() => {
    const activeWords = typingWords[currentLang];
    typingIndex = (typingIndex + 1) % activeWords.length;
    typingText.style.opacity = "0";

    setTimeout(() => {
      typingText.textContent = activeWords[typingIndex];
      typingText.style.opacity = "1";
    }, 180);
  }, 1900);
}

function setMenuState(isOpen) {
  menuToggle?.classList.toggle("is-open", isOpen);
  navMenu?.classList.toggle("is-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  if (menuToggle) {
    if (isOpen) {
      menuToggle.setAttribute("aria-label", currentLang === "en" ? "Close Menu" : "إغلاق القائمة");
    } else {
      menuToggle.setAttribute("aria-label", currentLang === "en" ? "Open Menu" : "فتح القائمة");
    }
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    applyGalleryFilters();
  });
});

gallerySearch?.addEventListener("input", applyGalleryFilters);

function normalizeText(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/[ة]/g, "ه")
    .replace(/[ى]/g, "ي")
    .trim();
}

function applyGalleryFilters() {
  const query = normalizeText(gallerySearch?.value);
  let visibleCount = 0;

  galleryItems.forEach((item) => {
    const category = item.dataset.category;
    const titleAr = item.dataset.titleAr || "";
    const titleEn = item.dataset.titleEn || "";
    const catLabelAr = categoryLabels.ar[category] || "";
    const catLabelEn = categoryLabels.en[category] || "";

    const textToMatch = normalizeText(`${titleAr} ${titleEn} ${catLabelAr} ${catLabelEn} ${item.textContent}`);
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = !query || textToMatch.includes(query);
    const shouldShow = matchesFilter && matchesSearch;

    item.classList.toggle("is-hidden", !shouldShow);
    item.setAttribute("aria-hidden", String(!shouldShow));
    item.tabIndex = shouldShow ? 0 : -1;
    if (shouldShow) visibleCount += 1;
  });

  if (galleryEmpty) {
    galleryEmpty.hidden = visibleCount !== 0;
  }
}

function openLightbox(item) {
  const image = item.querySelector("img");
  lastFocusedElement = document.activeElement;

  const title = currentLang === "en" ? (item.dataset.titleEn || "") : (item.dataset.titleAr || "");
  const alt = currentLang === "en" ? (image.dataset.altEn || image.alt) : (image.dataset.altAr || image.alt);
  const category = currentLang === "en" ? (categoryLabels.en[item.dataset.category] || "Gallery") : (categoryLabels.ar[item.dataset.category] || "معرض");

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = alt;
  lightboxTitle.textContent = title;
  lightboxCategory.textContent = category;

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxImage.src = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox?.classList.contains("is-open")) {
      closeLightbox();
    }
    setMenuState(false);
  }

  if (event.key === "Tab" && lightbox?.classList.contains("is-open")) {
    const focusable = lightbox.querySelectorAll("button, [href], img, [tabindex]:not([tabindex='-1'])");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

if (revealObserver) {
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const sectionObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        navLinks.forEach((link) => link.classList.remove("active"));
        activeLink?.classList.add("active");
      });
    }, {
      rootMargin: "-35% 0px -58% 0px",
      threshold: 0
    })
  : null;

sectionObserver && sections.forEach((section) => sectionObserver.observe(section));

const counterObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.45 })
  : null;

function animateCounter(counter) {
  const target = Number(counter.dataset.target || counter.textContent.replace(/\D/g, ""));
  const prefix = counter.dataset.prefix || "";
  const duration = 950;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    counter.textContent = `${prefix}${value}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      counter.textContent = `${prefix}${target}`;
    }
  }

  if (!canAnimate) {
    counter.textContent = `${prefix}${target}`;
    return;
  }

  requestAnimationFrame(tick);
}

if (counterObserver) {
  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  counters.forEach(animateCounter);
}

function showSlide(index) {
  if (!slides.length) return;

  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeSlide);
  });

  sliderDots?.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });
}

function restartSliderTimer() {
  if (!canAnimate || !slides.length) return;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(activeSlide + 1), 4200);
}

if (slides.length && sliderDots) {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", currentLang === "en" ? `Show slide ${index + 1}` : `عرض اللقطة ${index + 1}`);
    dot.addEventListener("click", () => {
      showSlide(index);
      restartSliderTimer();
    });
    sliderDots.appendChild(dot);
  });

  sliderPrev?.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    restartSliderTimer();
  });

  sliderNext?.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    restartSliderTimer();
  });

  showSlide(0);
  restartSliderTimer();
}

if (canAnimate && window.matchMedia("(pointer: fine)").matches) {
  const tiltCards = document.querySelectorAll(".glass-card, .project-card, .gallery-item, .stat-card");

  tiltCards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 7;
      const rotateX = ((y / rect.height) - 0.5) * -7;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    setMenuState(false);
  }
});

// Translation Engine logic
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("portfolio-lang", lang);

  // Update text content of data-ar / data-en elements
  const translatableElements = document.querySelectorAll("[data-ar][data-en]");
  translatableElements.forEach((el) => {
    el.textContent = lang === "en" ? el.dataset.en : el.dataset.ar;
  });

  // Update placeholder attributes
  const placeholderElements = document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]");
  placeholderElements.forEach((el) => {
    el.placeholder = lang === "en" ? el.dataset.placeholderEn : el.dataset.placeholderAr;
  });

  // Update aria-labels
  const ariaElements = document.querySelectorAll("[data-aria-ar][data-aria-en]");
  ariaElements.forEach((el) => {
    el.setAttribute("aria-label", lang === "en" ? el.dataset.ariaEn : el.dataset.ariaAr);
  });

  // Update slider dot aria-labels
  if (sliderDots) {
    const dots = sliderDots.querySelectorAll("button");
    dots.forEach((dot, index) => {
      dot.setAttribute("aria-label", lang === "en" ? `Show slide ${index + 1}` : `عرض اللقطة ${index + 1}`);
    });
  }

  // Update image alt attributes (including personal photos, project cards)
  const images = document.querySelectorAll("img[data-alt-ar][data-alt-en]");
  images.forEach((img) => {
    img.alt = lang === "en" ? img.dataset.altEn : img.dataset.altAr;
  });

  // Update theme toggle text helper
  const isLight = document.body.dataset.theme === "light";
  if (themeText) {
    themeText.textContent = isLight 
      ? (lang === "en" ? "Light" : "فاتح") 
      : (lang === "en" ? "Dark" : "داكن");
  }

  // Update language toggle text helper
  const langText = document.querySelector(".lang-toggle .lang-text");
  if (langText) {
    langText.textContent = lang === "en" ? "AR" : "EN";
  }

  // Update HTML title & meta tag description
  document.title = lang === "en" ? "Islam Al-Nashar — Web Portfolio" : "إسلام النشار — معرض أعمال ويب";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", lang === "en"
      ? "Web portfolio of Islam Al-Nashar, a web developer with 4 years of experience, showcasing web interfaces, dashboards, and platforms."
      : "معرض أعمال إسلام النشار، مطور ويب بخبرة 4 سنوات، يعرض واجهات مواقع ولوحات تحكم ومنصات ويب."
    );
  }

  // Re-apply gallery filters to sync text nodes
  applyGalleryFilters();

  // Restart typing effect with translated list
  startTypingEffect();
}

// Bind language toggle listener
langToggle?.addEventListener("click", () => {
  const nextLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(nextLang);
});

// Initialize on page load
applyLanguage(currentLang);

/* ========================
   ANIMATION LOGIC
======================== */

// --- Mouse Glow Tracker ---
if (mouseGlow && canAnimate && window.matchMedia("(pointer: fine)").matches) {
  let glowX = window.innerWidth / 2;
  let glowY = window.innerHeight / 2;
  let currentX = glowX;
  let currentY = glowY;
  let glowActive = false;

  document.addEventListener("mousemove", (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
    if (!glowActive) {
      mouseGlow.classList.add("is-visible");
      glowActive = true;
    }
  });

  document.addEventListener("mouseleave", () => {
    mouseGlow.classList.remove("is-visible");
    glowActive = false;
  });

  function animateGlow() {
    // Smooth interpolation toward mouse position
    currentX += (glowX - currentX) * 0.07;
    currentY += (glowY - currentY) * 0.07;
    mouseGlow.style.transform = `translate(calc(${currentX}px - 50%), calc(${currentY}px - 50%))`;
    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

// --- Filter Button Ripple at click position ---
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rect = btn.getBoundingClientRect();
    const rx = ((e.clientX - rect.left) / rect.width) * 100;
    const ry = ((e.clientY - rect.top)  / rect.height) * 100;
    btn.style.setProperty("--rx", `${rx}%`);
    btn.style.setProperty("--ry", `${ry}%`);
  });
});

// --- Particle burst on gallery item click ---
function spawnParticleBurst(x, y) {
  if (!canAnimate) return;
  const colors = ["rgba(56,189,248,0.7)", "rgba(168,85,247,0.7)", "rgba(245,158,11,0.7)"];
  const count = 10;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.style.cssText = [
      "position:fixed",
      `top:${y}px`,
      `left:${x}px`,
      "width:7px",
      "height:7px",
      "border-radius:50%",
      `background:${colors[i % colors.length]}`,
      "pointer-events:none",
      "z-index:9999",
      "transform:translate(-50%,-50%)",
      "transition:transform 0.7s ease, opacity 0.7s ease",
      "opacity:1"
    ].join(";");
    document.body.appendChild(p);

    const angle = (i / count) * 2 * Math.PI;
    const dist  = 55 + Math.random() * 45;
    const dx    = Math.cos(angle) * dist;
    const dy    = Math.sin(angle) * dist;

    requestAnimationFrame(() => {
      p.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      p.style.opacity   = "0";
    });

    setTimeout(() => p.remove(), 750);
  }
}

galleryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    spawnParticleBurst(e.clientX, e.clientY);
  });
});

