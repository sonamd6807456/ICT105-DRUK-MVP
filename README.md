# Project Name
# Smart Campus Event Hub

A web-based platform developed for the ICT105 Fundamental Technology Entrepreneurship course that helps first-year and international students at Rangsit University discover campus events, register for activities, and stay informed through a centralized event platform.

---

# Project Goal

To develop a web-based Smart Campus Event Hub that enables first-year and international students at Rangsit University to discover campus events, register for activities, and receive timely event information from a single platform.

---

# Project Objectives

- Centralize campus event information into one platform.
- Increase student participation in university activities.
- Reduce missed event registration deadlines.
- Improve communication between students and event organizers.
- Provide a simple, responsive, and user-friendly event management system.

---

# Course Information

| Item | Details |
|------|---------|
| Course Code | ICT105 |
| Course Name | Fundamental Technology Entrepreneurship |
| Instructor | Dr. Herison Surbakti |
| Project Type | 14-Lab Continuous IT Startup MVP Development |

---

# Team Information

## Team Name

**DRUK**

## Team Members

| Name | Role | Responsibilities |
|------|------|------------------|
| Sonam Deki | Product Lead & Documentation Lead | Define the problem, target users, value proposition, requirements, documentation, and project direction. |
| Tenzin Dema | Technical Lead | Develop the prototype, manage GitHub repository, implement JavaScript functionality, and ensure technical feasibility. |
| Kinley Zam | UX/UI Lead & Validation Lead | Design wireframes, prototype interface, conduct customer validation, and improve user experience. |

---

# Project Background

University students frequently miss workshops, competitions, club activities, seminars, and important announcements because event information is distributed across multiple communication channels such as posters, emails, social media, messaging applications, and university websites.

This makes it difficult for students—especially first-year and international students—to stay informed and participate in campus life.

The Smart Campus Event Hub solves this problem by providing a centralized platform where students can browse, search, and register for campus events from one place.

---

# Target Users

## Primary Users

- First-year undergraduate students at Rangsit University.
- International and exchange students unfamiliar with university communication channels.

## Secondary Users

- Student clubs and organizations.
- Campus administrators.
- Event organizers.

---

# Proposed Solution

Smart Campus Event Hub is a browser-based web application that allows students to:

- Discover upcoming campus events.
- Search and filter events.
- View detailed event information.
- Register for activities.
- Track registered events through a personal dashboard.

The platform also enables organizers and administrators to create, update, and manage campus events efficiently.

---

# Technology Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage
- GitHub
- Draw.io
- Figma

---

# Repository Structure

```
ICT105-DRUK-MVP
│
├── docs/
├── prototype/
├── data/
├── diagrams/
├── screenshots/
├── finance/
├── pitch/
├── README.md
└── .gitignore
```

| Folder | Description |
|---------|-------------|
| docs | Project documentation and lab deliverables |
| prototype | HTML, CSS and JavaScript prototype |
| data | Validation datasets and analytics |
| diagrams | User flow and architecture diagrams |
| screenshots | Prototype screenshots |
| finance | Budget planning |
| pitch | Presentation slides |

---

# Weekly Progress

| Lab | Activity | Output | Status |
|------|----------|--------|--------|
| **Lab 01** | Repository Setup & Opportunity Ideas | Repository setup, team profile, GitHub repository structure, initial idea log | Completed |
| **Lab 02** | Opportunity Scanning & NUF Analysis | Opportunity analysis, NUF scoring, technology feasibility mapping, selected project idea | Completed |
| **Lab 03** | Customer Problem Discovery | Target respondent profile, customer discovery survey, problem notes, customer discovery summary, assumption-evidence table | Completed |
| **Lab 04** | User Persona, Requirements & User Stories | User persona, user stories, user flow diagram, functional & non-functional requirements, MVP feature scope, requirement traceability | Completed |
| **Lab 05** | Product Concept & UI/UX Wireframes | Product concept, feature-requirement mapping, wireframe specification, user flow, homepage, event listing, event details, dashboard, admin wireframes, clickable prototype | Completed |
| **Lab 06** | Business Model Canvas & Technical Architecture | Business Model Canvas, customer segment value, feature-value mapping, technical architecture, system architecture diagram, data flow diagram | Completed |
| **Lab 07** | MVP Prototype Development & Experiment Design | Functional HTML/CSS/JavaScript prototype, MVP experiment plan, usability testing plan, critical assumptions, success metrics | Completed |
| **Lab 08** | Customer Validation & Analytics | Customer validation results, analytics summary, Power BI dashboard, user feedback analysis, MVP decision, validation documentation | Completed |
| **Lab 09** | Responsible IT Review | Privacy & data protection review, legal & ethical checklist, security risk assessment, IP review, risk register, updated requirements, case study brief | Completed |
| **Lab 10** | MVP Implementation Sprint 1 | Working prototype, feature implementation status, feature traceability, prototype screenshots, sprint documentation, updated README | Completed |
| **Lab 11** | MVP Implementation Sprint 2 & Startup Metrics | Enhanced prototype, startup metrics, Power BI dashboard, usability testing, updated documentation, prototype improvements | Completed |
| **Lab 12** | Landing Page & Digital Go-to-Market | Landing page, go-to-market strategy, marketing messages, acquisition metrics, CTA tracking, GitHub Pages deployment | Completed |

---

# Lab 03 – Customer Problem Discovery

## Overview

The objective of Lab 03 was to validate whether university students experience difficulty discovering campus events and to determine whether a centralized event platform would solve this problem.

---

## Target Respondents

Customer discovery involved **20 Rangsit University students**, including:

- First-year undergraduate students.
- International and exchange students.
- Students who regularly participate in extracurricular activities.
- Students who had previously missed campus events or registration deadlines.

---

## Research Method

Customer discovery was conducted using:

- Online survey
- Informal interviews

Participants were asked how they currently discover campus events, what challenges they experience, and what features they would expect from a centralized event platform.

---

## Key Findings

The research identified several common problems:

- Campus event information is scattered across multiple platforms.
- Students frequently miss registration deadlines.
- Important announcements are difficult to locate.
- Students often depend on friends for event information.
- There is no single platform containing all campus events.

---

## Updated Problem Statement

Students, particularly first-year and international students, experience difficulty discovering campus events because information is distributed across multiple communication channels. This causes students to miss valuable opportunities and reduces participation in university activities.

---

## Next Step

The findings from Lab 03 were used to create user personas, define system requirements, prioritize MVP features, and begin designing the Smart Campus Event Hub.

---

# Lab 04 – User Persona, Requirements & User Stories

## Primary User

The primary users are first-year and international students who need a simple way to discover campus events, register for activities, and receive timely event information.

Student clubs and campus administrators are secondary users responsible for publishing and managing events.

---

## User Persona

**Name:** Maya Sharma

**Age:** 18

**Role:** First-Year Undergraduate Student

**University:** Rangsit University

### Goals

- Find campus events quickly.
- Register before deadlines.
- Stay informed about university activities.
- Participate more actively in campus life.

### Pain Points

- Information is scattered.
- Deadlines are missed.
- Important announcements are difficult to find.

### Current Behaviour

Maya checks:

- LINE
- Facebook
- University website
- Posters
- Friends

to stay informed about campus activities.

### Solution

Smart Campus Event Hub provides one centralized platform where Maya can:

- Browse campus events.
- Search and filter activities.
- View event details.
- Register online.
- Monitor registered events through her dashboard.

---

## Key Requirements

| Req ID | Requirement | Priority | Related Evidence |
|--------|-------------|----------|------------------|
| FR-01 | Display a centralized list of upcoming campus events. | Must | E02, E05, E07 |
| FR-02 | Allow organizers to publish new campus events. | Must | E04 |
| FR-03 | Provide search and filtering by category, date, organizer, and keywords. | Must | E07 |
| FR-04 | Display detailed event information. | Must | E03, E08 |
| FR-05 | Allow students to register for campus events. | Must | E08 |
| FR-06 | Display the student's registered events in the dashboard. | Must | E08, E09 |
| FR-07 | Allow organizers to manage participant registrations. | Should | E04, E09 |
| FR-08 | Display event status (Upcoming, Registration Open, Closed, Ongoing, Completed). | Should | E03, E09 |
| FR-09 | Validate event registration and event submission forms before saving data. | Must | E06, E10 |
| FR-10 | Provide role-based access for students and administrators. | Should | E04, E09 |
| NFR-01 | Provide a responsive mobile-friendly interface. | Must | E01, E05, E07 |
| NFR-02 | Provide a simple and user-friendly interface. | Must | E02, E03, E07 |
| NFR-03 | Return search and filter results within three seconds. | Should | E07 |
| NFR-04 | Maintain complete GitHub documentation with README, issues, commits, and weekly logbook. | Must | Course Requirement |
---

## Non-Functional Requirements

| ID | Requirement |
|----|-------------|
| NFR-01 | Responsive interface |
| NFR-02 | User-friendly interface |
| NFR-03 | Search results within three seconds |
| NFR-04 | Complete GitHub documentation |

---

## MVP Feature Scope

| Feature | Priority | Prototype Status |
|----------|----------|-----------------|
| Event Listing | Must | Implemented |
| Event Publishing | Must | Implemented |
| Search & Filter | Must | Implemented |
| Event Details | Must | Implemented |
| Event Registration | Must | Implemented |
| Student Dashboard | Must | Implemented |
| Organizer Dashboard | Should | Implemented |
| Event Status Tracking | Should | Implemented |
| Event Reminder | Future Enhancement | Planned |
| Calendar View | Future Enhancement | Planned |

---
## Diagram Links

- **User Flow Diagram:**
  https://drive.google.com/file/d/1PTpBsfG3VbVta6AEYR5yQX7Rub0RmxwI/view?usp=sharing
- **Use Case Diagram:**
   https://drive.google.com/file/d/1r_5z3H_7IjZVuvl0UQ3XWlY0UoghOiQg/view?usp=drive_link 
-----

 ## GitHub Contribution Evidence

All team members actively contributed to the Smart Campus Event Hub project through GitHub Issues, commits, documentation updates, prototype development, and weekly logbook entries. The repository history provides evidence of each member's contributions throughout the project.
-----

# Lab 05 – Product Concept and UI/UX Wireframes

## Lab Overview

Lab 05 transformed the validated customer needs and system requirements into the first visual design of the **Smart Campus Event Hub**. The team created wireframes and user flows that guided the development of the working HTML prototype.

The wireframes focus on providing an intuitive experience for students to discover events, view event information, register for activities, and manage participation through a simple interface.

---

## Product Concept

The Smart Campus Event Hub is a web-based platform that centralizes campus event information for students.

The platform enables students to:

- Browse upcoming events
- Search and filter activities
- View detailed event information
- Register for campus events
- Track registered events through a personal dashboard

The platform also enables organizers to publish and manage campus events efficiently.

---

## Requirement Traceability

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01 | `/wireframes/homepage.png` |
| Event Listing | FR-01, FR-03 | `/wireframes/event-list.png` |
| Event Details View | FR-04, FR-05 | `/wireframes/event-details.png` |
| Search & Filter | FR-03 | `/wireframes/search-filter.png` |
| Student Dashboard | FR-05, FR-06, FR-08 | `/wireframes/dashboard.png` |
| Organizer / Admin Dashboard | FR-02, FR-07, FR-08, FR-09, FR-10 | `/wireframes/admin-view.png` |
---

## User Flow

Student Journey

```
Homepage
      │
      ▼
Browse Events
      │
      ▼
Search / Filter
      │
      ▼
Event Details
      │
      ▼
Register Event
      │
      ▼
Student Dashboard
```

Administrator Journey

```
Admin Login
      │
      ▼
Manage Events
      │
      ▼
Create / Edit Event
      │
      ▼
Publish Event
```

---

**User Flow Diagram:** https://github.com/sonamd6807456/ICT105-DRUK-MVP/blob/480aefda6d013499fd64d8e5018b5994bdeb1e90/diagrams/user-flow.drawio.png
------
## Lab 05 Deliverables

| Deliverable | Repository Location | Status |
|--------------|---------------------|--------|
| Product Concept | `docs/product-concept.md` | Completed |
| Feature-Requirement Mapping | `docs/feature-requirement-mapping.md` | Completed |
| Wireframe Specification | `docs/wireframe-specification.md` | Completed |
| Homepage Wireframe | `wireframes/homepage.png` | Completed |
| Event Listing Wireframe | `wireframes/event-list.png` | Completed |
| Event Details Wireframe | `wireframes/event-details.png` | Completed |
| Search & Filter Wireframe | `wireframes/search-filter.png` | Completed |
| Student Dashboard Wireframe | `wireframes/dashboard.png` | Completed |
| Organizer/Admin Dashboard Wireframe | `wireframes/admin-view.png` | Completed |
| User Flow Diagram | `diagrams/user-flow.mmd` and `diagrams/user-flow.png` | Completed |
| Clickable Prototype Draft | `prototype/wireframe-html/index.html` | Completed |
---

## Lab 05 Prototype Navigation

The Smart Campus Event Hub prototype follows a simple user journey that allows students to discover, register for, and manage campus events, while providing organizers with event management capabilities.

### Student Navigation

- Homepage → Event Listing → Event Details → Register for Event → Student Dashboard
- Homepage → Search & Filter → Event Details → Register for Event
- Homepage → Login → Student Dashboard → My Registered Events

### Organizer / Administrator Navigation

- Homepage → Login → Admin Dashboard
- Admin Dashboard → Create Event → Publish Event
- Admin Dashboard → Manage Events → Edit / Delete Event
- Admin Dashboard → View Participant Registrations

---

## Lab 05 Traceability

The Smart Campus Event Hub wireframes were designed directly from the validated customer needs, user stories, and system requirements identified during Labs 03 and 04.

Each wireframe corresponds to one or more functional requirements and serves as the visual blueprint for the HTML/CSS/JavaScript prototype. This ensures that every implemented feature can be traced from the customer problem through the requirements, wireframes, and final prototype.

The **Feature-Requirement Mapping** document demonstrates the relationship between:

- Customer needs
- User stories
- Functional requirements
- MVP features
- Wireframes
- Prototype pages

This traceability ensures that every implemented feature supports the project's objective of helping students discover, access, and register for campus events through a centralized platform.
---

## Team Contribution

All team members collaborated in:

- Designing wireframes
- Planning user navigation
- Mapping features to requirements
- Preparing prototype structure
- Updating project documentation

---

# Lab 06 – Business Model Canvas & Technical Architecture

## Lab Overview

Lab 06 connected the validated customer problem with the technical solution by preparing the Business Model Canvas and Technical Architecture for the Smart Campus Event Hub.

This lab demonstrates how the proposed solution creates value for students while remaining technically feasible as a browser-based MVP.

---

## Business Value

The Smart Campus Event Hub provides value by:

- Centralizing event information
- Improving student participation
- Reducing missed registration deadlines
- Simplifying communication between organizers and students

---

## Technical Architecture

The MVP is developed as a front-end web application using:

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage

No backend server or database is used because this project is a functional MVP prototype.

---

## Core Prototype Features

The prototype demonstrates:

- Homepage
- Event Listing
- Search & Filter
- Event Details
- Event Registration
- Student Dashboard
- Admin Dashboard
- Event Management

---
## Technical Direction

The **Smart Campus Event Hub** MVP is developed as a front-end web application using **HTML5, CSS3, and JavaScript (ES6)**. Browser **LocalStorage** is used to simulate data storage for user accounts, event records, registrations, and other prototype data, allowing the system to demonstrate its core functionality without requiring a backend server or database.

This implementation approach is appropriate for the MVP because it enables the team to validate the user experience, demonstrate key system features, and evaluate usability while keeping the solution lightweight and easy to deploy through GitHub Pages.

The prototype focuses on demonstrating the complete user journey, including:

- User registration and login
- Browsing upcoming campus events
- Searching and filtering events
- Viewing detailed event information
- Registering for campus events
- Viewing registered events through the Student Dashboard
- Creating, updating, and managing events through the Organizer/Admin Dashboard
- Displaying event status and participation information

This technical approach provides a functional prototype that supports customer validation, usability testing, startup metrics, and future system enhancement while remaining consistent with the project's MVP objectives.
---

## Lab 06 Deliverables

| Deliverable | Status |
|-------------|--------|
| Business Model Canvas | Completed |
| Customer Segment Value | Completed |
| Feature Value Mapping | Completed |
| Technical Architecture | Completed |
| Data Flow Diagram | Completed |
| System Architecture | Completed |
| README Update | Completed |

---

## Conclusion

Lab 06 established the technical foundation for the Smart Campus Event Hub by connecting customer needs, MVP features, and system architecture into a complete implementation plan.

---

# Lab 07 – MVP Experiment Design

## Experiment Objective

The purpose of the MVP experiment was to determine whether students could successfully discover campus events, locate event information, and complete event registration using the Smart Campus Event Hub prototype.

---

## Critical Assumptions

The experiment validated the following assumptions:

1. Students need a centralized event platform.
2. Students can easily search and browse campus events.
3. Students are willing to register through the platform.

---

## Experiment Method

The team conducted usability testing using the HTML prototype.

Participants completed common tasks including:

- Browse events
- Search events
- View event details
- Register for an event
- Navigate the dashboard

---

## Success Metrics

The experiment was considered successful if:

- 80% of participants completed event registration.
- 80% successfully searched for an event.
- Average usability score exceeded 4/5.
- 80% agreed the platform improved event discovery.
- 75% indicated they would use the platform.

---

## Lab 07 Deliverables

| Deliverable | Repository Location | Status |
|-------------|---------------------|--------|
| MVP Experiment Plan | `docs/mvp-experiment-plan.md` | Completed |
| Critical Assumptions | `docs/critical-assumptions.md` | Completed |
| Experiment Script | `docs/experiment-script.md` | Completed |
| Success Metrics | `docs/success-metrics.md` | Completed |
| Feedback Form | `docs/feedback-form.md` | Completed |
| Weekly Logbook | `docs/weekly-logbook.md` | Completed ||

---
### Connection to Final Prototype

The technical architecture, Business Model Canvas, and system design developed in **Lab 06** provided the foundation for building the Smart Campus Event Hub MVP prototype. Based on this foundation, **Lab 07** focuses on validating the prototype through usability testing and customer feedback.

The MVP experiment is designed to verify that students can successfully discover campus events, search and filter activities, view event details, register for events, and navigate the student and organizer dashboards. The results of the experiment will validate the key assumptions identified during customer discovery and evaluate whether the implemented features effectively address the problem of scattered campus event information.

The findings from Lab 07 will guide improvements to navigation, event search and filtering, registration workflow, dashboard usability, and overall user experience before proceeding to customer validation in **Lab 08**.
---

## Outcome

The experiment design prepared the team for customer validation by defining measurable objectives and evaluation criteria.

---

# Lab 08 – Customer Validation & Analytics

## Validation Objective

The objective of Lab 08 was to evaluate whether students could successfully:

- Discover campus events
- Browse event details
- Search and filter events
- Register for campus activities

The validation also measured usability, task completion, and overall user satisfaction.

---

## Prototype Tested

**Version**

- **Version:** Smart Campus Event Hub MVP v1.0
- **Link:** https://github.com/sonamd6807456/ICT105-DRUK-MVP
- **Screenshots:** `/screenshots/validation-test-screens.png`
---

## Analytics Summary

| Metric | Result |
|---------|--------|
| Participants | 12 |
| Task Success Rate | 85% |
| Average Usability Score | 4.4 / 5 |
| Average Interest Level | 4.8 / 5 |
| Main confusion point | Some users found the Search and Filter feature and event category navigation slightly confusing. |
| MVP Decision | Continue with Minor Improvements |

---

## Key Findings

Most participants successfully completed all assigned tasks.

Users particularly appreciated:

- Simple interface
- Clear event information
- Easy registration process

Areas requiring improvement included:

- Search functionality
- Category organization
- Dashboard navigation

---

## MVP Decision

### Continue with Minor Improvements

Customer validation confirmed that the Smart Campus Event Hub effectively addresses the identified customer problem.

Future improvements will focus on:

- Better search experience
- Improved event categories
- Dashboard usability
- Navigation improvements

---

## Lab 08 Deliverables

| Deliverable | Repository Location | Status |
|-------------|---------------------|--------|
| Validation Results (CSV) | `data/validation-results.csv` | Completed |
| Validation Results (Excel) | `data/validation-results.xlsx` | Completed |
| Validation Analytics | `data/validation-results-analytics.xlsx` | Completed |
| Customer Validation Summary | `docs/customer-validation-summary.md` | Completed |
| Analytics Insights | `docs/analytics-insights.md` | Completed |
| MVP Decision | `docs/mvp-decision.md` | Completed |
| Test User Notes | `docs/test-user-notes.md` | Completed |
| Power BI Dashboard | `data/Lab08_GroupName_Validation_Analytics.pbix` | Completed |
| Power BI Dashboard Screenshot | `screenshots/lab08-powerbi-dashboard.png` | Completed |
| Validation Test Screenshots | `screenshots/validation-test-screens.png` | Completed |
| Weekly Logbook | `docs/weekly-logbook.md` | Completed |
---

## Conclusion

Customer validation confirmed that the Smart Campus Event Hub successfully supports students in discovering and registering for campus events while providing a simple and user-friendly experience.

---


# Lab 09 – Responsible IT Review

## Lab Overview

Lab 09 focused on reviewing the Smart Campus Event Hub from the perspectives of privacy, security, ethics, intellectual property, and responsible technology development. The objective was to ensure that the MVP protects user information, reduces potential risks, and follows responsible design practices while remaining suitable for a frontend prototype.

---

## Privacy Review

The Smart Campus Event Hub only collects information necessary for event registration.

The prototype demonstrates responsible data handling by:

- Collecting only essential registration information required for event participation.
- Avoiding unnecessary collection of sensitive student information.
- Storing prototype data locally using browser LocalStorage for demonstration purposes.
- Avoiding public display of private information such as student IDs and email addresses.
- Providing clear information to users about how registration data is used.

---

## Ethical Considerations

The project follows responsible design principles by:

- Providing equal access to campus event information for students.
- Ensuring event information is accurate, clear, and accessible.
- Informing users about prototype limitations.
- Avoiding misleading content or false event information.
- Supporting transparency in how user information is handled.

---

## Intellectual Property Review

All project documentation, prototype pages, system design, and sample event data were created or prepared by the project team.

Potential third-party resources such as:

- Images
- Icons
- Fonts
- Code libraries
- Templates
- AI-generated materials

were reviewed to ensure proper usage and attribution where required.

The team maintained responsible use of external resources and recorded third-party assets when necessary.

---

## Security Review

Potential security risks identified include:

- Invalid or incomplete form submissions.
- Unauthorized access to organizer or administrator functions.
- Unauthorized modification of event information.
- Exposure of student registration information.
- Limitations of client-side storage in the prototype.

The prototype reduces these risks through:

- Input validation and required form fields.
- Role separation between students and administrators.
- Controlled event information updates.
- Protection of personal registration details.
- Clear identification that additional backend security is required for production use.

---

## Requirement Update

The system requirements were reviewed after Lab 09.

**Requirement Update: Yes**

The requirements were updated to include responsible IT considerations while keeping the core MVP features unchanged.

Main updates include:

- Collecting only necessary user registration information.
- Protecting personal data from public exposure.
- Validating user input during registration and event creation.
- Restricting organizer and administrator functions to authorized users.
- Managing event information updates securely.
- Recording the use of external assets and third-party materials.

---

## Lab 09 Deliverables

| Deliverable | File | Status |
|-------------|------|--------|
| Privacy & Data Protection Review | `docs/privacy-data-protection.md` |  Completed |
| Legal & Ethical Checklist | `docs/legal-ethical-checklist.md` |  Completed |
| Security Risk Assessment | `docs/security-risk-check.md` |  Completed |
| Risk Register | `docs/risk-register.md` |  Completed |
| IP & Third-Party Assets Review | `docs/ip-third-party-assets.md` |  Completed |
| Updated Requirements Note | `docs/updated-requirements-note.md` | Completed |
| Weekly Logbook Update | `docs/weekly-logbook.md` |  Completed |
| Data Handling Policy | `docs/data-handling-policy.md` | Completed |
| User Consent Statement | `docs/user-consent-statement.md` |  Completed |
| Third-Party Assets Register | `docs/third-party-assets-register.md` |  Completed |
| Data Inventory Template | `docs/data-inventory-template.md` | Completed |
| Case Study Brief | `docs/case-study-brief.md` |  Completed |
| Privacy & Security Review Flowchart | `diagrams/privacy-security-review.mmd` |  Completed |
| Practice Risk Register Sample | `data/practice_risk_register_sample.csv` |  Completed |
| Project Screenshots | `screenshots/` |  Completed |
| README Update | `README.md` |  Completed |

---

## Team Contributions

| Team Member | Contribution |
|-------------|-------------|
| **Sonam Deki** | Updated GitHub Issues, maintained the Weekly Logbook, completed the Legal & Ethical Checklist, prepared the Updated Requirements Note, created the Privacy & Security Review Flowchart, and completed the Practice Risk Register Sample. |
| **Kinley Zam** | Completed the Third-Party Assets Register, prepared the Data Handling Policy, completed the Privacy and Data Protection documentation, created the User Consent Statement, and collected project screenshots. |
| **Tenzin Dema** | Updated the README documentation, completed the IP and Third-Party Assets Review, prepared the Data Inventory Template, reviewed Security Risks, and developed the Case Study Brief for the Smart Campus Event Hub. |

---

## Conclusion

The Smart Campus Event Hub satisfies the Responsible IT requirements for an educational MVP. The project demonstrates responsible handling of user information, ethical technology practices, intellectual property awareness, and basic security considerations.

However, additional backend security controls, authentication mechanisms, and database protection would be required before deploying the system as a real production application.
----

# Lab 10 – MVP Implementation Sprint 1

## Sprint Goal

Sprint 1 focused on transforming the wireframes into a functional HTML, CSS, and JavaScript prototype that demonstrates the core Smart Campus Event Hub workflow.

---

## Technology Used

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage
- GitHub

---

| Feature | Related Requirement | Status | Evidence File |
|----------|---------------------|--------|---------------|
| Homepage | FR-01 |  Implemented | `prototype/index.html`, `screenshots/homepage.png` |
| Event Listing | FR-01 |  Implemented | `prototype/events.html`, `screenshots/event-listing.png` |
| Event Publishing (Admin) | FR-02 |  Implemented | `prototype/admin.html`, `js/admin.js`, `screenshots/admin-event-publish.png` |
| Search & Filter | FR-03 |  Implemented | `prototype/events.html`, `js/events.js`, `screenshots/search-filter.png` |
| Event Details | FR-04 | Implemented | `prototype/event-details.html`, `screenshots/event-details.png` |
| Event Registration | FR-05 |  Implemented | `prototype/register.html`, `js/register.js`, `screenshots/event-registration.png` |
| Student Dashboard | FR-05, FR-10 |  Implemented | `prototype/student-dashboard.html`, `js/student-dashboard.js`, `screenshots/student-dashboard.png` |
| Admin Dashboard | FR-02, FR-09 |  Implemented | `prototype/admin-dashboard.html`, `js/admin-dashboard.js`, `screenshots/admin-dashboard.png` |
| Event Status | FR-10 |  Implemented | `prototype/event-details.html`, `data/events.json`, `screenshots/event-status.png` |

---

## Sprint Outcome

Sprint 1 successfully produced a working browser-based MVP demonstrating the complete event discovery and registration workflow.

---
### Screenshots

- **Homepage:** `screenshots/home.png`
- **Input Form:** `screenshots/admin manage events page.png`
- **Record List:** `screenshots/events page.png`
- **Detail View:** `screenshots/event details page.png`
- **Admin/Status View:** `screenshots/admin dashboard page.png`
 ---
 
## Team Contributions

| Member | Contribution | Evidence |
|--------|--------------|----------|
| **Sonam Deki – Member 1** | Prepared and maintained project documentation, updated implementation-related documents, managed repository documentation, created the case study, prepared sample event records, maintained CSS styling for the prototype interface, and organized project assets. | `docs/implementation-plan.md`, `docs/case-study.md`, `data/smart-campus-event-hub-sample-record.md`, `prototype/css/`, GitHub commits, repository updates, and documentation changes. |
| **Tenzin Dema – Member 2** | Developed the JavaScript functionality of the Smart Campus Event Hub prototype, implemented LocalStorage features, created event registration logic, developed dashboard functionality, integrated prototype interactions, prepared implementation flow documentation, maintained weekly progress records, and documented prototype integration details. | `prototype/js/`, `docs/weekly-logbook.md`, `prototype/prototype-link.md`, `diagrams/implementation-flow/`, `data/smart-campus-event-hub-statistics-category.md`, GitHub commits, and prototype updates. |
| **Kinley Zam – Member 3** | Developed the frontend HTML pages for the Smart Campus Event Hub, created and updated the homepage, event listing pages, student dashboard, admin pages, and profile-related pages. Also updated feature implementation documentation, README content, and organized prototype screenshots. | `prototype/*.html`, `docs/feature-implementation-status.md`, `README.md`, `screenshots/`, GitHub Issue updates, GitHub commits, and repository improvements. |

---

# Lab 11 – MVP Implementation Sprint 2 & Startup Metrics

## Sprint Overview

Sprint 2 refined the Smart Campus Event Hub by improving usability, navigation, event management, dashboard functionality, and responsive design.

The prototype continues to operate as a browser-based MVP using LocalStorage.

---
## Prototype Progress

Sprint 2 further developed the Smart Campus Event Hub into a more complete and functional frontend MVP prototype. The updated prototype improves the overall user experience by strengthening the main student, organizer, and administrator workflows.

The current version includes improvements in visual design, event information display, event listing management, keyword search, category filtering, event detail pages, event registration, event status tracking, dashboard statistics, organizer and administrator management features, form validation, confirmation feedback, privacy explanations, and responsive interface design.

The prototype continues to simulate a real Smart Campus Event Hub environment using HTML, CSS, JavaScript, sample event records, and browser LocalStorage. The system demonstrates the main MVP features and user interactions, but it is still a classroom prototype and does not include production-level authentication, server-side authorization, or a shared database.

Further development would be required before deployment as a real campus-wide system, including backend integration, secure user authentication, database management, and advanced security controls.
----

### Implemented / Improved Features

| Requirement ID | Feature | Lab 11 Status | Evidence |
|---|---|---|---|
| FR-01 | Homepage navigation and student event discovery journey | Completed and improved | `prototype/index.html`; shared navigation; Homepage → Event Listing → Event Details → Registration flow |
| FR-01–FR-02 | Event browsing and event management structure | Completed and improved | Event Listing page; organizer/admin event management pages; prototype event records |
| FR-03 | Keyword search and category filtering | Completed and improved | Event Listing page; search functionality; category filter controls; JavaScript filtering logic |
| FR-04 | Event detail pages and event information display | Completed and improved | Event Detail page; event information sections; event status display |
| FR-05 | Event registration workflow | Completed and improved | Registration form; JavaScript registration logic; browser `localStorage`; registration records |
| FR-06–FR-07 | Event reminders, notifications, and participation feedback (prototype simulation) | Completed as a prototype | Registration confirmation messages; user feedback messages; prototype notification elements |
| FR-08 | Student Dashboard and participation tracking | Completed and improved | `student-dashboard.html`; dashboard statistics; registered event information; participation status |
| FR-09 | Organizer and administrator event management | Completed and improved as a prototype | Organizer/Admin Dashboard; event creation, editing, updating, approval, rejection, and deletion functions |
| FR-10 | Event status tracking | Completed and improved | Event status indicators including Upcoming, Registration Open, Closed, Ongoing, and Completed |
| FR-11 | Input validation and registration confirmation feedback | Completed and improved | Required-field validation; error messages; success messages; registration confirmation feedback |
| FR-12 | Dashboard metrics and event summary information | Completed and improved | Student Dashboard; Admin Dashboard; event statistics and summary metrics |
| FR-13–FR-14 | Consistent interface design and responsive layouts | Completed and improved | Shared CSS styling; common navigation; responsive layouts for desktop, tablet, and mobile screens |
| FR-15 | Privacy and responsible data collection | Completed as a prototype | Privacy Notice; limited registration data collection; responsible data-handling explanation |
| FR-16 | Requirement and feature traceability | Completed and maintained | System requirements; MVP feature list; user stories; feature implementation status documentation |

---

## Startup Metrics

The Smart Campus Event Hub measures several key prototype metrics.

| Metric |
|---------|
| Total Events |
| Upcoming Events |
| Completed Events |
| Pending Events |
| Approved Events |
| Rejected Events |
| Registered Participants |
| Popular Categories |
| Registration Activity |
| Student Participation |
| Registration Success Rate |
| Task Completion Rate |
| Average Usability Score |

These metrics support prototype evaluation and future product improvements.

---

### Prototype Screenshots

Current evidence is stored in `/screenshots/`, including:

- `screenshots/homepage.png`
- `screenshots/login.png`
- `screenshots/registration.png`
- `screenshots/event-listing.png`
- `screenshots/event-details.png`
- `screenshots/student-dashboard.png`
- `screenshots/admin-dashboard.png`
- `screenshots/event-management.png`

---

## Lab 11 Deliverables

| Deliverable | File | Status |
|-------------|------|--------|
| Sprint 2 Prototype | `prototype/` |  Completed |
| Startup Metrics | `data/startup-metrics.md` |  Completed |
| Power BI Dashboard | `powerbi/smart-campus-event-hub-dashboard.pbix` | Completed |
| Updated Documentation | `docs/implementation-plan.md`, `docs/feature-implementation-status.md`, `README.md` |  Completed |
| Weekly Logbook | `docs/weekly-logbook.md` |  Completed |
---

## Member Contributions


| Member Name | Contribution | File / Feature Updated | GitHub Evidence |
|-------------|--------------|------------------------|-----------------|
| **Sonam Deki** | Updated project styling, implementation metrics flow diagram, category status reference, weekly documentation, contributed to the Power BI dashboard, updated project screenshots, and improved the Smart Campus Event Hub prototype. | prototype/css/, status-category-reference.css, diagram/implementation-metrics-flow.mmd, docs/weekly-logbook.md, Power BI dashboard, screenshots/, prototype/ | GitHub Issue #58, commits, updated documentation, prototype CSS, implementation flow diagram, Power BI updates, screenshot updates, prototype improvements |
| **Tenzin Dema** | Updated feature implementation status, prototype JavaScript functionality, prototype testing notes, project README, contributed to the Power BI dashboard, updated project screenshots, and improved the Smart Campus Event Hub prototype. | docs/feature-implementation-status.md, docs/prototype-testing-notes.md, README.md, prototype/js/, Power BI dashboard, screenshots/, prototype/ | GitHub Issue #59, commits, updated JavaScript files, README updates, Power BI updates, screenshot updates, prototype improvements |
| **Kinley Zam** | Prepared Smart Campus Event Hub sample records, startup metrics documentation, case study, updated prototype HTML pages, contributed to the Power BI dashboard, updated project screenshots, and improved the Smart Campus Event Hub prototype. | data/smart-campus-event-hub-sample-records.md, docs/startup-metrics.md, docs/case-study.md, prototype/html/, Power BI dashboard, screenshots/, prototype/ | GitHub Issue #60, commits, documentation updates, prototype HTML pages, Power BI updates, screenshot updates, prototype improvements |
----

## Testing

The Sprint 2 prototype was tested for:

- Navigation
- Event browsing
- Event registration
- Search and filtering
- Dashboard functionality
- Event management
- Responsive interface

Testing confirmed that all core MVP functions operate correctly within the prototype.

---

### Remaining Work

- Complete one final student and organizer/administrator browser walkthrough and responsive test.
- Capture a fresh Lab 11 screenshot set.
- Replace member contribution placeholders with actual GitHub commit, issue, or pull request links.
- Extend keyword search beyond event titles to event descriptions, tags, organizers, and locations.
- Add additional filtering options such as event date, organizer, location, and event status.
- Improve event capacity and remaining-seat information visibility.
- Add clearer registration success and confirmation feedback.
- Continue improving dashboard analytics and event participation statistics.
- Add a campus map or location visualization to event details if required.
- Replace `localStorage` and client-side role checks with a secure shared backend for any production release.

-------


# Lab 12 – Landing Page & Digital Go-to-Market

## Lab Overview

Lab 12 introduced the Smart Campus Event Hub through a public landing page and digital marketing strategy.

The landing page explains the customer problem, presents the solution, highlights the core features, and directs visitors to the working prototype.

---

## Landing Page Features

The landing page includes:

- Product headline
- Value proposition
- Problem statement
- Solution overview
- Key features
- Target users
- Call-to-Action button
- Privacy statement
- Responsive layout

---

## Prototype Access

**Landing Page**

https://sonamd6807456.github.io/ICT105-DRUK-MVP/

**Main CTA:** Explore Events  
**Purpose:** Help students discover and register for upcoming campus events.  
**Links To:** https://sonamd6807456.github.io/ICT105-DRUK-MVP/prototype/events.html

**Prototype**

https://sonamd6807456.github.io/ICT105-DRUK-MVP/prototype/

---

# Digital Go-to-Market Strategy

## Target Users

The initial launch focuses on:

- First-year students
- International students
- Exchange students
- Student clubs
- Campus administrators

---

## Marketing Channels

- University class groups
- Student organization social media
- QR code posters
- GitHub Pages
- Word-of-mouth promotion

---

## Marketing Message

> **Never miss a campus event again!**

Discover, register, and stay informed about workshops, competitions, seminars, and university activities—all in one place with Smart Campus Event Hub.

---

# Acquisition Metrics

| Metric | Purpose |
|---------|---------|
| Landing Page Visits | Measure awareness |
| CTA Clicks | Measure interest |
| Prototype Visits | Measure engagement |
| Event Registrations | Measure participation |
| User Feedback | Measure satisfaction |

Metrics are collected through JavaScript tracking, prototype interaction logs, and validation records.

---
# Screenshots

- Landing page screenshot: `/screenshots/landing-page.png`
- CTA screenshot: `/screenshots/call-to-action.png`
- Prototype demo screenshot: `/screenshots/demo-screen.png`
- Acquisition metrics table: `/screenshots/acquisition-metrics-table.png`
----

## Lab 12 Deliverables

| File | Purpose | Status |
|------|---------|--------|
| `landing-page/index.html` | Smart Campus Event Hub landing page |  Completed |
| `landing-page/style.css` | Landing page styling |  Completed |
| `landing-page/script.js` | CTA interaction and click tracking |  Completed |
| `docs/landing-page-content.md` | Landing page content and product explanation |  Completed |
| `docs/go-to-market-plan.md` | Digital marketing strategy |  Completed |
| `docs/marketing-message.md` | Marketing communication messages |  Completed |
| `docs/acquisition-metrics.md` | Acquisition metric definitions |  Completed |
| `data/acquisition-metrics-template.csv` | Acquisition tracking template |  Completed |
| `screenshots/landing-page.png` | Landing page screenshot |  Completed |
| `screenshots/call-to-action.png` | CTA screenshot |  Completed |
| `screenshots/prototype-link-or-demo-screen.png` | Prototype access screenshot |  Completed |
| `screenshots/acquisition-metrics-table.png` | Metrics tracking screenshot | Completed |
| `docs/weekly-logbook.md` | Weekly contribution records |  Completed |

---

# Overall Project Outcome

Throughout twelve laboratory sessions, the Smart Campus Event Hub evolved from an initial idea into a validated Minimum Viable Product (MVP).

The project demonstrates the complete startup development process:

- Opportunity Identification
- Customer Discovery
- User Persona Development
- Requirements Engineering
- Wireframing
- Technical Architecture
- MVP Experiment Design
- Customer Validation
- Responsible IT Review
- MVP Development
- Analytics & Startup Metrics
- Landing Page & Go-to-Market Strategy

The prototype successfully demonstrates how a centralized event platform can improve student engagement and reduce missed campus activities.

---

# Repository

```
docs/
prototype/
data/
diagrams/
screenshots/
finance/
pitch/
README.md
```

---


# Member Contributions

| Member | Contribution | Commit / Issue Evidence |
|---------|--------------|-------------------------|
| **Sonam Deki** | Developed the Smart Campus Event Hub landing page, prepared the Digital Go-to-Market Plan, created landing page content, and updated project README documentation. | **GitHub Issue #61**, `landing-page/`, `docs/go-to-market-plan.md`, `README.md`, GitHub commits |
| **Tenzin Dema** | Prepared acquisition metrics documentation, created the acquisition tracking template, contributed landing page content, updated project case study, and captured project screenshots including landing-page.png, call-to-action.png, prototype-link-or-demo-screen.png, and acquisition-metrics-table.png. | **GitHub Issue #62**, `docs/acquisition-metrics.md`, `docs/case-study.md`, `data/acquisition-metrics-template.csv`, `screenshots/`, GitHub commits |
| **Kinley Zam** | Prepared the channel plan template, created the Smart Campus Event Hub User Journey Flow diagram, developed marketing messages, contributed landing page content, and updated the weekly logbook. | **GitHub Issue #63**, `docs/channel-plan.md`, `diagrams/Smart-Campus-Event-Hub-User-Journey-Flow.mmd`, `docs/marketing-message.md`, `docs/weekly-logbook.md`, GitHub commits |

---

#  Outcome

The Smart Campus Event Hub landing page successfully communicates the project's purpose, explains the problem of fragmented campus event information, and provides users with a clear pathway to access the prototype.

Combined with the digital go-to-market plan and acquisition metrics, Lab 12 prepares Smart Campus Event Hub for early promotion, user engagement measurement, and future validation activities while remaining consistent with the implemented MVP features.

# Lab 13: Sales Scenario, Demo Script, and User Testing

## Lab 13 Objective

Lab 13 focused on preparing the Smart Campus Event Hub for the final MVP presentation by developing the sales scenario, demo script, user testing plan, user testing results, final improvement list, supporting diagrams, screenshots, and documentation. The team completed all assigned tasks and updated the GitHub repository to prepare for the final MVP release in Lab 14.

---

## Files Completed

### Documentation
- [x] /docs/sales-scenario.md
- [x] /docs/demo-script.md
- [x] /docs/user-testing-plan.md
- [x] /docs/user-testing-results.md
- [x] /docs/final-improvement-list.md
- [x] /docs/case-study-brief.md
- [x] /docs/weekly-logbook.md

### Data
- [x] /data/final-improvement-list.csv
- [x] /data/user-testing-result-sample.csv
- [x] /data/user-testing-result-template.csv

### Diagrams
- [x] /diagrams/demo-flow.mmd
- [x] /diagrams/user-testing-flow.mmd

### Prototype
- [x] /prototype/final-demo-link.md

### Pitch
- [x] /pitch/demo-outline.md

### Screenshots
- [x] Demo Flow Screenshot
- [x] User Testing Evidence Screenshot

### Repository
- [x] README.md updated

---

## Team Member Contributions

| Member | Contributions |
|---------|---------------|
| **Sonam Deki** | **/docs:** `demo-script.md`, `user-testing-plan.md`, `weekly-logbook.md` **/data:** `final-improvement-list.csv` **/diagrams:** `user-testing-flow.mmd` |
| **Tenzin Dema** | **/docs:** `final-improvement-list.md`, `user-testing-results.md`, `case-study-brief.md` **/data:** `user-testing-result-sample.csv` **/pitch:** `demo-outline.md` |
| **Kinley Zam** | **/docs:** `sales-scenario.md` **/data:** `user-testing-result-template.csv` **/diagrams:** `demo-flow.mmd` **/prototype:** `final-demo-link.md` **Repository:** `README.md` |
---

## Prototype / Demo Links

**Landing Page**  
https://sonamd6807456.github.io/ICT105-DRUK-MVP/landing-page

**Prototype**  
https://sonamd6807456.github.io/ICT105-DRUK-MVP/prototype

**GitHub Repository**  
https://github.com/sonamd6807456/ICT105-DRUK-MVP

---

## Final Preparation Status

The Smart Campus Event Hub has successfully completed all Lab 13 deliverables. The repository now includes the complete sales scenario, demonstration script, user testing documents, improvement plan, supporting diagrams, screenshots, and updated project documentation.

The project is ready to proceed to **Lab 14: Final MVP Release**, where the team will complete the final prototype verification, presentation, repository review, and final submission.


# Lab14

# Smart Campus Event Hub

---

## Group Members

| Name | Role | Main Contribution |
|---|---|---|
| **Kinley Zam** | **UI/UX Lead & Validation Lead** | Final Testing Results, Final Prototype Report, Requirement Traceability Matrix, Final Prototype Link, Final Project Screenshots, Final Pitch Outline (`pitch-outline.md`). |
| **Sonam Deki** | **Product Lead & Documentation Lead** | Final Requirement Traceability, Member Contribution Template, Final Demo Script, Final Reflection, Weekly Logbook, Prototype Improvements. |
| **Tenzin Dema** | **Technical Lead** | Final Sample Data, Final Demo Flow (`.mmd`), Feature Implementation Status, Final Submission Checklist, `README.md`, JavaScript Updates, Prototype README Update, Prototype Testing Documentation. |
---

## Project Overview

Smart Campus Event Hub is a browser-based Minimum Viable Product (MVP) developed for the ICT105 Fundamental Technology Entrepreneurship course. The platform provides a centralized location where students can discover campus events, search and filter activities, register online, and manage their participation through a personal dashboard.

The prototype also supports organizers and administrators by allowing them to create, edit, manage, and monitor campus events. Developed using HTML5, CSS3, JavaScript, and browser LocalStorage, the system demonstrates the complete event management workflow in a frontend classroom MVP.

---

## Target Users

### Primary Users

- First-year undergraduate students
- International students
- Exchange students

### Secondary Users

- Student clubs and organizations
- Campus event organizers
- University administrators

---

## Problem Solved

Campus event information is often distributed across multiple communication channels such as university websites, emails, social media, messaging applications, and posters. As a result, students may miss important activities, registration deadlines, and opportunities to participate in campus life.

Smart Campus Event Hub solves this problem by providing a centralized platform where students can easily browse, search, and register for campus events while enabling organizers to manage event information more efficiently.

---

## Final Prototype

- **Prototype folder/link:** `https://sonamd6807456.github.io/ICT105-DRUK-MVP/prototype/`
- **Landing page link:** `https://sonamd6807456.github.io/ICT105-DRUK-MVP/`
- **Final demo link:** `/prototype/final-demo-link.md`

---

## Final Documentation

- System requirements: `/docs/system-requirements.md`
- User stories: `/docs/user-stories.md`
- MVP feature list: `/docs/mvp-feature-list.md`
- Feature implementation status: `/docs/feature-implementation-status.md`
- Final prototype report: `/docs/final-prototype-report.md`
- Final demo script: `/docs/final-demo-script.md`
- Final reflection: `/docs/final-reflection.md`

---

## Screenshots

The `/screenshots/` folder contains the final prototype evidence, including:

- Homepage
- Landing Page
- Event Listing
- Event Details
- Event Registration
- Student Dashboard
- Organizer/Admin Dashboard
- Search and Filter
- Event Management
- Demo Flow
- User Testing Results
- Validation Evidence
- Landing Page Call-to-Action

---

## Pitch

- Final pitch slides or outline: `/pitch/`

The pitch materials include the final venture presentation, prototype demonstration flow, business value, validation evidence, startup metrics, technical architecture, and future development roadmap.

---

## Data and Diagrams

### Final Sample Data

Stored in `/data/`, including:

- Sample event records
- Customer validation results
- User testing results
- Startup metrics
- Acquisition metrics
- Final improvement list
- Testing templates

### Final Diagrams

Stored in `/diagrams/`, including:

- User Flow Diagram
- Use Case Diagram
- Technical Architecture Diagram
- Data Flow Diagram
- Demo Flow Diagram
- User Testing Flow Diagram
- Privacy & Security Review Flow
- Implementation Flow Diagram

---

## Final Submission Notes

The Smart Campus Event Hub project successfully completed all fourteen ICT105 laboratory activities, progressing from opportunity identification and customer discovery to a fully functional browser-based MVP.

Before submission, the team reviewed the complete prototype, verified that all implemented features aligned with the documented functional requirements, user stories, MVP feature list, and requirement traceability, and ensured that all documentation, screenshots, diagrams, and supporting evidence were included in the repository.

The final prototype demonstrates a complete student and organizer workflow using HTML5, CSS3, JavaScript, and browser LocalStorage. It provides a centralized platform for discovering campus events, registering for activities, and managing event information while serving as a classroom MVP suitable for demonstrations, usability testing, and future development into a production-ready system.
