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

describe('fail function', () => {
	it('Decrease durability by 5 if enhancement < 15', () => {
		expect(
			enhancer.fail({
				name: 'Iron Sword',
				durability: 95,
				enhancement: 0
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 90,
			enhancement: 0
		});

		expect(
			enhancer.fail({
				name: 'Iron Sword',
				durability: 70,
				enhancement: 4
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 65,
			enhancement: 4
		});
	});

	it('Decrease durability by 10 if enhancement > 15', () => {
		expect(
			enhancer.fail({
				name: 'Iron Sword',
				durability: 100,
				enhancement: 15
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 90,
			enhancement: 15
		});
	});

	it('Decrease enhancement by 1 if enhancement > 16', () => {
		expect(
			enhancer.fail({
				name: 'Iron Sword',
				durability: 100,
				enhancement: 17
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 90,
			enhancement: 16
		});

		expect(
			enhancer.fail({
				name: 'Iron Sword',
				durability: 100,
				enhancement: 19
			})
		).toEqual({
			name: 'Iron Sword',
			durability: 90,
			enhancement: 18
		});
	});

	it('Error if information is not correct', () => {
		expect(() =>
			enhancer.fail({
				name: 'Iron Sword',
				durability: '100',
				enhancement: 20
			})
		).toThrow();

		expect(() =>
			enhancer.fail({
				name: 2,
				durability: 100,
				enhancement: 20
			})
		).toThrow();

		expect(() =>
			enhancer.fail({
				name: 'Iron Sword',
				durability: 100,
				enhancement: '20'
			})
		).toThrow();
	});
});
