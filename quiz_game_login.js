function adduser(){
        player_1 = document.getElementById("player_1_name").Value;
        player_2 = document.getElementById("player_2_name").value;
        localStorage.setItem("player_1", player_1);
        localStorage.setItem("player_2", player_2);
        window.location ="quiz_game_login_.html";
    }
    
