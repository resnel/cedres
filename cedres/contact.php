<?php
    //let's get all form value
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){// si l'email est valide
            $receiver = "victorpony18@gmail.com"; // recepteur de l'email
            $subjet = "From: $name <$email>";//nom et email du contacteur
            $body = "Name: $name\nEmail:$email\nPhone: $phone\nWebsite: $website\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email"; //l'envoiyeur de l'email
            if(mail($receiver, $subjet, $body, $sender)){
                echo "Your message has been sent";
            }else {
                echo "Sorry, failed to send your message!";
            }
        }
        else {
            echo "Enter a valid email address";
        }
    }else{
        echo "Email and Message required";
    }
?>