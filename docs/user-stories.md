# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a [user role], I want to [goal/action], so that [benefit/value].

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Year 1 Student | As a Year 1 student, I want to view all campus events in one place, so that I can easily stay informed about upcoming activities. | FR-05 | Must | Given the Event Listing page is opened, when the page loads, then all available events are displayed with their title, date, and location. | Homepage screenshot |
| US-02 | Exchange Student | As an exchange student, I want to view complete event details, so that I can understand the schedule, location, and requirements before joining. | FR-07 | Must | Given an event card is selected, when the Event Details page opens, then the title, description, date, time, location, organizer, and available seats are displayed. | Event details screenshot |
| US-03 | Year 2 Student | As a Year 2 student, I want to search for events using keywords, so that I can quickly find activities that interest me. | FR-06 | Must | Given a keyword is entered into the search bar, when the search is submitted, then matching events are displayed. | Search result screenshot |
| US-04 | Exchange Student | As an exchange student, I want to filter events by category, so that I can quickly discover activities that match my interests. | FR-06 | Should | Given a category is selected, when the filter is applied, then only matching events are displayed. | Filter screenshot |
| US-05 | Student Club Organizer | As a student club organizer, I want to submit new event information, so that students can easily discover upcoming activities. | FR-03 | Should | Given the organizer completes the event submission form, when the form is submitted successfully, then the event appears in the event listing. | Event submission demo |
| US-06 | Student | As a student, I want to view a dashboard summary of upcoming events, so that I can quickly see important campus activities. | FR-12 | Could | Given the dashboard page is opened, when it loads, then upcoming events and summary statistics are displayed. | Dashboard screenshot |


## Acceptance Criteria Checklist

A good acceptance criterion should be:

- **Testable** — can be verified with a clear pass/fail outcome.
- **Observable** — visible and demonstrable in the final prototype.
- **Connected to a requirement** — maps directly to a functional requirement (FR-XX).
- **Connected to user evidence** — supported by survey responses and prototype demonstration.
- **Specific** — detailed enough that anyone can determine whether the feature works correctly.


## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| FUT-01 | Event reminder notifications require backend notification services that are beyond the MVP scope. | Add after the core platform is validated. |
| FUT-02 | Personalized event recommendations require user preference data and recommendation logic. | Implement in future versions after collecting sufficient user data. |
| FUT-03 | Calendar synchronization requires integration with external calendar services. | Add after the web application is completed. |
| FUT-04 | User accounts and authentication increase development complexity for the MVP. | Include in a future release after MVP validation. |
