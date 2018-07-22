// Creates an array that lists out all aphabets.
    var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses and attmpts made to guess the correct alphabet. They start at 0.
    var wins = 0;
    var losses = 0;    
    var attempts=5;
    var LetterToGuess= "";
    var Counter = 0;

    var TriedVar=[];
    UserSelectedDiv = document.getElementById("UserSelected");

    //Function 
    var RandomVar = function(){
      // Randomly chooses a choice from the options array of Letters. This is the Computer's guess.
      LetterToGuess = Letters[Math.floor(Math.random() * Letters.length)].toLowerCase();
      //console.log("LetterToGuess: " + LetterToGuess);
    }
    
    // This function is run whenever the user presses a key.
    function Psychic(){
        //CAll function to generate a random character from the array Letters[].
        RandomVar();

        //Reset No of guesses
        attempts=5;

        //Clear the array of alphabets Guessed So Far
        while (TriedVar.length) {
            TriedVar.pop();
        }

        document.onkeyup = function(event) {
                        
            //Continue with the game only if an alphabet is keyed in else send an alert message!
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                
                // Determines which key was pressed. Convert the key to lower case
                var userGuess = event.key.toLowerCase();
                                    
                // This logic determines the outcome of the game (win/loss), and increments the appropriate count
                TriedVar.push(userGuess);   
                if (userGuess === LetterToGuess){
                    wins++;                    
                    // End this round and run the game again
                    Psychic();                    
                }
                else {           
                    attempts--; 
                    if (attempts == 0){                         
                        losses++;                      
                        // End this round and run the game again
                        Psychic();                        
                    }
                }
                
                // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
                var html =
                //"<p>You chose: " + userGuess + "</p>" +
                "<p>No of Guesses left: " + attempts + "</p>" ;
                //"<p>The computer chose: " + LetterToGuess + "</p>" +
                
                var tally =    
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>" ;
        
                // Set the inner HTML contents of the #game div to our tally string                
                document.querySelector("#CurrentGameStatus").innerHTML = tally;
                
                // Set the inner HTML contents of the #scores div to our html string
                document.querySelector("#scores").innerHTML = "Current Game Status: " + html;
                
                // Set the inner HTML contents of the #UserSelected div to our html array TriedVar
                document.getElementById("UserSelected").innerHTML = "Your Guesses So Far: " + TriedVar + " ";
            
            } 
            else{
                alert("Incorrect Input: Not an alphabet, Select again!");
            }
        };        
    }


    Psychic();