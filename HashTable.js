     // CLASS: HashTable
     //
     //
     // Author: Yelizaveta Yashin
     //
     // REMARKS: Implements a HashTable class with
	 //		     add, get, contains, remove and isEmpty
	 //			 operations. This hash table uses separate 
	 //			 chaining and can store Hashable objects.
     //
     //-----------------------------------------
'use strict';

let Hashable = require('./Hashable');
let LinkedList = require('./LinkedList');

class HashTable {
	#size;
	#array;

	 //------------------------------------------------------
     // constructor
     //
     // PURPOSE: passed a size and creates an array of that 
	 //			 that size. Fills the array with Linked List
	 //			 objects.
     // PARAMETERS:
     //     size - size of the hash table (array)
     //------------------------------------------------------
	constructor(size) {
		this.#size = size;
		this.#array = new Array(size);
		this.#array.fill(new LinkedList);
	}


     //------------------------------------------------------
     // add
     //
     // PURPOSE: take a Hashable object x and adds it to the 
	 //			 HashTable in the appropriate position.
     // PARAMETERS:
     //     x - Hashable object to add.
     //------------------------------------------------------
	add(x) {
		let position = 0;
		if (x instanceof Hashable) {
			position = x.hashVal % this.#size;
			this.#array[position].insert(x);
		}
	}


	 //------------------------------------------------------
     // get
     //
     // PURPOSE: take a Hashable object x and returns the first
	 //			 occurrence equals to x in the hash table. If the
	 //			 object does not exist, throw an error.
     // PARAMETERS:
     //     x - Hashable object to find.
	 //
	 //	RETURNS: return the first occurence equals to x.
     //------------------------------------------------------
	get(x) {
		let position = 0;
		let result = null;
		if (x instanceof Hashable && !this.isEmpty()) {
			position = x.hashVal % this.#size;
			result = x.equals(this.#array[position]);
		}
		if (result !== null)
			return result;
		else throw new Error("Could not get a value from the HashTable.");
	}


	 //------------------------------------------------------
     // remove
     //
     // PURPOSE: take a Hashable object x and deletes one occurence
	 //			 of an object equal to x in the hash table. If there 
	 //			 are several, then delete any.
     // PARAMETERS:
     //     x - Hashable object to delete.
	 // RETURNS: return boolean value if x was removed.
     //------------------------------------------------------
	remove(x) {
		let position = 0;
		let result = false;
		if (x instanceof Hashable && !this.isEmpty()) {
			position = x.hashVal % this.#size;
			result = x.delete(this.#array[position]);
		}
			return result;
	}


	 //------------------------------------------------------
     // contains
     //
     // PURPOSE: take a Hashable object x and detemines if it is
	//			 in the hash table.
     // PARAMETERS:
     //     x - Hashable object to search.
	 // RETURNS: return boolean value if x was found.
     //------------------------------------------------------
	contains(x) {
		let position = 0;

		if (x instanceof Hashable && !this.isEmpty()) {
			position = x.hashVal % this.#size;
			if (x.equals(this.#array[position]) !== null)
			return true;
		}
		else { return false; }
	}


     //------------------------------------------------------
     // isEmpty
     //
     // PURPOSE: return a boolean value determining whether the 
	 //			 hash table is empty or not.
     //------------------------------------------------------
	isEmpty() {
		let result = false;

		for (let i = 0; i < this.#size && !result; i++) {
			result = this.#array[i].listEmpty();
		}
		return result;
	}
}

module.exports = HashTable;


