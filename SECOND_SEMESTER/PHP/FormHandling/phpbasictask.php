<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="phpbasictask.php" method="get">

        <label for="name">Student Name</label>
        <input type="text" name="name" id="">
        <br><br>

        <label for="">Number Of Subjects</label>
        <p>5</p>

        <br><br>
        
        <label for="">Subjects</label>
        <br><br>

        <label for="">English:</label>
        <input type="number" name="english" id="">
        <br><br>

        <label for="">Urdu:</label>
        <input type="number" name="urdu" id="">
        <br><br>

        <label for="">Maths:</label>
        <input type="number" name="math" id="">
        <br><br>

        <label for="">Chemistry:</label>
        <input type="number" name="chemistry" id="">
        <br><br>

        <label for="">Computer:</label>
        <input type="number" name="computer" id="">
        <br><br>

        <button type="submit" name="submitbtn">Submit</button>
        <br><br>

        <?php
         if(isset($_GET['submitbtn'])){
            $name = $_GET['name'];
            $numberofsubject = 5;
            $eng = $_GET['english'];
            $urdu = $_GET['urdu'];
            $math = $_GET['math'];
            $chem = $_GET['chemistry'];
            $comp = $_GET['computer'];

        
            $totalmarks = 500;
            $marksgot = $eng+$urdu+$math+$chem+$comp;

            $percentage = ($marksgot / $totalmarks) * 100;
                
            echo $name;
            echo "<br>";
            echo $totalmarks;
            echo "<br>";
            echo $marksgot;
            echo "<br>";

            echo "$percentage %";
            echo "<br>";


            if($percentage >=80){
                echo "Grade A";
            echo "<br>";

                echo "Pass";
            echo "<br>";

            }elseif($percentage >=60){
                echo "Grade B";
            echo "<br>";

                echo "Pass";
            echo "<br>";

            }elseif($percentage >=40){
                echo "Grade C";
            echo "<br>";

                echo "Pass";
            echo "<br>";

            }else{
                // echo "Grade C";
                echo "Fail";
            }
        }

        
        ?>
    </form>
</body>
</html>