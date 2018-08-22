$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#savejson").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
        var data = send('json');
        ajaxPost(data);
	});
    
    
    function ajaxPost(type){
    	
    	// PREPARE FORM DATA
    	var formData = type
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "/users/postjson",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
                console.log("This is form you did it");
                console.log(formData);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	//resetData();
 
    }
    
    function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
})