import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { City } from './city.js';

$(document).ready(function() {
// API JQUERY
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    const key = process.env.WEATHER_API_KEY;
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
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
    const key = process.env.GIPHY_API_KEY;

    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=los_angeles&api_key=${key}&limit=5`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        var reply = response.data[1].images.original.url;
        console.log("Here is your reply", reply);
        $('#giphy-span2').html('<img class="card-img-top"  src="' + reply + '">');
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
