# Project Name
Smart Campus Event Hub

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
University students often miss campus events, club activities, workshops, and important deadlines because information is spread across posters, social media pages, and messaging applications. This makes it difficult for students to stay informed and participate actively in campus life.

## Target Users
* First Year University students
* Student clubs and organizations
* Campus administrators
* Students involved in extracurricular activities
* Exchange and international students


## Initial IT Venture Direction
Develop a Smart Campus Event Hub, a web-based platform that centralizes event information, announcements, and activity registration in one place. The system will help students discover events and receive timely notifications.

## Technology Possibility
Possible technologies: 
* Web application
* Dashboard
* Cloud-based system
* AI-assisted feature
* SaaS platform
  
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
|-------|--------------|---------|--------| 
| Lab 1 | Lab setup and idea log | Repository setup, team profile, initial three-idea logbook | Completed | 
| Lab 2 | Opportunity scanning and NUF scoring | Six-idea opportunity table, technology feasibility mapping, NUF scoring, selected project opportunity (Smart Campus Event Hub) | Completed |
| Lab 03 | Customer Problem Discovery |Target Respondent Profile, Customer Discovery Survey, Problem Notes, Customer Discovery Summary, Assumption-Evidence Table, Weekly Logbook Updates | Completed |

# Customer Problem Discovery Summary

## Overview

In Lab 03, our team conducted customer problem discovery to better understand how students learn about campus events, workshops, competitions, and university activities. The objective was to determine whether difficulties in discovering campus events represent a genuine problem for students and whether there is a need for a more organized solution.

## Target Respondents

We focused on the following groups of students:

* First-year students who are still becoming familiar with university communication channels and campus activities.
* International and exchange students who may have limited access to informal information networks.
* Students who regularly participate in campus events, workshops, and extracurricular activities.
* Students who have previously missed events or received event information too late.

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

# Lab 04: User Persona, Requirements, and User Stories

## Primary Target User

The primary users of the Smart Campus Event Hub are university students, especially first-year and international students, who want an easy way to discover campus events, receive timely notifications, and register for activities without searching across multiple platforms. Club organizers are secondary users who publish and manage campus events.

## Persona Summary

- **Persona Name:** Maya, Year 1 Student
- **User Type:** First-year university student
- **Main Goal:** Find campus events easily, receive reminders, and register without missing important opportunities.
- **Main Pain Point:** Event information is scattered across posters, social media, emails, university websites, and messaging groups.
- **Current Workaround:** Checks Facebook pages, LINE groups, university websites, posters, emails, and asks friends or seniors.

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
| Event Reminder & Notifications | Should | Yes |
| Event Calendar | Should | Yes |
| Participant Management | Should | Optional |
| Event Status Tracking | Could | Optional |
| Personalized Event Recommendations | Won't for MVP | No |

## Diagram Links

- **User Flow Diagram:** `/diagrams
- **Use Case Diagram:** # Lab 04: User Persona, Requirements, and User Stories

## Primary Target User

The primary users of the Smart Campus Event Hub are university students, especially first-year and international students, who want an easy way to discover campus events, receive timely notifications, and register for activities without searching across multiple platforms. Club organizers are secondary users who publish and manage campus events.

## Persona Summary

- **Persona Name:** Maya, Year 1 Student
- **User Type:** First-year university student
- **Main Goal:** Find campus events easily, receive reminders, and register without missing important opportunities.
- **Main Pain Point:** Event information is scattered across posters, social media, emails, university websites, and messaging groups.
- **Current Workaround:** Checks Facebook pages, LINE groups, university websites, posters, emails, and asks friends or seniors.

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
| Event Reminder & Notifications | Should | Yes |
| Event Calendar | Should | Yes |
| Participant Management | Should | Optional |
| Event Status Tracking | Could | Optional |
| Personalized Event Recommendations | Won't for MVP | No |

## Diagram Links

- **User Flow Diagram:** `https://drive.google.com/file/d/1PTpBsfG3VbVta6AEYR5yQX7Rub0RmxwI/view?usp=sharing
- **Use Case Diagram:** https://drive.google.com/file/d/1r_5z3H_7IjZVuvl0UQ3XWlY0UoghOiQg/view?usp=drive_link `

- ## GitHub Contribution Evidence

All group members contributed to the Smart Campus Event Hub repository through Git commits, GitHub Issues, documentation updates, prototype development, and weekly logbook entries. The complete development history is available in the repository commit history and project documentation

.`



