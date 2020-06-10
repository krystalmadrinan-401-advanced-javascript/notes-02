'use strict';


/*

For the notes module tests, you will need to assert the following:

- Nothing is logged to the console if there was no command given
- If the command (add) and data (the note) were both valid, assert that the console shows the output.

HINT: You will need to use a spy to check that console.log was properly called

*/


describe('module handles good input', () => {
    it('handles good input for -a', () => {
        let result = new Input(goodInput);
        expect(result.valid()).toBeTruthy();
    })
})