# AI Safety Incident Dashboard

This project is a web-based dashboard that displays AI safety incidents, allowing users to view and expand incident details. It is built using **React** for the frontend.

## Project Overview

The AI Safety Incident Dashboard provides users with a clear and interactive view of incidents related to AI safety. It displays a list of incidents, their severity, and a description that can be expanded or collapsed upon user interaction.

## Language/Framework

- **Frontend:** React (JavaScript)
- **CSS:** Custom styling with **Flexbox** and **Media Queries** for responsive design.

## Installation & Setup

### Prerequisites

Make sure you have **Node.js** and **npm** installed. If not, install Node.js from [here](https://nodejs.org/).

### Steps to Run the Project Locally

1. **Clone the Repository**

   If you're using Git, clone the repository using:

   ```bash
   git clone https://github.com/jastilakshith/safety_incident_dashboard
   cd safety_incident_dashboard
2. **Start the Development Server**
   Once the dependencies are installed, start the development server with:
   ```bash
   npm start
The application will be available at http://localhost:3000.

## Design Decisions & Challenges
1. State Management
The app uses React's useState hook to manage the state of the incident list, expanded view, and button states.

2. Responsive Design
Media queries are used to adjust the font size and layout for smaller screen sizes, specifically targeting mobile devices like the iPhone SE.

3. Transition Effects
The list expansion uses CSS transitions for a smooth animation when an incident is expanded or collapsed.

4. Dynamic Data Handling
The app is designed to be flexible, so it can easily accommodate dynamic changes to the incident data (loaded from listdata.js).

## Challenges Faced
1. Smooth Transition Effect:

  Implementing the smooth transition effect for expanding and collapsing list items posed a challenge due to the need to use CSS max-height, which doesn't work well with 
  auto. A fixed max-height was used for smooth animation.

2. Responsive Adjustments:

  Adjusting the responsiveness for mobile screens took some time due to the need to balance readability with compactness on smaller devices.

3. Struggles with advanced CSS:

  Faced some issues during the debugging of some advanced CSS code
