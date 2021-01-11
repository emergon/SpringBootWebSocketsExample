package emergon.config;

import emergon.websocket.MyTextWebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket// enables plain websockets capabilities
public class MyWebSocketConfigurer implements WebSocketConfigurer{

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry wshr) {
        WebSocketHandler webSocketHandler = new MyTextWebSocketHandler();
        String myHandlerEndpoint = "/web-socket";
        wshr.addHandler(webSocketHandler, myHandlerEndpoint);
    }
    
}
