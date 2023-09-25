
# Donation-Campaign

"The website showcases a collection of active fundraising campaigns, each associated with a specific cause or organization. Users can explore these campaigns to learn more about the mission, goals, and current status of the fundraising efforts."


## Features

- Search Field To Find Specific Category
- Donate Button For Donation Amount
- Pie Chart To Show Donation


## "Search Field To Find Specific Category"

![Alt](https://i.ibb.co/TvTjv85/searchfield.jpg)
This guide provides an overview of creating a search field using React JSX, employing event handler functions, the useState hook, and the onChange handler to obtain and filter values, allowing users to search and find specific categories dynamically.

Begin by importing the necessary modules from React, including the useState hook to manage state within a functional component.

`import React, { useState } from 'react';`

Set up a state variable to store the search term. The useState hook is used to define the initial state and a function to update it.

`const [searchTerm, setSearchTerm] = useState('');
`

Implement an input field where users can type to search for specific categories. The value of the input is linked to the searchTerm state, and the onChange event handler updates the searchTerm as the user types.

`<input
  type="text"
  placeholder="Search for a category"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>`


## "Donate Button For Donation Amount"

![Alt](https://i.ibb.co/v1z8Ly1/donatebtn.jpg)

Create a "Donate" button that triggers the donation action when clicked. The button will use an onClick event handler to call a function that manages the donation action.

`<button onClick={handleDonate}>Donate</button>
`

Define the handleDonate function to manage the donation action. This function will use the donationAmount state to determine the amount to be donated.

`const handleDonate = () => {
  // Perform the donation action using the specified amount
  console.log('Donating amount:', donationAmount);
  // Add logic to handle the donation action, e.g., payment processing
};`
## "Pie Chart To Show Donation"

![Alt](https://i.ibb.co/jGP2hNJ/piechart.jpg)

In this guide, we'll explain how to create a pie chart in a React application using the Minimal Pie Chart library. The pie chart will visually represent donation amounts and will be controlled by the length of donation cards, reflecting the distribution of donations.

Start by installing the react-minimal-pie-chart library using npm or yarn and importing it into your React component.

`npm install react-minimal-pie-chart`
`import { PieChart } from 'react-minimal-pie-chart';`

Obtain the data for donations, such as amounts or categories, from your application. This data will be used to populate the pie chart.

The DonationsPieChart component receives the donation card length as a prop and uses it to calculate the distribution. The pie chart is rendered using the react-minimal-pie-chart library, and the segments are colored accordingly. Adjust the colors and segment values as needed for your specific use case.