# Lab 10 - Implementation Plan

## 1. Project Information

- **Group Name:** DRUK
- **Project Title:** Smart Campus Event Hub
- **Repository Link:** https://github.com/sonamd6807456/ICT105-DRUK-MVP
- **Selected Platform/Tools:** HTML5, CSS3, JavaScript, GitHub, browser `localStorage`, Visual Studio Code, and browser developer tools
- **Backend Status:** Simulated backend using browser localStorage and JavaScript sample data.

---

## 2. Prototype Scope for Sprint 1

The following features will be implemented or improved during Lab 10.

| Feature | Requirement ID | User Story ID | Screen / Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage | FR-01 | US-01 | prototype/index.html | Implemented |
| User Login | FR-02 | US-02 | prototype/login.html | Implemented |
| User Registration (Sign Up) | FR-03 | US-03 | prototype/signup.html | Implemented |
| Browse Events | FR-04 | US-04 | prototype/events.html | Implemented |
| Search & Filter Events | FR-05 | US-05 | prototype/events.html | Implemented |
| Event Details | FR-06 | US-06 | prototype/event-details.html | Implemented |
| Event Registration | FR-07 | US-07 | Registration Module | Implemented |
| My Events Dashboard | FR-08 | US-08 | prototype/dashboard.html | Implemented |
| Admin Event Management | FR-09 | US-09 | prototype/admin.html | Implemented |
| Input Validation | FR-10 | US-10 | Registration & Admin Forms | Implemented |
| Confirmation & Feedback Messages | FR-11 | US-11 | Registration & Forms | Implemented |
| Event Data Storage | FR-12 | US-12 | JavaScript localStorage | Implemented |
| About & Contact Pages | FR-13 | US-13 | `prototype/about.html`, prototype/contact.html | Implemented |
| Responsive User Interface | FR-14 | US-14 | All Pages | Implemented |
| Event Review & Feedback | FR-15 | US-15 | My Events (Completed Events) | Implemented |
| Consistent UI Design | FR-16 | US-16 | Shared UI Components | Implemented |
| Privacy & Responsible Data Collection | FR-17 | US-17 | Registration Forms | Implemented |
| Prototype Traceability | FR-18 | US-18 | Documentation | Implemented |

---

## 3. Implementation Approach

### Frontend

The Smart Campus Event Hub is developed using HTML5, CSS3, and JavaScript. Shared stylesheets, reusable navigation components, and modular JavaScript files provide a consistent user experience across all pages.

### Data Source / Storage

The prototype uses browser **localStorage** to simulate:

- User accounts
- Event records
- Event registrations
- Event reviews
- Administrator-managed event data

No production database is used during the prototype stage.

### User Authentication

Students can create an account and log in using simulated authentication. User information is stored locally using browser `localStorage`.

### Event Registration

Students can:

- Browse campus events
- Search and filter events
- View event details
- Register for available events
- Receive confirmation messages after successful registration

### My Events Dashboard

Users can:

- View registered events
- Track participation status
- View completed events
- Submit ratings and reviews **only after attending an event whose status is marked as Completed**

### Administrator Functions

Administrators can:

- Create events
- Edit events
- Update event information
- Approve events
- Cancel events
- Delete events

Administrator access is simulated using frontend role-based navigation.

### Search and Filter

JavaScript search functions allow users to search events by keyword and filter events by category.

### Validation

HTML5 validation and JavaScript validation ensure:

- Required fields are completed
- Valid email format
- Student ID validation
- Password confirmation
- Registration validation
- Event form validation

### Screenshots and Evidence

Screenshots will be captured for:

- Homepage
- Login
- Sign Up
- Event Listing
- Search & Filter
- Event Details
- Event Registration
- My Events Dashboard
- Event Review
- Admin Dashboard
- Input Validation
- Confirmation Messages
- About Page
- Contact Page
- Responsive Mobile View

Screenshots will be stored inside:

text
screenshots/

Recommended screenshot names:

text
homepage.png
login.png
signup.png
events.png
search-filter.png
event-details.png
event-registration.png
dashboard.png
event-review.png
admin-dashboard.png
input-validation.png
confirmation-message.png
about.png
contact.png
responsive-mobile-view.png

These screenshots will be referenced throughout the project documentation.

---

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| **Sonam Deki** | Manage the GitHub repository, update documentation, improve Search & Filter, update README, Weekly Logbook, Implementation Plan, and project documentation. | GitHub commits, Issues, README, documentation updates, prototype improvements |
| **Kinley Zam** | Develop Homepage, Login, Sign Up, Event Registration, My Events Dashboard, About and Contact pages, improve UI/UX design, and capture screenshots. | HTML/CSS files, screenshots, prototype pages |
| **Tenzin Dema** | Implement JavaScript functionality, localStorage, Admin Event Management, validation, responsive improvements, and testing. | JavaScript modules, admin functions, testing evidence |

---

## 5. Risks or Blockers

| Risk or Blocker | Impact | Planned Solution |
|---|---|---|
| No production backend | User accounts and registrations are stored only in browser localStorage. | Continue using localStorage simulation and document backend requirements. |
| Simulated authentication | Authentication is not secure for production deployment. | Clearly document this prototype limitation. |
| Duplicate event records | Multiple identical events may appear. | Validate duplicate event entries before saving. |
| Search filters may confuse users | Users may struggle to locate events efficiently. | Improve filter labels and event categories. |
| Invalid registration data | Incorrect or incomplete information may be submitted. | Use HTML5 and JavaScript validation. |
| Mobile responsiveness | Some layouts may not display correctly on smaller screens. | Test across desktop, tablet, and mobile devices. |
| Team merge conflicts | Multiple contributors may edit the same files. | Use GitHub branches, pull requests, and code reviews before merging. |

---

## Sprint 1 Completion Target

Sprint 1 will be considered complete when:

- All prototype pages are fully functional.
- Users can create an account and log into the system.
- Users can browse, search, and filter campus events.
- Users can view detailed event information.
- Users can register for events successfully.
- Users can manage their registered events through My Events.
- Users can submit ratings and reviews only after attending completed events.
- Administrators can manage campus events.
- Event data is stored using browser `localStorage`.
- Input validation and confirmation messages work correctly.
- Responsive layouts function across desktop, tablet, and mobile devices.
- Screenshots are captured and uploaded.
- Documentation is updated.
- All requirements (FR-01 to FR-18) are implemented and traceable.
- Team contribution evidence is available in the repository.
