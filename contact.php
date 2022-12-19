<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comment = $_POST['comment'];

    $con = new mysqli('localhost', 'root', '', 'login');
    if($con -> connect_error){
        die('Connection failed:  ' .$con->connect_error);
    }
    
    else{
        $stmt = $con->prepare('insert into contact(name, surname, email, phone, comment)
            values(?,?,?,?,?)');
         $stmt -> bind_param("sssss", $name, $surname, $email, $phone, $comment);
        $stmt -> execute();
    }
?>
