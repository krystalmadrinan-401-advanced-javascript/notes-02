'use strict';

const minimist = require('minimist');

/*
- Exports a constructor function
- Uses minimist (or any other CLI library) to read command line arguments
- Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
- Returns an instance (object) containing the action to perform and the payload for the action
- For example:

 {
    action: "add";
    payload: "This is a really cool thing that I wanted to remember for later"
  }

*/




// function a does a thing

// a.valid() telling us if thing was valid

// Exporting a's constructor has access to:
// a.command = { action: "add", payload: "string" }
// a.valid() function tells us if a.command makes sense 



// Exporting a constructor function

function Input(args) {
    let formatted = minimist(args);

    let objectKeyArr = Object.keys(formatted);
    this.command = {};

    for (let i = 0; i < objectKeyArr.length; i++) {
        let key = objectKeyArr[i];
        let val = formatted[key];

        console.log('key:', key, 'val:', val);

        switch (key) {
            case 'a':
            case 'add':
                this.command = { action: 'add', payload: val }
                return;
            default:
                break;
        }
    }
}


Input.prototype.valid = function () {
    if (!this.command) {
        return false;
    }

    if (!this.command.action) {
        return false;
    }

    switch (this.command.action) {
        case 'add':
            if (typeof this.command.payload === 'string') {
                return true;
            } else {
                return false;
            }
        default:
            break;
    }
};


module.exports = Input;
