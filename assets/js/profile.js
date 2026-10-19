/**
 * AURA EVENTS - USER PROFILE & ACCOUNT DASHBOARD
 * Handles profile viewing, live editing, avatar upload preview, security & preferences
 */

document.addEventListener("DOMContentLoaded", () => {
  loadUserProfileData();
  setupProfileEventListeners();
  renderProfileBookingsPreview();
  renderSavedVenues();
});

// --------------------------------------------------------------------------
// 1. Load User Profile Data into Form & UI
// --------------------------------------------------------------------------
function loadUserProfileData() {
  const user = getCurrentUser();
  if (!user) return;

  // Header & Hero Elements
  const heroNameEl = document.getElementById("profileHeroName");
  const heroEmailEl = document.getElementById("profileHeroEmail");
  const heroPhoneEl = document.getElementById("profileHeroPhone");
  const heroAvatarEl = document.getElementById("profileHeroAvatar");
  const heroTierEl = document.getElementById("profileHeroTier");

  if (heroNameEl) heroNameEl.textContent = user.name || `${user.firstName} ${user.lastName}`;
  if (heroEmailEl) heroEmailEl.textContent = user.email || "";
  if (heroPhoneEl) heroPhoneEl.textContent = user.phone || "";
  if (heroAvatarEl) heroAvatarEl.src = user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
  if (heroTierEl) heroTierEl.textContent = user.membershipTier || "VIP Member";

  // Form Input Fields
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("inputFirstName", user.firstName);
  setVal("inputLastName", user.lastName);
  setVal("inputEmail", user.email);
  setVal("inputPhone", user.phone);
  setVal("inputAltPhone", user.altPhone);
  setVal("inputAddress", user.address);
  setVal("inputCity", user.city || "Islamabad");
  setVal("inputDietary", user.dietaryPreferences);
  setVal("inputBio", user.bio);

  // Preferred event types multi-checkbox or select
  if (user.preferredEventTypes && Array.isArray(user.preferredEventTypes)) {
    user.preferredEventTypes.forEach(type => {
      const chk = document.querySelector(`input[name="preferredEvent"][value="${type}"]`);
      if (chk) chk.checked = true;
    });
  }
}

// --------------------------------------------------------------------------
// 2. Event Listeners for Profile Actions
// --------------------------------------------------------------------------
function setupProfileEventListeners() {
  // Profile Information Form Submit
  const profileForm = document.getElementById("editProfileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = document.getElementById("inputFirstName").value.trim();
      const lastName = document.getElementById("inputLastName").value.trim();
      const email = document.getElementById("inputEmail").value.trim();
      const phone = document.getElementById("inputPhone").value.trim();
      const altPhone = document.getElementById("inputAltPhone").value.trim();
      const address = document.getElementById("inputAddress").value.trim();
      const city = document.getElementById("inputCity").value;
      const dietary = document.getElementById("inputDietary").value.trim();
      const bio = document.getElementById("inputBio").value.trim();

      // Collect checked event preferences
      const selectedTypes = [];
      document.querySelectorAll(`input[name="preferredEvent"]:checked`).forEach(chk => {
        selectedTypes.push(chk.value);
      });

      const updated = updateCurrentUser({
        firstName,
        lastName,
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone,
        altPhone,
        address,
        city,
        dietaryPreferences: dietary,
        bio,
        preferredEventTypes: selectedTypes
      });

      // Update UI components
      const heroNameEl = document.getElementById("profileHeroName");
      if (heroNameEl) heroNameEl.textContent = updated.name;
      const heroEmailEl = document.getElementById("profileHeroEmail");
      if (heroEmailEl) heroEmailEl.textContent = updated.email;
      const heroPhoneEl = document.getElementById("profileHeroPhone");
      if (heroPhoneEl) heroPhoneEl.textContent = updated.phone;

      showToast("Profile Updated", "Your profile details have been saved successfully!", "success");
    });
  }

  // Profile Avatar Upload Preview
  const avatarInput = document.getElementById("avatarUploadInput");
  if (avatarInput) {
    avatarInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const newAvatar = event.target.result;
          const heroAvatarEl = document.getElementById("profileHeroAvatar");
          if (heroAvatarEl) heroAvatarEl.src = newAvatar;
          updateCurrentUser({ avatar: newAvatar });
          showToast("Photo Updated", "Your profile photo was updated successfully.", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Password Change Form
  const passwordForm = document.getElementById("changePasswordForm");
  if (passwordForm) {
    passwordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const currentPass = document.getElementById("currentPassword").value;
      const newPass = document.getElementById("newPassword").value;
      const confirmPass = document.getElementById("confirmNewPassword").value;

      if (newPass.length < 6) {
        showToast("Weak Password", "Password must be at least 6 characters long.", "warning");
        return;
      }

      if (newPass !== confirmPass) {
        showToast("Password Mismatch", "New passwords do not match. Please verify.", "error");
        return;
      }

      passwordForm.reset();
      showToast("Security Updated", "Your account password has been changed successfully.", "success");
    });
  }

  // Notification Toggles auto-save
  const notifSwitches = document.querySelectorAll(".notif-toggle");
  notifSwitches.forEach(sw => {
    sw.addEventListener("change", () => {
      showToast("Preferences Saved", "Your notification preferences have been updated.", "info");
    });
  });
}

// --------------------------------------------------------------------------
// 3. Render Profile Bookings Overview (Quick summary on Profile tab)
// --------------------------------------------------------------------------
function renderProfileBookingsPreview() {
  const container = document.getElementById("profileBookingsContainer");
  if (!container) return;

  const raw = localStorage.getItem("aura_bookings");
  const bookings = raw ? JSON.parse(raw) : [];

  if (bookings.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-solid fa-calendar-xmark text-muted fs-1 mb-3"></i>
        <h5>No Events Planned Yet</h5>
        <p class="text-muted">Start creating your dream celebration with our interactive event builder.</p>
        <a href="book-event.html" class="btn btn-aura-gold mt-2">Plan an Event Now</a>
      </div>
    `;
    return;
  }

  container.innerHTML = bookings.slice(0, 3).map(b => {
    let statusBadge = `<span class="badge bg-warning text-dark"><i class="fa-solid fa-clock me-1"></i> Under Review</span>`;
    if (b.status === "Quotation Sent") {
      statusBadge = `<span class="badge bg-primary text-white"><i class="fa-solid fa-file-invoice-dollar me-1"></i> Quotation Sent</span>`;
    } else if (b.status === "Confirmed") {
      statusBadge = `<span class="badge bg-success text-white"><i class="fa-solid fa-circle-check me-1"></i> Booking Confirmed</span>`;
    } else if (b.status === "Completed") {
      statusBadge = `<span class="badge bg-secondary text-white"><i class="fa-solid fa-flag-checkered me-1"></i> Completed</span>`;
    }

    return `
      <div class="aura-card p-3 mb-3 border">
        <div class="row align-items-center g-3">
          <div class="col-md-2 col-sm-3">
            <img src="${b.venueImage}" alt="${b.venueName}" class="rounded-3 w-100" style="height: 80px; object-fit: cover;">
          </div>
          <div class="col-md-5 col-sm-9">
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="badge bg-light text-dark border fw-bold" style="font-size: 0.72rem;">${b.id}</span>
              ${statusBadge}
            </div>
            <h6 class="fw-bold mb-1 text-dark">${b.eventType}</h6>
            <p class="text-muted small mb-0"><i class="fa-solid fa-location-dot me-1 text-gold"></i> ${b.venueName}</p>
          </div>
          <div class="col-md-3 col-6 text-md-center">
            <div class="small text-muted"><i class="fa-regular fa-calendar me-1"></i> ${b.date}</div>
            <div class="fw-bold text-primary mt-1">${formatPKR(b.quotedAmount || b.estimatedTotal)}</div>
          </div>
          <div class="col-md-2 col-6 text-end">
            <a href="my-bookings.html?ref=${b.id}" class="btn btn-sm btn-aura-outline w-100">
              Details <i class="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 4. Render Saved / Favorite Venues
// --------------------------------------------------------------------------
function renderSavedVenues() {
  const container = document.getElementById("savedVenuesContainer");
  if (!container) return;

  const savedVenues = [
    {
      id: "v-1",
      name: "The Royal Palm Grand Ballroom",
      location: "Club Road, Islamabad",
      capacity: 650,
      price: 350000,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      tag: "Luxury Indoor"
    },
    {
      id: "v-2",
      name: "Margalla Hillview Garden Pavilion",
      location: "Scenic Ridge, Islamabad",
      capacity: 400,
      price: 220000,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      tag: "Scenic Outdoor"
    },
    {
      id: "v-3",
      name: "Serena Sheesh Mahal Hall",
      location: "Khayaban-e-Suhrawardy, Islamabad",
      capacity: 500,
      price: 450000,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      tag: "Heritage Luxury"
    }
  ];

  container.innerHTML = savedVenues.map(v => `
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="aura-card h-100">
        <div class="position-relative" style="height: 180px;">
          <img src="${v.image}" alt="${v.name}" class="w-100 h-100" style="object-fit: cover;">
          <span class="badge-gold position-absolute top-0 start-0 m-2">${v.tag}</span>
          <button class="btn btn-sm btn-light rounded-circle position-absolute top-0 end-0 m-2 text-danger shadow-sm" onclick="showToast('Venue Removed', '${v.name} removed from favorites.', 'info')">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <h6 class="fw-bold mb-1">${v.name}</h6>
            <p class="text-muted small mb-2"><i class="fa-solid fa-location-dot me-1"></i> ${v.location}</p>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="small text-muted"><i class="fa-solid fa-users me-1"></i> Up to ${v.capacity} Guests</span>
              <span class="fw-bold text-dark">${formatPKR(v.price)}</span>
            </div>
          </div>
          <a href="book-event.html?venue=${v.id}" class="btn btn-sm btn-aura-navy w-100">
            <i class="fa-solid fa-wand-magic-sparkles me-1"></i> Plan at this Venue
          </a>
        </div>
      </div>
    </div>
  `).join('');
}
