# Startup / Product Metrics

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Events | Usage | Shows the total number of events available on the platform. | Count all event records | `localStorage (events)` | Admin Dashboard |
| M-02 | Upcoming Events | Status | Shows the number of events currently available for student registration. | Count events where `status = Upcoming` | `localStorage (events)` | Homepage |
| M-03 | Total Registrations | Usage | Measures overall student participation in campus events. | Count all registration records | `localStorage (registrations)` | Student Dashboard (My Events) |
| M-04 | Registered Students | User Activity | Shows the total number of student accounts using the platform. | Count all registered student accounts | `localStorage (users)` | Admin Dashboard |
| M-05 | Completed Events | Status | Tracks events that students have successfully completed. | Count events where `status = Completed` | `localStorage (events)` | Student Dashboard (My Events) |
| M-06 | Most Popular Event Category | Analytics | Identifies the event category with the highest student participation. | Count registrations by category and select the highest | `localStorage (events)` + `localStorage (registrations)` | Admin Dashboard |
| M-07 | Most Registered Event | Analytics | Identifies the event with the highest number of student registrations. | Find the event with the highest registration count | `localStorage (events)` + `localStorage (registrations)` | Admin Dashboard |
| M-08 | Total Reviews Submitted | Engagement | Measures how many reviews students have submitted after attending events. | Count all review records | `localStorage (reviews)` | Student Dashboard (My Events) / Admin Dashboard – Review Management |
| M-09 | Average Event Rating | User Satisfaction | Measures student satisfaction with completed events. | Sum of ratings ÷ Number of reviews | `localStorage (reviews)` | Event Details |
| M-10 | Task Success Rate | Validation | Shows whether users successfully completed the main Smart Campus Event Hub tasks during usability testing. | Completed tasks ÷ Total validation records × 100 | Lab 08 Validation Results | Analytics Documentation |
| M-11 | Average Usefulness Score | Validation | Measures how useful students perceived the Smart Campus Event Hub during validation testing. | Sum of usefulness ratings ÷ Total responses | Lab 08 Validation Dataset | Analytics Documentation |
| M-12 | Average Ease of Use Score | Validation | Measures how easy students found the prototype to use during usability testing. | Sum of ease-of-use ratings ÷ Total responses | Lab 08 Validation Dataset | Analytics Documentation |

---

## 2. Metrics Interpretation

The Smart Campus Event Hub uses these metrics to evaluate platform performance, student engagement, and the overall effectiveness of the prototype. Total Events and Upcoming Events indicate whether the platform is actively providing opportunities for students to participate in campus activities. Total Registrations, Registered Students, and Completed Events measure platform adoption and student participation. Most Popular Event Category and Most Registered Event help administrators understand which events generate the highest level of interest and can be used to improve future event planning. Total Reviews Submitted and Average Event Rating provide valuable feedback on students' experiences and event quality. Task Success Rate, Average Usefulness Score, and Average Ease of Use Score are based on the Lab 08 validation results and demonstrate the usability and value of the Smart Campus Event Hub. Together, these metrics provide meaningful insights that support continuous improvement and informed decision-making.

---

## 3. Link to Final Prototype

The Smart Campus Event Hub prototype demonstrates these metrics across multiple screens. The **Admin Dashboard** displays statistics such as Total Events, Registered Students, Most Popular Event Category, Most Registered Event, and review management information using data stored in LocalStorage. The **Homepage** displays Upcoming Events that students can browse and register for. The **Student Dashboard (My Events)** allows students to view their registered events, completed events, submit reviews, and view their previously submitted reviews. The **Event Details** page displays the Average Event Rating calculated from student reviews. Validation metrics, including Task Success Rate, Average Usefulness Score, and Average Ease of Use Score, are presented in the project's analytics documentation using the results collected during Lab 08 usability testing. Together, these metrics demonstrate how the Smart Campus Event Hub supports event discovery, online registration, participation tracking, student feedback, review moderation, and data-driven decision-making for administrators.
