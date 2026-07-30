# Final Prototype Report

## 1. Project Title

**Smart Campus Event Hub**

---

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|------|------|-------------------|-----------------|
| **Sonam Deki** | **Product Lead** | Led product planning and documentation, coordinated prototype development and updates, contributed to the landing page content and project communication, developed the demo script and user testing plan, maintained the weekly logbook, prepared the final improvement list, and supported feature implementation and testing throughout the MVP development. | `prototype/`, `landing-page/`, `docs/demo-script.md`, `docs/user-testing-plan.md`, `docs/weekly-logbook.md`, `data/final-improvement-list.csv`, `diagrams/user-testing-flow.mmd`,`screenshots/`, GitHub commits, GitHub Issues, documentation updates |
| **Tenzin Dema** | **Technical Lead** | Led technical implementation and prototype enhancements, contributed to the landing page implementation and integration, supported feature development and testing, prepared the user testing results, case study brief, final improvement documentation, final prototype report, and demo presentation materials. | `prototype/`, `landing-page/`, `docs/final-improvement-list.md`, `docs/user-testing-results.md`, `docs/final-prototype-report.md`, `Case_Study_Brief_Smart_Campus_Event_Hub.md`, `data/user-testing-result-sample.csv`, `pitch/demo-outline.md`, GitHub commits, GitHub Issues, testing evidence |
| **Kinley Zam** | **UI/UX Lead** | Led the UI/UX design and user experience, developed the landing page interface, contributed to prototype interface implementation and final prototype updates, prepared the sales scenario, README updates, demo flow diagram, final demo link, user testing template, marketing documentation, screenshots, and presentation materials. | `prototype/`, `landing-page/index.html/CSS/JS`,  `docs/sales-scenario.md`, `README.md`, `prototype/final-demo-link.md`, `diagrams/demo-flow.mmd`, `data/user-testing-result-template.csv`, `screenshots/`, GitHub commits, GitHub Issues, documentation updates |

---

## 3. Problem Background

Campus event information at Rangsit University is often scattered across multiple communication channels, including social media, messaging applications, email announcements, and printed posters. As a result, many students—especially first-year, international, and exchange students—miss important academic, social, and extracurricular events.

Customer interviews and survey validation conducted during Labs 02 and 03 confirmed that students need a centralized platform to discover, search, register for, and manage campus events efficiently.

To address this problem, the Smart Campus Event Hub was developed as an interactive web prototype that centralizes campus event information and improves student participation.

---

## 4. Target Users

### Primary Users

- First-year undergraduate students at Rangsit University
- International students
- Exchange students

### Secondary Users

- Student clubs and organizations
- Event organizers
- Campus administrators

These users require a centralized platform that simplifies event discovery, registration, participation tracking, and event management.

---

## 5. Evidence Summary

The project was supported through multiple validation activities completed during the semester.

Evidence collected includes:

- Customer interviews
- Student surveys
- Customer validation activities
- MVP experiment results
- Prototype usability testing
- User feedback forms
- Startup metrics
- GitHub implementation evidence

The findings showed that students frequently miss campus events because announcements are scattered across different communication platforms. User testing also identified improvements needed in event search, registration confirmation, dashboard navigation, and interface consistency.

---

## 6. Final Prototype Overview

Smart Campus Event Hub is an interactive and responsive web prototype developed using:

- HTML5
- CSS3
- JavaScript (ES6)
- Browser localStorage

The prototype allows users to:

- Create an account
- Log in
- Browse campus events
- Search and filter events
- View event details
- Register for events
- View registered and completed events
- Submit event reviews after attending completed events
- Access About and Contact pages
- Manage events through an administrator dashboard

Browser localStorage is used to simulate persistent data storage during prototype execution.

---

## 7. Requirement Traceability Summary

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Homepage | US-01 | Homepage Screenshot | Completed |
| FR-02 | User Login | US-02 | Login Page | Completed |
| FR-03 | User Registration | US-03 | Sign Up Page | Completed |
| FR-04 | Browse Events | US-04 | Events Page | Completed |
| FR-05 | Search and Filter Events | US-05 | Events Page | Completed |
| FR-06 | Event Details | US-06 | Event Details Page | Completed |
| FR-07 | Event Registration | US-07 | Registration Confirmation | Completed |
| FR-08 | My Events Dashboard | US-08 | Dashboard Screenshot | Completed |
| FR-09 | Admin Event Management | US-09 | Admin Dashboard | Completed |
| FR-10 | Input Validation | US-10 | Form Validation | Completed |
| FR-11 | Confirmation and Feedback Messages | US-11 | Notification Messages | Completed |
| FR-12 | Event Data Storage | US-12 | localStorage Implementation | Completed |
| FR-13 | About and Contact Pages | US-13 | About & Contact Pages | Completed |
| FR-14 | Responsive User Interface | US-14 | Responsive Testing | Completed |
| FR-15 | Event Review and Feedback | US-15 | Review Submission | Completed |
| FR-16 | Consistent User Interface Design | US-16 | UI Consistency Review | Completed |
| FR-17 | Privacy and Responsible Data Collection | US-17 | Privacy Notice | Completed |
| FR-18 | Prototype Traceability | US-18 | Project Documentation | Completed |

---

## 8. Data Handling

The prototype uses browser localStorage to simulate system data.

Data handled includes:

- User accounts
- Event records
- Event registrations
- Event reviews
- Administrator-managed event information

Users can create accounts, browse events, register for events, and submit reviews after attending completed events. Administrators can create, edit, update, approve, cancel, and delete event records.

Only simulated data is stored. No real personal information is collected.

---

## 9. Validation and User Testing Results

User testing involved:

- First-year students
- International students
- Exchange students
- Student club organizers
- Campus administrators

Participants completed the following tasks:

- Browse available events
- Search and filter events
- View event details
- Register for an event
- View the My Events Dashboard
- Submit an event review
- Manage events using the administrator dashboard

Feedback collected during testing indicated that users found the system easy to navigate. Improvements made included clearer search functionality, improved registration confirmation messages, better dashboard organization, and enhanced interface consistency.

---

## 10. Startup/Product Metrics

The following metrics were used to evaluate the prototype:

- Landing page visitors
- Try Demo button clicks
- User registrations
- Event registrations
- User testing completion rate
- Task success rate
- Feedback submissions
- User satisfaction score

These metrics helped the team measure user engagement and identify areas for improvement before the final release.

---

## 11. Business Value and Venture Direction

The Smart Campus Event Hub creates value by providing a centralized platform for campus event management.

The platform helps students:

- Discover campus events more easily
- Register for activities efficiently
- Track participation through a personal dashboard
- Submit event reviews after participation

It also supports student clubs and campus administrators by simplifying event creation and management.

Future development may include:

- University authentication integration
- Real database support
- QR code attendance
- Push notifications
- Calendar synchronization
- Mobile application development
- Analytics dashboard

---

## 12. Limitations and Future Improvements

### Current Limitations

- Browser localStorage is used instead of a production database.
- User authentication is simulated.
- No real-time notification system.
- No integration with university systems.
- Limited administrator permissions.
- Prototype uses sample data for demonstration purposes.

### Future Improvements

- Integrate a cloud database.
- Implement secure authentication.
- Add QR code event check-in.
- Provide push notifications.
- Synchronize with university calendars.
- Develop a mobile application.
- Expand administrator analytics.
- Support real-time event updates.

The Smart Campus Event Hub successfully demonstrates the minimum functional and technical requirements defined in the project while providing a solid foundation for future development beyond the classroom MVP.
