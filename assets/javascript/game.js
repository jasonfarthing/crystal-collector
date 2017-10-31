
console.log("poo");

$(document).ready(function () {


    // var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // console.log(targetScore);

    // var stone1 = Math.floor(Math.random() * 12 + 1);
    // console.log(stone1);

    // var stone2 = Math.floor(Math.random() * 12 + 1);
    // console.log(stone2);

    // var stone3 = Math.floor(Math.random() * 12 + 1);
    // console.log(stone3);

    // var stone4 = Math.floor(Math.random() * 12 + 1);
    // console.log(stone4);

    // var myScore = 0;

    var wins = 0;
    var losses = 0;

    // console.log("poo poo");

    // $("#computer-pick").text(targetScore);
startGameAgain();


    function startGameAgain() {
        myScore = 0;
        targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        stone1 = Math.floor(Math.random() * 12 + 1);
        stone2 = Math.floor(Math.random() * 12 + 1);
        stone3 = Math.floor(Math.random() * 12 + 1);
        stone4 = Math.floor(Math.random() * 12 + 1);
        // $("#total-score").text();
        $("#my-score").text(myScore);
        $("#computer-pick").text(targetScore);
    }

    function checkWin() {

        if (myScore === targetScore){
            wins++;
            $("#total-score").text("You Win!!!")
            $("#my-wins").text(wins)
            // alert = ("You Win");  //output You Win to html
            startGameAgain();
        }
        else if (myScore > targetScore) {
            losses++;
            $("#total-score").text("You Lose - Try Agian.")
            $("#my-losses").text(losses)
            // alert = ("You Loose");  //output You Loose to Html
            startGameAgain();
        }
        // startGameAgain();
    }

    $("#solar").on("click", function(){
        myScore += stone1;
        $("#my-score").text(myScore);
        console.log(myScore);
        checkWin();
    })

    $("#crown").on("click", function(){
        myScore += stone2;
        $("#my-score").text(myScore);  
        console.log(myScore);
        checkWin();
        
    })

    $("#root").on("click", function(){
        myScore += stone3;
        $("#my-score").text(myScore);
        console.log(myScore);
        checkWin();
        
    })

    $("#heart").on("click", function(){
        myScore += stone4;
        $("#my-score").text(myScore);
        console.log(myScore);
        checkWin();
        
        
    })


    // function youLoose() {
    //     if (myScore > targetScore) {
    //         losses++;
    //         alert = ("You Loose");//output You Loose to Html
    //         startGameAgain();
    //     }
    // }











    //  id="my-score" for the my score part






});
