
function fungsiKu()
{
  let user = document.getElementById("tbnamauser").value;
  
  alert("Recorded!");
  document.getElementById("manipulatedtext").innerText = "Terima kasih " + user + "!, kami akan menghubungi anda berdasarkan apa yang anda input, semoga harimu menyenangkan!";
  
  document.getElementById("tbnamauser").value = "";
  document.getElementById("tbnotelp").value = "";
}

