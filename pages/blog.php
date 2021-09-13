<div class="container-blog">
<?php 

	include '../api/conn.php';

	$sql = 'SELECT * 
			FROM tbl_artikel ORDER BY tanggal_artikel desc';
			
	$query = mysqli_query($conn, $sql);

	if (!$query) {
		die ('SQL Error: ' . mysqli_error($conn));
	}

	$q = mysqli_fetch_all($query);
	foreach ($q as $value) {
		?>
		<div class="wrapper">
			<div class="image-wrapper">
				<img data-src="<?php echo $value[6] ?>" class="lazyload">
			</div>
			<div class="caption">
				<a class="link-href" type="blog" id="<?php echo $value[0] ?>" href="blog?id=<?php echo $value[0] ?>">
					<h3><?php echo $value[1] ?></h3>
					<p><?php echo $value[2].'|'.$value[3] ?></p>
					<p>Baca Selengkapnya...</p>
				</a>
			</div>
		</div>
		<?php
	}

?>

</div>