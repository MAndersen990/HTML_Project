<?php
	include 'store.php';
try {
   
	$sql = "INSERT INTO users_information (user_first_name, user_last_name, user_username, user_email,user_creation_date) VALUES ('$_POST[firstname]','$_POST[lastname]','$_POST[username]','$_POST[email]',NOW())";
	$sql2 = "INSERT INTO user_passwords (password_user_id,password_plain, encrypted_pass, salted_pass) VALUES (LAST_INSERT_ID(),'$_POST[password]', 'sldkfjsldkfjsdlfk','lskdjfwoeijrflsdf')";
    $conn->exec($sql);
	$conn->exec($sql2);
    echo "Account created successfully";
    }
	catch(PDOException $e)
    {
    echo "Username or email already used";
    }
$conn = null;


?>
