$(document).ready(function() {

        
        
    var wins = 0;
    var losses = 0;
    var score = 0;
    var ranNumButton1 = Math.floor((Math.random() * 80) + 20);

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score").text(score);
    $("#numberGoal").text(ranNumButton1);
    
    function numberGend() {
    var ranNumButton = Math.floor((Math.random() * 10) + 1);
    return ranNumButton;
    }

    function resetGame() {
    ranNumButton1 = Math.floor((Math.random() * 100) + 1);
    score = 0;
    $("#button1").attr("value", numberGend());
    $("#button2").attr("value", numberGend());
    $("#button3").attr("value", numberGend());
    $("#button4").attr("value", numberGend());
    $("#score").text(score);
    $("#numberGoal").text(ranNumButton1);
    }
    
    $("#button1").attr("value", numberGend());
    $("#button2").attr("value", numberGend());
    $("#button3").attr("value", numberGend());
    $("#button4").attr("value", numberGend());

    $("button").on("click", function() {
      score += parseInt(this.value);
      console.log(score)
      $("#score").text(score);

      if (score === ranNumButton1){
          wins++;
          $("#wins").text(wins);
          $("#winLose").text("You Win");
          resetGame()
      }
      
      if (score > ranNumButton1){
        losses++;
        $("#losses").text(losses);
        $("#winLose").text("You Losse");
        resetGame()
      }

    });
    
   

});