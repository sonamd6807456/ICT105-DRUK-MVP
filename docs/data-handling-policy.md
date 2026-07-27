# Data Handling Policy

## Data Collection

The Smart Campus Event Hub prototype collects only the information required to support its core functionality. The collected data includes:

- Full Name
- Student ID
- Faculty
- Email Address
- Password (stored only for prototype simulation)
- User Role (Student, Student Club Organizer, Administrator)
- Event Registration Records
- My Events participation records
- Event Reviews and Ratings (submitted only after attending a completed event)

The prototype does not collect unnecessary sensitive information such as home addresses, national identification numbers, payment information, medical records, biometric data, or location tracking.

---

## Data Storage

During prototype development and testing, data is stored using simple methods suitable for an MVP.

Current storage methods include:

- Browser **localStorage** for simulated user accounts, event data, registrations, reviews, and session information.
- Sample datasets in **CSV** and **Excel (.xlsx)** files for usability testing and validation.
- GitHub repository for project documentation and sample data.
- No production database is used in this prototype.

Only fictional or sample data is used during prototype development and testing.

---

## Data Access

Different users have different access permissions.

| User | Access |
|------|--------|
| Student | Create an account, log in, browse events, search and filter events, register for events, view My Events, and submit reviews after attending completed events. |
| Student Club Organizer | Create, edit, update, and manage events organized by their club. |
| Administrator | Manage events, registrations, reviews, and user information through the Admin Dashboard. |
| Project Team | Access prototype documentation and sample datasets for development, testing, and evaluation purposes only. |

Personal user information is accessible only to the account owner and authorized administrators.

---

## Data Minimization

The following information is intentionally excluded because it is unnecessary for the Smart Campus Event Hub MVP:

- Home Address
- Phone Number
- National Identification Number
- Date of Birth
- Emergency Contact
- Bank or Payment Information
- Medical Information
- Biometric Data
- GPS Location Data

Only the minimum information required for account creation, authentication, event registration, participation tracking, and prototype evaluation is collected.

---

## Privacy Notice

Before users create an account or register for an event, the prototype displays a basic privacy notice explaining that only the information necessary for operating the Smart Campus Event Hub is collected. The collected information is used solely for educational purposes and prototype functionality.

---

## Responsible Data Rule

The Smart Campus Event Hub follows responsible data handling practices by collecting only the minimum information required for its intended functionality.

The prototype:

- Collects only the personal information necessary for account creation and event participation.
- Does not request unnecessary sensitive personal data.
- Uses fictional or sample data during testing whenever possible.
- Limits access to personal information based on user roles.
- Simulates secure password storage for educational purposes. In a production system, passwords would be encrypted and securely stored.
- Uses collected information only for educational purposes, usability testing, prototype improvement, and project evaluation.
- Displays a privacy notice before collecting user information.

These practices help protect user privacy while demonstrating responsible software design and data management principles.
