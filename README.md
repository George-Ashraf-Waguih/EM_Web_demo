# Emirates_flight_selection_demo
Complete robust framework covering the lifecycle of getting a flight ticket test example of the following scenarios:
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

+ Reports are included and can be used in html format 
