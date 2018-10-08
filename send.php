<?php

if(isset($_POST['submit'])){
$to = "nipanasovich@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$subject = "Form of sending message";
$subject2 = "Copy of your form submission";
$message = $from . "Send a message:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Thanks for your message! Please wait for my answer";
echo "<br /><br /><a href='https://jintsuu.github.io'>Back to portfolio</a>";

}

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://jintsuu.github.io");}
window.setTimeout("changeurl();",3000);
</script>