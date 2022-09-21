<?php
echo 'working...';
$conn = mysqli_connect('localhost' , 'root' , '' , 'nawabi');


// if (isset($_GET['email'])){
//     echo 'your email is '.$_GET['email'];
// }

if(isset($_POST['email'])){
    $email = mysqli_real_escape_string($conn , $_POST['email']);
    echo  "this email : " . $_POST['email'] . "Subscribed";
    $query = "INSERT INTO text(email) VALUE('$email')";
    if(mysqli_query($conn , $query)){
        echo "email added succesfully";
    }
    else {
        echo 'email not added Error : ' .mysqli_error($conn);
    }
}