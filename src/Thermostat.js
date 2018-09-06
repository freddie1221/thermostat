function Thermostat(temp = 20) {
  this.temperature = temp;
  this.minimumTemperature = 10;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function() {
  if(this.powerSaving && this.temperature >= 25) {
    return 'canot raise' 
  } else if (this.powerSaving === false && this.temperature >= 32) {
      return 'cannot raise'
  } else {
    this.temperature ++;
  }
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > this.minimumTemperature) {
    this.temperature --;
  }
};

Thermostat.prototype.resetTemperature = function(temp = 20) {
  this.temperature = temp;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving ? this.powerSaving = false : this.powerSaving = true;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature > 25) {
    return 'high-usage'
  } else {
    return 'medium-usage'
  }
};

