function startSim(){
    ws_manager = new WebSocket("ws://" + websocket_address + ":8765/");
    exercise = "human_detection"

    ws_manager.onopen = function(event){
        ws_manager.send(JSON.stringify({"command": "exit", "exercise": ""}));
        ws_manager.send(JSON.stringify({"command": "open", "exercise": exercise}));
    }

    ws_manager.onmessage = function(event){
        console.log(event.data);
    }

    setTimeout(function(){
        declare_code();
        declare_gui();
    }, 10000);

}
