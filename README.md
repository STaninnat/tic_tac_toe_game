# Tic Tac Toe Game Project

The game consists of 3x3, 5x5, and 7x7 game sizes.
The first page will have the size of the game to choose from as mentioned above. 
> *(You can choose by clicking on the picture or size text)*

When entering, you will find a game according to the size you have chosen. The game rules can be found on the right side. By pressing the **Rules** button Then have fun with the game!

When the game ends with a winner or a draw. You can press the **Restart** button to start over again.
> If you want to change the game size. You can press the home button on the top left to return to the home page and select the size you want.
> To know past playing history. Notice the icon at the bottom right. Click that button and it will display your past play history.

## 🤝 Guideline

### Clone the repo in Visual Studio Code or other code editor
```git clone https://github.com/STaninnat/tic_tac_toe_game```

### Run the project by...
1. Can run by Extensions 
    * Live Server or Web Preview
    * Right-click on the index.html file and click "Open with Live Server"

2. Or open the index.html file in your browser.

## 📝 Design

1. **UI (User Interface) Design**
    The UI design should focus on simplicity and ease of use for players:
    **Game Board:** There should be a clear 3x3 grid showing the different positions for players to choose from.
    **Player Status:** Shows the current player (X or O) and may have an area to show the results when the game is over (such as a winner or a draw).
    **Reset button:** For restarting the game.

2. **Data structure and algorithm design**
    The game board is stored in a two-dimensional array and provides various functions in the game operation, such as updating the board. winner verification and resetting the board.

3. **Testing and improvements**
    After you write the code The game should be tested to make sure it works correctly and that there are no bugs. The game should be played several times to make sure that winner verification and game reset work properly.

4. Adding features
    After the basic game works. You may want to add features such as:
    * Save play history
    * Added AI for playing against the computer.
    * Improved the UI to make it more beautiful and easier to use.

## 💻 Algorithm

1. **Board setup**
    Tic-Tac-Toe game board is stored in the form of 3x3, 5x5, and 7x7 two-dimensional arrays.
    Example of 3x3: ``` let board = [['', '', ''], ['', '', ''], ['', '', '']]; ```

2. **How the game works**
    **Start the game:** Set the first player to be X and the next to be O.
    **Receive input from the player:** The player chooses where to insert the symbol. The position must be vacant.
    **Update board:** Place symbols in selected positions.
    **Verify Wins:** After each turn played. Check if any players win or not.
    **Switch Players:** Change players for the next turn.

3. **Winning Verification**
    Winning verification is done by checking every row, column and diagonal according to the selected game size.

4. **Checking draw results**
    If there are no vacancies on the board and there is still no winner, the game is a draw.

5. **Keep playing history**
    When the results are received, whether the player wins or draws. It will be stored in localStorage named history.

6. **Resetting the game**
    After the game ends (there is a winner or a draw), the board must be reset to start a new game.