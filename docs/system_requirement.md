# System Requirements - Smart Campus Event Hub

## Minimum Final Prototype Functionalities

These requirements define the minimum prototype functionalities for the Smart Campus Event Hub final prototype. The system focuses on helping students discover, register for, and manage campus events while supporting student organizers and campus administrators in publishing and managing event information.

| Req ID | Functional Requirement | Smart Campus Event Hub Implementation / Final Prototype Must Show |
| --- | --- | --- |
| **FR-01** | **Clear problem-specific homepage or landing screen** | The prototype must clearly show the project title **Smart Campus Event Hub**, explain the problem of scattered campus event information, identify target users (students, organizers, and administrators), and provide main navigation to Events, Dashboard, Profile, Favorites, and Registration. Prototype file: `prototype/index.html` |
| **FR-02** | **Primary user pathway** | The prototype must show the main user journey: Open Event Hub → Browse Events → Search Event → View Event Details → Register for Event → Receive Confirmation → Track Participation. |
| **FR-03** | **User input or data submission feature** | The system must allow students to create accounts, register for events, update profiles, submit feedback, and allow organizers to submit new campus events with title, description, category, date, time, location, and capacity information. |
| **FR-04** | **Data storage or record management** | Event information, user profiles, registrations, favorites, and feedback must be stored or simulated using suitable storage such as browser LocalStorage, JSON files, Firebase, database, or spreadsheet systems. The current prototype uses browser LocalStorage. |
| **FR-05** | **View records / information list** | Students must be able to view available campus events including workshops, seminars, competitions, sports activities, cultural events, and club activities through an event listing page. Prototype file: `prototype/events.html` |
| **FR-06** | **Search, filter, or category function** | Users must be able to search and filter events using keywords, event categories, dates, locations, and event types to find suitable campus activities quickly. |
| **FR-07** | **Detail view for each record** | Users must be able to open an individual event page showing event title, description, organizer, date, time, location, category, available seats, and registration information. Prototype file: `prototype/event-details.html` |
| **FR-08** | **Status or progress tracking** | The system must display event and registration statuses such as Upcoming, Registration Open, Full, Registered, Completed, or Cancelled. Students can track registered events through the dashboard. |
| **FR-09** | **Admin or manager function** | The prototype must include organizer and administrator functions such as creating events, editing event details, approving events, updating event status, managing registrations, and removing invalid event information. Prototype files: `prototype/organizer-dashboard.html` and `prototype/admin-dashboard.html` |
| **FR-10** | **Basic validation and error prevention** | The system must validate user inputs including required fields, event information, registration details, capacity limits, and incomplete form submissions before saving data. |
| **FR-11** | **Confirmation or feedback message** | The system must provide feedback messages after user actions such as successful registration, event creation, profile updates, or invalid submissions. Example: "Registration Successful" or "Please complete required fields". |
| **FR-12** | **Dashboard, summary, or simple analytics view** | The prototype must include a dashboard showing total events, upcoming events, registered events, popular categories, participation summary, and event statistics. Prototype file: `prototype/dashboard.html` |
| **FR-13** | **Basic user interface consistency** | All Smart Campus Event Hub pages must maintain consistent navigation, typography, color theme, layouts, buttons, and card designs to create one complete system experience. |
| **FR-14** | **Mobile-friendly or responsive design consideration** | The prototype must support different screen sizes including laptop, tablet, and mobile devices using responsive HTML and CSS design. |
| **FR-15** | **Basic privacy and responsible data handling** | The system must collect only necessary user information for registration and account management. Personal student information should not be publicly displayed, and users should understand how their information is used. |
| **FR-16** | **Final prototype traceability** | Every prototype screen and feature must connect with documented user personas, user stories, MVP features, validation evidence, usability testing results, and system requirements. |

---

# Minimum Technical Requirement

The Smart Campus Event Hub final prototype must not only be a static design. It must be an interactive prototype where users can click, submit, view, search, filter, update, and simulate the main event management workflow.

Users must be able to:

- Create an account.
- Login to the system.
- Browse campus events.
- Search and filter events.
- View event details.
- Register for events.
- Receive confirmation messages.
- Save favorite events.
- View participation history.
- Update profile information.
- Submit event feedback.
- Organizers can create and manage events.
- Administrators can approve and manage event information.

---

# Prototype Implementation

| Platform Type | Smart Campus Event Hub Prototype Form |
| --- | --- |
| Web Application | HTML, CSS, JavaScript |
| Data Management | Browser LocalStorage with sample event data |
| Prototype Location | `prototype/` |
| Documentation Location | `/docs/` |
| Version Control | GitHub Repository |
| Validation Analysis | Power BI Dashboard |
| Testing Evidence | Usability Testing Dataset |

---

# Prototype Files

```text
prototype/

├── index.html
├── login.html
├── signup.html
├── events.html
├── event-details.html
├── register-event.html
├── favorites.html
├── dashboard.html
├── profile.html
├── organizer-dashboard.html
├── admin-dashboard.html
├── reviews.html
└── privacy.html
