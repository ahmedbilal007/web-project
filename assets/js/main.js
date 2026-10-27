/**
 * AURA EVENTS - LUXURY EVENT MANAGEMENT & PLANNING PLATFORM
 * Global JavaScript: Session Management, UI State & Notification Engine
 */

// --------------------------------------------------------------------------
// 1. Demo Profile & Initial State
// --------------------------------------------------------------------------
const DEFAULT_USER = {
  id: "CUST-8042",
  firstName: "Ahmed",
  lastName: "Bilal",
  name: "Ahmed Bilal",
  email: "ahmed.bilal@example.com",
  phone: "+92 300 1234567",
  altPhone: "+92 321 7654321",
  address: "Sector F-7/2, Margalla Road",
  city: "Islamabad",
  membershipTier: "VIP Platinum Planner",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  budgetPreference: "Premium / Luxury",
  dietaryPreferences: "Halal, No Seafood, Special Desserts",
  preferredEventTypes: ["Wedding", "Barat", "Corporate Gala"],
  bio: "Planning family luxury wedding functions and corporate summits in Islamabad & Lahore.",
  isLoggedIn: false
};

// Keep the existing localStorage booking list, without creating demo bookings.
function initializeAuraState() {
  if (!localStorage.getItem("aura_bookings")) {
    localStorage.setItem("aura_bookings", JSON.stringify([]));
  }
}

// --------------------------------------------------------------------------
// 2. Auth Helper Utilities (frontend demonstration only)
// --------------------------------------------------------------------------
const RESTRICTED_PAGES = [
  "book-event.html", "my-bookings.html", "profile.html",
  "venues.html", "venue-detail.html", "services.html"
];

function getCurrentUser() {
  try {
    const user = localStorage.getItem("aura_current_user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
}

function requireLogin() {
  const user = getCurrentUser();
  if (user && user.id && user.isLoggedIn === true) return true;

  // Remember the local page, including a selected venue or booking reference.
  const page = decodeURIComponent(window.location.pathname).split("/").pop().toLowerCase();
  if (RESTRICTED_PAGES.includes(page)) {
    sessionStorage.setItem("aura_login_redirect", page + window.location.search + window.location.hash);
  }
  document.documentElement.style.visibility = "hidden";
  window.location.replace("login.html");
  return false;
}

function checkPageAccess() {
  const page = decodeURIComponent(window.location.pathname).split("/").pop().toLowerCase();
  if (RESTRICTED_PAGES.includes(page) && !requireLogin()) return false;
  document.documentElement.style.visibility = "";
  return true;
}

function getLoginDestination() {
  const destination = sessionStorage.getItem("aura_login_redirect") || "profile.html";
  sessionStorage.removeItem("aura_login_redirect");
  // Only allow known local pages as the return destination.
  return RESTRICTED_PAGES.includes(destination.split(/[?#]/)[0]) ? destination : "profile.html";
}

function saveCurrentUser(user) {
  const users = JSON.parse(localStorage.getItem("aura_users") || "[]");
  const index = users.findIndex(saved => saved.id === user.id);
  // Saved profiles are separate from the active login state; no passwords are stored.
  const profile = { ...user, isLoggedIn: false };
  if (index === -1) users.push(profile);
  else users[index] = profile;
  localStorage.setItem("aura_users", JSON.stringify(users));
  localStorage.setItem("aura_current_user", JSON.stringify(user));
}

function updateCurrentUser(userData) {
  if (!requireLogin()) return null;
  const updated = { ...getCurrentUser(), ...userData };
  saveCurrentUser(updated);
  renderNavbarAuth();
  return updated;
}

function getUserBookings() {
  const user = getCurrentUser();
  if (!user || !user.id || user.isLoggedIn !== true) return [];
  const bookings = JSON.parse(localStorage.getItem("aura_bookings") || "[]");
  return bookings.filter(booking => booking.userId === user.id);
}

function logoutUser() {
  localStorage.removeItem("aura_current_user");
  sessionStorage.removeItem("aura_login_redirect");
  window.location.replace("index.html");
}

// Run before restricted page content is displayed.
checkPageAccess();

// --------------------------------------------------------------------------
// 3. Dynamic Global Navbar Rendering
// --------------------------------------------------------------------------
function renderNavbarAuth() {
  const authContainer = document.getElementById("navbarAuthArea");
  if (!authContainer) return;

  const user = getCurrentUser();

  if (user && user.id && user.isLoggedIn === true) {
    authContainer.innerHTML = `
      <div class="dropdown">
        <button class="user-avatar-btn border-0 shadow-sm" type="button" id="userMenuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="${user.avatar}" alt="${user.name}" class="user-avatar-img">
          <div class="text-start d-none d-md-block pe-1">
            <span class="d-block fw-bold text-dark" style="font-size: 0.85rem; line-height: 1.1;">${user.name}</span>
            <small class="text-muted" style="font-size: 0.72rem;">${user.membershipTier || 'Client'}</small>
          </div>
          <i class="fa-solid fa-angle-down text-muted ms-1" style="font-size: 0.75rem;"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end aura-user-dropdown mt-2" aria-labelledby="userMenuDropdown">
          <li class="px-3 py-2 border-bottom mb-2 bg-light rounded-3">
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-warning text-dark px-2 py-0.5" style="font-size: 0.68rem;">${user.membershipTier || 'Client'}</span>
            </div>
            <p class="mb-0 fw-bold text-dark small mt-1">${user.name}</p>
            <p class="mb-0 text-muted text-truncate" style="font-size: 0.75rem;">${user.email}</p>
          </li>
          <li>
            <a class="dropdown-item py-2" href="profile.html">
              <i class="fa-solid fa-user-gear text-primary me-2"></i> Personal Profile & Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item py-2" href="my-bookings.html">
              <i class="fa-solid fa-receipt text-warning me-2"></i> My Bookings & Quotes
              <span class="badge bg-warning text-dark ms-2" style="font-size: 0.7rem;">Active</span>
            </a>
          </li>
          <li>
            <a class="dropdown-item py-2" href="book-event.html">
              <i class="fa-solid fa-wand-magic-sparkles text-success me-2"></i> Plan New Event
            </a>
          </li>
          <li><hr class="dropdown-divider my-1"></li>
          <li>
            <a class="dropdown-item py-2 text-danger" href="javascript:void(0)" onclick="logoutUser()">
              <i class="fa-solid fa-right-from-bracket me-2"></i> Sign Out
            </a>
          </li>
        </ul>
      </div>
      <a href="book-event.html" class="btn btn-aura-gold ms-3 d-none d-lg-inline-flex">
        <i class="fa-solid fa-calendar-plus"></i> Plan Event
      </a>
    `;
  } else {
    authContainer.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <a href="login.html" class="btn btn-aura-outline btn-sm px-3">
          <i class="fa-solid fa-arrow-right-to-bracket me-1"></i> Sign In
        </a>
        <a href="register.html" class="btn btn-aura-gold btn-sm px-3">
          <i class="fa-solid fa-user-plus me-1"></i> Register
        </a>
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 4. Interactive Toast Feedback System
// --------------------------------------------------------------------------
function showToast(title, message, type = "success") {
  let toastEl = document.getElementById("auraGlobalToast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "auraGlobalToast";
    toastEl.className = "aura-toast";
    document.body.appendChild(toastEl);
  }

  let iconHtml = '<i class="fa-solid fa-check"></i>';
  let borderColor = "var(--aura-gold)";

  if (type === "info") {
    iconHtml = '<i class="fa-solid fa-circle-info"></i>';
    borderColor = "var(--aura-info)";
  } else if (type === "warning") {
    iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
    borderColor = "var(--aura-warning)";
  } else if (type === "error") {
    iconHtml = '<i class="fa-solid fa-circle-xmark"></i>';
    borderColor = "var(--aura-danger)";
  }

  toastEl.style.borderLeftColor = borderColor;
  toastEl.innerHTML = `
    <div class="toast-icon">${iconHtml}</div>
    <div class="flex-grow-1">
      <h6 class="mb-0 fw-bold text-dark" style="font-size: 0.92rem;">${title}</h6>
      <p class="mb-0 text-muted" style="font-size: 0.82rem;">${message}</p>
    </div>
    <button type="button" class="btn-close ms-2" onclick="dismissToast()" style="font-size: 0.75rem;"></button>
  `;

  toastEl.classList.add("show");

  if (window.auraToastTimeout) {
    clearTimeout(window.auraToastTimeout);
  }
  window.auraToastTimeout = setTimeout(() => {
    dismissToast();
  }, 4200);
}

function dismissToast() {
  const toastEl = document.getElementById("auraGlobalToast");
  if (toastEl) {
    toastEl.classList.remove("show");
  }
}

// --------------------------------------------------------------------------
// 5. Currency & Utility Formatters
// --------------------------------------------------------------------------
function formatPKR(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "Rs. 0";
  return "PKR " + Number(amount).toLocaleString('en-PK');
}

// Navbar scroll shadow effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".aura-navbar");
  if (navbar) {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Run on document load
document.addEventListener("DOMContentLoaded", () => {
  if (!checkPageAccess()) return;
  initializeAuraState();
  renderNavbarAuth();
});

// Recheck pages restored with Back and sessions changed in another tab.
window.addEventListener("pageshow", (event) => {
  if (!checkPageAccess()) return;
  if (event.persisted) {
    document.documentElement.style.visibility = "hidden";
    window.location.reload();
    return;
  }
  renderNavbarAuth();
});
window.addEventListener("storage", (event) => {
  if (event.key === "aura_current_user" || event.key === null) {
    if (checkPageAccess()) window.location.reload();
  }
});
