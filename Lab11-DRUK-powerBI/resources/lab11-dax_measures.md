# Smart Campus Event Hub DAX Measures

## KPI Measures

### Total Events

```DAX
Total Events =
DISTINCTCOUNT('PrototypeRecords'[RecordID])
```

### Total Activity Events

```DAX
Total Activity Events =
COUNTROWS('ActivityLog')
```

### New Event Submissions

```DAX
New Event Submissions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "CreateEvent"
)
```

### Pending Events

```DAX
Pending Events =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Pending"
)
```

### Published Events

```DAX
Published Events =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Published"
)
```

### Rejected Events

```DAX
Rejected Events =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Rejected"
)
```

### Event Publication Rate

```DAX
Event Publication Rate =
DIVIDE(
    [Published Events],
    [Total Events]
)
```

### Average Event Processing Days

```DAX
Average Event Processing Days =
AVERAGE('PrototypeRecords'[ResolutionDays])
```

### Search Actions

```DAX
Search Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "SearchEvent"
)
```

### Registration Actions

```DAX
Registration Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "RegisterEvent"
)
```

### View Event Actions

```DAX
View Event Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "ViewEvent"
)
```

### Admin Management Actions

```DAX
Admin Management Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[UserRole] = "Admin"
)
```

### Dashboard Views

```DAX
Dashboard Views =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "ViewDashboard"
)
```

### Average Processing Time

```DAX
Average Processing Time =
AVERAGE('ActivityLog'[ProcessingTimeMinutes])
```

### Mobile Activity Events

```DAX
Mobile Activity Events =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[DeviceType] = "Mobile"
)
```

### Mobile Activity Rate

```DAX
Mobile Activity Rate =
DIVIDE(
    [Mobile Activity Events],
    [Total Activity Events]
)
```

### Student Activity Events

```DAX
Student Activity Events =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[UserRole] = "Student"
)
```

### Student Engagement Rate

```DAX
Student Engagement Rate =
DIVIDE(
    [Student Activity Events],
    [Total Activity Events]
)
```

### Total Event Registrations

```DAX
Total Event Registrations =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "RegisterEvent"
)
```
