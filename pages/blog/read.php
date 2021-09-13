<div>
<?php 

	include '../../api/conn.php';

	$id = $_POST['id'];

	$sql = 'SELECT * FROM tbl_artikel WHERE id_artikel = "'.$id.'"';

	$query = mysqli_query($conn, $sql);

	if (!$query) {
		die ('SQL Error: ' . mysqli_error($conn));
	}

	$q = mysqli_fetch_all($query);
	foreach ($q as $value) {
		?>
		<div style="height: 240px;width: 100%; margin: 16px 0; position: relative;">
			<img data-src="<?php echo $value[6] ?>" alt="gambar pembuka artikel" class="lazyload" style="height: 240px;
				width: 100%;
				object-fit: cover;
				margin: 16px 0;
				display: block;">
		</div>
		<h4><?php echo $value[1];?></h4>
		<ul>
			<li>Oleh : <?php echo $value[2] ?></li>
			<li>Pada <?php echo $value[3] ?></li>
		</ul>
		<p><?php echo $value[5];?></p>
		<?php
	}

?>

</div>