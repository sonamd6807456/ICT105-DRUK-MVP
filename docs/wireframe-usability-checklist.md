# Wireframe Usability Review Checklist


| Check Item | Yes/No | Evidence or Screenshot |
|---|---|---|
| The homepage clearly states the problem and main action. | Yes | **homepage.png** – Displays the Smart Campus Event Hub title, project purpose, navigation bar, and main action buttons (**Browse Events** and **Create Event**). |
| The main user pathway can be followed from start to finish. | Yes | **homepage.png → record-list.png → detail-view.png → input-form.png** demonstrates the complete student journey. **dashboard.png** and **admin-view.png** support organizer and administrator workflows. |
| The input form includes required fields and validation feedback. | Yes | **input-form.png** – Includes event title, category, date, time, venue, organizer, description, capacity, required field labels, Submit button, and success/error message area. |
| The record list includes search/filter/category controls. | Yes | **record-list.png** – Includes search bar, category filter, event status, and event cards with sample data. |
| The detail view shows full information and current status. | Yes | **detail-view.png** – Displays event title, description, date, time, venue, organizer, available seats, event status, and Register button. |
| The admin view includes at least one management action. | Yes | **admin-view.png** – Includes Approve, Edit, Delete, and Update Event actions for managing event records. |
| The dashboard shows meaningful summary information. | Yes | **dashboard.png** – Displays total events, upcoming events, completed events, category summary, and simple analytics cards/chart. |
| Privacy and data responsibility are considered. | Yes | Registration form collects only necessary student information and displays a basic privacy notice. |
| The profile page displays participation history. | Yes | **profile.png** – Shows registered events, attended events, and participation history. |
| Navigation, layout, buttons, and typography are consistent across all wireframes. | Yes | All wireframes use the same navigation bar (Home, Events, Dashboard, Organizer, Profile) and consistent layout. |
| The prototype considers responsive design. | Yes | Wireframes use a responsive card-based layout suitable for desktop and mobile screens. |
| The design uses realistic sample data. | Yes | Sample events such as **AI Workshop**, **Sports Day**, **Photography Club Meetup**, with realistic dates, venues, organizers, and registration status. |
| Each screen maps to system-requirements.md. | Yes | Homepage (FR-01, FR-02), Input Form (FR-03, FR-10, FR-11), Record List (FR-05, FR-06, FR-08), Detail View (FR-07, FR-08), Dashboard (FR-12), Admin View (FR-09). |

# Issues to Create / Track in GitHub

1. Convert the wireframes into clickable HTML/CSS pages.
2. Implement event search and category filter using JavaScript.
3. Create the event registration form with input validation.
4. Build the admin event management page (approve, edit, delete events).
5. Develop the dashboard using sample event statistics.
6. Connect event data using JSON, Google Sheets, Firebase, or another simple database.
7. Test responsive design on desktop and mobile devices.
8. Record a walkthrough video demonstrating the complete user flow.
