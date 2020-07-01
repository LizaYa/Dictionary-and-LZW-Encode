     // CLASS: IntHash
     //
     // Author: Yelizaveta Yashin
     //
	 // REMARKS: Hashable object that stores an integer. The 
	 //			 hashVal is the integer itself.
     //          This is a subclass of Hashable.
     //
     //-----------------------------------------

'use strict';

let Hashable = require('./Hashable');
let LinkedList = require('./LinkedList');

class IntHash extends Hashable {
	#hashValue;


	 //------------------------------------------------------
     // constructor
     //
     // PURPOSE: calls super since it is a subclass of a abstract
     //          class, and hash function is the value of the integer.
     //          Hence,the value of the integer is stored in hashValue field.
     // PARAMETERS:
     //     value - the value of the integer.
     //------------------------------------------------------
	constructor(value) {
		super();
		this.#hashValue = value;
	}


     //------------------------------------------------------
     // hashVal
     //
     // PURPOSE: implement a abstract method from the superclass.
     //          the hashVal is the value of the integer.
     //------------------------------------------------------
	get hashVal() {
		return this.#hashValue;
	}


	 //------------------------------------------------------
     // getValue
     //
     // PURPOSE: retuns the value of the integer
     //------------------------------------------------------
	get getValue() {
		return this.#hashValue;
	}


	 //------------------------------------------------------
     // equals
     //
     // PURPOSE: compare the current IntHash object to the
     //          LinkedList that is passed.
     // PARAMETERS:
     //     x - Linked List to compare
     // RETURNS: return the first occurence that found equals to x.
     //          If not found,it will return null.
     //------------------------------------------------------
	equals(x) {
		if (x instanceof LinkedList) {
			return x.search(this.#hashValue);
		}
	}


     //------------------------------------------------------
     // delete
     //
     // PURPOSE: remove the current object from list x.
     // PARAMETERS:
     //     x - linked list to remove from
     // RETURNS: boolean value if successful removed.
     //------------------------------------------------------
	delete(x) {
		if (x instanceof LinkedList) {
			return x.delete(this.#hashValue);
		}
	}
}

module.exports = IntHash;