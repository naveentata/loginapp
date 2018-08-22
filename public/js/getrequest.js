$( document ).ready(function() {
	
	// GET REQUEST
	$("#allImages").click(function(event){
		event.preventDefault();
        console.log("Hello")
        ajaxGet();
        
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
            type : "GET",
            contentType: "image/jpg",
			url : window.location + "/users/getimages",
			success: function(result){
				
				console.log("Success: ", result.getAllResponseHeaders());
			},
			error : function(e) {
				
				console.log("ERROR: ", e);
			}
		});	
	}
})