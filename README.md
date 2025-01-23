
# Snack & Steer 
**Website**: [snack-steer.onrender.com](https://snack-steer.onrender.com)
The Snack and Steer Dashboard is an innovative platform designed to alleviate the frustrations of being stuck in traffic by offering a range of real-time solutions. This dashboard aims to enhance user convenience and productivity by integrating various features, such as real-time delivery, transportation.



## Key Features

#### Real-Time Delivery Services:
-  Allowing users to order food, groceries, or other essentials while in traffic, ensuring they can utilize their time efficiently.

#### Transportation Options: 
- Providing alternative routes, ride-sharing options, and public transportation schedules to help users navigate traffic jams more effectively.


## Problems it solves

#### Wasted Time in Traffic:

-  Offers real-time delivery services, allowing users to order essentials, maximizing their time while stuck in traffic.

#### Lack of Real-Time Traffic Alternatives:

-  Provides up-to-date information on alternative routes, public transportation, and ride-sharing options to help users avoid or escape traffic jams.

#### Limited Productivity While Stuck:

- Solution: Enables users to remain productive by facilitating tasks like ordering items or accessing useful information without leaving their vehicle.
## Project Type
 - Full Stack
## Deployed App

--LINK--- https://snack-steer.onrender.com
## Directory Structure

main
├── Backend
│   ├── config
│   │   └── db.js
│   ├── module
│   │   ├── Usermodule.js  
│   │   └── userProfile.module.js
│   ├── node_modules
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── userProfile.route.js
│   ├── index.js
│   
│   
├── Frontend
│   ├── SnackSteer
│   │   ├── public
│   │   ├── src
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── CreateProfile
│   │   │   │   ├── Dashboard
│   │   │   │   ├── FoodPage
│   │   │   │   ├── Map
│   │   │   │   ├── Navbar
│   │   │   │   └── TrafficReliefDashboard
│   │   │   ├── context
│   │   │   │   └── AuthContext.js
│   │   │   ├── pages
│   │   │   │   ├── DeliveryPage.jsx
│   │   │   │   ├── EmergencySupport.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── NewsFeed.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   ├── TestingFooter.jsx
│   │   │   │   ├── TestingFooter.css
│   │   │   │   └── TransportPage.jsx
│   │   │   ├── services
│   │   │   │   └── api.js
│   │   │   ├── styles
│   │   │   │   ├── Dashboard.css
│   │   │   │   ├── DeliveryPage.css
│   │   │   │   ├── EmergencySupport.css
│   │   │   │   ├── Login.css
│   │   │   │   ├── NewsFeed.css
│   │   │   │   ├── Register.css
│   │   │   │   └── TransportPage.css
│   │   │   ├── App.jsx
│   │   │   ├── App.css
│   │   │   ├── main.jsx
│   │   │   └── index.css
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── README.md
│   │   └── yarn.lock
└── README.md
├── .gitignore
├── package.json
├── package-lock.json

## Video Walkthroughs

- https://drive.google.com/drive/folders/1lLk5f_1kVuBvicm0wL8SRjtHBC_eguSf?usp=sharing

- 
## Design Decisions

#### Frontend and Backend:

- Frontend: Manages the user interface and experience, built with HTML, CSS, and React js

 - Backend: Handles server-side logic and data management, developed using Node.js, express js

#### Database Choice:

A database stores user data, device settings, and routines. We have used the specific type of NoSql, which is handled by MongoDB.

#### Modular Design:

- Features such as login, device setup, and the dashboard are structured as separate modules, enhancing code maintainability.

#### APIs for Communication:

- The frontend and backend communicate through APIs to exchange data, including user authentication and device information.

#### Device Compatibility:

- The system is designed to be compatible with common smart devices that utilize Wi-Fi connectivity.
Responsive Design:

- The user interface is responsive, ensuring optimal functionality across various devices, including smartphones, tablets, and desktops.

#### Secure Login:

- vUser accounts are protected with strong password policies and secure data transmission protocols to maintain data integrity.
Scalable System:

- The architecture supports scalability, allowing for the addition of more users and devices as the system grows.
Error Handling:

- Errors and exceptions are properly logged to facilitate efficient troubleshooting and system maintenance.
## Installation & Getting Started
 
- Clone the project repository:
git clone link ################### cd SnackSteer
- Install dependencies:
 npm install
- Start the application:
- npm run build
 npm run dev

## Usage

- Open your browser and navigate to http://localhost:3000 (or the port specified in the project).
- Create an account or log in to start using the snap & steer.
- Set up your snap & steer and view dashboards.


 
## Technology Stack
- Frontend : HTML,CSS and React.js for designing the user interface.
- Backend : Node js and express js used for logic part of server side
- Database : MongoDB for maintaining the NoSQL database.

## Other libraries/Modules
- axios: For HTTP requests.
- Express: For creatings routes,handling http requests ,middleware integrations.
- mongoose : for mongoDB connection, storing data
- CORS : Origin Resourse Sharing - For allowing other domains to access our API
- dotenv : For storing confidential data
-recharts: For charts
