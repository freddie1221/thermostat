// do we need to do something to link src/thermostat.js with this file?
// And do we need to link index.html to this?



$(document).ready(function() { 

  var thermostat = new Thermostat();

  updateTemperature();
  updateEnergyUsageColor();

  $('#minus').click(function() {
    thermostat.decrease();
    updateTemperature();
    updateEnergyUsageColor();
  });

  $('#plus').click(function() {
    thermostat.increase();
    updateTemperature();
    updateEnergyUsageColor();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    updateEnergyUsageColor();
  });

  $('#powerSave').click(function() {
    thermostat.powerSavingSwitch();
  });

  function updateEnergyUsageColor() {
    if (thermostat.energyUsage() === 'low-usage') {
      $('#energy').css('background-color', 'green');    
    } else if (thermostat.energyUsage() === 'medium-usage') {
      $('#energy').css('background-color', 'black');
    } else {
      $('#energy').css('background-color', 'red');
    }
  }
  
  function updateTemperature() {
    $('#temp').text(thermostat.temperature);
  };


});