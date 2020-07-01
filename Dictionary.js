     // CLASS: Dictionary
     //
     // Author: Yelizaveta Yashin
     //
     // REMARKS: This dictionary class contains a hashTable.
     // Each entry is a key-value pair, and there can't be 
     // two key-value pair in the same dictionary with the same key.
     //
     //-----------------------------------------

'use strict';

let HashTable = require('./HashTable');
let KeyValueHash = require('./KeyValueHash');
let Hashable = require('./Hashable');

class Dictionary {
    #hashTable;


     //------------------------------------------------------
     // constructor
     //
     // PURPOSE:    creates a HashTable of size 1000.
     //------------------------------------------------------
    constructor()    {
        this.#hashTable = new HashTable(1000);
    }

    
     //------------------------------------------------------
     // put
     //
     // PURPOSE: takes a hashable key k and a value v
     //          and adds it to the hash table if it doesnt exist.
     //          If a key-value pair with k as the key exists,
     //          the current value is replaced with v.
     // PARAMETERS:
     //     k - key
     //     v - value
     //------------------------------------------------------
    put(k, v) {
        if (k instanceof Hashable) {
            let keyValuePair = new KeyValueHash(k, v);

            let result = this.#hashTable.contains(keyValuePair);

            if (result === true) {
                result = this.#hashTable.get(keyValuePair);
                result.newValue = v;
            }
            else {
                this.#hashTable.add(keyValuePair);
            }
        }
       else throw new Error("The value is not of type Hashable.");
    }



     //------------------------------------------------------
     // get
     //
     // PURPOSE: take a hashable key k and returns the value v
     //          assiciated with it, if it appears in the dictionary.
     //          Otherwise, throw an error.
     // PARAMETERS:
     //     x - key
     // Returns: value v
     //------------------------------------------------------
    get(x) {
        if (x instanceof Hashable)
        {
            if (!this.#hashTable.isEmpty()) {
                let arbitraryValue = new KeyValueHash(x, 33);
                return this.#hashTable.get(arbitraryValue).content;
                
            }
            { throw new Error("The Hash Table is empty."); }
        }
        else throw new Error("The value is not of type Hashable.");
    }


     //------------------------------------------------------
     // contains
     //
     // PURPOSE: take a hashable key x and determines if it is a 
     //          key in the dictionary.
     // PARAMETERS:
     //     x - key
     // Returns: boolean value
     //------------------------------------------------------
    contains(x) {
        if (x instanceof Hashable) {
            return this.#hashTable.contains(x);
        }
    }


     //------------------------------------------------------
     // isEmpty
     //
     // PURPOSE: return a boolean depending on whether the dictionary 
     //          is empty or not.
     // Returns: boolean value
     //------------------------------------------------------
    isEmpty() {
        return this.#hashTable.isEmpty();
    }
}

module.exports = Dictionary;

