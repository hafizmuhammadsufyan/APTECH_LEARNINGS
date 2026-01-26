<?php
    // associative arrays , in php we do not have objects like JS but we have associative arrays that stores values in key => value format
    // in php associative array we use arrow (=>) instead of column (:) and the key will always be in (string)

    $student = array(
        "name" => "Ali",
        "age" => 20,
        "city" => "Karachi",

        "name" => "Sara",
        "age" => 21,
        "city" => "Karachi"

    );

    print_r($student);

    echo "<br>";

    echo $student["name"];

    echo "<br>";

    // loop for accessing associative array's key and value 
    foreach($student as $key => $value){
        echo "$key : $value <br>";

        // echo "<h1>$student['name']</h1>";
    }


?>