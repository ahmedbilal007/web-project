/**
 * AURA EVENTS - CUSTOMER BOOKING STATUS & TRACKING PORTAL
 * Manages request lifecycle, quotation review, acceptance & cancellation
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!requireLogin()) return;
  renderBookingsPortal();
  setupFilterTabs();
  checkUrlReferenceParam();
});

// --------------------------------------------------------------------------
// 1. Render Bookings List
// --------------------------------------------------------------------------
let currentFilter = "all";

function renderBookingsPortal() {
  if (!requireLogin()) return;
  const container = document.getElementById("bookingsListContainer");
  if (!container) return;

  const bookings = getUserBookings();

  let filtered = bookings;
  if (currentFilter === "active") {
    filtered = bookings.filter(b => ["Pending", "Under Review", "Quotation Sent"].includes(b.status));
  } else if (currentFilter === "confirmed") {
    filtered = bookings.filter(b => b.status === "Confirmed");
  } else if (currentFilter === "completed") {
    filtered = bookings.filter(b => b.status === "Completed");
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="aura-card p-5 text-center bg-white shadow-sm">
        <i class="fa-solid fa-folder-open text-muted fs-1 mb-3"></i>
        <h5 class="fw-bold text-dark">No Bookings Found</h5>
        <p class="text-muted small">You don't have any event requests in this category.</p>
        <a href="book-event.html" class="btn btn-aura-gold mt-2">
          <i class="fa-solid fa-wand-magic-sparkles me-1"></i> Plan a New Event
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(b => {
    // Generate Status Stepper Nodes
    const statuses = ["Pending", "Under Review", "Quotation Sent", "Confirmed", "Completed"];
    const currentIdx = statuses.indexOf(b.status);

    const stepperHtml = statuses.map((st, idx) => {
      let stateClass = "";
      let icon = '<i class="fa-regular fa-circle"></i>';

      if (idx < currentIdx || b.status === "Completed") {
        stateClass = "completed";
        icon = '<i class="fa-solid fa-check"></i>';
      } else if (idx === currentIdx) {
        stateClass = "active";
        icon = '<i class="fa-solid fa-circle-dot"></i>';
      }

      return `
        <div class="status-step-node ${stateClass}">
          <div class="status-step-icon">${icon}</div>
          <div class="status-step-text d-none d-sm-block">${st}</div>
        </div>
      `;
    }).join('');

    let statusPillClass = "bg-warning text-dark";
    if (b.status === "Quotation Sent") statusPillClass = "bg-primary text-white";
    if (b.status === "Confirmed") statusPillClass = "bg-success text-white";
    if (b.status === "Completed") statusPillClass = "bg-secondary text-white";
    if (b.status === "Cancelled") statusPillClass = "bg-danger text-white";

    return `
      <div class="aura-card p-4 mb-4 shadow-sm border bg-white">
        <!-- Top Row: Ref & Status -->
        <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3 mb-3 gap-2">
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-light text-dark border px-3 py-2 fw-bold" style="font-size: 0.82rem;">
              REF: ${b.id}
            </span>
            <span class="badge ${statusPillClass} px-3 py-2 fw-semibold">
              ${b.status}
            </span>
          </div>
          <div class="small text-muted">
            <i class="fa-regular fa-clock me-1"></i> Submitted: ${b.submittedOn || 'Recent'}
          </div>
        </div>

        <!-- Event Details Row -->
        <div class="row g-3 align-items-center mb-3">
          <div class="col-lg-2 col-md-3 col-sm-4">
            <img src="${b.venueImage}" alt="${b.venueName}" class="rounded-3 w-100 shadow-sm" style="height: 100px; object-fit: cover;">
          </div>
          <div class="col-lg-6 col-md-5 col-sm-8">
            <h5 class="fw-bold mb-1 text-dark">${b.eventType}</h5>
            <p class="text-muted small mb-1">
              <i class="fa-solid fa-location-dot me-1 text-gold"></i> <strong>${b.venueName}</strong> (${b.venueLocation})
            </p>
            <div class="d-flex flex-wrap gap-2 small text-secondary">
              <span><i class="fa-regular fa-calendar me-1"></i> ${b.date}</span>
              <span>•</span>
              <span><i class="fa-solid fa-users me-1"></i> ${b.guestCount} Guests</span>
              <span>•</span>
              <span><i class="fa-solid fa-utensils me-1"></i> ${b.cateringPackage}</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 text-lg-end">
            <small class="text-muted d-block">
              ${b.quotedAmount ? 'Official Company Quotation:' : 'Estimated Cost:'}
            </small>
            <h4 class="fw-bold mb-2 text-primary">
              ${formatPKR(b.quotedAmount || b.estimatedTotal)}
            </h4>
            <div class="d-flex gap-2 justify-content-lg-end">
              <button class="btn btn-sm btn-aura-navy" onclick="openBookingDetailsModal('${b.id}')">
                <i class="fa-solid fa-eye me-1"></i> View Quotation
              </button>
              ${b.status !== 'Completed' && b.status !== 'Cancelled' ? `
                <button class="btn btn-sm btn-outline-danger" onclick="openCancelModal('${b.id}')">
                  Cancel
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Visual Status Stepper (SRS 4.13) -->
        <div class="p-3 bg-light rounded-3 mt-3">
          <div class="booking-status-stepper mb-0">
            ${stepperHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 2. Setup Filter Tabs
// --------------------------------------------------------------------------
function setupFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-booking-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active", "btn-aura-navy"));
      filterBtns.forEach(b => b.classList.add("btn-outline-secondary"));

      btn.classList.add("active", "btn-aura-navy");
      btn.classList.remove("btn-outline-secondary");

      currentFilter = btn.getAttribute("data-filter");
      renderBookingsPortal();
    });
  });

  // Reference search input
  const searchInput = document.getElementById("searchRefInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toUpperCase();
      if (!requireLogin()) return;
      const bookings = getUserBookings();

      if (!q) {
        renderBookingsPortal();
        return;
      }

      const matched = bookings.filter(b => b.id.includes(q) || b.eventType.toUpperCase().includes(q));
      const container = document.getElementById("bookingsListContainer");

      if (matched.length === 0) {
        container.innerHTML = `
          <div class="aura-card p-5 text-center bg-white shadow-sm">
            <h5>No matches found for "${q}"</h5>
            <p class="text-muted small">Please check the booking reference number (e.g. AURA-2026-8942).</p>
          </div>
        `;
      } else {
        // Render matches
        container.innerHTML = matched.map(b => `
          <div class="aura-card p-4 mb-3 border bg-white">
            <div class="d-flex justify-content-between">
              <h5 class="fw-bold">${b.eventType} <span class="badge bg-primary ms-2">${b.id}</span></h5>
              <button class="btn btn-sm btn-aura-gold" onclick="openBookingDetailsModal('${b.id}')">View Details</button>
            </div>
            <p class="text-muted small mb-0">${b.venueName} • ${b.date} • ${b.guestCount} guests</p>
          </div>
        `).join('');
      }
    });
  }
}

// --------------------------------------------------------------------------
// 3. Open Booking Details & Quotation Modal
// --------------------------------------------------------------------------
let activeModalBookingId = null;

function openBookingDetailsModal(id) {
  if (!requireLogin()) return;
  const bookings = getUserBookings();
  const booking = bookings.find(b => b.id === id);
  if (!booking) return;

  activeModalBookingId = id;

  document.getElementById("modalDetailRef").textContent = booking.id;
  document.getElementById("modalDetailType").textContent = booking.eventType;
  document.getElementById("modalDetailVenue").textContent = booking.venueName;
  document.getElementById("modalDetailDate").textContent = `${booking.date} (${booking.timeSlot})`;
  document.getElementById("modalDetailGuests").textContent = `${booking.guestCount} Guests`;
  document.getElementById("modalDetailCatering").textContent = booking.cateringPackage;
  document.getElementById("modalDetailSeating").textContent = booking.seatingType || "Standard Banquet";
  document.getElementById("modalDetailEntertainment").textContent = booking.entertainment || "None";
  
  // Addons list
  const addonsEl = document.getElementById("modalDetailAddons");
  if (addonsEl) {
    if (booking.addons && booking.addons.length > 0) {
      addonsEl.innerHTML = booking.addons.map(a => `<span class="badge bg-light text-dark border me-1 mb-1 p-2">${a}</span>`).join('');
    } else {
      addonsEl.innerHTML = '<span class="text-muted small">None selected</span>';
    }
  }

  // Price & Quotation card
  const quoteArea = document.getElementById("modalDetailQuotationArea");
  if (booking.status === "Quotation Sent") {
    quoteArea.innerHTML = `
      <div class="p-3 bg-light rounded-3 border border-primary">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="badge bg-primary text-white">Official Price Offer Ready</span>
          <small class="text-danger fw-bold"><i class="fa-regular fa-clock me-1"></i> Valid until ${booking.quotationExpires || 'Oct 25, 2026'}</small>
        </div>
        <div class="d-flex justify-content-between align-items-end mb-3">
          <div>
            <div class="small text-muted">Initial Estimated: <del>${formatPKR(booking.estimatedTotal)}</del></div>
            <div class="fs-3 fw-bold text-primary">${formatPKR(booking.quotedAmount)}</div>
            <small class="text-muted">Includes complimentary VIP lounge decor & executive setup.</small>
          </div>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-aura-gold flex-grow-1" onclick="acceptQuotation('${booking.id}')">
            <i class="fa-solid fa-check me-1"></i> Accept Formal Quotation
          </button>
          <button class="btn btn-outline-secondary" onclick="downloadQuotationPDF('${booking.id}')">
            <i class="fa-solid fa-file-pdf me-1"></i> PDF
          </button>
        </div>
      </div>
    `;
  } else if (booking.status === "Confirmed") {
    quoteArea.innerHTML = `
      <div class="p-3 bg-success bg-opacity-10 rounded-3 border border-success">
        <h6 class="fw-bold text-success mb-1"><i class="fa-solid fa-circle-check me-1"></i> Booking Formally Confirmed</h6>
        <p class="small text-dark mb-2">Venue slot is locked. An event director will reach out 7 days prior to the event for menu tasting.</p>
        <div class="fs-4 fw-bold text-dark">${formatPKR(booking.quotedAmount || booking.estimatedTotal)}</div>
        <button class="btn btn-sm btn-outline-success mt-2" onclick="downloadQuotationPDF('${booking.id}')">
          <i class="fa-solid fa-download me-1"></i> Download Booking Confirmation Receipt
        </button>
      </div>
    `;
  } else {
    quoteArea.innerHTML = `
      <div class="p-3 bg-light rounded-3 border">
        <div class="d-flex justify-content-between align-items-center">
          <span class="small text-muted">Current Estimate (Pending Review)</span>
          <span class="fs-4 fw-bold text-dark">${formatPKR(booking.estimatedTotal)}</span>
        </div>
        <small class="text-muted d-block mt-1">Our manager is verifying venue availability for your selected date.</small>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById("bookingDetailsModal"));
  modal.show();
}

// --------------------------------------------------------------------------
// 4. Quotation Actions & Cancellation
// --------------------------------------------------------------------------
function acceptQuotation(id) {
  if (!requireLogin()) return;
  const raw = localStorage.getItem("aura_bookings");
  const bookings = raw ? JSON.parse(raw) : [];
  const b = bookings.find(x => x.id === id && x.userId === getCurrentUser().id);
  if (b) {
    b.status = "Confirmed";
    localStorage.setItem("aura_bookings", JSON.stringify(bookings));
    renderBookingsPortal();
    
    // Close modal
    const modalEl = document.getElementById("bookingDetailsModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    showToast("Quotation Accepted!", `Booking ${id} is now confirmed. Welcome to Aura Events!`, "success");
  }
}

function downloadQuotationPDF(id) {
  if (!requireLogin() || !getUserBookings().some(b => b.id === id)) return;
  showToast("Downloading PDF", `Generating itemized quotation for ${id}...`, "info");
}

function openCancelModal(id) {
  if (!requireLogin() || !getUserBookings().some(b => b.id === id)) return;
  activeModalBookingId = id;
  const modal = new bootstrap.Modal(document.getElementById("cancelRequestModal"));
  modal.show();
}

function confirmCancellation() {
  if (!requireLogin()) return;
  if (!activeModalBookingId) return;

  const reason = document.getElementById("cancelReasonSelect").value;
  const raw = localStorage.getItem("aura_bookings");
  const bookings = raw ? JSON.parse(raw) : [];
  const b = bookings.find(x => x.id === activeModalBookingId && x.userId === getCurrentUser().id);
  if (b) {
    b.status = "Cancelled";
    b.cancellationReason = reason;
    localStorage.setItem("aura_bookings", JSON.stringify(bookings));
    renderBookingsPortal();

    const modalEl = document.getElementById("cancelRequestModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    showToast("Request Cancelled", `Booking ${activeModalBookingId} was cancelled.`, "info");
  }
}

function checkUrlReferenceParam() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");
  if (ref) {
    setTimeout(() => {
      openBookingDetailsModal(ref);
    }, 400);
  }
}
