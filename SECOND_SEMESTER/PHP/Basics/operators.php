<?php
    // 10 + 20 
    // (operand) (operator)  (operand)

    // there are three types of operators
    
    //urinary (which requires only 1 operand) "i++, i--, i+=, i-= etc"
    //binary  (which requires 2 operands)    "10 + 20 like arthmetic operators"
    //ternary (which requires 3 operands)     "ternary operators i == 2 ? "true" : "false"


    // arthmetic operators
    echo "<h1>Arthmetic Operators</h1>";

    $num1 = 100;
    $num2 = 200;

    $sum = $num1 + $num2;
    $sub = $num1 - $num2;
    $mult = $num1 * $num2;
    $dvd = $num1 / $num2;
    $mod = $num1 % $num2;

    echo "Addition " . $sum . "<br>";
    echo "Subtraction " . $sub . "<br>";
    echo "Multiplication " . $mult . "<br>";
    echo "Division " . $dvd . "<br>";
    echo "Modulus " . $mod . "<br>";

    // conditional operators
    echo "<h1>Conditional Operators</h1>";

    if($num1 > $num2){
        echo "true";
    }else{
        echo "false";
    }

    // Increament and Decreament Operators
    echo "<h1>Increament and Decreament Operators</h1>";

    $num3 = 1;

    $num3++;

    echo $num3 . "<br>";

    $num4 = 1;

    $num4--;
    echo $num4 . "<br>";
    
    // Logical Operators
    echo "<h1>Logical Operators</h1>";


    echo "<h2>AND</h2>";


    $age = 18;
    $cnic = true;
    $payslip = true;

    if($age == 18 && $cnic){
        echo "Eligible For Vote" . "<br>";
    }else{
        echo "Not Eligible For Vote" . "<br>";

    }

    echo "<h2>OR</h2>";


    if($cnic || $payslip){
        echo "Eligible For Account" . "<br>";
    }else{
        echo "Not Eligible For Account" . "<br>";

    }

    echo "<h1>NOT</h1>";

    $education = true;

    if(!$education){
        echo "Not Eligible for admission in Iqra University for Rishta";
    }else{
        echo "Eligible Paisa Hona Chahiyay";
    }

    echo "<h1>Assignment Operators</h1>";


    // Assignment Operators
    $x = 10;
    echo $x . "<br>";

    $x += 5;
    echo $x . "<br>";

    $x -= 3;
    echo $x . "<br>";

    $x *= 2;
    echo $x . "<br>";

    $x /= 4;
    echo $x . "<br>";

    $x %= 5;
    echo $x . "<br>";

    echo "<h1>Concat Operators</h1>";


    // Concat Operators "An operator which joints the string together (.=)"
    $txt = "Hello";
    $txt .= " PHP";

    echo $txt . "<br>";

    echo "<h1>Ternary Operators</h1>";

    // Ternary Operator
    $age = 20;

    // if($age >= 18){             // normal condition if and else
    //     $status = "Eligible";
    // }else{
    //     $status = "Not Eligible";
    // }

    // converting to ternary
    $status = $age >= 18 ? "Eligible" : "Not Eligible";

    echo $status . "<br>";

    echo "<h1>Operator Presedence</h1>";

    // Operator Presedence "BODMAS Rule" (Brecket Operation Division Multiplication Addition Subtraction)
    echo 5 + 3 * 2;
    echo "<br>";
    echo (5 + 3) * 2;




?>