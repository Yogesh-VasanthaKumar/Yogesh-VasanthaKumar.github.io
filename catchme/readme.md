# Catch Me Game

This is a simple "Catch Me" game implemented using HTML, CSS, and JavaScript. In this game, you have to catch the moving box by hovering over it.

## How It Works

- The game consists of a colored box that moves to random positions within the visible window when you hover over it.

- JavaScript is used to add interactivity to the game. Here's a brief overview of how the game works:

    1. The JavaScript code selects the game box element using `document.querySelector('.game-box')`.

    2. It adds an event listener to the game box to listen for the `mouseover` event.

    3. When the `mouseover` event is triggered (when you hover over the box), it calls the `getNewPosition` function.

    4. The `getNewPosition` function generates random X and Y coordinates within the visible window, ensuring that the box stays within the window boundaries.

    5. The box's `top` and `left` CSS properties are updated with the new coordinates, causing the box to move to the new position with a smooth transition.

## File Structure

- `index.html`: The HTML file that defines the structure of the web page, including the game box and references to the CSS and JavaScript files.

- `script.js`: The JavaScript file that contains the game logic. It selects the game box, adds event listeners, and updates the box's position.

- `style.css`: The CSS file that styles the game box and provides a simple visual design.

## How to Play

1. Open the `index.html` file in a web browser.

2. Hover over the colored box with the text "Catch Me."

3. Try to catch the box as it moves to random positions within the window.

## Customize

You can customize the game by modifying the CSS styles in the `catchme.css` file to change the appearance of the game box.
