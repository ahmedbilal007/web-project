# Aura Events - Web Technologies (CSC336) Viva Preparation Guide
## Comprehensive HTML Architecture, Element Inventory & Viva Examiner Master Guide

**Course:** Web Technologies (CSC336) — Semester 4 (BSAI)  
**Instructor:** Sir Asif Shahzad  
**Project:** AURA Events — Luxury Event Management & Interactive Planning Platform  
**Document Purpose:** Complete HTML analysis, element & attribute reference, and examiner Q&A for viva defense.

---

## 1. Project HTML Overview & Architectural Blueprint

Aura Events is built across **10 production HTML5 documents** utilizing **46 unique HTML tags** and **over 35 distinct HTML attributes**. The markup adheres to strict HTML5 standards, utilizing semantic document outlining, accessible forms, responsive viewport integration, and seamless data binding with Bootstrap 5.3.3 and Font Awesome 6.5.2.

### 1.1 Project HTML File Registry

| File Name | Page Role / Architectural Purpose | Key HTML Features Present |
| :--- | :--- | :--- |
| `index.html` | **Homepage / Landing Portal:** Brand hero, quick search filter, event category showcase, featured venues, reviews, and call-to-action. | `<header>`, `<nav>`, `<section>`, `<article>` cards, `<h1>`-`<h6>`, `<form>`, carousel indicators, inline `<style>`. |
| `venues.html` | **Venue Directory & Catalog:** Filterable grid of venues, capacity/location sorting, pagination, and pricing badges. | `<aside>`/filter bars, grid layouts with `<div>`, badge `<span>`, anchor links, image cards. |
| `venue-detail.html` | **Single Venue Showcase:** Detailed venue specs, multi-photo Bootstrap carousel, amenities grid, client reviews, and direct booking CTA. | `<script>` (Bootstrap JS bundle), Bootstrap Carousel structure (`data-bs-ride`, `data-bs-slide`), `<blockquote>`, review ratings. |
| `services.html` | **Services & Add-ons Catalog:** Detailed breakdown of Catering, Photography, Decor, Sound/Lighting, and VIP hospitality services. | Categorized `<section>` blocks, feature list `<ul>`, pricing highlight cards, badge pills. |
| `book-event.html` | **Interactive Event Configurator (Core Project Innovation):** Multi-step wizard (Venue -> Seating -> Catering -> Add-ons -> Review). | `<aside class="sticky-price-tracker">`, `<table>` with `<thead>`, `<tbody>`, `<tfoot>`, `colspan`, dynamic inputs, radio/checkbox sets. |
| `my-bookings.html` | **User Booking Management Dashboard:** Tabbed view of active, confirmed, and past events with a milestone status timeline. | `<ol>` breadcrumbs, status filter buttons (`data-filter`), timeline card components, badge tags. |
| `profile.html` | **Customer Profile & Account Settings:** Personal info form, security settings (password change), and VIP tier status card. | Avatar `<img>`, multi-input `<form>`, `<textarea>`, `<select>` dropdowns, tab containers. |
| `login.html` | **Authentication - Sign In:** Split-screen login interface with background hero, credential inputs, validation states, and recovery link. | Two-column split layout, `<form method="GET">`, `<input type="email">`, `<input type="password">`, remember-me checkbox. |
| `register.html` | **Authentication - Sign Up:** User account creation form with contact info, city selector, terms acknowledgment, and validation. | Form inputs with `required`, `pattern` readiness, `<select>` with `<option>` elements, legal checkbox. |
| `forgot-password.html` | **Password Recovery Portal:** Minimalist recovery form allowing users to submit registered email for reset instructions. | Focused `<main>` container, recovery `<form>`, helper `<p>`, return navigation link. |

---

## 2. Master Catalog of ALL 46 HTML Tags Used in Aura Events

Below is the exhaustive inventory of all 46 HTML tags identified across the project codebase, categorized semantically according to W3C specifications and the Web Tech course syllabus.

```
Total Tags Analyzed: 46 Unique HTML Tags
Occurrence Count: 2,126 Tag Instances across 10 Documents
```

### Category A: Document Root & Metadata Elements (Lecture 2 & 3)

#### 1. `<!DOCTYPE html>`
* **Count:** 10 occurrences (All 10 HTML files)
* **Purpose & Role:** Tells the browser rendering engine to parse the document in strict **HTML5 standard mode** rather than "Quirks Mode" or "Almost Standards Mode".
* **Examiner Note:** If omitted, browsers drop back into Quirks Mode, breaking modern CSS Box Model sizing (`box-sizing: border-box`), flexbox calculations, and standard layout margins.

#### 2. `<html lang="en">`
* **Count:** 10 occurrences | **Files:** All 10 HTML files
* **Attributes Used:** `lang="en"`
* **Purpose & Role:** The root element containing the entire DOM tree. The `lang="en"` attribute specifies English as the primary natural language for screen readers, speech synthesis engines, and search engine localization.
* **Code Example (`index.html#L2`):**
  ```html
  <html lang="en">
  ```

#### 3. `<head>`
* **Count:** 10 occurrences | **Files:** All 10 HTML files
* **Purpose & Role:** Machine-readable metadata container. It contains non-visual technical directives: character encoding, mobile viewport parameters, SEO title tags, preconnect resource hints, external stylesheets, and web fonts.
* **Tags Nested Inside:** `<meta>`, `<title>`, `<link>`, `<style>`.

#### 4. `<meta>`
* **Count:** 30 occurrences (3 per file across 10 files)
* **Attributes Used:** `charset="UTF-8"`, `name="viewport"`, `content="width=device-width, initial-scale=1.0"`, `name="description"`.
* **Purpose & Role:**
  * `<meta charset="UTF-8">`: Declares the character encoding standard to support Unicode characters (emojis, Urdu characters, currency symbols like PKR/₨, quotes).
  * `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Critical responsive design meta tag. Maps screen pixels 1:1 with CSS device-independent pixels to disable automatic mobile zooming.
* **Code Example (`book-event.html#L4-L6`):**
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book an Event - AURA Events</title>
  ```

#### 5. `<title>`
* **Count:** 10 occurrences | **Files:** All 10 HTML files
* **Purpose & Role:** Defines the human-readable document title shown on browser tabs, bookmarks, and search engine results pages (SERPs). Crucial for UX and technical SEO.
* **Values Used:** e.g., `AURA Events - Luxury Event Planning`, `Book an Event - AURA Events`, `My Bookings - AURA Events`.

#### 6. `<link>`
* **Count:** 67 occurrences | **Files:** All 10 HTML files
* **Attributes Used:** `rel="stylesheet"`, `rel="preconnect"`, `href="..."`, `crossorigin`
* **Purpose & Role:** Establishes relationships between the HTML document and external resources:
  1. **Google Fonts Preconnect:** Optimizes HTTP handshake (`rel="preconnect" href="https://fonts.googleapis.com"`).
  2. **Font Families:** Imports *DM Sans*, *Plus Jakarta Sans*, and *Inter*.
  3. **Bootstrap 5.3 CDN:** Imports Bootstrap framework stylesheet.
  4. **Font Awesome 6.5.2 CDN:** Imports icon stylesheet (`all.min.css`).
  5. **Custom CSS:** Imports `assets/css/style.css` and `assets/css/configurator.css`.
* **Code Example (`venues.html#L11-L15`):**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  ```

#### 7. `<style>`
* **Count:** 4 occurrences | **Files:** `index.html`, `login.html`, `register.html`, `venue-detail.html`
* **Attributes Used:** None (standard CSS type assumed in HTML5)
* **Purpose & Role:** Encapsulates page-specific internal CSS declarations directly inside the document `<head>`.
* **Where Used in Project:**
  * `index.html`: Custom `.hero-main-section` linear-gradient overlay and background image.
  * `login.html` & `register.html`: Custom `.auth-split-wrapper` and `.auth-visual-side` flex layouts.
  * `venue-detail.html`: Carousel image fixed height rules and control button glassmorphism.

---

### Category B: Structural & Semantic Sectioning Elements (Lecture 4)

#### 8. `<body>`
* **Count:** 10 occurrences | **Files:** All 10 HTML files
* **Attributes Used:** `class="bg-light"`, `class="bg-light d-flex flex-column min-vh-100"`
* **Purpose & Role:** Contains all rendered visual content. In Aura Events, sticky footer flexbox utilities (`d-flex flex-column min-vh-100`) are applied directly to `<body>` so that the footer always hugs the viewport bottom even on low-content pages like `forgot-password.html`.

#### 9. `<header>`
* **Count:** 1 occurrence | **Files:** `index.html`
* **Attributes Used:** `class="hero-main-section"`
* **Purpose & Role:** Semantic container for introductory content or navigational aids. Serves as the high-impact hero banner of the Aura Events homepage containing the primary brand statement, value proposition, and quick booking entry point.

#### 10. `<nav>`
* **Count:** 13 occurrences | **Files:** 8 files (`index.html`, `venues.html`, `venue-detail.html`, `services.html`, `book-event.html`, `my-bookings.html`, `profile.html`, `forgot-password.html`)
* **Attributes Used:** `class="navbar navbar-expand-lg aura-navbar"`, `class="breadcrumb-aura"`, `aria-label="breadcrumb"`
* **Purpose & Role:** Identifies blocks intended for website navigation. Used for both the primary site navigation bar (`.aura-navbar`) and the breadcrumb navigation bars (`<nav aria-label="breadcrumb">`).

#### 11. `<main>`
* **Count:** 7 occurrences | **Files:** 7 files (`login.html`, `register.html`, `forgot-password.html`, `venues.html`, `services.html`, `my-bookings.html`, `profile.html`)
* **Attributes Used:** `class="flex-grow-1"`, `class="container my-5 py-4"`
* **Purpose & Role:** Encloses the unique, central content of each page, distinctly separating it from repeated headers, navigation bars, and footers. Promotes accessibility for keyboard and screen reader skip-to-content shortcuts.

#### 12. `<section>`
* **Count:** 11 occurrences | **Files:** 7 files
* **Attributes Used:** `class="page-hero-banner"`, `class="bg-white py-5 border-top border-bottom"`, `class="bg-light py-5"`
* **Purpose & Role:** Represents a standalone thematic grouping of content, typically including a heading. Used to separate the Event Categories section, Why Choose Us section, Testimonials section, and Service Package tiers.

#### 13. `<aside>`
* **Count:** 1 occurrence | **Files:** `book-event.html`
* **Attributes Used:** `class="sticky-price-tracker"`
* **Purpose & Role:** Represents secondary content related to the surrounding main content. In `book-event.html`, it is used to encapsulate the **Sticky Live Price Calculator**, which remains pinned to the right side of the screen as the user scrolls through the multi-step booking options.

#### 14. `<footer>`
* **Count:** 8 occurrences | **Files:** 8 files
* **Attributes Used:** `class="aura-footer"`, `class="aura-footer mt-auto py-4"`
* **Purpose & Role:** Semantic footer for the site containing copyright notices, developer team credits (Ahmed Bilal, Abdullah Jamil, Taha Ali), quick navigation links, customer support contact info, and legal disclaimers.

---

### Category C: Headings, Text Content & Inline Semantics (Lectures 3 & 5)

#### 15. `<h1>`
* **Count:** 8 occurrences | **Files:** 8 files
* **Attributes Used:** `class="display-4 fw-bold text-white mb-3"`, `class="h2 text-white fw-bold"`, `id="profileHeroName"`
* **Purpose & Role:** The primary, highest-level heading of the page. Crucial for the document outline algorithm. Exactly one semantic `<h1>` is maintained per page to communicate the document subject to users and search crawlers.

#### 16. `<h2>`
* **Count:** 11 occurrences | **Files:** 5 files
* **Attributes Used:** `class="display-6 fw-bold mb-3"`, `class="fw-bold text-dark"`
* **Purpose & Role:** Major section headings. Used for section titles such as "Curated Event Venues across Pakistan", "Signature Event Services", and "What Our Esteemed Clients Say".

#### 17. `<h3>`
* **Count:** 3 occurrences | **Files:** `forgot-password.html`, `services.html`, `venue-detail.html`
* **Attributes Used:** `class="fw-bold mb-2"`, `class="fw-bold text-dark"`
* **Purpose & Role:** Sub-section headings, such as modal titles, password reset prompts, and service package subcategories.

#### 18. `<h4>`
* **Count:** 17 occurrences | **Files:** 4 files
* **Attributes Used:** `class="fw-bold mb-1"`, `class="fw-bold text-dark mb-0"`
* **Purpose & Role:** Component-level headings, such as step titles in the booking wizard ("Step 1: Select Venue", "Step 3: Choose Catering") and venue spec cards.

#### 19. `<h5>`
* **Count:** 34 occurrences | **Files:** 6 files
* **Attributes Used:** `class="fw-bold mb-0 text-dark"`, `class="fw-bold mb-1"`
* **Purpose & Role:** Card titles for individual venue listings, seating arrangements, catering menus (Silver/Gold/Platinum), and booking reference numbers.

#### 20. `<h6>`
* **Count:** 40 occurrences | **Files:** 7 files
* **Attributes Used:** `class="fw-bold mb-0"`, `class="small text-muted text-uppercase"`
* **Purpose & Role:** Small card sub-headers, table section headers, pricing breakdown line items, and feature labels.

#### 21. `<p>`
* **Count:** 109 occurrences | **Files:** All 10 files
* **Attributes Used:** `class="lead text-light"`, `class="text-muted small mb-0"`, `style="..."`
* **Purpose & Role:** Standard paragraph element for body copy, venue descriptions, user testimonials, policy notices, and helper instructions.

#### 22. `<small>`
* **Count:** 55 occurrences | **Files:** 8 files
* **Attributes Used:** `class="text-muted"`, `class="opacity-75"`, `style="font-size: 0.75rem;"`
* **Purpose & Role:** Represents side-comments, fine print, pricing units (e.g. `/ per guest`, `incl. GST`), and subtitle captions.

#### 23. `<strong>`
* **Count:** 15 occurrences | **Files:** 4 files
* **Attributes Used:** `class="text-dark"`, `class="text-primary"`
* **Purpose & Role:** Denotes content of strong importance or urgency. Used to highlight calculated total prices, package names, and mandatory contract terms.

#### 24. `<hr>`
* **Count:** 2 occurrences | **Files:** `login.html`, `register.html`
* **Attributes Used:** `class="my-4 text-muted"`
* **Purpose & Role:** Represents a thematic break between paragraphs of text (e.g., separating primary sign-in from demo credential buttons).

#### 25. `<br>`
* **Count:** 1 occurrence | **Files:** `index.html`
* **Purpose & Role:** Forces an intentional line break inside the main landing page hero title without creating a new paragraph.

---

### Category D: Layout, Grouping & Container Elements (Lectures 4, 6 & 8)

#### 26. `<div>`
* **Count:** 756 occurrences | **Files:** All 10 files
* **Attributes Used:** `class`, `id`, `style`, `role="region"`, `aria-label`, `data-bs-ride`, `data-bs-interval`
* **Purpose & Role:** Generic block container used extensively for layout scaffolding: Bootstrap grid rows (`.row`), responsive columns (`.col-md-6`), card surfaces (`.card`, `.aura-card`), flex containers (`.d-flex`), and wizard steps.

#### 27. `<span>`
* **Count:** 255 occurrences | **Files:** All 10 files
* **Attributes Used:** `class`, `id`, `style`, `aria-hidden="true"`
* **Purpose & Role:** Generic inline container. Used for decorative badges (`.badge`, `.badge-gold`), dynamic JavaScript text targets (e.g., `id="summaryTotalPrice"`), sparkler brand accents, and inline status indicators.

---

### Category E: Links, Media & Iconography (Lectures 3 & 4)

#### 28. `<a>`
* **Count:** 201 occurrences | **Files:** All 10 files
* **Attributes Used:** `href="..."`, `class="..."`, `title="..."`, `target="_blank"`
* **Purpose & Role:** Hyperlink element providing page-to-page navigation, jump anchors (`href="#step-details"`), telephone links, email links, and button-styled action triggers (`.btn .btn-aura-gold`).

#### 29. `<img>`
* **Count:** 47 occurrences | **Files:** 8 files
* **Attributes Used:** `src`, `alt`, `class="img-fluid"`, `loading="lazy"`, `id`, `style="object-fit: cover;"`
* **Purpose & Role:** Embeds photographic media (venue halls, catering platters, client review avatars).
* **Viva High-Yield Point:** Notice the strict use of informative `alt` text (e.g., `alt="Royal Palm Grand Ballroom Setup"`) for screen reader accessibility and `loading="lazy"` to defer image loading until visible in viewport, boosting Core Web Vitals.

#### 30. `<i>`
* **Count:** 304 occurrences | **Files:** All 10 files
* **Attributes Used:** `class="fa-solid fa-gem"`, `class="fa-solid fa-users"`, `aria-hidden="true"`
* **Purpose & Role:** Idiomatic text element repurposed by the Font Awesome library to render scalable vector icons (calendars, guest icons, checkmarks, stars, location pins, and phone icons).

---

### Category F: Interactive Form Controls & Inputs (Lecture 5)

#### 31. `<form>`
* **Count:** 8 occurrences | **Files:** 7 files
* **Attributes Used:** `action="..."`, `method="GET"`, `id="loginForm"`, `id="registerForm"`
* **Purpose & Role:** Represents a document section containing interactive controls for submitting user information. Encloses authentication forms, profile update forms, and booking submission forms.

#### 32. `<input>`
* **Count:** 66 occurrences | **Files:** 9 files
* **Attributes Used:** `type`, `name`, `id`, `class`, `placeholder`, `value`, `required`, `checked`, `min`, `max`, `step`, `accept`
* **Input Types Deployed:**
  1. `type="text"`: Names, booking references, event titles.
  2. `type="email"`: User email addresses with built-in browser format validation.
  3. `type="password"`: Password fields with masked characters.
  4. `type="date"`: Built-in calendar picker for selecting event dates.
  5. `type="time"`: Time selection for event slots.
  6. `type="number"`: Guest count with `min="50"`, `max="2500"`, and `step="10"`.
  7. `type="radio"`: Mutually exclusive options (e.g., venue selection, catering tier selection).
  8. `type="checkbox"`: Multi-select add-ons (DJ sound, drone photography, fireworks, dessert bar) and "Remember Me" flags.
  9. `type="file"`: Avatar upload on `profile.html` with `accept="image/*"`.
* **Code Example (`book-event.html#L312-L318`):**
  ```html
  <input type="number" class="form-control" id="numGuests" name="guests"
         min="50" max="2500" step="10" value="250" required>
  ```

#### 33. `<label>`
* **Count:** 70 occurrences | **Files:** 7 files
* **Attributes Used:** `for="inputId"`, `class="form-label"`, `class="form-check-label"`
* **Purpose & Role:** Provides an accessible caption for an input control. By binding the `for` attribute to an input's unique `id`, clicking the label activates or focuses the input (crucial for small checkboxes and mobile touch targets).

#### 34. `<select>`
* **Count:** 8 occurrences | **Files:** 6 files
* **Attributes Used:** `id`, `name`, `class="form-select"`, `required`
* **Purpose & Role:** Creates a dropdown menu for selecting single or multiple options. Used for Event Type (Wedding, Corporate, Birthday, Mehndi), City Selection (Lahore, Karachi, Islamabad), and Time Slot Selection.

#### 35. `<option>`
* **Count:** 39 occurrences | **Files:** 6 files
* **Attributes Used:** `value="..."`, `selected`
* **Purpose & Role:** Defines individual selectable items inside `<select>` dropdown controls.

#### 36. `<textarea>`
* **Count:** 3 occurrences | **Files:** 3 files (`book-event.html`, `profile.html`, `venue-detail.html`)
* **Attributes Used:** `id`, `name`, `class="form-control"`, `rows="3"`, `placeholder="..."`, `required`
* **Purpose & Role:** Multi-line plain text editing control for capturing special event requests, dietary restrictions, stage specifications, and venue reviews.

#### 37. `<button>`
* **Count:** 28 occurrences | **Files:** All 10 files
* **Attributes Used:** `type="button"`, `type="submit"`, `type="reset"`, `class="..."`, `data-bs-toggle="collapse"`, `data-bs-target="#navbarMain"`, `data-bs-slide="next"`, `data-filter="active"`
* **Purpose & Role:** Standard interactive push-button for submitting forms, cycling carousel slides, collapsing the mobile hamburger menu, and filtering bookings.

---

### Category G: Lists & Breadcrumb Navigation (Lecture 4)

#### 38. `<ul>` (Unordered List)
* **Count:** 19 occurrences | **Files:** 7 files
* **Attributes Used:** `class="navbar-nav mx-auto"`, `class="list-unstyled"`, `class="list-unstyled small mb-4"`
* **Purpose & Role:** Represents a list of items where order does not affect meaning. Used for navbar links, footer site navigation, catering dish lists, and feature checklists.

#### 39. `<ol>` (Ordered List)
* **Count:** 5 occurrences | **Files:** 5 files (`my-bookings.html`, `profile.html`, `services.html`, `venue-detail.html`, `venues.html`)
* **Attributes Used:** `class="breadcrumb mb-0"`
* **Purpose & Role:** Represents a sequential list of items. Strictly used for semantic breadcrumb navigation paths (e.g. Home > Venues > Royal Palm Details) where hierarchical sequence matters.

#### 40. `<li>` (List Item)
* **Count:** 116 occurrences | **Files:** 7 files
* **Attributes Used:** `class="nav-item"`, `class="breadcrumb-item"`, `aria-current="page"`
* **Purpose & Role:** Represents an individual list item within either `<ul>` or `<ol>`.

---

### Category H: Tabular Data (Lecture 5)

#### 41. `<table>`
* **Count:** 1 occurrence | **Files:** `book-event.html`
* **Attributes Used:** `class="table table-bordered align-middle"`
* **Purpose & Role:** Container for two-dimensional tabular data. Specifically used in `book-event.html` to present the formal, printable invoice breakdown of the event quotation.

#### 42. `<thead>`
* **Count:** 1 occurrence | **Files:** `book-event.html`
* **Attributes Used:** `class="table-light"`
* **Purpose & Role:** Semantic group of table header rows defining column titles: Item, Unit Description, Quantity/Rate, and Total (PKR).

#### 43. `<tbody>`
* **Count:** 1 occurrence | **Files:** `book-event.html`
* **Purpose & Role:** Groups the body content of the data table containing line items (Venue rental fee, per-head catering calculation, chosen add-ons).

#### 44. `<tr>`
* **Count:** 8 occurrences | **Files:** `book-event.html`
* **Attributes Used:** `class="table-light"`, `class="table-warning"`
* **Purpose & Role:** Represents a single horizontal row of table cells.

#### 45. `<th>`
* **Count:** 4 occurrences | **Files:** `book-event.html`
* **Attributes Used:** `class="text-end"`
* **Purpose & Role:** Defines header cells for columns. Bolded and centered by default according to user agent stylesheets.

#### 46. `<td>`
* **Count:** 22 occurrences | **Files:** `book-event.html`
* **Attributes Used:** `class="fw-bold"`, `class="text-end"`, `colspan="3"`
* **Purpose & Role:** Standard data cells containing numeric and textual invoice details.
* **Viva High-Yield Point:** Demonstrates the use of `colspan="3"` to allow the "Grand Total (incl. Taxes)" cell to span across three columns horizontally.

---

### Category I: Script Integration (Lecture 10)

#### `<script>`
* **Count:** 1 occurrence | **Files:** `venue-detail.html`
* **Attributes Used:** `src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"`
* **Purpose & Role:** Loads external JavaScript code. Specifically imports the Bootstrap 5.3 bundled library containing Popper.js to enable the interactive venue carousel, tooltips, and collapsing navbar menus.

---

## 3. Comprehensive Master Table of HTML Attributes Used

| Attribute Name | Category | Elements Applied To | Purpose & Project Usage Example |
| :--- | :--- | :--- | :--- |
| `class` | Global | Almost all visible elements | Attaches CSS rules and Bootstrap utility classes (e.g. `class="btn btn-aura-gold"`). |
| `id` | Global | `form`, `input`, `div`, `span`, `button` | Unique identifier for JavaScript DOM manipulation, form labels, and anchor targets (e.g. `id="step-catering"`). |
| `style` | Global | `div`, `img`, `p`, `small`, `span` | Inline CSS for element-specific overrides (e.g. `style="object-fit: cover; height: 220px;"`). |
| `title` | Global | `a`, `label`, `button` | Advisory tooltip text displayed on cursor hover (e.g. `title="View Venue Details"`). |
| `role` | Accessibility | `div`, `nav`, `button` | ARIA landmark role defining element purpose for assistive tools (e.g. `role="region"`). |
| `aria-label` | Accessibility | `nav`, `button`, `div` | Accessible text label when visual text is absent (e.g. `aria-label="breadcrumb"`). |
| `aria-hidden` | Accessibility | `i`, `span` | Hides decorative iconography from screen readers (`aria-hidden="true"`). |
| `aria-current` | Accessibility | `li`, `button` | Identifies active page in breadcrumbs or active slide in carousel (`aria-current="page"`). |
| `href` | Link Target | `a`, `link` | URL destination for hyperlinks and external stylesheets (e.g. `href="venues.html"`). |
| `src` | Media Source | `img`, `script` | Path to image file or script resource (e.g. `src="assets/images/royal-palm.jpg"`). |
| `alt` | Accessibility | `img` | Fallback descriptive text for screen readers or broken image links. |
| `loading` | Performance | `img` | Defer offscreen image loading (`loading="lazy"`). |
| `rel` | Link Relation | `link` | Relationship type with current document (`rel="stylesheet"`, `rel="preconnect"`). |
| `crossorigin` | Security/CORS | `link` | Enables CORS request credentials when preconnecting to Google Font CDNs. |
| `charset` | Encoding | `meta` | Declares document character encoding (`charset="UTF-8"`). |
| `name` | Metadata/Forms| `meta`, `input`, `select`, `textarea` | Parameter key sent in HTTP request body/query string upon form submission. |
| `content` | Metadata | `meta` | Value configuration for viewport or meta description. |
| `action` | Form Config | `form` | Destination URL where form data is transmitted upon submission. |
| `method` | Form Config | `form` | HTTP request method (`method="GET"` used in project). |
| `type` | Control Type | `input`, `button` | Specifies control behavior (`text`, `email`, `password`, `date`, `radio`, `submit`). |
| `placeholder` | UX/Form | `input`, `textarea` | Grayed-out hint text illustrating expected input format. |
| `value` | Form State | `input`, `option` | Default or submitted value of a form control. |
| `required` | Validation | `input`, `select`, `textarea` | Enforces HTML5 client-side validation before submission can proceed. |
| `checked` | Form State | `input[type="radio"]`, `checkbox` | Specifies default selected radio or checkbox option. |
| `selected` | Form State | `option` | Specifies default active option in a `<select>` dropdown. |
| `min` / `max` | Validation | `input[type="number"]` | Numeric boundaries for guest count (`min="50" max="2500"`). |
| `step` | Validation | `input[type="number"]` | Incremental step granularity (`step="10"` for guest count). |
| `rows` | Form Sizing | `textarea` | Visible height of text area in terms of text lines (`rows="3"`). |
| `colspan` | Table Layout | `td` | Spans a table cell across multiple columns (`colspan="3"` for invoice total). |
| `data-bs-toggle` | Bootstrap Data | `button`, `a` | Initializes Bootstrap plugin (`collapse`, `modal`, `dropdown`). |
| `data-bs-target`| Bootstrap Data | `button` | CSS selector target for toggled component (e.g. `#navbarMain`). |
| `data-bs-slide` | Bootstrap Data | `button` | Cycles carousel slides (`data-bs-slide="next"`). |
| `data-bs-slide-to`| Bootstrap Data | `button` | Direct index jump in carousel (`data-bs-slide-to="0"`). |
| `data-bs-ride` | Bootstrap Data | `div` | Autoplays carousel on page load (`data-bs-ride="false"` for manual browsing). |
| `data-filter` | Custom Data | `button` | JavaScript dataset hook for filtering customer booking statuses. |

---

## 4. Top 25 Viva Examiner Questions & High-Scoring Model Answers

### Q1: What is the purpose of `<!DOCTYPE html>` at the beginning of every file?
**Model Answer:**  
"The `<!DOCTYPE html>` declaration is a document type directive, not an HTML tag. It instructs the browser rendering engine (such as Blink or Gecko) to parse the document strictly according to the modern **W3C HTML5 standard**. If it is omitted or mistyped, the browser enters **Quirks Mode** to maintain backwards compatibility with 1990s legacy browsers. In Quirks Mode, modern CSS box-sizing (`border-box`), percentages, and margin-collapsing behave unpredictably."

### Q2: What is the difference between Semantic and Non-Semantic HTML tags? Give examples from your project.
**Model Answer:**  
"**Semantic tags** convey their structural and contextual meaning to both the browser, developers, and assistive technologies (screen readers). Examples from our Aura Events project include:
* `<header>`: The hero landing section of our homepage.
* `<nav>`: The main navigation bar and breadcrumbs.
* `<main>`: The unique body content of each page.
* `<aside>`: The sticky live price tracker sidebar on `book-event.html`.
* `<footer>`: The global site footer with copyright and developer credits.

**Non-semantic tags** convey zero meaning about their content and act purely as generic styling containers:
* `<div>`: Block-level divider used for Bootstrap grid rows and card containers.
* `<span>`: Inline-level wrapper used for badges and dynamic price numbers."

### Q3: What is the difference between Block-level, Inline, and Inline-Block elements?
**Model Answer:**  
* **Block Elements:** Always begin on a new line and stretch horizontally to fill the full available width of their parent container. They respect `width`, `height`, `margin`, and `padding` on all four sides.  
  *Examples in Aura Events:* `<div>`, `<p>`, `<h1>`-`<h6>`, `<section>`, `<form>`, `<aside>`, `<table>`.
* **Inline Elements:** Do not start on a new line; they sit directly alongside sibling text. They only occupy the width of their content. Vertical properties (`margin-top`, `margin-bottom`, `height`, `width`) have **no effect**.  
  *Examples in Aura Events:* `<span>`, `<a>`, `<i>`, `<strong>`, `<small>`.
* **Inline-Block Elements:** Flow inline like text but fully respect `width`, `height`, vertical padding, and vertical margins.  
  *Examples in Aura Events:* `<button>`, `<input>`, `<img>`, `<select>`.

### Q4: Explain the responsive viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
**Model Answer:**  
"Mobile browsers default to a desktop virtual viewport (usually 980px wide) and scale the rendered page down, making text microscopic. The viewport meta tag overrides this behavior:
* `width=device-width`: Sets the width of the page to match the actual screen width in device-independent CSS pixels (e.g. 390px on an iPhone).
* `initial-scale=1.0`: Establishes a 1:1 zoom ratio when the page is first loaded.
Without this single tag, responsive CSS media queries and Bootstrap's grid system cannot function on mobile devices."

### Q5: How do forms validate data natively in HTML5 without JavaScript in your project?
**Model Answer:**  
"We used native HTML5 constraint validation attributes directly on our `<input>`, `<select>`, and `<textarea>` controls:
1. `required`: Prevents form submission if the field is left blank (used on email, password, event date, and guest count).
2. `type="email"`: Uses browser regex parsing to enforce valid email formats containing `@` and a valid domain name.
3. `min="50"` and `max="2500"`: Restricts numeric guest counts to realistic venue capacities.
4. `step="10"`: Ensures guest headcounts increment in batches of 10.
If any constraint fails, the browser displays a localized native validation tooltip and halts form submission."

### Q6: Why must every `<label>` have a `for` attribute matching an `<input>`'s `id`?
**Model Answer:**  
"The `for` attribute binds the label programmatically to the corresponding form control. This has two vital benefits:
1. **Accessibility:** When a visually impaired user tabs into a field, their screen reader announces the bound label text.
2. **Usability / Hit Target:** Clicking on the label automatically focuses the text field or toggles the checkbox/radio button. This is especially helpful on smartphones for tiny radio buttons and checkboxes (e.g. selecting catering packages or add-ons in `book-event.html`)."

### Q7: Why are `<form>` methods set to `GET` in your project rather than `POST`?
**Model Answer:**  
"Because this is a frontend-only prototype for our Web Tech Semester 4 coursework without an active PHP/Node.js backend database connection, using `method="GET"` appends the submitted parameters to the browser address bar as query string pairs (e.g., `venues.html?city=Lahore&type=Wedding`). This allows us to inspect submitted form values directly and easily demonstrate page transitions during viva evaluation. In a full production environment, authentication forms (`login.html`, `register.html`) would strictly use `method="POST"` over HTTPS to protect passwords from browser history and server access logs."

### Q8: What is the purpose of `loading="lazy"` on your `<img>` tags?
**Model Answer:**  
"The `loading="lazy"` attribute enables native browser lazy-loading. Instead of downloading all 47 venue and catering photos immediately upon initial page render, the browser defers loading off-screen images until the user scrolls near them. This dramatically reduces initial bandwidth consumption, improves page load speeds, and improves Google Core Web Vitals (LCP and FCP metrics)."

### Q9: Why is `<aside>` used in `book-event.html`?
**Model Answer:**  
"`<aside>` is a semantic HTML5 element designating tangential or complementary content related to the surrounding main content. In `book-event.html`, the main content is the step-by-step configurator form, while the **Sticky Live Price Tracker** sits alongside it as a supporting financial summary calculation. This is textbook semantic usage of `<aside>`."

### Q10: What is the structure of an accessible, semantic HTML Table?
**Model Answer:**  
"A proper semantic table requires:
1. `<table>`: The table wrapper.
2. `<thead>`: Houses header rows (`<tr>`) with `<th>` cells that describe column data.
3. `<tbody>`: Houses data rows (`<tr>`) with `<td>` cells that display the actual dataset.
4. `<tfoot>`: (Optional) Houses summary or total rows.
In `book-event.html`, we also use the `colspan="3"` attribute on the grand total cell to merge three columns into one unified label row."

### Q11: How do Bootstrap interactive components (like the mobile hamburger menu or carousel) attach to HTML without writing custom JavaScript?
**Model Answer:**  
"Bootstrap 5 uses **HTML5 Data Attributes (`data-bs-*`)** as declarative hooks:
* `data-bs-toggle="collapse"`: Tells Bootstrap JS to toggle the visibility of the targeted container.
* `data-bs-target="#navbarMain"`: CSS selector pointing to the navigation container to be opened or collapsed.
* `data-bs-ride="carousel"` and `data-bs-slide="next"`: Tell Bootstrap to automatically cycle through venue photos or jump forward upon clicking the arrow button."

### Q12: What is the difference between `<b>` / `<i>` and `<strong>` / `<em>`?
**Model Answer:**  
"`<b>` and `<i>` are stylistic presentation tags: `<b>` makes text bold, and `<i>` makes text italicized without imparting structural importance.  
In contrast, `<strong>` and `<em>` are **semantic tags**: `<strong>` signifies that the enclosed text has strong importance, seriousness, or urgency, while `<em>` indicates verbal stress emphasis. Screen readers alter their vocal inflection and pitch for `<strong>` and `<em>`, but ignore `<b>` and `<i>`."

### Q13: Why did you use `<ol>` for breadcrumbs instead of `<ul>`?
**Model Answer:**  
"`<ol>` defines an **ordered list**, where the chronological or hierarchical order of list items is functionally important. A breadcrumb navigation path (`Home > Venues > Royal Palm Details`) is inherently hierarchical and sequential. Using `<ol>` semantically communicates to screen readers that step 1 leads to step 2, which leads to step 3."

### Q14: Explain the role of the `aria-hidden="true"` attribute on Font Awesome icons (`<i class="fa-solid fa-users" aria-hidden="true"></i>`).
**Model Answer:**  
"Font Awesome icons are purely decorative visual indicators. If `aria-hidden="true"` is omitted, screen readers attempt to pronounce the icon's CSS Unicode glyph or announce empty text nodes, causing confusion for visually impaired users. Adding `aria-hidden="true"` instructs screen readers to completely skip the icon and read only the accompanying readable text."

### Q15: What happens if an `<img>` tag has no `alt` attribute?
**Model Answer:**  
"If the `alt` attribute is completely missing:
1. It violates W3C accessibility compliance.
2. Screen readers announce the raw image file path (e.g. *assets/images/royal-palm.jpg*), which disrupts the listening experience.
3. If an image is purely decorative, an empty `alt=""` should be used so assistive software silently ignores it. For content-rich photos, an informative description should always be provided."

---

## 5. Quick-Glance Viva Trap-Avoidance Checklist

> [!WARNING]
> **5 Things Professors Love to Grill Students on in HTML Vivas:**
> 1. **Doctype Trap:** Claiming `<!DOCTYPE html>` is an HTML tag. *(Correction: It is a document declaration, not a tag).*
> 2. **Form Method Trap:** Not knowing whether the form is `GET` or `POST`. In Aura Events, forms use `GET`.
> 3. **Input Connection Trap:** Forgetting how `<label>` connects to `<input>`. *(The label's `for` matches the input's `id`).*
> 4. **Semantic Distinction Trap:** Calling `<div>` semantic. *(It is completely non-semantic).*
> 5. **Block vs Inline Nesting:** Putting a block element (`<div>` or `<p>`) inside an inline element (`<span>`). HTML5 strictly forbids nesting block containers inside inline wrappers.

