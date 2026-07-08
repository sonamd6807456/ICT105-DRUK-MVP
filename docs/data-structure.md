# Data Structure

## Project Title

**Smart Campus Event Hub**

# 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Events | Store campus event information including title, date, venue, category, and status. | AI Workshop, Sports Day, Photography Club Meetup |
| Event Registrations | Store student registrations for events and participation status. | Registration #R001, Student Registered for AI Workshop |
| Users | Store basic information about students, organizers, and administrators. | Student, Organizer, Admin |


# 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Events | event_id | Text/ID | Yes | E001 | Must be unique | Yes |
| Events | title | Text | Yes | AI Workshop | Cannot be empty | Yes |
| Events | category | List | Yes | Academic | Academic, Sports, Cultural, Club | Yes |
| Events | description | Text | Yes | Introduction to Artificial Intelligence | Cannot be empty | No |
| Events | event_date | Date | Yes | 20/08/2026 | Must be a valid future date | Yes |
| Events | event_time | Time | Yes | 10:00 AM | Valid time format | No |
| Events | venue | Text | Yes | Building 11 Auditorium | Cannot be empty | Yes |
| Events | organizer | Text | Yes | ICT Club | Cannot be empty | Yes |
| Events | capacity | Number | Yes | 100 | Must be greater than 0 | No |
| Events | available_seats | Number | Yes | 35 | Cannot exceed capacity | Yes |
| Events | status | List | Yes | Open | Upcoming, Open, Full, Completed | Yes |
| Event Registrations | registration_id | Text/ID | Yes | R001 | Must be unique | No |
| Event Registrations | student_id | Text | Yes | 6807455 | Valid student ID | Yes |
| Event Registrations | student_name | Text | Yes | Kinley Zam | Cannot be empty | Yes |
| Event Registrations | event_id | Text | Yes | E001 | Must match existing Event ID | Yes |
| Event Registrations | registration_date | Date | Yes | 10/08/2026 | Valid date | No |
| Event Registrations | attendance_status | List | Yes | Registered | Registered, Attended, Cancelled | Yes |
| Users | user_id | Text/ID | Yes | U001 | Must be unique | No |
| Users | full_name | Text | Yes | Kai | Cannot be empty | Yes |
| Users | role | List | Yes | Student | Student, Organizer, Admin | Yes |
| Users | email | Email | Yes | student@rsu.ac.th | Valid email format | No |



# 3. Status Values

| Status | Meaning | Who Can Update? |
|---|---|---|
| Upcoming | Event has been published but registration has not started yet. | Organizer / Admin |
| Open | Registration is currently open. | Organizer / Admin |
| Full | Maximum participant capacity has been reached. | Organizer / Admin |
| Registered | Student has successfully registered for the event. | System |
| Attended | Student attended the event. | Organizer / Admin |
| Completed | The event has finished. | Organizer / Admin |
| Cancelled | The event has been cancelled. | Organizer / Admin |



# 4. Sample Records

The prototype will use sample event and registration data stored in the **/data/** folder. 

/data/sample-records.csv`

Example Event Record

| Event ID | Title | Category | Date | Venue | Status |
|---|---|---|---|---|---|
| E001 | AI Workshop | Academic | 20 Aug 2026 | 1-301 | Open |
| E002 | Sports Day | Sports | 25 Aug 2026 | University Stadium | Upcoming |
| E003 | Photography Club Meetup | Club | 30 Aug 2026 | 8-103 | Open |



# 5. Data Privacy Note

The Smart Campus Event Hub will collect only the information necessary for event registration and participation. Sensitive personal information such as passwords, national ID numbers, financial information, or health records will not be collected during the prototype stage.

Sample data used in the prototype will be fictional or anonymized and will not identify real individuals. The prototype will include a basic privacy notice informing users that their information is used only for event registration and participation purposes.
