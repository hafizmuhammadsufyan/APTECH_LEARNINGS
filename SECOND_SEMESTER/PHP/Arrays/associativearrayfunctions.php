<?php
    // functions of associative arrays


    $student = array(
        "name" => "Ali",
        "age" => 20,
        "city" => "Karachi",
    );


    //array_keys & array_values functions
    echo "<h1>array_keys() & array_values() functions</h1>";

    // array_keys()
    echo "array_keys: ";
    print_r(array_keys($student)); // it takes all the keys from the targeted array and make a new array of it
    echo "<br>";

     // array_values()
    echo "array_values: ";
     print_r(array_values($student)); // it takes all the values from the targeted array and make a new array of it
     echo "<br>";

     //array_merge functions
    echo "<h1>array_merge() functions</h1>";

    $a = array("red","green");
    $b = array("blue","yellow");

    // array_merge()
    $merged = array_merge($a,$b); // it merges two arrays into one new array

    echo "Merged: ";
    print_r($merged);

    //sort and rsort functions
    echo "<h1>sort() and rsort() functions</h1>";

    $numbers = array(4,8,5,6,1,2);

    // sort()
    sort($numbers); // it arranges array in Ascending order globally
    echo "Ascending: ";
    print_r($numbers);

    echo "<br>";

    // rsort()
    rsort($numbers); // it arranges array in Descending order globally
    echo "Desscending: ";
    print_r($numbers);

    // asort and ksort functions
    echo "<h1>asort() and ksort() functions</h1>";

    $student1 = array(
        "name" => "Anus",
        "age" => 30,
        "city" => "Lahore",
    );

    // asort()
    asort($student1); // it arranges associative array in Ascending order w.r.t values
    echo "Sort w.r.t Values: ";
    print_r($student1);

    echo "<br>";

    // ksort()
    ksort($student1); // it arranges associative array in Ascending order w.r.t Keys
    echo "Sort w.r.t Keys: ";
    print_r($student1);

    echo "<br>";

    // array_combine functions
    echo "<h1>array_combine() functions</h1>";

    $keys = array("name","age","city");
    $values = array("Sara","18","Karachi");

    $combined = array_combine($keys,$values); // it combines two arrays (key : value formatted) and make one associated array

    echo "Combined: ";
    print_r($combined);


    // array_unique functions
    echo "<h1>array_unique() functions</h1>";

    $nums = array(1,2,2,3,4,5,5,7,6,6);
    print_r(array_unique($nums)); // it removes duplicte values and returns an array with only unique values


    echo "<h1>End of associative array functions</h1>";










  