<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
$email = 'lauri.maasola@gmail.com';
$from = 'lauri.maasola@gmail.com';
$subject = 'mail from www.niinahuovinen.com';
$message = $_POST['message'];

if ($subject == "") {
  echo "<h4>No subject</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
}


error_reporting(E_ALL|E_STRICT);
ini_set('display_errors', 1);
ini_set('sendmail_from', $from);
echo 'I am : ' . `whoami`;
$result = mail($email,$subject,'This is a test.');
echo '<hr>Result was: ' . ( $result === FALSE ? 'FALSE' : 'TRUE') . $result;
echo '<hr>';
echo phpinfo();


/* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */
//elseif (mail($email,$subject,$message)) {
//  echo "<h4>Thank you for sending email</h4>";
//} else {
//  echo "<h4>Can't send email to $email</h4> ,$email ,$subject, $message";
//}
?>
</body>
</html>