<?php
$age = 17;

// only if
if($age >= 18){
    echo "Eligible" . "<br>";
}



// if else
$marks = 39;

if($marks >=40){
    echo "Pass" . "<br>";

}else{
    echo "Fail" . "<br>";
}


// if elseif  "in php dont give spave after else"
$score = 85;

if($score >= 90){
    echo "Grade A+" . "<br>";
 
}elseif($score >= 75){
    echo "Grade A" . "<br>";

}elseif($score >= 60){
    echo "Grade C" . "<br>";
}

// Nested if
$age = 20;
$citizen = true;

if($age >=18){
    if($citizen){
        echo "Eligible For Vote" . "<br>";

    }
}

// Nested if with logical example 

$username = "admin";
$password = "admin123";

if($username == "admin"){
    if($password == "admin123"){
    echo "Login Successfull" . "<br>";

    }else{
    echo "Incorrect Password" . "<br>";

    }
}else{
    echo "Incorrect Username" . "<br>";

}

?>