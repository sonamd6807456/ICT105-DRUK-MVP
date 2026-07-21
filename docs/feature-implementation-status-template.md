# Lab 10 - Feature Implementation Status

## Purpose

Use this file to prove that your prototype implementation is connected to `system-requirements.md`.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | Homepage (`index.html`) | **Implemented** | `prototype/index.html`; `screenshots/home.png` | Final usability review and verify all navigation links. |
| FR-02 | Primary user pathway | Homepage → Events → Event Details → Event Registration | **Implemented** | `prototype/index.html`; `prototype/events.html`; `prototype/event-details.html`; `prototype/register.html` | Verify the complete user journey from browsing to registration. |
| FR-03 | User input or data submission | Login, Signup, Profile, Event Registration Forms | **Implemented** | `prototype/login.html`; `prototype/signup.html`; `prototype/profile.html`; `prototype/register.html` | Perform final validation testing for all forms. |
| FR-04 | Data storage or simulated storage | localStorage (Users, Registrations, Favorites) | **Implemented** | `prototype/js/storage.js`; `prototype/js/main.js` | Verify data persistence after page refresh. |
| FR-05 | View records or information list | Events Listing and Favorites | **Implemented** | `prototype/events.html`; `prototype/favorites.html` | Confirm all event information displays correctly. |
| FR-06 | Search, filter, or category function | Search Bar and Category Filter | **Implemented** | `prototype/events.html`; `prototype/js/main.js` | Test search accuracy and category filtering with multiple events. |
| FR-07 | Detail view for each record | Event Details Page | **Implemented** | `prototype/event-details.html` | Verify every event card links to the correct details page. |
| FR-08 | Status or progress tracking | Student Dashboard | **Implemented** | `prototype/dashboard.html`; registration status section | Verify upcoming and registered events display correctly. |
| FR-09 | Admin or manager function | Admin Dashboard, Manage Events, Manage Users, Manage Reviews | **Implemented** | `prototype/admin-dashboard.html`; `prototype/manage-events.html`; `prototype/manage-users.html`; `prototype/manage-reviews.html` | Complete final testing of all admin management functions. |
| FR-10 | Validation and error prevention | Login, Signup and Registration Forms | **Implemented** | HTML required attributes; JavaScript validation | Verify invalid inputs and duplicate registrations are prevented. |
| FR-11 | Confirmation or feedback message | Login, Registration and Favorite Notifications | **Implemented** | JavaScript success alerts/toast notifications | Ensure confirmation messages appear after every successful action. |
| FR-12 | Dashboard or summary view | Student Dashboard and Admin Dashboard | **Implemented** | `prototype/dashboard.html`; `prototype/admin-dashboard.html` | Verify dashboard statistics update correctly. |
| FR-13 | UI consistency | Shared Navigation, Cards, Buttons, Forms and Layout | **Implemented** | `prototype/css/style.css`; shared UI components | Complete final visual consistency check across all pages. |
| FR-14 | Mobile-friendly/responsive design | Responsive Website Layout | **Implemented** | `prototype/css/responsive.css`; responsive navigation | Test layout on desktop, tablet and mobile devices. |
| FR-15 | Privacy and responsible data handling | Login, Signup, Profile and Simulated Data Storage | **Implemented** | `docs/data-handling-policy.md`; authentication pages; localStorage implementation | Verify privacy notice and responsible handling of simulated user data. |
| FR-16 | Final prototype traceability | Documentation, Screenshots and GitHub Repository | **Implemented** | `docs/system-requirements.md`; GitHub commits; screenshots; prototype files | Confirm all documentation and evidence match the final prototype. |

---

## Summary

### Features implemented
- Homepage
- User Login
- User Signup
- Browse Campus Events
- Event Details
- Event Registration
- Search Events
- Category Filter
- Favorites
- Student Dashboard
- Admin Dashboard
- Manage Events
- Manage Users
- Manage Reviews
- Responsive Website Layout
- Simulated Data Storage using localStorage

### Features partially working
- None. All planned MVP features have been implemented in the current prototype.

### Features not yet started
- None. All core functional requirements for the MVP have been completed.

### Features requiring instructor feedback
- Whether client-side `localStorage` satisfies the simulated data storage requirement (FR-04).
- Whether the simulated authentication and admin functions meet the MVP expectations.
- Whether the privacy and responsible data handling implementation satisfies the project requirements.
- Whether the final screenshots and GitHub documentation provide sufficient evidence for assessment.
