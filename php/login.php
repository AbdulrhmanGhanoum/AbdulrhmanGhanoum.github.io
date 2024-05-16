<?php
$OniChanName = $_POST['name'] ?? '';
$OniChanPassword = $_POST['password'] ?? '';
$dname = "G231210571@sakarya.edu.tr";
$dpassword = "G231210571";

if ($OniChanName === $dname && $OniChanPassword === $dpassword) {
    $Message = "g231210571, Welcome usta";
    echo "<script type = 'text/javascript'> alert('$Message');</script>";
    echo "<script type='text/javascript'>setTimeout(function(){ window.location.href = 'https://abdulrhmanghanoum.github.io/'; }, 500);</script>";
    exit; 
} else {
    $FailMessage = "Lütfen email ve password kontrol edin.";
    echo "<script type = 'text/javascript'> alert('$FailMessage');</script>";
    echo "<script type='text/javascript'>setTimeout(function(){ window.location.href = 'https://abdulrhmanghanoum.github.io/login%20page.html'; }, 500);</script>";
    exit;
}
?>
