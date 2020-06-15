'use strict';

/*
x Exports a constructor function
- Compose a prototype method that can execute the correct (any) operation, given the above object
- How will you use that object to run the correct method?
  - You can predict that add won’t be the only action we’re going to have to handle…
- Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed
*/


class Notes {

    constructor(args) {
        if (args.valid()) {
            this.execute(args.command)
        } else {
            console.error('INVALID ARGS');
        }
    };

    execute(command) {
        switch (command.action) {
            case 'add':
                this.add(command.payload);
                break;
            default:
                break;
        }
    };

    add(payload) {
        let id = Math.floor(Math.random() * 100);

        console.log('ADDING A NOTE');
        console.log(id + ':', payload)
    };

    valid() {
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
}

module.exports = Notes;