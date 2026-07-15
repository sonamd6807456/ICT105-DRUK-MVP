# Project Name
Smart Campus Event Hub

# Project Goal
To develop a web-based Smart Campus Event Hub that enables first-year and international students at Rangsit University to discover campus events, register for activities, and receive timely notifications from a single platform.

## Project Objectives

- Centralize campus event information into one platform.
- Increase student participation in campus activities.
- Reduce missed registration deadlines.
- Improve communication between students and organizers.
- Provide a simple and user-friendly event management system.

## Course Information
Course Code: ICT105

Course Name: Fundamental Technology Entrepreneurship

Instructor: Dr. Herison Surbakti

Project Type: 14-Labs Continuous IT Startup MVP Development

## Team Name
DRUK

## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Sonam Deki | Product Lead, Documentation Lead | Define problem, target users, value proposition, and project direction |
| Tenzin Dema | Technical Lead | Manage repository, prototype development, and technical feasibility | 
| Kinley Zam | UX/UI Lead, Validation Lead | Design interface screens, conduct user research, and maintain validation evidence |

## Initial Problem Area
University students, especially first-year and international students, often miss campus events, workshops, club activities, and important deadlines because information is scattered across posters, emails, social media pages, messaging applications, and university websites.

## Target Users
**Primary Target Users**

- First-year undergraduate students at Rangsit University who frequently miss campus events because information is scattered across multiple communication channels.
- International and exchange students who are unfamiliar with university communication channels.

**Secondary Target Users**

- Student clubs and organizations that need an efficient platform to publish and manage events.
- Campus administrators responsible for promoting university activities.

## Initial IT Venture Direction
Develop a web-based Smart Campus Event Hub that centralizes campus event announcements, registrations, reminders, and notifications into a single platform, making it easier for students to discover and participate in university activities.

## Technology Possibility
Technology Stack:
- HTML5
- CSS3
- JavaScript
- Browser LocalStorage (MVP data simulation)
- GitHub (Version Control)
- Draw.io (Diagrams)
- Figma / HTML (Wireframes & Prototype)
  
## Repository Structure
* docs: Project profiles, idea logs, weekly logbooks, and opportunity scan documents. 
* prototype: Interface mockups, wireframes, and screen designs.
* data: Survey responses, interview notes, and validation evidence.
* finance: Budget estimates and cost planning documents.
* diagrams: User flow diagrams and system architecture.
* screenshots: Visual records of prototype progress.
* pitch: Final presentation slides and pitch materials.

## Weekly Progress Log

| Lab | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository setup, team profile, initial three-idea logbook, GitHub repository structure | Completed |
| Lab 2 | Opportunity scanning and NUF scoring | Six-idea opportunity table, technology feasibility mapping, NUF scoring, selected project opportunity (Smart Campus Event Hub) | Completed |
| Lab 3 | Customer Problem Discovery | Target Respondent Profile, Customer Discovery Survey, Problem Notes, Customer Discovery Summary, Assumption-Evidence Table, Weekly Logbook Updates | Completed |
| Lab 4 | User Persona, Requirements, and User Stories | User Persona (Maya Sharma), User Stories, User Flow Diagram, Functional and Non-Functional Requirements, MVP Feature Scope, Requirement Traceability | Completed |
| Lab 5 | Product Concept and UI/UX Wireframe | Product Concept Document, Feature-Requirement Mapping, Wireframe Specification, Homepage Wireframe, Event Listing Wireframe, Event Details Wireframe, Dashboard Wireframe, Organizer View Wireframe, Clickable Prototype Draft | Completed |
| Lab 6 | Business Model Canvas and Technical Architecture | Business Model Canvas, Customer Segment Value, Feature-Value Mapping, System Architecture Diagram, Data Flow Diagram, Technical Architecture Documentation, README Updates | Completed |
| Lab 7 | MVP Prototype Development and Experiment Preparation | Functional Web Prototype Development using HTML, CSS, JavaScript, LocalStorage Simulation, MVP Experiment Plan, Usability Testing Preparation, Success Metrics and Decision Rules | Completed |
| Lab 8 |  |  | Not Started |
| Lab 9 |  |  | Not Started |
| Lab 10 |  |  | Not Started |
| Lab 11 |  |  | Not Started |
| Lab 12 |  |  | Not Started |
| Lab 13 |  |  | Not Started |
| Lab 14 |  |  | Not Started |

----

# Lab 03 – Customer Problem Discovery

## Overview

In Lab 03, our team conducted customer problem discovery to better understand how students learn about campus events, workshops, competitions, and university activities. The objective was to determine whether difficulties in discovering campus events represent a genuine problem for students and whether there is a need for a more organized solution.

## Target Respondents

Customer discovery was conducted with 20 students from Rangsit University. The respondents included:

* First-year undergraduate students who are still becoming familiar with university communication channels and campus activities.
* International and exchange students who may have limited access to informal information networks.
* Students who regularly participate in campus events, workshops, and extracurricular activities.
* Students who had previously missed campus events or registration deadlines due to scattered information.

##  Research Method

The team conducted customer discovery using an online survey and informal interviews with 20 students. Participants were asked how they currently discover campus events, the challenges they face, and the features they would expect from a centralized event platform. The responses were analyzed to validate the problem and identify user needs.

## Main Evidence Found

* Event information is distributed across multiple channels, including social media, messaging groups, student clubs, university announcements, and posters.
* Students often discover events after registration deadlines or after the event has already taken place.
* Important event announcements can be difficult to find because they are mixed with large amounts of unrelated information.
* Students frequently rely on friends and classmates to stay informed about upcoming activities.
* There is no single platform where students can easily view and track all campus events.

## Updated Problem Statement

University students, particularly first-year and international students, face challenges in discovering and keeping track of campus events because information is scattered across multiple communication channels. As a result, students may miss valuable opportunities, registration deadlines, and campus activities, reducing their participation and engagement in university life.

## Decision for Next Step

In Lab 04, we will analyze the collected evidence to identify the primary customer segment and their most important needs. We will develop user personas and user stories, prioritize key features, and begin defining the MVP requirements for the Smart Campus Event Hub. 

----

# Lab 04: User Persona, Requirements, and User Stories

## Primary Target User

The primary users of the Smart Campus Event Hub are university students, especially first-year and international students, who want an easy way to discover campus events, receive timely notifications, and register for activities without searching across multiple platforms. Club organizers are secondary users who publish and manage campus events.


## Persona Summary

**Persona Name:** Maya Sharma
**Age:** 18
**Year of Study:** First-Year Undergraduate Student
**University:** Rangsit University
**User Type:** Primary Target User
**Device Used:** Smartphone (Android/iPhone) and Laptop
**Digital Habits:**
* Uses LINE every day for university communication.
* Checks Instagram and Facebook several times a day.
* Frequently accesses the university website for announcements.
**Goals:**
* Find campus events quickly.
* Register for workshops and competitions before deadlines.
* Receive reminders about upcoming events.
* Participate more actively in university activities.
**Main Pain Points:**
* Event information is scattered across posters, emails, social media, websites, and messaging groups.
* Important announcements are easy to miss.
* Registration deadlines are often discovered too late.
**Current Workaround:**
Maya checks Facebook pages, LINE groups, university websites, posters, emails, and often asks friends or seniors for event information.
**How Smart Campus Event Hub Helps:**
The platform provides one centralized location for campus events, allowing Maya to discover activities, register online, and receive timely reminders, reducing the chance of missing important opportunities.


## Key Requirements
 | Req ID | Requirement | Priority | Related Evidence |
|--------|-------------|----------|------------------|
| FR-01 | Display a centralized list of upcoming campus events. | Must | E02, E05, E07 |
| FR-02 | Allow organizers to publish new campus events. | Must | E04 |
| FR-03 | Provide search and filtering by category, date, organizer, and keywords. | Must | E07 |
| FR-04 | Display detailed event information. | Must | E03, E08 |
| FR-05 | Allow students to register for events. | Must | E08 |
| FR-06 | Send reminders before scheduled events. | Must | E01, E06, E10 |
| FR-07 | Notify users when new matching events are available. | Should | E01, E02, E10 |
| FR-08 | Display events in a calendar view. | Should | E06, E07 |
| FR-09 | Allow organizers to manage participant registrations. | Should | E09 |
| FR-10 | Display event status (Upcoming, Registration Open, Closed, Ongoing, Completed). | Could | E03, E09 |
| NFR-01 | Provide a responsive mobile-friendly interface. | Must | E01, E05, E07 |
| NFR-02 | Provide a simple and user-friendly interface. | Must | E02, E03, E07 |
| NFR-03 | Return search and filter results within three seconds. | Should | E07 |
| NFR-04 | Maintain complete GitHub documentation with README, issues, commits, and weekly logbook. | Must | Course Requirement |

## MVP Feature Scope

| Feature | Priority | Included in Final Prototype? |
|---------|----------|------------------------------|
| Centralized Event Listing | Must | Yes |
| Event Publishing System | Must | Yes |
| Search and Filter | Must | Yes |
| Event Details Page | Must | Yes |
| Event Registration | Must | Yes |
| Event Reminder Notifications | Should | Yes |
| Event Calendar | Should | Yes |
| Participant Management | Should | Optional |
| Event Status Tracking | Could | Optional |
| Personalized Event Recommendations | Won't for MVP | No |



## Diagram Links

- **User Flow Diagram:**
  https://drive.google.com/file/d/1PTpBsfG3VbVta6AEYR5yQX7Rub0RmxwI/view?usp=sharing
- **Use Case Diagram:**
   https://drive.google.com/file/d/1r_5z3H_7IjZVuvl0UQ3XWlY0UoghOiQg/view?usp=drive_link 

 ## GitHub Contribution Evidence

All team members actively contributed to the Smart Campus Event Hub project through GitHub Issues, commits, documentation updates, prototype development, and weekly logbook entries. The repository history provides evidence of each member's contributions throughout the project.

----

# Lab 05: Product Concept and UI/UX Wireframe

## Product Concept

The Smart Campus Event Hub is a web-based platform designed to help university students, especially first-year and international students, easily discover campus events, register for activities, and receive timely reminders from a single platform. The system also allows student clubs and campus administrators to publish, update, and manage event information efficiently, reducing the problem of scattered announcements across multiple communication channels.

Lab 05 converts the Lab 04 requirements, user stories, and MVP feature list into the first visual baseline for the final **Smart Campus Event Hub** prototype.

## Requirement-Driven Screens

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01 | /wireframes/homepage.png |
| Event List & Registration | FR-01, FR-05 | /wireframes/event-list.png |
| Event Details View | FR-04, FR-05 | /wireframes/event-details.png |
| Search & Filter Events | FR-03 | /wireframes/search-filter.png |
| Dashboard / Summary | FR-08 | /wireframes/dashboard.png |
| Organizer / Admin View | FR-02, FR-09, FR-10 | /wireframes/admin-view.png |

---

## User Flow

The Smart Campus Event Hub user flow begins at the homepage, where users choose whether to browse campus events, access the organizer/admin functions, or view the dashboard. Students can browse events, register for activities, search and filter available events, view detailed event information, and receive event notifications. Organizers can create, update, and manage events, with all changes reflected in the event information list.

**User Flow Diagram:** https://github.com/sonamd6807456/ICT105-DRUK-MVP/blob/480aefda6d013499fd64d8e5018b5994bdeb1e90/diagrams/user-flow.drawio.png


## Lab 05 Outputs

| Required Output | Repository Location | Status |
|-----------------|---------------------|--------|
| Product Concept | `docs/product-concept.md` | Completed |
| Feature-Requirement Mapping | `docs/feature-requirement-mapping.md` | Completed |
| Wireframe Specification | `docs/wireframe-specification.md` | Completed |
| Wireframe Usability Checklist | `docs/wireframe-usability-checklist.md` | Completed |
| User Flow Diagram | `diagrams/user-flow.mmd` and `diagrams/user-flow.png` | Completed |
| Homepage Wireframe | `wireframes/homepage.png` | Completed |
| Event  Registration Form Wireframe | `wireframes/input-form.png` | Completed |
| Event Listing Wireframe | `wireframes/record-list.png` | Completed |
| Event Detail View Wireframe | `wireframes/detail-view.png` | Completed |
| Dashboard / Summary Wireframe | `wireframes/dashboard.png` | Completed |
| Organizer / Admin View Wireframe | `wireframes/admin-view.png` | Completed |
| Clickable Wireframe Draft | `prototype/wireframe-html/index.html` | Completed |

## Lab 05 Prototype Navigation

- Homepage → Browse Events → Event Detail
- Homepage → Submit Event Registration → Confirmation → Event List
- Homepage → Dashboard → Organizer/Admin View
- Homepage → Search Events → Event Details

## Lab 05 Traceability

The wireframes are not standalone screens. Each screen is directly connected to the project requirements, user stories, and MVP feature list.

The **Feature-Requirement Mapping** document explains how every requirement ID, user story, MVP feature, wireframe, and prototype module are connected to ensure complete traceability throughout the project.

## Team Contribution

All team members contributed to the Smart Campus Event Hub project through GitHub Issues, commits, documentation updates, wireframe design, prototype development, and weekly logbook entries. Each member actively participated in planning, validation, and development throughout Lab 05.

---

# Lab 06: Business Model Canvas and Technical Architecture

## Lab 06 Summary

In Lab 06, our group connected the **Smart Campus Event Hub** product concept, system requirements, user stories, MVP features, and wireframes into a complete Business Model Canvas and Technical Architecture. This lab explains how the platform creates value for students and how the final prototype will be designed and implemented.

## Files Added or Updated

- Business Model Canvas
- Customer Segment Value
- Feature-Value Mapping
- Technical Architecture
- System Architecture Diagram
- Data Flow Diagram
- Weekly Logbook
- README Update

## Technical Direction

The Smart Campus Event Hub MVP is implemented as a front-end web application using HTML, CSS, and JavaScript. Browser LocalStorage is used to simulate event data during prototype development, allowing the system to demonstrate core functionality without requiring a backend database.

This approach is suitable for the MVP because the prototype focuses on demonstrating the core user journey, including:

- Browsing campus events
- Searching and filtering events
- Viewing event details
- Registering for events
- Viewing the dashboard summary
- Managing events through the Organizer/Admin interface

## Final Prototype Connection

The Lab 06 deliverables provide the foundation for developing the final Smart Campus Event Hub prototype by clearly connecting:

- Product Concept
- Business Model Canvas
- Customer Segment Value
- System Requirements
- User Stories
- MVP Features
- Wireframes
- Technical Architecture
- Data Flow
- System Architecture

## Conclusion

The Smart Campus Event Hub demonstrates how technology can improve communication and student engagement by providing a centralized platform for campus events. Through six laboratory phases, our team successfully transformed an initial idea into a validated MVP concept supported by customer research, user requirements, wireframes, business analysis, and technical architecture. These deliverables provide a strong foundation for developing the final working prototype.

The completed documentation, wireframes, diagrams, and prototype provide a solid foundation for the remaining development phases and demonstrate the feasibility of the Smart Campus Event Hub as a minimum viable product (MVP).

----

## Lab 07: MVP Experiment Design

### Experiment Objective
The objective of this experiment is to validate whether the Smart Campus Event Hub helps university students discover campus events more easily, understand event information, and successfully register for activities through a centralized web platform. The experiment also evaluates the usability of the prototype and identifies improvements before developing the final prototype.

### Critical Assumptions

The top three assumptions are:

1. Students need a centralized platform because campus event information is currently scattered across multiple communication channels.
2. Students can easily search, filter, and find relevant campus events using the prototype.
3. Students are willing to register for campus events through the Smart Campus Event Hub instead of relying on existing communication methods.

### MVP Experiment Type

**Prototype Usability Testing**

The team will conduct usability testing using the clickable HTML/CSS/JavaScript prototype. Participants will complete common tasks such as browsing events, searching for activities, viewing event details, and registering for an event. This experiment is appropriate because it allows the team to validate the user experience and identify usability issues before implementing a full system.

### Success Metrics

- At least **80%** of participants successfully complete the event registration process without assistance.
- At least **80%** of participants can find a specific event using the search and filter functions.
- Average usability rating of **4 out of 5** or higher.
- At least **80%** of participants agree that the platform makes it easier to discover campus events.
- At least **75%** of participants say they would use the Smart Campus Event Hub if it were available.

### Files Added in Lab 07

- /docs/MVP-experiment-plan.md
- /docs/critical-assumptions.md
- /docs/experiment-script.md
- /docs/success-metrics.md
- /docs/feedback-form.md
- /docs/weekly-logbook.md

### Connection to Final Prototype

The results of this MVP experiment will guide the development of the final Smart Campus Event Hub prototype by identifying usability problems, validating key assumptions, and confirming whether the MVP successfully addresses students' difficulties in discovering campus events. User feedback will help improve navigation, event search and filtering, registration workflow, dashboard design, and overall user experience before the final submission.

----

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective

The objective of this validation was to evaluate whether the **Smart Campus Event Hub** MVP enables users to successfully navigate the website, browse campus events, search and filter activities, view event details, access the Student Dashboard, manage favorite events, and allow administrators to manage events, users, and reviews efficiently. The validation also collected usability feedback to identify improvements before developing the final prototype.

### Prototype Version Tested

- **Version:** v1.0
- **Link:** https://github.com/sonamd6807456/ICT105-DRUK-MVP
- **Screenshots:** `/screenshots/validation-test-screens.png`

---

### Analytics Summary

| Metric | Result |
|---|---:|
| Total test users | 12 |
| Completed tasks | 11 |
| Task success rate | 91.7% |
| Average feedback score | 4.4 / 5 |
| Average interest level | 4.8 / 5 |
| Main confusion point | Search and Filter feature on the Events page (FR-03) |
| MVP Decision | Continue with minor revisions |

---

### MVP Decision

Based on the validation results, the team decided to **continue with minor revisions**. Most participants successfully completed their assigned tasks and provided positive feedback on the overall usability of the Smart Campus Event Hub. Users found the **Home**, **Events**, **Student Dashboard**, and **Admin Dashboard** pages easy to navigate.

Minor improvements will focus on:
- Improving the **Search and Filter** feature on the Events page.
- Adding clearer event category labels.
- Improving the layout of the **Student Dashboard**.
- Simplifying navigation in the **Admin Manage Events** page.
- Updating the prototype and documentation based on user feedback before the next development iteration.

---

### Files Added

- `/data/validation-results.csv`
- `/data/validation-results.xlsx`
- `/data/validation-results-analytics.xlsx`
- `/docs/customer-validation-summary.md`
- `/docs/analytics-insights.md`
- `/docs/mvp-decision.md`
- `/docs/weekly-logbook.md`
- `/docs/test-user-notes.md`
- `/screenshots/validation-test-screens.png`## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective

The objective of this validation was to evaluate whether the **Smart Campus Event Hub** MVP enables users to successfully navigate the website, browse campus events, search and filter activities, view event details, access the Student Dashboard, manage favorite events, and allow administrators to manage events, users, and reviews efficiently. The validation also collected usability feedback to identify improvements before developing the final prototype.

### Prototype Version Tested

- **Version:** v1.0
- **Link:** https://github.com/sonamd6807456/ICT105-DRUK-MVP
- **Screenshots:** `/screenshots/validation-test-screens.png`

---

### Analytics Summary

| Metric | Result |
|---|---:|
| Total test users | 12 |
| Completed tasks | 11 |
| Task success rate | 91.7% |
| Average feedback score | 4.4 / 5 |
| Average interest level | 4.8 / 5 |
| Main confusion point | Search and Filter feature on the Events page (FR-03) |
| MVP Decision | Continue with minor revisions |

---

### MVP Decision

Based on the validation results, the team decided to **continue with minor revisions**. Most participants successfully completed their assigned tasks and provided positive feedback on the overall usability of the Smart Campus Event Hub. Users found the **Home**, **Events**, **Student Dashboard**, and **Admin Dashboard** pages easy to navigate.

Minor improvements will focus on:
- Improving the **Search and Filter** feature on the Events page.
- Adding clearer event category labels.
- Improving the layout of the **Student Dashboard**.
- Simplifying navigation in the **Admin Manage Events** page.
- Updating the prototype and documentation based on user feedback before the next development iteration.

---


### Files Added
- /data/validation-results.xlsx
- /data/validation-results.csv
- /docs/customer-validation-summary.md
- /docs/analytics-insights.md
- /docs/mvp-decision.md
- /docs/test-user-notes.md
- /screenshots/validation-test-screens.png
- /docs/weekly-logbook.md
   


