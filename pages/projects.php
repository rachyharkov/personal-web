<div class="container-gallery">
<?php 

	include '../api/conn.php';

	$sql = 'SELECT * 
			FROM tbl_projects ORDER BY id asc';
			
	$query = mysqli_query($conn, $sql);

	if (!$query) {
		die ('SQL Error: ' . mysqli_error($conn));
	}

	$q = mysqli_fetch_all($query);
	foreach ($q as $value) {
		?>
		<div class="wrapper">
			<div class="image-wrapper">
				<img data-src="<?php echo $value[2] ?>" class="lazyload">
			</div>
			<div class="caption">
				<p><a class="link-href" type="project" image="<?php echo $value[2] ?>" page="project<?php echo $value[0] ?>" id="<?php echo $value[0] ?>" href="project?id=<?php echo $value[0] ?>"><?php echo $value[1] ?></a></p>
			</div>
		</div>
		<?php
	}

?>

</div>