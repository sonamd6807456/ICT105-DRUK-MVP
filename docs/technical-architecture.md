# Technical Architecture

## Project Title

**Smart Campus Event Hub – Campus Event Discovery and Registration Platform**

---

## 1. Selected Prototype Platform

**Frontend-only: HTML/CSS/JavaScript**

The Smart Campus Event Hub will be implemented as a clickable web prototype using static HTML pages, shared CSS styling, and JavaScript interactions.

The prototype will demonstrate:

- Campus event browsing
- Event searching and filtering
- Event details viewing
- Student registration
- Event reminders
- Organizer event publishing
- Dashboard summary display

The frontend-only approach allows the team to validate the MVP concept, user experience, and core functionality within the ICT105 semester timeline.

---

# 2. Architecture Decision

A frontend-only architecture is suitable for the Smart Campus Event Hub because the MVP focuses on demonstrating the main user experience instead of developing a complete production system.

This architecture is appropriate because:

- HTML, CSS, and JavaScript can be developed efficiently within the semester timeline.
- GitHub Pages can host the prototype without backend configuration.
- Required user flows can be demonstrated clearly.
- Event information and registration behavior can be simulated using static data.
- The architecture matches the MVP scope.
- Complex features such as authentication systems, cloud databases, AI recommendation, and real-time notification services are excluded.

---

# 3. Main Components

| Component | Description | Technology | Related Requirement |
|---|---|---|---|
| User Interface | Provides pages, navigation, event cards, buttons, and responsive layout. | HTML, CSS, JavaScript | FR-01, FR-04, NFR-01, NFR-02 |
| Event Listing Module | Displays upcoming campus events and activities. | HTML, CSS, JavaScript | FR-01 |
| Search and Filter Module | Allows students to search events by category, date, organizer, and keywords. | JavaScript filtering | FR-03 |
| Event Details Module | Shows complete event information including date, location, organizer, and status. | HTML, CSS, JavaScript | FR-04, FR-10 |
| Registration Module | Allows students to register for events. | HTML Form, JavaScript Validation | FR-05 |
| Notification Module | Simulates event reminders and new event notifications. | JavaScript alerts | FR-06, FR-07 |
| Organizer Module | Allows organizers to create and manage events. | Static Dashboard, JavaScript | FR-02, FR-09 |
| Calendar Module | Displays upcoming events in calendar format. | HTML, CSS, JavaScript | FR-08 |
| Data Storage | Stores sample events and registration data. | JavaScript Arrays / JSON | FR-01, FR-05 |

---

# 4. Fully Implemented Features

The final prototype will implement:

- Homepage / Landing page
- Student event browsing
- Event list page
- Search functionality
- Category filtering
- Date filtering
- Event details page
- Event registration form
- Registration confirmation
- Calendar view
- Organizer event creation page
- Dashboard summary
- Event status display
- Responsive mobile-friendly interface


## Prototype Structure

```text
Smart-Campus-Event-Hub/

│
├── prototype/
│
│── index.html
│── events.html
│── event-details.html
│── register.html
│── calendar.html
│── organizer.html
│── dashboard.html
│── login.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── event-images/
│
├── docs/
│
├── diagrams/
│
└── screenshots/
