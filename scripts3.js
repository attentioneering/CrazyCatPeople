const myCats={};

myCats.init = ()=>{ 
	$('form').on('submit', function(event){
		event.preventDefault();
		const userName=$('input[Name]').val().toUpperCase();
		console.log(userName);
		const userLocation=$('#Location').val();
		console.log(userLocation);

		const $catArray= $(`#cats`);
		$.ajax({ 
	        url:"https://api.thecatapi.com/v1/images/search",
	        method: 'GET',
	        dataType: 'json',
	        headers: {
	          'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
	        },
	        data: {
	            limit: 12,
	            image: { url: ""}
	        },
	       //  success: function(cats){
	       //  	$.each(cats, function(i,cat){
	       //  		$catArray.append(`<div>cat here</div>`);
	    			// //return(value.url);
	       //  	});
	       //  },
	    }).then(function(data){
	    	const catURL= data.map((value)=>{return(value.url)}.append(`<div>cat here</div>`));
	    	});
	        }, function(error){
	    		console.log(`Error:${error}`);
	});
	   // console.log(this.catURL);
	};
	


$(document).ready(function(){
	myCats.init();
});