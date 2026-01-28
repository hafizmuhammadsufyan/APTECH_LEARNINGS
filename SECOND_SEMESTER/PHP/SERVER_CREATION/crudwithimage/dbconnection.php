<?php
    // this file is to builid connectivity / bridge between database and server
    // to build connection we have predefinied method "mysqli_connect()" which requires 4 parameters and return true of false
    // Parameters: "mysqli_connect(hostname,username,password,database name)", these all parameters we will provide in string

    $connection = mysqli_connect("localhost","root","","studentdb"); 

    if($connection){ // for checking database is connected of not
        echo "Data base connected";
    }else{
        echo "Data base not connected";

    }



?>