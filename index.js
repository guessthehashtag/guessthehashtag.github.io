var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var playerCount = 0;
var userNames = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  playerCount = playerCount + 1;
  socket.on('disconnect', function(){
    console.log('user disconnected');
    playerCount = playerCount - 1;
  });
  socket.on('chat message', function(msg){
    console.log(playerCount);
    console.log('message: ' + msg);
    io.emit('chat message', 'server says ' + msg);
  });
});

http.listen(1337, function(){
  console.log('listening on *:1337');
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
//http://localhost:1337