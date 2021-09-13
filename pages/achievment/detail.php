<div>
<?php 

	include '../../api/conn.php';

	$id = $_POST['id'];

	$sql = 'SELECT * FROM tbl_achievment WHERE id = "'.$id.'"';

	$query = mysqli_query($conn, $sql);

	if (!$query) {
		die ('SQL Error: ' . mysqli_error($conn));
	}

	$q = mysqli_fetch_all($query);
	foreach ($q as $value) {
		?>
		<h4><?php echo $value[3];?></h4>
		<div style="height: 240px;width: 100%; margin: 16px 0; position: relative;">
			<img data-src="<?php echo $value[1] ?>" alt="<?php echo $value[2]?>" class="lazyload" style="height: 240px;
				width: 100%;
				object-fit: cover;
				margin: 16px 0;
				display: block;">
				<a href="<?php echo $value[5] ?>" target="_blank" rel="noopener noreferrer" style="position: absolute;
top: 13px;
background: #5b5b5b82;
padding: 10px;
border-radius: 5px;
right: 13px;
color: white;"><i class="fas fa-download"></i></a>
		</div>

		<p><?php echo $value[4];?></p>
		<?php
	}

?>

</div>