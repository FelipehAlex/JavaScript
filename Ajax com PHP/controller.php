<?php
$name = filter_input(type: INPUT_POST, variable_name: 'name', filter: FILTER_SANITIZE_SPECIAL_CHARS);
$arr = [
    'name' => $name,
    'age' => 18,
    'city' => 'Belo Horizonte'
]

echo json_decode($arr);