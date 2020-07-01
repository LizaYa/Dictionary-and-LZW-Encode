     // CLASS: NodeLL
     //
     // Author: Yelizaveta Yashin
     //
	 // REMARKS: Node class that stores any data in data
     //          private field and the next node and a
     //          private field next.
     //
     //-----------------------------------------

'use strict';

class NodeLL {
    #dataVal;
    #next;
   
    constructor(data, next) {
        this.#dataVal = data;
        this.#next = next;
    }

    //return data of current node
    get data() {
        return this.#dataVal;
    }

    //return next node
    get next() {
        return this.#next;
    }

    //set next node
    set setNext(nextItem) {
        this.#next = nextItem;
    }
}

module.exports = NodeLL;