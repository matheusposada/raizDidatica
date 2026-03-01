<?php

$host = "localhost";
$db = "u975407545_raiz_didatica";
$user = "u975407545_raiz_user";
$pass = "matematicar@1Z";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>