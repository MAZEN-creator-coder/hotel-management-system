document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const mobileDropdowns = document.querySelectorAll(
    ".navbar__mobile-menu .nav-dropdown > .dropdown-toggle"
  );
  mobileDropdowns.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const menu = this.nextElementSibling;
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
  });

  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  const body = document.body;

  function setTheme(dark) {
    if (dark) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") setTheme(true);

  themeToggle.addEventListener("click", () => {
    setTheme(!body.classList.contains("dark-theme"));
  });
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", () => {
      setTheme(!body.classList.contains("dark-theme"));
    });
  }

  const loginBtn = document.getElementById("login-btn");
  const mobileLoginBtn = document.getElementById("mobile-login-btn");
  const accountIcon = document.getElementById("account-icon");

  function showLoginPopup() {
    showToast("info", "Login/Sign Up popup will appear here.");
  }

  loginBtn.addEventListener("click", showLoginPopup);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener("click", showLoginPopup);

  window.fakeLogin = function () {
    loginBtn.style.display = "none";
    if (mobileLoginBtn) mobileLoginBtn.style.display = "none";
    accountIcon.classList.remove("hidden");
  };
});

(function testimonialsSlider() {
  const testimonials = document.querySelectorAll(".testimonial");
  let idx = 0;
  function showTestimonial(i) {
    testimonials.forEach((t, j) => t.classList.toggle("active", i === j));
  }
  setInterval(() => {
    idx = (idx + 1) % testimonials.length;
    showTestimonial(idx);
  }, 3500);
})();

(function smoothScroll() {
  function scrollToSection(e, selector) {
    const target = document.querySelector(selector);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  document.querySelectorAll('.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      scrollToSection(e, this.getAttribute("href"));
    });
  });
  const scrollDownBtn = document.getElementById("scroll-down-btn");
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", function (e) {
      scrollToSection(e, "#featured-rooms");
    });
  }
})();

(function contactFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      showToast("error", "Please fill in all fields.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }
    showToast("success", "Thank you for contacting us!");
    form.reset();
  });
})();

document.querySelectorAll(".book-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    showToast("info", "Room booking modal will appear here.");
  });
});

(function roomModal() {
  const modal = document.getElementById("room-modal");
  if (!modal) return;
  const closeBtn = document.getElementById("close-modal");
  const modalDetails = document.getElementById("modal-details");
  const roomDetails = {
    "Standard Room": {
      title: "Standard Room",
      desc: "Cozy and affordable for solo travelers. 1 Queen bed, Free Wi-Fi, Ensuite bathroom.",
      price: "$59/night",
      gallery: [
        "../CSS/standardimg.webp",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
        "../CSS/view.png",
      ],
    },
    "Deluxe Room": {
      title: "Deluxe Room",
      desc: "Spacious comfort with a touch of luxury. 1 King bed, City view, Mini-bar.",
      price: "$99/night",
      gallery: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
        "../css/viewdelax.webp",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
      ],
    },
    Suite: {
      title: "Suite",
      desc: "Ultimate elegance for families or VIPs. 2 Bedrooms, Living area, Jacuzzi.",
      price: "$179/night",
      gallery: ["../CSS/suit1.jpeg", "../css/image.png", "../CSS/beach.webp"],
    },
  };
  let galleryIdx = 0;
  function renderGallery(gallery) {
    return `
      <div class="room-gallery">
        <button class="room-gallery-btn prev" aria-label="Previous"><i class="fa fa-chevron-left"></i></button>
        <img src="${
          gallery[0]
        }" class="room-gallery-img" id="room-gallery-img" alt="Room image">
        <button class="room-gallery-btn next" aria-label="Next"><i class="fa fa-chevron-right"></i></button>
      </div>
      <div class="room-gallery-indicators">
        ${gallery
          .map(
            (_, i) =>
              `<span class="room-gallery-dot${
                i === 0 ? " active" : ""
              }" data-idx="${i}"></span>`
          )
          .join("")}
      </div>
    `;
  }
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const room = btn.getAttribute("data-room");
      const details = roomDetails[room];
      if (details) {
        galleryIdx = 0;
        modalDetails.innerHTML = `
          ${renderGallery(details.gallery)}
          <h3 style="margin-bottom:0.5rem;">${details.title}</h3>
          <p style="margin-bottom:1rem;">${details.desc}</p>
          <div style="font-weight:600;font-size:1.1rem;color:#F59E0B;">${
            details.price
          }</div>
        `;
        modal.classList.add("active");
        const img = document.getElementById("room-gallery-img");
        const prevBtn = modalDetails.querySelector(".room-gallery-btn.prev");
        const nextBtn = modalDetails.querySelector(".room-gallery-btn.next");
        const dots = modalDetails.querySelectorAll(".room-gallery-dot");
        function showImg(idx) {
          img.style.opacity = 0.3;
          setTimeout(() => {
            img.src = details.gallery[idx];
            img.style.opacity = 1;
            dots.forEach((d, i) => d.classList.toggle("active", i === idx));
          }, 180);
        }
        prevBtn.onclick = () => {
          galleryIdx =
            (galleryIdx - 1 + details.gallery.length) % details.gallery.length;
          showImg(galleryIdx);
        };
        nextBtn.onclick = () => {
          galleryIdx = (galleryIdx + 1) % details.gallery.length;
          showImg(galleryIdx);
        };
        dots.forEach((dot, i) => {
          dot.onclick = () => {
            galleryIdx = i;
            showImg(galleryIdx);
          };
        });
      }
    });
  });
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.remove("active");
  });
})();

(function authModal() {
  const authModal = document.getElementById("auth-modal");
  if (!authModal) return;
  const closeAuthBtn = document.getElementById("close-auth-modal");
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginBtn = document.getElementById("login-btn");
  const mobileLoginBtn = document.getElementById("mobile-login-btn");
  const accountIcon = document.getElementById("account-icon");

  function openModal() {
    authModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    authModal.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (loginBtn) loginBtn.onclick = openModal;
  if (mobileLoginBtn) mobileLoginBtn.onclick = openModal;
  closeAuthBtn.onclick = closeModal;
  authModal.addEventListener("click", (e) => {
    if (e.target === authModal) closeModal();
  });

  function showLogin() {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    loginForm.classList.remove("to-left", "to-right");
    signupForm.classList.remove("active");
    signupForm.classList.remove("to-left", "to-right");
    signupForm.classList.add("to-right");
  }
  function showSignup() {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    signupForm.classList.remove("to-left", "to-right");
    loginForm.classList.remove("active");
    loginForm.classList.remove("to-left", "to-right");
    loginForm.classList.add("to-left");
  }
  loginTab.onclick = showLogin;
  signupTab.onclick = showSignup;
  showLogin();

  loginForm.onsubmit = function (e) {
    e.preventDefault();
    const user = loginForm["login-username"].value.trim();
    const pass = loginForm["login-password"].value.trim();
    if (!user || !pass) {
      showToast("error", "Please fill in all fields.");
      return;
    }
    sessionStorage.setItem("loggedIn", "1");
    if (loginBtn) loginBtn.style.display = "none";
    if (mobileLoginBtn) mobileLoginBtn.style.display = "none";
    if (accountIcon) accountIcon.classList.remove("hidden");
    closeModal();
  };
  signupForm.onsubmit = function (e) {
    e.preventDefault();
    const user = signupForm["signup-username"].value.trim();
    const email = signupForm["signup-email"].value.trim();
    const pass = signupForm["signup-password"].value.trim();
    const confirm = signupForm["signup-confirm"].value.trim();
    if (!user || !email || !pass || !confirm) {
      showToast("error", "Please fill in all fields.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }
    if (pass !== confirm) {
      showToast("error", "Passwords do not match.");
      return;
    }
    sessionStorage.setItem("loggedIn", "1");
    if (loginBtn) loginBtn.style.display = "none";
    if (mobileLoginBtn) mobileLoginBtn.style.display = "none";
    if (accountIcon) accountIcon.classList.remove("hidden");
    closeModal();
  };
  if (sessionStorage.getItem("loggedIn") === "1") {
    if (loginBtn) loginBtn.style.display = "none";
    if (mobileLoginBtn) mobileLoginBtn.style.display = "none";
    if (accountIcon) accountIcon.classList.remove("hidden");
  }
})();

(function faqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", function () {
      faqItems.forEach((i) => {
        if (i !== item) i.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });
})();

(function roomFilter() {
  if (!document.querySelector(".room-filter-bar")) return;
  const searchInput = document.getElementById("room-search");
  const typeFilter = document.getElementById("room-type-filter");
  const minPrice = document.getElementById("min-price");
  const maxPrice = document.getElementById("max-price");
  const filterBtn = document.getElementById("room-filter-btn");
  const roomCards = document.querySelectorAll(".room-card");
  const prices = {
    standard: 59,
    deluxe: 99,
    suite: 179,
  };
  function filterRooms() {
    const search = searchInput.value.trim().toLowerCase();
    const type = typeFilter.value;
    const min = parseInt(minPrice.value) || 0;
    const max = parseInt(maxPrice.value) || 9999;
    roomCards.forEach((card) => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const id = card.id;
      const price = prices[id] || 0;
      let show = true;
      if (search && !name.includes(search)) show = false;
      if (type && !name.includes(type.toLowerCase())) show = false;
      if (price < min || price > max) show = false;
      card.style.display = show ? "" : "none";
    });
  }
  filterBtn.addEventListener("click", filterRooms);
  searchInput.addEventListener("input", filterRooms);
})();

function showToast(type, message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  let icon = '<i class="fa-solid fa-info-circle"></i>';
  if (type === "success") icon = '<i class="fa-solid fa-check-circle"></i>';
  if (type === "error") icon = '<i class="fa-solid fa-times-circle"></i>';
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.remove(), 600);
  }, 3000);
}

(function backToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

(function parallaxHero() {
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) return;
  function updateParallax() {
    if (window.innerWidth > 900) {
      const scrolled = window.scrollY;
      heroBg.style.backgroundPosition = `center ${scrolled * 0.4}px`;
    } else {
      heroBg.style.backgroundPosition = "";
    }
  }
  window.addEventListener("scroll", updateParallax);
})();

(function bookingFlow() {
  const bookingModal = document.getElementById("booking-modal");
  if (!bookingModal) return;
  const closeBtn = document.getElementById("close-booking-modal");
  const steps = [
    document.getElementById("booking-step-1"),
    document.getElementById("booking-step-2"),
    document.getElementById("booking-step-3"),
    document.getElementById("booking-step-4"),
  ];
  const next1 = document.getElementById("booking-next-1");
  const next2 = document.getElementById("booking-next-2");
  const prev2 = document.getElementById("booking-prev-2");
  const next3 = document.getElementById("booking-confirm");
  const prev3 = document.getElementById("booking-prev-3");
  const closeFinal = document.getElementById("booking-close");
  const summary = document.getElementById("booking-summary");
  let bookingData = {};
  document.querySelectorAll(".book-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      bookingModal.classList.add("active");
      steps.forEach((s, i) => (s.style.display = i === 0 ? "flex" : "none"));
      bookingData = {};
    });
  });
  next1.addEventListener("click", function () {
    const checkin = document.getElementById("booking-checkin").value;
    const checkout = document.getElementById("booking-checkout").value;
    if (!checkin || !checkout) {
      showToast("error", "Please select check-in and check-out dates.");
      return;
    }
    bookingData.checkin = checkin;
    bookingData.checkout = checkout;
    steps[0].style.display = "none";
    steps[1].style.display = "flex";
  });
  next2.addEventListener("click", function () {
    const name = document.getElementById("booking-name").value.trim();
    const email = document.getElementById("booking-email").value.trim();
    const phone = document.getElementById("booking-phone").value.trim();
    if (!name || !email || !phone) {
      showToast("error", "Please fill in all guest information.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }
    bookingData.name = name;
    bookingData.email = email;
    bookingData.phone = phone;
    steps[1].style.display = "none";
    steps[2].style.display = "flex";
    summary.innerHTML = `
        <div style="text-align:left;font-size:1rem;">
          <b>Check-in:</b> ${bookingData.checkin}<br>
          <b>Check-out:</b> ${bookingData.checkout}<br>
          <b>Name:</b> ${bookingData.name}<br>
          <b>Email:</b> ${bookingData.email}<br>
          <b>Phone:</b> ${bookingData.phone}
        </div>
      `;
  });
  next3.addEventListener("click", function () {
    steps[2].style.display = "none";
    steps[3].style.display = "flex";
    showToast("success", "Booking confirmed!");
  });
  prev2.addEventListener("click", function () {
    steps[1].style.display = "none";
    steps[0].style.display = "flex";
  });
  prev3.addEventListener("click", function () {
    steps[2].style.display = "none";
    steps[1].style.display = "flex";
  });
  closeBtn.addEventListener("click", function () {
    bookingModal.classList.remove("active");
  });
  closeFinal.addEventListener("click", function () {
    bookingModal.classList.remove("active");
  });
  bookingModal.addEventListener("click", function (e) {
    if (e.target === bookingModal) bookingModal.classList.remove("active");
  });
})();

(function logoutBtn() {
  const logoutBtn = document.getElementById("logout-btn");
  if (!logoutBtn) return;
  logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "auth.html";
  });
})();
