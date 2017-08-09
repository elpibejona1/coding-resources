<?php
		
class globalFunctions {
	public function includeContent($folder,$include) {
		if ($folder == 1) {
			$directory = "../";
		} else if ($folder == 2) {
			$directory = "../../";
		} else if ($folder == 3) {
			$directory = "../../../";
		} else {
			$directory = "";
		}
		include($directory."_includes/".$include.".php");
	}
}

$globalFunction = new globalFunctions;

?>