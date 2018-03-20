import $ from 'jquery';

export class Api {

  getData() {
    const key = process.env.GIPHY_API_KEY;
    $.get(`http://api.giphy.com/v1/gifs/search?q=pandemic&api_key=${key}&limit=5`).then(function(response) {
      var reply = response.data[3].images.original.url;
      $('#giphy-span2').html('<img class="card-img-top"  src="' + reply + '">');
    }).fail(function(error) {
      alert("You failed. You are a failure. You failed.")
    });
  }
}

// API JQUERY - before incorporating get and then.


  // GIPHY
  // $('#giphy-btn').click(function() {
  //   const key = process.env.GIPHY_API_KEY;
  //   $.ajax({
  //     url: `http://api.giphy.com/v1/gifs/search?q=los_angeles&api_key=${key}&limit=5`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function(response) {
  //       var reply = response.data[1].images.original.url;
  //       console.log("Here is your reply", reply);
  //       $('#giphy-span2').html('<img class="card-img-top"  src="' + reply + '">');
  //     }
  //   });
  // });
