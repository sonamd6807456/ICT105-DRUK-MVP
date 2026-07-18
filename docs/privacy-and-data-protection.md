# Privacy and Data Protection

## Data Collection Summary

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| Full Name | Identify the student account | Yes | No | Keep | Required for user profile and event registration. |
| Student ID | Verify student identity | Yes | No | Keep | Used to identify registered students and event participation. |
| Faculty | Display the user's faculty | Yes | No | Keep | Used in the user profile and for event-related information. |
| Email Address | User login and communication | Yes | No | Keep | Primary login credential and notification method. |
| Password | Secure user authentication | Yes | Yes | Keep | Should be encrypted and never displayed in a real system. |
| Favorite Events | Save preferred campus events | No | No | Keep | Improves the user experience by allowing quick access to saved events. |
| Registered Events | Track student event participation | Yes | No | Keep | Linked to the user's account and displayed on the dashboard. |
| Reviews & Ratings | Allow users to provide event feedback | No | No | Keep | Helps organizers improve future campus events. |
| Profile Picture (Optional) | Personalize the user profile | Yes | No | Optional | Users may choose whether to upload a profile picture. |

---

## Privacy Rule for Prototype

The **Smart Campus Event Hub** prototype collects only the information necessary to provide its core services. During account registration, users provide their **Full Name, Student ID, Faculty, Email Address, and Password**. This information is used only for user authentication, profile management, and campus event registration.

Users can browse campus events, save favorite events, register for events, and submit reviews. Information related to registered events is linked to each user's account so that they can track their event participation through the dashboard.

Only authorized administrators and event organizers can access registration information required to manage campus events. Regular users can only view and edit their own personal information. Passwords are never displayed to users or administrators and, in a real-world implementation, would be securely encrypted before being stored.

The prototype does **not** collect unnecessary personal or sensitive information such as home addresses, phone numbers, national identification numbers, payment information, medical records, or biometric data. This follows the principle of **data minimization**, ensuring that only the information required for account management and campus event participation is collected.

Sample data is used throughout the prototype during testing to protect user privacy. No real personal or sensitive information is stored or shared outside the prototype.

---

## Data Minimization Decision

| Removed or Changed Data | Reason |
|---|---|
| Home Address | Not required for campus event registration or user management. |
| Phone Number | Email address is sufficient for communication and notifications. |
| National Identification Number | Not required for student authentication in the prototype. |
| Date of Birth | Not necessary for event participation or system functionality. |
| Emergency Contact | Outside the scope of the Smart Campus Event Hub MVP. |
| Bank or Payment Information | No online payment or financial transactions are included. |
| Medical Information | Not relevant to campus event management. |
| Biometric Data | Not required for user authentication or event participation. |
| Password Display | Passwords are never displayed and should be securely encrypted in a real implementation. |
