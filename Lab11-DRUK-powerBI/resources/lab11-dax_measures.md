-- ==============================
-- SMART CAMPUS EVENT HUB KPIs
-- ==============================


Total Events =
DISTINCTCOUNT('PrototypeRecords'[RecordID])


Total Activity Events =
COUNTROWS('ActivityLog')


New Event Submissions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "CreateEvent"
)


Pending Events =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Pending"
)


Published Events =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Published"
)


Rejected Events =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Rejected"
)


Event Publication Rate =
DIVIDE(
    [Published Events],
    [Total Events]
)


Average Event Processing Days =
AVERAGE('PrototypeRecords'[ResolutionDays])


Search Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "SearchEvent"
)


Registration Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "RegisterEvent"
)


View Event Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "ViewEvent"
)


Admin Management Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[UserRole] = "Admin"
)


Dashboard Views =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "ViewDashboard"
)


Average Processing Time =
AVERAGE('ActivityLog'[ProcessingTimeMinutes])


Mobile Activity Events =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[DeviceType] = "Mobile"
)


Mobile Activity Rate =
DIVIDE(
    [Mobile Activity Events],
    [Total Activity Events]
)


Student Activity Events =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[UserRole] = "Student"
)


Student Engagement Rate =
DIVIDE(
    [Student Activity Events],
    [Total Activity Events]
)


Total Event Registrations =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "RegisterEvent"
)
