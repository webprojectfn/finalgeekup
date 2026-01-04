<?php

$host = "127.0.0.1:3309";
$user = "hobby_personal";
$password = "";
$database = "hobby_personal";
$conn="";
try{$conn = new mysqli($host, $user, $password, $database);
        $conn->set_charset('utf8'); 
}

catch (mysqli_sql_exception $e) {
    die("Connection failed: " . $e->getMessage());
}




?>



