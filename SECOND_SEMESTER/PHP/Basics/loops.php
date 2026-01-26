<?php
// for loop => we use for loop only when we know the number of iterations

for($i = 1; $i <= 5; $i++){
    echo "Numbers: " . $i . "<br>";
}

$number = 5;

for($i = 1; $i <= 10; $i++){
    echo "$number X $i " . ($number * $i) . "<br>";
}

// while loop
$i = 1;

while($i <= 5 ){
    echo "Numbers: " . $i . "<br>";
    $i++;

}


?>