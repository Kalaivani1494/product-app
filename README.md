## Product Management App
This is a frontend application built with React, Redux, and React Router DOM for managing products. It allows users to create, edit, and delete products, as well as filter them based on categories.

## Technologies Used
React: React is a popular JavaScript library for building user interfaces. It provides a component-based architecture, making it easy to manage and reuse UI components.

Redux: Redux is a predictable state management library. It helps manage the application's state in a central store, making it easier to share data between components and track changes.

React Router: React Router is a routing library for React applications. It enables navigation and routing between different components, allowing us to create multiple pages and handle URL changes.

Jest - Framework for testing.

## Installation
To start and use the app, follow these steps:  
Clone the repository or download the source code from https://github.com/Kalaivani1494/product-app  

Navigate to the project directory.  
cd product-app-main  

Install the dependencies.  
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

Start the application.  
npm start

To test the application  
npm test

The application will be running at http://localhost:3000.

## Usage
## Product List: 
The app displays a list of products with their details, including description, expiration date, category, price, and special status. Special products are highlighted.

## Filtering: 
You can filter the product list based on categories using the category filter dropdown.

## Adding a Product: 
Click on the "Add Product" link to navigate to the product form. Fill in the required details and click "Submit" to add a new product.

## Editing a Product: 
Click on the "Edit" button next to a product to navigate to the product form with pre-filled details. Make the necessary changes and click "Submit" to update the product.

## Deleting a Product: 
Click on the "Delete" button next to a product to remove it from the list.

## Note
This app is a frontend-only implementation, and the data is not persisted between page refreshes. It is meant to demonstrate the usage of React, Redux, and React Router for managing and manipulating product data in a frontend application.
