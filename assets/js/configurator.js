/**
 * AURA EVENTS - EVENT CONFIGURATOR & PRICING ENGINE
 * Interactive 7-Step Event Wizard, Dynamic Calculations & Booking Submission
 */

// --------------------------------------------------------------------------
// 1. Data Catalogue: Venues, Seating, Catering Packages, Dishes & Addons
// --------------------------------------------------------------------------
const CATALOGUE = {
  venues: [
    {
      id: "v-royal-palm",
      name: "The Royal Palm Grand Ballroom",
      location: "Club Road, Islamabad",
      capacity: 650,
      price: 350000,
      type: "indoor",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      description: "Crystal chandeliers, royal Persian carpeting, acoustic engineering, and VIP private suites."
    },
    {
      id: "v-serena-sheesh",
      name: "Serena Sheesh Mahal Hall",
      location: "Khayaban-e-Suhrawardy, Islamabad",
      capacity: 500,
      price: 450000,
      type: "indoor",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      description: "Iconic hand-carved mirror work, regal mughal architecture, and five-star hospitality."
    },
    {
      id: "v-margalla-pavilion",
      name: "Margalla Hillview Garden Pavilion",
      location: "Pir Sohawa Scenic Enclave",
      capacity: 400,
      price: 240000,
      type: "outdoor",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      description: "Lush green manicured lawns with panoramic Margalla hill views, open-air fairy light setup."
    },
    {
      id: "v-pearl-continental",
      name: "PC Crystal Hall & Marquee",
      location: "Mall Road, Rawalpindi",
      capacity: 800,
      price: 380000,
      type: "indoor",
      image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1a2?auto=format&fit=crop&w=800&q=80",
      description: "Expansive high-ceiling ballroom ideal for mega weddings, state banquets, and national galas."
    },
    {
      id: "v-islamabad-club",
      name: "The Club Poolside Gazebo",
      location: "Murree Road, Islamabad",
      capacity: 220,
      price: 190000,
      type: "outdoor",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      description: "Chic illuminated poolside ambiance, perfect for boutique Mehndi nights and private parties."
    }
  ],

  seatingOptions: [
    {
      id: "seat-banquet-round",
      name: "Royal Banquet Round Tables",
      pricePerHead: 250,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
      desc: "10-seater round tables with imported silk linens, gold Chiavari chairs & floral centerpieces."
    },
    {
      id: "seat-royal-long",
      name: "Imperial Long Dining Tables",
      pricePerHead: 350,
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=600&q=80",
      desc: "European banqueting layout with candelabras, velvet runner cloths, and plush dining chairs."
    },
    {
      id: "seat-moroccan-diwan",
      name: "Traditional Floor Diwan & Low Lounges",
      pricePerHead: 200,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      desc: "Plush silk bolsters, embroidered gaddi mattresses, vibrant brass urns, ideal for Mehndi & Sangeet."
    },
    {
      id: "seat-theater-cocktail",
      name: "Theater Rows & Cocktail High-Tops",
      pricePerHead: 150,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
      desc: "Auditorium style rows facing the stage combined with peripheral high-top cocktail tables."
    }
  ],

  cateringPackages: [
    {
      id: "pkg-silver",
      name: "Silver Traditional Feast",
      pricePerHead: 1800,
      badge: "Popular Classic",
      items: [
        "Special Chicken Dum Biryani",
        "Creamy Chicken Qorma / Handi",
        "Fresh Garden Salad & Mint Raita",
        "Hot Naan & Roti Basket",
        "Shahi Gulab Jamun (2 pcs)",
        "Assorted Soft Drinks & Mineral Water"
      ]
    },
    {
      id: "pkg-gold",
      name: "Gold Executive Banquet",
      pricePerHead: 2800,
      badge: "Most Recommended",
      isFeatured: true,
      items: [
        "Mutton Dum Pulao / Biryani",
        "Boneless Mutton Mughlai Karahi",
        "Chicken Malai Boti Skewers (BBQ)",
        "Fish Crackers & Tartar Sauce",
        "Kulcha, Taftan & Roti Selection",
        "Kheer Thali with Silver Leaf",
        "Gourmet Dessert & Seasonal Mocktail",
        "Soft Drinks & Mineral Water"
      ]
    },
    {
      id: "pkg-platinum",
      name: "Platinum Royal Sovereign",
      pricePerHead: 4200,
      badge: "Ultra Luxury",
      items: [
        "Prime Mutton Shinwari Karahi",
        "Smoked Mutton Kabuli Pulao",
        "Reshmi & Seekh BBQ Platter",
        "Fettuccine Alfredo or Grilled Steaklets",
        "Live Nan Baker on Site",
        "Royal Rasmalai & Pistachio Kulfi",
        "Gourmet Chocolate Lava Bar",
        "Fresh Mint Margaritas & Kashmiri Chai"
      ]
    }
  ],

  eatingAddons: [
    {
      id: "addon-live-bbq",
      name: "Live Char-Grill BBQ Station",
      price: 65000,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      desc: "Chefs grilling fresh seekh kebabs, tikka boti, and paneer tikka right in front of guests."
    },
    {
      id: "addon-chaat-golgappa",
      name: "Artisan Chaat & Gol Gappa Cart",
      price: 35000,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      desc: "Customized street food cart serving crispy papri chaat, sev puri, and flavored sour water shots."
    },
    {
      id: "addon-fresh-jalebi",
      name: "Hot Saffron Jalebi & Rabri Stall",
      price: 30000,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
      desc: "Live wok frying golden crispy jalebi served with thick chilled malai rabri."
    },
    {
      id: "addon-mocktail-bar",
      name: "Specialty Mocktail & Artisan Espresso Bar",
      price: 50000,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
      desc: "Professional mixologists crafting smoking mocktails, blue lagoons, and freshly pulled espresso."
    }
  ],

  entertainmentAddons: [
    {
      id: "ent-live-band",
      name: "Live Acoustic / Sufi Ensemble",
      price: 85000,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
      desc: "4-piece vocal and instrumental band creating magical live atmosphere."
    },
    {
      id: "ent-dj-lighting",
      name: "Celebrity DJ Setup & Intelligent Moving Lights",
      price: 70000,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
      desc: "High-definition sound console, bass subwoofers, haze machine, and moving heads."
    },
    {
      id: "ent-shehnai-dhol",
      name: "Traditional Shehnai & Master Dhol Players",
      price: 40000,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
      desc: "Authentic royal wedding welcome music for bride & groom majestic entrances."
    },
    {
      id: "ent-no-music",
      name: "No Music / Peaceful Background Ambiance",
      price: 0,
      image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=600&q=80",
      desc: "Soft instrumentals or completely quiet sacred atmosphere without sound equipment."
    }
  ],

  extraServices: [
    {
      id: "extra-photo-drone",
      name: "Cinematic Photography & 4K Drone Coverage",
      price: 95000,
      desc: "Team of 3 photographers + 1 drone pilot with edited cinematic teaser and full photo album."
    },
    {
      id: "extra-valet",
      name: "Executive Uniformed Valet Parking Service",
      price: 45000,
      desc: "Dedicated valet team handling guest vehicle parking, ticketing, and key security."
    },
    {
      id: "extra-event-host",
      name: "Professional Event Coordinator & Hostesses",
      price: 40000,
      desc: "On-site managers to welcome guests, organize stage protocols, and manage dining flow."
    },
    {
      id: "extra-security",
      name: "Licensed Armed Guards & Metal Detectors",
      price: 35000,
      desc: "Trained security personnel ensuring safe and private exclusive entry control."
    }
  ]
};

// --------------------------------------------------------------------------
// 2. Active Wizard State Model
// --------------------------------------------------------------------------
let eventPlan = {
  currentStep: 1,
  eventType: "Barat & Wedding Reception",
  otherEventDesc: "",
  guestCount: 250,
  eventDate: "",
  timeSlot: "Evening / Dinner (7:00 PM - 11:30 PM)",
  budget: 2000000,
  useOwnVenue: false,
  ownVenueAddress: "",

  // Selections
  venue: null,
  seating: null,
  cateringPackage: null,
  cateringServiceType: "Royal Buffet Service",
  selectedAddons: [],
  selectedEntertainment: null,
  selectedExtras: [],

  // Pricing calculations
  breakdown: {
    venuePrice: 0,
    seatingTotal: 0,
    cateringTotal: 0,
    addonsTotal: 0,
    entertainmentTotal: 0,
    extrasTotal: 0,
    subtotal: 0,
    serviceTax: 0,
    grandTotal: 0
  }
};

// --------------------------------------------------------------------------
// 3. Initialization
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupDefaultDates();
  prefillPlanFromParams();
  renderWizardSteps();
  renderVenueOptions();
  renderSeatingOptions();
  renderCateringOptions();
  renderAddonOptions();
  recalculatePricing();
  bindConfiguratorEvents();
});

function setupDefaultDates() {
  const dateInput = document.getElementById("evtDate");
  if (dateInput) {
    const today = new Date();
    // Default 14 days ahead
    today.setDate(today.getDate() + 14);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDateStr = `${yyyy}-${mm}-${dd}`;
    dateInput.min = minDateStr;
    dateInput.value = minDateStr;
    eventPlan.eventDate = minDateStr;
  }
}

function prefillPlanFromParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const venueId = urlParams.get("venue");
  if (venueId) {
    const matched = CATALOGUE.venues.find(v => v.id === venueId);
    if (matched) {
      eventPlan.venue = matched;
    }
  }

  // Set default initial selections
  if (!eventPlan.seating) {
    eventPlan.seating = CATALOGUE.seatingOptions[0];
  }
  if (!eventPlan.cateringPackage) {
    eventPlan.cateringPackage = CATALOGUE.cateringPackages[1]; // Gold default
  }
  if (!eventPlan.selectedEntertainment) {
    eventPlan.selectedEntertainment = CATALOGUE.entertainmentAddons[0];
  }
}

// --------------------------------------------------------------------------
// 4. Render Step Panels & Progress Bar
// --------------------------------------------------------------------------
function renderWizardSteps() {
  const stepItems = document.querySelectorAll(".wizard-step-item");
  stepItems.forEach(item => {
    const stepNum = parseInt(item.getAttribute("data-step"));
    item.classList.remove("active", "completed");
    if (stepNum === eventPlan.currentStep) {
      item.classList.add("active");
    } else if (stepNum < eventPlan.currentStep) {
      item.classList.add("completed");
    }
  });

  // Show/Hide step panes
  document.querySelectorAll(".wizard-step-pane").forEach(pane => {
    const paneStep = parseInt(pane.getAttribute("data-step"));
    if (paneStep === eventPlan.currentStep) {
      pane.classList.remove("d-none");
      pane.classList.add("fade-in-up");
    } else {
      pane.classList.add("d-none");
      pane.classList.remove("fade-in-up");
    }
  });

  // Step 7 Summary generation
  if (eventPlan.currentStep === 7) {
    renderBookingSummary();
  }

  window.scrollTo({ top: 120, behavior: "smooth" });
}

function goToStep(step) {
  if (step < 1 || step > 7) return;

  // Validation before leaving Step 1
  if (eventPlan.currentStep === 1 && step > 1) {
    const guestInput = document.getElementById("evtGuests");
    const count = parseInt(guestInput.value);
    if (isNaN(count) || count < 20 || count > 3000) {
      showToast("Invalid Guest Count", "Please enter a valid guest count between 20 and 3,000.", "warning");
      return;
    }
    eventPlan.guestCount = count;
    eventPlan.eventType = document.getElementById("evtType").value;
    eventPlan.timeSlot = document.getElementById("evtSlot").value;
    eventPlan.eventDate = document.getElementById("evtDate").value;

    const budgetVal = parseInt(document.getElementById("evtBudget").value);
    eventPlan.budget = isNaN(budgetVal) ? 0 : budgetVal;

    eventPlan.useOwnVenue = document.getElementById("ownVenueCheck").checked;
    eventPlan.ownVenueAddress = document.getElementById("ownVenueAddress").value;

    // Refresh venues in case guest count changed
    renderVenueOptions();
  }

  // Validation before leaving Step 2 (Venue)
  if (eventPlan.currentStep === 2 && step > 2 && !eventPlan.useOwnVenue && !eventPlan.venue) {
    showToast("Please Select a Venue", "Choose an available venue or select 'I will use my own venue'.", "warning");
    return;
  }

  eventPlan.currentStep = step;
  renderWizardSteps();
  recalculatePricing();
}

// --------------------------------------------------------------------------
// 5. Render Selections (Venues, Seating, Food, Addons)
// --------------------------------------------------------------------------
function renderVenueOptions() {
  const container = document.getElementById("venuesListContainer");
  if (!container) return;

  const guests = eventPlan.guestCount;

  container.innerHTML = CATALOGUE.venues.map(v => {
    const exceedsCapacity = guests > v.capacity;
    const isSelected = eventPlan.venue && eventPlan.venue.id === v.id;

    return `
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="selectable-card ${isSelected ? 'selected' : ''} ${exceedsCapacity ? 'disabled-venue' : ''}" 
             onclick="${exceedsCapacity ? '' : `selectVenue('${v.id}')`}">
          <div class="card-img-wrapper">
            <img src="${v.image}" alt="${v.name}">
            <div class="card-price-pill">${formatPKR(v.price)} <small class="text-muted">Hire Fee</small></div>
            <div class="card-capacity-pill">
              <i class="fa-solid fa-users"></i> Capacity: ${v.capacity} Guests
            </div>
          </div>
          <div class="selectable-card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="fw-bold mb-0 text-dark">${v.name}</h5>
              <span class="badge ${v.type === 'indoor' ? 'bg-primary' : 'bg-success'} text-white text-capitalize" style="font-size: 0.72rem;">
                ${v.type}
              </span>
            </div>
            <p class="text-muted small mb-2"><i class="fa-solid fa-location-dot me-1 text-gold"></i> ${v.location}</p>
            <p class="text-secondary small mb-3 flex-grow-1">${v.description}</p>
            <div class="d-flex justify-content-between align-items-center pt-2 border-top">
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="event.stopPropagation(); viewVenueModal('${v.id}')">
                <i class="fa-solid fa-images me-1"></i> View Gallery
              </button>
              <button type="button" class="btn btn-sm ${isSelected ? 'btn-aura-gold' : 'btn-aura-outline'}" ${exceedsCapacity ? 'disabled' : ''}>
                ${isSelected ? 'Selected' : 'Select Venue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectVenue(id) {
  eventPlan.venue = CATALOGUE.venues.find(v => v.id === id);
  renderVenueOptions();
  recalculatePricing();
  showToast("Venue Selected", `${eventPlan.venue.name} has been added to your event plan.`, "success");
}

function renderSeatingOptions() {
  const container = document.getElementById("seatingOptionsContainer");
  if (!container) return;

  container.innerHTML = CATALOGUE.seatingOptions.map(s => {
    const isSelected = eventPlan.seating && eventPlan.seating.id === s.id;
    return `
      <div class="col-lg-6 mb-4">
        <div class="seating-card ${isSelected ? 'selected' : ''}" onclick="selectSeating('${s.id}')">
          <img src="${s.image}" alt="${s.name}" class="seating-icon-img">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h6 class="fw-bold mb-0 text-dark">${s.name}</h6>
            <div class="check-indicator">${isSelected ? '<i class="fa-solid fa-check"></i>' : ''}</div>
          </div>
          <p class="text-muted small mb-2">${s.desc}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center pt-2 border-top">
            <span class="small text-muted">Arrangement Fee:</span>
            <span class="fw-bold text-primary">${formatPKR(s.pricePerHead)} / guest</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectSeating(id) {
  eventPlan.seating = CATALOGUE.seatingOptions.find(s => s.id === id);
  renderSeatingOptions();
  recalculatePricing();
}

function renderCateringOptions() {
  const container = document.getElementById("cateringPackagesContainer");
  if (!container) return;

  container.innerHTML = CATALOGUE.cateringPackages.map(pkg => {
    const isSelected = eventPlan.cateringPackage && eventPlan.cateringPackage.id === pkg.id;
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="menu-pkg-card ${isSelected ? 'selected' : ''} ${pkg.isFeatured ? 'featured-pkg' : ''}" onclick="selectCateringPackage('${pkg.id}')">
          <span class="menu-pkg-badge">${pkg.badge}</span>
          <div class="text-center pt-3 pb-2 border-bottom">
            <h5 class="fw-bold mb-1">${pkg.name}</h5>
            <div class="fw-bold fs-4 text-primary">${formatPKR(pkg.pricePerHead)}</div>
            <small class="text-muted">per guest (all inclusive)</small>
          </div>
          <ul class="list-unstyled my-3 small text-dark">
            ${pkg.items.map(item => `
              <li class="mb-2 d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-warning" style="font-size: 0.8rem;"></i>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
          <button type="button" class="btn w-100 mt-2 ${isSelected ? 'btn-aura-gold' : 'btn-aura-outline'}">
            ${isSelected ? 'Selected' : 'Choose Package'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function selectCateringPackage(id) {
  eventPlan.cateringPackage = CATALOGUE.cateringPackages.find(p => p.id === id);
  renderCateringOptions();
  recalculatePricing();
}

function renderAddonOptions() {
  // 1. Live Food Stalls
  const foodStallsEl = document.getElementById("eatingAddonsContainer");
  if (foodStallsEl) {
    foodStallsEl.innerHTML = CATALOGUE.eatingAddons.map(a => {
      const isSelected = eventPlan.selectedAddons.some(x => x.id === a.id);
      return `
        <div class="col-md-6 mb-3">
          <div class="addon-card ${isSelected ? 'selected' : ''}" onclick="toggleEatingAddon('${a.id}')">
            <img src="${a.image}" alt="${a.name}" class="addon-thumb">
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-1 text-dark">${a.name}</h6>
              <p class="text-muted small mb-1">${a.desc}</p>
              <div class="fw-bold text-primary">${formatPKR(a.price)}</div>
            </div>
            <div class="form-check form-switch ms-2">
              <input class="form-check-input" type="checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleEatingAddon('${a.id}')">
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Music & Entertainment
  const musicEl = document.getElementById("entertainmentContainer");
  if (musicEl) {
    musicEl.innerHTML = CATALOGUE.entertainmentAddons.map(ent => {
      const isSelected = eventPlan.selectedEntertainment && eventPlan.selectedEntertainment.id === ent.id;
      return `
        <div class="col-md-6 mb-3">
          <div class="addon-card ${isSelected ? 'selected' : ''}" onclick="selectEntertainment('${ent.id}')">
            <img src="${ent.image}" alt="${ent.name}" class="addon-thumb">
            <div class="flex-grow-1">
              <h6 class="fw-bold mb-1 text-dark">${ent.name}</h6>
              <p class="text-muted small mb-1">${ent.desc}</p>
              <div class="fw-bold text-primary">${ent.price === 0 ? 'Complimentary' : formatPKR(ent.price)}</div>
            </div>
            <div class="form-check ms-2">
              <input class="form-check-input" type="radio" name="entertainmentRadio" ${isSelected ? 'checked' : ''}>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Extra Services (Photography, Valet, Security)
  const extrasEl = document.getElementById("extraServicesContainer");
  if (extrasEl) {
    extrasEl.innerHTML = CATALOGUE.extraServices.map(ex => {
      const isSelected = eventPlan.selectedExtras.some(x => x.id === ex.id);
      return `
        <div class="col-md-6 mb-3">
          <div class="addon-card ${isSelected ? 'selected' : ''}" onclick="toggleExtraService('${ex.id}')">
            <div class="flex-grow-1">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <h6 class="fw-bold mb-0 text-dark">${ex.name}</h6>
                <span class="fw-bold text-primary">${formatPKR(ex.price)}</span>
              </div>
              <p class="text-muted small mb-0">${ex.desc}</p>
            </div>
            <div class="form-check form-switch ms-3">
              <input class="form-check-input" type="checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleExtraService('${ex.id}')">
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function toggleEatingAddon(id) {
  const item = CATALOGUE.eatingAddons.find(a => a.id === id);
  const idx = eventPlan.selectedAddons.findIndex(x => x.id === id);
  if (idx > -1) {
    eventPlan.selectedAddons.splice(idx, 1);
  } else {
    eventPlan.selectedAddons.push(item);
  }
  renderAddonOptions();
  recalculatePricing();
}

function selectEntertainment(id) {
  eventPlan.selectedEntertainment = CATALOGUE.entertainmentAddons.find(e => e.id === id);
  renderAddonOptions();
  recalculatePricing();
}

function toggleExtraService(id) {
  const item = CATALOGUE.extraServices.find(e => e.id === id);
  const idx = eventPlan.selectedExtras.findIndex(x => x.id === id);
  if (idx > -1) {
    eventPlan.selectedExtras.splice(idx, 1);
  } else {
    eventPlan.selectedExtras.push(item);
  }
  renderAddonOptions();
  recalculatePricing();
}

// --------------------------------------------------------------------------
// 6. Pricing Engine (Real-Time Calculation & Sticky Sidebar)
// --------------------------------------------------------------------------
function recalculatePricing() {
  const guests = eventPlan.guestCount || 250;

  // Venue
  const venuePrice = eventPlan.useOwnVenue ? 0 : (eventPlan.venue ? eventPlan.venue.price : 0);

  // Seating
  const seatingTotal = eventPlan.seating ? (eventPlan.seating.pricePerHead * guests) : 0;

  // Catering
  const cateringTotal = eventPlan.cateringPackage ? (eventPlan.cateringPackage.pricePerHead * guests) : 0;

  // Addons & Entertainment
  const addonsTotal = eventPlan.selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
  const entertainmentTotal = eventPlan.selectedEntertainment ? eventPlan.selectedEntertainment.price : 0;
  const extrasTotal = eventPlan.selectedExtras.reduce((acc, curr) => acc + curr.price, 0);

  // Subtotal & Tax
  const subtotal = venuePrice + seatingTotal + cateringTotal + addonsTotal + entertainmentTotal + extrasTotal;
  const serviceTax = Math.round(subtotal * 0.05); // 5% configurable tax
  const grandTotal = subtotal + serviceTax;

  eventPlan.breakdown = {
    venuePrice,
    seatingTotal,
    cateringTotal,
    addonsTotal,
    entertainmentTotal,
    extrasTotal,
    subtotal,
    serviceTax,
    grandTotal
  };

  // Update UI Elements
  updateStickySidebar(grandTotal);
  updateMobileBar(grandTotal);
}

function updateStickySidebar(total) {
  const guests = eventPlan.guestCount;
  const b = eventPlan.breakdown;

  const totalEl = document.getElementById("trackerTotalAmount");
  if (totalEl) totalEl.textContent = formatPKR(total);

  const venueRow = document.getElementById("trackerVenueRow");
  if (venueRow) {
    const venueName = eventPlan.useOwnVenue ? "Customer's Own Venue" : (eventPlan.venue ? eventPlan.venue.name : "Not selected yet");
    venueRow.innerHTML = `
      <div>
        <div class="tracker-item-title">${venueName}</div>
        <div class="tracker-item-sub">${eventPlan.useOwnVenue ? 'Self Provided' : 'Venue Hire'}</div>
      </div>
      <div class="tracker-item-price">${formatPKR(b.venuePrice)}</div>
    `;
  }

  const cateringRow = document.getElementById("trackerCateringRow");
  if (cateringRow) {
    const pkgName = eventPlan.cateringPackage ? eventPlan.cateringPackage.name : "None selected";
    cateringRow.innerHTML = `
      <div>
        <div class="tracker-item-title">${pkgName}</div>
        <div class="tracker-item-sub">${guests} guests × ${formatPKR(eventPlan.cateringPackage ? eventPlan.cateringPackage.pricePerHead : 0)}</div>
      </div>
      <div class="tracker-item-price">${formatPKR(b.cateringTotal)}</div>
    `;
  }

  const seatingRow = document.getElementById("trackerSeatingRow");
  if (seatingRow) {
    const seatName = eventPlan.seating ? eventPlan.seating.name : "Not selected";
    seatingRow.innerHTML = `
      <div>
        <div class="tracker-item-title">${seatName}</div>
        <div class="tracker-item-sub">${guests} guests</div>
      </div>
      <div class="tracker-item-price">${formatPKR(b.seatingTotal)}</div>
    `;
  }

  const addonsRow = document.getElementById("trackerAddonsRow");
  if (addonsRow) {
    const count = eventPlan.selectedAddons.length + (eventPlan.selectedEntertainment ? 1 : 0) + eventPlan.selectedExtras.length;
    addonsRow.innerHTML = `
      <div>
        <div class="tracker-item-title">Add-ons, Stalls & Extras</div>
        <div class="tracker-item-sub">${count} selections</div>
      </div>
      <div class="tracker-item-price">${formatPKR(b.addonsTotal + b.entertainmentTotal + b.extrasTotal)}</div>
    `;
  }

  const taxRow = document.getElementById("trackerTaxRow");
  if (taxRow) {
    taxRow.innerHTML = `
      <div>
        <div class="tracker-item-title">Tax & Service Fee (5%)</div>
      </div>
      <div class="tracker-item-price">${formatPKR(b.serviceTax)}</div>
    `;
  }

  // Budget Tracker Progress
  updateBudgetTracker(total);
}

function updateBudgetTracker(total) {
  const budget = eventPlan.budget;
  const budgetCard = document.getElementById("budgetTrackerCard");
  const budgetBar = document.getElementById("budgetProgressBar");
  const budgetText = document.getElementById("budgetAlertText");

  if (!budgetCard || !budget || budget <= 0) {
    if (budgetCard) budgetCard.classList.add("d-none");
    return;
  }

  budgetCard.classList.remove("d-none");
  const percentage = Math.min(Math.round((total / budget) * 100), 100);

  if (budgetBar) {
    budgetBar.style.width = `${percentage}%`;
    if (total > budget) {
      budgetBar.style.backgroundColor = "var(--aura-danger)";
    } else if (percentage > 85) {
      budgetBar.style.backgroundColor = "var(--aura-warning)";
    } else {
      budgetBar.style.backgroundColor = "var(--aura-success)";
    }
  }

  if (budgetText) {
    if (total > budget) {
      const overBy = total - budget;
      budgetText.className = "budget-alert text-danger";
      budgetText.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Over budget by ${formatPKR(overBy)}`;
    } else {
      const remaining = budget - total;
      budgetText.className = "budget-alert text-success";
      budgetText.innerHTML = `<i class="fa-solid fa-check"></i> Within budget (${formatPKR(remaining)} remaining)`;
    }
  }
}

function updateMobileBar(total) {
  const mobileEl = document.getElementById("mobileBarTotalAmount");
  if (mobileEl) {
    mobileEl.textContent = formatPKR(total);
  }
}

// --------------------------------------------------------------------------
// 7. Render Step 7 Summary & Final Booking Submission
// --------------------------------------------------------------------------
function renderBookingSummary() {
  const summaryVenueEl = document.getElementById("sumVenue");
  const summaryGuestsEl = document.getElementById("sumGuests");
  const summaryDateEl = document.getElementById("sumDate");
  const summarySlotEl = document.getElementById("sumSlot");
  const summarySeatingEl = document.getElementById("sumSeating");
  const summaryCateringEl = document.getElementById("sumCatering");
  const summaryAddonsListEl = document.getElementById("sumAddonsList");
  const sumGrandTotalEl = document.getElementById("sumGrandTotal");

  if (summaryVenueEl) {
    summaryVenueEl.textContent = eventPlan.useOwnVenue ? `Own Venue: ${eventPlan.ownVenueAddress || 'Specified Location'}` : (eventPlan.venue ? eventPlan.venue.name : 'None');
  }
  if (summaryGuestsEl) summaryGuestsEl.textContent = `${eventPlan.guestCount} Guests`;
  if (summaryDateEl) summaryDateEl.textContent = eventPlan.eventDate || 'Date not chosen';
  if (summarySlotEl) summarySlotEl.textContent = eventPlan.timeSlot;
  if (summarySeatingEl) summarySeatingEl.textContent = eventPlan.seating ? eventPlan.seating.name : 'None';
  if (summaryCateringEl) summaryCateringEl.textContent = eventPlan.cateringPackage ? `${eventPlan.cateringPackage.name} (${formatPKR(eventPlan.cateringPackage.pricePerHead)}/head)` : 'None';

  if (summaryAddonsListEl) {
    const allAddons = [
      ...eventPlan.selectedAddons.map(a => a.name),
      eventPlan.selectedEntertainment ? eventPlan.selectedEntertainment.name : null,
      ...eventPlan.selectedExtras.map(e => e.name)
    ].filter(Boolean);

    if (allAddons.length === 0) {
      summaryAddonsListEl.innerHTML = '<span class="text-muted small">No optional add-ons selected</span>';
    } else {
      summaryAddonsListEl.innerHTML = allAddons.map(a => `<span class="badge bg-light text-dark border me-1 mb-1 p-2">${a}</span>`).join('');
    }
  }

  if (sumGrandTotalEl) {
    sumGrandTotalEl.textContent = formatPKR(eventPlan.breakdown.grandTotal);
  }

  // Pre-fill user contact info if logged in
  const user = getCurrentUser();
  if (user) {
    const contactName = document.getElementById("submitContactName");
    const contactEmail = document.getElementById("submitContactEmail");
    const contactPhone = document.getElementById("submitContactPhone");
    if (contactName) contactName.value = user.name;
    if (contactEmail) contactEmail.value = user.email;
    if (contactPhone) contactPhone.value = user.phone;
  }
}

function submitBookingRequest() {
  const termsCheckbox = document.getElementById("agreeTermsCheckbox");
  if (termsCheckbox && !termsCheckbox.checked) {
    showToast("Accept Terms", "Please accept the booking terms & conditions before submitting.", "warning");
    return;
  }

  const contactName = document.getElementById("submitContactName").value.trim();
  const contactEmail = document.getElementById("submitContactEmail").value.trim();
  const contactPhone = document.getElementById("submitContactPhone").value.trim();
  const notes = document.getElementById("submitSpecialNotes") ? document.getElementById("submitSpecialNotes").value.trim() : "";

  if (!contactName || !contactEmail || !contactPhone) {
    showToast("Missing Details", "Please provide your contact name, email, and phone number.", "warning");
    return;
  }

  // Generate unique booking reference (e.g. AURA-2026-9482)
  const randomRefNum = Math.floor(1000 + Math.random() * 9000);
  const newBookingId = `AURA-2026-${randomRefNum}`;

  const newBooking = {
    id: newBookingId,
    eventType: eventPlan.eventType,
    guestCount: eventPlan.guestCount,
    date: eventPlan.eventDate,
    timeSlot: eventPlan.timeSlot,
    venueName: eventPlan.useOwnVenue ? `Own Venue (${eventPlan.ownVenueAddress})` : (eventPlan.venue ? eventPlan.venue.name : "Selected Venue"),
    venueLocation: eventPlan.useOwnVenue ? eventPlan.ownVenueAddress : (eventPlan.venue ? eventPlan.venue.location : "Islamabad"),
    venueImage: eventPlan.venue ? eventPlan.venue.image : "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    cateringPackage: eventPlan.cateringPackage ? eventPlan.cateringPackage.name : "Custom Menu",
    seatingType: eventPlan.seating ? eventPlan.seating.name : "Banquet Seating",
    entertainment: eventPlan.selectedEntertainment ? eventPlan.selectedEntertainment.name : "None",
    addons: [
      ...eventPlan.selectedAddons.map(a => a.name),
      ...eventPlan.selectedExtras.map(e => e.name)
    ],
    estimatedTotal: eventPlan.breakdown.grandTotal,
    quotedAmount: null,
    status: "Pending", // Starts at Pending
    submittedOn: new Date().toISOString().split('T')[0],
    specialNotes: notes,
    contact: { name: contactName, email: contactEmail, phone: contactPhone }
  };

  // Save to LocalStorage
  const raw = localStorage.getItem("aura_bookings");
  const bookings = raw ? JSON.parse(raw) : [];
  bookings.unshift(newBooking);
  localStorage.setItem("aura_bookings", JSON.stringify(bookings));

  // Show Success Confirmation Modal
  const modalEl = document.getElementById("bookingConfirmationModal");
  if (modalEl) {
    document.getElementById("modalBookingRef").textContent = newBookingId;
    document.getElementById("modalEventSummaryText").textContent = `${newBooking.eventType} for ${newBooking.guestCount} guests on ${newBooking.date}`;
    const bootstrapModal = new bootstrap.Modal(modalEl);
    bootstrapModal.show();
  } else {
    showToast("Booking Request Submitted", `Reference #${newBookingId} generated!`, "success");
    setTimeout(() => {
      window.location.href = `my-bookings.html?ref=${newBookingId}`;
    }, 1200);
  }
}

// --------------------------------------------------------------------------
// 8. Event Bindings
// --------------------------------------------------------------------------
function bindConfiguratorEvents() {
  const ownVenueCheck = document.getElementById("ownVenueCheck");
  const ownVenueCollapse = document.getElementById("ownVenueDetailsBox");
  if (ownVenueCheck && ownVenueCollapse) {
    ownVenueCheck.addEventListener("change", (e) => {
      eventPlan.useOwnVenue = e.target.checked;
      if (e.target.checked) {
        ownVenueCollapse.classList.remove("d-none");
      } else {
        ownVenueCollapse.classList.add("d-none");
      }
      recalculatePricing();
    });
  }

  // Live recalculate on guest change
  const guestInput = document.getElementById("evtGuests");
  if (guestInput) {
    guestInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      if (!isNaN(val) && val > 0) {
        eventPlan.guestCount = val;
        recalculatePricing();
      }
    });
  }
}

// Gallery preview popup helper
function viewVenueModal(venueId) {
  const venue = CATALOGUE.venues.find(v => v.id === venueId);
  if (!venue) return;

  const modalImg = document.getElementById("venueGalleryModalImg");
  const modalTitle = document.getElementById("venueGalleryModalTitle");
  const modalDesc = document.getElementById("venueGalleryModalDesc");

  if (modalImg) modalImg.src = venue.image;
  if (modalTitle) modalTitle.textContent = venue.name;
  if (modalDesc) modalDesc.textContent = `${venue.description} (Capacity: ${venue.capacity} Guests | Location: ${venue.location})`;

  const galleryModal = new bootstrap.Modal(document.getElementById("venueGalleryModal"));
  galleryModal.show();
}
