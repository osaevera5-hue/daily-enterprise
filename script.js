
// Carousel
let slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 4s
let autoSlide = setInterval(nextSlide, 4000);

// Manual controls
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });
}

// Reset auto-slide when user clicks arrows
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 4000);
}


// Load More / Show Less
const loadMoreBtn = document.getElementById("loadMoreBtn");
if (loadMoreBtn) {
  const productCards = document.querySelectorAll(".product-card");
  const initialItems = 6; // Number of items to show initially
  let showingAll = false;

  function updateProducts() {
    productCards.forEach((card, index) => {
      if (!showingAll && index >= initialItems) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  }

  updateProducts();

  loadMoreBtn.addEventListener("click", () => {
    showingAll = !showingAll;
    updateProducts();
    loadMoreBtn.textContent = showingAll ? "Show Less" : "Load More";
  });
}

// Login / Logout toggle
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Check if user is logged in
const loggedIn = localStorage.getItem("loggedIn");

if (loggedIn === "true") {
  if (loginBtn) loginBtn.style.display = "none";
  if (logoutBtn) logoutBtn.style.display = "inline-block";
} else {
  if (loginBtn) loginBtn.style.display = "inline-block";
  if (logoutBtn) logoutBtn.style.display = "none";
}

// Login button → go to login page
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

// Logout button → clear session
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.reload();
  });
}



