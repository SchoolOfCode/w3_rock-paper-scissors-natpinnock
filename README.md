# Rock, Paper, Scissors!

Work through the tasks below **one by one**. Make sure you have completed each task before moving on to the next. Some steps will require you to change code you've already written.

## Task 1: Logic

To complete this ticket you will need to write a set of if statements in [main.js](main.js) that will determine the winner of rock, paper, scissors.

We will hard-code each move in variables so that we can check our game logic, but will later delete these and instead use function parameters.

```js
// change these variables to test your code
let playerMove = "rock";
let computerMove = "paper";
```

Plan out the possible combinations of rock, paper and scissors for the two moves. Then convert that logic to code and console.log the result of the game.

This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly, e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.

## Task 2: Function

Take the if statements that you've written and tested and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return:

- `1` if player1 wins
- `0` if it is a draw
- `-1` if player1 loses (player2 wins)

The function should be able to be used like so:

```js
function getWinner(player1, player2) {
  // code goes here...
}

let result = getWinner("rock", "paper");
```

This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number.

## Task 3: User Input

Using `prompt`, get a user-inputted value for the player move. Then call your function with that value as the player move and the hard-coded computer move. Display the result using `alert`.

This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.

## Task 4: Computer Player

Write a function that generates a random computer move. Use that function to make a dynamic game where the computer move is randomly chosen every time instead of being hard-coded.

<details>
<summary>Hint</summary>
`Math.random()` might be useful!
</details>

This will be deemed as complete when the player can input any move in the prompt, the computer move is chosen by random, and the correct result shows in the alert.

## Task 5: Game Loop

Now that we have a fully functioning game, our next step is to have it run as many times as people would like to play without having to refresh the page.

Use a `while loop` and `confirm`.

This will be deemed as complete when a player can keep playing indefinitely and has the option to stop playing after every round.

## Task 6: Scores

Keep track of how many games have been played, as well as the number of wins, losses, and draws.

This will be deemed as complete when this information is displayed after each round.

## Task 7: DOM

Refactor your application so that all interactions are through HTML elements in [index.html](index.html) rather than `confirm`, `alert` and `prompt`. Using the DOM allows our game to be event-driven, so you may want to remove the while loop and instead compute the winner when an event is fired.

This will be deemed as complete when `confirm`, `alert` and `prompt` are no longer used, user interaction is handled with HTML elements, and all the information is displayed on the page.

## Task 8: Validation

Create a username `input` field and use the username the player inputs in the game so that a player can see their name on the page when looking at where the scores are displayed.

To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

This will be deemed as complete when the users cannot enter a username longer than 10 characters.

🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.  
🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.

## Task 9: Style, Animation and User Experience

Use CSS to add some style, flair, and animation to the playing experience on the page. Be creative! ✨ Keep in mind your user and make their experience as easy and enjoyable as possible.

Some resources:

- [Animations](https://animista.net/)
- [Colour schemes](https://coolors.co/generate)
- [Gradients](https://uigradients.com/)
- [Box shadows](https://getcssscan.com/css-box-shadow-examples)
