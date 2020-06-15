'use strict';


/*

For the notes module tests, you will need to assert the following:

- Nothing is logged to the console if there was no command given
- If the command (add) and data (the note) were both valid, assert that the console shows the output.

HINT: You will need to use a spy to check that console.log was properly called

*/

const Note = require('../lib/notes.js');
const Input = require('../lib/input.js');


// No data entered in command line (null)
const badInputA = new Input([]);

// Wrong input format in command line (no flag and/or data)
const badInputB = new Input(['wrong input']);

// Wrong flag entered in command line
const badInputC = new Input(['-e', 'wrong flag']);

// Data is not a string Input: number works and gets turned into string
const badInputD = new Input(['-a', '']);

// GOOD INPUT:

// Command line input is correct: '-a' with s a string
const goodInput = new Input(['-a', 'good input']);


// BAD INPUT TEST
describe('module handles bad input', () => {
    it('handles null', () => {
        let result = new Note(badInputA);
        expect(result.valid()).toBeFalsy();
    })

    it('handles wrong input format', () => {
        let result = new Note(badInputB);
        expect(result.valid()).toBeFalsy();
    })

    it('handles wrong flag ', () => {
        let result = new Note(badInputC);
        expect(result.valid()).toBeFalsy();
    })

    it('handles wrong data type', () => {
        let result = new Note(badInputD);
        expect(result.valid()).toBeFalsy();
    })
})


// GOOD INPUT TEST
describe('module handles good input', () => {
    it('handles good input for -a', () => {
        let result = new Note(goodInput);
        expect(result.valid()).toBeTruthy();
    })
})





