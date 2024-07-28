# Emirates demo
Complete cypress robust framework covering the following:
    
    - Negative Login scenarios: 
        1- No email and no password
        2- No email 
        3- No password
        4- Wrong email or password 

    - Flights selection Lifecycle: 
        1-  Navigating to the homepage
        2-  Selecting flight destination
        3-  Selecting departure date (today)
        4-  Selecting return date (30 days from today regardless the month[handled by Date])
        5-  Selecting departure flight
        6-  Selecting return flight
        7-  Entering Passenger Details
        8-  Entering Contact Details

This framework uses:
- The POM approach to make it easily modified for future changes. (all pages are added in the pageObjects folder)
- Fixtures to be tested by multiple inputs that can be added to the json fixture file (fixture file is added in the fixtures folder)

+ Can be added to the jenkins CI pipeline

+ Reports are included and can be extracted in html format 
