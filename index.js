'use strict';

console.log('NOTESY 2020');


/* 
- Requires the library files you will be writing (input, notes)
- Instantiates an “Input” parser
- Sends properly parsed input to the Notes library for display
*/


const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

//parse command line arguments

let parsed = new Input(process.argv.slice(2));
let notes = new Notes(parsed);
