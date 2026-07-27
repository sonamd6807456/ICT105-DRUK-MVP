# System Requirements

## Minimum Final Prototype Functionalities

These requirements define the minimum functional requirements for the Smart Campus Event Hub prototype. The system enables students to discover campus events, register for activities, manage participation, submit event reviews after completion, and allows administrators to manage campus events. The prototype is implemented as a responsive web application using HTML, CSS, JavaScript, and browser localStorage for simulated data storage.

| Req ID | Minimum Prototype Functionality | What Students Must Show in Final Prototype |
| --- | --- | --- |
| **FR-01** | **Homepage** | The homepage must display the Smart Campus Event Hub title, project purpose, navigation menu, featured events, and quick access to major pages. |
| **FR-02** | **User Login** | Users must be able to log into the system using a simulated student email and password with basic input validation. |
| **FR-03** | **User Registration (Sign Up)** | New users must be able to create an account by entering required information such as name, student ID, email, and password. |
| **FR-04** | **Browse Events** | Users must be able to browse all available campus events displayed in a structured card or list layout. |
| **FR-05** | **Search and Filter Events** | Users must be able to search events by keyword and filter events by category. |
| **FR-06** | **Event Details** | Users must be able to view complete information for an event including description, organizer, date, time, venue, category, capacity, available seats, and registration status. |
| **FR-07** | **Event Registration** | Users must be able to register for available events and receive confirmation after successful registration. |
| **FR-08** | **My Events Dashboard** | Registered users must be able to view their registered events, completed events, and participation status. |
| **FR-09** | **Admin Event Management** | Administrators must be able to create, edit, update, approve, cancel, and delete event records. |
| **FR-10** | **Input Validation** | The system must validate required fields, email format, student ID format, password confirmation, and event registration inputs before submission. |
| **FR-11** | **Confirmation and Feedback Messages** | The system must display confirmation and error messages for login, registration, event registration, event creation, updates, deletion, and invalid form submissions. |
| **FR-12** | **Event Data Storage** | Event information, user accounts, registrations, and reviews must be stored using browser localStorage to simulate persistent data during prototype execution. |
| **FR-13** | **About and Contact Pages** | The prototype must include About and Contact pages providing information about the platform and contact details for support. |
| **FR-14** | **Responsive User Interface** | The prototype must function correctly on desktop, tablet, and mobile devices using responsive layouts. |
| **FR-15** | **Event Review & Feedback** | Users who have attended a completed event must be able to submit a rating and written review. Reviews are only available after the event status changes to **Completed**. |
| **FR-16** | **Consistent User Interface Design** | All pages must maintain consistent colors, typography, navigation, spacing, icons, and button styles throughout the system. |
| **FR-17** | **Privacy and Responsible Data Collection** | The prototype must collect only necessary user information, simulate secure handling of user data, and provide a basic privacy notice where appropriate. |
| **FR-18** | **Prototype Traceability** | Every implemented feature must directly support the project's objective of improving campus event awareness, participation, and student engagement. |

---

# Minimum Technical Requirements

The Smart Campus Event Hub must be an interactive web prototype rather than a static design. Users should be able to navigate between pages, create accounts, log in, browse events, search events, view event details, register for events, manage registrations, submit reviews after completed events, and interact with simulated data.

## Technology Stack

| Component | Technology |
| --- | --- |
| Frontend | HTML5 |
| Styling | CSS3 |
| Programming Language | JavaScript (ES6) |
| Data Storage | Browser localStorage |
| Responsive Design | CSS Media Queries |
| Prototype Type | Interactive Web Prototype |

---

## Prototype Pages

The final prototype must include the following pages:

| Page | Purpose |
| --- | --- |
| Homepage | Landing page and navigation |
| Login | User authentication |
| Sign Up | User account registration |
| Events | Browse all campus events |
| Event Details | View detailed event information |
| My Events | View registered events, completed events, and submit reviews |
| Admin Dashboard | Manage campus events |
| About | Platform information |
| Contact | Contact information |

---

## Simulated Data

The prototype uses browser localStorage to simulate:

- User accounts
- Event records
- Event registrations
- Event reviews
- Administrator-managed event data

---

## Supported User Roles

| User Role | Permissions |
| --- | --- |
| Student | Register for events, browse events, search events, manage personal registrations, and submit reviews after completed events |
| Administrator | Create, edit, update, approve, cancel, and delete campus events |

---

## Non-Functional Requirements

| Requirement | Description |
| --- | --- |
| Usability | Simple and intuitive interface for first-year and international students |
| Performance | Pages should load quickly and interactions should respond immediately |
| Responsiveness | Compatible with desktop, tablet, and mobile devices |
| Reliability | Simulated data should remain available while stored in browser localStorage |
| Maintainability | Modular HTML, CSS, and JavaScript files for easier future development |
