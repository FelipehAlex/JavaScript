<?php
$files = $_FILES['files'];
move_uploaded_file($files['tmp_name'], destination:"C:/Users/felipe.alex/Documents/JavaScript-Projects/Ajax com PHP 2/$files[name]");