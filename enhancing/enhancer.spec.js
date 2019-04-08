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

		expect(() =>
			enhancer.repair({
				name: 'Iron Sword',
				durability: 100,
				enhancement: '20'
			})
		).toThrow();
	});
});

describe('succeed function', () => {
	it('Should increas enhancement +1', () => {
		expect(
			enhancer.succeed({
				name: 'Iron Sword',
				durability: 50,
				enhancement: 0
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 50,
			enhancement: 1
		});
	});

	it('When enhancement is at maximum level', () => {
		expect(() =>
			enhancer.succeed({
				name: 'Iron Sword',
				durability: 50,
				enhancement: 20
			})
		).toThrow();
	});

	it('Error if information is not correct', () => {
		expect(() =>
			enhancer.succeed({
				name: 'Iron Sword',
				durability: '100',
				enhancement: 20
			})
		).toThrow();

		expect(() =>
			enhancer.succeed({
				name: 2,
				durability: 100,
				enhancement: 20
			})
		).toThrow();

		expect(() =>
			enhancer.succeed({
				name: 'Iron Sword',
				durability: 100,
				enhancement: '20'
			})
		).toThrow();
	});
});
