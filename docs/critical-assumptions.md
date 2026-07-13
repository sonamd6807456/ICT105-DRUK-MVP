# Critical Assumptions

## Instruction
Identify assumptions that could cause your final prototype to fail if they are wrong.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User Problem | Students need a centralized platform to find campus events because event information is scattered across multiple communication channels. | FR-05 / US-01 | High | Lab 03 survey and interviews showed students miss events due to scattered information. | Conduct usability testing to determine whether students prefer using the centralized platform over existing communication channels. |
| A-02 | Value Proposition | Students will use the Smart Campus Event Hub to discover and register for campus events. | FR-05, FR-07 / US-01, US-02 | High | Customer discovery indicated strong interest in a single event platform. | Observe whether students successfully browse events and complete event registration during prototype testing. |
| A-03 | Usability | Students can easily search and filter events by category, date, and keyword without confusion. | FR-06 / US-03, US-04 | Medium | Prototype design includes search and filtering, but no usability evidence yet. | Perform task-based usability testing and measure task completion time and success rate. |
| A-04 | Technical Feasibility | HTML, CSS, and JavaScript are sufficient to simulate event browsing, registration, and dashboard functionality for the MVP. | FR-01 to FR-12 | Medium | Frontend prototype architecture has been selected. | Test all prototype pages, navigation, JavaScript interactions, and responsive layouts before demonstration. |
| A-05 | Business Logic | Event organizers will regularly update and manage campus event information through the organizer dashboard. | FR-03, FR-09 / US-05 | Medium | Assumed based on organizer responsibilities; no direct validation yet. | Demonstrate the event creation and management workflow with organizers and collect feedback. |
| A-06 | Data Handling | Sample event and registration data accurately represent how a real event management system would operate. | FR-04 / US-06 | Low | Prototype uses realistic sample event records. | Verify that sample data supports all user scenarios, including searching, filtering, registration, and dashboard summaries. |
