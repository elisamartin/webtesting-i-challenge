module.exports = {
	succeed,
	fail,
	repair,
	get
};

// a success(item) method that accepts an item object and returns a new item object modified according to the rules
//defined by the client for enhancement success.
function succeed(item) {
	if (typeof item.name !== 'string' || typeof item.durability !== 'number' || typeof item.enhancement !== 'number') {
		throw new Error('Information is not correct');
	}
	if (item.enhancement === 20) {
		throw new Error('Enhancement is at maximum level');
	}

	let newItem = item;
	newItem.enhancement++;
	return newItem;
}

// a fail(item) method that accepts an item object and returns a new item object modified according to the rules
//defined by the client for enhancement failure.
function fail(item) {
	if (typeof item.name !== 'string' || typeof item.durability !== 'number' || typeof item.enhancement !== 'number') {
		throw new Error('Information is not correct');
	}

	let newItem = item;

	if (newItem.enhancement < 15) {
		newItem.durability -= 5;
	} else {
		newItem.durability -= 10;
		if (newItem.durability < 0) newItem.durability = 0;
		if (newItem.enhancement > 16) {
			newItem.enhancement--;
		}
	}
	return newItem;
}

// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
//This method is the simplest of the three and would be a good starting point on this project.
function repair(item) {
	if (typeof item.name !== 'string' || typeof item.durability !== 'number' || typeof item.enhancement !== 'number') {
		throw new Error('Information is not correct');
	}

	let newItem = item;
	newItem.durability = 100;
	return newItem;
}

// a get() method for use when working on the stretch problem.
function get(item) {
	return { ...item };
}
