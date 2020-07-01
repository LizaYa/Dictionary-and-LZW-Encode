     // CLASS: StringHash
     //
     // Author: Yelizaveta Yashin
     //
	 // REMARKS: Hashable object that stores a string.
     //          This is a subclass of Hashable.
     //
     //-----------------------------------------

'use strict';

let Hashable = require('./Hashable');
let LinkedList = require('./LinkedList');

class StringHash extends Hashable {
	#stringVal;
	#hashValue;


     //------------------------------------------------------
     // constructor
     //
     // PURPOSE: calls super since it is a subclass of a abstract
     //          class. Store the string in a private field called
     //          stringVal.
     // PARAMETERS:
     //     value - the string.
     //------------------------------------------------------
	constructor(value) {
		super();
		this.#stringVal = value;
		this.#hashValue = 0;
	}



     //------------------------------------------------------
     // hashVal
     //
     // PURPOSE: implement a abstract method from the superclass.
     //          the hashVal is as the expression on the assignment instruction.
     //------------------------------------------------------
	get hashVal() {
		let p = 11;		//prime number 11
		let n = this.#stringVal.length;

		for (let i = 0; i < n; i++) {
			this.#hashValue += (this.#stringVal.charCodeAt(i) * Math.pow(p, (n - i - 1)));
		}
		return this.#hashValue;
	}


	 //------------------------------------------------------
     // getValue
     //
     // PURPOSE: returns the string
     //------------------------------------------------------
	get getValue() {
		return this.#stringVal;
	}


     //------------------------------------------------------
     // equals
     //
     // PURPOSE: compare the current StringHash object to the
     //          LinkedList that is passed.
     // PARAMETERS:
     //     x - Linked List to compare
     // RETURNS: return the first occurence that found equals to x.
     //          If not found,it will return null.
     //------------------------------------------------------
     equals(x) {
		if (x instanceof LinkedList) {
			return x.search(this.#stringVal);
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
			return x.delete(this.#stringVal);
		}
	}
}

module.exports = StringHash;