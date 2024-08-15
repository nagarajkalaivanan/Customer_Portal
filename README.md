
# Customer Portal Application

This is a single-page application built with React and TypeScript that displays a list of customers. On selecting a customer from the sidebar, detailed information about the customer, including a 3x3 grid of photos that refresh every 10 seconds, is displayed.

## Features

- **Customer List**: Displays up to 1000 customers in a scrollable sidebar.
- **Customer Details**: Shows the selected customer's name, title, address, and a grid of 9 photos.
- **Photo Grid**: The photos in the grid update every 10 seconds by fetching images from a public API.
- **State Management**: Efficiently handles the large customer list and ensures smooth updates with React hooks.

# Run Application in Local

  -- **npm install** to install the required package 

  -- **npm start** to run the application


## Project Structure


src/
│
├── components/
│   ├── Customer_Sidebar.tsx  # Sidebar component to display customer list
│   ├── Customer_Details.tsx  # Customer details component
│   ├── Customer_View.tsx     # Combination of both Sidebar and Detail Component
│
├── types/
│   └── customer.ts          # Type definitions for Customer
│
├── App.tsx                  # Main App component
├── index.tsx                # Entry point of the React app
│
└── public/
    └── customers.json       # JSON file containing customer data
