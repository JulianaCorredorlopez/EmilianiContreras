<?php

include('db.php')

$USUARIO=$_POST['usuario'];
$CONTRASEÑA=$_POST['contraseña'];


$consulta = "SELECT* FROM administrador where usuario = '$USUARIO' and contraseña ='$CONTRASEÑA' ";
$resultado= mysqli_query($conexion, $consulta);
 
$filas=mysqli_num_rows($resultado);

if($filas){
    header("location:platos.html");

}else{
    include("administrador.html");
    ?>
    <h1>ERROR DE AUTENTIFICACION</h1>
    <?php   

}
mysqli_free_result($resultado);
mysqli_close($conexion);
?>