<?php
class DatabaseAdaptor {

	private $DB;

	public function __construct() {
		$db = 'mysql:dbname=risk;host=127.0.0.1';'charset=utf8';
		$user = 'root';
		$password = '';

		try {
			$this->DB = new PDO ( $db, $user, $password );
			$this->DB->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		} catch ( PDOException $e ) {
			echo ('Error establishing Connection');
			exit ();
		}
	}
	
	public function getAllCounties () {
		$stmt = $this->DB->prepare ( "SELECT county FROM counties;");
		$stmt->execute ();
		return $stmt->fetchAll ( PDO::FETCH_ASSOC );
	}
	
	public function getAttackPaths ($county) {
		$stmt = $this->DB->prepare("SELECT counties.county 
				FROM counties 
				INNER JOIN attack_paths 
				WHERE attack_paths.county="+$county+ 
				"AND counties.id=attack_paths.id");
		$stmt->execute ();
		return $stmt->fetchAll ( PDO::FETCH_ASSOC );
	}
	
	
}//end class DatabaseAdaptor

$theDBA = new DatabaseAdaptor ();
//$arr = $theDBA->getAllCounties ();
//print_r($arr);
?>