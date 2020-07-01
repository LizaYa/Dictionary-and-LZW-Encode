     // CLASS: Encoder
     //
     // Author: Yelizaveta Yashin
     //
     // REMARKS: This is a LZW encoder, it compresses
     //          text files by replacing portions of the text
     //          with a single integer.
     //
     //-----------------------------------------

'use strict';
let fs = require('fs');
let Dictionary = require('./Dictionary');
let StringHash = require('./StringHash');


class Encoder {
    #dictionary;
    #contents;
    #LZWvalue;
    #fileName;


    //------------------------------------------------------
    // constructor
    //
    // PURPOSE: create a dictionary and set private values.
    //          Open the file that should be encoded and call the encode() method.
    //------------------------------------------------------
    constructor() {

        this.#dictionary = new Dictionary();
        this.#LZWvalue = 95;        //initial value for LZW = 95.
        this.#fileName = process.argv[2];       //get the file name via argv
        this.#contents = fs.readFileSync(this.#fileName, "utf8");   //read the contents of the file
        this.fillDictionary()       //fill the dictionary for each single character
        this.encode()               //call method 'encode'
    }


    //------------------------------------------------------
    // fillDictionary
    //
    // PURPOSE: fill the dictionary that is associated with numerical 
    //          values for each single character. All ASCII characters values
    //          from 32 to 126 will be encoded as their ASCII value minus 32.
    //------------------------------------------------------
    fillDictionary() {
        for (let i = 32; i < 127; i++) {
            this.#dictionary.put(new StringHash(String.fromCharCode(i)), i - 32);
        }
    }


    //------------------------------------------------------
    // encode
    //
    // PURPOSE: This method opens a new output file, opens the input
    //          file and writed the algorithm for LZW to the output file.
    //------------------------------------------------------
    encode() {
        let currKey = "";
        let lastKey = 0;
        let string = "";
        let output = "";
        let counter = 0;
        fs.writeFileSync(this.#fileName + ".lzw", output);

        let characters = this.#contents.split("");
        let i = 0;
        while (i < characters.length) {
            string = characters[i];
            currKey = new StringHash(string);
            counter = i;
            while (this.#dictionary.contains(currKey)) {
                lastKey = currKey;
                counter++;
                string += characters[counter];
                currKey = new StringHash(string);
            }
            this.#dictionary.put(currKey, this.#LZWvalue);
            this.#LZWvalue++;
            let output = this.#dictionary.get(lastKey) + " ";
            fs.appendFileSync(this.#fileName + ".lzw", output);
            i = counter;
        }
        output = "-1";
        fs.appendFileSync(this.#fileName + ".lzw", output);
    }
}
module.exports = Encoder;