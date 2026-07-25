# Prototype Testing Notes

## Test Environment

- Prototype link or folder: `prototype/`
- Browser/device used: Google Chrome on a laptop; responsive layout reviewed for desktop and mobile screen sizes
- Tester role: Student user and organizer/administrator
- Test date: 25 July 2026
- Testing limitation: Testing used fictional sample event data and a limited number of devices. Performance with large datasets, simultaneous users, shared data across devices, and additional browsers still requires further testing.

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open `prototype/index.html` and review the homepage | Homepage shows the Smart Campus Event Hub title, target users, problem being solved, purpose, navigation, and main action buttons | The homepage displayed the Smart Campus Event Hub introduction, upcoming campus events, event categories, navigation links, and main actions such as Browse Events and Create Event | Passed | No major functional issue found; final appearance may vary slightly on different devices | Test the homepage on additional browsers and capture an updated screenshot |
| T-02 | Submit event | Open the event submission form, complete the required fields, and submit an event | Event information is saved or simulated, required fields are validated, and a confirmation message appears | The event submission form accepted the event title, category, date, time, location, organizer, description, and capacity. Required fields were validated and a confirmation message was displayed | Passed | Event data is stored using browser `localStorage` and is not shared across different devices | Use a shared backend database in a future production version |
| T-03 | View event list | Open the Event Listing page and review available campus events | Sample and approved events are displayed with relevant event information | Event cards displayed realistic campus events such as ICT Coding Workshop, Career Fair 2026, Campus Sports Festival, and International Cultural Night | Passed | Pending or rejected events may not appear publicly, which may confuse users if the moderation process is not explained | Add clearer information explaining event approval and publishing status |
| T-04 | Search/filter | Enter a keyword and select a category or event status filter | Only relevant events are displayed based on the search or filter selection | Keyword search and category filtering displayed matching campus events. Event status information was also shown on event cards | Passed with limitation | Search may require more exact keywords and additional filtering options could improve discovery | Improve keyword matching and consider adding organizer, date, and location filters |
| T-05 | Detail view | Select an event from the Event Listing page | The selected event's complete information is displayed clearly | The event detail view displayed the title, description, category, date, time, location, organizer, capacity, registration status, and Register button | Passed | Event capacity and availability could be made more visually noticeable | Display available seats and registration capacity more clearly |
| T-06 | Register for event | Open an event detail page, click Register, complete the registration form, and submit | Registration is completed or simulated and a clear confirmation message is displayed | The registration form accepted the required information and displayed a registration confirmation message after submission | Passed | Some users were initially unsure whether registration had been completed successfully | Improve the success message and display clearer confirmation feedback |
| T-07 | Status update | Open the organizer/admin dashboard and approve, reject, edit, or delete an event | Event status changes and the event management information is updated | Organizer/admin actions allowed event records to be managed, including status updates such as Pending, Approved, and Rejected | Passed with limitation | Organizer and administrator access is simulated through frontend JavaScript and is not secure for production use | Implement server-side authentication and role-based authorization in a future version |
| T-08 | Dashboard metrics | Open the student or organizer/admin dashboard and compare displayed statistics with stored event data | Dashboard summary information is visible and reflects the available event and registration data | Dashboard metrics displayed information such as total events, upcoming events, registered participants, and popular event categories | Passed with limitation | Some statistics are based on sample or simulated data | Connect all dashboard statistics to a shared database in a future version |

## Summary of Issues

1. Event and registration data is stored using browser `localStorage`, so information is limited to the current browser and device.
2. Authentication and organizer/administrator access are simulated through frontend JavaScript and are not secure for production use.
3. Search mainly depends on keyword matching and may require more exact terms.
4. Category filtering works, but additional filters such as date, location, and organizer could improve event discovery.
5. Registration confirmation feedback should be clearer so users immediately know that their registration was successful.
6. Event capacity and available seats should be displayed more clearly on the event detail page.
7. Some dashboard statistics use fictional or simulated sample data.
8. Testing was completed with limited sample data and devices, so additional cross-browser, mobile, and large-data testing is required.
9. A campus map could be added to event details in a future version to help students locate event venues.
10. Future versions could include email notifications and event reminders after the core event discovery and registration workflow has been fully validated.

## Improvements Completed During Lab 11

- Updated the Smart Campus Event Hub homepage with a clearer project purpose, target user information, upcoming events, and main calls to action.
- Improved the Event Listing page with realistic event cards, keyword search, category filtering, event status, and event information.
- Improved event details with the event title, description, date, time, location, organizer, capacity, registration status, and registration action.
- Improved the event registration form with required-field validation and clearer confirmation feedback.
- Added or improved simulated event data storage using JavaScript arrays and browser `localStorage`.
- Improved the Student Dashboard with registered events, upcoming activities, participation information, and event history.
- Improved the Organizer/Admin Dashboard with event creation, editing, deletion, approval, rejection, and event status management.
- Added dashboard summary information including total events, upcoming events, registered participants, and popular categories.
- Improved responsive design for desktop, tablet, and mobile screen sizes.
- Added a basic privacy notice and limited data collection to support responsible data handling.
- Updated `docs/feature-implementation-status.md`, `docs/prototype-testing-notes.md`, `docs/weekly-logbook.md`, `docs/system-requirements.md`, `docs/user-stories.md`, and `README.md`.
- GitHub commit references: Add the final Lab 11 commit links after each team member uploads their assigned files.
