<?php
    // array functions
    echo "<h1>Array Functions</h1>";

    $fruits = array("Apple", "Mango", "Peach", "Grapes");


    // count() function
    echo "<h3>count()</h3>";
    echo "Total Fruits:" . count($fruits) . "<br>";

    // array_push & array_pop function
    echo "<h3>array_push() & array_pop()</h3>";
    
    //array_push()
    array_push($fruits, "Orange", "Watermelon"); // it adds the element at the last of an array
    echo "Array After Push(): ";
    print_r($fruits);

    echo "<br>";

    //array_pop()
    array_pop($fruits);
    echo "Array After Pop(): "; // it removes elements from the last of an array
    print_r($fruits);

    echo "<br>";


    // array_unshift & array_shift functions
    echo "<h3>array_unshift() & array_shift()</h3>";


    //array_unshift()
    array_unshift($fruits, "Strawberry"); // it adds the element at the start of an array
    echo "Array After Unshift(): ";
    print_r($fruits);

    echo "<br>";


    //array_shift()
    array_shift($fruits); // it removes the element from the start of an array
    echo "Array After Shift(): ";
    print_r($fruits);

    echo "<br>";

    // in_array function
    echo "<h3>In_Array()</h3>";

    // in_array()
    if(in_array("Mango",$fruits)){ // it checks the given element / value is in the list or not
        echo "Mango is in the list";
    }

    


    echo "<h1>End of array functions</h1>";


 


?>