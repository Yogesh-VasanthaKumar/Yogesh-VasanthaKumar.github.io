# Leaderboard Web App

This simple web app allows users to maintain a leaderboard of players. Users can add players with their first name, last name, country, and score. The app displays the players in descending order of their scores.

## Features

- **Add Players**: Users can input a player's first name, last name, country, and score and add them to the leaderboard by clicking the "Add Player" button.

- **Delete Players**: Each player entry in the leaderboard has a "Delete" button to remove that player from the leaderboard.

- **Update Scores**: Users can update a player's score by clicking the "+5" or "-5" buttons next to each player's entry.

- **Validation**: The app performs basic input validation to ensure that all fields are filled, and the score is a valid number.

## Technologies Used

- HTML: The structure of the web page is defined using HTML.

- CSS: The app is styled using CSS for a simple black and white color scheme.

- JavaScript: JavaScript is used to handle user interactions, dynamically add players to the leaderboard, update scores, and sort the leaderboard entries.

## JavaScript Functionality

The JavaScript code in this project accomplishes the following tasks:

1. **Form Submission Handling**: It listens for form submissions and prevents the default form behavior. It then extracts user inputs for the player's name, country, and score.

2. **Validation**: It validates user inputs to ensure that all fields are filled and the score is a valid number. If there are validation errors, it displays an error message.

3. **Creating Player Entries**: It creates new player entries as HTML elements and appends them to the leaderboard.

4. **Sorting Leaderboard**: It sorts the leaderboard entries based on player scores in descending order, ensuring the player with the highest score appears at the top.

5. **Button Event Handling**: It listens for button clicks within the leaderboard to either delete a player or update their score.

## Usage

1. Clone the repository to your local machine.

2. Open the `index.html` file in a web browser.

3. Use the form to add players and interact with the leaderboard.

