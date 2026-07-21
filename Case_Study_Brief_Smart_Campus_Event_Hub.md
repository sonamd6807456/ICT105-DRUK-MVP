# Case Study Brief - Smart Campus Event Hub

## Case Context

Students often miss campus events because information is distributed across multiple platforms such as social media, messaging applications, university notice boards, and word of mouth. This makes it difficult for students to discover upcoming activities, meet registration deadlines, and receive important event updates. Student organizations and campus administrators also face challenges in promoting events, managing registrations, and communicating event information efficiently.

The **Smart Campus Event Hub** was developed to provide a centralized web-based platform where students can easily browse, search, register for, and manage campus events, while organizers and administrators can efficiently create and manage event information.

---

## MVP Experiment

The MVP experiment evaluated whether users could successfully:

1. Create a new account and log in.
2. Browse available campus events.
3. Search and filter events.
4. View detailed event information.
5. Register for an event and receive a confirmation message.
6. Save events to their Favorites list.
7. View and manage their user profile.
8. Submit reviews and feedback.
9. Allow organizers and administrators to create, update, and manage campus events through the Admin Dashboard.

---

## Validation Goal

The objective of the validation was to determine whether the Smart Campus Event Hub provides an easy-to-understand and useful workflow for students, organizers, and administrators.

The usability study aimed to evaluate whether users could successfully complete common event-related tasks, identify any usability problems, collect user feedback, and determine whether the MVP should continue to the next development stage with improvements.

---

## Practice Data

The validation analysis uses the collected usability testing data from the MVP experiment.

Files used include:

- `/data/validation-results-template.csv`
- `/data/validation-results-template.xlsx`

The dataset contains information such as:

- Test User ID
- User Role
- Prototype Version
- Assigned Task
- Task Completion Status
- Completion Time
- Ease of Use Score
- Usefulness Score
- Interest Level
- Confusion Points
- User Comments
- Requirements Affected

---

## Student Group Task

After completing the MVP validation, the project team will:

1. Analyze the collected validation results.
2. Calculate usability metrics such as task success rate, ease of use, usefulness, and interest level.
3. Identify common usability issues and user feedback.
4. Summarize the validation findings.
5. Update the system requirements based on the evidence collected.
6. Improve the prototype by addressing the identified usability issues.
7. Create GitHub Issues for the required improvements.
8. Prepare the Smart Campus Event Hub for the next implementation phase.

9. # Case Study Brief: Smart Campus Event Hub

## Problem Context

Students often find it difficult to discover and keep track of campus events because event information is spread across different communication channels such as social media, messaging groups, posters, emails, and university websites. As a result, students may miss important events, registration deadlines, or event updates.

Organizers also need a more centralized way to create, publish, update, and manage campus event information. Current alternatives may require sharing information through multiple platforms, which can make event information difficult to find and keep updated.

## Proposed Prototype

A web-based Smart Campus Event Hub prototype where students can browse campus events, search and filter events by relevant information, view event details, register for events, and view their participation information.

The prototype also allows organizers or administrators to create and manage event information, update event status, manage event capacity, and monitor event-related information through organizer or dashboard functions.

## Responsible IT Focus for Lab 09

Students must check what data is collected during event browsing and registration, whether personal information such as student names, student IDs, or email addresses is necessary, whether users understand how their registration information is used, whether external assets such as images, icons, fonts, code, or datasets are properly licensed and credited, and whether organizer and administrator functions are clearly separated from normal student functions.

The team must also review whether event information and registration data are protected from unauthorized changes, whether public event pages expose private student information, and whether basic input validation and status-update controls are implemented.

# Case Study Brief: Smart Campus Event Hub

## Practice purpose

This case is used only for Lab 10 guided practice. Students must apply the same implementation process to their own selected group project.

## Problem context

Students often miss campus events because event information is scattered across multiple platforms such as social media, posters, emails, and messaging applications. As a result, students may miss important academic, club, sports, and university activities due to late or incomplete information.

## Target users

- First-year undergraduate students who want to discover campus events and activities.
- International and exchange students who need a centralized platform to find university events and orientation activities.
- Student clubs and organizations that create and promote campus events.
- University staff and event coordinators responsible for publishing and managing official campus events.
- Campus administrators who monitor event information, registrations, and announcements through the administration dashboard.

## Minimum prototype idea

A web-based Smart Campus Event Hub that allows students to browse upcoming events, search and filter events by category, view event details, register for events, manage favorite events, and access a personalized student dashboard. Administrators can create, edit, and manage campus events through an admin dashboard.

## Practice note

The provided HTML, CSS, and JavaScript prototype uses browser **localStorage** and sample data to simulate event management and user interactions. It does not require a backend database. Teams may optionally replace **localStorage** with Firebase, Supabase, PHP/MySQL, or another backend solution for future development.
