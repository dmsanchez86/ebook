<?php 

/* 
 *  Clase conexion con MySqli
 *
 */

class conexion
{
	private $_db;
	private $_host;
	private $_user;
	private $_pwd;
	private $_mysqli;
	
	public function __construct($_host,$_user,$_pwd,$_db)
	{
		$this->_db = $_db; 
		$this->_host = $_host; 
		$this->_user = $_user; 
		$this->_pwd = $_pwd; 
		
		$this->conectar();
	}

    /* GETTERS */
	public function get_db(){
		return $this->_db;
	}

	public function get_host(){
		return $this->_host;
	}

	public function get_user(){
		return $this->_user;
	}

	public function get_pwd(){
		return $this->_pwd;
	}
	
    /* SETTERS */
	public function set_db($_db){
		$this->_db = $_db; 
	}
	public function set_host($_host){
		$this->_host = $_host; 
	}

	public function set_user($_user){
		$this->_user = $_user; 
	}

	public function set_pwd($_pwd){
		$this->_pwd = $_pwd; 
	}

    /* Método que me hace las consultas, retorna el objeto */
	public function query($sql){
		$query = $this->_mysqli->query($sql);
		
		return $query->fetch_assoc(); //0,1,2,3
	}
	
	public function query2($sql){
		$query = $this->_mysqli->query($sql);
		
		return $query; //0,1,2,3
	}

	public function conectar(){
		$this->_mysqli = new mysqli($this->get_host(),$this->get_user() , $this->get_pwd(), $this->get_db());

		if($this->_mysqli->connect_error)
			die ("error en la base de datos");
	}
	
}


?>
