<?php
//Recuperiamo tutte le variabili
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$question = $_POST['question'];	
	$ip = $_SERVER['REMOTE_ADDR'];
	
//Qui andrà inserito il tuo indirizzo e-mail
$to = "alessandra.mineo@tiscali.it";

//Creazione del mesaggio da inviare
$message = "Hai ricevuto una e-mail da: ".$name." <br/> la sua e-mail: ".$mail."<br /><br />";
$message .= "Argomento del contatto: ".$subject."<br /><br />";
$message .= "Richiesta: ".$question."<br /><br />";
$message .= "IP: ".$ip."<br />";
$headers = "From: $mail \n";
$headers .= "Reply-To: $mail \n";
$headers .= "MIME-Version: 1.0 \n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1 \n";

//Se l'e-mail viene spedita correttamente, compare un messaggio di avvenuto invio
 if(mail($to, $subject, $message, $headers)){
	echo "<p>Message successful sent</p>";
}
//Altrimenti un messaggio di errore
else{ 
	echo "<p>There were problems sending your message...</p>";
}
?>