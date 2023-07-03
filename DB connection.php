<?php
$serverName="localhost";
$username="root";
$password="";
$database="healing_bliss";

//Setting up the connection
$conn=new mysqli($serverName, $username, $password, $database);

if($conn->connect_errno)
{
    die("Connection failed: ". $conn->connect_error);
}
?>