<?php
    include("dbconnection.php");

    if(isset($_POST["registerstudent"])){
        $name = $_POST["name"];
        $gender = $_POST["gender"];
        $age = $_POST["age"];
        $class = $_POST["class"];

        //method to get or handle imgaes or input:file fields
        $image = $_FILES["profileimage"]; // returns associative array -> image details
        
        // getting image's name and its tmp_name from its associative array given by XAMPP server
        $profile_image_name = $image["name"];
        $profile_image_tmp_name = $image["tmp_name"];

        // creating img path for uploading on DB

        $folder = "images/";

        $image_path = $folder . $profile_image_name;

        echo $name . "<br>";
        echo $gender . "<br>";
        echo $age . "<br>";
        echo $class . "<br>";
        print_r($image);
        echo "<br>";
        echo $profile_image_name . "<br>";
        echo $profile_image_tmp_name . "<br>";
        echo $image_path . "<br>";


        // insert query to insert the data into data base:
        $query = "INSERT INTO student(name,gender,age,class,image_path)
                    VALUES ('$name','$gender','$age','$class','$image_path')";


        mysqli_query($connection,$query);

    }


?>