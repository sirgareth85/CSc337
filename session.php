<?php
class useraccount {
	private $username;
	
	public function __construct() {
		$this->username = '';
	}
	public function getusername() {
		return $this->username;
	}
	public function setusername($str) {
		$this->username = $str;
	}
}