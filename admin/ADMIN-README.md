# Aura Events Admin Panel

This is an HTML/CSS frontend preview for the university Event Management & Planning System. The pasted task brief is the specification; no separate SRS was supplied.

## Open in VS Code

1. Open the existing web-project folder in VS Code.
2. Open admin-login.html directly in a browser, or use VS Code Live Server if already installed.
3. Select Open Dashboard Preview. This is public preview navigation, not authentication.
4. Use the sidebar to open All Bookings, Staff Management and Website Settings.
5. Open View Details for a booking. Its URL fragment jumps to the corresponding sample record on the details page.
6. Open staff View Details, Change Password, Deactivate or Reactivate to reach the matching form.
7. Use View Customer Website to return to the unchanged customer portal.

Bootstrap 5.3.3, Font Awesome 6.5.2 and Google Fonts reuse the existing site's CDN approach. Internet access is needed for those styles, icons and fonts. No package installation or build command is required.

## Files added

- admin-login.html: separate login form, error-message area and dashboard preview link.
- admin-dashboard.html: six summary cards, recent requests and one confirmed upcoming event.
- admin-bookings.html: responsive booking table with all seven statuses.
- admin-booking-details.html: seven matching, read-only sample booking records.
- admin-staff.html: staff directory, add-staff form, individual details, password forms and explicit status confirmations.
- admin-settings.html: company/settings form, staff-management shortcuts and roles guide.
- assets/css/admin.css: small admin-only layout rules. Existing style.css is reused.
- ADMIN-README.md: this guide.

No pre-existing project files are modified. There is no admin registration page and no custom JavaScript.

## Working frontend behavior

- All navigation links, booking-reference anchors and staff-form anchors work.
- Bootstrap layouts, cards, badges, responsive tables and standard form inputs are available.
- Each booking opens its own matching sample details.
- Controls have labels, required attributes and appropriate input types. New staff/password forms declare an 8-character minimum.
- Each status-change form identifies its staff member and includes an explicit confirmation checkbox.

## UI-only behavior

The project contains no backend, database or persistent booking records. All admin records are samples. Three booking references, dates, venues, statuses and headline amounts reuse the existing static my-bookings.html examples; additional names, service selections, histories and charge breakdowns are illustrative.

The summary shows 7 requests, 1 pending, 1 confirmed and 1 completed. The other 4 requests have the remaining statuses. There are 3 sample staff, 2 active; staff totals exclude Super Admin. Upcoming Events includes only the confirmed future booking.

All submit buttons and Logout are deliberately disabled. Forms use POST placeholders and do not send credentials in URL query strings. Do not enable submission until a real protected endpoint replaces action="#". Do not enter actual passwords into this preview.

Login/error handling, staff creation, staff activation/deactivation, password updates, settings changes, filtering, status changes, quotations and internal-note editing are not implemented. No successful database result is simulated. Password confirmation equality cannot be checked with basic HTML alone; it must be checked on the server. Native validation attributes do not replace server validation.

The sidebar demonstrates the Super Admin layout. It is not an authorization system. The backend must render navigation for the authenticated role: Staff gets bookings and permitted staff information; Manager additionally gets permitted quotation/catalogue operations; Super Admin gets staff and restricted settings management. Do not implement protection by hiding HTML or CSS.

## Backend/database work remaining

1. Add a backend using the project's eventual course-approved architecture; none exists to reuse.
2. Create users/roles with unique email or username, password hash, active status and created date. Seed the initial Super Admin once using credentials supplied outside frontend source. Store only a password hash.
3. Add secure login sessions and logout. Verify password hashes; reject inactive accounts and invalid credentials; redirect successful logins to the dashboard. Protect direct page requests and POST endpoints.
4. Enforce Staff, Manager and Super Admin permissions on the server. Protect Super Admin from staff deactivation/account-management actions.
5. Validate required values, unique email, permitted roles, password length and matching confirmation before creating accounts or updating passwords. Hash passwords and never return existing passwords.
6. Persist staff activation/reactivation without deleting accounts, and provide real success/error messages after operations.
7. Store booking references, customer contact details, events, selected services, itemized PKR prices, budgets, status histories and internal notes. Retrieve the requested record on the server rather than using sample anchors.
8. Derive dashboard counts/upcoming events from records and implement status filtering with ordinary server-rendered GET forms.
9. Store approved settings and apply booking rules/prices only after integration is implemented and tested. Keep internal notes out of customer responses.
10. Use protected POST requests with CSRF protection for mutations, validate data, escape rendered values and keep credentials/secrets outside public files.

## Manual checks

- Open all six pages; follow every sidebar, customer-website, booking and staff-action link.
- Try narrow/mobile and desktop browser widths. Tables should scroll inside their containers.
- Verify the sample status badges, guest counts, PKR totals and dashboard counts match.
- Check labels and required/minlength attributes. Disabled buttons intentionally cannot run validation or save data.
- Press Enter inside a preview form: it must not submit or navigate.
- Verify no scripts, plaintext admin passwords or fake successful operations have been added.
- Once a backend exists, test valid/invalid login, direct unauthorized access, all role restrictions, staff mutations, password matching/hashing, inactive login rejection, real records and logout.

## Verification completed

- Static checks passed for all 6 HTML pages, 83 local links, 9 preview forms and 27 labelled controls.
- All 7 booking detail records match their table rows; component prices sum to estimated totals. Dashboard and staff counts agree.
- Headless Chrome passed 18 layout checks: all 6 pages at widths of 1440, 390 and 320 pixels. Tables scroll within their containers.
- Browser checks passed for all 7 booking links and 9 staff action links. Enter-key checks on login, add-staff, password and settings forms did not submit.
- Desktop/mobile screenshots were inspected. No custom scripts or admin password values were added.
- All 38 pre-existing project files were checked against their original SHA-256 hashes and remained unchanged.
