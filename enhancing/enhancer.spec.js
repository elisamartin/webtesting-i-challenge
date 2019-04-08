const enhancer = require('./enhancer.js');
// test away!

describe('repair function', () => {
	it('Should restores durability to 100', () => {
		expect(
			enhancer.repair({
				name: 'Iron Sword',
				durability: 50,
				enhancement: 20
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 100,
			enhancement: 20
		});
	});

	it('Error if information is not correct', () => {
		expect(() =>
			enhancer.repair({
				name: 'Iron Sword',
				durability: 'one hundred',
				enhancement: 20
			})
		).toThrow();

		expect(() =>
			enhancer.repair({
				name: 2,
				durability: 100,
				enhancement: 20
			})
		).toThrow();
	});
});
