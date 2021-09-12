//Lakukan register SERVICE-WORKER
if("serviceWorker" in navigator)
{
	window.addEventListener("load",function()
	{
		navigator.serviceWorker
		.register('sw.js')
		.then(function()
		{
			console.log("Service Worker Berhasil di Inisialisasi! (SW_INITIALIZE_SUCCESS)");
		})
		.catch(function()
		{
			console.log("Service Worker gagal di Inisialisasi (FAILED_TO_INITIALIZE)");
		});
	});
}
else
{
	console.log("Service Worker belum didukung pada browser ini (SW_NOT_SUPPORTED_IN_TB)");
}