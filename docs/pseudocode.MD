# Step 1
1. Which parts of my page are static, and which are dynamic?
    -Static(to be written into HTML): the timer, View High Scores button(link to high scores), Start button, Go Back button, Check Answer button
    -Dynamic(to be written in JavaScript): rendering question text, rendering each individual answer to that question
#Step 2 
1.Grab Start Button Element on page using JavaScript
(This is already in the HTML).
2. When I click on the Start Button (event listener with a type of "click"), run the code to start the quiz.
3. Set the max time on the timer.
4. In HTML, there should be a container to append the questions and answers to.
5. Dynamically render the question to the screen.
6. Dynamically render the answers to the screen.
    -The answers should be buttons.
    -Remember, the default when you click on a button is that the page refreshes. So add an (event.preventDefault()).
    -Start the timer when the answers are rendered to the screen.
7. Now that I have questions and answers on the screen, I need to check when the user's answers.
    -Obviously it wouldn't be very efficient to put an event listener on every single question and answer.
    -Where to put the event listener for clicking on an answer: Event Delegation. 
        -Add the event listener to the parent (the HTML container that I'm appending the questions and answers to).
        -Then, element.match("button"). Figure out what text or attributes are on that button to compare to see if we're right nor not. (getAttribute/setAttribute).
        -If correct, show next question.
        -If incorrect, decrease time.
        -If time hits 0, end the game.
        -If there are no more questions, end the game.

        ```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
