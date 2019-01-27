function goToLogin(){
    var div = document.getElementById("splashScreen");
    div.style.opacity = "0";
    var div2 = document.getElementById("Login");
    div2.style.opacity = "1";
}

function goToInstr(){
    var div = document.getElementById("splashScreen");
    div.style.opacity = "0";
    var div2 = document.getElementById("Instr");
    div2.style.opacity = "1";
}

function goToLobby(){
    var div = document.getElementById("Login");
    div.style.opacity = "0";
    var div2 = document.getElementById("Lobby");
    div2.style.opacity = "1";
}

function goToAnswer(){
    var div = document.getElementById("Lobby");
    div.style.opacity = "0";
    var div2 = document.getElementById("Answer");
    div2.style.opacity = "1";
}

function goToVote(){
    var div = document.getElementById("Answer");
    div.style.opacity = "0";
    var div2 = document.getElementById("Vote");
    div2.style.opacity = "1";
}

function goToScoreboard(){
    var div = document.getElementById("Vote");
    div.style.opacity = "0";
    var div2 = document.getElementById("Scoreboard");
    div2.style.opacity = "1";
}

function goToWinner(){
    var div = document.getElementById("Scoreboard");
    div.style.opacity = "0";
    var div2 = document.getElementById("Winner");
    div2.style.opacity = "1";
}

function goToSplashScreen(){
    var div = document.getElementById("Winner");
    div.style.opacity = "0";
    var div2 = document.getElementById("splashScreen");
    div2.style.opacity = "1";
}
