//Create variable ws that will hold the WebSocket object.
var ws;

function connect(){
    var url = "ws://localhost:8080/web-socket";
    ws = new WebSocket(url);
    ws.onopen = function(){
        var content = document.getElementById("content");
        content.innerHTML = "";
        showBroadcastMessage("<div>Connected to server</div>")
    };
    ws.onmessage = function(data){
        showBroadcastMessage(createTextDiv(data.data));
    };
    setConnected(true);
}

function disconnect(){
    ws.send("I am disconnecting my friend");
    ws.close();
    showBroadcastMessage("<div>Disconnected from server</div>")
    setConnected(false);
}

function send(){
    var message = document.getElementById("message");
    ws.send(message.value);
    message.value = "";
}

function setConnected(connected){
    var connectButton = document.getElementById("connect");
    var disconnectButton = document.getElementById("disconnect");
    if(connected){
        connectButton.disabled = true;
        disconnectButton.disabled = false;
    }else{
        connectButton.disabled = false;
        disconnectButton.disabled = true;
    }
}

function createTextDiv(message){
    return '<div>' + message + '</div';
}

function showBroadcastMessage(message){
    var content = document.getElementById("content");
    content.innerHTML = content.innerHTML + message;
}
