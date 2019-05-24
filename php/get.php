<?php
	include 'store.php';

	//$username = $_GET['username'];
	//$password = $_GET['password'];

	$query = "select * from users_information join user_passwords on users_information.user_id = user_passwords.password_user_id where user_username = '$_GET[username]' and password_plain= '$_GET[password]'";

	$statement = $conn->prepare($query);
	$statement->execute();
	$result = $statement->fetch();
	//echo "Query Success";
	

	$db_user_first_name = $result['user_first_name'];

	if ( empty($result) ){
		echo "Sorry, username or password is incorrect. Please try again";
		}else{
			
			echo "1";
			
		}




?>
