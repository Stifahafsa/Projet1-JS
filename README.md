

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


# Exercise 4: Managing Student Inscriptions with Pure Functions

This project demonstrates how to manage a list of student inscriptions using various pure functions in JavaScript. The functions allow you to add, delete, and update inscriptions by both position and ID in the array.

## Features

- **Pure Function to Insert an Inscription**: The `pureInsert` function allows adding a new inscription at a specific position within the `inscriptions` array.
- **Delete an Inscription by Position**: The `pureDeleteByPosition` function deletes an inscription based on its position in the array.
- **Delete an Inscription by ID**: The `pureDeleteByID` function deletes an inscription by searching for the given `id` in the array.
- **Update an Inscription by Position**: The `pureUpdateByPosition` function updates the inscription at a specific position in the array.
- **Update an Inscription by ID**: The `pureUpdateByID` function updates the inscription's information (name and field) by searching for the inscription with the provided `id`.

## Code Overview

The project consists of five key functions that provide full control over the `inscriptions` array:

1. **`pureInsert()`**: Adds a new inscription at the specified position in the array.
2. **`pureDeleteByPosition()`**: Removes an inscription from a specific position.
3. **`pureDeleteByID()`**: Deletes an inscription based on its unique `id`.
4. **`pureUpdateByPosition()`**: Updates an inscription's data based on the array position.
5. **`pureUpdateByID()`**: Updates an inscription by locating it through its `id`.


### Output:
- **Inserting a New Inscription**:
  - A new inscription can be added at a specific position in the array.
  
- **Deleting by Position or ID**:
  - The inscriptions at specified positions or with a particular ID are removed.
  
- **Updating by Position or ID**:
  - Inscription data (name and field) is updated either by its position or by searching for the inscription by ID.

## How to Use

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Run the provided JavaScript code in a browser console or JavaScript environment to see how the functions for managing inscriptions work.

## Concepts Covered

- Using `splice()` for inserting and deleting elements in an array.
- Searching arrays with `findIndex()` to locate items by ID.
- Pure functions for immutability in JavaScript.


