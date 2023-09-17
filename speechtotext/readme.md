# Speech Text Reader

## Overview

This project creates a web application that reads predefined text out loud based on user interactions. It uses HTML, CSS, and JavaScript to achieve this functionality.

## How It Works

### HTML Structure

- The `index.html` file defines the layout of the web page, including buttons for various actions, a text area for custom input, and a dropdown to select a voice.

### JavaScript Functionality

- Predefined data represents different states or actions, each with an image and corresponding text.

- JavaScript (`script.js`) dynamically generates content boxes for each predefined item, featuring an image and text. Clicking on a box triggers the associated text to be read aloud.

- Users can select a voice from available system voices using the dropdown.

- Speech synthesis is employed to read out the text associated with the clicked box or the custom text entered by the user.

- The "Toggle Text Box" button controls the visibility of the text input area and voice selection dropdown.

- A "Close" button inside the text input area allows users to close it.

- The CSS ensures a visually appealing and responsive design across different screen sizes.

## Technologies Used

- HTML: Structure and layout.
- CSS: Styling for a user-friendly interface.
- JavaScript: Interactivity and functionality.
- Speech Synthesis API: Enabling text-to-speech capabilities.

## Usage

1. Click on the predefined action buttons to hear the associated text.
2. Select a voice from the dropdown to change the speech synthesis voice.
3. Click the "Read Text" button to hear the text entered in the textarea.
4. Toggle the text input area visibility with the "Toggle Text Box" button.
5. Close the text input area using the "Close" button.

