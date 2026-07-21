# Lab 10 - Implementation Plan

## 1. Project Information

- **Group name:** DRUK
- **Project title:** Smart Campus Event Hub
- **Repository link:** https://github.com/sonamd6807456/ICT105-DRUK-MVP
- **Selected platform/tools:** HTML5, CSS3, JavaScript, GitHub, browser `localStorage`, Visual Studio Code, and browser developer tools
- **Backend status:** Simulated backend using browser `localStorage` and JavaScript sample data

---

## 2. Prototype Scope for Sprint 1

The following features will be implemented or improved during Lab 10.

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage | FR-01 | US-01 | `prototype/index.html` | Implemented |
| Student Login | FR-02 | US-02 | `prototype/login.html` | Implemented |
| Browse Campus Events | FR-03 | US-03 | `prototype/events.html` | Implemented |
| Event Details | FR-04 | US-04 | `prototype/event-details.html` | Implemented |
| Event Registration | FR-05 | US-05 | `prototype/register-event.html` | Implemented |
| Student Profile | FR-06 | US-06 | `prototype/profile.html` | Implemented |
| Submit Event Review | FR-07 | US-07 | `prototype/review.html` | Implemented |
| Student Dashboard | FR-08 | US-08 | `prototype/dashboard.html` | Implemented |
| Admin Dashboard | FR-09 | US-09 | `prototype/admin-dashboard.html` | Implemented |
| Event Management | FR-10 | US-10 | `prototype/manage-events.html` | Implemented |

---

## 3. Implementation Approach

### Frontend

The Smart Campus Event Hub will be developed using HTML, CSS, and JavaScript. All pages will use a shared stylesheet and reusable navigation components to provide a consistent user experience.

### Data Source / Storage

The prototype will use browser **localStorage** to simulate event data, user accounts, registrations, reviews, and administrator records. Sample data will be loaded through JavaScript.

### Event Registration

Students can browse events, view event details, and register for activities. Registration data will be stored in localStorage and confirmation messages will be displayed after successful registration.

### Administrator Functions

Administrators can create, edit, update, and delete campus events through the Admin Dashboard. Administrator access will be simulated using role-based login.

### Search and Filter

JavaScript search functions will allow users to search events by keyword, category, organizer, and date. Filters will dynamically update the event listing.

### Validation

HTML validation and JavaScript validation will ensure required fields are completed before forms are submitted. Input data will be checked before saving to localStorage.

### Screenshots and Evidence

Screenshots will be captured for:

- Homepage
- Login
- Events Page
- Event Details
- Event Registration
- Student Dashboard
- Student Profile
- Event Review
- Admin Dashboard
- Event Management

Screenshots will be stored inside:

```
screenshots/
```

and referenced in the implementation documentation.

---

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| **Sonam Deki** | Manage GitHub repository, update documentation, implement Search & Filter improvements, update README, Weekly Logbook, Implementation Plan, and feature documentation. | GitHub Issues, README.md, docs/, prototype improvements |
| **Kinley Zam** | Develop frontend pages including Homepage, Login, Event Registration, Student Profile, and improve UI/UX design. Capture required screenshots. | HTML/CSS files, screenshots/, prototype pages |
| **Tenzin Dema** | Implement JavaScript functionality including localStorage, Event Management, Admin Dashboard, Student Dashboard, validation, and testing. | JavaScript files, Admin Dashboard, Event Management modules |

---

## 5. Risks or Blockers

| Risk or Blocker | Impact | Planned Solution |
|---|---|---|
| No production backend | User accounts and registrations are stored only in localStorage. | Continue using localStorage simulation and document backend requirements. |
| Unauthorized administrator access | Students could potentially access admin pages. | Simulate role-based access control using JavaScript. |
| Duplicate event records | Multiple identical events may appear. | Add duplicate event validation before saving new events. |
| Search filters may confuse users | Users may struggle to find events efficiently. | Improve filter labels and event categories. |
| Event registration errors | Incorrect or incomplete data may be submitted. | Add HTML and JavaScript validation. |
| Mobile responsiveness | Dashboard and tables may not display correctly on small devices. | Test responsive layouts across multiple screen sizes. |
| Team merge conflicts | Multiple contributors may edit the same files. | Use GitHub Issues, separate branches, and review pull requests before merging. |

---

## Sprint 1 Completion Target

Sprint 1 will be considered complete when:

- All prototype pages are fully functional.
- Students can browse, search, register, and review events successfully.
- Administrators can manage campus events.
- All requirement IDs (FR-01 to FR-10) are implemented and traceable.
- Screenshots are captured and uploaded.
- Documentation is updated.
- GitHub Issues are completed.
- Team contribution evidence is available in the repository.
