flowchart LR

    USER[Student Tester] --> START[Start Experiment]

    START --> TASK1[Understand Homepage Purpose]

    TASK1 --> TASK2[Browse Upcoming Campus Events]

    TASK2 --> TASK3[Search and Filter Events]

    TASK3 --> TASK4[View Event Details]

    TASK4 --> TASK5[Register for Event]

    TASK5 --> TASK6[View Dashboard / Calendar]

    TASK6 --> FEEDBACK[Collect User Feedback]

    FEEDBACK --> DATA[(Testing Data)]

    DATA --> ANALYSIS[Analyze Experiment Results]

    ANALYSIS --> METRIC[Measure Success Metrics]

    METRIC --> DECISION{Metrics Meet Target?}

    DECISION -->|Yes| CONTINUE[Continue Implementation Sprint]

    DECISION -->|No| IMPROVE[Improve Prototype Design]

    IMPROVE --> START

    CONTINUE --> FINAL[Develop Final Prototype]
