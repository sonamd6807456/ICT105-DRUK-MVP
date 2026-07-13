# Critical Assumptions

## Instruction

Identify assumptions that could cause your final prototype to fail if they are wrong.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User Problem | University students need a centralized platform because campus event information is scattered across social media, messaging apps, posters, emails, and university websites, causing them to miss important events and deadlines. | FR-01, FR-05, FR-06 / US-01, US-03 | High | Lab 03 customer discovery, Problem Notes, Product Concept, User Personas | Ask students to use the prototype to find specific campus events and collect feedback on whether it is easier than their current methods. |
| A-02 | Value Proposition | Students believe that the Smart Campus Event Hub helps them discover, access, and participate in campus events more easily than existing communication channels. | FR-05, FR-07 / US-01, US-02 | High | Product Concept, MVP Feature List, User Stories, Customer Discovery Findings | Survey and interview users after testing the prototype to determine whether they would use the platform instead of relying on posters, social media, or messaging apps. |
| A-03 | Usability | Students can easily browse events, search by keyword, filter by category, view event details, and register for events without additional instructions. | FR-05, FR-06, FR-07, FR-10 / US-02, US-03, US-04, US-05 | Medium | Wireframe Specification, Screen Inventory Checklist, HTML/CSS/JavaScript Prototype | Conduct task-based usability testing by asking users to complete common tasks and observe completion time, navigation errors, and user feedback. |
| A-04 | Technical Feasibility | A frontend-only prototype using HTML, CSS, JavaScript, and sample data is sufficient to demonstrate the Smart Campus Event Hub MVP without requiring a backend database. | FR-03, FR-04, FR-09, FR-12 / US-05, US-06 | Medium | Technical Architecture, Prototype Structure, JavaScript Sample Data | Test event browsing, search, filtering, event registration simulation, organizer functions, and dashboard display throughout the prototype. |
| A-05 | Business Logic | The organizer workflow for creating, updating, publishing, and managing events together with student registration is sufficient to demonstrate the core functionality of the Smart Campus Event Hub MVP. | FR-03, FR-08, FR-09, FR-12 / US-05, US-06 | Medium | MVP Scope, System Requirements, Organizer/Admin View, Dashboard, User Flow | Verify the complete workflow from event creation to student registration and dashboard updates through prototype demonstrations and user testing. |

## Categories

Use these categories:

- User Problem
- Value Proposition
- Usability
- Technical Feasibility
- Business Logic
