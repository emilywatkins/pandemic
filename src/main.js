import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { City } from './city.js';

$(document).ready(function() {

  let portland;
  portland = new City("portland");
  portland.setInfection();

  $("#pdx-pop").text(portland.population);

  setInterval(function(){ $('#pdx-infect').text(portland.infectionLevel); }, 1000);


  $('#pdx-treat').click(function(){

  });
})
