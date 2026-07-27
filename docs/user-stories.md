# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

**As a [user role], I want to [goal/action], so that [benefit/value].**

---

# User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Year 1 Student | As a Year 1 student, I want to access the Smart Campus Event Hub homepage, so that I can quickly navigate to important features. | FR-01 | Must | Homepage displays the system title, navigation menu, featured events, and quick access buttons. | `homepage.png` |
| US-02 | Exchange Student | As an exchange student, I want to log into my account, so that I can access my personalized dashboard and event information. | FR-02 | Must | Users can successfully log in using valid credentials and are redirected to the dashboard. | `login.png` |
| US-03 | New Student | As a new student, I want to create an account, so that I can access all platform features. | FR-03 | Must | Registration form validates required fields and successfully creates a new account. | `signup.png` |
| US-04 | Year 1 Student | As a Year 1 student, I want to browse all campus events, so that I can discover activities I want to join. | FR-04 | Must | Events are displayed as organized event cards with images and summaries. | `events.png` |
| US-05 | Exchange Student | As an exchange student, I want to search and filter events, so that I can quickly find events that match my interests. | FR-05 | Must | Search keywords and category filters display matching events instantly. | `search-filter.png` |
| US-06 | Year 2 Student | As a Year 2 student, I want to view complete event details, so that I can decide whether to participate. | FR-06 | Must | Event details display the organizer, venue, schedule, capacity, available seats, and registration status. | `event-details.png` |
| US-07 | Year 1 Student | As a Year 1 student, I want to register for campus events, so that I can participate in activities. | FR-07 | Must | Registration is completed successfully and a confirmation message is displayed. | `event-registration.png` |
| US-08 | Year 2 Student | As a Year 2 student, I want to view my registered and completed events, so that I can track my participation history. | FR-08 | Must | Dashboard displays registered events, completed events, and participation status. | `dashboard.png` |
| US-09 | Student Club Organizer | As a student club organizer, I want to create, edit, update, and manage my club's events, so that students receive accurate event information. | FR-09 | Must | Organizer can successfully manage event records. | `admin-dashboard.png` |
| US-10 | Administrator | As an administrator, I want the system to validate event information before saving it, so that incomplete or incorrect data cannot be submitted. | FR-10 | Must | Invalid or incomplete input displays validation messages before submission. | `input-validation.png` |
| US-11 | Exchange Student | As an exchange student, I want confirmation messages after completing actions, so that I know whether my request was successful. | FR-11 | Must | Success and error messages are displayed after login, registration, and event actions. | `confirmation-message.png` |
| US-12 | Administrator | As an administrator, I want event information and registrations to be stored, so that users can retrieve updated information later. | FR-12 | Must | Event records and registrations remain available using browser localStorage after refreshing the page. | localStorage demonstration |
| US-13 | Campus Staff | As a campus staff member, I want to access the About and Contact pages, so that I can learn about the platform and contact the development team if needed. | FR-13 | Should | About and Contact pages display complete information correctly. | `about.png`, `contact.png` |
| US-14 | Exchange Student | As an exchange student, I want the website to work on my phone, tablet, and laptop, so that I can access it anywhere. | FR-14 | Must | The website automatically adjusts to different screen sizes. | `responsive-mobile-view.png` |
| US-15 | Year 2 Student | As a Year 2 student, I want to submit a rating and review after attending a completed event, so that I can share my experience and help improve future events. | FR-15 | Should | Review form becomes available only after the event status is marked as Completed. | `event-review.png` |
| US-16 | Year 1 Student | As a Year 1 student, I want the interface to remain visually consistent across all pages, so that the system is easy to learn and use. | FR-16 | Should | Navigation, colors, typography, buttons, and layouts remain consistent throughout the system. | Multiple screenshots |
| US-17 | Exchange Student | As an exchange student, I want my personal information to be collected responsibly, so that my privacy is protected. | FR-17 | Must | Registration collects only required information and displays a privacy notice. | `privacy-notice.png` |
| US-18 | Administrator | As an administrator, I want all implemented features to remain linked to the documented requirements, so that the prototype can be easily maintained and evaluated. | FR-18 | Must | Every functional requirement can be traced to documentation, screenshots, and implementation evidence. | GitHub documentation |

---

# Acceptance Criteria Checklist

A good acceptance criterion should be:

- **Testable** — can be verified with a clear pass/fail outcome.
- **Observable** — visible and demonstrable in the final prototype.
- **Connected to a requirement** — maps directly to a functional requirement (FR-XX).
- **Connected to user evidence** — supported by survey responses and prototype demonstration.
- **Specific** — detailed enough that anyone can determine whether the feature works correctly.

---

# Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| FUT-01 | Push notification reminders require backend notification services. | Add after MVP validation. |
| FUT-02 | Personalized event recommendations require recommendation algorithms and user preference data. | Implement in a future version. |
| FUT-03 | Calendar synchronization requires integration with external calendar services. | Add after the production version is developed. |
| FUT-04 | QR-code attendance tracking requires backend validation. | Add after backend implementation. |
