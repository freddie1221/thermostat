describe('Thermostat', function() {
  let thermostat;
  
  beforeEach(function() {
      thermostat = new Thermostat();
  })
    
  describe('#temperature', function() {
    it('returns the start temperature', function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });
    
  describe('#powerSaving', function() {
    it('is on by default', function() {
      expect(thermostat.powerSaving).toEqual(true);
    });
    describe('powerSaving is on', function() {
      it('maximum temperature is 25 degrees', function() {
        while (thermostat.temperature < 25) {
          thermostat.increase();
        }
        thermostat.increase()
        expect(thermostat.temperature).toEqual(25)
        expect(thermostat.powerSaving).toEqual(true);
      })
    })
    describe('powerSaving is off', function() {
      it('maximum temperature is 32 degrees', function() {
        thermostat.powerSavingSwitch()
        while (thermostat.temperature < 32) {
          thermostat.increase();
        }
        thermostat.increase()
        expect(thermostat.temperature).toEqual(32)
        expect(thermostat.powerSaving).toEqual(false);
      })
    })
  });
    
  describe('#powerSavingSwitch', function() {
    it('changes powerSaving mode from on to off', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual(false);
    });
  });

  describe('#increase', function() {
    it('increases the temperature', function() {
        thermostat.increase();
        expect(thermostat.temperature).toEqual(21)
    });
  });
  
  describe('#decrease', function() {
    it('dereases the temperature', function() {
        thermostat.decrease();
        expect(thermostat.temperature).toEqual(19)
    });
    it('won\'t decrease temperature below the minimum', function() {
      while (thermostat.temperature > 10) {
        thermostat.decrease();
    }
      thermostat.decrease()
      thermostat.decrease()
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('#resetTemperature', function() {
    it('resets the temperature', function() {
      thermostat.increase();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });


  describe('#energyUsage', function() {
    it('indicates medium-usage for 20 degrees', function() {
      thermostat.resetTemperature(20);
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('indicates low-usage for 17 degrees', function() {
      thermostat.resetTemperature(17);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('indicates high-usage for 28 degrees', function() {
      thermostat.resetTemperature(28);
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });
  

});