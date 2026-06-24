# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a [user role], I want to [goal/action], so that [benefit/value].

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to view all campus events in one place, so that I do not need to search through multiple platforms. | FR-01 Event Listing | Must | Given that events are available, when the student opens the platform, then a list of events is displayed. | Screenshot of home page |
| US-02 | Student | As a student, I want to search and filter events, so that I can quickly find activities that interest me. | FR-02 Search and Filter | Must | Given event categories exist, when the student selects a category or keyword, then matching events are displayed. | Screenshot of search page |
| US-03 | Student | As a student, I want to view event details, so that I can know the date, time, location, and description before participating. | FR-03 Event Details | Must | Given an event is selected, when the student clicks the event, then complete information is shown. | Screenshot of event details page |
| US-04 | Student | As a student, I want to register for an event, so that I can participate without missing deadlines. | FR-04 Event Registration | Must | Given registration is open, when the student clicks Register, then registration is saved successfully. | Screenshot of registration page |
| US-05 | Student | As a student, I want to receive reminders and notifications, so that I do not forget important events. | FR-05 Event Reminder | Should | Given an event is approaching, when notifications are enabled, then a reminder is sent to the user. | Notification mockup |
| US-06 | Student | As a student, I want to bookmark events, so that I can easily access events that I plan to attend later. | FR-06 Bookmark Events | Could | Given an event is displayed, when the student clicks Bookmark, then the event is added to favorites. | Screenshot of bookmarked events |
| US-07 | Student | As a student, I want personalized event recommendations, so that I can discover events related to my interests. | FR-07 Event Recommendation | Could | Given the student's interests are known, when the recommendation page is opened, then related events are displayed. | Recommendation page screenshot |

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- Testable.
- Observable in the final prototype.
- Connected to a requirement.
- Connected to user evidence.
- Not too vague.

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-06 | Bookmark feature is not essential for the first MVP. | Add after core features are completed. |
| US-07 | Personalized recommendations require additional data and logic. | Implement in later versions after collecting user preferences. |
| US-08 | Push notifications require backend services and are beyond the scope of the initial prototype. | Add after developing a functional web application. |


