# Legal and Ethical Checklist

## Project Title

**Smart Campus Event Hub**

---

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | The homepage and project documentation explain that the Smart Campus Event Hub is a prototype designed to help students discover, register for, and manage campus events. | Continue displaying a short project description and purpose statement on the homepage. | DRUK Team | Issue #41 |
| The prototype avoids misleading claims. | Yes | Event information is intended for demonstration purposes and is not presented as official university announcements unless verified by administrators. | Add a disclaimer stating that event information in the prototype is for demonstration purposes and should be verified with official university sources. | DRUK Team | Issue #42 |
| The prototype does not collect unnecessary sensitive data. | Yes | The prototype only collects basic information required for user login, event registration, and profile management. It does not request sensitive information such as national ID numbers, banking details, or medical records. | Continue limiting data collection to only information necessary for the MVP functionality. | DRUK Team | Issue #43 |
| Users can understand what happens after registration or event submission. | Yes | After registering for an event or submitting an event, users receive a confirmation message indicating that the registration or submission was successful. Organizers are informed that submitted events may require administrator approval before publication. | Improve confirmation messages by clearly explaining registration status and the event approval process. | DRUK Team | Issue #44 |
| Administrator functions are clearly separated from student functions. | Yes | Administrative features such as managing events, approving submissions, managing users, and moderating content are accessible only through the Admin Dashboard. Students can only browse events, register, manage favorites, and edit their own profiles. | Maintain role-based access control and continue restricting administrator functions to authorized users only. | DRUK Team | Issue #45 |
| The prototype avoids unfair or harmful treatment of users. | Yes | All students have equal access to browse campus events regardless of nationality or academic year. Event submissions are moderated to prevent misleading, offensive, or inappropriate content. | Continue applying moderation guidelines and remove inappropriate or misleading event content when reported. | DRUK Team | Issue #46 |

---

## Summary Decision

- **Safe to continue:** **Yes**

- **Required revision before implementation:**
  - Add a clear privacy notice explaining what user information is collected and how it is used.
  - Include a disclaimer stating that event information should be verified through official university channels.
  - Improve confirmation messages for event registration and event submission.
  - Continue enforcing administrator-only access for event management and moderation features.
  - Establish event moderation guidelines to prevent false, duplicate, or inappropriate event postings.
  - Ensure compliance with university privacy and ethical standards before deploying the final prototype.
