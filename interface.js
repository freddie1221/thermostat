// do we need to do something to link src/thermostat.js with this file? - no
// And do we need to link index.html to this? - yes



$(document).ready(function() { 

  var thermostat = new Thermostat();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
  var liveTemp = data.main.temp });


  updateTemperature();
  updateEnergyUsageIndicator();
  updateLiveTemp();

  $('#minus').click(function() {
    thermostat.decrease();
    updateTemperature();
    updateEnergyUsageIndicator();
  });

  $('#plus').click(function() {
    thermostat.increase();
    updateTemperature();
    updateEnergyUsageIndicator();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    updateEnergyUsageIndicator();
  });

  $('#powerSave').click(function() {
    thermostat.powerSavingSwitch();
  });

  function updateEnergyUsageIndicator() {
    $('#energy').attr('class', thermostat.energyUsage());
    // $('#energy').text(thermostat.energyUsage())
  };
  
  function updateTemperature() {
    $('#temp').text(thermostat.temperature);
  };

  function updateLiveTemp() {
    $('#liveTemp').text(liveTemp);
  }

  

})