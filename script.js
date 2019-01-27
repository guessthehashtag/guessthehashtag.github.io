function goToLogin(){
    var div = document.getElementById("splashScreen");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Login");
    div2.style = "opacity: 1; display: block";
}

function goToInstr(){
    var div = document.getElementById("splashScreen");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Instr");
    div2.style = "opacity: 1; display: block";
}

function goToLobby(){
    var div = document.getElementById("Login");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Lobby");
    div2.style = "opacity: 1; display: block";
}

function goToAnswer(){
    var div = document.getElementById("Lobby");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Answer");
    div2.style = "opacity: 1; display: block";
}

function goToVote(){
    var div = document.getElementById("Answer");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Vote");
    div2.style = "opacity: 1; display: block";
}

function goToScoreboard(){
    var div = document.getElementById("Vote");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Scoreboard");
    div2.style = "opacity: 1; display: block";
}

function goToWinner(){
    var div = document.getElementById("Scoreboard");
    div.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("Winner");
    div2.style = "opacity: 1; display: block";
}

function goToSplashScreen(){
    var div = document.getElementById("Winner");
    div.style = "opacity: 0; display: none;";
    var div3 = document.getElementById("Instr");
    div3.style = "opacity: 0; display: none;";
    var div2 = document.getElementById("splashScreen");
    div2.style = "opacity: 1; display: block";
}