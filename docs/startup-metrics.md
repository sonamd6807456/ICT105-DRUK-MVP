# Startup / Product Metrics

---

# 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Events | Usage | Shows the total number of events available on the platform. | Count all event records | localStorage (Events) | Admin Dashboard |
| M-02 | Upcoming Events | Status | Shows how many events are currently available for students to register. | Count events where Status = Upcoming | Event Records | Homepage / Dashboard |
| M-03 | Completed Events | Status | Tracks the number of successfully completed events. | Count events where Status = Completed | Event Records | Dashboard |
| M-04 | Total Event Registrations | Engagement | Measures overall student participation in campus events. | Count all registration records | Registration Records | Student Dashboard |
| M-05 | Registration Success Rate | Validation | Measures how successfully students complete event registration. | Successful Registrations ÷ Registration Attempts × 100 | Registration Logs | Analytics Summary |
| M-06 | Event Capacity Utilization | Performance | Indicates how full each event is. | Registered Students ÷ Event Capacity × 100 | Event & Registration Records | Event Details |
| M-07 | Most Popular Event | Analytics | Identifies the event with the highest number of registrations. | Event with the highest registration count | Registration Records | Admin Dashboard |
| M-08 | Most Popular Category | Analytics | Shows which event category attracts the highest student participation. | Count registrations by category and select the highest | Event & Registration Records | Dashboard |
| M-09 | Average Event Rating | User Satisfaction | Measures student satisfaction after attending events. | Total Rating ÷ Number of Reviews | Student Reviews | Event Details |
| M-10 | Total Reviews Submitted | Engagement | Measures student feedback activity. | Count all review records | Review Records | Dashboard |
| M-11 | Active Student Accounts | Usage | Shows the total number of registered student accounts. | Count all student accounts | User Records | Admin Dashboard |
| M-12 | Login Success Rate | Validation | Measures successful student logins. | Successful Logins ÷ Login Attempts × 100 | Login Logs | Login Page |
| M-13 | Event Search Usage | Engagement | Indicates how often students use the search feature. | Count search actions | Search Logs | Events Page |
| M-14 | Category Filter Usage | Engagement | Measures how frequently students filter events by category. | Count category filter selections | Filter Logs | Events Page |
| M-15 | Student Dashboard Visits | Usage | Shows how often students access their personal dashboard. | Count dashboard visits | Activity Logs | Student Dashboard |

---

# 2. Metrics Interpretation

The Smart Campus Event Hub uses these metrics to evaluate user engagement, event performance, and overall system effectiveness. Total Events, Upcoming Events, and Completed Events help administrators monitor the availability and progress of campus activities. Total Event Registrations, Event Capacity Utilization, and the Most Popular Event provide valuable insights into student participation and help organizers understand which events attract the greatest interest. Registration Success Rate, Login Success Rate, Event Search Usage, and Category Filter Usage measure how effectively students interact with the platform and identify areas where usability can be improved. Average Event Rating and Total Reviews Submitted provide direct feedback from students and help organizers improve future events. Active Student Accounts and Student Dashboard Visits indicate how actively students are using the platform. Together, these metrics support continuous improvement of the Smart Campus Event Hub and help ensure that the platform delivers a valuable experience for both students and administrators.

---

# 3. Link to Final Prototype

The Smart Campus Event Hub prototype demonstrates these metrics through several pages of the website. The Admin Dashboard displays Total Events, Upcoming Events, Completed Events, Active Student Accounts, Most Popular Event, and Most Popular Category using data stored in LocalStorage. The Student Dashboard displays registered events, participation history, and completed events. The Event Details page displays Event Capacity Utilization and Average Event Rating calculated from student registrations and reviews. Event Search Usage and Category Filter Usage are demonstrated through the Events page, while Registration Success Rate and Login Success Rate are measured during usability testing and validation rather than being displayed directly in the interface. These metrics collectively demonstrate how the Smart Campus Event Hub supports event discovery, online registration, participation tracking, student feedback, and data-driven decision-making for administrators.

---

# 4. Future Metrics

The following metrics may be implemented in future versions of the Smart Campus Event Hub:

- Average Registration Time
- Daily Active Users (DAU)
- Monthly Active Users (MAU)
- Event Attendance Rate
- Event Cancellation Rate
- Notification Click-Through Rate
- Student Retention Rate
- Average Time Spent Browsing Events
- Repeat Event Participation Rate
- Organizer Response Time
