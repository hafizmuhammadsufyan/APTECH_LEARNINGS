<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="extformhandlingbyget.php" method="get">
        <label for="name">Name: </label>
        <input type="text" name="name" id="">
        <br><br>

        <label for="age">Age: </label>
        <input type="number" name="age" id="">
        <br><br>

        <label for="email">Email: </label>
        <input type="email" name="email" id="">
        <br><br>

        <label for="city">City: </label>
        <input type="text" name="city" id="">
        <br><br>

        <label for="">Gender: </label>
        <input type="radio" name="gender" id="male" value="Male">
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="Female">
        <label for="female">Female</label>
        <br><br>

        <button type="submit" name="submitbtn">Submit</button>
    </form>
    <?php
    // if(isset($_GET["submitbtn"])){

    // $name = $_GET["name"];
    // $age = $_GET["age"];
    // $email = $_GET["email"];
    // $city = $_GET["city"];
    // $gender = $_GET["gender"];

    // echo "<h1>Name: $name </h1>";
    // echo "<h1>Age: $age </h1>";
    // echo "<h1>Email: $email </h1>";
    // echo "<h1>City: $city </h1>";
    // echo "<h1>Gender: $gender </h1>";
    
    // }
    ?>
</body>

</html>