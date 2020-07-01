     // CLASS: LinkedList
     //
     // Author: Yelizaveta Yashin
     //
     // REMARKS: Linked Lise class with insertions at front.
     //
     //-----------------------------------------

'use strict';   

let Node = require('./NodeLL');

class LinkedList {
    #head;

    //set head to null
    constructor() {
        this.#head = null;
    }


    //insert an item to the from of the linked list
    //and set next to the current head.
    insert(item) {
        this.#head = new Node(item, this.#head);
    }

    //return the first occurrence of item that was passed.
    //If not found, return null.
    search(item) {
        let curr = this.#head;
        while (curr !== null && curr.data.getValue !== item) {
            curr = curr.next;
        }
        if (curr !== null) {
           return curr.data;
        }
        else return null;
    }

    //passed an item and delete it from the Linked list.
    delete(item) {
        let curr = this.#head;
        let prev = null;
        let result = false;

        while (curr != null && curr.data.getValue !== item) {
            prev = curr;
            curr = curr.next;
        }

        if (prev == null && curr != null && curr.data.getValue === item) {
            this.#head = curr.next;
            result = true;
        }

        else if (curr != null && prev != null && curr.data.getValue === item) {
            prev.setNext = curr.next;
            result = true;
        }
        return result;
    }

    listEmpty() {
        return this.#head == null;
    }
}

module.exports = LinkedList;