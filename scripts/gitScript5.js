/** Script ACLs do not delete 
 read=all 
write=all
execute=all 
  **/ 
 
	
  
/**
The code below will:
create a variable
will check if the status is null
and it will do nothing
*/
	  var status = request.parameters["status"];
	  //This is an if statement
	  if(status == null || status == ""){
		  status = "200";
	  }

	  //This is the last comment
return "testing the commented out content2";


