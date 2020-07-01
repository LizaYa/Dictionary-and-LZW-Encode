     // CLASS: KeyValueHash
     //
     // Author: Yelizaveta Yashin
     //
     // REMARKS: Hashable object that stores two values
     //          a key and a value. The hashVal is the hashVal
     //          of the key. This is a subclass of Hashable
     //
     //-----------------------------------------

'use strict';

let Hashable = require('./Hashable');
let StringHash = require('./StringHash');
let IntHash = require('./IntHash');
let LinkedList = require('./LinkedList');

class KeyValueHash extends Hashable {
    #key;
    #value;
    #hashValue;


     //------------------------------------------------------
     // constructor
     //
     // PURPOSE: calls super since it is a subclass of a abstract
     //          class, and initialize the private variableas long
     //          as key is of type Hashable, otherwise throw an error.
     // PARAMETERS:
     //     key - the key of the KeyValueHash
     //     value - the value that will be store
     //------------------------------------------------------
    constructor(key, value) {
        super();
        if (key instanceof IntHash || key instanceof StringHash || key instanceof KeyValueHash) {
            this.#key = key;
            this.#value = value;
            this.#hashValue = -1;
        }
        else {
            throw new Error("Not a Hashable object.");
        }
    }


     //------------------------------------------------------
     // hashVal
     //
     // PURPOSE: implement a abstract method from the superclass.
     //          the hashVal is the hashVal of key.
     //------------------------------------------------------
    get hashVal() {
        if (this.#key instanceof IntHash || this.#key instanceof StringHash || this.#key instanceof KeyValueHash) 
            this.#hashValue = this.#key.hashVal;
        return this.#hashValue;
    }


     //------------------------------------------------------
     // getValue
     //
     // PURPOSE: retuns the key value 
     //------------------------------------------------------
    get getValue() {
        return this.#key.getValue;
    }


     //------------------------------------------------------
     // equals
     //
     // PURPOSE: compare the current keyValueHash object to the
     //          LinkedList that is passed.
     // PARAMETERS:
     //     x - Linked List to compare
     // RETURNS: return the first occurence that found equals to x.
     //          If not found,it will return null.
     //------------------------------------------------------
    equals(x) {
        if (x instanceof LinkedList) {
            return x.search(this.#key.getValue);
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
            return x.delete(this.#key.getValue);
        }
    }


     //------------------------------------------------------
     // newValue
     //
     // PURPOSE: set new value to the private value field.
     // PARAMETERS:
     //     value - the new value that will be stored in value field.
     //------------------------------------------------------
    set newValue(value) {
        this.#value = value;
    }


     //------------------------------------------------------
     // content
     //
     // PURPOSE: return the value of this KeyValueHash object.
     //------------------------------------------------------
    get content() {
        return this.#value;
    }

}
module.exports = KeyValueHash;
