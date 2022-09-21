<?php

$conn = mysqli_connect('localhost' , 'root' , '' , 'nawabi');
$query = "SELECT * FROM text";
$result = mysqli_query($conn,$query);
$emails = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($emails);
 