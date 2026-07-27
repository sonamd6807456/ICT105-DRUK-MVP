# Feature Implementation Status — Lab 11

| Req ID | Required Functionality | Screen / Module | Lab 10 Status | Lab 11 Status | Owner | Evidence | Notes / Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Smart Campus Event Hub Homepage | Homepage | Completed | Completed and Improved | Tenzin Dema | `prototype/index.html`, screenshots/homepage.png | Homepage introduces the system, project purpose, navigation, featured events, and quick access buttons. |
| FR-02 | User Login | Login Page | Completed | Completed and Improved | Kinley Zam | `prototype/login.html`, screenshots/login.png | Users can log in using simulated authentication and access their dashboard. |
| FR-03 | User Registration (Sign Up) | Sign Up Page | Completed | Completed and Improved | Kinley Zam | `prototype/signup.html`, screenshots/signup.png | New users can create an account after completing all required fields. |
| FR-04 | Browse Campus Events | Events Page | Completed | Completed and Improved | Tenzin Dema | `prototype/events.html`, screenshots/events.png | Users can browse all available campus events displayed in event cards. |
| FR-05 | Search and Filter Events | Search & Filter Module | Completed | Completed and Improved | Sonam Deki | `prototype/events.html`, screenshots/search-filter.png | Users can search events by keyword and filter them by category. |
| FR-06 | Event Details | Event Details Page | Completed | Completed and Improved | Kinley Zam | `prototype/event-details.html`, screenshots/event-details.png | Detailed event information including organizer, venue, capacity, available seats, and registration status is displayed. |
| FR-07 | Event Registration | Registration Module | Completed | Completed and Improved | Kinley Zam | `prototype/event-details.html`, screenshots/event-registration.png | Students can successfully register for available events and receive confirmation messages. |
| FR-08 | My Events Dashboard | Dashboard | Completed | Completed and Improved | Kinley Zam | `prototype/dashboard.html`, screenshots/dashboard.png | Dashboard displays registered events, upcoming events, attended events, and completed events. |
| FR-09 | Admin Event Management | Admin Dashboard | Completed | Completed and Improved | Tenzin Dema | `prototype/admin.html`, screenshots/admin-dashboard.png | Administrators can create, approve, edit, update, cancel, and delete events. |
| FR-10 | Input Validation | Registration & Admin Forms | Completed | Completed and Improved | Tenzin Dema | `prototype/js/register.js`, `prototype/js/admin.js`, screenshots/input-validation.png | Required fields, email format, student ID, date validation, and empty fields are validated before submission. |
| FR-11 | Confirmation & Feedback Messages | Registration & Forms | Completed | Completed and Improved | Sonam Deki | `prototype/js/register.js`, screenshots/confirmation-message.png | Success and error messages are displayed after registration, login, event creation, updates, and validation failures. |
| FR-12 | Event Data Storage | JavaScript localStorage | Completed | Completed and Improved | Sonam Deki | prototype/js/storage.js | Browser localStorage stores user accounts, event information, registrations, and completed event reviews. |
| FR-13 | About & Contact Pages | About / Contact | Completed | Completed and Improved | Kinley Zam | `prototype/about.html`, `prototype/contact.html`, `screenshots/about.png`, screenshots/contact.png | Users can access platform information and contact details from dedicated pages. |
| FR-14 | Responsive User Interface | All Pages | Completed | Completed and Improved | Tenzin Dema | `prototype/css/style.css`, screenshots/responsive-mobile-view.png | Responsive layouts work correctly on desktop, tablet, and mobile devices. |
| FR-15 | Event Review & Feedback | Completed Events | Completed | Completed and Improved | Kinley Zam | `prototype/dashboard.html`, screenshots/event-review.png | Students can submit ratings and reviews only after attending completed events. |
| FR-16 | Consistent UI Design | All Prototype Screens | Completed | Completed and Improved | Kinley Zam | `prototype/css/style.css`, all screenshots | Navigation, typography, buttons, spacing, colors, and layouts remain consistent throughout the prototype. |
| FR-17 | Privacy & Responsible Data Collection | Registration Forms | Completed | Completed and Improved | Sonam Deki | `prototype/signup.html`, screenshots/privacy-notice.png | Only essential user information is collected and a privacy notice is displayed before registration. |
| FR-18 | Prototype Traceability | Documentation | Completed | Completed and Improved | Sonam Deki | `README.md`, `docs/system-requirements.md`, `docs/user-stories.md`, docs/implementation-plan.md | Every implemented feature is mapped to functional requirements, user stories, screenshots, and project documentation. |

---

# Sprint 2 Issues Addressed

1. Improved homepage navigation and user flow.
2. Added user registration (Sign Up) with input validation.
3. Improved login validation and simulated authentication.
4. Enhanced event search and category filtering.
5. Improved event card layout and event details.
6. Added clearer registration confirmation messages.
7. Improved dashboard statistics and participation tracking.
8. Added event reviews that become available only after completed events.
9. Improved administrator event management workflow.
10. Added About and Contact pages.
11. Added privacy notice and responsible data collection.
12. Improved responsive layouts for desktop, tablet, and mobile devices.
13. Improved localStorage handling for users, events, registrations, and reviews.
14. Updated documentation to maintain full traceability between requirements, user stories, implementation, and screenshots.

---

# Status Summary

- **Completed or completed as a prototype:** 18 requirements.
- **Partially completed:** None.
- **Main limitations:** Browser localStorage is used instead of a production database. Authentication is simulated and intended only for prototype demonstration. Notifications, email services, QR attendance, calendar synchronization, and backend security remain future improvements.
- **Main usability improvements:** Improved homepage navigation, search and filtering, responsive layouts, dashboard statistics, administrator workflow, confirmation messages, completed-event reviews, and privacy notice.
- **Sprint 2 Decision:** Smart Campus Event Hub is ready for Lab 11 classroom demonstration after final testing of user registration, login, event discovery, search and filtering, event registration, completed-event reviews, administrator management, responsive layouts, privacy notice, and documentation traceability.
