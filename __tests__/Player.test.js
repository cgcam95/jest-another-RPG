const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Camil');

    expect(player.name).toBe('Camil');
    expect(player.health).toEqual(expect.any(Number));
    expect (player.strength).toEqual(expect.any(Number));
    expect (player.agility).toEqual(expect.any(Number));
});