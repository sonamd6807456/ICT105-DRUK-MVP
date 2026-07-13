# Technical Architecture

## Project Title

**Smart Campus Event Hub – Campus Event Discovery and Registration Platform**

---

## 1. Selected Prototype Platform

**Frontend-only: HTML/CSS/JavaScript**

Smart Campus Event Hub will be implemented as a clickable web prototype using static HTML pages, shared CSS styling, and JavaScript for simple interactions such as page navigation, event search, category filtering, form validation, registration simulation, and dashboard display.

---

## 2. Architecture Decision

A frontend-only architecture is suitable for Smart Campus Event Hub because the current MVP focuses on demonstrating the user journey for discovering campus events, viewing event information, registering for activities, and managing events rather than developing a complete production system.

This platform is appropriate because:

- The team can efficiently develop HTML, CSS, and JavaScript pages within the semester timeline.
- GitHub Pages can host the prototype without requiring backend configuration.
- The prototype clearly demonstrates all required user screens and navigation.
- Event information, registrations, and dashboard statistics can be simulated using sample data and JavaScript.
- It matches the MVP scope, which excludes production authentication, live databases, AI recommendations, real-time notifications, and calendar synchronization.

---

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | Provides the Smart Campus Event Hub pages, navigation bar, event cards, buttons, typography, and responsive design. | HTML, CSS, JavaScript | FR-01, FR-13, FR-14 |
| Event Registration Form | Allows students to register for campus events through a structured registration form with required fields and validation. | HTML Form, JavaScript Validation | FR-10, FR-11 |
| Data Storage | Uses sample/static event records and simulated registration data instead of a production database. | JavaScript arrays / static sample records | FR-04, FR-05 |
| Event Listing | Displays campus event cards with title, category, date, location, organizer, and event status. | HTML, CSS, JavaScript | FR-05, FR-06 |
| Event Detail View | Shows complete information for a selected event including description, schedule, venue, organizer, available seats, and registration status. | `event-details.html`, HTML, CSS, JavaScript | FR-07, FR-08 |
| Admin Event Management | Simulates event creation, editing, approval, deletion, and registration management through an organizer dashboard. | Static dashboard page, JavaScript | FR-03, FR-09 |
| Dashboard / Summary | Displays total events, upcoming events, participant counts, popular categories, and attendance summaries. | `dashboard.html`, HTML, CSS, JavaScript | FR-12 |

---

## 4. What Will Be Fully Implemented?

The final prototype will fully implement the following frontend features:

- Homepage / Landing Page
- Navigation between all prototype pages
- Event Listing Page
- Search and Filter functionality
- Event Detail Page
- Event Registration Form
- Required field validation for event registration
- Organizer/Admin Event Management Page
- Dashboard Summary Page
- User Profile & Participation History Page
- Consistent interface design across all pages
- Responsive layout for desktop and smaller screens

### Prototype Files

- `prototype/index.html`
- `prototype/events.html`
- `prototype/event-details.html`
- `prototype/register.html`
- `prototype/dashboard.html`
- `prototype/admin.html`
- `prototype/profile.html`

---

## 5. What Will Be Simulated?

Because Smart Campus Event Hub is a frontend-only MVP, the following features will be simulated:

- User registration and login
- Event registration saving
- Event database
- Admin event approval and management
- Dashboard statistics
- User account/session behavior
- Event status updates
- Notification and reminder messages
- Data updates after form submission

The prototype will use static sample event data and JavaScript behavior to demonstrate how these features would work in a complete system.

---

## 6. Final Prototype Risk

The biggest technical risk is that the prototype may not demonstrate realistic data flow because it does not use a real backend server or live database.

The team will reduce this risk by:

- Using realistic sample campus event records.
- Demonstrating complete user pathways from browsing events to registration.
- Adding JavaScript validation, search, and filtering functionality.
- Keeping the interface consistent across all pages.
- Clearly documenting which features are fully implemented and which are simulated.
- Aligning every screen with the system requirements, user stories, MVP features, and feature-to-requirement mapping.
