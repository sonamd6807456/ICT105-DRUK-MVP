# Feature Implementation Status — Lab 11

| Req ID | Required Functionality | Screen / Module | Lab 10 Status | Lab 11 Status | Owner | Evidence | Notes / Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Smart Campus Event Hub homepage showing project purpose, target users, problem, and main actions | Homepage | Completed | Completed and improved | Tenzin Dema | `prototype/index.html`, `screenshots/homepage.png` | Homepage clearly introduces Smart Campus Event Hub and provides access to Browse Events, Register, Dashboard, Profile, and Organizer functions. |
| FR-02 | Complete event discovery and registration user pathway | Main User Flow | Completed | Completed | Tenzin Dema | All prototype HTML pages; `screenshots/event-flow.png` | Main flow works from Homepage → Browse Events → Search/Filter → Event Details → Register → Confirmation → Dashboard/Profile. |
| FR-03 | Event registration and organizer event submission | Registration Form / Organizer Dashboard | Completed | Completed and improved | Tenzin Dema | `prototype/register.html`, `prototype/admin.html`, `screenshots/input-form.png` | Students can register for events and organizers/admins can create and submit event information. |
| FR-04 | Event and registration data storage or record management | JavaScript Data Layer / localStorage | Completed | Completed (prototype) | Tenzin Dema | `prototype/js/storage.js`, `prototype/js/events.js` | JavaScript arrays and browser localStorage simulate event and registration data. A backend database is out of scope for the current MVP. |
| FR-05 | View available campus events in a structured list | Event Listing | Completed | Completed and improved | Tenzin Dema | `prototype/events.html`, `screenshots/record-list.png` | Event cards display realistic event titles, categories, dates, locations, organizers, and registration statuses. |
| FR-06 | Search, filter, and category functionality | Search / Filter Module | Completed | Completed and improved | Tenzin Dema | `prototype/js/events.js`, `screenshots/search-filter.png` | Keyword search and category filtering are implemented. Sprint 2 improvements include clearer filter labels and improved keyword matching. |
| FR-07 | Detailed information for each selected event | Event Detail View | Completed | Completed and improved | Tenzin Dema | `prototype/event-details.html`, `screenshots/detail-view.png` | Event details include description, date, time, venue, organizer, capacity, available seats, status, and registration action. A campus map may be considered for future improvement. |
| FR-08 | Event and participation status tracking | Status Module / Dashboard / Profile | Completed | Completed and improved | Tenzin Dema | `prototype/dashboard.html`, `prototype/profile.html`, `screenshots/status-tracking.png` | Event and registration statuses such as Pending, Approved, Rejected, Open for Registration, Full, Registered, Attended, and Completed are simulated. |
| FR-09 | Organizer and administrator event management | Organizer / Admin Dashboard | Completed | Completed and improved | Tenzin Dema | `prototype/admin.html`, `screenshots/admin-view.png` | Organizers/admins can create, edit, approve, update, and delete event records. Registration management is simulated through the dashboard. |
| FR-10 | Basic input validation and error prevention | Registration / Event Creation Forms | Completed | Completed and improved | Tenzin Dema | `prototype/js/register.js`, `prototype/js/admin.js`, `screenshots/input-validation.png` | Required fields, invalid input, date constraints, capacity values, and registration information are checked before submission. |
| FR-11 | Confirmation and feedback messages | Registration / Event Management Flow | Completed | Completed and improved | Tenzin Dema | `prototype/js/register.js`, `screenshots/confirmation-message.png` | Clear feedback messages are shown for successful registration, event creation, event updates, deletion, full events, and invalid form submissions. |
| FR-12 | Dashboard, summary, and simple analytics view | Student Dashboard / Organizer Dashboard | Completed | Completed and improved | Tenzin Dema | `prototype/dashboard.html`, `screenshots/dashboard.png` | Dashboard displays total events, upcoming events, registered participants, popular categories, and participation information. Additional statistics were added based on testing feedback. |
| FR-13 | Consistent user interface design | All Prototype Screens | Completed | Completed and improved | Kinley Zam | `prototype/css/style.css`, all screenshots | Shared navigation, typography, buttons, cards, spacing, layout, and visual styles are used across the prototype. |
| FR-14 | Responsive and mobile-friendly design | All Prototype Screens | Completed | Completed and improved | Kinley Zam | `screenshots/responsive-mobile-view.png`, `prototype/css/style.css` | Responsive layouts support desktop, tablet, and mobile screen sizes. Additional visual testing is recommended before final submission. |
| FR-15 | Privacy and responsible data handling | Registration Form / Privacy Notice | Completed | Completed and improved | Sonam Deki | `prototype/register.html`, `screenshots/privacy-notice.png` | The prototype collects only necessary registration information, avoids publicly displaying private student data, and provides a basic privacy notice. |
| FR-16 | Final prototype traceability | Documentation / README / GitHub | Completed | Completed and improved | Sonam Deki | `README.md`, `docs/system-requirements.md`, `docs/user-stories.md`, `docs/mvp-feature-list.md` | Prototype screens and features are connected to system requirements, user stories, MVP features, usability testing evidence, and project documentation. |

## Sprint 2 Issues Addressed

1. Search and category filters needed clearer labels and improved visibility.
2. Keyword search required better matching instead of relying mainly on exact keywords.
3. Registration completion feedback needed to be clearer so users knew when registration was successful.
4. Event capacity and available seats needed to be displayed more clearly.
5. The dashboard needed additional event statistics and a clearer summary layout.
6. Event details could be improved by adding a campus map or clearer location information.
7. Organizer event creation and management workflows needed clearer navigation.
8. Responsive layouts required additional testing on mobile and smaller screen sizes.
9. Browser localStorage was used instead of a real backend database, so data is limited to the same browser and device.
10. Authentication and role separation are simulated on the frontend and are not secure enough for production deployment.
11. Notification and reminder features are simulated because the current MVP does not use a real notification service.
12. Calendar integration and email confirmation remain future improvements outside the current MVP scope.

13. ## Status Summary

- **Completed or completed as a prototype:** 16 requirements.
- **Partially completed:** No core requirements are partially completed for the current frontend MVP.
- **Main limitations:** browser-only localStorage, simulated authentication, client-side role checking, simulated notifications and reminders, no backend database, no real email service, and no external calendar integration.
- **Main usability improvements:** clearer search and filter controls, improved keyword matching, clearer registration confirmation, clearer event capacity information, and improved dashboard statistics.
- **Sprint 2 decision:** Smart Campus Event Hub is ready for Lab 11 classroom demonstration after final manual testing of navigation, event discovery, search/filter functions, event registration, organizer management, dashboard statistics, responsive layouts, and privacy notices.
