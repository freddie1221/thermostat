// do we need to do something to link src/thermostat.js with this file?
// And do we need to link index.html to this?



$(document).ready(function() { 

  var thermostat = new Thermostat();


  updateTemperature();

  $('#minus').click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#plus').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powerSave').click(function() {
    thermostat.powerSavingSwitch();
  });



  function updateTemperature() {
    $('#temp').text(thermostat.temperature);
  };










});