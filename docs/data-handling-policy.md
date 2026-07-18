# Data Handling Policy

## Data Collection

The Smart Campus Event Hub prototype collects only the information required to support its core functionality. The collected data includes:

- Full Name
- Student ID
- Faculty
- Email Address
- Password
- User Role (Student, Organizer, Administrator)
- Event Registration Records
- Favorite Events
- Reviews and Ratings
- Optional Profile Picture

The prototype does not collect unnecessary sensitive information such as home addresses, national identification numbers, payment information, medical records, or biometric data.

---

## Data Storage

During prototype development and testing, data is stored using simple methods suitable for an MVP.

Current storage methods include:

- Browser **localStorage** for temporary user and session data.
- Sample datasets in **CSV** and **Excel (.xlsx)** files for usability testing and validation.
- GitHub repository for project documentation and sample data.
- No real production database is used in this prototype.

Only sample or test data is used during usability testing.

---

## Data Access

Different users have different access permissions.

| User | Access |
|------|--------|
| Student | View and update their own profile, browse events, register for events, manage favorite events, and submit reviews. |
| Event Organizer | Create, edit, update, and manage campus events assigned to them. |
| Administrator | Manage events, users, reviews, and administrative information through the Admin Dashboard. |
| Project Team | Access sample datasets and prototype documentation for development and testing purposes only. |

Personal user information is only accessible to the account owner and authorized administrators.

---

## Data Minimization

The following information was intentionally excluded because it is unnecessary for the Smart Campus Event Hub MVP:

- Home Address
- Phone Number
- National Identification Number
- Date of Birth
- Emergency Contact
- Bank or Payment Information
- Medical Information
- Biometric Data

Only the minimum information required for account creation, authentication, event participation, and prototype evaluation is collected.

---

## Responsible Data Rule

The Smart Campus Event Hub follows responsible data handling practices by collecting only the minimum information required for its intended functionality.

The prototype:

- Collects only necessary personal information.
- Does not request unnecessary sensitive personal data.
- Uses sample or fictional data during prototype testing whenever possible.
- Limits access to personal information based on user roles.
- Protects passwords by ensuring they are never displayed and would be securely encrypted in a real implementation.
- Uses collected information only for educational purposes, usability testing, prototype improvement, and project evaluation.

These practices help ensure that user privacy is respected while supporting responsible software design and development.
