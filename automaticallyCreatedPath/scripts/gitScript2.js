/** Script ACLs do not delete 
 read=all 
write=all
execute=all 
  **/ 
 
	
         
var obj = new Object();

obj ["apsdb.scriptNamePattern"] = request.parameters.scriptToCommit;
obj ["apsdb.commitMessage"] = "this is a commit message test test";

var result = apsdb.callApi("GitCommit", obj, null);
return result;


