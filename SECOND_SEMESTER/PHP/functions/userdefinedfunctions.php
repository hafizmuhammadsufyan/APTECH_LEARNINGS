<?php
    echo "<h1>User Defined Functions</h1>"; // these are the functions that php user/developer defines as per their need

    function greet(){   // basic funtion defining
        echo "Welcome to php functions <br>";
    }


    greet(); // calling the function
    greet();

    echo "<h2>Function's: Parameters, Arguments, Default Values, Return</h2>";

    function addNum($a, $b =5){ // creating functions with parameters (a) & (b) where (b) has its (Default Value)
        return $a + $b; // (Return Statement)
    }


    echo "Calling addNum(10, 20): " . addNum(10,20) . "<br>"; // calling functions with (Arguments) without default value
    echo "Calling addNum(10): " . addNum(10) . "<br>"; // calling functions with (Arguments) with default value


    echo "<h2>Function's: Pass by Value</h2>";  // a function that only takes value of a variable and does not update the variable globally

    function increamentNumber($num){  // pass by value (normal parameter)
        return ++$num; // (++$num) using preIncreament so that it will plus and return the value cuz return does not consider postIncreament like ($num++)
    }


    $value = 10;

    echo increamentNumber($value);
    echo "<br>";
    echo $value;


    echo "<h2>Function's: Pass by Reference</h2>";  // a function that takes the reference of a variable update the variable globally

    function increamentNumberbyRef(&$num){ // pass by value ((&)parameter with &)
        return ++$num; // (++$num) using preIncreament so that it will plus and return the value cuz return does not consider postIncreament like ($num++)
    }


    $valueRef = 10;

    echo increamentNumberbyRef($valueRef);
    echo "<br>";
    echo $valueRef;

?>