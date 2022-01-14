// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    Imports
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                      Hooks
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Extender Class
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Hooks.once('dragRuler.ready', (SpeedProvider) => {
  class A5ESpeedProvider extends SpeedProvider {
    get colors ( ) {
      return [
        {id: "Walk", default: 0x3222C7},
        {id: "ActionDash", default: 0xFFEC07},
        {id: "BonusDash", default: 0xC033E0},

      ];
    }

    getRanges ( token ) {
      const movement = token.actor.data.data.attributes.movement;
      const baseSpeed = Math.max(...Object.values(movement));
      console.log(baseSpeed);
      return [];
    }
  }

  // Register SpeedProvider
  dragRuler.registerModule('a5edragruler', A5ESpeedProvider);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Helper Functions
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++