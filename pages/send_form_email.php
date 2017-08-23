<?php 
// EDIT THE 2 LINES BELOW AS REQUIRED
$send_email_to = "admin@#";
$email_subject = "Your email subject line";
function send_email($firstName,$lastName,$emailAddress,$company,$message)
{
  global $send_email_to;
  global $email_subject;
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
  $headers .= "From: ".$emailAddress. "\r\n";
  $message = "<strong>Email = </strong>".$emailAddress."<br>";
  $message .= "<strong>First Name = </strong>".$firstName."<br>";  
  $message .= "<strong>Last Name = </strong>".$lastName."<br>";  
  $message .= "<strong>Company = </strong>".$company."<br>";  
  $message .= "<strong>Message = </strong>".$message."<br>";
  @mail($send_email_to, $email_subject, $message,$headers);
  return true;
}

function validate($firstName,$lastName,$emailAddress,$company,$message)
{
  $return_array = array();
  $return_array['success'] = '1';
  $return_array['name_msg'] = '';
  $return_array['email_msg'] = '';
  $return_array['message_msg'] = '';
  if($emailAddress == '')
  {
    $return_array['success'] = '0';
    $return_array['email_msg'] = 'email is required';
  }
  else
  {
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$emailAddress)) {
      $return_array['success'] = '0';
      $return_array['email_msg'] = 'enter valid email.';  
    }
  }
  if($firstName == '')
  {
    $return_array['success'] = '0';
    $return_array['name_msg'] = 'name is required';
  }
  else
  {
    $string_exp = "/^[A-Za-z .'-]+$/";
    if (!preg_match($string_exp, $firstName)) {
      $return_array['success'] = '0';
      $return_array['name_msg'] = 'enter valid name.';
    }
  }
		
  if($message == '')
  {
    $return_array['success'] = '0';
    $return_array['message_msg'] = 'message is required';
  }
  else
  {
    if (strlen($message) < 2) {
      $return_array['success'] = '0';
      $return_array['message_msg'] = 'enter valid message.';
    }
  }
  return $return_array;
}

$firstName = $_POST['txtFirstName'];
$lastName = $_POST['txtLastName'];
$emailAddress = $_POST['txtEmailAddress'];
$company =  $_POST['txtCompany'];
$message = $_POST['txtMessage'];


$return_array = validate($firstName,$lastName,$emailAddress,$company,$message);

if($return_array['success'] == '1')
{
	send_email($firstName,$lastName,$emailAddress,$company,$message);
}
header('Content-type: text/json');
echo json_encode($return_array);
die();
?>

