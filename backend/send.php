<?php 
session_start();

require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';
require_once 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if(isset($_POST['email']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    if(!empty($email))
    {
                $mail = new PHPMailer(true);
                $mail->CharSet = "UTF-8";

                $mail->isSMTP();                               
                $mail->SMTPDebug = 0;               
                $mail->Host = 'smtp.gmail.com';  
                $mail->SMTPAuth = true;             
                $mail->Username = 'leonardorsihd@gmail.com'; 
                $mail->Password = 'prometeu';     
                $mail->SMTPSecure = 'tls';               
                $mail->Port = 587;                                 

                
                $mail->setFrom('leonardorsihd@gmail.com', 'RETA SISTEMAS');
                $mail->addAddress($email, 'RETA SISTEMAS');  

                $mail->Subject = "🌐 Olá, recebemos o seu email!";
                $mail->msgHTML(
                        "<html>
                        <head>
                            <link href='https://fonts.googleapis.com/css2?family=Segoe UI:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap' rel='stylesheet'>
                            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'>    
                        </head>
                        <body style='background-color: #000368; color: #207FFF; padding: 40px;'>
                        <img src='https://i.ibb.co/Cspyk7S/white-reta.png' width='75px' alt='logo_reta'>
                        <p style='line-height: 27px; font-size: 30px; font-weight: 700; color: #0fcfff; font-family: Segoe UI;'>
                            Estamos com você!<br><span style='font-weight: 400; color: #fff;'> Em breve entraremos em contato.</span>
                        </p> 
                        <br>
                        <span style='color: #fff; font-size: 14px; font-weight: 400; font-family: Segoe UI;'>
                        Olá <strong>{$name}</strong>, nós recebemos o seu email e em 
                        breve a nossa equipe entrará em contato.<br>Caso prefira tambem 
                        pode entrar em contato através do nosso <strong>What's App</strong> clicando no 
                        botão abaixo.</span>
                        <br><br>
                        <button style='background: linear-gradient(to left,#004990, #000066); 
                        border-radius: 30px; color: #fff; font-family:Segoe UI; padding-top: 7px; 
                        padding-bottom: 7px; padding-right: 10px; padding-left: 10px; border: none;'>
                        <a href='https://api.whatsapp.com/send?phone=5531975303739&text=Ol%C3%A1%2C%20estou%20interessado%20em%20um%20dos%20seus%20servi%C3%A7os.' style='text-decoration: none; color: #fff;'>
                        <div style='display: flex; align-items:center; background-color: transparent;'> 
                            <img src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png' style='display: inline;' width='30px'>
                            <span style='color: #fff; font-weight: 400; padding-top: 4px; padding-right: 5px; padding-left: 5px;'>entre em contato</span>
                        </div>
                        </a>
                        </button>
                        <br><br>
                        <hr style='background-color: #eee; color: #eee; width: 50%;'>
                        <br>
                            <div style='text-align: center; font-weight: 400; color: #fff; font-family:Segoe UI;'> 
                                <p>
                                    © Reta Sistemas 2021. Todos os direitos reservados.
                                </p>
                            </div>
                        
                        </body></html>");
                $mail->AltBody = "de:{RETA SISTEMAS - DESENVOLVIMENTO DE SOFTWARES}\nemail:{$email}";

                if ($mail->Send()) {
                        $mail_c = new PHPMailer(true);
                        $mail_c->CharSet = "UTF-8";

                        $mail_c->isSMTP();                               
                        $mail_c->SMTPDebug = 0;               
                        $mail_c->Host = 'smtp.gmail.com';  
                        $mail_c->SMTPAuth = true;             
                        $mail_c->Username = 'leonardorsihd@gmail.com'; 
                        $mail_c->Password = 'prometeu';     
                        $mail_c->SMTPSecure = 'tls';               
                        $mail_c->Port = 587;                                 

                        
                        $mail_c->setFrom('leonardorsihd@gmail.com', 'RETA SISTEMAS');
                        $mail_c->addAddress('leonardorsihd@gmail.com', 'RETA SISTEMAS');  

                        $mail_c->Subject = "🌐 Nova solicitação de contato usuário web!";
                        $mail_c->msgHTML(
                                "<html>
                                <head></head>
                                <body style='background-color: #000368; color: #207FFF; padding: 40px;'>
                                <img src='https://i.ibb.co/Cspyk7S/white-reta.png' width='75px' alt='logo_reta'>
                                <p style='line-height: 27px; font-size: 30px; font-weight: 700; color: #0fcfff; font-family: Segoe UI;'>
                                    Opa!<br><span style='font-weight: 400; color: #fff;'> Nova solicitação de contato usuário web.</span><br>
                                    <small> ${subject} </small>
                                </p> 
                                <div style='background: linear-gradient(to left,#004990, #000066);  width: auto; border-radius: 20px; padding-left: 10px;'>
                                <table style='font-size: 12px; font-family: Segoe UI; color: #fff; '>
                                    <tr style=' font-weight: 700; padding: 10px; border-radius: 20px;'>
                                        <td style='padding: 5px;'> Nome </td><td style='padding: 5px;'> Email </td><td style='padding: 5px;'> Assunto </td><td style='padding: 5px;'> Mensagem </td>
                                    </tr>
                                    <tr style=''><td style='padding: 5px; color: #fff;'>${name}</td><td style='padding: 5px; color: #fff;'>${email}</td><td style='padding: 5px; color: #fff;'>${subject}</td><td style='padding: 5px; color: #fff;'>${message}</td></tr>
                                </table>
                                </div>
                                <hr style= color: #fff; width: 50%;'>
                                <div style='text-align: center; font-weight: 400; color: #fff; font-family:Segoe UI;'> 
                                    <p>
                                        © RETA SISTEMAS 2021. Todos os direitos reservados.
                                    </p>
                                </div>
                                </body></html>");
                        $mail_c->AltBody = "de:{RETA SISTEMAS - DESENVOLVIMENTO DE SOFTWARES}\nemail:{$email}";
                        if($mail_c->Send())
                        {
                            echo 2;
                        }
                        else{
                            echo 1;
                        }
                } else {
                    echo 1;
                }              
    }
}
else 
{
    echo 1;
}
?>