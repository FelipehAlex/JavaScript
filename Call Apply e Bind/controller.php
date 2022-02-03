<?php
$pdo = new PDO(dns: "mysql:host=loacalhost;dbname=teste", usernamr="root", password:"");
&sql = $pdo -> prepare(statement:"select * from book");
$sql -> execute();
$data = $sql -> fetchAll(fetch_style:PDO::FETCH_ASSOC);
echo json_encode($data);