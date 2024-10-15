<?php
$hos = 'localhost';
$usuario = 'root';
$contraseña = '';
$db = 'restaurantee';

$conexion = @mysqli_connnect($host,$usuario,$contraseña,$db);

if(!$conection){
    echo "Error en la conexión";
}

?>