# Psychic-Game

### Before You Begin

1. Create a new GitHub repo called `Psychic-Game`, in accordance with the assignment you choose to complete. Then, clone it to your computer.

2. Inside your local git repository, create an `index.html`.

3. While still in your local git repo, create a directory called `assets`.
4. `cd` your way into the `assets` folder, then make three additional folders: `javascript`, `css` and `images`.

   * In the `javascript` folder, make a file called `game.js`. Use the `src` attribute of the `script` tag to link to this file, rather than embedding the code directly in your HTML document.
   * In the `css` folder, make a file called `style.css`.
   * Also in the `css` folder, make a file called `reset.css`. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
   * In the `images` folder, save whatever images you plan on using.
   
   
Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

1. Guess what letter I'm thinking of

2. Wins: (# of times the user has guessed the letter correctly)

3. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

4. Guesses Left: (# of guesses left. This will update)

5. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

6. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

7. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
