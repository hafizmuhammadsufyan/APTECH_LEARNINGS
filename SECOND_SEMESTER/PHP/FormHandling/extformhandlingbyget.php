<?php

if(isset($_GET["submitbtn"])){

    $name = $_GET["name"];
    $age = $_GET["age"];
    $email = $_GET["email"];
    $city = $_GET["city"];
    $gender = $_GET["gender"];

    echo "<h1>Name: $name </h1>";
    echo "<h1>Age: $age </h1>";
    echo "<h1>Email: $email </h1>";
    echo "<h1>City: $city </h1>";
    echo "<h1>Gender: $gender </h1>";
}

?>