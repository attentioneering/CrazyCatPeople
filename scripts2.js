const myCats={};

myCats.init = ()=>{ 
	$('form').on('submit', function(event){
		event.preventDefault();
		const userName=$('input[Name]').val().toUpperCase();
		console.log(userName);
		const userLocation=$('#Location').val();
		console.log(userLocation);

const getCats = {
  async: true,
  crossDomain: true,
  url: "https://api.thecatapi.com/v1/images/search",
  method: "GET",
  headers: {
    "x-api-key": '32310f76-85c4-4b24-adb9-ff5829538ff5'
  },
   data: {
            limit: 12,
            image: { url: ""}
        },
   success: function(result){
   	console.log(result);
   },
   error: function(error){
   	console.log(${error})};
   }
};

$.ajax(getCats).done(function (response) {
  console.log(response);
  	});
});
}


	 // myCats.getRandomCats= function(data){
	 	//for (var i = 2; i <= lastFmApp.totalPages; i++) 
	 //  	   $.ajax({ 
	 //        url:"https://api.thecatapi.com/v1/images/search",
	 //        method: 'GET',
	 //        dataType: 'json',
	 //        headers: {
	 //        	'x-api-key': '32310f76-85c4-4b24-adb9-ff5829538ff5'
	 //        },
	 //        data: {
	 //            limit: 12,
	 //            image: { url: ""}
	 //        }
	 //    });//.then(function(data){
	 //     console.log(data.url);
	 //  };
	 // };
// });
// }

// $(function(){
// 	myCats.init();
// 	  //code to kick off app goes here
// });