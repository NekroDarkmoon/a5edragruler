
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Extender Class
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Hooks.once('dragRuler.ready', (SpeedProvider) => {
  class A5ESpeedProvider extends SpeedProvider {
    get colors() {
      return [
        { id: "Walk", default: 0x99c140 },
        { id: "ActionDash", default: 0xe7b416 },
        { id: "BonusDash", default: 0xf77926 },
      ];
    }

    getRanges(token) {
      const movementValues = []

      Object.entries(token.actor.system.attributes.movement).forEach(([mode, { distance }]) => {
        if (mode !== "traits") {
          movementValues.push(distance)
        }
      })

      const baseSpeed = Math.max(...movementValues);

      const ranges = [
        { range: baseSpeed, color: 'Walk' },
        { range: baseSpeed * 2, color: 'ActionDash' },
        { range: baseSpeed * 4, color: 'BonusDash' }
      ];

      return ranges;
    }
  }

  // Register SpeedProvider
  dragRuler.registerModule('a5edragruler', A5ESpeedProvider);
});
