<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);

    $para = "dev.iagocunha@gmail.com";
    $assunto = "Contato pelo Site";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"." - Telefone: ".$telefone."\n"." - Mensagem: ".$mensagem;

    $cabeca = "From: contatosite.iago@gmail.com"."\n"."Reply-To: ".$email."\n"."X=Mailer: PHP/".phpversion();

    if(mail($para, $assunto, $corpo, $cabeca)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Ocorreu um erro ao enviar o email!");
    }
?>