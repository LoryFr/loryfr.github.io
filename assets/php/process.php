<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $messaggio = $_POST["messaggio"];

    // Indirizzo email a cui inviare la notifica
    $destinatario = "teamminimuuu@gmail.com";

    // Oggetto dell'email
    $oggetto = "Messaggio dal form di contatto";

    // Costruzione del messaggio
    $messaggio_email = "Nome: $nome\n";
    $messaggio_email .= "Email: $email\n";
    $messaggio_email .= "Messaggio:\n$messaggio";

    // Intestazioni per l'email
    $intestazioni = "From: $email";

    // Invia l'email
    if (mail($destinatario, $oggetto, $messaggio_email, $intestazioni)) {
        echo "Thanks for Reaching to Us!";
    } else {
        echo "Try Later, We're Busy";
    }
} else {
    echo "Not Valid";
}
?>