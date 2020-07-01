 //-----------------------------------------
     // NAME		: Yelizaveta Yashin  
     // 
     // REMARKS: Test class for HashTable implementation.
     //
     //-----------------------------------------


let assert = require('assert');
let HashTable = require('./HashTable');
let IntHash = require('./IntHash');
let StringHash = require('./StringHash');
let KeyValueHash = require('./KeyValueHash');

main()

function main() {
    testInsertHashTable()
    emptyHashTable()
    getValue()
    removeIntHash()
    keyValueHashTest()
}


//test if insertions are working
function testInsertHashTable(){
    let hashTable = new HashTable(8);

    let intItem1 = new IntHash(8);
    let stringItem1 = new StringHash("hi");

    hashTable.add(intItem1);
    hashTable.add(stringItem1);

    assert(hashTable.contains(intItem1) === true);
    assert(hashTable.contains(stringItem1) === true);
}


//test isEmpty method
function emptyHashTable() {
    //table is empty
    let hashTable = new HashTable(10);
    assert(hashTable.isEmpty() === true);

    //one item in the table
    let intItem = new IntHash(5);
    hashTable.add(intItem);
    assert(hashTable.isEmpty() === false);
}


//test if the right value is returned
function getValue() {
    let hashTable = new HashTable(8);
    let intItem1 = new IntHash(8);
    hashTable.add(intItem1);
    assert(hashTable.get(intItem1) === intItem1);
}


//test if a remove method is working
function removeIntHash() {
    let hashTable = new HashTable(8);
    let intItem1 = new IntHash(8);
    hashTable.add(intItem1);

    assert(hashTable.remove(intItem1) === true);
    assert(hashTable.contains(intItem1) === false);

}


//Test keyValueHash object with different operations.
function keyValueHashTest() {
    let hashTable = new HashTable(10);
    let int1 = new IntHash(3);
    let int2 = new IntHash(2);
    let item1 = new KeyValueHash(int1, "test1");
    let item2 = new KeyValueHash(item1, "test2");

    hashTable.add(item1);
    hashTable.add(item2);

    assert(hashTable.contains(item1) === true);
    assert(hashTable.contains(item2)=== true);

    assert(hashTable.remove(item2) === true);
}