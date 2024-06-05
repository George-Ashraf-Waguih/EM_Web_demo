# Emirates_flight_selection_demo
Complete robust framework covering the following:
    - Negative Login scenarios: 
        - No email and no password
        - No email 
        - No password
        - Wrong email or password 
    - Flights selection Lifecycle: 
        -  Navigating to the homepage
        -  Selecting flight destination
        -  Selecting departure date (today)
        -  Selecting return date (30 days from today regardless the month[handled by Date])
        -  Selecting departure flight
        -  Selecting return flight
        -  Entering Passenger Details
        -  Entering Contact Details

This framework uses:
- The POM approach to make it easily modified for future changes. (all pages are added in the pageObjects folder)
- Fixtures to be tested by multiple inputs that can be added to the json fixture file (fixture file is added in the fixtures folder)

+ Can be added to the jenkins CI pipeline

+ Reports are included and can be extracted in html format 
