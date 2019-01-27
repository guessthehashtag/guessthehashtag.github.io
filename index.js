var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var playerCount = 0;
var userNames = [];
var buttonNames = [];
var user1 = new Object();
var user2 = new Object();
var user3 = new Object();
var user4 = new Object();
var user5 = new Object();
var user6 = new Object();
user1.number = 1;
user2.number = 2;
user3.number = 3;
user4.number = 4;
user5.number = 5;
user6.number = 6;

user1.votes = 0;
user2.votes = 0;
user3.votes = 0;
user4.votes = 0;
user5.votes = 0;
user6.votes = 0;
var users = [user1, user2, user3, user4, user5, user6];


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get ('/styles.css', function (req, res) {
    res.sendFile(__dirname + "/" + "styles.css");
});
app.get ('/script.js', function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});

/*
app.get('/Login.html', function(req, res){
    res.sendFile(__dirname + "/Login.html");
  });
  app.get('/Lobby.html', function(req, res){
    res.sendFile(__dirname + "/Lobby.html");
  });*/
io.on('connection', function(socket){
    playerCount = playerCount + 1;
    //var i = 0;
    for (var i = 0; i < users.length; i = i+1) {
        var j = i +1
        if (playerCount == j) {
            users[i].id = socket.id;
            console.log('user ' + users[i].id + ' connected');
            //console.log(playerCount);
        }
    }
    //i = 0;
    //user1.id = socket.id;
  //console.log('user ' + user1.id + ' connected');
  //playerCount = playerCount + 1;
  socket.on('disconnect', function(){
    for (var i = users.length-1; i > 0; i = i-1) {
        //var i = 1
        //var j = i +1
        if (playerCount == i) {
            //users[i].id = socket.id;
            playerCount = playerCount - 1;
            console.log('user ' + users[i].id + ' disconnected');
            //console.log(playerCount);
        }
    }
    //console.log('user ' + user.id + ' disconnected');
  });
  socket.on('uname', function(msg2){
      userNames.push(msg2);
      //console.log(userNames.length);
      for (var i = 0; i < users.length; i = i+1) {
        if (users[i].id == socket.id) {
            users[i].name = msg2;
            console.log('user has entered: ' + users[i].name);
            io.emit('uname', userNames);
            //console.log(userNames.length);
        }
    }
    //console.log(userNames.length);
      //console.log('user has entered: ' + user.name);
      //io.emit('uname', msg2);
  });
  socket.on('hash', function(msg3){
    //userNames.push(msg3);
    for (var i = 0; i < users.length; i = i+1) {
        if (users[i].id == socket.id) {
            users[i].hashtag = msg3;
            console.log('user has entered: ' + users[i].hashtag);
            io.emit('gotHash', users[i].hashtag, users[i].number, buttonNames);
        }
    }
    //console.log('user has entered: ' + msg3);
    //io.emit('uname', msg2);
});
socket.on('vote', function(v) {
    for (var i = 0; i < users.length; i = i+1) {
        if (users[i].id == socket.id) {
            users[i].votes = users[i].votes + v;
            console.log('user has: ' + users[i].votes);
        }
    }
}); 
  socket.on('chat message', function(msg){
    console.log(playerCount);
    console.log('message: ' + msg);
    io.emit('chat message', 'server says ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


/*var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("I am here!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
*/
// Client
/*
var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
*/
//http://localhost:3000