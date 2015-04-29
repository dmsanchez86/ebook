<?php

/* se incluye el archivo donde estan todos los métodos de la clase conexion */
include_once('conexion.php');

/* inicializacion de mi objeto de la clase conexion */
$instance = new conexion("localhost","atarraya_zopp","adminzopp","atarraya_ebook");
$control = false;

if(isset($_POST['id'])){
    $sql = "SELECT * FROM secuencias WHERE id = '".$_POST['id']."'"; // Consulta
    $control = true;
}
else
    $sql = "SELECT * FROM secuencias";

if(isset($_POST['menu']) || isset($_GET['menu'])){
    $sql = "SELECT * FROM menu";
    $result = $instance->query2($sql);
   //$misDatos = $result->fetch_assoc();
    $numeroColumns = $result->num_rows;
    //echo $numeroColumns;
    
    $myArray = array();
    
    while($misDatos = $result->fetch_assoc()){
        $myArray[] = $misDatos;
    }?>
    
    
    
    <?php
    
    echo json_encode($myArray);
}

$result = $instance->query($sql); // Método que me hace la consulta  


if($control)
    echo json_encode( $result );

?>