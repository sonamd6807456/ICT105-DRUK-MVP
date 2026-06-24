# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a [user role], I want to [goal/action], so that [benefit/value].

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Year 1 Student | As a Year 1 student, I want to view all campus events in one place, so that I can easily stay informed about upcoming activities. | FR-01 | Must | Given the user opens Smart Campus Event Hub, when they access the homepage, then a list of upcoming events with titles, dates, and locations is displayed. | Homepage screenshot |
| US-02 | Year 1 Student | As a Year 1 student, I want to browse event categories, so that I can quickly find activities that match my interests. | FR-02 | Must | Given the event page is opened, when the user selects a category, then only related events are displayed. | Event category screenshot |
| US-03 | Exchange Student | As an exchange student, I want to search for events by keyword, so that I can quickly find workshops, competitions, and activities available to me. | FR-03 | Must | Given a search keyword is entered, when the search is submitted, then matching events are displayed. | Search result screenshot |
| US-04 | Exchange Student | As an exchange student, I want to view complete event details, so that I can understand the event schedule and requirements clearly. | FR-04 | Must | Given an event card is selected, when the details page opens, then the date, time, location, and description are displayed. | Event details screenshot |
| US-05 | Year 2 Student | As a Year 2 student, I want to receive reminders for upcoming events, so that I do not forget important activities and deadlines. | FR-05 | Must | Given reminders are enabled, when the event date approaches, then a notification or reminder is displayed. | Reminder demo |
| US-06 | Exchange Student | As an exchange student, I want to filter events by category and type, so that I can easily discover events relevant to my interests. | FR-06 | Should | Given filter options are selected, when filters are applied, then only matching events are displayed. | Filter screenshot |
| US-07 | Year 2 Student | As a Year 2 student, I want to bookmark interesting events, so that I can revisit them later. | FR-07 | Should | Given the bookmark button is clicked, when the saved events page is opened, then bookmarked events are displayed. | Saved events screenshot |
| US-08 | Student Club Organizer | As a student club organizer, I want to post and update event information, so that students can receive accurate and up-to-date announcements. | FR-08 | Could | Given an organizer submits event information, when the form is saved, then the event appears on the platform. | Event submission demo |
| US-09 | Active Student | As an active student, I want to view events in a calendar format, so that I can organize my schedule more efficiently. | FR-09 | Could | Given the calendar page is opened, when events are displayed, then they are arranged according to date. | Calendar view screenshot |

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- **Testable** — can be verified with a clear pass/fail outcome.
- **Observable** — visible and demonstrable in the final prototype.
- **Connected to a requirement** — maps to a functional requirement (FR-XX).
- **Connected to user evidence** — supported by survey responses and demo screenshots.
- **Not too vague** — specific enough that anyone can determine whether it works correctly.


## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-06 | Bookmark feature is not essential for the first MVP. | Add after core features are completed. |
| US-07 | Personalized recommendations require additional data and logic. | Implement in later versions after collecting user preferences. |
| US-08 | Push notifications require backend services and are beyond the scope of the initial prototype. | Add after developing a functional web application. |


