##  20200914-SadiyaJabeen-NYCSchools

## Key features in the App 

### Home Screen

#### Launch Screen and Home Screen
  - When the app is launched, the user will see the launch screen with title of the app and school logo and then the user will be shown the list of schools in NYC.
#### Activity Indicator when schools are loaded
  - Whent the list of schools are being loaded, an acitivity indicator is shown.
#### Search Schools with School Name or City
  - User can choose to search schools by either School Name or City using the Search Controller at the top.
#### Pagination calls
  - Added pagination calls to load only 10 results at a time for better data usage. More schools will be loaded as the user scrolls down and the activity indicator is shown when the new schools are loaded.
#### Make a Phone Call
  - User can make a phone call to the school by tapping on the phone number button on any cell. (Note: An alert is added to indicate that calls cannot be made on simulator and need to use a real device.
#### Navigate to School
  - User can choose to navigate/drive to school by tapping on the Navigate button which will open the map with the School Location as Destination.
#### Tap Refresh button to refresh schools 
  - User can refresh the screen to load the latest schools by tapping on the Refresh button in the navigation bar.
#### Open School details
  - Clicking on a cell will take the user to the Details Screen for the selected school.
  
 ### Details Screen
 
 The Details screen will have the following sections:
 #### 1. SAT Scores: 
 - Critical Reading score, Math score and Writing score.
 #### 2. Overview: 
 - Overview of the school
 #### 3. Contact: 
 - School Address, Phone number and Website which is clickable and will take the user to School Home Screen.
 #### Use of Gesture recognizer
 - For demonstration of Gesture Recognizer, the website is made a UILabel and added a Tap gesture instead of making it a UIButton.
 #### 4. School Location: 
 - Location of the school with a map pin on the map.
  
### Architecture 
  - The architecture follows MVVM design pattern along with Modularity, Single Responsibility, Scalability and Testability.
     #### Modularity
     - The classes  have been modularized into multiple logical modules like Controller, Network Layer, Data/Presentation Layer, UI Layer. 
     
     #### Single Responsibility
     - Each class has been made to be responsible for one and only one task. 
     - For example, DataSource is responbile only for business logic to display cells, Delegates for navigation logic, Network Manager/Service to handle service calls, View Model for data logic supporting the DataSource and Cell Model to render the data.
     
     #### Scalability  
     - Since the modules are decoupled from the core logic and developed independently. The design of one screen just can be used as a template for other screens.
     
     #### Testability 
     - Since the design is broken down into smaller components, it gets lot easier to add tests using mock objects and json. 
     - Added Unit tests for Services, Endpoints, ViewModels, Models and Cell Models for demonstration purpose.
  
