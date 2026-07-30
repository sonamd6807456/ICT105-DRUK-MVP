# Smart Campus Event Hub Final Demo Script

**Recommended duration:** 5–7 minutes 

**Prototype:** https://sonamd6807456.github.io/ICT105-DRUK-MVP/landing-page

**Demo:** Browser-based prototype (HTML, CSS, JavaScript, LocalStorage)

---

# Before the Presentation

- Open the Smart Campus Event Hub prototype in a fresh browser window.
- Ensure JavaScript and browser LocalStorage are enabled.
- Prepare several sample campus events for demonstration.
- Use fictional event information only. Do not enter real personal data.
- Keep the GitHub repository, README, screenshots, Power BI dashboard, and validation documents available as supporting evidence.
- If necessary, clear LocalStorage before beginning the demonstration to ensure a clean prototype state.

---

# 1. Opening — 0:00–0:40

**Speaker:**

"Smart Campus Event Hub is DRUK's solution for helping Rangsit University students discover campus activities in one centralized platform. Currently, students receive event information through posters, emails, social media, messaging apps, and word of mouth, making it easy to miss important opportunities."

**Evidence to Mention**

- Customer discovery involved 20 university students.
- Most respondents reported that campus event information is scattered across multiple platforms.
- Many students said they missed events because they learned about them after registration had already closed.

**Value Proposition**

"Smart Campus Event Hub centralizes campus event information so students can easily discover, search, register for, and manage campus events from one platform."

---

# 2. User Scenario — 0:40–1:00

**Speaker:**

"Imagine a first-year international student looking for upcoming workshops and club activities. Instead of searching multiple websites and social media pages, the student visits Smart Campus Event Hub to quickly find, register for, and manage campus events."

---

# 3. Prototype Walkthrough — 1:00–4:55

| Time | Screen / Action | What to Demonstrate | Requirement |
|------|-----------------|---------------------|-------------|
| 1:00–1:25 | Homepage | Show the Smart Campus Event Hub homepage, explain the project purpose, target users, navigation menu, featured campus events, and quick access buttons. | FR-01 |
| 1:25–1:55 | Event Listing | Browse all available campus events. Explain event categories, organizers, event dates, locations, and registration availability. | FR-01 |
| 1:55–2:20 | Search & Filter | Demonstrate searching events by keyword and filtering by category. Show how students quickly locate relevant events. | FR-03 |
| 2:20–2:45 | Event Details | Open an event and explain the event description, organizer, venue, date, time, registration deadline, and event status. | FR-04 |
| 2:45–3:20 | Event Registration | Complete an event registration form. Demonstrate required-field validation and successful registration confirmation. | FR-05 |
| 3:20–3:45 | Student Dashboard | Show registered events, upcoming activities, participation history, and event status tracking. | FR-08, FR-10 |
| 3:45–4:30 | Organizer/Admin Dashboard | Demonstrate publishing a new event, editing event details, managing participant registrations, and monitoring event participation. | FR-02, FR-09 |
| 4:30–4:55 | Complete User Journey | Summarize the complete workflow from discovering an event to successful registration and dashboard tracking. | FR-01 to FR-10 |

---

# 4. Technical Explanation — 4:55–5:25

**Speaker:**

"The Smart Campus Event Hub MVP is developed using HTML5, CSS3, and JavaScript. Event information is stored using browser LocalStorage, allowing the prototype to simulate real functionality without requiring a backend database."

**Current MVP Features**

- Centralized event listing
- Search and filtering
- Event details
- Event registration
- Student dashboard
- Organizer dashboard
- LocalStorage simulation

**Responsible IT Statement**

"Only fictional demonstration data is used in this prototype. A production version would require a secure backend database, user authentication, role-based authorization, encrypted data storage, and stronger privacy and security controls."

---

# 5. Evidence and Validation — 5:25–6:05

**Speaker:**

"The prototype was evaluated through customer validation and usability testing. Feedback confirmed that the centralized event platform makes it easier for students to discover campus activities."

**Validation Results**

- Customer validation conducted with university students.
- Users successfully completed the main event discovery and registration tasks.
- Feedback showed that the search function and event registration workflow were easy to understand.
- Suggested improvements included:
  - More visible search and filter controls.
  - Clearer event status labels.
  - Improved registration confirmation messages.
  - Stronger form validation.
  - Better organizer dashboard navigation.

Explain that these improvements were incorporated into the final Smart Campus Event Hub prototype.

---

# 6. Closing — 6:05–6:35

**Speaker:**

"Smart Campus Event Hub demonstrates a complete student journey—from discovering campus events to registering and managing participation through a centralized platform. The project successfully addresses the problem of scattered event information while providing a simple and user-friendly solution for students and event organizers."

**Future Work**

- Backend database integration
- Secure user authentication
- Email and mobile notifications
- Calendar synchronization
- QR code event check-in
- University system integration
- Push notification support
- Mobile application development

**Final Statement**

"Smart Campus Event Hub transforms scattered campus announcements into one centralized platform, helping students stay informed, participate more actively, and never miss important campus opportunities. Thank you—we welcome your questions."

---

# Contingency Plan

- If GitHub Pages is unavailable, open the local `prototype/index.html` file.
- If event data is missing, refresh the browser or clear LocalStorage before restarting the demonstration.
- If time is limited, demonstrate the essential workflow:
  1. Homepage
  2. Event Listing
  3. Search & Filter
  4. Event Details
  5. Event Registration
  6. Student Dashboard
  7. Organizer/Admin Dashboard
- If browser data becomes inconsistent, clear LocalStorage and restart the demonstration using the default sample events.
