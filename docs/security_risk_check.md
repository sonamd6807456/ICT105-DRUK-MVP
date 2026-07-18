# Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete or invalid data be submitted? | Basic input validation is implemented for event creation and registration, but stronger validation may be needed. | Medium | Validate required fields, check dates and capacity values, prevent empty submissions, and sanitize user input. | Smart Campus Event Hub Team |
| Admin function | Can normal users access admin actions? | Organizer and administrator functions are separated from student functions in the prototype. | Medium | Continue separating student and organizer/admin functions and restrict event management actions to authorized users. | Smart Campus Event Hub Team |
| Data display | Is private information visible to everyone? | Public users can view event information, but personal student information such as email addresses and student IDs should remain private. | High | Display only necessary information on public event pages and restrict access to personal registration information. | Smart Campus Event Hub Team |
| Status update | Can records be edited without control? | Event information and event status should be updated through the organizer/admin workflow rather than by normal students. | Medium | Restrict event editing and status changes to authorized organizers or administrators and use controlled status values. | Smart Campus Event Hub Team |
| Public links | Does a public link expose data that should be private? | The prototype includes public event pages, but public links should not expose private registration or account information. | Medium | Review public event pages and avoid exposing student registration details or administrator functions through public URLs. | Smart Campus Event Hub Team |
| File upload | If used, can unsafe or unrelated files be uploaded? | File upload is not included in the current Smart Campus Event Hub MVP. | Low | If file uploads are added in the future, restrict file types and file sizes and validate uploaded files before storage. | Smart Campus Event Hub Team |

## Security Decision

**Continue with mitigation**

The current Smart Campus Event Hub MVP has a relatively low to medium security risk because it is a frontend prototype developed for ICT105 coursework. However, improvements should be made before production deployment, including stronger input validation, authentication and role-based authorization for student, organizer, and administrator accounts, and stronger protection of personal registration information. Public event information should remain accessible while private student data and administrative functions should be restricted to authorized users.
