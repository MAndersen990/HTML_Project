$(document).ready(function() {
    
    $("#login_button").click(function () {
        var jsusername = $("#username").val();
        var jspassword = $("#password").val();
        
        if(document.forms["form"]["username"].value !== "" && !/[^a-zA-Z0-9]/.test(jsusername)) {
            
            $.get("php/get.php",
                   {username: jsusername,
                    password: jspassword
                   },
                function(response){
                    if(response == 1){
                       	alert("Login Successfull! You Will now be redirected to the homepage");
						window.location.replace("http://127.0.1.1/Project2/index.html");
					
                    }
                    
                    else {
                        $("#response").html(response);
                    }
            }
                       
            );
       
        }
    
        
       

    });
	
	$("#signup_button").click(function() {
		var jsfirstname = $("#firstname").val();
		var jslastname = $("#lastname").val();
		var jsemail = $("#email").val();
		var jsusername = $("#user").val();
		var jspassword = $("#pass").val();
		$.post("php/post.php",
                   {username: jsusername,
                    password: jspassword,
					email: jsemail,
					firstname: jsfirstname,
					lastname: jslastname
                   },
                function(response){
                    if(response!=null){
						alert("Signup successful");
						window.location.replace("http://127.0.0.1/Project2/login.html");
                    }
                    
                    else {
                        $("#response").html(response);
                    }
            }
                       
            );
	});
    
    
    
    
});
