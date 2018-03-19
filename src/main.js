import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { City } from './city.js';

$(document).ready(function() {
// API JQUERY
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dda387c46c07145b7f41c73512df5121`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });

  // GIPHY

  $('#giphy-btn').click(function() {
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=galaxy&api_key=ZUoHIYuPaDgbDXM69WWSG48h0OVYrCR1&limit=5`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        var reply = response.data[2].images.original.url;
        console.log("Here is your reply", reply);
        document.getElementById("gif").innerHTML = '<img class="card-img-top"  src="' + reply + '">';

        // $('.giphy-span2').append('<img class="card-img-top"  src="' + reply + '">');
      }
    });
  });

  // PANDEMIC
  let portland;
  portland = new City("portland");
  portland.setInfection();

  $("#pdx-pop").text(portland.population);

  setInterval(function(){ $('#pdx-infect').text(portland.infectionLevel); }, 1000);


  $('#pdx-treat').click(function(){ //do this after lunch
    portland.treat(5);
  });
})
