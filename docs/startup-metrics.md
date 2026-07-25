# Startup / Product Metrics


## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Events | Usage | Shows the total number of events available on the platform. | Count all event records | `localStorage (events)` | Admin Dashboard — Overview |
| M-02 | Upcoming Events | Status | Shows how many events are currently open for students. | Count events where `status = Upcoming` | `localStorage (events)` | Homepage / Dashboard |
| M-03 | Total Registrations | Usage | Measures overall student participation in campus events. | Count all registration records | `localStorage (registrations)` | Student Dashboard |
| M-04 | Registered Students | User Activity | Shows how many student accounts are available to use the platform. | Count registered student accounts | `localStorage (users)` | Admin Dashboard — Users |
| M-05 | Completed Events | Status | Tracks events that have been successfully completed. | Count events where `status = Completed` | `localStorage (events)` | Admin Dashboard |
| M-06 | Academic Event Count | Category | Measures the number of academic-related events available. | Count events where `category = Academic` | `localStorage (events)` | Admin Dashboard — Event Breakdown |
| M-07 | Club Activity Event Count | Category | Measures the number of club and student organization events. | Count events where `category = Club Activity` | `localStorage (events)` | Admin Dashboard — Event Breakdown |
| M-08 | Total Reviews Submitted | Engagement | Measures how many event reviews students have submitted. | Count all review records | `localStorage (reviews)` | Admin Dashboard — Reviews |
| M-09 | Average Event Rating | User Satisfaction | Shows student satisfaction with completed events. | Sum of ratings ÷ Number of reviews | `localStorage (reviews)` | Event Details |
| M-10 | Task Success Rate | Validation | Shows whether users successfully completed the main Smart Campus Event Hub tasks. | Completed tasks ÷ Total validation records × 100 | Lab 08 Validation Results | Analytics Documentation |
| M-11 | Average Usefulness Score | Validation | Measures how useful students perceive the Smart Campus Event Hub to be. | Sum of usefulness ratings ÷ Total responses | Lab 08 Validation Dataset | Analytics Documentation |
| M-12 | Average Ease of Use Score | Validation | Measures how easy students found the prototype to use. | Sum of ease-of-use ratings ÷ Total responses | Lab 08 Validation Dataset | Analytics Documentation |

---

## 2. Metrics Interpretation

The Smart Campus Event Hub uses these metrics to evaluate both system performance and student engagement. Total Events, Upcoming Events, and Completed Events help administrators monitor the availability and progress of campus activities. Total Registrations and Registered Students measure participation and platform adoption among students. Academic Event Count and Club Activity Event Count provide insights into the distribution of event types offered on campus. Total Reviews Submitted and Average Event Rating help organizers understand student satisfaction and improve future events. Task Success Rate, Average Usefulness Score, and Average Ease of Use Score are based on the Lab 08 validation results and demonstrate how effectively users can complete tasks while reflecting their overall experience with the prototype. Together, these metrics support data-driven improvements to the Smart Campus Event Hub.

---

## 3. Link to Final Prototype

These metrics are demonstrated throughout the Smart Campus Event Hub prototype. The Admin Dashboard displays statistics such as Total Events, Upcoming Events, Completed Events, Registered Students, Total Reviews Submitted, and event category breakdowns using data stored in LocalStorage. The Student Dashboard displays registration history and participation records. The Event Details page displays the Average Event Rating calculated from submitted student reviews. Validation metrics, including Task Success Rate, Average Usefulness Score, and Average Ease of Use Score, are presented in the project's analytics and validation documentation based on the Lab 08 user testing results. Together, these metrics demonstrate the effectiveness of the platform in supporting event discovery, registration, participation tracking, student feedback, and administrative decision-making.
