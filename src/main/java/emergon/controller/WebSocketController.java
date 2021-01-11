package emergon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebSocketController {
    
    @RequestMapping("/chatWebPage")
    public String getWebSocketPage(){
        return "chat";
    }
}
