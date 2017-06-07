computerPrompt = prompt ()
  return ("Do you know I can tell a lot about a person, when I meet them?  I can; and I'll prove it to you!  I'll ask you 5 yes or no questions; and I'll guess them right: do you want to see if I'm right?!")

  var userChoice = prompt();
  var computerChoice = Math.random();
    console.log (computerChoice);

    if (userChoice >= 0 && userChoice <= 0.50) {
      // I'm trying to declare a value for yes and no; give computerPrompt answer. //
      console.log ("Yes, you want to play; GREAT!");
    }

    else (userChoice > 0.50 && userChoice <= 0.1) {
      // Use console.log() to show "computerPrompt" //
      console.log ("No, yo do not want to play...I guess that about you, too!");
    }

    // What if a user makes an inappropriate choice like 'Get out of my face!'? How can I extend the function to handle that? //
    else if (userChoice == "YES", "Yes", "yes") {
            // Show "Outcome" //
            return ("Yes, you want to play; GREAT!");
    }
        if (userChoice == "NO", "No", "no") {
            // Show "Outcome" //
            return ("No, yo do not want to play...I guess that about you, too!");
        }

        else if (userChoice !== "YES", "Yes", "yes", "NO", "No", "no")) {
            // Show "Outcome" //
            return ("Like I said, I know a lot about you, already.");
        }

    function compare (choice1, choice2) {

      var userChoice = choice1;
      var computerChoice = choice2;

      if (choice1 > choice2) {
          // Show "Outcome" //
          return ("You Win!  There's more to you than I thought!");
      }

      else (choice1 < choice2) {
          // Show "Outcome" //
         return ("See, I always know a character!");
      }
