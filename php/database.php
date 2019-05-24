<?php


    $username = $_POST['username'];
    $password = $_POST['password'];

    $dbUserName = "COSC453";
    $dbPassword = "thepassword";
    
    


    if($username == $dbUserName && $password == $dbPassword){
        echo(1);
    }

    else {
        echo("Incorrect username or password");
    }

   


    

    

?>