// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    Imports
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Extender Class
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Hooks.once('dragRuler.ready', (SpeedProvider) => {
  class A5ESpeedProvider extends SpeedProvider {
    get colors ( ) {
      return [
        {id: "Walk", default: 0x99c140},
        {id: "ActionDash", default: 0xe7b416},
        {id: "BonusDash", default: 0xf77926},
      ];
    }

    getRanges ( token ) {
      const movement = token.actor.data.data.attributes.movement;
      const baseSpeed = Math.max(...Object.values(movement));

      const ranges = [
        {range: baseSpeed, color: 'Walk'},
        {range: baseSpeed * 2, color: 'ActionDash'},
        {range: baseSpeed * 3, color: 'BonusDash'}
      ];

      return ranges;
    }
  }

  // Register SpeedProvider
  dragRuler.registerModule('a5edragruler', A5ESpeedProvider);
});
