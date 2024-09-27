

# Exercise 1 : Multiplying Array Elements by 3 Using Arrow Functions

This project demonstrates how to use JavaScript's `map()` method along with arrow functions to transform an array by multiplying each of its elements by 3.

## Features

- **Array Transformation with `map()`**: The project takes an array of numbers and applies a transformation to each element using the `map()` function.
- **Arrow Function Syntax**: The transformation is performed using an arrow function, which simplifies the code.

## Code Overview

The code multiplies each element of the array `nums` by 3 and stores the result in a new array `nouvNums`.

## How to Use

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Run the provided JavaScript code in a browser console or JavaScript environment to see the array transformation in action.

## Concepts Covered

- Using `map()` to transform arrays.
- Arrow function syntax in JavaScript for concise function expressions.
- Array manipulation in JavaScript.


 # Exercise 2 : Filtering and Mapping Members

This project demonstrates how to filter and map data from an array of objects in JavaScript. The focus is on extracting a specific subset of data and transforming it into a simpler format.

## Features

- **Filter Array by Property**: The project filters an array of people to select only those who are members (`estMember === true`).
- **Map Filtered Data**: After filtering the members, it maps the resulting array to display only the names of the selected members.

## Code Overview

The code uses the following JavaScript functions:

1. **`filter()`**: Used to filter the original array of people (`personnes`) and return only those objects where the `estMember` property is `true`.
2. **`map()`**: After filtering, the `map()` function extracts the `nom` property of each filtered object, creating a new array of names.



## How to Use

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Run the provided JavaScript code in a browser console or JavaScript environment to see the filtering and mapping in action.

## Concepts Covered

- Filtering arrays using `filter()`
- Transforming data with `map()`
- Array manipulation in JavaScript

Here’s a description for the exercise that you can include in your `README.md` file on GitHub:

---

# Exercise 3 : Inscription Management with Total Fee Calculation

This project demonstrates how to manage a list of student inscriptions using pure functions in JavaScript, and how to calculate the total fees from the list of inscriptions.

## Features

- **Pure Function to Add an Inscription**: The `pureAppendInscription` function allows for adding a new inscription to the list while keeping the original array unchanged, using the `concat()` method to return a new array.
- **Calculate Total Fees**: The project also includes a function to calculate the sum of fees (`frais`) for all inscriptions using the `reduce()` method.

## Code Overview

The code is divided into two main parts:
1. **Appending an Inscription**: A pure function that takes the current list of inscriptions and a new inscription as arguments, and returns a new array with the new inscription appended.
2. **Calculating Total Fees**: Using the `reduce()` method to compute the total fees from the `frais` property of each inscription.

## How to Use

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Run the provided JavaScript code in a browser console or JavaScript environment to see the pure functions and fee calculation in action.

## Concepts Covered

- Pure functions and immutability using `concat()`.
- Using `reduce()` to accumulate values in an array.
- Functional programming concepts in JavaScript.



# Exercise 4 : Inscription Management

This project provides basic JavaScript functions to manage a list of student inscriptions. The following functionalities are implemented:

Features
Add a New Inscription: Insert a new inscription into the list at a specified position.
Delete an Inscription by Position: Remove an inscription from the list based on its position.
Delete an Inscription by ID: Remove an inscription from the list using its unique ID.
Update an Inscription by Position: Modify an existing inscription's details at a specified position.
Update an Inscription by ID: Modify an existing inscription's details using its unique ID (ID remains unchanged).
Code Overview
The project includes several JavaScript functions to perform these actions, using methods like splice() and findIndex() to handle array manipulation efficiently.

Functions:
pureInsert(id, nom, filiere, position) - Adds a new inscription at a specific position.
pureDeleteByPosition(position) - Removes an inscription from the list by position.
pureDeleteByID(id) - Removes an inscription using its ID.
pureUpdateByPosition(id, nom, filiere, position) - Updates an inscription's details at a given position.
pureUpdateByID(id, nom, filiere) - Updates an inscription's details based on its ID.
How to Use
Clone the repository to your local machine.
Open the project in your favorite code editor.
Run the provided JavaScript functions in a browser or any JavaScript environment to test the inscription management features.
