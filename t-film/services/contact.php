<?php
	$aResult = array();

	if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
		$aResult['error'] = "Por favor completá todos los campos antes de enviar la consulta.";
		echo json_encode($aResult);
		return;
	}

	include("template.php");
	
	$contact_template = new Template("contact.html");
	
	$contact_template->replace("name", $_POST['name']);
	$contact_template->replace("email", $_POST['email']);
	$contact_template->replace("message", $_POST['message']);
	
	$message_contact = $contact_template->output();
   	

	require('class.phpmailer.php');
	require('class.smtp.php');

	$mail = new PHPMailer();
	$mail->Host = 'mail.tansen.com.ar';
	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->Port = 587; 
	$mail->IsHTML(true); 
	$mail->CharSet = "utf-8";

	$mail->Username = 'info@tansen.com.ar'; 
	$mail->Password = 'G5hcsdW8GkAU';

	$mail->From = 'info@tansen.com.ar';
	$mail->FromName = 'T-Film Landing';
	$mail->AddAddress('ventas@tansen.com.ar');
	$mail->AddReplyTo($_POST['email']);
	$mail->Subject = 'Contacto Landing T-Film';
	$mensajeHtml = nl2br($message_contact);
	$mail->Body = $contact_template->output(); // Texto del email en formato HTML

	$mail->SMTPOptions = array(
	    'ssl' => array(
	        'verify_peer' => false,
	        'verify_peer_name' => false,
	        'allow_self_signed' => true
	    )
	);

	$estadoEnvio = $mail->Send(); 

	if($estadoEnvio){
		$aResult['success'] = "Gracias por tu consulta! Te vamos a responder lo antes posible!";
	}
	else{
		$aResult['error'] = "Ocurrio un error al enviarnos la consulta. Por favor intenta nuevamente o escribinos directamente a: info@tansen.com.ar";
	}
	 
	echo json_encode($aResult);
?>
