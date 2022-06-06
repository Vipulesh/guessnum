var submit = document.getElementById("Submit");
var result = document.getElementById("rel");
var numb = document.getElementById("number");
var ref = document.getElementById("refresh");

var y = Math.floor(Math.random()*1000 + 1);
var guess = 1;

function checkSameNum(){
    
    var number = parseInt(document.getElementById("number").value);
    
    if(y == number){
        result.innerHTML="Correct Guess! You guessed in "+guess+" attempts.";
    }
    else if(number < y){
        guess++;
        result.innerHTML="OOPS!! Incorrect Guess! Try A Larger Number.";
    }
    else{
        guess++;
        result.innerHTML="OOPS!! Incorrect Guess! Try A Smaller Number.";
    }
}

function addListAfterKeypress(event) {
	if (event.keyCode === 13) {
        checkSameNum();
    }
}

function refreshPage(){
    window.location.reload("Refresh");
}

submit.addEventListener("click",checkSameNum);
numb.addEventListener("keypress", addListAfterKeypress);
ref.addEventListener("click", refreshPage);