var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var playerCount = 0;
var userNames = [];

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
  console.log('a user connected');
  playerCount = playerCount + 1;
  socket.on('disconnect', function(){
    console.log('user disconnected');
    playerCount = playerCount - 1;
  });
  socket.on('uname', function(msg2){
      console.log('user has entered: ' + msg2);
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