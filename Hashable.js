'use strict';


//Abstract class
class Hashable {

	constructor() {
		if (this.constructor === Hashable)
			throw new Error("Can not create an abstract class");
	}

	hashVal() {
		throw new Error("Missing hashVal method in concrete class.");
	}

	equals(x) {
		throw new Error("Missing equals method in concrete class.");
	}

	getValue() {
		throw new Error("Missing value method in concrete class.");
	}
}

module.exports = Hashable;