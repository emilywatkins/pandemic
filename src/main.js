import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { City } from './city.js';
import { Api } from './api.js';
import { pandemic } from './../src/pandemic.js';

$(document).ready(function() {
  // JQUERY PROMISE

  var apiCall = new Api();
  $('#giphy-btn').click(function() {
    apiCall.getData();
  });

  // PANDEMIC
  let outbreak = pandemic;
  outbreak.setInfection(outbreak.nyc);
  outbreak.setInfection(outbreak.lax);
  outbreak.setInfection(outbreak.chi);

  let pandemicArray = [];
  for(var propt in pandemic) {
    pandemicArray.push(pandemic[propt]);
  };

  let newArray = [];
  pandemicArray.forEach(function(item) {
    if (item.hasOwnProperty('uninfected') === true) {
      newArray.push(item);
    }
  });

  console.log("NEW ARRAY: ", newArray);
  console.log("THIS IS YOUR ARRAY: ", pandemicArray);

  $("#nyc-pop").text(outbreak.nyc.population);
  $("#chi-pop").text(outbreak.chi.population);

  setInterval(function(){
    $('#nyc-infect').text(outbreak.nyc.infectionLevel);
    $('#chi-infect').text(outbreak.chi.infectionLevel);
  }, 1000);

  setInterval(function(){
    $('#nyc-percent').text(outbreak.nyc.percent);
    $('#chi-percent').text(outbreak.chi.percent);
  }, 3000);

  $('#nyc-treat').click(function(){
    outbreak.treatment(outbreak.nyc);
  });
  $('#chi-treat').click(function(){
    outbreak.treatment(outbreak.chi);
  });
})
