/**
 * AURA EVENTS - LUXURY EVENT MANAGEMENT & PLANNING PLATFORM
 * Global JavaScript: Session Management, UI State & Notification Engine
 */

// --------------------------------------------------------------------------
// 1. Initial State & Mock Data Seeder
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
  isLoggedIn: true
};

// Seed local storage if empty
function initializeAuraState() {
  if (!localStorage.getItem("aura_current_user")) {
    localStorage.setItem("aura_current_user", JSON.stringify(DEFAULT_USER));
  }

  // Sample customer bookings for status tracking
  if (!localStorage.getItem("aura_bookings")) {
    const initialBookings = [
      {
        id: "AURA-2026-8942",
        eventType: "Barat & Royal Reception",
        guestCount: 350,
        date: "2026-11-28",
        timeSlot: "Evening / Dinner (7:00 PM - 11:30 PM)",
        venueName: "The Royal Palm Grand Ballroom",
        venueLocation: "Club Road, Islamabad",
        venueImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
        cateringPackage: "Platinum Royal Feast",
        seatingType: "Banquet Round Tables with Floral Chandeliers",
        entertainment: "Traditional Live Instrumental & Shehnai",
        addons: ["Live BBQ Counters", "Artisan Chaat Stall", "Drone & 4K Videography", "Executive Valet Service"],
        estimatedTotal: 1850000,
        quotedAmount: 1780000,
        status: "Quotation Sent", // Pending | Under Review | Quotation Sent | Confirmed | Completed | Cancelled
        quotationExpires: "2026-10-25",
        quotationNotes: "Includes complimentary VIP lounge decor and customized welcome drinks.",
        submittedOn: "2026-10-16"
      },
      {
        id: "AURA-2026-7821",
        eventType: "Corporate Tech Gala & Dinner",
        guestCount: 200,
        date: "2026-12-15",
        timeSlot: "Full Day Summit & Banquet",
        venueName: "Serena Sheesh Mahal Hall",
        venueLocation: "Khayaban-e-Suhrawardy, Islamabad",
        venueImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        cateringPackage: "Gold Continental & Desi Buffet",
        seatingType: "Theater & Banquet Hybrid",
        entertainment: "LED Screen Stage & Modern AV Setup",
        addons: ["Espresso & Mocktail Bar", "Sound Engineering Team"],
        estimatedTotal: 980000,
        quotedAmount: 980000,
        status: "Confirmed",
        submittedOn: "2026-09-22"
      },
      {
        id: "AURA-2026-6510",
        eventType: "Mehndi Night of Lights",
        guestCount: 250,
        date: "2026-11-26",
        timeSlot: "Evening / Dinner (6:30 PM - 11:00 PM)",
        venueName: "Margalla Hillview Garden Pavilion",
        venueLocation: "Pir Sohawa Scenic Enclave",
        venueImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
        cateringPackage: "Silver Traditional Feast",
        seatingType: "Traditional Floor Diwan & Low Moroccan Lounges",
        entertainment: "Live Dhol & Acoustic Ensemble",
        addons: ["Fresh Jalebi Live Station", "Fairy Light Canopy"],
        estimatedTotal: 720000,
        quotedAmount: null,
        status: "Under Review",
        submittedOn: "2026-10-18"
      }
    ];
    localStorage.setItem("aura_bookings", JSON.stringify(initialBookings));
  }
}

// --------------------------------------------------------------------------
// 2. Auth Helper Utilities
// --------------------------------------------------------------------------
function getCurrentUser() {
  const user = localStorage.getItem("aura_current_user");
  return user ? JSON.parse(user) : null;
}

function updateCurrentUser(userData) {
  const current = getCurrentUser() || {};
  const updated = { ...current, ...userData };
  localStorage.setItem("aura_current_user", JSON.stringify(updated));
  renderNavbarAuth();
  return updated;
}

function logoutUser() {
  const user = getCurrentUser();
  if (user) {
    user.isLoggedIn = false;
    localStorage.setItem("aura_current_user", JSON.stringify(user));
  }
  showToast("Logged Out", "You have successfully logged out.", "info");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 900);
}

// --------------------------------------------------------------------------
// 3. Dynamic Global Navbar Rendering
// --------------------------------------------------------------------------
function renderNavbarAuth() {
  const authContainer = document.getElementById("navbarAuthArea");
  if (!authContainer) return;

  const user = getCurrentUser();

  if (user && user.isLoggedIn) {
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
  initializeAuraState();
  renderNavbarAuth();
});
