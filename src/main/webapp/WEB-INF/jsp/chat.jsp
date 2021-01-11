<%-- 
    Document   : index
    Created on : Jan 11, 2021, 7:10:24 PM
    Author     : user
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Basic WebSocket Example</h1>
        Click your button:
        <button type="button" onclick="connect()" id="connect" >Connect</button>
        <button type="button" onclick="disconnect()" id="disconnect" >Disconnect</button>
        
        <div>
            <div>
                <input type="text" id="message" placeholder="Your message"/>
            </div>
            <button id="send" onclick="send()">Send</button>
        </div>
        
        <div id="content"></div>
        
        <script src="js/websocket.js"></script>
    </body>
</html>
