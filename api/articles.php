<?php 

header("Content-Type:application/json");
include 'conn.php';

$sql = 'SELECT * 
		FROM tbl_artikel ORDER BY id_artikel desc';
		
$query = mysqli_query($conn, $sql);

if (!$query) {
	die ('SQL Error: ' . mysqli_error($conn));
}

$q = mysqli_fetch_array($query);

$response["status"] = "true";
$response["message"] = "Customer Details";
$response["articles"] = $q;

echo json_encode($response);exit;

?>