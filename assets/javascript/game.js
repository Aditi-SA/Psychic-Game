// Creates an array that lists out all aphabets.
    var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses and attmpts made to guess the correct alphabet. They start at 0.
    var wins = 0;
    var losses = 0;    
    var attempts=15;
    var LetterToGuess= "";

    var TriedVar=[];
    UserSelectedDiv = document.getElementById("UserSelected");

    //Function 
    var RandomVar = function(){
      // Randomly chooses a choice from the options array of Letters. This is the Computer's guess.
      LetterToGuess = Letters[Math.floor(Math.random() * Letters.length)];
      console.log(LetterToGuess);
    }
    //CAll function to generate a random character from the array Letters[].
    RandomVar();

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      
      // Determines which key was pressed.
      var userGuess = event.key;    
      
      //// Randomly chooses a choice from the options array of Letters. This is the Computer's guess.
      //var LetterToGuess = Letters[Math.floor(Math.random() * Letters.length)];

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
     
        if (userGuess === LetterToGuess){
          wins++;
          //document.write("You Win!!!");
          RandomVar();                   
          // function to choose LetterToGuess
        }
        else {           
          attempts--; 
          if (attempts === 0){
            document.write("You Lost!!!");
            RandomVar();
            losses++; 
          }
        }
        TriedVar.push(userGuess);
        //document.getElementById("UserSelected").innerHTML = "Letters already selected: " + TriedVar + " ";
              
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>No of attempts left: " + attempts + "</p>" ;
                  
        var tally =    
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" ;

        // Set the inner HTML contents of the #game div to our html string
        
        document.querySelector("#CurrentGameStatus").innerHTML = tally;        

        document.querySelector("#scores").innerHTML = "Current Game Status: " + html;
        
        document.getElementById("UserSelected").innerHTML = "Letters already selected: " + TriedVar + " ";
        
    };