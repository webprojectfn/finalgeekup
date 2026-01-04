<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = "127.0.0.1";
$port = 3306;                 // IMPORTANT: your screenshot shows 3306 now
$user = "root";
$password = "";               // empty password (common in XAMPP)
$database = "hobby_personal";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($host, $user, $password, $database, $port);
    $conn->set_charset("utf8mb4");

    echo "✅ Connected successfully to DB: " . $database;

    // quick test query
    $result = $conn->query("SELECT DATABASE() AS db");
    $row = $result->fetch_assoc();
    echo "<br>Using database: " . $row["db"];

} catch (mysqli_sql_exception $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}

