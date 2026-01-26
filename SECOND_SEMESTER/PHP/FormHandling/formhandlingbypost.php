<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- we use post method when user sends any data to the server to maintain the privacy cuz get method put the data into URL -->
    <form action="formhandlingbypost.php" method="post">
        <label for="">Username: </label>
        <input type="text" name="username" id="">
        <br><br>

        <label for="">Passowrd</label>
        <input type="password" name="password" id="">
        <br><br>

        <button type="submit" name="loginbtn">Login</button>
    </form>

    <?php
        if(isset($_POST['loginbtn'])){
            $username = $_POST["username"];
            $password = $_POST["password"];

            // creating dummy login system

            if($username == "admin"){
                if($password == "admin123"){
                    echo "<script>
                            alert('Login Successfull')
                            window.location.href = 'welcome.php?username=$username'
                        </script>";
                }else{
                    echo "<script>alert('Incorrect Password')</script>";
                }
            }else{
                echo "<script>alert('Incorrect username')</script>";

            }

        }
    ?>
</body>
</html>