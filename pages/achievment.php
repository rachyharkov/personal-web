<div class="container-gallery">
<?php 

	include '../api/conn.php';

	$sql = 'SELECT * 
			FROM tbl_achievment ORDER BY id asc';
			
	$query = mysqli_query($conn, $sql);

	if (!$query) {
		die ('SQL Error: ' . mysqli_error($conn));
	}

	$q = mysqli_fetch_all($query);
	foreach ($q as $value) {
		?>
		<div class="wrapper">
			<div class="image-wrapper">
				<img data-src="<?php echo $value[1] ?>" class="lazyload">
			</div>
			<div class="caption">
				<p><a class="link-href" type="achievment" id="<?php echo $value[0] ?>" href="achievment?id=<?php echo $value[0] ?>"><?php echo $value[3] ?></a></p>
			</div>
		</div>
		<?php
	}

?>

</div>